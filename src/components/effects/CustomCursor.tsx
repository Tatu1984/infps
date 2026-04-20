import { useState, useEffect, useRef } from "react";
import { isTouchDevice, rafThrottle } from "@/utils/device";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const hoveredRef = useRef(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const move = rafThrottle((e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    });
    const leave = () => setHidden(true);

    // Use event delegation on document instead of adding per-element listeners
    const onEnter = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("a, button, .tilt-card, .magnetic-button")) {
        if (!hoveredRef.current) {
          hoveredRef.current = true;
          setHovered(true);
        }
      }
    };
    const onLeave = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("a, button, .tilt-card, .magnetic-button")) {
        const related = e.relatedTarget as Element | null;
        if (!related?.closest("a, button, .tilt-card, .magnetic-button")) {
          hoveredRef.current = false;
          setHovered(false);
        }
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div
        className={`custom-cursor ${hidden ? "hidden" : ""} ${hovered ? "hovered" : ""}`}
        style={{ left: position.x, top: position.y }}
      />
      <div
        className={`custom-cursor-dot ${hidden ? "hidden" : ""}`}
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
};
