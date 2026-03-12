"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    id: 1,
    title: "Milanosport App",
    category: "Web Development",
    description:
      "Modern agency website with stunning animations and responsive design built with Next.js and Tailwind CSS.",
    technologies: ["React.js", "Tailwind", "Framer Motion"],
    image: "/project/MilanoSport.png",
    link: "https://milanosport.vercel.app",
  },
  {
    id: 2,
    title: "GreenFootPrint App Design",
    category: "App Design & Build with Mendix",
    description:
      "Comprehensive dashboard UI for managing online store with real-time analytics and inventory tracking.",
    technologies: ["Mendix", "Figma", "Postman"],
    image: "/project/GreenFootPrint.png",
    link: "https://github.com/muhammadsyukri19/mendix-greenfootprint.git",
  },
  {
    id: 3,
    title: "AquaPoint Design",
    category: "UI/UX Design",
    description:
      "Complete brand identity including logo, typography, color palette, and comprehensive design system.",
    technologies: ["Figma", "Illustrator", "Brand Guide"],
    image: "/project/AquaPoint.png",
    link: "https://www.figma.com/proto/K2m7CiDcnARKtAYaBW6zML/AQUAPOINT?page-id=0%3A1&node-id=464-3038&starting-point-node-id=464%3A3038&t=azTHS6dhZVmZMGo7-1",
  },
  {
    id: 4,
    title: "NuboFind Information Retrieval",
    category: "Web Development & Retrieval System",
    description:
      "Complete brand identity including logo, typography, color palette, and comprehensive design system.",
    technologies: ["Figma", "Illustrator", "Brand Guide"],
    image: "/project/NuboFind.png",
    link: "https://nubofind.vercel.app",
  },
];

export default function Projects() {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="projects"
      className="py-15 md:py-20 px-6 sm:px-8 lg:px-12 bg-dark-textured bg-mesh-overlay relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#84cc16]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-[#84cc16] block mb-3">
              ✦ My work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal
            direction="none"
            delay={0.2}
            className="hidden md:block text-white/30 text-xs font-mono tracking-widest"
          >
            scroll to explore →
          </ScrollReveal>
        </div>

        {/* Horizontal Scroll Strip */}
        <ScrollReveal
          direction="up"
          delay={0.1}
          distance={30}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3
            [&::-webkit-scrollbar]:h-[3px]
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-[#333]
            [&::-webkit-scrollbar-thumb]:rounded-full
            hover:[&::-webkit-scrollbar-thumb]:bg-[#84cc16]/40"
          ref={cardsRef}
        >
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link ?? undefined}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: 30 }}
              animate={cardsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -5 }}
              className={`group shrink-0 w-[272px] snap-start bg-[#141414] rounded-2xl overflow-hidden border border-[#252525] hover:border-[#84cc16]/30 transition-all duration-500 card-glow ${
                project.link
                  ? "cursor-pointer"
                  : "cursor-default opacity-40 pointer-events-none"
              }`}
            >
              {/* Image */}
              <div className="h-40 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#0B0B0B]/80 backdrop-blur-sm text-[#84cc16] rounded-full text-[9px] font-mono tracking-wider uppercase border border-[#252525]">
                    {project.category}
                  </span>
                </div>

                {/* Arrow on hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#84cc16] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 space-y-3">
                <h3 className="text-sm font-bold text-white group-hover:text-[#84cc16] transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>
                <p className="text-white/35 text-[12px] leading-[1.7] line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-1.5 flex-wrap pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#1a1a1a] text-white/35 rounded-full text-[10px] font-medium border border-[#252525] group-hover:border-[#84cc16]/20 group-hover:text-[#84cc16]/60 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </ScrollReveal>

        {/* Scrolling Tags */}
        <ScrollReveal
          direction="none"
          delay={0.3}
          className="mt-10 overflow-hidden"
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
        </ScrollReveal>
      </div>
    </section>
  );
}
