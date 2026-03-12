"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    id: 1,
    period: "2026 – Present",
    role: "Head of Informatics Student Association (HMIF)",
    org: "USK",
    type: "Organization",
    description:
      "Leading the university-level informatics student association, managing work programs, and representing informatics students at USK.",
    current: true,
  },
  {
    id: 2,
    period: "2025 – 2026",
    role: "Vice Head II – HMIF",
    org: "USK",
    type: "Organization",
    description:
      "Supported the head in internal coordination, managed strategic divisions, and ensured work programs ran optimally.",
    current: false,
  },
  {
    id: 3,
    period: "2025 – 2026",
    role: "Teaching Assistant – Human Computer Interaction",
    org: "USK",
    type: "Academic",
    description:
      "Assisted the lecturer in HCI course delivery, guided students through lab sessions, and evaluated UX/UI assignments.",
    current: false,
  },
  {
    id: 4,
    period: "2024 – 2025",
    role: "Staff External Relations – BEM FMIPA",
    org: "USK",
    type: "Organization",
    description:
      "Managed external relations of BEM FMIPA with institutions and external organizations, and built strategic partnerships.",
    current: false,
  },
  // {
  //   id: 5,
  //   period: "2024",
  //   role: "Deputy Coordinator Public Relations – PILMIPA",
  //   org: "USK",
  //   type: "Committee",
  //   description:
  //     "Led the PR team for PILMIPA USK event, managing publications, social media, and public communications.",
  //   current: false,
  // },
  // {
  //   id: 6,
  //   period: "2024",
  //   role: "Head of Public Relations – Ramadhan with Scientist",
  //   org: "FMIPA USK",
  //   type: "Committee",
  //   description:
  //     "Led the PR division for the Ramadhan with Scientist event, designing publication strategies and managing participant communications.",
  //   current: false,
  // },
  // {
  //   id: 7,
  //   period: "2024",
  //   role: "Chairperson – External Work Visit Program BEM FMIPA",
  //   org: "USK",
  //   type: "Committee",
  //   description:
  //     "Led and coordinated the external work visit program of BEM FMIPA from planning through execution.",
  //   current: false,
  // },
];

const skills = [
  { category: "Programming", icon: "⟨/⟩", items: ["Python", "C", "Java"] },
  {
    category: "Web Dev",
    icon: "⬡",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js"],
  },
  { category: "Tools", icon: "⚙", items: ["Git", "MS Office", "G-Workspace"] },
  { category: "Design", icon: "✦", items: ["Figma", "Canva", "CapCut"] },
];

export default function Experience() {
  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      className="py-5 md:py-3 px-6 sm:px-8 lg:px-12 bg-[#0e0e0e] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#84cc16]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={30} className="mb-14">
          <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-[#84cc16] block mb-4">
            ✦ My Journey
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
              My{" "}
              <span className="relative inline-block">
                <span className="text-[#84cc16]">Experience</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M1 5.5C40 2 80 1 100 3C120 5 160 6 199 2.5"
                    stroke="#84cc16"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Actively contributing to student organizations and committees at
              USK since 2024.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* ── Scrollable Experience List ── */}
          <ScrollReveal
            ref={listRef}
            direction="up"
            delay={0.1}
            distance={30}
            className="lg:col-span-3 bg-[#141414] border border-[#252525] rounded-3xl overflow-hidden flex flex-col"
          >
            {/* Card header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#252525] shrink-0">
              <span className="text-[11px] font-mono tracking-widest text-white/30 uppercase">
                {experiences.length} Experiences
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#84cc16] animate-pulse" />
                <span className="text-[11px] font-mono text-[#84cc16]/70 tracking-widest">
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Scrollable list — height ~350px */}
            <div
              className="overflow-y-auto h-[350px] scroll-smooth
                [&::-webkit-scrollbar]:w-[3px]
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:bg-[#333]
                [&::-webkit-scrollbar-thumb]:rounded-full
                hover:[&::-webkit-scrollbar-thumb]:bg-[#84cc16]/40"
            >
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={listInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className={`group flex gap-4 px-6 py-5 cursor-default transition-colors duration-300 hover:bg-white/[0.03] ${
                    i !== experiences.length - 1
                      ? "border-b border-[#1e1e1e]"
                      : ""
                  }`}
                >
                  {/* Dot + line */}
                  <div className="flex flex-col items-center pt-1 shrink-0">
                    <div
                      className={`w-2.5 h-2.5 rounded-full border-2 shrink-0 transition-colors duration-300 ${
                        exp.current
                          ? "bg-[#84cc16] border-[#84cc16]"
                          : "bg-transparent border-[#333] group-hover:border-[#84cc16]/50"
                      }`}
                    />
                    {i !== experiences.length - 1 && (
                      <div className="w-px flex-1 mt-2 bg-[#1e1e1e]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-white group-hover:text-[#84cc16] transition-colors duration-300 leading-snug">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 bg-[#84cc16]/10 text-[#84cc16] text-[9px] font-mono tracking-widest rounded-full border border-[#84cc16]/20 whitespace-nowrap">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] text-[#84cc16]/60 font-mono">
                        {exp.org}
                      </span>
                      <span className="text-[#333]">·</span>
                      <span className="text-[11px] text-white/25 font-mono">
                        {exp.period}
                      </span>
                      <span className="text-[#333]">·</span>
                      <span className="text-[10px] text-white/20 font-mono">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-xs text-white/35 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Right column ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Education card */}
            <ScrollReveal
              direction="up"
              delay={0.2}
              distance={30}
              className="bg-[#141414] border border-[#84cc16]/20 rounded-3xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#84cc16]/10 flex items-center justify-center shrink-0">
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
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-[#84cc16]/50 uppercase block">
                    Education · 2023 – Present
                  </span>
                  <p className="text-sm font-bold text-white leading-tight">
                    Universitas Syiah Kuala
                  </p>
                  <p className="text-xs text-white/35">B.Sc. Informatics</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 pt-2 border-t border-[#252525]">
                <span className="text-4xl font-serif font-bold text-[#84cc16]">
                  3.62
                </span>
                <span className="text-xs text-white/30 font-mono tracking-widest">
                  / 4.00 GPA
                </span>
              </div>
            </ScrollReveal>

            {/* Skills card */}
            <ScrollReveal
              direction="up"
              delay={0.3}
              distance={30}
              className="bg-[#141414] border border-[#252525] rounded-3xl p-6 flex-1"
            >
              <span className="text-[9px] font-mono tracking-widest text-white/25 uppercase block mb-4">
                Technical Skills
              </span>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill.category} className="group">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-[#84cc16] text-sm font-mono">
                        {skill.icon}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
                        {skill.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 bg-[#1a1a1a] text-white/40 rounded-md text-[10px] border border-[#252525] hover:border-[#84cc16]/20 hover:text-[#84cc16]/70 transition-all duration-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA Row */}
        <ScrollReveal
          direction="up"
          delay={0.1}
          distance={30}
          className="grid sm:grid-cols-2 gap-4 mt-6"
        >
          <div className="bg-[#141414] rounded-2xl p-6 border border-[#252525] flex items-center justify-between hover:border-[#84cc16]/30 transition-all duration-500 group">
            <div>
              <p className="text-white/30 text-xs mb-0.5">See my work</p>
              <p className="text-white font-bold">View Projects</p>
            </div>
            <a
              href="#projects"
              className="w-10 h-10 rounded-full bg-[#84cc16] flex items-center justify-center hover:scale-110 transition-transform shrink-0"
            >
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
            </a>
          </div>

          <div className="bg-[#84cc16] rounded-2xl p-6 flex items-center justify-between group">
            <div>
              <p className="text-[#0B0B0B]/50 text-xs mb-0.5">
                Let's collaborate
              </p>
              <p className="text-[#0B0B0B] font-bold">Get in Touch</p>
            </div>
            <a
              href="#contact"
              className="w-10 h-10 rounded-full bg-[#0B0B0B] flex items-center justify-center hover:scale-110 transition-transform shrink-0"
            >
              <svg
                className="w-4 h-4 text-[#84cc16]"
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
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Banner
      <div className="mt-32 overflow-hidden border-t border-b border-[#252525] py-6">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mx-8">
                Innovate
              </span>
              <span className="text-[#84cc16] text-2xl mx-4">+</span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#84cc16] mx-8">
                Lead
              </span>
              <span className="text-[#84cc16] text-2xl mx-4">+</span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mx-8">
                Build
              </span>
              <span className="text-[#84cc16] text-2xl mx-4">✦</span>
            </span>
          ))}
        </div>
      </div> */}
    </section>
  );
}
