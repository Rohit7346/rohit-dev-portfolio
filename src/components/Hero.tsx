import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/15 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium shadow-sm shadow-emerald-500/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{profileData.badge}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Hello world, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                {profileData.name}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  .
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-slate-300">
                {profileData.role}
              </p>
            </div>

            {/* Tagline / Summary */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
              </a>

              <a
                href={profileData.resumeUrl || "#contact"}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                title="Download or View Resume"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4 text-slate-400">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2">Connect:</span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-slate-800/60 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-slate-800/60 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={profileData.socials.email}
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-slate-800/60 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code & Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden relative group hover:border-cyan-500/30 transition-all duration-500">
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-950/70 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    developer.ts
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Compiled</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 overflow-x-auto">
                <div className="text-slate-500 italic">// Developer Identity</div>
                <div>
                  <span className="text-indigo-400">const</span>{' '}
                  <span className="text-cyan-300">engineer</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">"{profileData.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-emerald-300">"{profileData.role}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">location:</span>{' '}
                  <span className="text-emerald-300">"{profileData.location}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span>{' '}
                  <span className="text-emerald-300">"MSRUAS CSE (CGPA: 9.33)"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">experience:</span>{' '}
                  <span className="text-emerald-300">"BEL Intern (Solutions)"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreStack:</span> [
                  <div className="pl-4 text-amber-300">
                    "Java", "Spring Boot", "React", "PostgreSQL"
                  </div>
                  ],
                </div>
                <div>{'};'}</div>
                <div className="mt-3 text-slate-500 italic">// Core mission</div>
                <div>
                  <span className="text-indigo-400">function</span>{' '}
                  <span className="text-amber-400">buildSolutions</span>() {'{'}
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-indigo-400">return</span>{' '}
                  <span className="text-cyan-300">engineer</span>.
                  <span className="text-sky-300">engineerScalableSystems</span>();
                </div>
                <div>{'}'}</div>
              </div>

              {/* Card Footer Metric Highlight */}
              <div className="px-5 py-3 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Always shipping value</span>
                </div>
                <span className="text-cyan-400 font-semibold">Ready to deploy</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
