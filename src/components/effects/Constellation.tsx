import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size?: number;
  brightness?: number;
}

interface ConstellationProps {
  stars: Star[];
  connections: [number, number][];
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  animated?: boolean;
}

export const Constellation = ({
  stars,
  connections,
  width = 300,
  height = 300,
  className = "",
  color = "currentColor",
  animated = true,
}: ConstellationProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animated || !svgRef.current) return;

    const starElements = svgRef.current.querySelectorAll(".constellation-star");
    starElements.forEach((star, i) => {
      const delay = i * 0.4;
      (star as HTMLElement).style.animationDelay = `${delay}s`;
    });
  }, [animated]);

  const padding = 15;
  const minX = Math.min(...stars.map((s) => s.x));
  const maxX = Math.max(...stars.map((s) => s.x));
  const minY = Math.min(...stars.map((s) => s.y));
  const maxY = Math.max(...stars.map((s) => s.y));

  const scaleX = (width - padding * 2) / (maxX - minX || 1);
  const scaleY = (height - padding * 2) / (maxY - minY || 1);
  const scale = Math.min(scaleX, scaleY);

  const offsetX = padding + ((width - padding * 2) - (maxX - minX) * scale) / 2;
  const offsetY = padding + ((height - padding * 2) - (maxY - minY) * scale) / 2;

  const transformX = (x: number) => (x - minX) * scale + offsetX;
  const transformY = (y: number) => (y - minY) * scale + offsetY;

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={`constellation ${className}`}
      viewBox={`0 0 ${width} ${height}`}
    >
      <defs>
        <filter id="star-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connection lines */}
      <g className="constellation-lines">
        {connections.map(([from, to], i) => {
          const star1 = stars[from];
          const star2 = stars[to];
          return (
            <line
              key={`line-${i}`}
              x1={transformX(star1.x)}
              y1={transformY(star1.y)}
              x2={transformX(star2.x)}
              y2={transformY(star2.y)}
              stroke={color}
              strokeWidth="1.5"
              strokeOpacity="0.4"
              className="constellation-line"
            />
          );
        })}
      </g>

      {/* Stars */}
      <g className="constellation-stars">
        {stars.map((star, i) => {
          const r = (star.size || 1) * 4;
          const opacity = star.brightness || 0.9;
          return (
            <g key={`star-${i}`}>
              {/* Outer glow */}
              <circle
                cx={transformX(star.x)}
                cy={transformY(star.y)}
                r={r * 2}
                fill={color}
                opacity={opacity * 0.15}
              />
              {/* Main star */}
              <circle
                cx={transformX(star.x)}
                cy={transformY(star.y)}
                r={r}
                fill={color}
                opacity={opacity}
                filter="url(#star-glow)"
                className={animated ? "constellation-star" : ""}
              />
              {/* Bright center (use background color for contrast) */}
              <circle
                cx={transformX(star.x)}
                cy={transformY(star.y)}
                r={r * 0.4}
                fill="var(--color-bg)"
                opacity={opacity * 0.9}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
};

// Preset constellations
export const CONSTELLATIONS = {
  orion: {
    stars: [
      { x: 45, y: 15, size: 2, brightness: 0.9 },
      { x: 55, y: 15, size: 1.5, brightness: 0.8 },
      { x: 47, y: 30, size: 1, brightness: 0.7 },
      { x: 50, y: 32, size: 1.2, brightness: 0.8 },
      { x: 53, y: 30, size: 1, brightness: 0.7 },
      { x: 43, y: 50, size: 1.5, brightness: 0.8 },
      { x: 57, y: 50, size: 2, brightness: 1 },
    ],
    connections: [
      [0, 1],
      [0, 2],
      [1, 4],
      [2, 3],
      [3, 4],
      [2, 5],
      [4, 6],
    ] as [number, number][],
  },
  cassiopeia: {
    stars: [
      { x: 0, y: 20, size: 1.5, brightness: 0.8 },
      { x: 15, y: 0, size: 1.8, brightness: 0.9 },
      { x: 35, y: 15, size: 2, brightness: 1 },
      { x: 55, y: 0, size: 1.8, brightness: 0.9 },
      { x: 70, y: 20, size: 1.5, brightness: 0.8 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ] as [number, number][],
  },
  bigDipper: {
    stars: [
      { x: 0, y: 10, size: 1.5, brightness: 0.8 },
      { x: 15, y: 20, size: 1.3, brightness: 0.7 },
      { x: 30, y: 15, size: 1.5, brightness: 0.85 },
      { x: 45, y: 8, size: 1.8, brightness: 0.9 },
      { x: 55, y: 25, size: 1.6, brightness: 0.85 },
      { x: 70, y: 30, size: 1.7, brightness: 0.9 },
      { x: 65, y: 5, size: 2, brightness: 1 },
      { x: 48, y: 0, size: 1.8, brightness: 0.95 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 3],
    ] as [number, number][],
  },
  gemini: {
    stars: [
      { x: 10, y: 0, size: 2, brightness: 1 },
      { x: 50, y: 5, size: 2, brightness: 1 },
      { x: 5, y: 25, size: 1.3, brightness: 0.75 },
      { x: 55, y: 30, size: 1.3, brightness: 0.75 },
      { x: 0, y: 50, size: 1.4, brightness: 0.8 },
      { x: 60, y: 55, size: 1.4, brightness: 0.8 },
      { x: 30, y: 35, size: 1.5, brightness: 0.85 },
    ],
    connections: [
      [0, 2],
      [2, 4],
      [1, 3],
      [3, 5],
      [2, 6],
      [6, 3],
    ] as [number, number][],
  },
  cygnus: {
    stars: [
      { x: 30, y: 0, size: 2, brightness: 1 },
      { x: 30, y: 25, size: 1.5, brightness: 0.85 },
      { x: 30, y: 50, size: 1.8, brightness: 0.9 },
      { x: 30, y: 75, size: 1.6, brightness: 0.85 },
      { x: 10, y: 40, size: 1.4, brightness: 0.8 },
      { x: 0, y: 55, size: 1.3, brightness: 0.75 },
      { x: 50, y: 40, size: 1.4, brightness: 0.8 },
      { x: 60, y: 55, size: 1.3, brightness: 0.75 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [2, 4],
      [4, 5],
      [2, 6],
      [6, 7],
    ] as [number, number][],
  },
};
