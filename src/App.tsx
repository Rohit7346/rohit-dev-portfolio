import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#080d1a] dark:text-slate-100 relative selection:bg-cyan-500/20 selection:text-cyan-600 dark:selection:text-cyan-300 transition-colors duration-300">
      {/* Decorative ambient glowing backdrops */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[130px]" />
      </div>

      <Navbar />

      <main className="space-y-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
