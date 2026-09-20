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
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#070707] text-[#F5F5F5] border-t border-white/[0.06] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Top small label */}
        <div className="flex items-center gap-3 mb-6 sm:mb-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
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
          className="max-w-4xl mb-10 sm:mb-16"
        >
          <p className="text-2xl sm:text-4xl lg:text-5xl font-extralight tracking-tight text-neutral-200 leading-[1.25]">
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
              className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-6 sm:py-8 border-b border-white/[0.06] hover:border-white/20 transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-neutral-600 group-hover:text-[#FF5A4F] transition-colors">
                  0{index + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-neutral-300 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
              </div>
              <span className="text-xs sm:text-sm font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors mt-2 sm:mt-0 tracking-wide">
                {item.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
