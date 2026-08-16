import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { BookOpen, ExternalLink, Compass, Activity } from 'lucide-react';

interface ResearchProgressItem {
  title: string;
  status: string;
  link?: string;
}

export const Research: React.FC = () => {
  const researchProgress: ResearchProgressItem[] = [
    {
      title: "LLM-assisted Edge Intelligence (LEI)",
      status: "Revision 1 Under Review",
      link: "https://arxiv.org/abs/2604.09607"
    },
    {
      title: "Edge Intelligence Operations (EIOps)",
      status: "Submitted to IEEE MASS 2026"
    },
    {
      title: "Clustered Edge Intelligence (CEI)",
      status: "Submitted to IEEE BDA 2026"
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

        {/* Section 2: Research Progress (Table Layout) */}
        <div className="mb-20">
          <h3 className="text-xl font-heading font-bold text-text-primary mb-6 flex items-center space-x-2.5">
            <Activity size={20} className="text-accent-cyan" />
            <span>Research Progress</span>
          </h3>
          <div className="overflow-x-auto rounded-xl border border-surfaceLighter bg-surface/30">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-surfaceLighter bg-[#0B0F19]/50 font-mono text-xs text-text-muted uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Title / Name</th>
                  <th className="py-4 px-6 font-semibold">Status</th>
                  <th className="py-4 px-6 font-semibold text-right">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surfaceLighter/40 text-sm text-text-secondary">
                {researchProgress.map((item, idx) => (
                  <tr key={idx} className="hover:bg-surfaceLighter/20 transition-colors duration-200">
                    <td className="py-4 px-6 font-semibold text-text-primary">{item.title}</td>
                    <td className="py-4 px-6">
                      <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-surfaceLighter text-accent-cyan border border-surfaceLighter/60">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center space-x-1 text-accent-cyan hover:underline font-mono text-xs"
                        >
                          <span>Link</span>
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-text-muted font-mono text-xs">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Publications (APA Bibliographical Style) */}
        <div>
          <h3 className="text-xl font-heading font-bold text-text-primary mb-6 flex items-center space-x-2.5">
            <BookOpen size={20} className="text-accent-pink" />
            <span>Publications</span>
          </h3>
          
          <div className="space-y-8 font-sans">
            {/* Year 2026 */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-accent-cyan border-b border-surfaceLighter pb-1">
                2026
              </h4>
              <GlowCard className="p-6 border border-surfaceLighter bg-surface/20" glowColor="rgba(0, 210, 255, 0.05)">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="text-sm text-text-secondary leading-relaxed">
                    <span className="text-text-primary font-semibold">Kushwaha, S. S.</span>, &amp; Dehury, C. K. (2026). <span className="italic text-text-primary font-medium">LLM-assisted Agentic Edge Intelligence Framework</span>. arXiv preprint arXiv:2604.09607.
                  </div>
                  <a
                    href="https://arxiv.org/abs/2604.09607"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-surfaceLighter hover:bg-accent-cyan/15 hover:text-accent-cyan border border-surfaceLighter text-xs font-mono transition-all duration-300 self-start shrink-0"
                  >
                    <ExternalLink size={12} />
                    <span>arXiv:2604.09607</span>
                  </a>
                </div>
              </GlowCard>
            </div>

            {/* Year 2025 */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-accent-pink border-b border-surfaceLighter pb-1">
                2025
              </h4>
              <GlowCard className="p-6 border border-surfaceLighter bg-surface/20" glowColor="rgba(244, 63, 94, 0.05)">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="text-sm text-text-secondary leading-relaxed">
                    <span className="text-text-primary font-semibold">Kushwaha, S. S.</span>, &amp; Indian, A. (2025). Resource-Optimized Task Allocation in Distributed Edge Networks. <span className="italic text-text-primary font-medium">Proceedings of the International Conference on Advanced Computing &amp; Intelligent Systems</span>.
                  </div>
                  <a
                    href="https://github.com/SiddharthSinghKushwaha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-surfaceLighter hover:bg-accent-pink/15 hover:text-accent-pink border border-surfaceLighter text-xs font-mono transition-all duration-300 self-start shrink-0"
                  >
                    <ExternalLink size={12} />
                    <span>Publisher Link</span>
                  </a>
                </div>
              </GlowCard>
            </div>
          </div>

          {/* Scholar Fallback Link */}
          <div className="mt-10 text-center">
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
