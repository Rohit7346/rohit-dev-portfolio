import React from 'react';
import { Code2, Layout, Server, Database, Cpu, Check, Layers } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
    }
  };

  const totalSkillsCount = skillCategories.reduce(
    (acc, curr) => acc + curr.skills.length,
    0
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 px-3 py-1 rounded-full">
            <Layers className="w-3.5 h-3.5" />
            <span>Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Stack & Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Modern tools and technologies I use to architect robust, scalable software ({totalSkillsCount}+ technologies)
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200 dark:border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                        skill.highlight
                          ? 'bg-cyan-50 text-cyan-800 border border-cyan-200 hover:border-cyan-400 shadow-sm dark:bg-slate-800/90 dark:text-cyan-300 dark:border-cyan-500/30 dark:hover:border-cyan-400/60 dark:shadow-cyan-500/10'
                          : 'bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-200/60 dark:bg-slate-900/80 dark:text-slate-300 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:text-white'
                      }`}
                    >
                      {skill.highlight && (
                        <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 stroke-[2.5]" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-slate-800/50 flex justify-end">
                <span className="text-[11px] font-mono text-slate-500">
                  {cat.skills.length} skills listed
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
