import React, { useState } from 'react';
import { ExternalLink, Github, FolderGit2, Star, CheckCircle } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI / Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 px-3 py-1 rounded-full">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            A selection of applications, systems, and developer tools I've built
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 font-semibold'
                  : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header row: category + featured badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-cyan-50 text-cyan-800 border border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-400 dark:border-cyan-800/60">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/30">
                      <Star className="w-3 h-3 fill-amber-500 dark:fill-amber-300" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400/90 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Highlights */}
                {project.highlights && (
                  <div className="mb-6 space-y-1.5">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-900/90 dark:text-slate-400 dark:border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-200 shadow-sm shadow-cyan-500/20"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 hover:text-slate-900 shadow-sm dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white dark:shadow-none transition-all duration-200"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
