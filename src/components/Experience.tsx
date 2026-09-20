'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const journeyEntries = [
    {
      period: 'PRESENT',
      category: 'CS & DATA SCIENCE ENGINEERING',
      role: 'Computer Science \u2013 Data Science Engineering Student',
      description:
        'Pursuing an engineering degree in Computer Science with a dedicated specialization in Data Science. Balancing deep mathematical and statistical foundations with machine learning pipelines, predictive modeling, and core computing systems (Data Structures & Algorithms, Object-Oriented Software Design in Java/C++, Database Management Systems, Computer Networks, and Operating Systems).',
      tags: ['Data Science', 'Machine Learning', 'Algorithms', 'Data Structures', 'Python', 'C++', 'Java'],
    },
    {
      period: '2025 — 2026',
      category: 'WEB DEVELOPMENT',
      role: 'Building Full-Stack Web Applications',
      description:
        'Architected and deployed production web applications, including the AITM Badminton Championship 2026 portal with dynamic team roster validation, secure file upload pipelines for ID cards, and real-time administrative bracket management.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    },
    {
      period: '2025 — 2026',
      category: 'AI / MACHINE LEARNING',
      role: 'Exploring Intelligent Systems & Edge Vision',
      description:
        'Engineered an experimental on-device browser vision agent executing lightweight quantized neural models locally using ONNX Runtime Web and hardware-accelerated WebGPU shaders without remote server latency.',
      tags: ['ONNX Runtime Web', 'WebGPU', 'Computer Vision', 'Edge AI'],
    },
    {
      period: '2024 — 2026',
      category: 'PROJECT DEVELOPMENT',
      role: 'Building Practical Software Products',
      description:
        'Engineered end-to-end solutions for concrete security and logistical challenges, including a dual-layer fake QR code (quishing) detection engine combining OpenCV edge forensics with Gradient Boosted classifiers.',
      tags: ['Python', 'OpenCV', 'Gradient Boosting', 'Cybersecurity'],
    },
    {
      period: 'ONGOING',
      category: 'HACKATHONS & EXPERIMENTATION',
      role: 'Exploring Emerging Technologies & Building in Public',
      description:
        'Actively participating in technical hackathons, prototyping experimental web interfaces, exploring hardware shaders, and sharing open-source code and architectural insights on GitHub.',
      tags: ['Open Source', 'Hackathons', 'GitHub', 'Web Standards'],
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#070707] text-[#F5F5F5] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#FF5A4F]/5 blur-[150px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF5A4F]">
                [ 05 // EXPERIENCE &amp; TIMELINE ]
              </span>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <h2 className="editorial-statement font-extrabold uppercase tracking-tight text-white">
              MY JOURNEY<span className="text-[#FF5A4F]">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base font-light text-neutral-400">
            A chronological timeline of academic rigor, production software delivery, and intelligent
            systems exploration.
          </p>
        </div>

        {/* Clean Two-Column Editorial Timeline with Thin Dividers */}
        <div className="border-t border-white/[0.08]">
          {journeyEntries.map((entry, index) => (
            <motion.div
              key={entry.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 py-10 sm:py-14 border-b border-white/[0.06] hover:border-white/20 transition-colors"
            >
              {/* Left Column: Year / Category */}
              <div className="md:col-span-4 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF5A4F] block">
                    {entry.period}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-1 group-hover:text-white transition-colors">
                    {entry.category}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-neutral-600 hidden md:block">
                  MILESTONE 0{index + 1}
                </span>
              </div>

              {/* Right Column: Role / Activity & Description */}
              <div className="md:col-span-8 space-y-4">
                <h4 className="text-lg sm:text-xl font-light text-neutral-200">
                  {entry.role}
                </h4>

                <p className="text-sm sm:text-base font-light text-neutral-400 leading-relaxed max-w-3xl">
                  {entry.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full border border-white/[0.06] text-neutral-400 group-hover:border-white/15 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
