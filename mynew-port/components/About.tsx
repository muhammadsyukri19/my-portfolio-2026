"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "React & Next.js", level: 80, color: "bg-[#84cc16]" },
  { name: "TypeScript", level: 82, color: "bg-[#a3e635]" },
  { name: "UI/UX Design", level: 85, color: "bg-[#84cc16]" },
  { name: "Tailwind CSS", level: 90, color: "bg-[#a3e635]" },
];

const tools = [
  {
    name: "Figma",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 38 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
          fill="#1ABCFE"
        />
        <path
          d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
          fill="#0ACF83"
        />
        <path
          d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
          fill="#FF7262"
        />
        <path
          d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
          fill="#F24E1E"
        />
        <path
          d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
          fill="#A259FF"
        />
      </svg>
    ),
  },
  {
    name: "VS Code",
    icon: (
      <svg
        className="w-15 h-15"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M74.9 97.3L96.4 87.8C98.6 86.8 100 84.6 100 82.2V17.8C100 15.4 98.6 13.2 96.4 12.2L74.9 2.7C72.3 1.5 69.2 2.1 67.2 4.1L28.9 38.7L12 25.8C10.4 24.6 8.2 24.6 6.6 25.9L1.3 30.6C-0.4 32.1 -0.4 34.8 1.3 36.3L16.1 50L1.3 63.7C-0.4 65.2 -0.4 67.9 1.3 69.4L6.6 74.1C8.2 75.4 10.4 75.4 12 74.2L28.9 61.3L67.2 95.9C69.2 97.9 72.3 98.5 74.9 97.3ZM75 27.2V72.8L56.5 50L75 27.2Z"
          fill="#007ACC"
        />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    icon: (
      <svg
        className="w-15 h-15"
        viewBox="0 0 98 96"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6C29.304 70.09 17.9 65.864 17.9 46.93c0-5.214 1.862-9.451 4.934-12.792-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0112.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.341 4.934 7.578 4.934 12.792 0 18.934-11.404 23.078-22.324 24.3 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
          fill="white"
        />
      </svg>
    ),
  },
  // {
  //   name: "Adobe Creative",
  //   icon: (
  //     <svg
  //       className="w-15 h-15"
  //       viewBox="0 0 240 234"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path d="M42.5 0H0V234L42.5 0Z" fill="#FF0000" />
  //       <path d="M197.5 0H240V234L197.5 0Z" fill="#FF0000" />
  //       <path d="M120 88L167.5 210H141L126 170H85L120 88Z" fill="#FF0000" />
  //     </svg>
  //   ),
  // },
  {
    name: "HTML5",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.902 27.201L3.655 2H28.345L26.095 27.197L15.985 30L5.902 27.201Z"
          fill="#E44D26"
        />
        <path
          d="M16 27.858L24.17 25.593L26.092 4.061H16V27.858Z"
          fill="#F16529"
        />
        <path
          d="M16 13.407H11.91L11.628 10.242H16V7.151H8.254L8.328 7.981L9.083 16.498H16V13.407Z"
          fill="#EBEBEB"
        />
        <path
          d="M16.018 21.117L16.003 21.121L12.477 20.152L12.252 17.656H9.146L9.59 22.641L15.998 24.391L16.018 24.385V21.117Z"
          fill="#EBEBEB"
        />
        <path
          d="M15.98 13.407V16.498H19.795L19.437 20.146L15.98 21.113V24.384L22.393 22.641L22.441 22.099L23.146 14.237L23.222 13.407H15.98Z"
          fill="white"
        />
        <path
          d="M15.98 7.151V10.242H23.747L23.809 9.555L23.956 7.981L24.03 7.151H15.98Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.902 27.201L3.656 2H28.344L26.095 27.197L15.985 30L5.902 27.201Z"
          fill="#1572B6"
        />
        <path
          d="M16 27.858L24.17 25.593L26.092 4.061H16V27.858Z"
          fill="#33A9DC"
        />
        <path
          d="M16 13.191H20.117L20.396 10.026H16V6.935H23.87L23.796 7.764L23.034 16.282H16V13.191Z"
          fill="white"
        />
        <path
          d="M16.019 21.218L16.004 21.222L12.477 20.253L12.252 17.756H9.147L9.59 22.742L16 24.492L16.019 24.486V21.218Z"
          fill="#EBEBEB"
        />
        <path
          d="M19.827 16.151L19.435 20.247L16.004 21.218V24.487L22.417 22.742L22.465 22.2L22.983 16.481L23.043 16.151H19.827Z"
          fill="white"
        />
        <path
          d="M16.011 6.935V10.026H8.555L8.489 9.339L8.342 7.765L8.268 6.935H16.011Z"
          fill="#EBEBEB"
        />
        <path
          d="M16 13.191V16.282H12.81L12.744 15.596L12.597 14.021L12.523 13.191H16Z"
          fill="#EBEBEB"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="2" fill="#F7DF1E" />
        <path
          d="M20.809 23.875C21.417 24.828 22.214 25.527 23.559 25.527C24.707 25.527 25.437 24.953 25.437 24.164C25.437 23.227 24.688 22.881 23.441 22.332L22.761 22.039C20.789 21.203 19.469 20.152 19.469 17.926C19.469 15.879 21.027 14.301 23.477 14.301C25.234 14.301 26.508 14.934 27.43 16.551L25.477 17.828C25.004 16.973 24.492 16.633 23.477 16.633C22.441 16.633 21.773 17.301 21.773 17.926C21.773 18.699 22.441 19.047 23.613 19.555L24.293 19.848C26.609 20.828 27.93 21.84 27.93 24.125C27.93 26.586 25.984 27.859 23.617 27.859C21.3 27.859 19.773 26.742 19.008 25.293L20.809 23.875ZM8.703 24.066C9.117 24.805 9.492 25.43 10.391 25.43C11.246 25.43 11.801 25.098 11.801 23.676V14.434H14.152V23.711C14.152 26.398 12.578 27.852 10.48 27.852C8.59 27.852 7.508 26.863 6.93 25.633L8.703 24.066Z"
          fill="#323330"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="2" fill="#3178C6" />
        <path
          d="M18.245 23.759V26.742C18.77 27.015 19.415 27.222 20.18 27.363C20.945 27.504 21.762 27.575 22.633 27.575C23.476 27.575 24.266 27.488 25.003 27.316C25.74 27.143 26.38 26.871 26.923 26.5C27.466 26.129 27.893 25.649 28.203 25.059C28.513 24.47 28.668 23.76 28.668 22.929C28.668 22.328 28.582 21.797 28.411 21.336C28.239 20.875 27.994 20.458 27.675 20.085C27.356 19.712 26.971 19.373 26.52 19.069C26.069 18.764 25.564 18.473 25.005 18.196C24.598 18 24.235 17.811 23.917 17.628C23.599 17.445 23.332 17.263 23.114 17.082C22.897 16.9 22.731 16.712 22.618 16.518C22.504 16.323 22.447 16.111 22.447 15.882C22.447 15.672 22.499 15.479 22.604 15.302C22.708 15.126 22.861 14.973 23.062 14.843C23.264 14.714 23.513 14.613 23.81 14.54C24.108 14.467 24.449 14.431 24.834 14.431C25.112 14.431 25.403 14.455 25.707 14.502C26.012 14.549 26.318 14.622 26.625 14.72C26.932 14.818 27.227 14.943 27.511 15.095C27.795 15.247 28.053 15.427 28.285 15.634V12.876C27.828 12.706 27.325 12.579 26.776 12.493C26.228 12.408 25.595 12.365 24.878 12.365C24.044 12.365 23.266 12.46 22.544 12.65C21.821 12.84 21.193 13.129 20.659 13.517C20.125 13.906 19.706 14.394 19.403 14.983C19.099 15.572 18.948 16.259 18.948 17.047C18.948 18.126 19.264 19.031 19.896 19.763C20.528 20.495 21.456 21.12 22.681 21.637C23.098 21.816 23.475 21.995 23.813 22.173C24.15 22.351 24.437 22.537 24.673 22.731C24.909 22.925 25.093 23.133 25.224 23.356C25.356 23.579 25.422 23.825 25.422 24.095C25.422 24.296 25.377 24.482 25.287 24.653C25.197 24.825 25.057 24.974 24.867 25.1C24.677 25.227 24.435 25.327 24.141 25.399C23.847 25.471 23.496 25.507 23.088 25.507C22.369 25.507 21.661 25.371 20.964 25.098C20.267 24.825 19.636 24.424 19.071 23.896L18.245 23.759Z"
          fill="white"
        />
        <path
          d="M12.289 14.594H16.485V12.509H5.668V14.594H9.834V27.394H12.289V14.594Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 13.7Q10.6 8.5 16 8.5C24.5 8.5 25.3 14.8 29.5 15.9C31.6 16.45 33.5 15.6 35.3 13.7Q33.7 18.9 28.3 18.9C19.8 18.9 19 12.6 14.8 11.5C12.7 10.95 10.8 11.8 9 13.7ZM2 22.1Q3.6 16.9 9 16.9C17.5 16.9 18.3 23.2 22.5 24.3C24.6 24.85 26.5 24 28.3 22.1C26.7 27.3 21.3 27.3 21.3 27.3C12.8 27.3 12 21 7.8 19.9C5.7 19.35 3.8 20.2 2 22.1Z"
          fill="#06B6D4"
        />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.89 11.537C19.075 8.414 17.197 6.928 16.654 5.97C16.405 5.525 16.186 5.065 16 4.591V4.508V4.489V4.47V4.451V4.432V4.412V4.387L15.98 4.407C15.949 4.537 15.899 4.662 15.831 4.778C15.693 5.002 15.54 5.216 15.374 5.419C14.355 6.656 12.365 9.091 11.146 11.406C7.176 18.762 13.649 24.482 13.649 24.482L13.847 24.608C13.973 25.716 14.155 27.376 14.155 27.376H15.885L15.96 27.344C15.96 27.344 16.041 25.764 16.136 24.641L16.353 24.449C16.353 24.449 22.825 18.762 20.89 11.537Z"
          fill="#00ED64"
        />
        <path
          d="M15.9 24.817L15.399 24.433C15.399 24.433 15.573 26.124 15.626 26.55C15.679 26.977 15.718 27.376 15.718 27.376H16.116C16.116 27.376 16.175 26.582 16.196 26.295C16.233 25.751 15.9 24.817 15.9 24.817Z"
          fill="#004B21"
        />
        <path
          d="M16.654 5.97C16.405 5.525 16.186 5.065 16 4.591V4.508V4.489V4.47V4.451V4.432V4.412V4.387L15.98 4.407C15.983 4.541 15.968 5.077 16.003 5.17C17.012 8.037 15.92 11.084 15.92 24.42L15.9 24.817C16.234 24.663 16.333 24.456 16.353 24.449C16.353 24.449 22.825 18.762 20.89 11.537C19.075 8.414 17.197 6.928 16.654 5.97Z"
          fill="#00A34D"
        />
      </svg>
    ),
  },
  {
    name: "Laravel",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.526 9.016C31.54 9.07 31.547 9.125 31.547 9.18V15.32C31.547 15.461 31.473 15.593 31.353 15.663L26.25 18.608V24.678C26.25 24.82 26.176 24.951 26.054 25.022L15.854 30.914C15.824 30.931 15.791 30.941 15.758 30.953C15.746 30.957 15.735 30.964 15.723 30.967C15.639 30.989 15.551 30.989 15.467 30.967C15.454 30.963 15.441 30.955 15.428 30.951C15.397 30.94 15.367 30.929 15.339 30.912L5.145 25.022C5.024 24.951 4.949 24.82 4.949 24.678V6.466C4.949 6.411 4.957 6.356 4.971 6.303C4.977 6.283 4.988 6.264 4.996 6.245C5.007 6.218 5.018 6.192 5.033 6.167C5.044 6.149 5.06 6.134 5.073 6.118C5.089 6.098 5.104 6.077 5.123 6.06C5.14 6.045 5.161 6.034 5.18 6.022C5.199 6.009 5.215 5.994 5.236 5.983L10.44 3.042C10.562 2.972 10.709 2.972 10.831 3.042L16.035 5.983C16.056 5.996 16.074 6.01 16.093 6.024C16.112 6.036 16.132 6.047 16.148 6.063C16.168 6.079 16.182 6.1 16.198 6.12C16.212 6.136 16.228 6.151 16.238 6.169C16.254 6.194 16.264 6.22 16.275 6.247C16.283 6.266 16.295 6.284 16.3 6.305C16.315 6.358 16.323 6.413 16.322 6.468V17.594L20.625 15.113V9.18C20.625 9.126 20.632 9.071 20.647 9.018C20.652 8.998 20.664 8.979 20.672 8.96C20.683 8.933 20.693 8.906 20.709 8.882C20.72 8.863 20.735 8.849 20.749 8.833C20.765 8.813 20.779 8.792 20.798 8.775C20.815 8.76 20.836 8.748 20.855 8.736C20.873 8.724 20.89 8.709 20.911 8.698L26.115 5.757C26.237 5.687 26.384 5.687 26.506 5.757L31.71 8.698C31.731 8.71 31.749 8.725 31.768 8.738C31.786 8.75 31.806 8.762 31.823 8.777C31.842 8.794 31.856 8.815 31.872 8.835C31.886 8.851 31.901 8.865 31.912 8.884C31.928 8.908 31.938 8.935 31.949 8.961C31.957 8.98 31.969 8.998 31.974 9.018L31.526 9.016Z"
          fill="#FF2D20"
        />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="2.8" fill="#61DAFB" />
        <ellipse
          cx="16"
          cy="16"
          rx="12"
          ry="4.5"
          stroke="#61DAFB"
          strokeWidth="1"
          fill="none"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="12"
          ry="4.5"
          stroke="#61DAFB"
          strokeWidth="1"
          fill="none"
          transform="rotate(60 16 16)"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="12"
          ry="4.5"
          stroke="#61DAFB"
          strokeWidth="1"
          fill="none"
          transform="rotate(120 16 16)"
        />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="14" fill="white" />
        <path
          d="M13.5 10V22L22.5 10"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="21" cy="11" r="1.5" fill="black" />
      </svg>
    ),
  },
];

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "5+", label: "Projects Done" },
  { number: "7+", label: "Happy Clients" },
  { number: "90%", label: "Dedication" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function About() {
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-60px" });
  const toolsRef = useRef(null);
  const toolsInView = useInView(toolsRef, { once: true, margin: "-60px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      className="py-16 md:py-22 px-6 sm:px-8 lg:px-12 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#84cc16]/3 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#84cc16]/2 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Section Title */}
        <ScrollReveal direction="up" distance={30} className="mb-24">
          <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-[#84cc16] block mb-4">
            ✦ Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
            "Building Things
            <br />
            <span className="gradient-text">That Matter"</span>
          </h2>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-24 items-start mb-32">
          {/* Photo */}
          <ScrollReveal direction="left" delay={0.1} distance={50} className="relative group">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border border-[#252525] bg-[#141414]">
                <img
                  src="/pribadi/syukri.png"
                  alt="Syukri"
                  className="relative rounded-2xl w-full group-hover:scale-[1.02] transition-transform duration-700 object-cover object-bottom aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0B] via-transparent to-transparent opacity-40"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 bg-[#84cc16] text-[#0B0B0B] px-5 py-3 rounded-xl font-bold text-sm shadow-lg"
              >
                <div className="text-xs font-mono uppercase tracking-wider opacity-70">
                  Status
                </div>
                <div className="font-bold">A Developer Ethuasiast</div>
              </motion.div>

              {/* Decorative corner bracket */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#84cc16]/50 rounded-tl-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#84cc16]/50 rounded-br-lg"></div>
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <motion.div
            ref={skillsRef}
            variants={containerVariants}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            className="space-y-7"
          >
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-white/50 leading-[1.85]"
            >
              I&apos;m a 6th-semester{" "}
              <span className="text-[#84cc16] font-semibold">
                Informatics student
              </span>{" "}
              at{" "}
              <span className="text-[#84cc16] font-semibold">
                Universitas Syiah Kuala
              </span>{" "}
              with a deep passion for{" "}
              <span className="text-white font-semibold">
                web development and UI/UX
              </span>
              . I enjoy turning ideas into functional, user-friendly digital
              products. My curiosity for technology drives me to keep learning,
              experimenting, and building projects that not only{" "}
              <span className="text-white font-semibold">run smoothly</span> but
              also deliver a{" "}
              <span className="text-white font-semibold">
                comfortable experience
              </span>{" "}
              for users.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm text-white/30 leading-[1.85] italic border-l-2 border-[#84cc16]/30 pl-4"
            >
              Saya mahasiswa Informatika semester 6 di Universitas Syiah Kuala
              yang memiliki minat besar di bidang pengembangan web dan UI/UX.
              Saya menikmati proses mengubah ide menjadi produk digital yang
              fungsional dan mudah digunakan. Ketertarikan saya pada teknologi
              mendorong saya terus belajar, bereksperimen, dan membangun proyek
              yang tidak hanya berjalan dengan baik, tetapi juga memberikan
              pengalaman yang nyaman bagi pengguna.
            </motion.p>

            {/* Skills */}
            <motion.div variants={itemVariants} className="pt-8 space-y-6">
              <h3 className="text-xs font-mono tracking-[0.25em] uppercase text-[#84cc16] mb-2">
                ✦ Skills
              </h3>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-white/30 font-mono text-xs">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#252525]">
                    <motion.div
                      className={`h-full rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={
                        skillsInView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        delay: 0.5,
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            ref={toolsRef}
            variants={containerVariants}
            initial="hidden"
            animate={toolsInView ? "visible" : "hidden"}
          >
            <h3 className="text-center text-[11px] font-mono tracking-[0.35em] uppercase text-white/30 mb-10">
              ✦ Tools I Use ✦
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 cursor-default"
                  title={tool.name}
                >
                  {tool.icon}
                </motion.div>
              ))}
            </div>

            {/* Stats Counter */}
            <motion.div
              ref={statsRef}
              variants={containerVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              className="grid grid-cols-2 md:grid-cols-2 gap-4 my-24"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-[#141414] rounded-2xl p-8 md:p-10 text-center border-2 border-[#252525] hover:border-[#84cc16]/30 transition-all duration-500 cursor-default group card-glow"
                >
                  <div className="text-3xl md:text-4xl font-serif font-bold mb-3 text-white group-hover:text-[#84cc16] transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-[11px] text-white/30 group-hover:text-white/50 transition-colors font-mono tracking-[0.15em] uppercase leading-relaxed">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
