import { useEffect, useRef } from "react";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS_HREF = "https://assets.calendly.com/assets/external/widget.css";

export interface CalendlyBooking {
  eventUri: string;
  inviteeUri: string;
}

interface CalendlyEmbedProps {
  url: string;
  height?: number;
  prefill?: { name?: string; email?: string };
  onBooked: (booking: CalendlyBooking) => void;
}

interface CalendlyEventData {
  event?: string;
  payload?: {
    event?: { uri?: string };
    invitee?: { uri?: string };
  };
}

export const CalendlyEmbed = ({ url, height = 700, prefill, onBooked }: CalendlyEmbedProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!document.querySelector(`link[href="${CALENDLY_CSS_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS_HREF;
      document.head.appendChild(link);
    }
    if (!document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (typeof event.origin !== "string" || !event.origin.includes("calendly.com")) return;
      const data = event.data as CalendlyEventData | undefined;
      if (!data || data.event !== "calendly.event_scheduled") return;
      const eventUri = data.payload?.event?.uri ?? "";
      const inviteeUri = data.payload?.invitee?.uri ?? "";
      if (eventUri || inviteeUri) {
        onBooked({ eventUri, inviteeUri });
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [onBooked]);

  const fullUrl = (() => {
    const params = new URLSearchParams();
    if (prefill?.name) params.set("name", prefill.name);
    if (prefill?.email) params.set("email", prefill.email);
    params.set("hide_event_type_details", "0");
    params.set("hide_gdpr_banner", "1");
    const qs = params.toString();
    return qs ? `${url}?${qs}` : url;
  })();

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget"
      data-url={fullUrl}
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  );
};
