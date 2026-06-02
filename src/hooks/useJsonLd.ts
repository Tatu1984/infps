import { useEffect } from "react";

const SITE_ORIGIN = "https://www.infinititechpartners.com";

/**
 * Injects an arbitrary JSON-LD object into <head> for the lifetime of the
 * component, then removes it on unmount. `id` must be unique per node so
 * multiple schemas can coexist on one page (e.g. BlogPosting + Breadcrumb).
 */
export const useJsonLd = (id: string, data: object | null) => {
  useEffect(() => {
    if (!data) return;
    document.getElementById(id)?.remove();
    const node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = id;
    node.text = JSON.stringify(data);
    document.head.appendChild(node);
    return () => {
      document.getElementById(id)?.remove();
    };
    // Re-inject whenever the serialized data changes.
  }, [id, JSON.stringify(data)]);
};

/**
 * Convenience wrapper that builds a schema.org BreadcrumbList from an ordered
 * list of crumbs and injects it. Pass path-relative hrefs (e.g. "/insights").
 * Surfaces breadcrumb trails in Google results — a free SERP-real-estate win.
 */
export const useBreadcrumb = (
  crumbs: { name: string; href: string }[],
  id = "breadcrumb-jsonld"
) => {
  const data =
    crumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: c.href.startsWith("http") ? c.href : `${SITE_ORIGIN}${c.href}`,
          })),
        }
      : null;
  useJsonLd(id, data);
};
