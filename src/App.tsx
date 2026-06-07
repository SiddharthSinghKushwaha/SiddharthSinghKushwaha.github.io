import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Research } from './components/Research';
import { DCCLab } from './components/DCCLab';
import { Blog } from './components/Blog';
import { Teaching } from './components/Teaching';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent-cyan/30 selection:text-accent-cyan overflow-x-hidden font-sans relative">
      {/* Custom Interactive Cursor */}
      <CustomCursor />

      {/* Dynamic background lighting points */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-violet/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-accent-pink/5 blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <Research />
        <DCCLab />
        <Blog />
        <Teaching />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
