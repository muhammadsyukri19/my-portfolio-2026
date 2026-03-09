"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed z-50 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl transition-all duration-500 ease-out ${
          scrolled
            ? "top-4 bg-[#0B0B0B]/70 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "top-6 bg-white/15 backdrop-blur-2xl border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
        }`}
      >
        <div className="px-2">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Menu Left */}
            <ul className="hidden md:flex flex-1 items-center justify-end gap-40">
              {navItems.slice(0, 2).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`relative text-xs tracking-[0.12em] uppercase font-medium transition-all duration-300 group ${
                      scrolled
                        ? "text-white/70 hover:text-[#84cc16]"
                        : "text-[#0B0B0B]/60 hover:text-[#0B0B0B]"
                    }`}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#84cc16] transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Logo Center */}
            <a
              href="#home"
              className="flex items-center gap-2 group shrink-0 mx-0 md:mx-25"
            >
              <div className="w-8 h-8 rounded-full bg-[#84cc16] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg width="14" height="14" viewBox="0 0 32 32" fill="#0B0B0B">
                  <path d="M16 0L18.5 13.5L32 16L18.5 18.5L16 32L13.5 18.5L0 16L13.5 13.5L16 0Z" />
                </svg>
              </div>
              <span
                className={`font-bold text-sm tracking-[0.12em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-white" : "text-[#0B0B0B]"
                }`}
              >
                Syukri
              </span>
            </a>

            {/* Desktop Menu Right */}
            <ul className="hidden md:flex flex-1 items-center justify-start gap-40">
              {navItems.slice(2).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`relative text-xs tracking-[0.12em] uppercase font-medium transition-all duration-300 group ${
                      scrolled
                        ? "text-white/70 hover:text-[#84cc16]"
                        : "text-[#0B0B0B]/60 hover:text-[#0B0B0B]"
                    }`}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#84cc16] transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            >
              <span
                className={`w-5 h-0.5 transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                } ${scrolled ? "bg-white" : "bg-[#0B0B0B]"}`}
              ></span>
              <span
                className={`w-5 h-0.5 transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                } ${scrolled ? "bg-white" : "bg-[#0B0B0B]"}`}
              ></span>
              <span
                className={`w-5 h-0.5 transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                } ${scrolled ? "bg-white" : "bg-[#0B0B0B]"}`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0B0B]/98 backdrop-blur-xl pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-serif font-bold text-white hover:text-[#84cc16] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex w-fit px-8 py-3 bg-[#84cc16] text-[#0B0B0B] rounded-full font-semibold text-sm"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
