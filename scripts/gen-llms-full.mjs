/**
 * Generates public/llms-full.txt from src/data/insights.ts + insight-faqs.ts.
 *
 * This is the "full content" companion to the hand-maintained public/llms.txt:
 * a single Markdown file containing the complete text of every insight (plus its
 * FAQs), so an LLM that supports the llms.txt convention can pull the whole
 * knowledge base in one fetch instead of crawling 21 pages.
 *
 * Runs as part of the npm "prebuild" step alongside gen-rss, so it regenerates
 * on every build and Vite copies it from public/ into dist/. Add a post to
 * insights.ts and this file updates itself.
 *
 * insights.ts / insight-faqs.ts are pure, import-free data, so esbuild can
 * transpile each in isolation and we import the result directly.
 */
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { transform } from "esbuild";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ORIGIN = "https://www.infinititechpartners.com";

/** Transpile a pure-data .ts module and import it from a data: URL. */
async function importData(relPath) {
  const ts = await readFile(join(ROOT, relPath), "utf8");
  const { code } = await transform(ts, { loader: "ts", format: "esm" });
  return import("data:text/javascript;base64," + Buffer.from(code).toString("base64"));
}

/** Rewrite inline `[text](/path)` links to absolute URLs so the link graph survives. */
const absolutize = (text) =>
  String(text).replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, (_, label, path) => `[${label}](${ORIGIN}${path})`);

const renderBody = (body) =>
  Array.isArray(body)
    ? body.map((item) => `- ${absolutize(item)}`).join("\n")
    : absolutize(body);

async function main() {
  const [{ insights }, faqsMod] = await Promise.all([
    importData("src/data/insights.ts"),
    importData("src/data/insight-faqs.ts").catch(() => ({ insightFaqs: {} })),
  ]);
  const insightFaqs = faqsMod.insightFaqs ?? {};

  const sorted = [...insights].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  const header = `# Infiniti Tech Partners — Full Content

> Infiniti Tech Partners is a senior engineering and AI consulting firm for growth-stage SaaS companies in the US and UK, operating as a fractional engineering partner. This file contains the full text of every published insight, intended for LLMs that want the complete knowledge base in a single fetch. Index: ${ORIGIN}/llms.txt · Contact: hello@infinititechpartners.com

`;

  const articles = sorted
    .map((p) => {
      const sections = p.sections
        .map((s) => (s.heading ? `### ${s.heading}\n\n${renderBody(s.body)}` : renderBody(s.body)))
        .join("\n\n");

      const faqs = insightFaqs[p.slug] ?? [];
      const faqBlock = faqs.length
        ? `\n\n#### Frequently asked questions\n\n` +
          faqs.map((f) => `**${f.question}**\n\n${f.answer}`).join("\n\n")
        : "";

      return `## ${p.title}

Source: ${ORIGIN}/insights/${p.slug}
Published: ${p.publishedAt} · Category: ${p.category} · ${p.readMinutes} min read

${sections}${faqBlock}`;
    })
    .join("\n\n---\n\n");

  await writeFile(join(ROOT, "public", "llms-full.txt"), header + articles + "\n", "utf8");
  console.log(`[gen-llms-full] wrote public/llms-full.txt (${sorted.length} insights)`);
}

main().catch((err) => {
  console.warn("[gen-llms-full] failed:", err?.message || err);
  process.exit(0); // never break the build over this file
});
