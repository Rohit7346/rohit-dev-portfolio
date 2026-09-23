# Rohit's Personal Portfolio 🚀

A high-performance, modern, and customizable developer portfolio built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

---

## ✨ Features

- **Modern Glassmorphic Dark UI**: Ambient glow backdrops, frosted glass cards, and high-contrast typography.
- **Single Config Customization**: Update your name, role, bio, metrics, skills, projects, and contact info in one file: `src/data/portfolioData.ts`.
- **Interactive Sections**:
  - **Hero**: Available-to-hire pulsating status badge, responsive CTAs, developer code snippet card.
  - **About**: Bio, core engineering pillars, and impact stats.
  - **Skills & Tech Stack**: Categorized skills (Frontend, Backend, Cloud, Tools, Languages) with highlight badges.
  - **Projects Showcase**: Filterable by category (Full Stack, Frontend, Backend, AI/Systems) with GitHub & live preview links.
  - **Experience & Education**: Timeline tracking milestones, roles, and achievements.
  - **Contact**: Interactive form + 1-click clipboard email copy utility + mailto fallback.
- **Responsive**: Pixel-perfect on mobile, tablet, and desktop screens.
- **Fast & Optimized**: Zero-lag client-side rendering with sub-second page loads.

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ⚙️ How to Personalize Your Content

All data is separated cleanly from UI components. Open:
👉 `src/data/portfolioData.ts`

Here you can easily edit:
- **`profileData`**: Your name, headline, email (`rohit132005kv@gmail.com`), bio, social links (GitHub, LinkedIn).
- **`skillCategories`**: Add or modify your technical skills and tools.
- **`projectsData`**: Add your own project titles, tags, live links, and GitHub repositories.
- **`experienceData`**: Update your career history, university/education, or achievements.

---

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push this repository to your GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework preset: **Vite** (detected automatically).
4. Click **Deploy**.

### Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
