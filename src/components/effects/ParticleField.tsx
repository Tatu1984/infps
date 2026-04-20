import { useRef, useEffect } from "react";
import { prefersReducedMotion } from "@/utils/device";

const PARTICLE_COUNT = 150; // reduced from 300; visually similar, half the cost
const CONNECTION_DIST = 120;
const MOUSE_DIST = 150;
const CELL_SIZE = CONNECTION_DIST; // spatial grid cell matches connection distance

export const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const resize = () => {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

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

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

    // Spatial grid: O(n) connection detection vs O(n²)
    const buildGrid = () => {
      const grid = new Map<string, Particle[]>();
      for (const p of particles) {
        const cx = Math.floor(p.x / CELL_SIZE);
        const cy = Math.floor(p.y / CELL_SIZE);
        const key = `${cx},${cy}`;
        const cell = grid.get(key);
        if (cell) cell.push(p);
        else grid.set(key, [p]);
      }
      return grid;
    };

    const drawConnections = (grid: Map<string, Particle[]>) => {
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
      ctx.fillStyle = "rgba(8, 12, 21, 0.15)";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      for (const p of particles) { p.update(); p.draw(ctx); }

      const grid = buildGrid();
      drawConnections(grid);
      drawMouseLines();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};
