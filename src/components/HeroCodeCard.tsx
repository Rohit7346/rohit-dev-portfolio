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
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 shadow-sm shadow-emerald-500/10"
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
                <Play className="w-3 h-3 fill-emerald-400" />
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
            {/* Command Prompt */}
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="text-slate-200">ts-node developer.ts</span>
            </div>

            {isRunning ? (
              <div className="py-8 flex flex-col items-center justify-center gap-3 text-slate-400">
                <RotateCcw className="w-5 h-5 animate-spin text-cyan-400" />
                <span className="text-xs">Compiling & executing program...</span>
              </div>
            ) : (
              <div className="space-y-2">
                {/* Build/Execution Log steps */}
                <div className="space-y-1 text-slate-400 text-xs">
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>Loaded developer identity: {profileData.name}</span>
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>Academic records verified: MSRUAS CSE (CGPA: 9.33)</span>
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>Industry experience: Bharat Electronics Limited (BEL)</span>
                  </div>
                </div>

                {/* Formatted Output Object */}
                <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800/90 text-xs leading-relaxed space-y-1 text-slate-300">
                  <div className="text-slate-500">// Program Return Value (JSON):</div>
                  <div>{'{'}</div>
                  <div className="pl-4">
                    <span className="text-sky-300">"status"</span>: <span className="text-emerald-400">"ONLINE & READY TO BUILD"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"engineer"</span>: <span className="text-amber-300">"{profileData.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"role"</span>: <span className="text-amber-300">"{profileData.role}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"location"</span>: <span className="text-amber-300">"{profileData.location}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"education"</span>: <span className="text-amber-300">"B.E. CSE • CGPA: 9.33 (MSRUAS)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"internship"</span>: <span className="text-amber-300">"BEL (Software Solutions Division)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"keyProjects"</span>: [
                    <div className="pl-4 text-emerald-300">
                      {projectsData.map((p, idx) => (
                        <div key={idx}>"{p.title}"{idx < projectsData.length - 1 ? ',' : ''}</div>
                      ))}
                    </div>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"email"</span>: <span className="text-cyan-300">"{profileData.email}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">"github"</span>: <span className="text-cyan-300">"{profileData.socials.github}"</span>
                  </div>
                  <div>{'}'}</div>
                </div>

                {/* Exit Status */}
                <div className="flex items-center justify-between text-[11px] pt-1 text-slate-500">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Process exited with code 0 (24ms)</span>
                  </span>
                  <button
                    onClick={() => setActiveTab('code')}
                    className="text-cyan-400 hover:underline"
                  >
                    View Source Code &rarr;
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
