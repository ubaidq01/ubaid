'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const primaryTools = [
    { name: 'PYTHON', category: 'Language & ML', desc: 'Neural nets, OpenCV pipelines & microservices' },
    { name: 'TYPESCRIPT', category: 'Language & Web', desc: 'Type-safe frontend and server architecture' },
    { name: 'JAVASCRIPT', category: 'Language', desc: 'Modern ES6+ asynchronous web runtimes' },
    { name: 'REACT', category: 'Frontend', desc: 'Component ecosystems and reactive interfaces' },
    { name: 'NEXT.JS', category: 'Framework', desc: 'Server components, edge routing & App Router' },
    { name: 'TAILWIND', category: 'Styling', desc: 'Design tokens and responsive layout systems' },
    { name: 'FLASK', category: 'Backend & ML', desc: 'Lightweight Python model serving' },
    { name: 'NODE.JS', category: 'Runtime', desc: 'Event-driven backend services & APIs' },
    { name: 'SUPABASE', category: 'Database & Auth', desc: 'PostgreSQL, RLS security & real-time sync' },
    { name: 'MONGODB', category: 'Database', desc: 'Flexible NoSQL document storage' },
    { name: 'OPENCV', category: 'Computer Vision', desc: 'Morphological processing & feature extraction' },
    { name: 'PYTORCH', category: 'Deep Learning', desc: 'Neural model training and evaluation' },
    { name: 'ONNX', category: 'Edge Inference', desc: 'High-speed browser model interchange' },
    { name: 'WEBGPU', category: 'Browser Compute', desc: 'Hardware-accelerated shader pipelines' },
    { name: 'GIT', category: 'DevOps', desc: 'Version control & collaborative engineering' },
  ];

  const secondaryTools = [
    'JAVA',
    'C++',
    'EXPRESS',
    'POSTGRESQL',
    'TENSORFLOW',
    'VERCEL',
    'LINUX',
    'DOCKER',
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#070707] text-[#F5F5F5] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FF5A4F]/6 blur-[150px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF5A4F]">
                [ 02 // CAPABILITIES ]
              </span>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <h2 className="editorial-statement font-extrabold uppercase tracking-tight text-white">
              TOOLS I WORK WITH<span className="text-[#FF5A4F]">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base font-light text-neutral-400">
            A curated toolkit spanning full-stack web engineering, edge artificial intelligence, and
            computer vision perception.
          </p>
        </div>

        {/* Primary Flowing Typography List */}
        <div className="flex flex-wrap items-baseline gap-x-6 sm:gap-x-10 gap-y-6 sm:gap-y-8 py-8 border-t border-b border-white/[0.08]">
          {primaryTools.map((tool) => {
            const isHovered = hoveredTech === tool.name;
            return (
              <div
                key={tool.name}
                onMouseEnter={() => setHoveredTech(tool.name)}
                onMouseLeave={() => setHoveredTech(null)}
                data-cursor="pointer"
                className="group relative cursor-pointer"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight transition-all duration-300 ${
                    isHovered
                      ? 'text-white font-medium drop-shadow-[0_0_24px_rgba(255,90,79,0.35)]'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {tool.name}
                </motion.span>

                {/* Subtle separator dot */}
                <span className="ml-6 sm:ml-10 text-neutral-700 select-none text-xl sm:text-3xl font-thin">
                  /
                </span>

                {/* Hover Context Chip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 -top-12 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D0D0F] border border-white/20 text-xs font-mono shadow-xl pointer-events-none whitespace-nowrap"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A4F]" />
                    <span className="text-white font-medium">{tool.category}</span>
                    <span className="text-neutral-500">—</span>
                    <span className="text-neutral-400">{tool.desc}</span>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Secondary Supporting Tools in Monospace */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
            ADDITIONAL RUNTIMES &amp; ENVIRONMENTS:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {secondaryTools.map((tool) => (
              <span
                key={tool}
                className="text-xs font-mono tracking-wider px-3 py-1 rounded-full border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/20 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
