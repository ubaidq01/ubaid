'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-[75vh] flex flex-col justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#070707] text-[#F5F5F5] overflow-hidden border-t border-white/[0.06]"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#8B7CFF]/5 blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1400px] mx-auto">
        {/* Small Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 sm:mb-10"
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF5A4F]">
            [ 01 // ABOUT ]
          </span>
          <div className="h-px w-12 bg-white/10" />
        </motion.div>

        {/* Large Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 sm:mb-14 max-w-5xl"
        >
          <h2 className="editorial-statement font-normal text-white/95 uppercase leading-[0.96]">
            I BUILD SOFTWARE <br />
            <span className="text-lava-glow font-light">THAT TURNS IDEAS</span> <br />
            INTO REAL <span className="font-extrabold text-white">EXPERIENCES</span>
            <span className="text-[#FF5A4F]">.</span>
          </h2>
        </motion.div>

        {/* Descriptive Editorial Paragraph & Details in 2-column typographic layout with Profile Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-8 border-t border-white/[0.06] items-center">
          {/* Left Column: High-Resolution Profile Portrait (Frameless with Natural Background) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-[400px] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/ubaid-profile.webp"
                alt="Ubaid Quazi - CS Student & Full-Stack Developer"
                width={721}
                height={1024}
                priority
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right Column: Discipline, Philosophy & Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#FF5A4F] block mb-2 font-semibold">
                DISCIPLINE &amp; PHILOSOPHY
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-neutral-100 tracking-tight leading-snug">
                Engineering with mathematical depth, computational rigor, and creative discipline.
              </h3>
            </div>

            <p className="text-xl sm:text-2xl font-light text-neutral-200 leading-relaxed">
              I&apos;m <strong className="text-white font-semibold">Ubaid Quazi</strong>, a{' '}
              <span className="text-white font-bold underline decoration-[#FF5A4F] decoration-2 underline-offset-4">
                Computer Science &ndash; Data Science Engineering student
              </span>{' '}
              and developer focused on full-stack web platforms, artificial intelligence, computer vision, and practical software products.
            </p>
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-3xl">
              Rather than assembling generic templates, I bridge statistical data science and algorithmic engineering with production software architectures —
              whether that means eliminating tournament coordination chaos with Next.js &amp; Supabase,
              streamlining campus maintenance dispatch pipelines with FixIt, or engineering multiplayer game mechanics and interactive client systems in Godot for Blackout.
            </p>
          </motion.div>
        </div>

        {/* Dedicated 3-Column Discipline & Engineering Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-12 sm:pt-16 mt-12 sm:mt-16 border-t border-white/[0.08]">
          {/* Column 01: Computer Science & Data Science Engineering Student */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-7 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.1] hover:border-[#FF5A4F]/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF5A4F] font-semibold">
                  [ 01 // ACADEMIC DISCIPLINE ]
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#FF5A4F]/10 text-[#FF5A4F] border border-[#FF5A4F]/20 font-bold">
                  STUDENT
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2 group-hover:text-white transition-colors">
                Computer Science &amp; Engineering
              </h4>
              <p className="text-sm sm:text-base font-mono text-[#FF7A00] font-semibold mb-3">
                Specialization: Data Science
              </p>
              <p className="text-sm sm:text-base font-light text-neutral-300 leading-relaxed">
                Focused on statistical analysis, machine learning pipelines, predictive modeling, and computational theory alongside core Computer Science fundamentals (DSA, OOP in Java/C++, DBMS, OS, Networks).
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-5 mt-5 border-t border-white/[0.08]">
              {['Data Science', 'Machine Learning', 'Data Structures', 'Algorithms', 'Python', 'C++'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded bg-white/[0.05] text-neutral-200 border border-white/10 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Column 02: Full-Stack Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative p-7 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.1] hover:border-white/30 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-300 font-semibold">
                  [ 02 // WEB ARCHITECTURE ]
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.08] text-neutral-200 border border-white/15 font-semibold">
                  PRODUCTION
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
                Modern Full-Stack Systems
              </h4>
              <p className="text-sm sm:text-base font-mono text-neutral-300 font-semibold mb-3">
                Next.js, TypeScript &amp; Supabase
              </p>
              <p className="text-sm sm:text-base font-light text-neutral-300 leading-relaxed">
                Engineering responsive, highly interactive web applications with real-time relational databases, multi-step verification pipelines, role-based dashboards, and modular state architecture.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-5 mt-5 border-t border-white/[0.08]">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded bg-white/[0.05] text-neutral-200 border border-white/10 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Column 03: Applied AI & Computer Vision */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative p-7 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.1] hover:border-[#8B7CFF]/50 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8B7CFF] font-semibold">
                  [ 03 // INTELLIGENT SYSTEMS ]
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#8B7CFF]/15 text-[#8B7CFF] border border-[#8B7CFF]/30 font-semibold">
                  EDGE &amp; AI
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
                Edge AI &amp; Vision Systems
              </h4>
              <p className="text-sm sm:text-base font-mono text-[#8B7CFF] font-semibold mb-3">
                WebGPU, ONNX Runtime &amp; OpenCV
              </p>
              <p className="text-sm sm:text-base font-light text-neutral-300 leading-relaxed">
                Pioneering client-side computer vision models running lightweight neural networks directly inside browsers via WebGPU compute shaders, zero-latency inference, and vision forensics.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-5 mt-5 border-t border-white/[0.08]">
              {['Computer Vision', 'WebGPU', 'ONNX Runtime', 'OpenCV', 'Neural Networks', 'Python'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded bg-white/[0.05] text-neutral-200 border border-white/10 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
