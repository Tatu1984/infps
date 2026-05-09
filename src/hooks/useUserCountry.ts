import { useEffect, useState } from "react";

type Status = "loading" | "ready" | "error";

interface UserCountry {
  country: string | null;
  status: Status;
}

const ALLOWED_PAYNOW_COUNTRIES = new Set(["US", "GB"]);

const STORAGE_KEY = "ip_country_v1";
const TTL_MS = 24 * 60 * 60 * 1000;

export const useUserCountry = (): UserCountry & { isPayNowAllowed: boolean } => {
  const [country, setCountry] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;

    const cached = readCache();
    if (cached) {
      setCountry(cached);
      setStatus("ready");
      return;
    }

    fetch("https://ipapi.co/json/", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`ipapi ${res.status}`);
        return res.json();
      })
      .then((data: { country_code?: string }) => {
        if (cancelled) return;
        const code = (data?.country_code || "").toUpperCase() || null;
        setCountry(code);
        setStatus("ready");
        if (code) writeCache(code);
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const devOverride =
    import.meta.env.VITE_PAYNOW_DEV_OVERRIDE === "true" ||
    (typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("paynow") === "1");

  return {
    country,
    status,
    isPayNowAllowed:
      devOverride || (country !== null && ALLOWED_PAYNOW_COUNTRIES.has(country)),
  };
};

const readCache = (): string | null => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { code: string; t: number };
    if (Date.now() - parsed.t > TTL_MS) return null;
    return parsed.code || null;
  } catch {
    return null;
  }
};

const writeCache = (code: string) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ code, t: Date.now() }));
  } catch {
    // sessionStorage may be unavailable (e.g. private mode); harmless
  }
};
