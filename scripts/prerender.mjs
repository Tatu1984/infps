/**
 * Post-build prerenderer.
 *
 * The site is a client-rendered Vite SPA: every route is served the same
 * `dist/index.html` shell, whose static <title> and <link rel="canonical">
 * point at the homepage. Search engines read that initial HTML and conclude
 * every URL is a duplicate of `/` (→ "Alternate page with proper canonical",
 * "Crawled – currently not indexed"), so deep pages don't get indexed.
 *
 * This script fixes that without touching any component or making the app
 * SSR-safe: it serves the built `dist/`, opens each sitemap route in headless
 * Chromium, waits for React to mount and `usePageMeta` to set the correct
 * per-route <title>/description/canonical/OG tags + inject JSON-LD, then writes
 * the fully-rendered HTML to `dist/<route>/index.html`. Crawlers now receive a
 * real page — correct canonical, full article text, structured data — on the
 * first byte. The client bundle still boots and takes over for users.
 *
 * Resilient by design: any failure logs a loud warning and exits 0 so a
 * Chromium hiccup on the build host can never break the deploy (worst case we
 * ship the same SPA we ship today).
 */
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const ORIGIN = "https://www.infinititechpartners.com";
const PORT = 4188;

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".json": "application/json",
  ".map": "application/json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".webmanifest": "application/manifest+json",
};

const warn = (msg, err) => {
  console.warn("\n⚠️  [prerender] " + msg);
  if (err) console.warn(err?.stack || String(err));
};

async function getRoutes() {
  const xml = await readFile(join(ROOT, "public", "sitemap.xml"), "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const seen = new Set();
  const routes = [];
  for (const loc of locs) {
    let path = loc.replace(ORIGIN, "").replace(/\/+$/, "") || "/";
    if (!path.startsWith("/")) path = "/" + path;
    if (path.includes(".")) continue; // skip any asset-looking URL
    if (!seen.has(path)) {
      seen.add(path);
      routes.push(path);
    }
  }
  return routes;
}

function startServer(shellHtml) {
  const server = createServer(async (req, res) => {
    try {
      const path = decodeURIComponent((req.url || "/").split("?")[0]);
      const ext = extname(path).toLowerCase();
      if (ext) {
        const filePath = join(DIST, path);
        if (existsSync(filePath)) {
          res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
          res.end(await readFile(filePath));
          return;
        }
        res.writeHead(404);
        res.end("not found");
        return;
      }
      // Any extension-less route → the raw SPA shell, so the client app boots
      // and renders this route fresh (never a half-written prerender output).
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(shellHtml);
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function main() {
  if (!existsSync(join(DIST, "index.html"))) {
    warn("dist/index.html missing — did `vite build` run? Skipping prerender.");
    return;
  }

  let puppeteer;
  try {
    puppeteer = (await import("puppeteer")).default;
  } catch (err) {
    warn("puppeteer not installed — skipping prerender (SPA still deploys).", err);
    return;
  }

  const shellHtml = await readFile(join(DIST, "index.html"), "utf8");
  const routes = await getRoutes();
  console.log(`[prerender] ${routes.length} routes from sitemap.xml`);

  const server = await startServer(shellHtml);
  let browser;
  let ok = 0;
  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });

    const renderRoute = async (route) => {
      const expected = ORIGIN + (route === "/" ? "/" : route);
      const page = await browser.newPage();
      try {
        // Block all external requests (fonts, GA4, Clarity) — cosmetic for an
        // HTML snapshot and a common cause of networkidle hangs.
        await page.setRequestInterception(true);
        page.on("request", (r) =>
          r.url().startsWith(`http://localhost:${PORT}`) ? r.continue() : r.abort()
        );

        await page.goto(`http://localhost:${PORT}${route}`, {
          waitUntil: "domcontentloaded",
          timeout: 45000,
        });
        // React has mounted...
        await page
          .waitForFunction(() => document.documentElement.dataset.reactMounted === "true", {
            timeout: 15000,
          })
          .catch(() => warn(`react mount sentinel timed out for ${route}`));
        // ...and usePageMeta has rewritten the canonical to this route.
        await page
          .waitForFunction(
            (exp) =>
              document.querySelector('link[rel="canonical"]')?.getAttribute("href") === exp,
            { timeout: 8000 },
            expected
          )
          .catch(() => warn(`canonical sentinel timed out for ${route} (expected ${expected})`));
        // settle: let JSON-LD / breadcrumb injection finish
        await new Promise((r) => setTimeout(r, 350));

        const html = await page.content();
        const outDir = route === "/" ? DIST : join(DIST, route);
        await mkdir(outDir, { recursive: true });
        await writeFile(join(outDir, "index.html"), html, "utf8");
        console.log(`[prerender] ✓ ${route}`);
      } finally {
        await page.close().catch(() => {});
      }
    };

    for (const route of routes) {
      let done = false;
      for (let attempt = 1; attempt <= 2 && !done; attempt++) {
        try {
          await renderRoute(route);
          ok++;
          done = true;
        } catch (err) {
          if (attempt === 2) {
            warn(`failed to prerender ${route} after 2 attempts — leaving SPA fallback.`, err);
          } else {
            warn(`retry ${route} (attempt 1 failed: ${err?.message || err})`);
          }
        }
      }
    }
  } finally {
    if (browser) await browser.close().catch(() => {});
    server.close();
  }
  console.log(`[prerender] done: ${ok}/${routes.length} routes written.`);
}

main()
  .catch((err) => warn("prerender crashed — deploying SPA as-is.", err))
  .finally(() => process.exit(0));
