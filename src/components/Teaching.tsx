import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { Briefcase, GraduationCap, Download, FileText } from 'lucide-react';

interface CourseResource {
  title: string;
  type: string;
  size: string;
}

export const Teaching: React.FC = () => {
  const resources: CourseResource[] = [
    { title: "Operating Systems - Process Scheduling Notes", type: "Lecture Notes", size: "1.4 MB" },
    { title: "Computer Networks - TCP/IP Flow Control Slides", type: "Lecture Slides", size: "2.8 MB" },
    { title: "Edge Computing Continuum - Introduction Tutorial Sheet", type: "Tutorial Sheet", size: "850 KB" }
  ];

  return (
    <section id="teaching" className="py-24 relative overflow-hidden bg-surface/10">
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
            Teaching & <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">Mentoring</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary mt-2 text-sm font-mono"
          >
            Assistant Professor duties, graduate TA assignments, and academic slides
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-accent-violet mx-auto mt-4 origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Teaching & TA Experience */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Guest Faculty Card */}
            <GlowCard className="p-6 border border-surfaceLighter h-full flex flex-col justify-between" glowColor="rgba(0, 210, 255, 0.08)">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                      July 2024 - Present
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-text-primary mt-2">
                      Assistant Professor (Guest Faculty)
                    </h3>
                    <h4 className="text-sm font-sans text-text-secondary">
                      Khallikote Unitary University, Berhampur
                    </h4>
                  </div>
                  <div className="p-2 bg-accent-cyan/10 rounded-lg text-accent-cyan">
                    <Briefcase size={20} />
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  Acted as a crucial CS faculty member coordinating large UG and PG student batches. Designed exams, held labs, and lectured on major core subjects:
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Operating Systems", "Computer Networks", "Database Systems", "Data Structures", "Web Tech", "OOP"].map(tag => (
                    <span key={tag} className="text-[10px] font-mono bg-surfaceLighter px-2.5 py-0.5 rounded text-text-secondary border border-surfaceLighter/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-background/50 border border-surfaceLighter/40 text-xs text-text-secondary leading-relaxed italic">
                &ldquo;Taught 100+ students monthly, coordinated laboratory modules single-handedly, and mentored students through academic and career directions.&rdquo;
              </div>
            </GlowCard>

            {/* TA Card */}
            <GlowCard className="p-6 border border-surfaceLighter" glowColor="rgba(139, 92, 246, 0.08)">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-accent-violet/10 text-accent-violet border border-accent-violet/20">
                    July 2024 - Present
                  </span>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-text-primary mt-2">
                    Graduate Teaching Assistant (TA)
                  </h3>
                  <h4 className="text-sm font-sans text-text-secondary">
                    IISER Berhampur
                  </h4>
                </div>
                <div className="p-2 bg-accent-violet/10 rounded-lg text-accent-violet">
                  <GraduationCap size={20} />
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mt-4">
                Assisted in supervising laboratory practicals, graded final notebooks, and conducted regular consultation sessions to clarify system implementation queries for student cohorts.
              </p>
            </GlowCard>

          </div>

          {/* Right Column: Teaching Resources */}
          <div className="lg:col-span-5">
            <GlowCard className="p-6 border border-surfaceLighter h-full flex flex-col justify-between" glowColor="rgba(244, 63, 94, 0.08)">
              <div className="w-full">
                <h3 className="text-lg font-heading font-bold text-text-primary mb-4 flex items-center space-x-2">
                  <FileText size={18} className="text-accent-pink" />
                  <span>Public Learning Resources</span>
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  Lectures notes, study logs, and homework sheets distributed for my classroom students. Available for public download.
                </p>

                <div className="space-y-4">
                  {resources.map((res, idx) => (
                    <div key={idx} className="p-3 bg-background/50 border border-surfaceLighter/40 rounded-xl flex items-center justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs sm:text-sm font-heading font-bold text-text-primary truncate">{res.title}</h4>
                        <div className="flex items-center space-x-2 text-[10px] text-text-muted font-mono mt-0.5">
                          <span className="text-accent-pink">{res.type}</span>
                          <span>&bull;</span>
                          <span>{res.size}</span>
                        </div>
                      </div>
                      <a
                        href="/resume.pdf" // redirect to general folder file or doc
                        download={res.title}
                        className="p-2 rounded bg-surfaceLighter text-text-secondary hover:text-accent-pink transition-colors shrink-0"
                        title="Download PDF"
                      >
                        <Download size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-surfaceLighter/50 pt-4 text-center">
                <p className="text-[10px] text-text-muted font-mono">
                  Note: Shared resources do not violate IISER or KUU institutional privacy.
                </p>
              </div>
            </GlowCard>
          </div>

        </div>

      </div>
    </section>
  );
};
