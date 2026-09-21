'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Subtle scroll-driven parallax & fade
  const typographyY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const typographyScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const typographyOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [0.85, 0]);

  // Stagger reveal animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 45, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-transparent pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 px-4 sm:px-8 lg:px-12 select-none"
    >
      {/* 1. Ambient Background Layer */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute top-12 right-[-5%] sm:right-[5%] w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] rounded-full bg-gradient-to-br from-[#FF5A4F]/20 via-[#FF7A00]/10 to-transparent blur-[130px] pointer-events-none -z-10"
      />

      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute bottom-16 left-[-10%] sm:left-[0%] w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full bg-[#8B7CFF]/10 blur-[130px] pointer-events-none -z-10"
      />

      {/* 2. Top Header Status & Discipline (Larger & Clearer) */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1400px] mx-auto flex items-center justify-between pt-2 sm:pt-4"
      >
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#FF5A4F] animate-ping" />
          <span className="text-xs sm:text-base font-mono font-semibold uppercase tracking-[0.25em] text-neutral-100">
            CS (DATA SCIENCE) STUDENT / FULL-STACK &amp; AI
          </span>
        </div>
        <div className="hidden sm:block text-xs sm:text-sm font-mono tracking-widest text-neutral-300 uppercase font-semibold">
          [ 2026 OFFICIAL PORTFOLIO ]
        </div>
      </motion.div>

      {/* 3. Hero Centerpiece: BIG NAME + Profile Photo Beside Name + Statement Below */}
      <div className="w-full max-w-[1400px] mx-auto my-auto py-4 sm:py-6 lg:py-8">
        <motion.div
          style={{ y: typographyY, scale: typographyScale, opacity: typographyOpacity }}
          className="flex flex-col"
        >
          {/* Main Top Row: Name Headline + Profile Photo Tightly Attached Beside Name */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-start gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 w-fit">
            {/* Left: Animated Name Headline */}
            <div className="flex flex-col justify-center shrink-0">
              {/* Line 1: UBAID */}
              <motion.div
                variants={nameContainerVariants}
                initial="hidden"
                animate="visible"
                className="overflow-hidden"
              >
                <h1 className="hero-name font-black text-[#F5F5F5] tracking-tight uppercase">
                  {'UBAID'.split('').map((char, index) => (
                    <motion.span
                      key={`ubaid-${index}`}
                      variants={letterVariants}
                      whileHover={{ scale: 1.06, y: -4 }}
                      className="inline-block transition-colors duration-300 hover:text-[#FF5A4F] drop-shadow-[0_0_25px_rgba(255,90,79,0.25)]"
                    >
                      {char}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>

              {/* Line 2: QUAZI (Indented / Luminous Lava Glow & Animated) */}
              <motion.div
                variants={nameContainerVariants}
                initial="hidden"
                animate="visible"
                className="overflow-hidden pl-3 sm:pl-8 md:pl-12 lg:pl-16 -mt-2 sm:-mt-4"
              >
                <div className="hero-name uppercase flex items-baseline">
                  {'QUAZI'.split('').map((char, index) => {
                    const isHighlighted = index % 2 === 1;
                    return (
                      <motion.span
                        key={`quazi-${index}`}
                        variants={letterVariants}
                        whileHover={{ scale: 1.06, y: -4 }}
                        className={`inline-block ${
                          isHighlighted ? 'text-lava-glow font-light' : 'font-extrabold text-white'
                        } transition-all duration-300 hover:text-[#FF5A4F] hover:drop-shadow-[0_0_35px_#FF5A4F]`}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                  <motion.span
                    variants={letterVariants}
                    className="text-[#FF5A4F] inline-block font-mono ml-1 sm:ml-2 animate-pulse"
                  >
                    .
                  </motion.span>
                </div>
              </motion.div>
            </div>

            {/* Right: Transparent Profile Photo Tightly Attached Beside Name */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="relative shrink-0 flex items-end -ml-2 sm:-ml-4 lg:-ml-6 self-end"
            >
              {/* Subtle volcanic ambient glow behind photo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-64 bg-gradient-to-tr from-[#FF5A4F]/25 via-[#FF7A00]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

              <div className="relative w-[180px] sm:w-[230px] md:w-[260px] lg:w-[310px] xl:w-[340px] h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px] flex items-end justify-center">
                <Image
                  src="/ubaid-hero.webp"
                  alt="Ubaid Quazi - Full-Stack Developer & CS Student"
                  width={682}
                  height={1024}
                  priority
                  className="w-full h-full object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] drop-shadow-[0_0_25px_rgba(255,90,79,0.15)] transition-transform duration-500 hover:scale-105 select-none pointer-events-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Title & Statement BELOW the name and portrait */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="pt-5 sm:pt-7 border-t border-white/[0.08] max-w-5xl"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-sm mb-4">
              <span className="h-2 w-2 rounded-full bg-[#FF5A4F]" />
              <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-neutral-100">
                CS &ndash; DATA SCIENCE ENGINEERING STUDENT &bull; FULL-STACK &amp; AI
              </span>
            </div>

            {/* Statement: BUILDING INTELLIGENT EXPERIENCES */}
            <h2 className="hero-substatement font-extrabold uppercase tracking-tight text-white">
              BUILDING{' '}
              <span className="text-lava-glow font-light inline-block px-1">
                INTELLIGENT
              </span>{' '}
              EXPERIENCES<span className="text-[#FF5A4F]">.</span>
            </h2>

            {/* Supporting description */}
            <p className="text-base sm:text-xl font-light text-neutral-300 mt-4 max-w-3xl leading-relaxed">
              Computer Science &ndash; Data Science Engineering student building production web applications and exploring the intersection of AI, computer vision, and the modern web.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* 4. Bottom Row: Discipline, Scroll Indicator, Base */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1400px] mx-auto flex items-end justify-between pt-5 border-t border-white/[0.08]"
      >
        {/* Bottom Left */}
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-neutral-400">
            CS &ndash; DATA SCIENCE ENGINEERING STUDENT
          </span>
          <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-white font-bold mt-0.5">
            UBAID QUAZI &mdash; FULL-STACK &amp; AI
          </span>
        </div>

        {/* Bottom Center: Scroll Indicator */}
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors"
          aria-label="Scroll to About Section"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] group-hover:text-[#FF5A4F] transition-colors">
            SCROLL
          </span>
          <div className="w-5 h-5 flex items-center justify-center animate-bounce-slow">
            <ArrowDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FF5A4F] transition-colors" />
          </div>
        </a>

        {/* Bottom Right */}
        <div className="hidden sm:flex flex-col items-end">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
            BASE
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-300 mt-0.5">
            INDIA / AVAILABLE WORLDWIDE
          </span>
        </div>
      </motion.div>
    </section>
  );
}
