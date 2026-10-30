import React, { useState } from 'react';
import { ExternalLink, Building2, GraduationCap } from 'lucide-react';

interface OrgLogoProps {
  id: string;
  logoUrl?: string;
  name: string;
  companyUrl?: string;
  badgeText?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const OrgLogo: React.FC<OrgLogoProps> = ({
  id,
  logoUrl,
  name,
  companyUrl,
  badgeText,
  size = 'md',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  const dimensionClasses = {
    sm: 'h-8 min-w-[32px] p-1',
    md: 'h-12 min-w-[48px] p-1.5',
    lg: 'h-16 min-w-[64px] p-2',
  }[size];

  const imgHeightClasses = {
    sm: 'h-6 max-w-[90px]',
    md: 'h-9 max-w-[140px]',
    lg: 'h-12 max-w-[180px]',
  }[size];

  const isBEL = id.includes('bel') || name.toLowerCase().includes('bharat electronics');
  const isMSRUAS = id.includes('msruas') || name.toLowerCase().includes('ramaiah');

  return (
    <div className={`relative group/logo inline-flex items-center gap-2.5 ${className}`}>
      {companyUrl ? (
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block rounded-xl overflow-hidden bg-white p-1.5 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/10 group-hover/logo:ring-2 group-hover/logo:ring-cyan-500/30"
          title={`Visit ${name} official website`}
        >
          {logoUrl && !imageError ? (
            <div className={`flex items-center justify-center bg-white rounded-lg ${dimensionClasses}`}>
              <img
                src={logoUrl}
                alt={`${name} Logo`}
                onError={() => setImageError(true)}
                className={`object-contain ${imgHeightClasses} ${
                  isMSRUAS ? 'scale-125' : 'scale-100'
                } transition-transform duration-300 group-hover/logo:scale-110`}
              />
            </div>
          ) : (
            <div className={`flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg ${dimensionClasses} text-slate-700 dark:text-slate-300 font-bold text-xs`}>
              {isBEL ? (
                <span className="text-cyan-600 font-extrabold font-mono">BEL</span>
              ) : isMSRUAS ? (
                <span className="text-amber-600 font-extrabold font-mono">RUAS</span>
              ) : (
                <Building2 className="w-5 h-5 text-slate-500" />
              )}
            </div>
          )}

          {/* External link indicator icon */}
          <div className="absolute top-0.5 right-0.5 opacity-0 group-hover/logo:opacity-100 transition-opacity bg-cyan-500 text-white rounded-full p-0.5 shadow">
            <ExternalLink className="w-2.5 h-2.5" />
          </div>
        </a>
      ) : (
        <div className="relative rounded-xl overflow-hidden bg-white p-1.5 shadow-sm border border-slate-200 dark:border-slate-800">
          {logoUrl && !imageError ? (
            <div className={`flex items-center justify-center bg-white rounded-lg ${dimensionClasses}`}>
              <img
                src={logoUrl}
                alt={`${name} Logo`}
                onError={() => setImageError(true)}
                className={`object-contain ${imgHeightClasses} ${
                  isMSRUAS ? 'scale-125' : 'scale-100'
                }`}
              />
            </div>
          ) : (
            <div className={`flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg ${dimensionClasses} text-slate-700 dark:text-slate-300 font-bold text-xs`}>
              {isBEL ? <Building2 className="w-5 h-5 text-cyan-500" /> : <GraduationCap className="w-5 h-5 text-indigo-500" />}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
