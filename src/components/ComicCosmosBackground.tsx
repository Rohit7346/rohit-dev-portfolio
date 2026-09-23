import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  type: 'sparkle' | 'dot' | 'cross';
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  pulseSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  color: string;
  active: boolean;
}

export const ComicCosmosBackground: React.FC = () => {
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

    // Track scroll velocity for comic warp speed effect
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      scrollVelocity = Math.min(Math.max(diff * 0.15, -15), 25);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Comic Palette
    const starColorsDark = [
      '#38bdf8', // Neon Cyan
      '#fbbf24', // Comic Gold
      '#c084fc', // Cosmic Violet
      '#f472b6', // Comic Pink
      '#ffffff', // Bright White
      '#6ee7b7', // Neon Mint
    ];

    const starColorsLight = [
      '#0284c7', // Deep Cyan
      '#d97706', // Warm Amber
      '#7c3aed', // Royal Violet
      '#db2777', // Magenta
      '#475569', // Slate
    ];

    const getColors = () => (theme === 'dark' ? starColorsDark : starColorsLight);

    // Generate Stars
    const starCount = Math.floor((width * height) / 7500); // Responsive density
    const stars: Star[] = Array.from({ length: Math.min(starCount, 180) }, () => {
      const types: ('sparkle' | 'dot' | 'cross')[] = ['sparkle', 'dot', 'dot', 'dot', 'cross'];
      const colors = getColors();
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1.2,
        speed: Math.random() * 0.4 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.01,
      };
    });

    // Shooting Stars / Meteors
    const shootingStars: ShootingStar[] = [];
    let nextMeteorTime = Date.now() + 2000;

    const spawnMeteor = () => {
      const colors = getColors();
      shootingStars.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * (height * 0.4),
        length: Math.random() * 120 + 80,
        speed: Math.random() * 10 + 12,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3, // ~45 degrees diagonal streak
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        active: true,
      });
      nextMeteorTime = Date.now() + Math.random() * 3500 + 2000;
    };

    // Helper: Draw 4-point Comic Sparkle Star (✦)
    const drawSparkle = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number,
      rotation: number,
      fillColor: string,
      alpha: number
    ) => {
      c.save();
      c.translate(cx, cy);
      c.rotate(rotation);
      c.globalAlpha = alpha;
      c.fillStyle = fillColor;

      c.beginPath();
      let rot = (Math.PI / 2) * 3;
      let x = 0;
      let y = 0;
      const step = Math.PI / spikes;

      c.moveTo(0, -outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = Math.cos(rot) * outerRadius;
        y = Math.sin(rot) * outerRadius;
        c.lineTo(x, y);
        rot += step;

        x = Math.cos(rot) * innerRadius;
        y = Math.sin(rot) * innerRadius;
        c.lineTo(x, y);
        rot += step;
      }
      c.lineTo(0, -outerRadius);
      c.closePath();
      c.fill();

      // Comic center highlight dot
      c.fillStyle = '#ffffff';
      c.beginPath();
      c.arc(0, 0, Math.max(innerRadius * 0.8, 1), 0, Math.PI * 2);
      c.fill();

      c.restore();
    };

    // Render loop
    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      // Dampen scroll velocity
      scrollVelocity *= 0.92;
      const effectiveTravelSpeed = 0.5 + scrollVelocity;

      // 1. Draw & Update Stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Cosmic travel movement: stars drift downward and wrap around
        star.y += star.speed + effectiveTravelSpeed;
        star.rotation += star.rotationSpeed;

        if (star.y > height + 20) {
          star.y = -10;
          star.x = Math.random() * width;
        } else if (star.y < -20) {
          star.y = height + 10;
          star.x = Math.random() * width;
        }

        // Comic star twinkle pulse
        const pulse = Math.sin(tick * star.pulseSpeed) * 0.25 + 0.75;
        const currentOpacity = star.opacity * pulse;

        // Warp speed streak lines during active scrolling
        if (Math.abs(scrollVelocity) > 2) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = Math.min(star.size * 0.7, 2);
          ctx.globalAlpha = Math.min(currentOpacity * (Math.abs(scrollVelocity) / 10), 0.8);
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x, star.y - scrollVelocity * 3.5);
          ctx.stroke();
        }

        // Draw star by type
        if (star.type === 'sparkle' || star.size > 2.8) {
          drawSparkle(
            ctx,
            star.x,
            star.y,
            4,
            star.size * 2.8,
            star.size * 0.6,
            star.rotation,
            star.color,
            currentOpacity
          );
        } else if (star.type === 'cross') {
          ctx.save();
          ctx.globalAlpha = currentOpacity;
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 1.5, star.y);
          ctx.lineTo(star.x + star.size * 1.5, star.y);
          ctx.moveTo(star.x, star.y - star.size * 1.5);
          ctx.lineTo(star.x, star.y + star.size * 1.5);
          ctx.stroke();
          ctx.restore();
        } else {
          // Comic circle stardust dot with soft border
          ctx.save();
          ctx.globalAlpha = currentOpacity;
          ctx.fillStyle = star.color;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      // 2. Spawn and Draw Meteors / Shooting Stars
      if (Date.now() > nextMeteorTime) {
        spawnMeteor();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ms = shootingStars[i];
        if (!ms.active) continue;

        ms.x += Math.cos(ms.angle) * ms.speed;
        ms.y += Math.sin(ms.angle) * ms.speed;
        ms.opacity -= 0.015;

        if (ms.opacity <= 0 || ms.x > width + 100 || ms.y > height + 100) {
          ms.active = false;
          shootingStars.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(ms.opacity, 0);

        // Meteor Head (Comic glowing circle)
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = ms.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(ms.x, ms.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Meteor Speedline Contrail
        const tailX = ms.x - Math.cos(ms.angle) * ms.length;
        const tailY = ms.y - Math.sin(ms.angle) * ms.length;
        const grad = ctx.createLinearGradient(ms.x, ms.y, tailX, tailY);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.3, ms.color);
        grad.addColorStop(1, 'transparent');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(ms.x, ms.y);
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
      {/* 1. Deep Comic Cosmos Sky Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050714] via-[#090e24] to-[#040612] dark:opacity-100 opacity-0 transition-opacity duration-500" />
      
      {/* Light Theme Cosmic Twilight Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f1f5f9] via-[#e2e8f0] to-[#f8fafc] dark:opacity-0 opacity-100 transition-opacity duration-500" />

      {/* 2. Comic Nebula Clouds (Halftone & Watercolor Cosmic Dust) */}
      <div className="absolute top-[8%] -left-[10%] w-[550px] h-[550px] rounded-full bg-cyan-600/10 dark:bg-cyan-500/15 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-[45%] -right-[10%] w-[650px] h-[650px] rounded-full bg-indigo-600/10 dark:bg-indigo-500/15 blur-[130px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-purple-600/10 dark:bg-fuchsia-500/10 blur-[110px] animate-pulse-slow pointer-events-none" />

      {/* 3. Comic Celestial Illustrations (Planets & Crescent Moon) */}
      {/* Stylized Comic Ringed Planet */}
      <div
        className="absolute top-24 right-10 sm:right-28 opacity-75 dark:opacity-90 animate-float"
        style={{ animationDuration: '8s' }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-20 h-20 sm:w-28 sm:h-28 drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Planet Body */}
          <circle cx="50" cy="50" r="24" fill="url(#comicPlanetGrad)" stroke="#7c3aed" strokeWidth="1.5" />
          
          {/* Comic Shadow Contour */}
          <path
            d="M 50 26 A 24 24 0 0 1 74 50 A 24 24 0 0 1 50 74 A 20 20 0 0 0 50 26 Z"
            fill="rgba(15, 23, 42, 0.45)"
          />
          
          {/* Comic Surface Bands */}
          <path d="M 30 44 Q 50 49 70 44" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 28 54 Q 50 59 72 54" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" />

          {/* Comic Planetary Rings */}
          <ellipse
            cx="50"
            cy="50"
            rx="46"
            ry="14"
            transform="rotate(-25 50 50)"
            stroke="url(#comicRingGrad)"
            strokeWidth="3.5"
            fill="none"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="11"
            transform="rotate(-25 50 50)"
            stroke="#c084fc"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="4 2"
          />

          <defs>
            <linearGradient id="comicPlanetGrad" x1="26" y1="26" x2="74" y2="74" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            <linearGradient id="comicRingGrad" x1="4" y1="50" x2="96" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Stylized Comic Crescent Moon */}
      <div
        className="absolute bottom-40 left-6 sm:left-20 opacity-60 dark:opacity-80 animate-float"
        style={{ animationDuration: '10s' }}
      >
        <svg
          viewBox="0 0 70 70"
          className="w-14 h-14 sm:w-20 sm:h-20 drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Crescent Moon */}
          <path
            d="M 45 12 A 28 28 0 1 0 58 55 A 24 24 0 1 1 45 12 Z"
            fill="url(#comicMoonGrad)"
            stroke="#fbbf24"
            strokeWidth="1.5"
          />
          {/* Craters */}
          <circle cx="28" cy="38" r="3" fill="#f59e0b" fillOpacity="0.4" stroke="#d97706" strokeWidth="0.8" />
          <circle cx="36" cy="48" r="2" fill="#f59e0b" fillOpacity="0.4" stroke="#d97706" strokeWidth="0.8" />
          <circle cx="25" cy="26" r="2.2" fill="#f59e0b" fillOpacity="0.4" stroke="#d97706" strokeWidth="0.8" />

          {/* Comic Sparkle beside Moon */}
          <path
            d="M 52 20 L 53 23 L 56 24 L 53 25 L 52 28 L 51 25 L 48 24 L 51 23 Z"
            fill="#ffffff"
            stroke="#fbbf24"
            strokeWidth="0.6"
          />

          <defs>
            <linearGradient id="comicMoonGrad" x1="12" y1="12" x2="58" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="60%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 4. Canvas: Traveling Comic Stars & Meteors Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
};
