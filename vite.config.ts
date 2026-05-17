import { defineConfig } from "vitest/config";
import { loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";
import type { IncomingMessage, ServerResponse } from "http";

// Dev-only plugin: dispatches /api/* requests to handler files in /api,
// so that Vercel-style serverless routes work under `vite dev`.
const apiDevPlugin = (mode: string): Plugin => {
  const env = loadEnv(mode, process.cwd(), "");
  for (const [k, v] of Object.entries(env)) {
    if (process.env[k] === undefined) process.env[k] = v;
  }

  return {
    name: "api-dev-middleware",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api/")) return next();

        const route = req.url.split("?")[0].replace(/^\/api\//, "");
        const candidates = [
          path.resolve(process.cwd(), "api", `${route}.ts`),
          path.resolve(process.cwd(), "api", `${route}.js`),
          path.resolve(process.cwd(), "api", route, "index.ts"),
          path.resolve(process.cwd(), "api", route, "index.js"),
        ];
        const handlerPath = candidates.find((p) => fs.existsSync(p));
        if (!handlerPath) return next();

        try {
          const mod = await server.ssrLoadModule(handlerPath);
          const handler = mod.default;
          if (typeof handler !== "function") {
            res.statusCode = 500;
            res.end("Handler is not a function");
            return;
          }

          const body = await readBody(req);
          const shimReq = {
            method: req.method,
            url: req.url,
            headers: req.headers,
            body,
          };
          const shimRes = makeShimResponse(res);

          await handler(shimReq, shimRes);
        } catch (err) {
          console.error(`[api-dev] ${req.url} failed:`, err);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                error: err instanceof Error ? err.message : "Unknown error",
              })
            );
          }
        }
      });
    },
  };
};

const readBody = (req: IncomingMessage): Promise<unknown> =>
  new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (c: Buffer) => chunks.push(c));
    req.on("end", () => {
      if (chunks.length === 0) return resolve(undefined);
      const raw = Buffer.concat(chunks).toString("utf8");
      const type = req.headers["content-type"] || "";
      if (type.includes("application/json")) {
        try {
          resolve(JSON.parse(raw));
        } catch (e) {
          reject(e);
        }
      } else {
        resolve(raw);
      }
    });
    req.on("error", reject);
  });

const makeShimResponse = (res: ServerResponse) => {
  const shim = {
    status(code: number) {
      res.statusCode = code;
      return shim;
    },
    json(body: unknown) {
      if (!res.hasHeader("Content-Type")) {
        res.setHeader("Content-Type", "application/json");
      }
      res.end(JSON.stringify(body));
    },
    send(body: string) {
      res.end(body);
    },
    setHeader(name: string, value: string) {
      res.setHeader(name, value);
    },
  };
  return shim;
};

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), apiDevPlugin(mode)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Warn on chunks > 500KB
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — changes rarely, gets long-lived cache
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Animation library — separate so pages don't bloat if Motion is tree-shaken per page
          "vendor-motion": ["motion"],
          // Icon library
          "vendor-icons": ["lucide-react"],
          // Carousel
          "vendor-carousel": ["embla-carousel-react", "embla-carousel-autoplay"],
        },
      },
    },
    // Minify CSS in production
    cssMinify: true,
    // Use esbuild for faster minification (default in Vite, explicit for clarity)
    minify: "esbuild",
    // Target modern browsers — smaller output, no legacy polyfills
    target: "es2020",
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "motion", "lucide-react"],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      exclude: ["src/data/**", "src/types/**", "src/styles/**", "src/test/**"],
    },
  },
}));
