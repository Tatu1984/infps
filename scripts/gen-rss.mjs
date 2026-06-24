/**
 * Generates public/rss.xml from src/data/insights.ts.
 *
 * Runs as the npm "prebuild" step, so the feed is regenerated on every build
 * and Vite copies it from public/ into dist/ — no manual upkeep. Add a post to
 * insights.ts and the feed updates itself.
 *
 * insights.ts is pure, import-free data, so esbuild can transpile it in
 * isolation and we import the result directly.
 */
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { transform } from "esbuild";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ORIGIN = "https://www.infinititechpartners.com";

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const rfc822 = (iso) => new Date(iso + "T09:00:00Z").toUTCString();

async function main() {
  const ts = await readFile(join(ROOT, "src/data/insights.ts"), "utf8");
  const { code } = await transform(ts, { loader: "ts", format: "esm" });
  const mod = await import(
    "data:text/javascript;base64," + Buffer.from(code).toString("base64")
  );
  const insights = [...mod.insights].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );

  const items = insights
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${ORIGIN}/insights/${p.slug}</link>
      <guid isPermaLink="true">${ORIGIN}/insights/${p.slug}</guid>
      <pubDate>${rfc822(p.publishedAt)}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.description)}</description>
    </item>`
    )
    .join("\n");

  const lastBuild = insights.length ? rfc822(insights[0].publishedAt) : rfc822("2026-01-01");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Infiniti Tech Partners — Insights</title>
    <link>${ORIGIN}/insights</link>
    <description>Engineering, cloud, security and AI insights for growth-stage CTOs in the US and UK.</description>
    <language>en-us</language>
    <atom:link href="${ORIGIN}/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  await writeFile(join(ROOT, "public", "rss.xml"), xml, "utf8");
  console.log(`[gen-rss] wrote public/rss.xml (${insights.length} items)`);
}

main().catch((err) => {
  console.warn("[gen-rss] failed:", err?.message || err);
  process.exit(0); // never break the build over the feed
});
