import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { ExternalLink, Microscope, Monitor, Wrench } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'Research' | 'Teaching' | 'Tools';
  desc: string;
  tags: string[];
  github?: string;
  demo?: string;
  icon: React.ReactNode;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Research' | 'Teaching' | 'Tools'>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "Edge Intelligence Evaluator",
      category: "Research",
      desc: "An experimental evaluation framework designed to benchmark resource consumption, response times, and model accuracy for deep learning models at the edge.",
      tags: ["Python", "TensorFlow Lite", "Edge AI", "Benchmarking"],
      github: "https://github.com/SiddharthSinghKushwaha",
      icon: <Microscope className="text-accent-cyan" size={20} />
    },
    {
      id: 2,
      title: "Khallikote Classroom Toolkit",
      category: "Teaching",
      desc: "A suite of automation scripts created to assist grading, organize laboratory project files, and track student submissions for the CS courses at KUU.",
      tags: ["Python", "Pandas", "Automation", "Excel API"],
      github: "https://github.com/SiddharthSinghKushwaha",
      icon: <Monitor className="text-accent-violet" size={20} />
    },
    {
      id: 3,
      title: "Siddharth's Web Tools",
      category: "Tools",
      desc: "A public utility web application compiling developer aids, math utilities, and student tools for local research assistance.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      demo: "https://github.com/SiddharthSinghKushwaha",
      icon: <Wrench className="text-accent-pink" size={20} />
    },
    {
      id: 4,
      title: "Distributed Edge Task Scheduler",
      category: "Research",
      desc: "A simulator built under DCC Lab mapping Containerized Microservices dynamically to virtualized edge nodes using heuristic solvers.",
      tags: ["Python", "Docker", "Algorithms", "Simulation"],
      github: "https://github.com/SiddharthSinghKushwaha",
      icon: <Microscope className="text-accent-cyan" size={20} />
    },
    {
      id: 5,
      title: "Exam Block Invigilation Scheduler",
      category: "Teaching",
      desc: "A constraint-satisfaction scheduling algorithm that assigns invigilators to examination blocks fairly, respecting department constraints.",
      tags: ["C++", "Heuristics", "Scheduling", "CLI"],
      github: "https://github.com/SiddharthSinghKushwaha",
      icon: <Monitor className="text-accent-violet" size={20} />
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-surface/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary tracking-tight"
          >
            Featured <span className="bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-24 bg-accent-pink mx-auto mt-4 origin-left"
          />
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-16 flex-wrap gap-y-2">
          {(['All', 'Research', 'Teaching', 'Tools'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs md:text-sm transition-all duration-300 ${
                filter === tab
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-violet text-background font-semibold shadow-glow-cyan'
                  : 'bg-surface border border-surfaceLighter text-text-secondary hover:border-accent-cyan/40 hover:text-text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <GlowCard 
                  className="p-6 border border-surfaceLighter h-full flex flex-col justify-between"
                  glowColor={
                    project.category === 'Research' 
                      ? 'rgba(0, 210, 255, 0.1)' 
                      : project.category === 'Teaching' 
                      ? 'rgba(139, 92, 246, 0.1)' 
                      : 'rgba(244, 63, 94, 0.1)'
                  }
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-surfaceLighter/80 border ${
                        project.category === 'Research' 
                          ? 'border-accent-cyan/30 text-accent-cyan' 
                          : project.category === 'Teaching' 
                          ? 'border-accent-violet/30 text-accent-violet' 
                          : 'border-accent-pink/30 text-accent-pink'
                      }`}>
                        {project.category}
                      </span>
                      <div className="p-2 bg-surfaceLighter/40 rounded-lg text-text-secondary">
                        {project.icon}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-heading font-bold text-text-primary mb-2 hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono text-text-muted bg-surfaceLighter px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex space-x-4 border-t border-surfaceLighter/50 pt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-accent-cyan text-xs font-mono flex items-center space-x-1.5 transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                          <span>code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-accent-pink text-xs font-mono flex items-center space-x-1.5 transition-colors"
                        >
                          <ExternalLink size={14} />
                          <span>demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
