import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { BookOpen, ExternalLink, Code, Layers, Compass, BarChart } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  date: string;
  mentor: string;
  links: {
    paper?: string;
    code?: string;
    slides?: string;
  };
}

interface ResearchProject {
  title: string;
  status: string;
  goal: string;
  progress: string;
}

export const Research: React.FC = () => {
  const projects: ResearchProject[] = [
    {
      title: "Edge Heuristic Scheduling Solver (EHSS)",
      status: "Active",
      goal: "Design lightweight scheduling algorithms that dynamically distribute containerized model inference workloads based on CPU/GPU thermal limits and local network bandwidth.",
      progress: "Developed initial heuristic models in Python. Testing simulator on cluster of Single Board Computers (SBCs)."
    },
    {
      title: "Container Footprint Profiler (CFP)",
      status: "Active",
      goal: "Measure memory and CPU scheduling latency overhead of Docker and Podman microservices on micro-controller class architectures during data burst events.",
      progress: "Aggregated performance data for microservice deployments. Pre-drafting experimental evaluations for next conference track."
    }
  ];

  const publications: Publication[] = [
    {
      title: "Resource-Optimized Task Allocation in Distributed Edge Networks",
      authors: "Siddharth Singh Kushwaha, Ajay Indian",
      venue: "International Conference on Advanced Computing & Intelligent Systems",
      date: "Published: June 2025 (Presented: 19 December 2024)",
      mentor: "Dr. Ajay Indian",
      links: {
        paper: "https://github.com/SiddharthSinghKushwaha",
        code: "https://github.com/SiddharthSinghKushwaha",
        slides: "https://github.com/SiddharthSinghKushwaha"
      }
    }
  ];

  return (
    <section id="research" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary tracking-tight"
          >
            My <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">Research</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-accent-cyan mx-auto mt-4 origin-left"
          />
        </div>

        {/* Section 1: Research Interests & Vision */}
        <div className="mb-20">
          <h3 className="text-xl font-heading font-bold text-text-primary mb-6 flex items-center space-x-2.5">
            <Compass size={20} className="text-accent-cyan" />
            <span>Research Interests & Vision</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard className="p-6 border border-surfaceLighter" glowColor="rgba(0, 210, 255, 0.05)">
              <h4 className="font-heading font-bold text-text-primary mb-2">Core Areas</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Distributed computing systems, localized resource optimization, container virtualization at the edge, and resource-efficient scheduling algorithms.
              </p>
            </GlowCard>
            <GlowCard className="p-6 border border-surfaceLighter" glowColor="rgba(139, 92, 246, 0.05)">
              <h4 className="font-heading font-bold text-text-primary mb-2">Long-Term Vision</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Harnessing localized resource nodes to create an intelligent and resilient compute continuum, minimizing dependency on central cloud fabrics.
              </p>
            </GlowCard>
            <GlowCard className="p-6 border border-surfaceLighter" glowColor="rgba(244, 63, 94, 0.05)">
              <h4 className="font-heading font-bold text-text-primary mb-2">Current Directions</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Evaluating single-board computer clusters (SBCs) to mimic real-world smart-city or industrial IoT nodes under severe memory and CPU constraints.
              </p>
            </GlowCard>
          </div>
        </div>

        {/* Section 2: Current Projects */}
        <div className="mb-20">
          <h3 className="text-xl font-heading font-bold text-text-primary mb-6 flex items-center space-x-2.5">
            <Layers size={20} className="text-accent-violet" />
            <span>Active Research Projects</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <GlowCard key={idx} className="p-6 border border-surfaceLighter" glowColor="rgba(139, 92, 246, 0.08)">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-heading font-bold text-text-primary">{project.title}</h4>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  <strong>Objective:</strong> {project.goal}
                </p>
                <div className="p-3 bg-background/50 rounded-lg border border-surfaceLighter/40 text-xs text-text-secondary font-mono">
                  <span className="text-accent-violet font-semibold">Progress:</span> {project.progress}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Section 3: Publications */}
        <div>
          <h3 className="text-xl font-heading font-bold text-text-primary mb-6 flex items-center space-x-2.5">
            <BookOpen size={20} className="text-accent-pink" />
            <span>Publications</span>
          </h3>
          
          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <GlowCard key={idx} className="p-6 border border-surfaceLighter" glowColor="rgba(0, 210, 255, 0.08)">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-accent-cyan border border-accent-cyan/20 bg-accent-cyan/5 px-2 py-0.5 rounded">
                      Conference Paper
                    </span>
                    <h4 className="text-lg font-heading font-bold text-text-primary pt-1.5">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {pub.authors}
                    </p>
                    <p className="text-xs text-text-muted italic">
                      {pub.venue} &bull; {pub.date}
                    </p>
                    {pub.mentor && (
                      <p className="text-[11px] text-text-muted font-mono">
                        Mentor: {pub.mentor}
                      </p>
                    )}
                  </div>

                  {/* Actions Links */}
                  <div className="flex space-x-3 self-start md:self-center">
                    {pub.links.paper && (
                      <a
                        href={pub.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded bg-surfaceLighter hover:bg-accent-cyan/15 hover:text-accent-cyan border border-surfaceLighter text-xs font-mono transition-all duration-300"
                      >
                        <ExternalLink size={12} />
                        <span>Paper</span>
                      </a>
                    )}
                    {pub.links.code && (
                      <a
                        href={pub.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded bg-surfaceLighter hover:bg-accent-cyan/15 hover:text-accent-cyan border border-surfaceLighter text-xs font-mono transition-all duration-300"
                      >
                        <Code size={12} />
                        <span>Code</span>
                      </a>
                    )}
                    {pub.links.slides && (
                      <a
                        href={pub.links.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded bg-surfaceLighter hover:bg-accent-cyan/15 hover:text-accent-cyan border border-surfaceLighter text-xs font-mono transition-all duration-300"
                      >
                        <BarChart size={12} />
                        <span>Slides</span>
                      </a>
                    )}
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>

          {/* Scholar Fallback Link */}
          <div className="mt-8 text-center">
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-accent-cyan hover:underline font-mono"
            >
              <span>View full Google Scholar profile</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
