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

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-background">
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

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlowCard 
                className="p-6 border border-surfaceLighter h-full flex flex-col justify-between"
                glowColor={
                  post.category === 'Research Notes' 
                    ? 'rgba(0, 210, 255, 0.08)' 
                    : post.category === 'Paper Summaries'
                    ? 'rgba(139, 92, 246, 0.08)'
                    : 'rgba(244, 63, 94, 0.08)'
                }
              >
                <div>
                  {/* Category Header */}
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-[9px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-surfaceLighter border ${
                      post.category === 'Research Notes' 
                        ? 'border-accent-cyan/30 text-accent-cyan' 
                        : post.category === 'Paper Summaries' 
                        ? 'border-accent-violet/30 text-accent-violet' 
                        : 'border-accent-pink/30 text-accent-pink'
                    }`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Title & Metadata */}
                  <h3 className="text-base sm:text-lg font-heading font-bold text-text-primary mb-3 hover:text-accent-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex items-center space-x-3 text-xs text-text-muted font-mono mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                {/* Read Action Button */}
                <div className="border-t border-surfaceLighter/50 pt-4">
                  <a 
                    href={`https://github.com/SiddharthSinghKushwaha`}
                    className="inline-flex items-center space-x-1 text-xs font-mono text-accent-cyan hover:underline"
                  >
                    <Terminal size={12} />
                    <span>cat read_post.sh</span>
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
