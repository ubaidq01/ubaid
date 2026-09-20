'use client';

import React from 'react';
import CinematicIntro from '@/components/CinematicIntro';
import LavaBackground from '@/components/LavaBackground';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Personality from '@/components/Personality';
import TechStack from '@/components/TechStack';
import FeaturedProjects from '@/components/FeaturedProjects';
import AiFocus from '@/components/AiFocus';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070707] text-[#F5F5F5] selection:bg-[#FF5A4F] selection:text-black">
      {/* 0. Dramatic Opening Sequence on Load/Refresh */}
      <CinematicIntro />

      {/* 0.1 Boiling Lava Simulation Background */}
      <LavaBackground />

      {/* 1. Desktop Interactive Custom Cursor */}
      <CustomCursor />

      {/* 2. Scroll Depth Reading Bar */}
      <ScrollProgress />

      {/* 3. Floating Minimal Navigation */}
      <Navbar />

      {/* 4. Main Editorial Journey */}
      <main className="relative z-10">
        {/* Section 00: Cinematic Hero with Prominent Ubaid Quazi Display */}
        <Hero />

        {/* Section 01: Editorial Statement */}
        <About />

        {/* Section 01.5: Engineering Manifesto & Focus */}
        <Personality />

        {/* Section 02: Flowing Typographic Tool Stack */}
        <TechStack />

        {/* Section 03: Selected Work Case Studies */}
        <FeaturedProjects />

        {/* Section 04: AI × Web Connected Architecture */}
        <AiFocus />

        {/* Section 05: Experience & Journey Timeline */}
        <Experience />

        {/* Section 06: Contact & Inquiries */}
        <Contact />
      </main>

      {/* 5. Studio Minimal Footer */}
      <Footer />
    </div>
  );
}
