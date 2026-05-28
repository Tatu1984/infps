import { useEffect, useRef } from "react";

export const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      const bar = barRef.current;
      if (!bar) return;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
      // Mutate the DOM directly — avoids a React re-render on every scroll event.
      bar.style.width = `${progress}%`;
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress">
      <div ref={barRef} className="scroll-progress-bar" style={{ width: "0%" }} />
    </div>
  );
};
