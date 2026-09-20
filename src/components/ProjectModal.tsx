'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D0D0F] border border-white/10 shadow-2xl p-6 sm:p-10 text-left space-y-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full border border-white/10 bg-white/[0.04] text-neutral-400 hover:text-white hover:border-white/30 transition-colors focus:outline-none"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Label & Category */}
          <div className="space-y-3 pr-12">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#FF5A4F] font-semibold">
                CASE STUDY
              </span>
              <div className="h-px w-8 bg-white/20" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-300">
                {project.category}
              </span>
            </div>

            <h2
              id="project-modal-title"
              className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white"
            >
              {project.title}
            </h2>
            <p className="text-base sm:text-lg font-light text-neutral-200">
              {project.subtitle}
            </p>
          </div>

          {/* Technologies Chips */}
          <div className="flex flex-wrap gap-2.5 border-y border-white/[0.08] py-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Core Overview & Highlights */}
          <div className="space-y-4">
            <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-400 font-bold">
              ARCHITECTURE &amp; OVERVIEW
            </h3>
            <p className="text-base sm:text-lg font-light text-neutral-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#FF5A4F] font-bold">
                THE CHALLENGE
              </span>
              <p className="text-sm sm:text-base font-light text-neutral-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#8B7CFF] font-bold">
                THE ARCHITECTURE SOLUTION
              </span>
              <p className="text-sm sm:text-base font-light text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-400 font-bold">
              KEY IMPLEMENTATION HIGHLIGHTS
            </h3>
            <ul className="space-y-2.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base font-light text-neutral-300">
                  <span className="h-2 w-2 rounded-full bg-[#FF5A4F] mt-2 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
            <div className="flex items-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-200 hover:text-white hover:border-white/40 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5A4F] text-black text-xs sm:text-sm font-mono font-black uppercase tracking-wider hover:bg-white transition-colors"
                >
                  <span>Launch Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              [ ESC TO CLOSE ]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
