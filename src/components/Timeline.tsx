import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { Award, BookOpen, Presentation, Users, Briefcase } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  subtitle: string;
  desc: string[];
  icon: React.ReactNode;
  color: string;
}

export const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      date: "July 2024 - Present",
      title: "PhD Scholar",
      subtitle: "IISER Berhampur | DCC Lab",
      icon: <BookOpen className="text-background" size={18} />,
      color: "from-accent-cyan to-accent-violet",
      desc: [
        "Pursuing doctoral research in Computer Science under the guidance of Dr. Chinmaya Kumar Dehury.",
        "Member of the Distributed Computing Continuum Lab (DCC Lab).",
        "Focused on Edge Computing optimizations, Distributed Inference, and Localized Intelligence."
      ]
    },
    {
      date: "July 1, 2024 - Present",
      title: "Assistant Professor (Guest Faculty)",
      subtitle: "Khallikote Unitary University, Berhampur",
      icon: <Briefcase className="text-background" size={18} />,
      color: "from-accent-violet to-accent-pink",
      desc: [
        "Acted as the sole computer science faculty ('one-man army') for multiple PG and UG courses.",
        "Taught 15+ subjects monthly based on curriculum schedules and single-handedly coordinated lab classes.",
        "Drafted mid-semester question papers, evaluated tests, invigilated examinations, and provided student mentorship."
      ]
    },
    {
      date: "May 1, 2025",
      title: "PG Gold Medalist",
      subtitle: "CURAJ Convocation 2025 | Central University of Rajasthan",
      icon: <Award className="text-background" size={18} />,
      color: "from-accent-pink to-accent-purple",
      desc: [
        "Honored with the Post-Graduation Gold Medal for academic excellence.",
        "Presented the award by Prof. T.G. Sitharam (Chairman of the All India Council for Technical Education - AICTE)."
      ]
    },
    {
      date: "June 2025 (Presented Dec 2024)",
      title: "First Conference Publication",
      subtitle: "Presented under Dr. Ajay Indian",
      icon: <Presentation className="text-background" size={18} />,
      color: "from-accent-cyan to-accent-purple",
      desc: [
        "Published 'My First Conference Paper' summarizing novel research outcomes.",
        "Presented findings at the conference on December 19, 2024 under the mentorship of Dr. Ajay Indian."
      ]
    },
    {
      date: "2025 - 2026",
      title: "Academic Volunteering",
      subtitle: "AI Pre-Submit 2026 & INVENIO 2025",
      icon: <Users className="text-background" size={18} />,
      color: "from-accent-purple to-accent-cyan",
      desc: [
        "Served as a volunteer for AI Pre-Submit 2026, assisting in system organization and track reviews.",
        "Contributed to the execution of the INVENIO 2025 academic festival."
      ]
    }
  ];

  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary tracking-tight"
          >
            My <span className="bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary mt-2 text-sm font-mono"
          >
            PhD roadmaps, teaching logs, and academic milestones
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-28 bg-accent-cyan mx-auto mt-4 origin-left"
          />
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l border-surfaceLighter ml-4 md:ml-32 pl-8 space-y-12">
          
          {events.map((event, idx) => (
            <div key={idx} className="relative group">
              
              {/* Date tag for desktop (hidden on mobile, floating on left side of line) */}
              <div className="hidden md:block absolute -left-[148px] top-6 w-28 text-right font-mono text-xs text-text-secondary font-semibold">
                {event.date}
              </div>

              {/* Timeline dot */}
              <div className={`absolute -left-[41px] top-5 w-[18px] h-[18px] rounded-full border border-background flex items-center justify-center bg-gradient-to-r ${event.color} shadow-[0_0_10px_rgba(0,210,255,0.4)] z-20`}>
                <div className="w-1.5 h-1.5 bg-background rounded-full" />
              </div>

              {/* Date tag for mobile */}
              <div className="md:hidden font-mono text-xs text-accent-cyan font-bold mb-2 block">
                {event.date}
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlowCard 
                  className="p-6 border border-surfaceLighter hover:border-accent-cyan/20"
                  glowColor={idx % 2 === 0 ? "rgba(0, 210, 255, 0.08)" : "rgba(139, 92, 246, 0.08)"}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                        {event.title}
                      </h3>
                      <h4 className="text-xs sm:text-sm font-sans font-medium text-text-secondary mt-1">
                        {event.subtitle}
                      </h4>
                    </div>
                    {/* Circle icon */}
                    <div className={`p-2.5 rounded-lg bg-gradient-to-r ${event.color} flex items-center justify-center shrink-0`}>
                      {event.icon}
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-sm text-text-secondary leading-relaxed">
                    {event.desc.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start space-x-2">
                        <span className="text-accent-cyan font-bold mt-1 shrink-0">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
