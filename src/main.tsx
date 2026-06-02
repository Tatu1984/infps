import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.css";
import App from "./App";
import { initAnalytics } from "@/utils/analytics";

// Load GA4 + Microsoft Clarity if their IDs are configured (see utils/analytics).
initAnalytics();

// Mirror document visibility onto the <html> element so CSS can pause
// infinite animations (aurora, sphere pulse, ring rotate, ...) on hidden tabs.
const syncVisibility = () => {
  document.documentElement.dataset.visibility = document.hidden ? "hidden" : "visible";
};
syncVisibility();
document.addEventListener("visibilitychange", syncVisibility);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Hand off from the static hero (#ssr-hero in index.html) to the React app.
// We wait for the next animation frame so React has at least pushed its first
// paint to the DOM, then fade the fallback out via the CSS rule keyed on
// data-react-mounted, then remove it from the DOM entirely.
requestAnimationFrame(() => {
  document.documentElement.dataset.reactMounted = "true";
  const fallback = document.getElementById("ssr-hero");
  if (fallback) {
    setTimeout(() => fallback.remove(), 260);
  }
});
