"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
  variant?: "glow" | "wave" | "diamond";
}

export default function SectionDivider({
  variant = "glow",
}: SectionDividerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (variant === "wave") {
    return (
      <div ref={ref} className="relative w-full overflow-hidden h-16 -my-px">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <motion.path
            d="M0 32C240 8 480 56 720 32C960 8 1200 56 1440 32V64H0V32Z"
            fill="url(#wave-gradient)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(132, 204, 22, 0.05)" />
              <stop offset="50%" stopColor="rgba(132, 204, 22, 0.08)" />
              <stop offset="70%" stopColor="rgba(132, 204, 22, 0.05)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === "diamond") {
    return (
      <div ref={ref} className="relative py-6 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 flex items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#252525] to-transparent" />
        </motion.div>
        <motion.div
          className="relative z-10 flex items-center gap-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="w-1 h-1 rounded-full bg-[#252525]" />
          <div className="w-2 h-2 rotate-45 border border-[#84cc16]/30 bg-[#0B0B0B]" />
          <div className="w-1 h-1 rounded-full bg-[#252525]" />
        </motion.div>
      </div>
    );
  }

  // Default: glow variant
  return (
    <div ref={ref} className="relative py-1">
      <motion.div
        className="section-divider-glow"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
}
