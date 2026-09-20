'use client';

import React, { useEffect } from 'react';
import { X, Printer, Mail, GraduationCap, Code2, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { PERSONAL_INFO, FEATURED_PROJECTS, TECH_CATEGORIES } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 dark:bg-[#04060C]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0D1220] border border-slate-200 dark:border-white/10 shadow-2xl p-6 sm:p-10 text-left space-y-8 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/[0.08] print:hidden">
          <span className="text-xs font-mono text-[#0284C7] dark:text-[#00D9FF] flex items-center gap-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00D9FF]" />
            CURRICULUM VITAE PREVIEW
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-[#161D31] dark:hover:bg-[#1E263D] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#00D9FF]" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="space-y-8 print:space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.08] pb-6">
            <div>
              <h1 id="resume-modal-title" className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base font-semibold text-[#0284C7] dark:text-[#00D9FF] mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl mt-2 leading-relaxed">
                {PERSONAL_INFO.shortBio}
              </p>
            </div>

            <div className="flex flex-col gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 sm:text-right">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#0284C7] dark:hover:text-[#00D9FF] transition-colors flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#00D9FF]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#0284C7] dark:hover:text-[#00D9FF] transition-colors flex sm:justify-end items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>github.com/ubaidq01</span>
              </a>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#0284C7] dark:hover:text-[#00D9FF] transition-colors flex sm:justify-end items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#00D9FF]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#0284C7] dark:text-[#00D9FF] flex items-center gap-2 font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#121829] border border-slate-200/80 dark:border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Bachelor of Technology in Computer Science &amp; Engineering (Data Science)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Specialization: Data Science, Machine Learning Foundations, Statistical Analysis, Data Structures &amp; Algorithms, Database Systems, Computer Networks
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500 self-start sm:self-auto">Ongoing</span>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#0284C7] dark:text-[#00D9FF] flex items-center gap-2 font-semibold">
              <Code2 className="w-4 h-4" />
              <span>Key Projects &amp; Implementations</span>
            </h2>
            <div className="space-y-4">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-50 dark:bg-[#121829] border border-slate-200/80 dark:border-white/[0.04] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{proj.title}</span>
                      <span className="text-xs font-mono text-slate-500 font-normal">| {proj.category}</span>
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      {proj.githubUrl && (
                        <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-[#0284C7] dark:hover:text-[#00D9FF]">
                          GitHub
                        </a>
                      )}
                      {proj.liveUrl && (
                        <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#0284C7] dark:text-[#00D9FF] hover:underline font-medium">
                          Live Site
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    {proj.description}
                  </p>

                  <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    {proj.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-200 dark:bg-[#1A2238] text-slate-700 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#0284C7] dark:text-[#00D9FF] flex items-center gap-2 font-semibold">
              <Terminal className="w-4 h-4" />
              <span>Technical Skills Breakdown</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TECH_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3 rounded-xl bg-slate-50 dark:bg-[#121829] border border-slate-200/80 dark:border-white/[0.04]">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block mb-1">{cat.title}:</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Close */}
        <div className="pt-4 border-t border-slate-100 dark:border-white/[0.08] flex items-center justify-between print:hidden">
          <span className="text-xs text-slate-500 font-mono">Ubaid Quazi — Portfolio 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
