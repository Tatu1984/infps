import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  /** Path-relative or absolute canonical. Defaults to current location. */
  canonical?: string;
  /** Comma-separated keyword list. Optional — search engines mostly ignore it, but
   *  some scrapers and internal tools still surface it. */
  keywords?: string;
}

const SITE_ORIGIN = "https://www.infinititechpartners.com";

const setMeta = (selector: string, attr: "content" | "href", value: string) => {
  const el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (el) el.setAttribute(attr, value);
};

/**
 * Sets per-route <title>, description, canonical and OG/Twitter meta.
 * Falls back to the index.html defaults when a page omits values.
 *
 * Why a hook instead of react-helmet: no extra dependency, no provider, and
 * keeps the route metadata co-located with the page that owns the content.
 */
export const usePageMeta = ({ title, description, canonical, keywords }: PageMeta) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    setMeta('meta[name="title"]', "content", title);
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="twitter:title"]', "content", title);
    setMeta('meta[property="twitter:description"]', "content", description);

    if (keywords) {
      setMeta('meta[name="keywords"]', "content", keywords);
    }

    const canonicalUrl = canonical
      ? canonical.startsWith("http") ? canonical : `${SITE_ORIGIN}${canonical}`
      : `${SITE_ORIGIN}${window.location.pathname}`;
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="twitter:url"]', "content", canonicalUrl);

    return () => {
      // Restore the previous title so back-navigation in SPA mode doesn't leave
      // the user on, say, the Contact page title when they're already home.
      document.title = previousTitle;
    };
  }, [title, description, canonical, keywords]);
};
