import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { Calendar, Clock, Terminal } from 'lucide-react';

interface BlogPost {
  title: string;
  category: 'Research Notes' | 'Paper Summaries' | 'Personal Insights';
  date: string;
  readTime: string;
  summary: string;
  slug: string;
}

export const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      title: "Profiling CPU Throttling on Raspberry Pi 4 Cluster Nodes",
      category: "Research Notes",
      date: "May 14, 2026",
      readTime: "5 min read",
      summary: "Exploring CPU throttling behavior when executing dynamic scheduling heuristic pipelines under intensive container workloads on single-board computer setups.",
      slug: "profiling-cpu-throttling-sbc"
    },
    {
      title: "Paper Summary: Orchestrating Task Workloads in Edge Environments",
      category: "Paper Summaries",
      date: "April 2, 2026",
      readTime: "8 min read",
      summary: "Breaking down key task offloading algorithms, network delay models, and CPU scheduling limits in recent edge computing literature. Focus on latency tradeoffs.",
      slug: "paper-summary-edge-scheduling"
    },
    {
      title: "My Ph.D. Journey: The Practical Value of Grit and Active Listening",
      category: "Personal Insights",
      date: "February 28, 2026",
      readTime: "4 min read",
      summary: "Reflecting on why discipline, systematic hard work, and a preference for listening over speaking make a difference in building research models and handling academic challenges.",
      slug: "phd-journey-grit-listening"
    }
  ];

  // Repeat the list to allow infinite marquee scrolling
  const repeatedPosts = [...posts, ...posts, ...posts, ...posts];

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-background">
      {/* Inline styles for the infinite horizontal marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}} />

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
            My <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">Blog</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary mt-2 text-sm font-mono"
          >
            Sharing logs, paper reviews, and academic journey reflections
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-accent-cyan mx-auto mt-4 origin-left"
          />
        </div>

        {/* Marquee Card Slider */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Subtle horizontal gradient overlays for faded edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee moving container */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] space-x-6 w-max cursor-pointer">
            {repeatedPosts.map((post, idx) => (
              <div key={idx} className="w-[300px] sm:w-[360px] flex-shrink-0">
                <GlowCard 
                  className="p-6 border border-surfaceLighter h-[260px] flex flex-col justify-between"
                  glowColor={
                    post.category === 'Research Notes' 
                      ? 'rgba(0, 210, 255, 0.08)' 
                      : post.category === 'Paper Summaries'
                      ? 'rgba(139, 92, 246, 0.08)'
                      : 'rgba(244, 63, 94, 0.08)'
                  }
                >
                  <div>
                    {/* Category */}
                    <div className="flex justify-between items-center mb-3">
                      <span className={`text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-surfaceLighter border ${
                        post.category === 'Research Notes' 
                          ? 'border-accent-cyan/30 text-accent-cyan' 
                          : post.category === 'Paper Summaries' 
                          ? 'border-accent-violet/30 text-accent-violet' 
                          : 'border-accent-pink/30 text-accent-pink'
                      }`}>
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-heading font-bold text-text-primary mb-2 line-clamp-2 hover:text-accent-cyan transition-colors">
                      {post.title}
                    </h3>

                    {/* Metadata */}
                    <div className="flex items-center space-x-3 text-[10px] text-text-muted font-mono mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={10} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={10} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  {/* Read Link */}
                  <div className="border-t border-surfaceLighter/40 pt-3 flex items-center">
                    <a 
                      href={`https://github.com/SiddharthSinghKushwaha`}
                      className="inline-flex items-center space-x-1 text-[10px] font-mono text-accent-cyan hover:underline"
                    >
                      <Terminal size={10} />
                      <span>cat read_post.sh</span>
                    </a>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
