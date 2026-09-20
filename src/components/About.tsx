'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-[85vh] flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#070707] text-[#F5F5F5] overflow-hidden border-t border-white/[0.06]"
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
          className="flex items-center gap-3 mb-10 sm:mb-16"
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
          className="mb-12 sm:mb-20 max-w-5xl"
        >
          <h2 className="editorial-statement font-normal text-white/95 uppercase leading-[0.96]">
            I BUILD SOFTWARE <br />
            <span className="text-lava-glow font-light">THAT TURNS IDEAS</span> <br />
            INTO REAL <span className="font-extrabold text-white">EXPERIENCES</span>
            <span className="text-[#FF5A4F]">.</span>
          </h2>
        </motion.div>

        {/* Descriptive Editorial Paragraph & Details in 2-column typographic layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pt-8 border-t border-white/[0.06]">
          {/* Left Sub-heading / Concept */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF5A4F] block mb-2">
              DISCIPLINE &amp; PHILOSOPHY
            </span>
            <h3 className="text-xl font-light text-neutral-200 tracking-tight">
              Engineering with mathematical depth, computational rigor, and creative discipline.
            </h3>
          </motion.div>

          {/* Right Descriptive Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-8 space-y-6"
          >
            <p className="text-xl sm:text-2xl font-light text-neutral-300 leading-relaxed">
              I&apos;m <strong className="text-white font-medium">Ubaid Quazi</strong>, a{' '}
              <span className="text-white font-semibold underline decoration-[#FF5A4F] decoration-2 underline-offset-4">
                Computer Science &ndash; Data Science Engineering student
              </span>{' '}
              and developer focused on full-stack web platforms, artificial intelligence, computer vision, and practical software products.
            </p>
            <p className="text-base text-neutral-400 font-light leading-relaxed max-w-2xl">
              Rather than assembling generic templates, I bridge statistical data science and algorithmic engineering with production web architectures —
              whether that means eliminating tournament coordination chaos with Next.js &amp; Supabase,
              deploying zero-latency on-device vision models via WebGPU &amp; ONNX, or preventing physical quishing attacks with computer vision forensics.
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
            className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#FF5A4F]/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#FF5A4F]">
                  [ 01 // ACADEMIC DISCIPLINE ]
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF5A4F]/10 text-[#FF5A4F] border border-[#FF5A4F]/20 font-semibold">
                  STUDENT
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-1.5 group-hover:text-white transition-colors">
                Computer Science &amp; Engineering
              </h4>
              <p className="text-xs sm:text-sm font-mono text-[#FF7A00] mb-3">
                Specialization: Data Science
              </p>
              <p className="text-xs sm:text-sm font-light text-neutral-400 leading-relaxed">
                Focused on statistical analysis, machine learning pipelines, predictive modeling, and computational theory alongside core Computer Science fundamentals (DSA, OOP in Java/C++, DBMS, OS, Networks).
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-5 mt-5 border-t border-white/[0.06]">
              {['Data Science', 'Machine Learning', 'Data Structures', 'Algorithms', 'Python', 'C++'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
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
            className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/25 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
                  [ 02 // WEB ARCHITECTURE ]
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-neutral-300 border border-white/10">
                  PRODUCTION
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-1.5">
                Modern Full-Stack Systems
              </h4>
              <p className="text-xs sm:text-sm font-mono text-neutral-400 mb-3">
                Next.js, TypeScript &amp; Supabase
              </p>
              <p className="text-xs sm:text-sm font-light text-neutral-400 leading-relaxed">
                Engineering responsive, highly interactive web applications with real-time relational databases, multi-step verification pipelines, role-based dashboards, and modular state architecture.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-5 mt-5 border-t border-white/[0.06]">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
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
            className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#8B7CFF]/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8B7CFF]">
                  [ 03 // INTELLIGENT SYSTEMS ]
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#8B7CFF]/10 text-[#8B7CFF] border border-[#8B7CFF]/20">
                  APPLIED AI
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-1.5">
                Edge AI &amp; Computer Vision
              </h4>
              <p className="text-xs sm:text-sm font-mono text-[#8B7CFF] mb-3">
                ONNX WebGPU &amp; OpenCV Forensics
              </p>
              <p className="text-xs sm:text-sm font-light text-neutral-400 leading-relaxed">
                Deploying hardware-accelerated neural inference directly inside browser runtimes without cloud latency, and utilizing computer vision heuristics to detect security anomalies.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-5 mt-5 border-t border-white/[0.06]">
              {['ONNX Runtime', 'WebGPU', 'OpenCV', 'PyTorch', 'Edge Vision'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
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
