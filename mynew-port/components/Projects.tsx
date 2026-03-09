"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Milanosport App",
    category: "Web Development",
    description:
      "Modern agency website with stunning animations and responsive design built with Next.js and Tailwind CSS.",
    technologies: ["React.js", "Tailwind", "Framer Motion"],
    image: "/pribadi/style.jpg",
  },
  {
    id: 2,
    title: "GreenFootPrint App Design",
    category: "App Design & Build with Mendix",
    description:
      "Comprehensive dashboard UI for managing online store with real-time analytics and inventory tracking.",
    technologies: ["Mendix", "Figma", "Postman"],
    image: "/pribadi/bi-new.jpg",
  },
  {
    id: 3,
    title: "AquaPoint Design",
    category: "UI/UX Design",
    description:
      "Complete brand identity including logo, typography, color palette, and comprehensive design system.",
    technologies: ["Figma", "Illustrator", "Brand Guide"],
    image: "/pribadi/syukri-pdh.jpg",
  },
  {
    id: 3,
    title: "NuboFind Information Retrieval",
    category: "Web Development & Retrieval System",
    description:
      "Complete brand identity including logo, typography, color palette, and comprehensive design system.",
    technologies: ["Figma", "Illustrator", "Brand Guide"],
    image: "/pribadi/syukri-pdh.jpg",
  },
];

const categories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "App Design",
  "Dashboard",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 md:py-44 px-6 sm:px-8 lg:px-12 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#84cc16]/3 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-[#84cc16] block mb-4">
              ✦ My work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 border ${
                  i === 0
                    ? "bg-[#84cc16] text-[#0B0B0B] border-[#84cc16]"
                    : "bg-transparent text-white/40 border-[#252525] hover:border-[#84cc16]/40 hover:text-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-[#141414] rounded-2xl overflow-hidden border border-[#252525] hover:border-[#84cc16]/30 transition-all duration-500 card-glow cursor-pointer"
            >
              {/* Project Image */}
              <div className="h-56 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-[#0B0B0B]/80 backdrop-blur-sm text-[#84cc16] rounded-full text-[10px] font-mono tracking-wider uppercase border border-[#252525]">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay with icon */}
                <div className="absolute inset-0 bg-[#84cc16]/0 group-hover:bg-[#84cc16]/10 transition-all duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#84cc16] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                    <svg
                      className="w-6 h-6 text-[#0B0B0B]"
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
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-7 space-y-4">
                <h3 className="text-lg font-bold text-white group-hover:text-[#84cc16] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-[1.8]">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 bg-[#1a1a1a] text-white/40 rounded-full text-[11px] font-medium border border-[#252525] group-hover:border-[#84cc16]/20 group-hover:text-[#84cc16]/60 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 overflow-hidden"
        >
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[
              "UX Design",
              "App Design",
              "Dashboard",
              "Wireframe",
              "User Research",
              "Web Development",
              "Branding",
              "Motion Design",
              "UX Design",
              "App Design",
              "Dashboard",
              "Wireframe",
              "User Research",
              "Web Development",
              "Branding",
              "Motion Design",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-6 py-2.5 rounded-full border border-[#252525] text-white/30 text-sm font-medium hover:border-[#84cc16]/30 hover:text-[#84cc16]/60 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
