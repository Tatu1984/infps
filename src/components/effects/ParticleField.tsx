import { useRef, useEffect } from "react";

export const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;

    const getCSSVar = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    const primaryColor = () => getCSSVar('--color-primary') || '#00ffcc';
    const secondaryColor = () => getCSSVar('--color-secondary') || '#ff6b35';
    const bgColor = () => getCSSVar('--color-bg') || '#080c15';

    const hexToRgba = (hex: string, alpha = 1) => {
      const h = hex.replace('#', '');
      const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const resize = () => {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x: number = 0;
      y: number = 0;
      z: number = 0;
      size: number = 0;
      speedZ: number = 0;
      color: string = "";

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2 + 0.5;
        this.speedZ = Math.random() * 2 + 0.5;
        this.color = Math.random() > 0.5 ? primaryColor() : secondaryColor();
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
        context.fillStyle = hexToRgba(this.color, alpha);
        context.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 300; i++) {
      particles.push(new Particle());
    }

    const drawConnections = (strokeAlpha = 0.03) => {
      ctx.strokeStyle = hexToRgba(primaryColor(), strokeAlpha);
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = hexToRgba(bgColor(), 0.12);
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      drawConnections(0.03);

      const mouse = mouseRef.current;
      if (mouse.x > 0 && mouse.y > 0) {
        particles.forEach((p) => {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.5;
            ctx.strokeStyle = hexToRgba(primaryColor(), opacity);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleThemeChange = () => {
      // regenerate particle colors to reflect theme vars
      particles.forEach((p) => {
        p.color = Math.random() > 0.5 ? primaryColor() : secondaryColor();
      });
    };

    window.addEventListener('themechange', handleThemeChange);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};
