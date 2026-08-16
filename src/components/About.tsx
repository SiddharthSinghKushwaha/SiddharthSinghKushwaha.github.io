import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
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

        <div className="space-y-6">
          <h3 className="text-xl font-heading font-bold text-text-primary flex items-center space-x-2.5">
            <GraduationCap size={22} className="text-accent-cyan" />
            <span>Academic Journey</span>
          </h3>
          <div className="space-y-5 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
            <p>
              I am a Ph.D. Scholar at <strong>IISER Berhampur</strong> working inside the <strong>Distributed Computing Continuum Lab (DCC Lab)</strong>. Under the guidance of <a href="https://dcc.chinmayadehury.in/" target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline font-semibold">Dr. Chinmaya Kumar Dehury</a>, I research scheduling solutions and resource allocation schemes that reduce memory and processing delay for edge nodes.
            </p>
            <p>
              Prior to my Ph.D., I completed my post-graduation at the <strong>Central University of Rajasthan (CURAJ)</strong>, where I was honored with the Gold Medal for academic performance. My journey has been defined by systematic discipline, a passion for understanding hardware-software interactions, and building open-source prototypes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
