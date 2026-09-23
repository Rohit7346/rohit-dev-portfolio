export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'AI / Systems';
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  type: 'work' | 'education' | 'achievement';
}

export interface Profile {
  name: string;
  role: string;
  badge: string;
  bio: string[];
  email: string;
  location: string;
  resumeUrl?: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}
