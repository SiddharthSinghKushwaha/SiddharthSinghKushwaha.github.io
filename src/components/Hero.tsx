import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface StarParticle {
  x: number;
  y: number;
  z: number;
  text: string;
  color: string;
}

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const focalLength = 300;

  // Icons
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
    let stars: StarParticle[] = [];
    const numStars = 400;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initializeStars();
    };

    const initializeStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
          text: Math.random() > 0.5 ? "1" : "0",
          color: Math.random() > 0.5 ? "rgba(0, 210, 255, " : "rgba(139, 92, 246, "
        });
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.fillStyle = "rgba(11, 15, 25, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const currentCenterX = canvas.width / 2;
      const currentCenterY = canvas.height / 2;

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];

        star.z -= 1.8;

        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.text = Math.random() > 0.5 ? "1" : "0";
        }

        const k = focalLength / star.z;
        const px = (star.x - currentCenterX) * k + currentCenterX;
        const py = (star.y - currentCenterY) * k + currentCenterY;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = Math.max(3, Math.min(22, 2.2 * k));
          const alpha = Math.min(0.7, (1 - star.z / canvas.width));

          ctx.font = `bold ${size}px "JetBrains Mono", monospace`;
          ctx.fillStyle = `${star.color}${alpha})`;
          ctx.fillText(star.text, px, py);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-background"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      <div className="glow-blob bg-accent-cyan/10 top-1/4 left-10 w-[350px] h-[350px]" />
      <div className="glow-blob bg-accent-violet/10 bottom-1/4 right-10 w-[400px] h-[400px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Side: Avatar and Quick Metadata */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group mb-6"
          >
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
              Ph.D. Scholar
            </p>
            <p className="text-text-secondary text-xs sm:text-sm mb-4">
              Distributed Computing Continuum Lab (DCC Lab) | IISER Berhampur
            </p>

            {/* Quick Links Social Grid */}
            <div className="flex space-x-3.5 mt-2">
              <a
                href="https://scholar.google.com"
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
                href="https://orcid.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface border border-surfaceLighter text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300"
                title="ORCID"
              >
                {orcidIcon}
              </a>
              <a
                href="mailto:2510601@iiserbpr.ac.in"
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
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-sans">
              I am a doctoral researcher advised by <a href="https://dcc.chinmayadehury.in/" target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline font-semibold">Dr. Chinmaya Kumar Dehury</a> at IISER Berhampur. 
              My research statement focuses on designing resource-efficient schedulers, lightweight container systems, and localized intelligence algorithms to optimize performance across the distributed computing continuum.
            </p>
          </motion.div>

          {/* Research Interests Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 gap-4 pt-4 border-t border-surfaceLighter/40"
          >
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-2">Research Interests</h4>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  <span>Edge Computing & Virtualization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  <span>Distributed Edge Intelligence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  <span>Resource-constrained Scheduling</span>
                </li>
              </ul>
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
              Attended Summer School on Edge AI and Robotics at IISc Bengaluru (July 2026).
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
