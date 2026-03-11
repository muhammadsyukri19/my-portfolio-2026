"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#0B0B0B]">
      {/* White Rounded Container */}
      <div className="relative bg-[#f5f5f0] rounded-b-[90px] md:rounded-b-[80px] lg:rounded-b-[250px] overflow-hidden h-screen max-h-screen">
        {/* ===== Dot Grid Texture Overlay ===== */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0B0B0B 0.8px, transparent 0.8px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* ===== Diagonal Ribbon Banner (top-right) ===== */}
        <div className="absolute top-[38px] -right-[60px] z-30 w-[280px] rotate-[40deg] overflow-hidden pointer-events-none">
          <div className="bg-[#84cc16] py-2 overflow-hidden">
            <div className="animate-marquee-fast whitespace-nowrap flex">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] uppercase text-[#0B0B0B] mx-3"
                >
                  AVAILABLE FOR WORK
                  <span className="text-[#0B0B0B]/40">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Floating Email Button (top-left area) ===== */}
        <motion.div
          className="absolute top-58 md:top-32 left-6 sm:left-8 lg:left-12 z-30"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.a
            href="mailto:msyukri807@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-[#0B0B0B]/10 rounded-full pl-3 pr-5 py-2.5 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-full bg-[#84cc16] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-4 h-4 text-[#0B0B0B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <p className="text-[9px] font-mono tracking-[0.15em] uppercase text-[#0B0B0B]/40">
                Contact me
              </p>
              <p className="text-xs font-medium text-[#0B0B0B]/70 group-hover:text-[#0B0B0B] transition-colors">
                msyukri807@gmail.com
              </p>
            </div>
          </motion.a>
        </motion.div>

        {/* ===== Large Rotating Star - Behind image as shadow ===== */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-[5] text-[#84cc16]/15 pointer-events-none"
        >
          <svg
            width="900"
            height="900"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-[70vw] h-[70vw] sm:w-[55vw] sm:h-[55vw] md:w-[50vw] md:h-[50vw] lg:w-[42vw] lg:h-[42vw] max-w-[680px] max-h-[680px]"
          >
            <path d="M16 0L18.5 13.5L32 16L18.5 18.5L16 32L13.5 18.5L0 16L13.5 13.5L16 0Z" />
          </svg>
        </motion.div>

        {/* ===== HERO IMAGE - Absolute, massive, behind text ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[90vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] xl:w-[40vw] max-w-[700px]"
        >
          <img
            src="/pribadi/sukrimay.png"
            alt="Syukri"
            className="w-full h-auto object-contain"
          />
          {/* Gradient fade at bottom to blend with rounded edge */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#f5f5f0] via-[#f5f5f0]/60 to-transparent"></div>
        </motion.div>

        {/* ===== TEXT CONTENT - On top of image ===== */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 md:pt-28 h-full flex flex-col">
          {/* Heading - sits on top, image will overlap from behind */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-[#0B0B0B] leading-[0.95] tracking-tight">
              Halo!
              <br />
              Muhammad <span className="italic font-normal">"Syukri"</span>
              <motion.span
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block text-[#84cc16] ml-2 align-middle"
              >
                {/* <svg
                  width="36"
                  height="36"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 "
                >
                  <path d="M16 0L18.5 13.5L32 16L18.5 18.5L16 32L13.5 18.5L0 16L13.5 13.5L16 0Z" />
                </svg> */}
              </motion.span>
            </h1>
          </motion.div>

          {/* Spacer to push bottom content down */}
          <div className="flex-1" />

          {/* Bottom Row: Description (left) + CTA (center) + Rating (right) */}
          <div className="relative z-30 flex flex-col lg:flex-row items-end justify-between gap-6 pb-12 md:pb-16">
            {/* Left: Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-xs text-left hidden lg:block"
            >
              <p className="text-sm text-[#0B0B0B]/50 leading-relaxed mb-3">
                From web development to branding, I deliver innovative
                strategies that elevate your brand and drive growth.
              </p>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#0B0B0B]/60 border border-[#0B0B0B]/20 rounded-full px-5 py-2.5 hover:bg-[#0B0B0B] hover:text-white transition-all duration-300"
              >
                Innovate Your Brand
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Center: CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-3 mx-auto lg:mx-0"
            >
              <a
                href="#projects"
                className="group px-6 md:px-8 py-3 bg-[#84cc16] text-[#0B0B0B] rounded-full hover:bg-[#a3e635] transition-all duration-300 font-semibold text-xs md:text-sm flex items-center gap-2 shadow-lg"
              >
                Download Portfolio
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-6 md:px-8 py-3 bg-[#0B0B0B] text-white rounded-full hover:bg-[#1a1a1a] transition-all duration-300 font-medium text-xs md:text-sm shadow-lg"
              >
                Let&apos;s Collaborate
              </a>
            </motion.div>

            {/* Right: Rating + Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-right hidden lg:block"
            >
              <div className="flex items-center justify-end gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#84cc16]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-[#0B0B0B]">
                <span className="text-4xl md:text-5xl font-serif font-bold">
                  3+
                </span>
                <span className="text-sm text-[#0B0B0B]/50 ml-2">
                  Years
                  <br />
                  Experience
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bar - on the dark background below the white container */}
      <ScrollReveal direction="up" distance={40} className="relative z-20 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Projects" },
              { number: "3+", label: "Years Exp." },
              { number: "800+", label: "Hours of Digital" },
              { number: "15+", label: "Happy Clients" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="flex-1 text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#84cc16] transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-[11px] text-white/40 font-mono tracking-[0.15em] uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
                {i < 3 && (
                  <div className="hidden md:block ml-auto w-px h-12 bg-[#252525]"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden bg-white border-t border-b border-[#FFFFF] py-8 mb-5">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-black/70 mx-8">
                  Innovate
                </span>
                <span className="text-[#84cc16] text-2xl mx-4">✦</span>
                <span className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-black/70 mx-8">
                  Inspire
                </span>
                <span className="text-[#84cc16] text-2xl mx-4">✦</span>
                <span className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-black/70 mx-8">
                  Create
                </span>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-[#84cc16] text-4xl mx-4"
                >
                  ✦
                </motion.span>
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
