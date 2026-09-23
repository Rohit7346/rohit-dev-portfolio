import React from 'react';
import { ArrowUp, Heart, Code } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-slate-900 dark:text-white">
              <Code className="w-4 h-4 text-cyan-500" />
              <span>{profileData.name}</span>
            </div>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} {profileData.name}. All rights reserved.
            </p>
          </div>

          {/* Built With Note */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <span>Built with precision</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using React, TypeScript & Tailwind</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500/40 shadow-sm dark:shadow-none transition-all duration-200"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
