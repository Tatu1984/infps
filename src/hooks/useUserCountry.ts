import { useEffect, useState } from "react";

type Status = "loading" | "ready" | "error";

interface UserCountry {
  country: string | null;
  ip: string | null;
  status: Status;
}

const ALLOWED_PAYNOW_COUNTRIES = new Set(["US", "GB"]);

const STORAGE_KEY = "ip_country_v2";
const TTL_MS = 24 * 60 * 60 * 1000;

interface Cached {
  ip: string | null;
  code: string | null;
  t: number;
}

export const useUserCountry = (): UserCountry & { isPayNowAllowed: boolean } => {
  const [country, setCountry] = useState<string | null>(null);
  const [ip, setIp] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;

    const cached = readCache();
    if (cached) {
      setCountry(cached.code);
      setIp(cached.ip);
      setStatus("ready");
      return;
    }

    fetch("https://ipapi.co/json/", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`ipapi ${res.status}`);
        return res.json();
      })
      .then((data: { country_code?: string; ip?: string }) => {
        if (cancelled) return;
        const code = (data?.country_code || "").toUpperCase() || null;
        const detectedIp = data?.ip || null;
        setCountry(code);
        setIp(detectedIp);
        setStatus("ready");
        writeCache({ ip: detectedIp, code, t: Date.now() });
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const allowedIps = parseList(import.meta.env.VITE_PAYNOW_ALLOWED_IPS as string | undefined);
  const devOverride =
    import.meta.env.VITE_PAYNOW_DEV_OVERRIDE === "true" ||
    (typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("paynow") === "1");

  const ipAllowed = ip !== null && allowedIps.includes(ip);
  const countryAllowed = country !== null && ALLOWED_PAYNOW_COUNTRIES.has(country);

  return {
    country,
    ip,
    status,
    isPayNowAllowed: devOverride || ipAllowed || countryAllowed,
  };
};

const parseList = (raw: string | undefined): string[] =>
  (raw || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

const readCache = (): Cached | null => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Cached;
    if (Date.now() - parsed.t > TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
};

const writeCache = (value: Cached) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // sessionStorage may be unavailable (e.g. private mode); harmless
  }
};
