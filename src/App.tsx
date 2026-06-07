import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent-cyan/30 selection:text-accent-cyan overflow-x-hidden font-sans relative">
      {/* Dynamic background lighting points */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-violet/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-accent-pink/5 blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
