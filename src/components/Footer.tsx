import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080B12] border-t border-surfaceLighter py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Logo and Advisor details */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-lg font-heading font-bold text-text-primary">
            <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">Sid.</span>
          </div>
          <p className="text-xs text-text-muted mt-1.5 font-mono">
            Ph.D. Scholar advised by <a href="https://dcc.chinmayadehury.in/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors font-semibold">Dr. Chinmaya Kumar Dehury</a>
          </p>
          <p className="text-[10px] text-text-muted mt-0.5 font-mono">
            Distributed Computing Continuum Lab (DCC Lab), IISER Berhampur
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex space-x-6 text-sm text-text-secondary font-mono">
          <a href="#home" className="hover:text-accent-cyan transition-colors">home</a>
          <a href="#about" className="hover:text-accent-cyan transition-colors">about</a>
          <a href="#timeline" className="hover:text-accent-cyan transition-colors">journey</a>
          <a href="#projects" className="hover:text-accent-cyan transition-colors">projects</a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right font-mono text-xs text-text-secondary flex items-center space-x-1.5">
          <span>@copyright 2026 Sid</span>
          <Heart size={12} className="text-accent-pink fill-accent-pink animate-pulse" />
          <span>All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};
