import { useEffect, useState } from "react";
import { Button } from "./button";

export const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      setIsLight(true);
    } else {
      // default: night mode (dark)
      document.documentElement.removeAttribute("data-theme");
      setIsLight(false);
    }
  }, []);

  const toggle = () => {
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
      setIsLight(false);
      // notify effects to update colors
      window.dispatchEvent(new Event("themechange"));
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setIsLight(true);
      // notify effects to update colors
      window.dispatchEvent(new Event("themechange"));
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isLight ? "Switch to night" : "Switch to day"}
      onClick={toggle}
      className={`theme-toggle ${isLight ? 'is-light' : ''}`}
      title={isLight ? 'Day mode' : 'Night mode'}
    >
      {isLight ? (
        /* Sun Icon */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="M4.93 4.93l1.41 1.41" />
            <path d="M17.66 17.66l1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="M4.93 19.07l1.41-1.41" />
            <path d="M17.66 6.34l1.41-1.41" />
          </g>
        </svg>
      ) : (
        /* Moon Icon */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            fill="currentColor"
          />
        </svg>
      )}
    </Button>
  );
};

export default ThemeToggle;
