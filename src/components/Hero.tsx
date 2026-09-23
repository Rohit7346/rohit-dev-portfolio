import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { HeroCodeCard } from './HeroCodeCard';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/15 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Headline */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
                Hello world, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {profileData.name}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500">
                  .
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-300">
                {profileData.role}
              </p>
            </div>

            {/* Tagline / Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about turning complex challenges into clean, scalable software.
              Specializing in modern full-stack development, cloud-ready architectures, and intuitive web interfaces.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm dark:text-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:border-slate-700/80 dark:shadow-none transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
                title="View & Download Resume (PDF, PNG, JPG)"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-2">Connect:</span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-cyan-600 hover:border-cyan-400 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-400 dark:hover:text-cyan-400 dark:hover:border-cyan-500/40 dark:hover:bg-slate-800/60 dark:shadow-none transition-all duration-200 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-cyan-600 hover:border-cyan-400 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-400 dark:hover:text-cyan-400 dark:hover:border-cyan-500/40 dark:hover:bg-slate-800/60 dark:shadow-none transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={profileData.socials.email}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-cyan-600 hover:border-cyan-400 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-400 dark:hover:text-cyan-400 dark:hover:border-cyan-500/40 dark:hover:bg-slate-800/60 dark:shadow-none transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code & Visual Card with Run Program Feature */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroCodeCard />
          </div>

        </div>
      </div>
    </section>
  );
};
