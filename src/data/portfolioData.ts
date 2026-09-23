import { Profile, Project, SkillCategory, Experience } from '../types/portfolio';

export const profileData: Profile = {
  name: "Rohit",
  role: "Full Stack Software Engineer",
  badge: "Available for new opportunities",
  email: "rohit132005kv@gmail.com",
  location: "India",
  resumeUrl: "#contact", // or path to resume PDF (e.g. "/resume.pdf")
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:rohit132005kv@gmail.com",
  },
  bio: [
    "I am a passionate software engineer dedicated to building scalable web applications, robust system architectures, and intuitive digital experiences.",
    "Driven by curiosity and craftsmanship, I bridge the gap between polished user interfaces and resilient backend systems. When I'm not coding, I enjoy exploring emerging AI technologies, open-source tooling, and algorithmic problem solving."
  ],
  metrics: [
    {
      label: "Code & Projects",
      value: "15+",
      sublabel: "Completed repositories"
    },
    {
      label: "Tech Mastery",
      value: "10+",
      sublabel: "Languages & Frameworks"
    },
    {
      label: "Uptime & Quality",
      value: "99.9%",
      sublabel: "Performance minded"
    },
    {
      label: "Continuous Learning",
      value: "100%",
      sublabel: "Passionate builder"
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "Code2",
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "Python", highlight: true },
      { name: "Java" },
      { name: "C / C++" },
      { name: "SQL", highlight: true },
      { name: "HTML5 / CSS3" }
    ]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Vite" },
      { name: "Redux / Zustand" },
      { name: "Responsive UI/UX" },
      { name: "Framer Motion" }
    ]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "FastAPI" },
      { name: "RESTful APIs", highlight: true },
      { name: "GraphQL" },
      { name: "Microservices" },
      { name: "WebSockets" }
    ]
  },
  {
    category: "Databases & Cloud",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "Redis" },
      { name: "Supabase" },
      { name: "Firebase" },
      { name: "Docker" },
      { name: "AWS / Vercel" }
    ]
  },
  {
    category: "Tools & Practices",
    icon: "Cpu",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Linux / Bash" },
      { name: "Postman" },
      { name: "CI / CD Pipelines" },
      { name: "Agile Development" },
      { name: "Clean Architecture" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "devpulse-dashboard",
    title: "DevPulse - Developer Analytics & Task Hub",
    tagline: "High-performance productivity dashboard with real-time analytics",
    description: "A comprehensive developer workspace combining git commit tracking, sprint task management, and performance insights with responsive data visualization.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Node.js"],
    category: "Full Stack",
    featured: true,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlights: [
      "Custom interactive charts rendering sub-second metric updates",
      "Full dark mode support with accessible contrast ratios",
      "JWT-based role authentication and granular activity logs"
    ]
  },
  {
    id: "cloud-sync-vault",
    title: "CloudSync Vault",
    tagline: "End-to-end encrypted storage & team asset management",
    description: "Secure digital asset manager supporting real-time collaborative file synchronization, tagging, search indexing, and automated thumbnail extraction.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "AWS S3"],
    category: "Full Stack",
    featured: true,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlights: [
      "Client-side encryption using modern Web Crypto API",
      "Multi-tenant file tree hierarchy with instant fuzzy search",
      "Distributed background processing pipeline for media assets"
    ]
  },
  {
    id: "ai-prompt-studio",
    title: "NeuralFlow AI Studio",
    tagline: "Interactive playground for prompt evaluation and LLM pipelines",
    description: "An intuitive web interface for structuring, chaining, and evaluating multi-model LLM workflows with live streaming tokens and latency benchmarking.",
    tags: ["React", "Python", "FastAPI", "TypeScript", "Tailwind CSS"],
    category: "AI / Systems",
    featured: true,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlights: [
      "Server-Sent Events (SSE) token streaming with zero stutter",
      "Custom node-based visual workflow builder",
      "Exportable execution history and cost estimation calculator"
    ]
  },
  {
    id: "algo-visualizer",
    title: "Algorithm Odyssey",
    tagline: "Interactive 3D & 2D algorithm visualization sandbox",
    description: "Educational visualizer demonstrating graph traversals, pathfinding algorithms (A*, Dijkstra), and sorting steps with customizable step speeds and grid sizes.",
    tags: ["TypeScript", "Canvas API", "Tailwind CSS", "Vite"],
    category: "Frontend",
    featured: false,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlights: [
      "Smooth 60fps animations utilizing requestAnimationFrame",
      "Interactive maze generation (recursive division, Prim's)",
      "Detailed step-by-step state inspector and pseudo-code viewer"
    ]
  },
  {
    id: "stream-commerce",
    title: "Nexus Commerce API",
    tagline: "Resilient microservices backend for digital product checkouts",
    description: "High-throughput e-commerce engine equipped with inventory reservation locks, idempotency keys, and automated webhook dispatchers.",
    tags: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker"],
    category: "Backend",
    featured: false,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlights: [
      "Handles 2,000+ RPS with sub-30ms p95 latency under benchmark loads",
      "Distributed cache invalidation using Redis Pub/Sub",
      "Comprehensive test coverage using Jest and Supertest"
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Full Stack Software Developer",
    company: "Engineering & Innovation Projects",
    location: "Remote / Hybrid",
    period: "2024 — Present",
    description: "Architecting and developing modern responsive web applications, robust microservices, and interactive developer tools.",
    achievements: [
      "Designed and deployed responsive web apps used by hundreds of monthly active visitors",
      "Optimized frontend bundle sizes by 40% using dynamic imports and code splitting in Vite",
      "Automated testing and CI/CD pipelines, accelerating release cycles"
    ],
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    type: "work"
  },
  {
    id: "edu-1",
    role: "Bachelor of Technology / Computer Science & Engineering",
    company: "University / Institute",
    location: "India",
    period: "2022 — 2026",
    description: "Focused on Data Structures, Algorithms, Software Engineering, Database Management Systems, and Cloud Computing.",
    achievements: [
      "Maintained top-tier academic standing with focus on core Computer Science fundamentals",
      "Active participant in hackathons, coding contests, and open-source contributions",
      "Led technical workshops on modern web development and Git best practices"
    ],
    skills: ["DSA", "Operating Systems", "DBMS", "Computer Networks", "OOP"],
    type: "education"
  },
  {
    id: "achieve-1",
    role: "Open Source Contributor & Problem Solver",
    company: "Developer Community",
    location: "Global",
    period: "Ongoing",
    description: "Regularly solving algorithmic challenges and contributing to open-source developer ecosystems.",
    achievements: [
      "Solved 300+ algorithmic challenges across platforms like LeetCode and HackerRank",
      "Authored open-source utilities and reusable UI components",
      "Collaborated with developers globally on modern web specifications"
    ],
    skills: ["Algorithms", "Problem Solving", "System Design", "Git"],
    type: "achievement"
  }
];
