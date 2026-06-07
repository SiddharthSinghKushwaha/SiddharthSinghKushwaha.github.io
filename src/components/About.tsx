import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { ShieldCheck, BrainCircuit, Users, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const coreValues = [
    {
      icon: <ShieldCheck className="text-accent-cyan" size={24} />,
      title: "Discipline & Grit",
      desc: "A hardworking and disciplined guy who doesn't give up easily. I believe hard work is the key to creating opportunities."
    },
    {
      icon: <BrainCircuit className="text-accent-violet" size={24} />,
      title: "Always Learning",
      desc: "Eager to learn from others, regardless of topic or expertise. Even if I know something, I enjoy hearing different approaches."
    },
    {
      icon: <Users className="text-accent-pink" size={24} />,
      title: "Perspective Seeker",
      desc: "Fascinated by people's individual points of view and unique ways of looking at global or technical problems."
    },
    {
      icon: <Compass className="text-accent-purple" size={24} />,
      title: "Observation First",
      desc: "I prefer listening to speaking. Observation and reflection allow for deeper understanding and synthesis."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
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
            About <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-accent-cyan mx-auto mt-4 origin-left"
          />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar and Short Intro */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group mb-8"
            >
              {/* Decorative Glow Ring */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet opacity-75 blur-md group-hover:opacity-100 transition duration-500" />
              
              <img
                src="/avatar.png"
                alt="Siddharth Singh Kushwaha"
                className="relative rounded-xl w-64 h-64 sm:w-80 sm:h-80 object-cover bg-surface"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
                Siddharth Singh Kushwaha
              </h3>
              <p className="text-accent-cyan font-mono text-sm mb-4">
                Ph.D. Scholar | IISER Berhampur
              </p>
              <p className="text-text-secondary leading-relaxed mb-4 max-w-md">
                Currently pursuing doctoral research under the guidance of <a href="https://dcc.chinmayadehury.in/" target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline font-semibold">Dr. Chinmaya Kumar Dehury</a>. 
                My academic path has driven me to explore the frontiers of edge computing, where computational power meets localized intelligence.
              </p>
              <div className="p-4 rounded-lg bg-surface/40 border border-surfaceLighter font-mono text-xs text-text-secondary">
                <span className="text-accent-violet font-semibold">Advisor:</span> <a href="https://dcc.chinmayadehury.in/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent-cyan transition-colors">Dr. Chinmaya Kumar Dehury</a> <br/>
                <span className="text-accent-cyan font-semibold">Location:</span> IISER Berhampur, Odisha, India
              </div>
            </motion.div>
          </div>

          {/* Core Creed Card Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlowCard 
                    className="p-6 h-full border border-surfaceLighter flex flex-col space-y-4"
                    glowColor={idx % 2 === 0 ? "rgba(0, 210, 255, 0.1)" : "rgba(139, 92, 246, 0.1)"}
                  >
                    <div className="p-3 bg-surfaceLighter/60 rounded-lg w-fit">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-heading font-bold text-text-primary">
                      {value.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {value.desc}
                    </p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
