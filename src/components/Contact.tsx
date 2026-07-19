import React, { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const scholarIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10 5z"/>
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
    </svg>
  );

  const orcidIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.37 18.067H6.155V5.933H7.37v12.134zm-.607-13.31a.762.762 0 0 1-.762-.762c0-.42.342-.762.762-.762.42 0 .762.342.762.762 0 .42-.34.762-.762.762zm10.74 13.31h-1.258V12.78c0-1.636-.575-2.228-1.76-2.228-1.127 0-1.745.748-1.745 2.228v5.287h-1.246V5.933h1.246v4.672c.42-.589 1.135-.867 1.956-.867 2.052 0 2.807 1.488 2.807 3.522v4.807z"/>
    </svg>
  );

  const githubIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );

  const linkedinIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    } else if (formData.subject.trim().length < 5) {
      tempErrors.subject = "Subject must be at least 5 characters";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 15) {
      tempErrors.message = "Message must be at least 15 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-background">
      <div className="glow-blob bg-accent-pink/15 -bottom-20 left-1/3 w-[300px] h-[300px]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary tracking-tight"
          >
            Get In <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary mt-3 text-sm leading-relaxed max-w-xl mx-auto"
          >
            I am open to discussions on edge-cloud computing collaborations, guest lectures, curriculum design support, or technical research projects.
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-accent-cyan mx-auto mt-4 origin-left"
          />
        </div>

        {/* Minimized Contact Card */}
        <GlowCard className="p-6 sm:p-8 border border-surfaceLighter" glowColor="rgba(139, 92, 246, 0.08)">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle className="text-green-400 mb-4 animate-bounce" size={44} />
                <h3 className="text-lg font-heading font-bold text-text-primary mb-2">Message Sent!</h3>
                <p className="text-xs sm:text-sm text-text-secondary max-w-sm">
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-[#0B0F19]/60 border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none transition-all duration-300 ${
                        errors.name 
                          ? 'border-accent-pink focus:border-accent-pink shadow-[0_0_8px_rgba(244,63,94,0.1)]' 
                          : 'border-surfaceLighter focus:border-accent-cyan focus:shadow-[0_0_8px_rgba(0,210,255,0.1)]'
                      }`}
                      placeholder="Siddharth Kushwaha"
                    />
                    {errors.name && (
                      <span className="text-accent-pink text-[11px] font-mono flex items-center mt-1">
                        <AlertCircle size={10} className="mr-1" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-[#0B0F19]/60 border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none transition-all duration-300 ${
                        errors.email 
                          ? 'border-accent-pink focus:border-accent-pink shadow-[0_0_8px_rgba(244,63,94,0.1)]' 
                          : 'border-surfaceLighter focus:border-accent-cyan focus:shadow-[0_0_8px_rgba(0,210,255,0.1)]'
                      }`}
                      placeholder="sid@iiserbpr.ac.in"
                    />
                    {errors.email && (
                      <span className="text-accent-pink text-[11px] font-mono flex items-center mt-1">
                        <AlertCircle size={10} className="mr-1" /> {errors.email}
                      </span>
                    )}
                  </div>

                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full bg-[#0B0F19]/60 border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none transition-all duration-300 ${
                      errors.subject 
                        ? 'border-accent-pink focus:border-accent-pink shadow-[0_0_8px_rgba(244,63,94,0.1)]' 
                        : 'border-surfaceLighter focus:border-accent-cyan focus:shadow-[0_0_8px_rgba(0,210,255,0.1)]'
                    }`}
                    placeholder="Research collaboration proposal"
                  />
                  {errors.subject && (
                    <span className="text-accent-pink text-[11px] font-mono flex items-center mt-1">
                      <AlertCircle size={10} className="mr-1" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full bg-[#0B0F19]/60 border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-accent-pink focus:border-accent-pink shadow-[0_0_8px_rgba(244,63,94,0.1)]' 
                        : 'border-surfaceLighter focus:border-accent-cyan focus:shadow-[0_0_8px_rgba(0,210,255,0.1)]'
                    }`}
                    placeholder="Hi Siddharth, I read your publication on Edge Intelligence..."
                  />
                  {errors.message && (
                    <span className="text-accent-pink text-[11px] font-mono flex items-center mt-1">
                      <AlertCircle size={10} className="mr-1" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-accent-cyan to-accent-violet hover:from-accent-cyan/95 hover:to-accent-violet/95 text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.005]"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </AnimatePresence>
        </GlowCard>

        {/* Social Icons at the Bottom */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
            Direct Academic & Professional Networks
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            {/* Email Icon Link */}
            <a
              href="mailto:siddharthsinghkushwaha@gmail.com"
              className="p-3 rounded-xl bg-surface border border-surfaceLighter text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-accent-cyan/5"
              title="siddharthsinghkushwaha@gmail.com"
            >
              <Mail size={18} />
            </a>

            {/* LinkedIn Icon Link */}
            <a
              href="https://www.linkedin.com/in/siddharth-phd-iiserbpr-dcclab/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-surface border border-surfaceLighter text-text-secondary hover:text-accent-violet hover:border-accent-violet/40 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-accent-violet/5"
              title="LinkedIn"
            >
              {linkedinIcon}
            </a>

            {/* GitHub Icon Link */}
            <a
              href="https://github.com/SiddharthSinghKushwaha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-surface border border-surfaceLighter text-text-secondary hover:text-accent-pink hover:border-accent-pink/40 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-accent-pink/5"
              title="GitHub"
            >
              {githubIcon}
            </a>

            {/* Scholar Icon Link */}
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-surface border border-surfaceLighter text-text-secondary hover:text-accent-purple hover:border-accent-purple/40 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-accent-purple/5"
              title="Google Scholar"
            >
              {scholarIcon}
            </a>

            {/* ORCID Icon Link */}
            <a
              href="https://orcid.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-surface border border-surfaceLighter text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-accent-cyan/5"
              title="ORCID"
            >
              {orcidIcon}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
