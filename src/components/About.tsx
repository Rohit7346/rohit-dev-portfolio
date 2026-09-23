import React from 'react';
import { Zap, HeartHandshake, ShieldCheck, MapPin, Mail, Sparkles, GraduationCap } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Performance First",
      description: "Obsessed with snappy page loads, optimized queries, and clean bundle sizes."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: "Reliable & Scalable",
      description: "Writing type-safe, resilient code that scales gracefully under heavy workloads."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-400" />,
      title: "User-Centric Design",
      description: "Crafting fluid, intuitive experiences where functionality meets aesthetic elegance."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging technical engineering with modern product design
          </p>
        </div>

        {/* Bio & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story */}
          <div className="lg:col-span-7 space-y-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>Engineering with passion & precision</span>
              </h3>
              {profileData.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-800/60 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Location</span>
                    <span className="font-medium">{profileData.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-800/60 text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Direct Email</span>
                    <span className="font-medium text-xs sm:text-sm truncate block max-w-[180px]">
                      {profileData.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-800/60 text-indigo-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Focus</span>
                    <span className="font-medium">Computer Science</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-800/60 text-amber-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Availability</span>
                    <span className="font-medium text-emerald-400">Active & Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {profileData.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-5 text-center flex flex-col justify-center relative overflow-hidden group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-1 group-hover:scale-105 transition-transform duration-300">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  {metric.sublabel}
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
              <div className="p-3 w-fit rounded-xl bg-slate-800/80 border border-slate-700/60 shadow-inner">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-bold text-white">{pillar.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
