import { Profile, Project, SkillCategory, Experience } from '../types/portfolio';

export const profileData: Profile = {
  name: "Rohit K",
  role: "Software Engineer & Full Stack Developer",
  badge: "Available for opportunities & internships",
  email: "rohit132005kv@gmail.com",
  phone: "+91-7899117346",
  location: "Bengaluru, India",
  resumeUrl: "#contact", // or link to PDF resume
  socials: {
    github: "https://github.com/Rohit7346",
    linkedin: "https://linkedin.com",
    email: "mailto:rohit132005kv@gmail.com",
  },
  bio: [
    "I am a Computer Science & Engineering undergraduate at M S Ramaiah University of Applied Sciences (Bengaluru) with an academic CGPA of 9.33, specializing in full-stack engineering, Java, Spring Boot, React, and modern databases.",
    "With industry internship experience at Bharat Electronics Limited (BEL) in the Software Solutions Division, I have engineered military-grade user management systems and real-time collaborative cloud editors. I thrive at the intersection of robust backend architectures, clean object-oriented design, and snappy user interfaces."
  ],
  metrics: [
    {
      label: "Academic CGPA",
      value: "9.33",
      sublabel: "MSRUAS Computer Science"
    },
    {
      label: "Full Stack Projects",
      value: "Production Ready",
      sublabel: "Spring Boot & React ecosystem"
    },
    {
      label: "Industry Experience",
      value: "BEL Intern",
      sublabel: "Software Solutions Division"
    },
    {
      label: "Core Engineering",
      value: "DSA & OOPS",
      sublabel: "Strong CS fundamentals"
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "Code2",
    skills: [
      { name: "Java", highlight: true },
      { name: "Python", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "C", highlight: false },
      { name: "C++", highlight: false },
      { name: "SQL", highlight: true },
      { name: "HTML5 / CSS3", highlight: false }
    ]
  },
  {
    category: "Frameworks & Frontend",
    icon: "Layout",
    skills: [
      { name: "Spring Boot", highlight: true },
      { name: "React", highlight: true },
      { name: "Spring Data JPA", highlight: true },
      { name: "Hibernate", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Vite", highlight: false },
      { name: "REST APIs", highlight: true }
    ]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "CRUD Architectures", highlight: false }
    ]
  },
  {
    category: "Developer Tools",
    icon: "Cpu",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "IntelliJ IDEA", highlight: true },
      { name: "VS Code", highlight: true },
      { name: "Eclipse", highlight: false },
      { name: "Postman", highlight: false }
    ]
  },
  {
    category: "Core Computer Science",
    icon: "Server",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "OOPS Concept", highlight: true },
      { name: "DBMS", highlight: true },
      { name: "Operating Systems", highlight: true },
      { name: "Network Security", highlight: false },
      { name: "Artificial Intelligence", highlight: false }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "army-digital-info-system",
    title: "Army Digital Information System",
    tagline: "Full-stack military-grade user management with dual online/offline mode",
    description: "Developed a full-stack military-grade user management system with dual-mode (online/offline) functionality, role-based access control (RBAC), and session tracking.",
    tags: ["Spring Boot", "Spring Data JPA", "PostgreSQL", "JavaScript", "HTML/CSS"],
    category: "Full Stack",
    featured: true,
    githubUrl: "https://github.com/Rohit7346",
    liveUrl: "https://github.com/Rohit7346",
    highlights: [
      "Dual-mode (online/offline) functionality for continuous operations in varied network environments",
      "Role-based access control (RBAC) ensuring high security and role separation",
      "Comprehensive CRUD operations with Excel import/export capabilities",
      "Real-time user session management with automatic timeout features and simultaneous multi-user login tracking"
    ]
  },
  {
    id: "collaborative-presentation-editor",
    title: "Collaborative Presentation Editor",
    tagline: "Full-stack real-time PowerPoint-like presentation editor with cloud persistence",
    description: "Developed a full-stack PowerPoint-like presentation editor featuring real-time multi-user editing, slide canvas controls, MongoDB autosave, and advanced presentation tooling.",
    tags: ["React", "Vite", "Tailwind CSS", "Spring Boot", "MongoDB"],
    category: "Full Stack",
    featured: true,
    githubUrl: "https://github.com/Rohit7346",
    liveUrl: "https://github.com/Rohit7346",
    highlights: [
      "Editable slides, text, shapes, images, tables, charts, themes, layouts, and Ribbon-based controls",
      "Real-time collaborative editing with role-based access, synchronized slide/object updates, object locking, collaborator presence, and version checkpoints",
      "MongoDB-backed autosave and presentation persistence preserving complete slide elements, chart/table data, and state across reloads",
      "PowerPoint import, presentation CMS, data binding, presentation analytics, Smart Slide Remix, and Auto Arrange"
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: "bel-internship",
    role: "Intern — Software Solutions Division",
    company: "Bharat Electronics Limited (BEL)",
    location: "Bengaluru, India",
    period: "Aug 2025 — Sep 2025",
    description: "Engaged in enterprise-grade software engineering workflows and lifecycle practices within the Software Solutions Division at Bharat Electronics Limited.",
    achievements: [
      "Gained clear understanding of Software Development Life Cycle (SDLC) stages from requirement analysis to deployment and maintenance",
      "Contributed to development and testing tasks related to project workflows under engineering supervision",
      "Collaborated with research and engineering teams to enhance system accuracy and operational efficiency"
    ],
    skills: ["SDLC", "Software Testing", "System Architecture", "Quality Assurance", "Team Collaboration"],
    type: "work"
  },
  {
    id: "msruas-education",
    role: "B.E., Computer Science and Engineering (CGPA: 9.33)",
    company: "M S Ramaiah University of Applied Sciences",
    location: "Bengaluru, India",
    period: "Aug 2023 — July 2027",
    description: "Pursuing Bachelor of Engineering with an exceptional academic record (CGPA: 9.33), focusing on core systems engineering, algorithmic problem solving, and modern application development.",
    achievements: [
      "Outstanding Academic Record: CGPA of 9.33 / 10 in Computer Science & Engineering",
      "Core coursework: Data Structures & Algorithms, Operating Systems, DBMS, Network Security, Artificial Intelligence, OOPS Concept",
      "Hands-on project work developing production-ready systems using Spring Boot, React, and modern databases"
    ],
    skills: ["DSA", "DBMS", "Operating Systems", "Network Security", "AI", "OOPS"],
    type: "education"
  }
];
