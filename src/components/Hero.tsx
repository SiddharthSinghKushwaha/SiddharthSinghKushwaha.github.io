import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-grid-pattern">
      {/* Background neon blobs */}
      <div className="glow-blob bg-accent-cyan top-1/4 left-1/4 w-[350px] h-[350px]" />
      <div className="glow-blob bg-accent-violet bottom-1/4 right-1/4 w-[400px] h-[400px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent-cyan font-mono text-sm font-semibold tracking-wider uppercase mb-3 block">
              Welcome to my digital space
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-4 text-text-primary leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink bg-clip-text text-transparent">
              Siddharth Singh
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-sans font-medium text-text-secondary mb-6"
          >
            Ph.D. Scholar at{' '}
            <span className="text-text-primary border-b-2 border-accent-violet/30 pb-0.5">
              IISER Berhampur
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-text-secondary mb-8 max-w-xl leading-relaxed"
          >
            Computer Science researcher specializing in{' '}
            <span className="text-text-primary font-semibold">Edge Computing</span> &{' '}
            <span className="text-text-primary font-semibold">Distributed Intelligence</span>. 
            Passionate about coding, teaching, and translating complex systems into elegant solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#timeline"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-accent-cyan to-accent-violet hover:from-accent-cyan/90 hover:to-accent-violet/90 text-background transition-all duration-300 shadow-lg shadow-accent-cyan/20 hover:scale-[1.02]"
            >
              <span>Track My Journey</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium border border-surfaceLighter bg-surface/30 text-text-primary hover:bg-surface/60 hover:border-accent-cyan/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <Mail size={18} />
              <span>Get in Touch</span>
            </a>

            <a
              href="/resume.pdf"
              download="Siddharth_Singh_Kushwaha_CV.pdf"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-mono text-sm border border-dashed border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/5 transition-all duration-300 hover:scale-[1.02]"
            >
              <Download size={16} />
              <span>cv.download()</span>
            </a>
          </motion.div>
        </div>

        {/* Visual Terminal Area */}
        <div className="lg:col-span-5 w-full flex justify-center mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md rounded-xl overflow-hidden bg-[#161B26]/80 border border-[#222B3C]/80 shadow-2xl backdrop-blur-md relative"
          >
            {/* Terminal Header */}
            <div className="bg-[#0f131a] px-4 py-3 flex items-center justify-between border-b border-[#222B3C]/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-accent-pink/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-accent-cyan/80" />
              </div>
              <span className="text-xs text-text-muted font-mono flex items-center space-x-1.5">
                <Code2 size={12} />
                <span>scholar_profile.ts</span>
              </span>
            </div>

            {/* Terminal Code Content */}
            <div className="p-6 font-mono text-xs sm:text-sm text-text-secondary leading-relaxed overflow-x-auto select-none">
              <div>
                <span className="code-kw">import</span> {'{'} <span className="code-var">Researcher</span> {'}'} <span className="code-kw">from</span> <span className="code-str">'iiser-berhampur'</span>;
              </div>
              <div className="text-text-muted mt-1">// Under the Guidance of Dr. Chinmaya Kumar Dehury</div>
              
              <div className="mt-4">
                <span className="code-kw">const</span> <span className="code-var">siddharth</span> = <span className="code-kw">new</span> <span className="code-var">Researcher</span>({'{'}
              </div>
              <div className="pl-4">
                name: <span className="code-str">"Siddharth Singh Kushwaha"</span>,
              </div>
              <div className="pl-4">
                role: <span className="code-str">"Ph.D. Scholar"</span>,
              </div>
              <div className="pl-4">
                lab: <span className="code-str">"Distributed Cloud & Cognitive Lab (DCC Lab)"</span>,
              </div>
              <div className="pl-4">
                domain: [<span className="code-str">"Edge Computing"</span>, <span className="code-str">"Cloud Intelligence"</span>],
              </div>
              <div className="pl-4">
                milestones: {'{'}
              </div>
              <div className="pl-8">
                pgGoldMedal: <span className="code-kw">true</span>, <span className="code-com">// CURAJ Convocation 2025</span>
              </div>
              <div className="pl-8">
                teachingFaculty: <span className="code-kw">true</span>, <span className="code-com">// KUU Guest Faculty</span>
              </div>
              <div className="pl-4">
                {'}'},
              </div>
              <div className="pl-4">
                hardWorking: <span className="code-kw">true</span>,
              </div>
              <div className="pl-4">
                discipline: <span className="code-kw">true</span>,
              </div>
              <div className="pl-4 text-text-muted">
                motto: <span className="code-str">"Never give up, learn from everyone"</span>
              </div>
              <div>{'}'});</div>

              <div className="mt-6 border-t border-[#222B3C]/50 pt-4 text-text-muted">
                <span className="text-accent-cyan">$</span> npm run build:journey
                <br />
                <span className="text-green-400">✔</span> Compiling Ph.D. roadmap...
                <br />
                <span className="text-green-400">✔</span> Initializing classroom logs...
                <br />
                <span className="text-accent-cyan">Status:</span> ready_to_collaborate
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
