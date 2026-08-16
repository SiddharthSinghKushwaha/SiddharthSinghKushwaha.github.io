import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { Wrench, Box, HelpCircle, ExternalLink } from 'lucide-react';

interface LabItem {
  title: string;
  desc: string;
  tags: string[];
  link?: string;
}

export const DCCLab: React.FC = () => {
  const tools: LabItem[] = [
    {
      title: "Siddharth's Web Tools",
      desc: "A developer utility website providing quick calculations, hashing tools, and conversion logs for local computer science students.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/SiddharthSinghKushwaha"
    }
  ];

  const sideProjects: LabItem[] = [
    {
      title: "SBC Thermal Predictor",
      desc: "A simple command-line Python script that monitors real-time CPU thermal logs and forecasts thermal throttling events using linear regression.",
      tags: ["Python", "Scikit-Learn", "SBC Monitoring"],
      link: "https://github.com/SiddharthSinghKushwaha"
    }
  ];

  const prototypes: LabItem[] = [
    {
      title: "Edge Latency Visualizer",
      desc: "An early proof-of-concept visualizing network request delays across distributed edge locations in real-time.",
      tags: ["WebSocket", "D3.js", "Node.js"],
      link: "https://github.com/SiddharthSinghKushwaha"
    }
  ];

  return (
    <section id="dcc-lab" className="py-24 relative overflow-hidden bg-surface/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary tracking-tight"
          >
            DCC <span className="bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">Lab</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary mt-2 text-sm font-mono"
          >
            Distributed Computing Continuum Lab - Building in Public
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-accent-pink mx-auto mt-4 origin-left"
          />
        </div>

        {/* DCC Lab Website Link - Placed First */}
        <div className="flex justify-center mb-16">
          <motion.a 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="https://dcc.chinmayadehury.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg border border-accent-pink/30 bg-accent-pink/5 hover:bg-accent-pink/10 text-accent-pink font-semibold transition-all duration-300 shadow-md text-sm font-mono"
          >
            <span>Visit DCC Lab Website</span>
            <ExternalLink size={14} />
          </motion.a>
        </div>

        {/* Lab Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Tools Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-text-primary flex items-center space-x-2 border-b border-surfaceLighter pb-2">
              <Wrench size={16} className="text-accent-cyan" />
              <span>Research Tools & Utilities</span>
            </h3>
            {tools.map((item, idx) => (
              <GlowCard key={idx} className="p-5 border border-surfaceLighter" glowColor="rgba(0, 210, 255, 0.08)">
                <h4 className="font-heading font-bold text-text-primary text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map(t => (
                    <span key={t} className="text-[9px] font-mono bg-surfaceLighter px-2 py-0.5 rounded text-text-muted">{t}</span>
                  ))}
                </div>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-accent-cyan hover:underline">
                    view_tool()
                  </a>
                )}
              </GlowCard>
            ))}
          </div>

          {/* Side Projects Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-text-primary flex items-center space-x-2 border-b border-surfaceLighter pb-2">
              <Box size={16} className="text-accent-violet" />
              <span>Side Projects & explorations</span>
            </h3>
            {sideProjects.map((item, idx) => (
              <GlowCard key={idx} className="p-5 border border-surfaceLighter" glowColor="rgba(139, 92, 246, 0.08)">
                <h4 className="font-heading font-bold text-text-primary text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map(t => (
                    <span key={t} className="text-[9px] font-mono bg-surfaceLighter px-2 py-0.5 rounded text-text-muted">{t}</span>
                  ))}
                </div>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-accent-violet hover:underline">
                    view_project()
                  </a>
                )}
              </GlowCard>
            ))}
          </div>

          {/* Prototypes Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-text-primary flex items-center space-x-2 border-b border-surfaceLighter pb-2">
              <HelpCircle size={16} className="text-accent-pink" />
              <span>Research Prototypes</span>
            </h3>
            {prototypes.map((item, idx) => (
              <GlowCard key={idx} className="p-5 border border-surfaceLighter" glowColor="rgba(244, 63, 94, 0.08)">
                <h4 className="font-heading font-bold text-text-primary text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map(t => (
                    <span key={t} className="text-[9px] font-mono bg-surfaceLighter px-2 py-0.5 rounded text-text-muted">{t}</span>
                  ))}
                </div>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-accent-pink hover:underline">
                    view_prototype()
                  </a>
                )}
              </GlowCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
