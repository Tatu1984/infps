import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.css";
import App from "./App";

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
