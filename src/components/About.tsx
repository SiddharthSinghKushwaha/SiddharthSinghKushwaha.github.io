import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { GraduationCap, Award, HeartHandshake, FileText, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="text-accent-cyan" size={20} />,
      title: "PG Gold Medalist",
      subtitle: "CURAJ Convocation 2025",
      desc: "Received the post-graduation gold medal for top academic performance at the Central University of Rajasthan, presented by Prof. T.G. Sitharam (Chairman of AICTE) on 1st May, 2025."
    },
    {
      icon: <HeartHandshake className="text-accent-violet" size={20} />,
      title: "Academic Volunteering",
      subtitle: "AI Pre-Submit 2026 & INVENIO 2025",
      desc: "Contributed as a student coordinator/volunteer for the AI Pre-Submit 2026 review track, and supported the INVENIO 2025 academic festival."
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Academic Background & CV */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-text-primary flex items-center space-x-2.5">
                <GraduationCap size={24} className="text-accent-cyan" />
                <span>Academic Journey</span>
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                I am a Ph.D. Scholar at <strong>IISER Berhampur</strong> working inside the <strong>Distributed Computing Continuum Lab (DCC Lab)</strong>. Under the guidance of <a href="https://dcc.chinmayadehury.in/" target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline font-semibold">Dr. Chinmaya Kumar Dehury</a>, I research scheduling solutions and resource allocation schemes that reduce memory and processing delay for edge nodes.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Prior to my Ph.D., I completed my post-graduation at the <strong>Central University of Rajasthan (CURAJ)</strong>, where I was honored with the Gold Medal for academic performance. My journey has been defined by systematic discipline, a passion for understanding hardware-software interactions, and building open-source prototypes.
              </p>
            </div>

            {/* CV Download action card */}
            <GlowCard className="p-6 border border-surfaceLighter" glowColor="rgba(0, 210, 255, 0.08)">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent-cyan/10 rounded-xl text-accent-cyan">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-text-primary text-sm">Curriculum Vitae</h4>
                    <p className="text-xs text-text-muted">Updated June 2026 &bull; PDF Format</p>
                  </div>
                </div>
                <a
                  href="/resume.pdf"
                  download="Siddharth_Singh_Kushwaha_CV.pdf"
                  className="inline-flex items-center space-x-1 px-4 py-2 rounded-lg font-mono text-xs font-semibold text-background bg-accent-cyan hover:bg-accent-cyan/95 transition-all shadow-md"
                >
                  <span>download_cv()</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </GlowCard>
          </div>

          {/* Right Column: Achievements & Activities */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-heading font-bold text-text-primary flex items-center space-x-2.5 mb-2">
              <Award size={24} className="text-accent-violet" />
              <span>Achievements & Activities</span>
            </h3>

            <div className="space-y-6">
              {achievements.map((item, idx) => (
                <GlowCard key={idx} className="p-5 border border-surfaceLighter" glowColor={idx === 0 ? "rgba(0, 210, 255, 0.08)" : "rgba(139, 92, 246, 0.08)"}>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-surfaceLighter rounded-lg text-text-secondary mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-text-primary text-sm">{item.title}</h4>
                      <h5 className="text-[11px] font-mono text-text-muted uppercase tracking-wider mb-2">{item.subtitle}</h5>
                      <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
