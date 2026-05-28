import { useRef, useEffect } from "react";
import { prefersReducedMotion } from "@/utils/device";

const CONNECTION_DIST = 120;
const MOUSE_DIST = 150;
const CELL_SIZE = CONNECTION_DIST;

// Scale particle count by viewport area so phones and small laptops don't
// pay the full desktop cost. Capped to avoid runaway counts on huge monitors.
const computeParticleCount = (width: number, height: number) => {
  const area = width * height;
  const base = Math.round(area / 14000);
  return Math.max(40, Math.min(120, base));
};

export const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId: number | null = null;
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    let particleCount = computeParticleCount(canvasWidth, canvasHeight);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const resize = () => {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      particleCount = computeParticleCount(canvasWidth, canvasHeight);
      // Trim or grow particle pool to match new viewport size
      if (particles.length > particleCount) particles.length = particleCount;
      while (particles.length < particleCount) particles.push(new Particle());
    };

    class Particle {
      x = 0; y = 0; z = 0; size = 0; speedZ = 0; color = "";
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2 + 0.5;
        this.speedZ = Math.random() * 2 + 0.5;
        this.color = Math.random() > 0.5 ? "#00ffcc" : "#ff6b35";
      }
      update() {
        this.z -= this.speedZ;
        if (this.z <= 0) this.reset();
      }
      draw(context: CanvasRenderingContext2D) {
        const scale = 1000 / (1000 + this.z);
        const x = (this.x - canvasWidth / 2) * scale + canvasWidth / 2;
        const y = (this.y - canvasHeight / 2) * scale + canvasHeight / 2;
        const size = this.size * scale;
        const alpha = scale * 0.8;
        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fillStyle =
          this.color + Math.floor(alpha * 255).toString(16).padStart(2, "0");
        context.fill();
      }
    }

    const particles: Particle[] = Array.from({ length: particleCount }, () => new Particle());
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    window.addEventListener("resize", resize, { passive: true });

    // Reused across frames — avoids ~60 Map allocations per second
    const grid = new Map<string, Particle[]>();

    const rebuildGrid = () => {
      grid.clear();
      for (const p of particles) {
        const cx = Math.floor(p.x / CELL_SIZE);
        const cy = Math.floor(p.y / CELL_SIZE);
        const key = `${cx},${cy}`;
        const cell = grid.get(key);
        if (cell) cell.push(p);
        else grid.set(key, [p]);
      }
    };

    const drawConnections = () => {
      ctx.strokeStyle = "rgba(0, 255, 204, 0.03)";
      ctx.lineWidth = 0.5;

      for (const p of particles) {
        const cx = Math.floor(p.x / CELL_SIZE);
        const cy = Math.floor(p.y / CELL_SIZE);

        for (let nx = cx - 1; nx <= cx + 1; nx++) {
          for (let ny = cy - 1; ny <= cy + 1; ny++) {
            const neighbors = grid.get(`${nx},${ny}`);
            if (!neighbors) continue;
            for (const q of neighbors) {
              if (q === p) continue;
              const dx = p.x - q.x;
              const dy = p.y - q.y;
              if (dx * dx + dy * dy < CONNECTION_DIST * CONNECTION_DIST) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.stroke();
              }
            }
          }
        }
      }
    };

    const drawMouseLines = () => {
      const { x: mx, y: my } = mouseRef.current;
      if (mx <= 0 && my <= 0) return;
      for (const p of particles) {
        const dx = mx - p.x;
        const dy = my - p.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < MOUSE_DIST * MOUSE_DIST) {
          const opacity = (1 - Math.sqrt(distSq) / MOUSE_DIST) * 0.5;
          ctx.strokeStyle = `rgba(0, 255, 204, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(mx, my);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      for (const p of particles) { p.update(); p.draw(ctx); }
      rebuildGrid();
      drawConnections();
      drawMouseLines();
      animationId = requestAnimationFrame(animate);
    };

    const start = () => {
      if (animationId === null) animationId = requestAnimationFrame(animate);
    };
    const stop = () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    // Pause the loop entirely when the tab is backgrounded. Browsers throttle
    // rAF in hidden tabs but don't stop it, so the canvas bitmap and particle
    // updates stay in memory. Stopping reclaims CPU + lets the GC drain.
    const onVisibility = () => {
      if (document.hidden) {
        stop();
        // Also free the canvas backing store while hidden — recreated on resume.
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      } else {
        start();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (!document.hidden) start();

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", onVisibility);
      grid.clear();
      particles.length = 0;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};
