'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Sophisticated scroll-driven parallax & subtle fade transition
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const ambientGlowOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.1]);

  // Entrance animation variants (refined, cinematic, 600-1000ms)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.25,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 35, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const portraitVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.45,
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.4,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#070707] text-[#F5F5F5] pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 px-5 sm:px-8 lg:px-14 select-none"
    >
      {/* 1. Subtle Ambient Background Lighting (Warm Orange / Dark Amber Only, No Blue/Cyan) */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: ambientGlowOpacity }}
        className="absolute top-1/4 right-[5%] sm:right-[10%] w-[380px] sm:w-[600px] h-[380px] sm:h-[600px] rounded-full bg-gradient-to-br from-[#FF5A4F]/12 via-[#FF7A00]/06 to-transparent blur-[140px] pointer-events-none -z-10"
      />
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: ambientGlowOpacity }}
        className="absolute top-1/3 left-[-5%] sm:left-[2%] w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full bg-[#FF5A4F]/04 blur-[130px] pointer-events-none -z-10"
      />

      {/* 2. Top Editorial Eyebrow & Status Row */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1400px] mx-auto flex items-center justify-between pb-4 border-b border-white/[0.06]"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#FF5A4F]">
            01 // INTRODUCTION
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="hidden sm:inline-block text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
            BASED IN INDIA &bull; BUILDING FOR THE WEB
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#FF5A4F] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-widest text-neutral-300 uppercase">
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>
      </motion.div>

      {/* 3. Main Two-Column Editorial Composition (Desktop: Left 58%, Right 42%) */}
      <motion.div
        style={{ y: heroContentY, opacity: heroOpacity }}
        className="w-full max-w-[1400px] mx-auto my-auto py-6 sm:py-10 lg:py-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          
          {/* LEFT COLUMN: 58% Width - Dominant Identity & Clean Typography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center order-1"
          >
            {/* Small Eyebrow Text */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 mb-3 sm:mb-4"
            >
              <div className="h-px w-6 sm:w-8 bg-[#FF5A4F]" />
              <span className="text-[11px] sm:text-xs md:text-sm font-mono font-bold uppercase tracking-[0.25em] text-[#FF5A4F]">
                DATA-SCIENCE ENGINEER
              </span>
            </motion.div>

            {/* Dominant Name Element: UBAID QUAZI. */}
            <div className="flex flex-col mb-4 sm:mb-6">
              <h1 className="text-[clamp(3.5rem,7.5vw,7.4rem)] font-black tracking-[-0.035em] leading-[0.88] uppercase text-[#F5F5F5] select-text">
                {/* Line 1: UBAID */}
                <motion.span
                  variants={nameVariants}
                  className="block overflow-hidden"
                >
                  {'UBAID'.split('').map((char, index) => (
                    <motion.span
                      key={`u-${index}`}
                      variants={letterVariants}
                      whileHover={{ y: -3, scale: 1.04 }}
                      className="inline-block transition-colors duration-200 hover:text-[#FF5A4F]"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>

                {/* Line 2: QUAZI. (Polished Z accent with unified stroke & kerning) */}
                <motion.span
                  variants={nameVariants}
                  className="block overflow-hidden mt-1 sm:mt-2"
                >
                  <span className="inline-flex items-baseline">
                    {['Q', 'U', 'A'].map((char, index) => (
                      <motion.span
                        key={`q-${index}`}
                        variants={letterVariants}
                        whileHover={{ y: -3, scale: 1.04 }}
                        className="inline-block transition-colors duration-200 hover:text-[#FF5A4F]"
                      >
                        {char}
                      </motion.span>
                    ))}
                    {/* Polished Z accent - identical font weight, baseline & tight tracking */}
                    <motion.span
                      variants={letterVariants}
                      whileHover={{ y: -3, scale: 1.04 }}
                      className="inline-block bg-gradient-to-br from-[#FF7A6F] via-[#FF5A4F] to-[#FF453A] bg-clip-text text-transparent font-black drop-shadow-[0_0_20px_rgba(255,90,79,0.35)] transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(255,90,79,0.6)]"
                      title="Z"
                    >
                      Z
                    </motion.span>
                    {/* I */}
                    <motion.span
                      variants={letterVariants}
                      whileHover={{ y: -3, scale: 1.04 }}
                      className="inline-block transition-colors duration-200 hover:text-[#FF5A4F]"
                    >
                      I
                    </motion.span>
                    {/* Signature Accent Period */}
                    <motion.span
                      variants={letterVariants}
                      className="inline-block text-[#FF5A4F] ml-0.5 sm:ml-1 font-mono font-black"
                    >
                      .
                    </motion.span>
                  </span>
                </motion.span>
              </h1>
            </div>

            {/* Sub-statement: Developer Title */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5"
            >
              <span className="text-xs sm:text-sm md:text-base font-mono font-bold uppercase tracking-[0.2em] text-[#FF5A4F]">
                FULL-STACK DEVELOPER
              </span>
              <span className="text-neutral-500 font-mono text-xs">&bull;</span>
              <span className="text-xs sm:text-sm md:text-base font-mono font-semibold uppercase tracking-[0.2em] text-neutral-200">
                AI ENTHUSIAST
              </span>
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-[1.125rem] font-light text-neutral-300 leading-relaxed max-w-lg lg:max-w-xl mb-7 sm:mb-8"
            >
              I build modern web experiences and intelligent software that turn ideas into something people can actually use.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              {/* Primary Button */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FF5A4F] text-[#070707] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#ff6f65] hover:shadow-[0_0_30px_rgba(255,90,79,0.4)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A4F]"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary Button */}
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/20 bg-white/[0.03] text-neutral-200 text-xs sm:text-sm font-mono font-medium uppercase tracking-wider transition-all duration-300 hover:border-white/50 hover:bg-white/[0.08] hover:text-white hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span>CONTACT ME</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#FF5A4F]" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: 42% Width - Dedicated Editorial Portrait Composition */}
          <motion.div
            variants={portraitVariants}
            initial="hidden"
            animate="visible"
            style={{ scale: portraitScale }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end relative order-2 py-4 lg:py-0"
          >
            {/* Portrait Frame Container */}
            <div className="relative w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[380px] lg:max-w-[400px] xl:max-w-[430px]">
              
              {/* Ambient Warm Atmospheric Glow behind card */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#FF5A4F]/14 via-[#FF7A00]/06 to-transparent blur-2xl pointer-events-none -z-10" />

              {/* Main Portrait Card */}
              <div className="relative h-[430px] xs:h-[470px] sm:h-[510px] lg:h-[520px] xl:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.09] bg-gradient-to-b from-[#141418] via-[#0d0d10] to-[#070707] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(255,90,79,0.08)]">
                
                {/* Subtle Interior Warm Glow behind person's head & shoulders */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-72 h-64 sm:h-72 rounded-full bg-gradient-to-tr from-[#FF5A4F]/18 via-[#FF7A00]/08 to-transparent blur-2xl pointer-events-none" />

                {/* Subtle Editorial Faint Grid in background */}
                <div className="absolute inset-0 bg-grid-faint opacity-30 pointer-events-none" />

                {/* Technical Corner Accents */}
                <div className="absolute top-3.5 left-4 flex items-center gap-1.5 z-20">
                  <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                    ID // UQ-01
                  </span>
                </div>
                <div className="absolute top-3.5 right-4 flex items-center gap-1.5 z-20">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A4F] animate-pulse" />
                  <span className="text-[9px] font-mono tracking-widest text-[#FF5A4F] uppercase font-bold">
                    ACTIVE
                  </span>
                </div>

                {/* Portrait Image Layer (Upper body, face, glasses, suit prominently displayed) */}
                <div className="relative w-full h-full flex items-end justify-center pt-8">
                  <Image
                    src="/ubaid-portrait.webp"
                    alt="Ubaid Quazi - Full-Stack Developer & AI Enthusiast"
                    width={495}
                    height={615}
                    priority
                    className="w-full h-full object-cover object-top filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:scale-[1.02] select-none"
                  />
                  
                  {/* Soft bottom blend to seamlessly integrate torso into dark card base */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070707] via-[#070707]/75 to-transparent pointer-events-none z-10" />
                </div>

                {/* Editorial Bottom Badge */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between z-20 px-3.5 py-2 rounded-xl bg-[#070707]/80 backdrop-blur-md border border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A4F]" />
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-neutral-200 uppercase">
                      UBAID QUAZI
                    </span>
                  </div>
                  <span className="text-[9px] font-mono tracking-wider text-neutral-400 uppercase">
                    FULL-STACK &bull; AI
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* 10. Bottom Editorial Details & Minimal Scroll Indicator */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1400px] mx-auto flex items-center justify-between pt-4 border-t border-white/[0.06]"
      >
        {/* Bottom Left Detail */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
            ENGINEERING &bull; SYSTEMS &bull; AI
          </span>
        </div>

        {/* Bottom Center: Scroll Indicator */}
        <a
          href="#about"
          className="group flex flex-col items-center gap-1.5 text-neutral-400 hover:text-white transition-colors py-1"
          aria-label="Scroll to About Section"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] group-hover:text-[#FF5A4F] transition-colors flex items-center gap-1">
            SCROLL <ArrowDown className="w-3 h-3 text-[#FF5A4F] animate-bounce" />
          </span>
          <div className="w-8 h-px bg-white/15 group-hover:bg-[#FF5A4F] transition-colors" />
        </a>

        {/* Bottom Right Detail */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
            [ 2026 OFFICIAL PORTFOLIO ]
          </span>
        </div>
      </motion.div>
    </section>
  );
}
