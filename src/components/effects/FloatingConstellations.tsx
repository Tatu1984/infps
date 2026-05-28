import { useEffect, useState } from "react";
import { Constellation, CONSTELLATIONS } from "./Constellation";

type ConstellationName = keyof typeof CONSTELLATIONS;

interface FloatingConstellationProps {
  name: ConstellationName;
  opacity?: number;
}

export const FloatingConstellation = ({
  name,
  opacity = 0.5,
}: FloatingConstellationProps) => {
  const [progress, setProgress] = useState(0);
  const [bounceConfig] = useState(() => ({
    rotationMultiplier: 1 + Math.random() * 2, // 1-3 full rotations
    rotationDirection: Math.random() > 0.5 ? 1 : -1, // clockwise or counter-clockwise
    bounceFrequency: 2 + Math.random() * 3, // 2-5 bounces
    bounceAmplitude: 0.15 + Math.random() * 0.25, // 15-40% of width
    phase: Math.random() * Math.PI * 2, // random starting phase
    startX: 0.1 + Math.random() * 0.3, // start 10-40% from left
    // Vertical randomness config
    verticalBounceFrequency: 1.5 + Math.random() * 2.5, // 1.5-4 vertical waves
    verticalBounceAmplitude: 0.08 + Math.random() * 0.15, // 8-23% vertical deviation
    verticalPhase: Math.random() * Math.PI * 2, // random vertical starting phase
  }));

  useEffect(() => {
    let rafId: number | null = null;
    const update = () => {
      rafId = null;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setProgress(Math.min(1, Math.max(0, scrollProgress)));
    };
    const handleScroll = () => {
      if (rafId !== null || document.hidden) return;
      rafId = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    update();
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const constellation = CONSTELLATIONS[name];
  if (!constellation) return null;

  const size = 250;

  // Y moves from top to bottom with vertical bouncing
  // Vertical bounce dampens towards end to ensure it finishes at bottom
  const verticalBounce = Math.sin(progress * Math.PI * bounceConfig.verticalBounceFrequency + bounceConfig.verticalPhase) * bounceConfig.verticalBounceAmplitude * (1 - progress * 0.3);
  const yPos = `calc(160px + (100vh - ${size}px - 160px) * ${progress + verticalBounce})`;

  // X bounces horizontally using sine wave with random config
  const bounceOffset = Math.sin(progress * Math.PI * bounceConfig.bounceFrequency + bounceConfig.phase) * bounceConfig.bounceAmplitude;
  const xPos = `calc((100vw - ${size}px) * ${bounceConfig.startX + 0.5 * progress + bounceOffset})`;

  const rotation = progress * 360 * bounceConfig.rotationMultiplier * bounceConfig.rotationDirection;

  return (
    <div className="floating-constellations">
      <div
        className="floating-constellation"
        style={{
          left: xPos,
          top: yPos,
          opacity,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <Constellation
          stars={constellation.stars}
          connections={constellation.connections}
          width={size}
          height={size}
          animated
        />
      </div>
    </div>
  );
};
