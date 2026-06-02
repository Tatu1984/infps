// Lightweight analytics loader. Injects Google Analytics 4 and Microsoft
// Clarity ONLY when their IDs are present in the environment, so the site
// stays clean until you paste real IDs into .env.local — no code change
// needed to switch them on.
//
//   VITE_GA4_ID      e.g. "G-XXXXXXXXXX"  (analytics.google.com → Admin → Data Streams)
//   VITE_CLARITY_ID  e.g. "abcd1234ef"    (clarity.microsoft.com → Settings → project id)
//
// Both are free. Clarity gives you heatmaps + session recordings; GA4 gives
// you traffic sources and the conversion events fired from the contact form
// ("generate_lead", "book_call_click").

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID as string | undefined;

function loadGA4(id: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);
}

function loadClarity(id: string) {
  (function (c: Window, l: Document, a: string, r: string) {
    c.clarity =
      c.clarity ||
      function () {
        // eslint-disable-next-line prefer-rest-params
        (c.clarity!.q = c.clarity!.q || []).push(arguments);
      };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + a;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode!.insertBefore(t, y);
  })(window as Window & { clarity: { q?: unknown[] } & ((...a: unknown[]) => void) }, document, id, "script");
}

export function initAnalytics() {
  if (GA4_ID) loadGA4(GA4_ID);
  if (CLARITY_ID) loadClarity(CLARITY_ID);
}
