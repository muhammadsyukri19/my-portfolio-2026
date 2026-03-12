"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import ParticleField from "@/components/ParticleField";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <main
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <ParticleField />
        <Navbar />
        <Hero />
        <About />
        <SectionDivider variant="glow" />
        <Experience />
        <SectionDivider variant="diamond" />
        <Projects />
        <SectionDivider variant="glow" />
        <Contact />
        <Footer />
        <MusicPlayer />
      </main>
    </>
  );
}
