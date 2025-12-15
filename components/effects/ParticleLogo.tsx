"use client";
import React, { useEffect, useRef } from "react";

type Particle = {
  x: number; y: number; vx: number; vy: number;
  tx: number; ty: number; size: number; returnSpeed: number;
};

type Props = {
  /** If you want fixed CSS size, set these. Otherwise it flex-fills parent. */
  width?: number;
  height?: number;
  /** Particle budget (800–1500 is usually sweet). */
  count?: number;
  /** 0 = transparent, else any CSS color. */
  background?: string | "transparent";
  /** Dot colors */
  colorA?: string;
  colorB?: string;
  /** Mouse influence radius (CSS px). */
  forceRadius?: number;
  /** Extra glow; set 0 to disable. */
  shadowBlur?: number;
};

export default function ParticleLogoCanvas({
  width,
  height,
  count = 1000,
  background = "transparent",
  colorA = "#FF9966",
  colorB = "#FF6B35",
  forceRadius = 140,
  shadowBlur = 12,
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; inside: boolean }>({ x: 1e9, y: 1e9, inside: false });
  const runningRef = useRef(true);
  const dprRef = useRef(1);
  const logicalSizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

  /** Build particles for the current canvas size */
  const rebuild = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = dprRef.current;
    const W = canvas.width;
    const H = canvas.height;
    if (W === 0 || H === 0) return;
    logicalSizeRef.current = { w: W / dpr, h: H / dpr };

    // Auto scale relative to min dimension
    const scale = Math.max(24, Math.min(W, H) * 0.45);

    // Build infinity curve targets (centered)
    const cx = W / 2;
    const cy = H / 2;
    const steps = Math.max(240, Math.floor(count / 2));
    const targets: { x: number; y: number }[] = [];
    for (let i = 0; i < steps; i++) {
      const t = (i / steps) * Math.PI * 2;
      const denom = 1 + Math.sin(t) * Math.sin(t);
      const x = cx + (scale) * Math.cos(t) / denom;
      const y = cy + (scale) * (Math.sin(t) * Math.cos(t)) / denom;
      targets.push({ x, y });
    }

    // Spawn particles distributed along the curve (+ jitter)
    const parts: Particle[] = [];
    const jitter = 5 * dpr;
    for (let i = 0; i < count; i++) {
      const p = targets[Math.floor((i / count) * steps)];
      const tx = p.x + (Math.random() - 0.5) * jitter * 2;
      const ty = p.y + (Math.random() - 0.5) * jitter * 2;
      parts.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: 0,
        vy: 0,
        tx,
        ty,
        size: (Math.random() * 1.25 + 1.25) * dpr,
        returnSpeed: 0.06 + Math.random() * 0.04,
      });
    }
    particlesRef.current = parts;
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Attach to layout: either fixed width/height props or fill parent
    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dprRef.current = dpr;

      if (width && height) {
        canvas.width = Math.max(1, Math.floor(width * dpr));
        canvas.height = Math.max(1, Math.floor(height * dpr));
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      } else {
        const parent = canvas.parentElement!;
        const rect = parent.getBoundingClientRect();
        const w = Math.max(1, Math.floor(rect.width));
        const h = Math.max(1, Math.floor(rect.height));
        canvas.width = Math.max(1, Math.floor(w * dpr));
        canvas.height = Math.max(1, Math.floor(h * dpr));
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
      }
    };

    setCanvasSize();
    rebuild();

    // Mouse
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = (e.clientX - rect.left) * dprRef.current;
      const my = (e.clientY - rect.top) * dprRef.current;
      mouseRef.current = { x: mx, y: my, inside: true };
    };
    const onLeave = () => {
      mouseRef.current = { x: 1e9, y: 1e9, inside: false };
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    // Visibility pause
    const onVis = () => {
      runningRef.current = document.visibilityState === "visible";
      if (runningRef.current && rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", onVis);

    // Resize observer -> resize canvas AND rebuild particles so they re-center
    const ro = new ResizeObserver(() => {
      if (width && height) return; // fixed size; ignore parent changes
      setCanvasSize();
      rebuild();
    });
    if (wrapRef.current) ro.observe(wrapRef.current);

    // Draw loop
    const tick = () => {
      if (!runningRef.current) {
        rafRef.current = null;
        return;
      }

      // Clear / background
      if (background === "transparent") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      const parts = particlesRef.current;
      const m = mouseRef.current;
      const dpr = dprRef.current;
      const r = (forceRadius || 140) * dpr;

      ctx.shadowBlur = (shadowBlur || 0) * dpr;
      ctx.shadowColor = colorA;
      ctx.fillStyle = colorA; // simple fill for reliability

      ctx.beginPath();
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];

        // Mouse repel
        if (m.inside) {
          const dx = p.x - m.x;
          const dy = p.y - m.y;
          const d2 = dx * dx + dy * dy;
          const r2 = r * r;
          if (d2 < r2) {
            const inv = 1 / Math.sqrt(d2 + 1e-4);
            const force = (r2 - d2) / r2; // 0..1
            p.vx += (dx * inv) * force * 6;
            p.vy += (dy * inv) * force * 6;
          }
        }

        // Spring back to target
        p.vx += (p.tx - p.x) * p.returnSpeed;
        p.vy += (p.ty - p.y) * p.returnSpeed;

        // Damping
        p.vx *= 0.88;
        p.vy *= 0.88;

        // Integrate
        p.x += p.vx;
        p.y += p.vy;

        // Draw as circle
        const s = p.size;
        ctx.moveTo(p.x + s, p.y);
        ctx.arc(p.x, p.y, s, 0, Math.PI * 2);
      }
      ctx.fill();

      // Second pass tint (optional dual-color)
      if (colorB && colorB !== colorA) {
        ctx.shadowColor = colorB;
        ctx.fillStyle = colorB;
        ctx.globalAlpha = 0.35;
        ctx.beginPath();
        for (let i = 0; i < parts.length; i++) {
          const p = parts[i];
          const s = Math.max(0.6, parts[i].size * 0.8);
          ctx.moveTo(p.x + s, p.y);
          ctx.arc(p.x, p.y, s, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
      ro.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, count, background, colorA, colorB, forceRadius, shadowBlur]);

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-full"
      style={{
        // If parent doesn't give height, keep us visible:
        minHeight: height ? height : 320,
        contain: "layout paint size",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
}