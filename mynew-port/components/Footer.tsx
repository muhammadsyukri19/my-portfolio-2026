"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-10 px-6 sm:px-4 lg:px-12 bg-dark-textured relative overflow-hidden">
      {/* Top marquee banner */}
      <div className="overflow-hidden border-t border-b border-[#252525] py-8 mb-16">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white/5 mx-8">
                Innovate
              </span>
              <span className="text-[#84cc16]/20 text-2xl mx-4">+</span>
              <span className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#84cc16]/10 mx-8">
                Inspire
              </span>
              <span className="text-[#84cc16]/20 text-2xl mx-4">+</span>
              <span className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white/5 mx-8">
                Create
              </span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-[#84cc16]/20 text-2xl mx-4"
              >
                ✦
              </motion.span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <ScrollReveal direction="up" delay={0} distance={30}>
            <a href="#home" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-full bg-[#84cc16] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg width="16" height="16" viewBox="0 0 32 32" fill="#0B0B0B">
                  <path d="M16 0L18.5 13.5L32 16L18.5 18.5L16 32L13.5 18.5L0 16L13.5 13.5L16 0Z" />
                </svg>
              </div>
              <span className="font-bold text-sm tracking-[0.15em] uppercase text-white">
                Syukri
              </span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Empowering brands through creative solutions. Building digital
              experiences that make a lasting impression.
            </p>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" delay={0.1} distance={30}>
            <h4 className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#84cc16] mb-6">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-white/30 hover:text-[#84cc16] transition-colors duration-300 w-fit"
                >
                  {item}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Social */}
          <ScrollReveal direction="up" delay={0.2} distance={30}>
            <h4 className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#84cc16] mb-6">
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                {
                  name: "GitHub",
                  href: "https://github.com/muhammadsyukri19",
                  icon: (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com/in/muhammad-syukri19/",
                  icon: (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "https://instagram.com/m_sykri",
                  icon: (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  name: "Email",
                  href: "mailto:muh.syukri@mhs.unsyiah.ac.id/msyukri807@gmail.com",
                  icon: (
                    <svg
                      className="w-4 h-4"
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
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#252525] flex items-center justify-center text-white/30 hover:border-[#84cc16] hover:text-[#84cc16] hover:bg-[#84cc16]/5 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Divider */}
        <div className="h-px bg-[#252525] mb-8"></div>

        <ScrollReveal direction="up" delay={0} distance={20}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs font-mono tracking-wider">
              &copy; {currentYear} Syukri. All rights reserved.
            </p>
            {/* <p className="text-white/20 text-xs font-mono tracking-wider">
            Designed & Built with <span className="text-[#84cc16]">♥</span> in
            Indonesia
          </p> */}
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
