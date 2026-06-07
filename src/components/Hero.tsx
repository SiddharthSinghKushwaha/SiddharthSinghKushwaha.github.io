import React, { useEffect, useRef, useState } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  size: number;
  baseAlpha: number;
  alpha: number;
  targetSlot: number | null; // index of slot if attracted
}

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  // Quick Links SVGs
  const scholarIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
    </svg>
  );

  const orcidIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.37 18.067H6.155V5.933H7.37v12.134zm-.607-13.31a.762.762 0 0 1-.762-.762c0-.42.342-.762.762-.762.42 0 .762.342.762.762 0 .42-.34.762-.762.762zm10.74 13.31h-1.258V12.78c0-1.636-.575-2.228-1.76-2.228-1.127 0-1.745.748-1.745 2.228v5.287h-1.246V5.933h1.246v4.672c.42-.589 1.135-.867 1.956-.867 2.052 0 2.807 1.488 2.807 3.522v4.807z"/>
    </svg>
  );

  const githubIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );

  const linkedinIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );

  const emailIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 80;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        text: Math.random() > 0.5 ? "1" : "0",
        size: Math.random() * 6 + 10,
        baseAlpha: Math.random() * 0.25 + 0.1,
        alpha: 0,
        targetSlot: null,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = 'bold 12px "JetBrains Mono", monospace';

      // If mouse is active, sort particles by distance to find the closest 4 to form "1010"
      let closestIndices: number[] = [];
      if (mousePos) {
        const distances = particles.map((p, idx) => {
          const dx = p.x - mousePos.x;
          const dy = p.y - mousePos.y;
          return { idx, dist: Math.sqrt(dx * dx + dy * dy) };
        });
        distances.sort((a, b) => a.dist - b.dist);
        closestIndices = distances.slice(0, 4).map(d => d.idx);
      }

      // Slot target offsets from mouse position: forming "1010" horizontally below the cursor
      // Slots layout: [1] [0] [1] [0]
      const slotOffsets = [
        { dx: -27, dy: 22, char: "1" },
        { dx: -9, dy: 22, char: "0" },
        { dx: 9, dy: 22, char: "1" },
        { dx: 27, dy: 22, char: "0" }
      ];

      particles.forEach((p, idx) => {
        // Reset slot reference
        p.targetSlot = null;

        if (mousePos) {
          const slotIdx = closestIndices.indexOf(idx);
          if (slotIdx !== -1) {
            p.targetSlot = slotIdx;
          }
        }

        // Behavior based on slot assignment
        if (p.targetSlot !== null && mousePos) {
          const target = slotOffsets[p.targetSlot];
          const targetX = mousePos.x + target.dx;
          const targetY = mousePos.y + target.dy;

          // Slide quickly toward the mouse slot (spring interpolation)
          p.x += (targetX - p.x) * 0.18;
          p.y += (targetY - p.y) * 0.18;
          
          // Override text to form "1010" sequence
          p.text = target.char;
          // Glow and make it highly visible
          p.alpha += (0.9 - p.alpha) * 0.15;
        } else {
          // Normal physics (random drift)
          p.x += p.vx;
          p.y += p.vy;

          // Reset text to random binary state if it was modified
          if (p.text !== "0" && p.text !== "1") {
            p.text = Math.random() > 0.5 ? "1" : "0";
          }

          // Ease alpha back to base opacity
          p.alpha += (p.baseAlpha - p.alpha) * 0.1;

          // Boundary bounce
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        }

        // Draw particle
        ctx.fillStyle = p.targetSlot !== null 
          ? `rgba(0, 210, 255, ${p.alpha})` // Cyan glow for clustered cursor numbers
          : `rgba(139, 92, 246, ${p.alpha})`; // Purple drift color
        
        ctx.fillText(p.text, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePos]);

  // Track Mouse Movements in the Hero Container
  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-background"
    >
      {/* Interactive canvas background */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Static gradient glow blob */}
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] rounded-full bg-accent-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Side: Avatar and Quick Metadata */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group mb-6"
          >
            {/* Cyan/Violet border glow */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent-cyan to-accent-violet opacity-50 blur-sm group-hover:opacity-80 transition duration-500" />
            <img
              src="./avatar.png"
              alt="Siddharth Singh Kushwaha"
              className="relative rounded-2xl w-60 h-60 sm:w-72 sm:h-72 object-cover bg-surface border border-surfaceLighter"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start"
          >
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary tracking-tight mb-2">
              Siddharth Singh Kushwaha
            </h1>
            <p className="text-accent-cyan font-mono text-sm mb-1 font-semibold">
              Ph.D. Scholar & CS Researcher
            </p>
            <p className="text-text-secondary text-xs sm:text-sm mb-4">
              Distributed Computing Continuum Lab (DCC Lab) | IISER Berhampur
            </p>

            {/* Quick Links Social Grid */}
            <div className="flex space-x-3.5 mt-2">
              <a
                href="https://scholar.google.com" // Google Scholar
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface border border-surfaceLighter text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300"
                title="Google Scholar"
              >
                {scholarIcon}
              </a>
              <a
                href="https://github.com/SiddharthSinghKushwaha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface border border-surfaceLighter text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300"
                title="GitHub"
              >
                {githubIcon}
              </a>
              <a
                href="https://www.linkedin.com/in/siddharth-phd-iiserbpr-dcclab/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface border border-surfaceLighter text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300"
                title="LinkedIn"
              >
                {linkedinIcon}
              </a>
              <a
                href="https://orcid.org" // ORCID
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface border border-surfaceLighter text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300"
                title="ORCID"
              >
                {orcidIcon}
              </a>
              <a
                href="mailto:siddharthsinghkushwaha@gmail.com"
                className="p-2.5 rounded-lg bg-surface border border-surfaceLighter text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300"
                title="Email"
              >
                {emailIcon}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Research Focus & Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-accent-cyan font-mono text-xs font-bold tracking-wider uppercase bg-accent-cyan/5 border border-accent-cyan/20 px-3 py-1 rounded-full">
              Research Profile
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary leading-tight">
              Investigating the boundaries of localized computation.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-sans">
              I am a doctoral researcher advised by <a href="https://dcc.chinmayadehury.in/" target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline font-semibold">Dr. Chinmaya Kumar Dehury</a> at IISER Berhampur. 
              My research statement focuses on designing resource-efficient schedulers, lightweight container systems, and localized intelligence algorithms to optimize performance across the distributed computing continuum.
            </p>
          </motion.div>

          {/* Research Interests and Focus Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-surfaceLighter/40"
          >
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-2">Research Interests</h4>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  <span>Edge Computing & virtualization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  <span>Distributed Edge Intelligence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  <span>Resource-constrained scheduling</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-2">Current Focus</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Benchmarking containerized microservices and writing scheduling heuristics that reduce inference latency on IoT-class machines.
              </p>
            </div>
          </motion.div>

          {/* Recent Updates ticker box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-4 rounded-xl bg-surface/40 border border-surfaceLighter flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <div className="flex items-center space-x-2.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan"></span>
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-cyan">Recent Update</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary text-left flex-1 pl-0 sm:pl-4">
              Presented conference paper under mentorship of Dr. Ajay Indian (Published June 2025).
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
