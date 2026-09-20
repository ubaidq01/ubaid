'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Personality() {
  const interests = [
    { title: 'DATA SCIENCE & CS', detail: 'Statistical Learning, Algorithmic Analysis, Predictive Modeling' },
    { title: 'WEB DEVELOPMENT', detail: 'Next.js, TypeScript, Modern Architecture' },
    { title: 'AI / ML', detail: 'Neural Networks, Quantization, Pragmatic Inference' },
    { title: 'COMPUTER VISION', detail: 'OpenCV, WebGPU, On-Device Real-Time Perception' },
    { title: 'EXPERIMENTAL TECH', detail: 'Zero-Latency WebGPU, Hardware Shaders, WASM' },
    { title: 'OPEN SOURCE', detail: 'Building in Public, Modern Dev Tooling' },
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 bg-[#070707] text-[#F5F5F5] border-t border-white/[0.06] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Top small label */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-neutral-400 font-semibold">
            [ PERSPECTIVE &amp; FOCUS ]
          </span>
          <div className="h-px w-12 bg-white/10" />
        </div>

        {/* Manifesto Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mb-14 sm:mb-20"
        >
          <p className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-neutral-100 leading-[1.2]">
            &ldquo;I like understanding how things work,{' '}
            <span className="text-white font-medium">building them from scratch</span>, and turning
            ideas into <span className="text-[#FF5A4F] font-normal">usable software</span>.&rdquo;
          </p>
        </motion.div>

        {/* Core Interests as Typographic Rows (Not Cards!) */}
        <div className="border-t border-white/[0.08]">
          {interests.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-7 sm:py-9 border-b border-white/[0.08] hover:border-white/30 transition-colors"
            >
              <div className="flex items-baseline gap-5">
                <span className="text-sm sm:text-base font-mono text-neutral-400 group-hover:text-[#FF5A4F] transition-colors font-semibold">
                  0{index + 1}
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-200 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
              </div>
              <span className="text-sm sm:text-base font-mono text-neutral-400 group-hover:text-neutral-200 transition-colors mt-3 sm:mt-0 tracking-wide font-medium">
                {item.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
