import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
});
