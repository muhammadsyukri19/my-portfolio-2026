"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const contactLinks = [
    {
      type: "email",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email Me",
      href: "mailto:your.email@example.com",
      primary: true,
    },
    {
      type: "github",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      href: "https://github.com/yourusername",
      primary: false,
    },
    {
      type: "linkedin",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      primary: false,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 md:py-44 px-6 sm:px-8 lg:px-12 bg-[#0e0e0e] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#84cc16]/4 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-[#84cc16] block mb-4">
            ✦ Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Get in Touch <span className="gradient-text">Today!</span>
          </h2>
          <p className="text-base md:text-lg text-white/40 max-w-lg mx-auto leading-[1.85]">
            Punya project atau ide? Mari berdiskusi dan wujudkan bersama.
            I&apos;m always open for new opportunities.
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-[#141414] rounded-3xl p-8 md:p-12 border border-[#252525] mb-12"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/30 block mb-3">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#1a1a1a] border border-[#252525] rounded-xl px-5 py-3.5 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-[#84cc16]/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/30 block mb-3">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-[#1a1a1a] border border-[#252525] rounded-xl px-5 py-3.5 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-[#84cc16]/50 transition-colors"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/30 block mb-3">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-[#1a1a1a] border border-[#252525] rounded-xl px-5 py-3.5 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-[#84cc16]/50 transition-colors resize-none"
            />
          </div>
          <button className="w-full md:w-auto px-10 py-4 bg-[#84cc16] text-[#0B0B0B] rounded-full hover:bg-[#a3e635] transition-all duration-300 font-semibold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(132,204,22,0.3)]">
            Send Message
          </button>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
        >
          {contactLinks.map((contact) => (
            <a
              key={contact.type}
              href={contact.href}
              target={contact.type !== "email" ? "_blank" : undefined}
              rel={contact.type !== "email" ? "noopener noreferrer" : undefined}
              className={`px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center gap-3 hover:-translate-y-0.5 border ${
                contact.primary
                  ? "bg-[#84cc16] text-[#0B0B0B] border-[#84cc16] hover:bg-[#a3e635] hover:shadow-[0_0_20px_rgba(132,204,22,0.3)]"
                  : "border-[#252525] text-white/60 hover:border-[#84cc16]/40 hover:text-[#84cc16] hover:bg-[#84cc16]/5"
              }`}
            >
              {contact.icon} {contact.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
