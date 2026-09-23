import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, Milestone } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'work':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20">
            <Briefcase className="w-3 h-3" />
            <span>Experience</span>
          </span>
        );
      case 'education':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20">
            <GraduationCap className="w-3 h-3" />
            <span>Education</span>
          </span>
        );
      case 'achievement':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20">
            <Award className="w-3 h-3" />
            <span>Milestone</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 px-3 py-1 rounded-full">
            <Milestone className="w-3.5 h-3.5" />
            <span>Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            My professional journey, academic background, and milestones
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-300 dark:border-slate-800/80 space-y-12">
          {experienceData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline indicator node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-500 dark:border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-500 transition-all duration-300 shadow-md shadow-cyan-500/30" />

              {/* Card Container */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 space-y-4">
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {item.role}
                      </h3>
                      {getTypeBadge(item.type)}
                    </div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.company}
                    </div>
                  </div>

                  {/* Period & Location Badge */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                      <Calendar className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                      <span>{item.period}</span>
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{item.location}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements Bullets */}
                {item.achievements && item.achievements.length > 0 && (
                  <ul className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    {item.achievements.map((achieve, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <span className="text-cyan-500 font-bold leading-tight">•</span>
                        <span>{achieve}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Skills used */}
                {item.skills && item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-900/80 dark:text-cyan-300/80 dark:border-slate-800/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
