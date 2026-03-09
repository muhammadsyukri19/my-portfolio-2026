"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-20 px-6 sm:px-8 lg:px-12 bg-[#0e0e0e] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#141414] border border-[#252525] rounded-2xl px-8 py-7"
        >
          {/* Left: Icon + Text */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-[#84cc16]/10 border border-[#84cc16]/20 flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-[#84cc16]"
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
            </div>
            <div>
              <p className="text-white text-sm font-semibold">
                Have a project in mind?
              </p>
              <p className="text-white/35 text-xs mt-0.5">
                Reach out — I&apos;m always open for new opportunities.
              </p>
            </div>
          </div>

          {/* Right: Email Button */}
          <a
            href="mailto:muhammadsyukri@mhs.unsyiah.ac.id"
            className="group shrink-0 px-6 py-3 bg-[#84cc16] text-[#0B0B0B] rounded-full hover:bg-[#a3e635] transition-all duration-300 font-semibold text-xs tracking-wide flex items-center gap-2 hover:shadow-[0_0_20px_rgba(132,204,22,0.3)]"
          >
            Send Email
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
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
        </motion.div>
      </div>
    </section>
  );
}
