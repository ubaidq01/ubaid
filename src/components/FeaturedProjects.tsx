'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldAlert, Cpu, Trophy, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { FEATURED_PROJECTS } from '@/data/portfolioData';
import { Project } from '@/types';
import ProjectModal from '@/components/ProjectModal';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Bespoke high-fidelity editorial visual panels for each project
  const renderVisualPanel = (project: Project) => {
    if (project.id === 'aitm-badminton-championship') {
      return (
        <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl bg-[#0B0B0E] border border-white/[0.08] overflow-hidden p-6 sm:p-8 flex flex-col justify-between group-hover:border-white/25 transition-all duration-500 shadow-2xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#FF5A4F]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid-faint opacity-30 pointer-events-none" />

          {/* Top Panel Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white">
                <Trophy className="w-4 h-4 text-[#FF5A4F]" />
              </div>
              <div>
                <span className="text-xs font-mono text-white block uppercase tracking-wider">
                  Tournament Platform
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  Next.js • Supabase • PostgreSQL
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest">
                VERIFIED PIPELINE
              </span>
            </div>
          </div>

          {/* Center Mockup HUD */}
          <div className="relative z-10 grid grid-cols-2 gap-3 my-auto">
            <div className="p-4 rounded-xl bg-[#070707]/90 border border-white/[0.06] backdrop-blur-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                STUDENT ID VERIFICATION
              </span>
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A4F]" />
                <span>Multi-Tier Auth</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                College ID OCR &amp; Payment Hash Match
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070707]/90 border border-white/[0.06] backdrop-blur-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                ROSTER SYNCHRONIZATION
              </span>
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Dynamic Brackets</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Automated elimination seeding
              </p>
            </div>
          </div>

          {/* Bottom Panel Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-500 border-t border-white/[0.06] pt-4">
            <span>SYS: PROD_v26.4</span>
            <span className="text-[#FF5A4F] uppercase tracking-widest font-semibold">
              EXPLORE CASE STUDY ↗
            </span>
          </div>
        </div>
      );
    }

    if (project.id === 'browser-vision-agent') {
      return (
        <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl bg-[#0B0B0E] border border-white/[0.08] overflow-hidden p-6 sm:p-8 flex flex-col justify-between group-hover:border-white/25 transition-all duration-500 shadow-2xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-tr from-[#8B7CFF]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid-faint opacity-30 pointer-events-none" />

          {/* Top Panel Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white">
                <Cpu className="w-4 h-4 text-[#8B7CFF]" />
              </div>
              <div>
                <span className="text-xs font-mono text-white block uppercase tracking-wider">
                  Client-Side Neural Inference
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  ONNX Runtime Web • WebGPU Shaders
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8B7CFF] animate-ping" />
              <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest">
                ZERO CLOUD LATENCY
              </span>
            </div>
          </div>

          {/* Center Mockup HUD: Vision Shaders Matrix */}
          <div className="relative z-10 p-5 rounded-xl bg-[#070707]/90 border border-white/[0.06] backdrop-blur-sm space-y-3 my-auto">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400">INFERENCE TELEMETRY:</span>
              <span className="text-[#8B7CFF] font-semibold">18.4ms (WebGPU)</span>
            </div>
            <div className="w-full bg-white/[0.06] h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#8B7CFF] to-[#FF5A4F] h-full w-4/5 rounded-full" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] font-mono text-neutral-400">
              <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-center">
                <span className="block text-[9px] text-neutral-500">TENSOR</span>
                <span className="text-white">FP16</span>
              </div>
              <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-center">
                <span className="block text-[9px] text-neutral-500">FPS</span>
                <span className="text-white">34 FPS</span>
              </div>
              <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-center">
                <span className="block text-[9px] text-neutral-500">PRIVACY</span>
                <span className="text-emerald-400">100% LOCAL</span>
              </div>
            </div>
          </div>

          {/* Bottom Panel Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-500 border-t border-white/[0.06] pt-4">
            <span>ENGINE: WEBGPU_ONNX</span>
            <span className="text-[#8B7CFF] uppercase tracking-widest font-semibold">
              EXPLORE CASE STUDY ↗
            </span>
          </div>
        </div>
      );
    }

    // Default / Project 03 (Fake QR Code Detection)
    return (
      <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl bg-[#0B0B0E] border border-white/[0.08] overflow-hidden p-6 sm:p-8 flex flex-col justify-between group-hover:border-white/25 transition-all duration-500 shadow-2xl">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#FF5A4F]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-faint opacity-30 pointer-events-none" />

        {/* Top Panel Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white">
              <ShieldAlert className="w-4 h-4 text-[#FF5A4F]" />
            </div>
            <div>
              <span className="text-xs font-mono text-white block uppercase tracking-wider">
                Quishing Forensics System
              </span>
              <span className="text-[10px] font-mono text-neutral-500">
                OpenCV • Gradient Boosting • Python
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A4F]" />
            <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest">
              TAMPER AUDIT ACTIVE
            </span>
          </div>
        </div>

        {/* Center Mockup HUD: Forensic Matrix */}
        <div className="relative z-10 p-5 rounded-xl bg-[#070707]/90 border border-white/[0.06] backdrop-blur-sm space-y-3 my-auto">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-neutral-400">PHYSICAL TAMPER PROBABILITY:</span>
            <span className="text-[#FF5A4F] font-semibold">97.8% (ANOMALY)</span>
          </div>
          <div className="w-full bg-white/[0.06] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#FF5A4F] h-full w-[94%] rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] font-mono text-neutral-400">
            <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[9px] text-neutral-500 block">EDGE DISPARITY</span>
              <span className="text-white">Sticker Border Identified</span>
            </div>
            <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[9px] text-neutral-500 block">URL ENTROPY</span>
              <span className="text-white">Deceptive Subdomain</span>
            </div>
          </div>
        </div>

        {/* Bottom Panel Bar */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-500 border-t border-white/[0.06] pt-4">
          <span>PIPELINE: OPENCV_ENSEMBLE</span>
          <span className="text-[#FF5A4F] uppercase tracking-widest font-semibold">
            EXPLORE CASE STUDY ↗
          </span>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#070707] text-[#F5F5F5] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#FF5A4F]/5 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] rounded-full bg-[#8B7CFF]/5 blur-[160px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF5A4F]">
                [ 03 // PORTFOLIO ]
              </span>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <h2 className="editorial-statement font-extrabold uppercase tracking-tight text-white">
              SELECTED WORK<span className="text-[#FF5A4F]">.</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-neutral-500 mt-2">
              PROJECTS I&apos;VE BUILT
            </p>
          </div>

          <p className="max-w-md text-sm sm:text-base font-light text-neutral-400">
            Engineered systems designed to turn complex algorithmic and operational requirements into
            clean, dependable software.
          </p>
        </div>

        {/* Large Horizontal Project Panels */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {FEATURED_PROJECTS.map((project, index) => {
            const projectNumber = `0${index + 1} / 03`;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                data-cursor="project"
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer border-t border-white/[0.08] pt-12 sm:pt-16"
              >
                {/* Panel Layout: Two-column Editorial Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  {/* Left Column: Editorial Information */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    {/* Index & Category */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono text-neutral-500 group-hover:text-[#FF5A4F] transition-colors">
                        {projectNumber}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white group-hover:translate-x-1.5 transition-transform duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-neutral-400 font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies List */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded-full border border-white/[0.08] text-neutral-400 group-hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Action Link */}
                    <div className="pt-4 flex items-center gap-6">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white group-hover:text-[#FF5A4F] transition-colors focus:outline-none"
                      >
                        <span>VIEW PROJECT</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-white transition-colors flex items-center gap-1.5"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Visual Case-Study Panel */}
                  <div className="lg:col-span-7">
                    <div className="overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                      {renderVisualPanel(project)}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case-Study Full Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
