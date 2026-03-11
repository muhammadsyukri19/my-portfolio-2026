"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [count, setCount] = useState(30);
  const [isExiting, setIsExiting] = useState(false);

  const handleComplete = useCallback(() => {
    setIsExiting(true);
    setTimeout(onComplete, 800);
  }, [onComplete]);

  useEffect(() => {
    if (count <= 0) {
      handleComplete();
      return;
    }

    // 4000ms / 30 steps = 30ms per step
    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 30);

    return () => clearTimeout(timer);
  }, [count, handleComplete]);

  // Progress percentage (inverted: 30→0 means 0%→100%)
  const progress = ((30 - count) / 30) * 100;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0B0B0B] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(132,204,22,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(132,204,22,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Large countdown number */}
            <div className="relative mb-12">
              <motion.span
                key={count}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.06, ease: "easeOut" }}
                className="block text-[120px] sm:text-[160px] md:text-[200px] font-serif font-bold text-white leading-none tabular-nums"
                style={{
                  textShadow: "0 0 80px rgba(132,204,22,0.15)",
                }}
              >
                {String(count).padStart(2, "0")}
              </motion.span>
            </div>

            {/* Progress bar */}
            <div className="w-48 sm:w-64 h-1 bg-[#252525] rounded-full overflow-hidden mb-8">
              <motion.div
                className="h-full bg-[#84cc16] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.08, ease: "linear" }}
              />
            </div>

            {/* Label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[10px] sm:text-[11px] font-mono tracking-[0.4em] uppercase text-[#84cc16]/50"
            >
              Loading
            </motion.p>
          </div>

          {/* Corner accent - top left */}
          <div className="absolute top-8 left-8 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#84cc16]/40 animate-pulse-subtle"></div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#84cc16]/30 uppercase">
              Syukri
            </span>
          </div>

          {/* Corner accent - bottom right */}
          <div className="absolute bottom-8 right-8">
            <span className="text-[10px] font-mono tracking-[0.2em] text-white/20">
              &copy; 2026 ✦
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
