import React, { useState } from 'react';
import { Terminal, Play, RotateCcw, CheckCircle2, Sparkles, Code2, Check } from 'lucide-react';
import { profileData, projectsData, experienceData } from '../data/portfolioData';

export const HeroCodeCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'output'>('code');
  const [isRunning, setIsRunning] = useState(false);
  const [runCount, setRunCount] = useState(0);

  const handleRun = () => {
    setIsRunning(true);
    setActiveTab('output');
    setTimeout(() => {
      setIsRunning(false);
      setRunCount((prev) => prev + 1);
    }, 600);
  };

  return (
    <div className="w-full max-w-lg rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden relative group hover:border-cyan-500/30 transition-all duration-300">
      
      {/* Window Title Bar */}
      <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between gap-2">
        {/* macOS Window Controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block hover:opacity-100 transition-opacity"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block hover:opacity-100 transition-opacity"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block hover:opacity-100 transition-opacity"></span>

          {/* Tab Switches */}
          <div className="ml-2 flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                activeTab === 'code'
                  ? 'bg-slate-800 text-cyan-300 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3 h-3 text-cyan-400" />
              <span>developer.ts</span>
            </button>

            <button
              onClick={() => setActiveTab('output')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                activeTab === 'output'
                  ? 'bg-slate-800 text-emerald-300 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3 h-3 text-emerald-400" />
              <span>terminal</span>
              {runCount > 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              )}
            </button>
          </div>
        </div>

        {/* Action Button: Run / Rerun */}
        <div className="flex items-center gap-2">
          {activeTab === 'code' && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
              <Check className="w-3 h-3" /> Compiled
            </span>
          )}
          <button
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 disabled:opacity-50 shadow-md ${
              activeTab === 'code'
                ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-emerald-500/20'
                : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30 shadow-emerald-500/10'
            }`}
            title="Execute developer.ts to view profile details"
          >
            {isRunning ? (
              <>
                <RotateCcw className="w-3 h-3 animate-spin" />
                <span>Running...</span>
              </>
            ) : activeTab === 'output' ? (
              <>
                <RotateCcw className="w-3 h-3" />
                <span>Re-run</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-current" />
                <span>Run</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Panel Content: Code vs Output Terminal */}
      <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 min-h-[360px] max-h-[440px] overflow-y-auto selection:bg-cyan-500/30 selection:text-cyan-200">
        
        {/* TAB 1: Source Code View */}
        {activeTab === 'code' && (
          <div className="space-y-1 animate-in fade-in duration-200">
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
            
            <div className="pt-2 text-slate-500 italic">// Core mission</div>
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

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
              <span>💡 Tip: Click <strong className="text-emerald-400">▶ Run</strong> in the top bar to execute</span>
              <span className="text-cyan-400">TypeScript 5.7</span>
            </div>
          </div>
        )}

        {/* TAB 2: Execution Terminal Output */}
        {activeTab === 'output' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            {/* Command Line & Status Badge */}
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-slate-100 font-semibold">ts-node</span>
                <span className="text-cyan-300">developer.ts</span>
                <span className="text-slate-500">--profile</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-mono bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm shadow-emerald-500/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>READY</span>
              </span>
            </div>

            {isRunning ? (
              <div className="py-14 flex flex-col items-center justify-center gap-3 text-slate-400">
                <RotateCcw className="w-6 h-6 animate-spin text-cyan-400" />
                <span className="text-xs font-mono text-slate-300">Executing developer.ts...</span>
                <span className="text-[11px] text-slate-500">Resolving types & verifying credentials</span>
              </div>
            ) : (
              <div className="space-y-2.5">
                {/* Fast Status Bar */}
                <div className="flex items-center gap-2 text-[11px] text-slate-400 pb-1 border-b border-slate-800/50">
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Verified Identity
                  </span>
                  <span className="text-slate-600">•</span>
                  <span>MSRUAS CSE (9.33)</span>
                  <span className="text-slate-600">•</span>
                  <span>BEL Intern</span>
                </div>

                {/* Structured Output Grid */}
                <div className="space-y-1.5 text-xs">
                  <div className="grid grid-cols-12 gap-2 py-1 border-b border-slate-800/40 items-center">
                    <span className="col-span-4 text-slate-500 font-medium">ENGINEER</span>
                    <span className="col-span-8 text-white font-bold flex items-center gap-2">
                      <span>{profileData.name}</span>
                      <span className="text-[10px] text-cyan-300 font-mono font-normal bg-cyan-950/80 border border-cyan-800/80 px-1.5 py-0.5 rounded">
                        Full Stack
                      </span>
                    </span>
                  </div>

                  <div className="grid grid-cols-12 gap-2 py-1 border-b border-slate-800/40 items-center">
                    <span className="col-span-4 text-slate-500 font-medium">ROLE</span>
                    <span className="col-span-8 text-slate-200 font-medium">
                      Software Engineer & Full Stack Developer
                    </span>
                  </div>

                  <div className="grid grid-cols-12 gap-2 py-1 border-b border-slate-800/40 items-center">
                    <span className="col-span-4 text-slate-500 font-medium">LOCATION</span>
                    <span className="col-span-8 text-slate-300">
                      {profileData.location}
                    </span>
                  </div>

                  <div className="grid grid-cols-12 gap-2 py-1 border-b border-slate-800/40 items-center">
                    <span className="col-span-4 text-slate-500 font-medium">INDUSTRY</span>
                    <span className="col-span-8 text-emerald-300 font-medium flex items-center gap-1.5">
                      <span>Bharat Electronics Limited (BEL)</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-1.5 py-0.5 rounded">
                        Defense R&D
                      </span>
                    </span>
                  </div>

                  <div className="grid grid-cols-12 gap-2 py-1 border-b border-slate-800/40 items-center">
                    <span className="col-span-4 text-slate-500 font-medium">CORE STACK</span>
                    <div className="col-span-8 flex flex-wrap gap-1">
                      {["Java", "Spring Boot", "React", "PostgreSQL"].map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 rounded text-[10px] bg-slate-800/90 text-amber-300 border border-slate-700/60 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 py-1 border-b border-slate-800/40 items-center">
                    <span className="col-span-4 text-slate-500 font-medium">PROJECTS</span>
                    <span className="col-span-8 text-cyan-300 truncate font-mono text-[11px]">
                      Army Digital System • Real-Time Editor
                    </span>
                  </div>

                  <div className="grid grid-cols-12 gap-2 py-1 items-center">
                    <span className="col-span-4 text-slate-500 font-medium">CONTACT</span>
                    <span className="col-span-8 text-slate-300 flex items-center gap-2">
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-cyan-400 hover:text-cyan-300 hover:underline truncate"
                      >
                        {profileData.email}
                      </a>
                    </span>
                  </div>
                </div>

                {/* Exit Status Footer */}
                <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-800/80 text-slate-500">
                  <span className="text-emerald-400 flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Process exited with code 0 (18ms)</span>
                  </span>
                  <button
                    onClick={() => setActiveTab('code')}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 font-mono text-[11px]"
                  >
                    <span>&lt;/&gt; Source Code</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Card Footer Metric Highlight */}
      <div className="px-5 py-3 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Always shipping value</span>
        </div>
        <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Ready to deploy</span>
        </span>
      </div>

    </div>
  );
};
