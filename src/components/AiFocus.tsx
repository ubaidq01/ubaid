'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AiFocus() {
  const nodes = [
    {
      title: 'ARTIFICIAL INTELLIGENCE',
      subtitle: 'Quantized neural networks, gradient boosting & predictive models',
      tag: 'ONNX / TENSORS',
    },
    {
      title: 'COMPUTER VISION',
      subtitle: 'Real-time image feature extraction, morphological filters & OpenCV',
      tag: 'PERCEPTION',
    },
    {
      title: 'WEB TECHNOLOGY',
      subtitle: 'WebGPU shaders, WASM acceleration & modern Next.js interfaces',
      tag: 'EXECUTION',
    },
  ];

  return (
    <section
      id="ai-focus"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#070707] text-[#F5F5F5] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient Cool & Warm Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#8B7CFF]/10 via-transparent to-[#FF5A4F]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1400px] mx-auto">
        {/* Top small label */}
        <div className="flex items-center gap-3 mb-10 sm:mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B7CFF]">
            [ 04 // CURRENTLY EXPLORING ]
          </span>
          <div className="h-px w-12 bg-white/10" />
        </div>

        {/* Huge Headline: AI × WEB */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-baseline gap-4 sm:gap-8 flex-wrap"
          >
            <h2 className="editorial-heading font-black text-white uppercase tracking-tight">
              AI
            </h2>
            <span className="editorial-heading font-light text-[#FF5A4F] select-none">
              ×
            </span>
            <h2 className="editorial-heading font-extralight text-outline uppercase tracking-tight">
              WEB
            </h2>
          </motion.div>

          {/* Subtitle statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-xl sm:text-3xl font-light text-neutral-300 max-w-3xl mt-6 leading-relaxed"
          >
            Exploring how artificial intelligence, computer vision, and modern web technologies can
            work together.
          </motion.p>
        </div>

        {/* Sophisticated Connected Typography Architecture */}
        <div className="pt-12 sm:pt-16 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 relative">
            {nodes.map((node, index) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col justify-between p-8 rounded-2xl bg-[#0D0D0F] border border-white/[0.06] hover:border-white/20 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5A4F]">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                      {node.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3 group-hover:text-[#8B7CFF] transition-colors">
                    {node.title}
                  </h3>

                  <p className="text-sm font-light text-neutral-400 leading-relaxed">
                    {node.subtitle}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-neutral-600">
                  <span>SUBSYSTEM</span>
                  <span className="text-neutral-400 group-hover:text-white transition-colors">
                    ACTIVE PIPELINE
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Minimal connecting visual caption */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
            <span>[ SYSTEM SYNTHESIS: CLIENT-SIDE NEURAL COMPUTE ]</span>
            <span className="text-neutral-400">
              PRIVACY FIRST • ZERO CLOUD API LATENCY • HARDWARE ACCELERATED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
