import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { Database, Monitor, GraduationCap, Cpu } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Research & Core CS",
      icon: <Cpu className="text-accent-cyan" size={20} />,
      color: "rgba(0, 210, 255, 0.1)",
      skills: [
        { name: "Edge Computing", level: 90 },
        { name: "Distributed Systems", level: 85 },
        { name: "Cloud Intelligence", level: 80 },
        { name: "Edge AI & Inference", level: 75 },
        { name: "Virtualization & Containers", level: 80 },
      ]
    },
    {
      title: "Programming Languages",
      icon: <Database className="text-accent-violet" size={20} />,
      color: "rgba(139, 92, 246, 0.1)",
      skills: [
        { name: "Python", level: 90 },
        { name: "C/C++", level: 80 },
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "SQL", level: 75 },
        { name: "HTML & CSS", level: 90 },
      ]
    },
    {
      title: "Web & Frameworks",
      icon: <Monitor className="text-accent-pink" size={20} />,
      color: "rgba(244, 63, 94, 0.1)",
      skills: [
        { name: "React + Vite", level: 85 },
        { name: "Node.js & Express", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "REST APIs", level: 85 },
        { name: "Git & Version Control", level: 85 },
      ]
    },
    {
      title: "Academic & Professional",
      icon: <GraduationCap className="text-accent-purple" size={20} />,
      color: "rgba(167, 139, 250, 0.1)",
      skills: [
        { name: "Teaching & Mentorship", level: 95 },
        { name: "LaTeX Document Prep", level: 90 },
        { name: "Research Writing", level: 80 },
        { name: "Lab Class Management", level: 95 },
        { name: "Curriculum Design", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-surface/10">
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
            My <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-accent-violet mx-auto mt-4 origin-left"
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <GlowCard 
                className="p-8 border border-surfaceLighter h-full flex flex-col justify-between"
                glowColor={category.color}
              >
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2.5 bg-surfaceLighter/60 rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-text-primary">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-text-secondary font-medium">
                            {skill.name}
                          </span>
                          <span className="text-text-muted font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-1.5 w-full bg-surfaceLighter rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIdx * 0.05 }}
                            className={`h-full rounded-full bg-gradient-to-r ${
                              catIdx % 2 === 0 
                                ? 'from-accent-cyan to-accent-violet' 
                                : 'from-accent-violet to-accent-pink'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
