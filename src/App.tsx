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
      <Navbar />

      <main className="space-y-8 relative z-10">
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
