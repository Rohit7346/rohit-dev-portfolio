import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  opacity: number;
  pulseSpeed: number;
  isSparkle: boolean;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  color: string;
}

export const TravelingStarsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track scroll velocity for interactive star travel
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      scrollVelocity = Math.min(Math.max(delta * 0.12, -12), 20);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Elegant night sky star color palettes
    const darkColors = [
      '#ffffff', // Pure white
      '#e0f2fe', // Soft starlight blue
      '#38bdf8', // Cyan glow
      '#818cf8', // Soft indigo
      '#fef08a', // Pale gold
    ];

    const lightColors = [
      '#0284c7', // Deep Sky
      '#4f46e5', // Deep Indigo
      '#0d9488', // Teal
      '#64748b', // Slate
    ];

    const palette = theme === 'dark' ? darkColors : lightColors;

    // Generate traveling stars (different depths)
    const starCount = Math.floor((width * height) / 6000);
    const stars: Star[] = Array.from({ length: Math.min(starCount, 220) }, () => {
      const isSparkle = Math.random() < 0.15; // 15% have delicate sparkle glints
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: isSparkle ? Math.random() * 1.5 + 1.2 : Math.random() * 1.6 + 0.6,
        speed: Math.random() * 0.5 + 0.2, // Continuous downward drift
        color: palette[Math.floor(Math.random() * palette.length)],
        opacity: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.025 + 0.01,
        isSparkle,
      };
    });

    // Occasional gentle shooting stars
    const meteors: Meteor[] = [];
    let nextMeteorTime = Date.now() + 2500;

    const spawnMeteor = () => {
      meteors.push({
        x: Math.random() * width * 0.85,
        y: Math.random() * (height * 0.35),
        length: Math.random() * 100 + 70,
        speed: Math.random() * 8 + 10,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 deg downward
        opacity: 0.9,
        color: theme === 'dark' ? '#38bdf8' : '#0284c7',
      });
      nextMeteorTime = Date.now() + Math.random() * 5000 + 3000;
    };

    // Helper: Draw subtle 4-point star glint (✦)
    const drawStarGlint = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      outerR: number,
      color: string,
      alpha: number
    ) => {
      c.save();
      c.globalAlpha = alpha;
      c.strokeStyle = color;
      c.lineWidth = 1;

      // Vertical & horizontal spikes
      c.beginPath();
      c.moveTo(cx - outerR, cy);
      c.lineTo(cx + outerR, cy);
      c.moveTo(cx, cy - outerR);
      c.lineTo(cx, cy + outerR);
      c.stroke();

      // Center bright core
      c.fillStyle = '#ffffff';
      c.beginPath();
      c.arc(cx, cy, outerR * 0.35, 0, Math.PI * 2);
      c.fill();

      c.restore();
    };

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      // Smooth scroll velocity decay
      scrollVelocity *= 0.92;
      const travelSpeed = 0.4 + scrollVelocity;

      // 1. Draw and animate traveling stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Cosmic travel movement
        star.y += star.speed + travelSpeed;

        // Wrap around seamlessly
        if (star.y > height + 10) {
          star.y = -10;
          star.x = Math.random() * width;
        } else if (star.y < -10) {
          star.y = height + 10;
          star.x = Math.random() * width;
        }

        // Gentle twinkle
        const pulse = Math.sin(tick * star.pulseSpeed) * 0.3 + 0.7;
        const currentOpacity = star.opacity * pulse;

        // Subtle motion streak during faster scrolling
        if (Math.abs(scrollVelocity) > 1.5) {
          ctx.save();
          ctx.strokeStyle = star.color;
          ctx.lineWidth = Math.min(star.size * 0.8, 1.8);
          ctx.globalAlpha = Math.min(currentOpacity * 0.6, 0.7);
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x, star.y - scrollVelocity * 2.5);
          ctx.stroke();
          ctx.restore();
        }

        // Draw star
        if (star.isSparkle) {
          drawStarGlint(ctx, star.x, star.y, star.size * 2.4, star.color, currentOpacity);
        } else {
          ctx.save();
          ctx.globalAlpha = currentOpacity;
          ctx.fillStyle = star.color;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      // 2. Animate occasional meteors / shooting stars
      if (Date.now() > nextMeteorTime) {
        spawnMeteor();
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.opacity -= 0.018;

        if (m.opacity <= 0 || m.x > width + 100 || m.y > height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(m.opacity, 0);

        // Meteor streak trail
        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;
        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.3, m.color);
        grad.addColorStop(1, 'transparent');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none">
      {/* Dark Theme Night Sky Base */}
      <div className="absolute inset-0 bg-[#080d1a] dark:opacity-100 opacity-0 transition-opacity duration-500" />

      {/* Light Theme Base */}
      <div className="absolute inset-0 bg-slate-50 dark:opacity-0 opacity-100 transition-opacity duration-500" />

      {/* Canvas for Traveling Stars and Shooting Stars */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
};
