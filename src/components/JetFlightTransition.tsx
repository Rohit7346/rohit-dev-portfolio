import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Waypoint {
  id: string;
  label: string;
  code: string;
}

const WAYPOINTS: Waypoint[] = [
  { id: 'hero', label: 'Launchpad', code: '01 HERO' },
  { id: 'about', label: 'Radar / Bio', code: '02 ABOUT' },
  { id: 'skills', label: 'Avionics', code: '03 SKILLS' },
  { id: 'projects', label: 'Payload', code: '04 WORK' },
  { id: 'experience', label: 'Flight Log', code: '05 EXP' },
  { id: 'contact', label: 'Comms', code: '06 COMMS' },
];

export const JetFlightTransition: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [flybyTrigger, setFlybyTrigger] = useState<{
    key: number;
    targetSection: string;
    direction: 'down' | 'up';
  } | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  
  const lastSectionRef = useRef('hero');
  const lastScrollYRef = useRef(0);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Monitor Scroll Progress & Section Transitions
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
      setScrollProgress(progress);

      // Determine scroll direction
      const dir = scrollY > lastScrollYRef.current ? 'down' : 'up';
      setScrollDirection(dir);
      lastScrollYRef.current = scrollY;

      // Active scrolling indicator for afterburners
      setIsScrolling(true);
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 250);

      // Section intersection detection
      const scrollCenter = scrollY + window.innerHeight * 0.4;
      for (let i = WAYPOINTS.length - 1; i >= 0; i--) {
        const el = document.getElementById(WAYPOINTS[i].id);
        if (el && el.offsetTop <= scrollCenter) {
          const currentId = WAYPOINTS[i].id;
          if (currentId !== lastSectionRef.current) {
            const oldIdx = WAYPOINTS.findIndex((w) => w.id === lastSectionRef.current);
            const newIdx = i;

            // Trigger supersonic flyby when entering a new section
            setFlybyTrigger({
              key: Date.now(),
              targetSection: WAYPOINTS[i].label,
              direction: newIdx > oldIdx ? 'down' : 'up',
            });

            lastSectionRef.current = currentId;
            setActiveSection(currentId);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollToWaypoint = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* =========================================================================
          1. SUPERSONIC JET FLYBY ANIMATION (Triggered on Section Crossing)
         ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        <AnimatePresence>
          {flybyTrigger && (
            <motion.div
              key={flybyTrigger.key}
              initial={{
                x: flybyTrigger.direction === 'down' ? '-25vw' : '110vw',
                y: flybyTrigger.direction === 'down' ? '15vh' : '85vh',
                rotate: flybyTrigger.direction === 'down' ? 22 : -158,
                scale: 0.6,
                opacity: 0,
              }}
              animate={{
                x: flybyTrigger.direction === 'down' ? '120vw' : '-30vw',
                y: flybyTrigger.direction === 'down' ? '75vh' : '20vh',
                rotate: flybyTrigger.direction === 'down' ? 26 : -154,
                scale: [0.6, 1.25, 0.9],
                opacity: [0, 1, 1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1], // aerodynamic acceleration curve
              }}
              className="absolute flex items-center justify-center will-change-transform"
            >
              {/* Jet Container with Afterburner Trail */}
              <div className="relative flex items-center">
                
                {/* Supersonic Shockwave Vapor Ring */}
                <motion.div
                  initial={{ scale: 0.2, opacity: 0.9 }}
                  animate={{ scale: [0.2, 2.5, 4], opacity: [0.9, 0.4, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute -left-12 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-2 border-cyan-400/40 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)',
                  }}
                />

                {/* Jet Thruster Exhaust Smoke / Contrail */}
                <div
                  className="absolute right-full top-1/2 -translate-y-1/2 h-4 w-72 sm:w-96 rounded-full pointer-events-none blur-[1px]"
                  style={{
                    background:
                      'linear-gradient(to left, rgba(6,182,212,0.85), rgba(245,158,11,0.7) 35%, rgba(99,102,241,0.3) 70%, transparent 100%)',
                    boxShadow: '0 0 20px rgba(6,182,212,0.6)',
                  }}
                />

                {/* Jet Vector Graphic (Fighter / Stealth Jet) */}
                <svg
                  viewBox="0 0 120 70"
                  className="w-28 h-16 sm:w-36 sm:h-20 drop-shadow-[0_0_25px_rgba(6,182,212,0.8)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Afterburner Thruster Flame */}
                  <path
                    d="M 12 35 L 2 31 L 5 35 L 2 39 Z"
                    fill="url(#jetFlameGrad)"
                    className="animate-pulse"
                  />
                  <ellipse cx="14" cy="35" rx="6" ry="3.5" fill="#f59e0b" />
                  <ellipse cx="16" cy="35" rx="3" ry="1.8" fill="#38bdf8" />

                  {/* Main Wings */}
                  <path
                    d="M 55 35 L 28 65 L 42 65 L 75 35 Z"
                    fill="url(#jetWingGrad)"
                    stroke="#0284c7"
                    strokeWidth="1"
                  />
                  <path
                    d="M 55 35 L 28 5 L 42 5 L 75 35 Z"
                    fill="url(#jetWingGrad)"
                    stroke="#0284c7"
                    strokeWidth="1"
                  />

                  {/* Twin Vertical Tail Stabilizers */}
                  <path
                    d="M 24 35 L 14 50 L 25 50 L 38 35 Z"
                    fill="#1e293b"
                    stroke="#38bdf8"
                    strokeWidth="0.8"
                  />
                  <path
                    d="M 24 35 L 14 20 L 25 20 L 38 35 Z"
                    fill="#1e293b"
                    stroke="#38bdf8"
                    strokeWidth="0.8"
                  />

                  {/* Fuselage / Airframe */}
                  <path
                    d="M 115 35 Q 85 28 35 28 L 18 31 L 18 39 L 35 42 Q 85 42 115 35 Z"
                    fill="url(#jetBodyGrad)"
                    stroke="#38bdf8"
                    strokeWidth="1.2"
                  />

                  {/* Cockpit Canopy */}
                  <path
                    d="M 92 35 Q 80 31 68 31 Q 65 35 68 39 Q 80 39 92 35 Z"
                    fill="url(#canopyGrad)"
                    stroke="#7dd3fc"
                    strokeWidth="1"
                  />

                  {/* Avionics Accent Lines */}
                  <line x1="72" y1="35" x2="105" y2="35" stroke="#38bdf8" strokeWidth="0.75" />
                  <circle cx="112" cy="35" r="1.5" fill="#f43f5e" />

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="jetFlameGrad" x1="0" y1="35" x2="15" y2="35" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                    <linearGradient id="jetBodyGrad" x1="18" y1="35" x2="115" y2="35" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0f172a" />
                      <stop offset="60%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                    <linearGradient id="jetWingGrad" x1="28" y1="35" x2="75" y2="35" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#090d16" />
                      <stop offset="100%" stopColor="#1e293b" />
                    </linearGradient>
                    <linearGradient id="canopyGrad" x1="68" y1="35" x2="92" y2="35" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* High-Tech Tactical HUD Badge */}
                <div className="ml-4 px-3 py-1.5 rounded-lg bg-slate-950/90 border border-cyan-500/60 backdrop-blur-md shadow-lg shadow-cyan-500/20 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span className="text-[11px] font-mono tracking-widest text-cyan-300 font-bold uppercase">
                      MACH 2.8 // {flybyTrigger.targetSection}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================================================
          2. FLIGHT CORRIDOR / WAYPOINT JET TRACKER (Fixed on Right Edge for Desktop)
         ========================================================================= */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center select-none pointer-events-auto">
        <div className="relative py-8 flex flex-col items-center">
          
          {/* Vertical Flight Contrail Line */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent -z-10" />

          {/* Miniature Flight Tracker Jet */}
          <motion.div
            className="absolute -left-[15px] z-20 pointer-events-none transition-transform duration-300"
            style={{
              top: `${Math.max(Math.min(scrollProgress * 100, 96), 2)}%`,
              transform: `translateY(-50%) rotate(${scrollDirection === 'down' ? 180 : 0}deg)`,
            }}
          >
            <div className="relative flex items-center justify-center">
              {/* Afterburner flame flaring when actively scrolling */}
              <AnimatePresence>
                {isScrolling && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: [1, 1.4, 1] }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ repeat: Infinity, duration: 0.2 }}
                    className="absolute -top-3 w-2 h-4 rounded-full bg-gradient-to-t from-cyan-400 via-amber-400 to-transparent blur-[1px]"
                  />
                )}
              </AnimatePresence>

              {/* Jet Icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] filter"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Jet Silhouette */}
                <path
                  d="M12 2L14 8L21 14L21 17L14 14L14 19L17 21L17 22L12 21L7 22L7 21L10 19L10 14L3 17L3 14L10 8L12 2Z"
                  fill="url(#miniJetGrad)"
                  stroke="#38bdf8"
                  strokeWidth="0.8"
                />
                <circle cx="12" cy="7" r="1" fill="#38bdf8" />
                <defs>
                  <linearGradient id="miniJetGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="60%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Section Waypoints */}
          <div className="space-y-7 flex flex-col items-center">
            {WAYPOINTS.map((wp) => {
              const isActive = activeSection === wp.id;
              return (
                <button
                  key={wp.id}
                  onClick={() => scrollToWaypoint(wp.id)}
                  className="group relative flex items-center justify-center p-1.5 focus:outline-none"
                  aria-label={`Fly to ${wp.label}`}
                >
                  {/* Waypoint Dot */}
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-cyan-400 scale-150 shadow-[0_0_12px_rgba(6,182,212,0.9)]'
                        : 'bg-slate-400 dark:bg-slate-600 hover:bg-cyan-400/80 hover:scale-125'
                    }`}
                  />

                  {/* Waypoint Tooltip HUD Tag (Revealed on hover or when active) */}
                  <div className="absolute right-7 px-2.5 py-1 rounded-md bg-slate-900/90 dark:bg-slate-950/90 border border-slate-700 dark:border-slate-800 text-[10px] font-mono text-cyan-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
                    <span>{wp.code}</span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
};
