import { useState, useEffect } from "react";
import { rafThrottle } from "@/utils/device";

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = rafThrottle((e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    });
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return position;
};
