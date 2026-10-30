import React from 'react';
import { Zap, HeartHandshake, ShieldCheck, MapPin, Mail, Sparkles, GraduationCap, Building2, Layers, Code2 } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { OrgLogo } from './OrgLogos';

export const About: React.FC = () => {
  const getMetricIcon = (iconName?: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'Building2':
        return <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  const pillars = [
    {
      icon: <Zap className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
      title: "Performance First",
      description: "Obsessed with snappy page loads, optimized queries, and clean bundle sizes."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
      title: "Reliable & Scalable",
      description: "Writing type-safe, resilient code that scales gracefully under heavy workloads."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
      title: "User-Centric Design",
      description: "Crafting fluid, intuitive experiences where functionality meets aesthetic elegance."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Bridging technical engineering with modern product design
          </p>
        </div>

        {/* Bio & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story */}
          <div className="lg:col-span-7 space-y-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Engineering with passion & precision</span>
              </h3>
              {profileData.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-cyan-600 dark:text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Location</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">{profileData.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-emerald-600 dark:text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Email</span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="font-medium text-xs sm:text-sm truncate block max-w-[180px] text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <OrgLogo id="msruas" logoUrl="/logos/msruas-logo.png" name="MSRUAS" companyUrl="https://www.msruas.ac.in" size="sm" />
                  <div>
                    <span className="text-xs text-slate-500 block">Education</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">B.E. CSE (CGPA: 9.33)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <OrgLogo id="bel" logoUrl="/logos/bel-logo.png" name="BEL" companyUrl="https://bel-india.in" size="sm" />
                  <div>
                    <span className="text-xs text-slate-500 block">Industry Experience</span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">BEL Intern (Solutions)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-4">
            {profileData.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden group border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 dark:hover:shadow-cyan-950/20"
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top Row: Icon Pill & Badge */}
                <div className="flex items-center justify-between gap-1 mb-3 relative z-10">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    {getMetricIcon(metric.icon)}
                  </div>
                  {metric.badge && (
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 shadow-xs truncate max-w-[105px]">
                      {metric.badge}
                    </span>
                  )}
                </div>

                {/* Main Metric Value */}
                <div className="relative z-10 my-auto">
                  <div className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 via-sky-600 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 py-0.5 leading-tight group-hover:scale-[1.02] transition-transform duration-300 origin-left">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 mt-1 line-clamp-1">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug line-clamp-2">
                    {metric.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 space-y-3"
            >
              <div className="p-3 w-fit rounded-xl bg-slate-100 border border-slate-200 dark:bg-slate-800/80 dark:border-slate-700/60 shadow-inner">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">{pillar.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
