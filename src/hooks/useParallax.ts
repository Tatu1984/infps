import { useRef, useState, useEffect } from "react";
import { isTouchDevice } from "@/utils/device";

export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Disable parallax on touch devices for better performance
    if (isTouchDevice()) return;

    let rafId: number | null = null;
    let isVisible = true;
    let lastOffset = 0;

    const compute = () => {
      rafId = null;
      if (!ref.current || !isVisible) return;
      const rect = ref.current.getBoundingClientRect();
      // Skip offscreen elements — no point recomputing transforms the user can't see.
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      const scrolled = window.innerHeight - rect.top;
      const next = scrolled * speed * 0.1;
      if (Math.abs(next - lastOffset) < 0.5) return;
      lastOffset = next;
      setOffset(next);
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(compute);
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) handleScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    compute();
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [speed]);

  return [ref, offset] as const;
};
