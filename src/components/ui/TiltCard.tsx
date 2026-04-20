import { useRef, useState, useCallback, ReactNode } from "react";
import { rafThrottle } from "@/utils/device";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMouseMove = useCallback(
    rafThrottle((e: React.MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setTransform(
        `perspective(1000px) rotateX(${(y - 0.5) * -20}deg) rotateY(${(x - 0.5) * 20}deg) scale3d(1.02, 1.02, 1.02)`
      );
      setGlare({ x: x * 100, y: y * 100 });
    }),
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)");
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      <div
        className="tilt-card-glare"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.2) 0%, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
};
