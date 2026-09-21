'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Gamepad2, Trophy, CheckCircle2, ExternalLink } from 'lucide-react';
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
            <span className="text-[#FF5A4F] group-hover:text-white uppercase tracking-widest font-semibold flex items-center gap-1.5 transition-colors">
              <span>LAUNCH LIVE APP</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      );
    }

    if (project.id === 'fixit') {
      return (
        <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl bg-[#0B0B0E] border border-white/[0.08] overflow-hidden p-6 sm:p-8 flex flex-col justify-between group-hover:border-white/25 transition-all duration-500 shadow-2xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-tr from-[#FF7A00]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid-faint opacity-30 pointer-events-none" />

          {/* Top Panel Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white">
                <Wrench className="w-4 h-4 text-[#FF7A00]" />
              </div>
              <div>
                <span className="text-xs font-mono text-white block uppercase tracking-wider">
                  Campus Issue &amp; Maintenance Engine
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  Next.js • Node.js • PostgreSQL • REST
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest">
                TRIAGE QUEUE ACTIVE
              </span>
            </div>
          </div>

          {/* Center Mockup HUD */}
          <div className="relative z-10 grid grid-cols-2 gap-3 my-auto">
            <div className="p-4 rounded-xl bg-[#070707]/90 border border-white/[0.06] backdrop-blur-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                GRIEVANCE INGESTION
              </span>
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" />
                <span>Geo-Tagged Tickets</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Severity triage &amp; automated dispatch routing
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070707]/90 border border-white/[0.06] backdrop-blur-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                RESOLUTION PIPELINE
              </span>
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Audit Trail</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Submitted → Triaged → In Progress → Resolved
              </p>
            </div>
          </div>

          {/* Bottom Panel Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-500 border-t border-white/[0.06] pt-4">
            <span>PIPELINE: FIXIT_DISPATCH</span>
            <span className="text-[#FF7A00] uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <span>EXPLORE CASE STUDY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      );
    }

    // Default / Project 03: Blackout (Multiplayer Social Deduction Game)
    return (
      <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl bg-[#0B0B0E] border border-white/[0.08] overflow-hidden p-6 sm:p-8 flex flex-col justify-between group-hover:border-white/25 transition-all duration-500 shadow-2xl">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#8B7CFF]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-faint opacity-30 pointer-events-none" />

        {/* Top Panel Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white">
              <Gamepad2 className="w-4 h-4 text-[#8B7CFF]" />
            </div>
            <div>
              <span className="text-xs font-mono text-white block uppercase tracking-wider">
                Multiplayer Social Deduction Game
              </span>
              <span className="text-[10px] font-mono text-neutral-500">
                Godot Engine 4 • GDScript • Networking
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest">
              IN ACTIVE DEVELOPMENT
            </span>
          </div>
        </div>

        {/* Center Mockup HUD */}
        <div className="relative z-10 grid grid-cols-2 gap-3 my-auto">
          <div className="p-4 rounded-xl bg-[#070707]/90 border border-white/[0.06] backdrop-blur-sm">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
              ASTERION RESEARCH FACILITY
            </span>
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#8B7CFF]" />
              <span>4-Phase Match Flow</span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-1">
              Normal Ops → Remote Blackout → Meetings → Meltdown
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#070707]/90 border border-white/[0.06] backdrop-blur-sm">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
              TEAM CO-OP ARCHITECTURE
            </span>
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Member 4 Programmer</span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-1">
              Interactive station inputs &amp; mini-game mechanics
            </p>
          </div>
        </div>

        {/* Bottom Panel Bar */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-500 border-t border-white/[0.06] pt-4">
          <span>ENGINE: GODOT_4_GDSCRIPT</span>
          <span className="text-[#8B7CFF] uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <span>GITHUB REPO &amp; CASE STUDY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="relative w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 bg-[#070707] text-[#F5F5F5] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#FF5A4F]/5 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] rounded-full bg-[#8B7CFF]/5 blur-[160px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#FF5A4F] font-semibold">
                [ 03 // PORTFOLIO ]
              </span>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <h2 className="editorial-statement font-extrabold uppercase tracking-tight text-white">
              SELECTED WORK<span className="text-[#FF5A4F]">.</span>
            </h2>
            <p className="text-sm sm:text-base font-mono tracking-widest uppercase text-neutral-400 mt-2 font-semibold">
              PROJECTS I&apos;VE BUILT
            </p>
          </div>

          <p className="max-w-lg text-base sm:text-lg font-light text-neutral-300 leading-relaxed">
            Engineered systems designed to turn complex algorithmic and operational requirements into
            clean, dependable software.
          </p>
        </div>

        {/* Large Horizontal Project Panels */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-28">
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
                onClick={() => {
                  if (project.liveUrl) {
                    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                  } else {
                    setSelectedProject(project);
                  }
                }}
                className="group relative cursor-pointer border-t border-white/[0.08] pt-14 sm:pt-20"
              >
                {/* Panel Layout: Two-column Editorial Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  {/* Left Column: Editorial Information */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    {/* Index & Category */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base font-mono text-neutral-400 group-hover:text-[#FF5A4F] transition-colors font-semibold">
                        {projectNumber}
                      </span>
                      <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-300 font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white group-hover:translate-x-1.5 transition-transform duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base sm:text-xl text-neutral-300 font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies List */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-full border border-white/10 text-neutral-300 group-hover:border-white/25 transition-colors bg-white/[0.02]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Action Links */}
                    <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5A4F] text-black text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(255,90,79,0.35)]"
                        >
                          <span>LAUNCH LIVE APP</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : null}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-neutral-200 hover:text-[#FF5A4F] transition-colors focus:outline-none"
                      >
                        <span>CASE STUDY</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
                        >
                          <GithubIcon className="w-4 h-4" />
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
