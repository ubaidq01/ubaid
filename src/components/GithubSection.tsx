'use client';

import React from 'react';
import { ExternalLink, GitBranch, Terminal } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { PERSONAL_INFO, FEATURED_PROJECTS } from '@/data/portfolioData';

export default function GithubSection() {
  const languageDistribution = [
    { name: 'Python', percentage: '38%', color: '#0284C7' },
    { name: 'TypeScript', percentage: '32%', color: '#2563EB' },
    { name: 'JavaScript', percentage: '15%', color: '#F59E0B' },
    { name: 'C++', percentage: '10%', color: '#8B5CF6' },
    { name: 'Java / SQL', percentage: '5%', color: '#EC4899' },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-[#0A0E1A]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/90 dark:bg-[#101522]/90 border border-slate-200/90 dark:border-white/[0.08] p-8 sm:p-12 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 dark:bg-[#00D9FF]/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: GitHub Overview & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-[#0C101D] border border-sky-200 dark:border-white/10 text-xs font-mono text-[#0284C7] dark:text-[#00D9FF] font-semibold">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB ECOSYSTEM</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Building in <span className="text-gradient">Public</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  I believe in transparent engineering, open experimentation, and publishing code for the developer community. Explore my latest commits, repositories, and experiments on GitHub.
                </p>
              </div>

              {/* Languages Distribution Bar */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>Primary Codebase Distribution</span>
                  <span className="text-[#0284C7] dark:text-[#00D9FF] font-semibold">Multi-Disciplinary</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-[#161D31] flex overflow-hidden">
                  {languageDistribution.map((lang) => (
                    <div
                      key={lang.name}
                      style={{ width: lang.percentage, backgroundColor: lang.color }}
                      title={`${lang.name}: ${lang.percentage}`}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-1 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  {languageDistribution.map((lang) => (
                    <span key={lang.name} className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      {lang.name} <span className="text-slate-400 dark:text-slate-500 font-normal">{lang.percentage}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-4">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-white dark:text-[#080B14] bg-gradient-to-r from-[#0284C7] to-[#2563EB] dark:from-[#00D9FF] dark:to-[#38BDF8] shadow-lg shadow-sky-500/25 dark:shadow-[#00D9FF]/20 transition-all duration-300 hover:brightness-110 active:scale-95 group"
                >
                  <GithubIcon className="w-4 h-4 text-white dark:text-[#080B14]" />
                  <span>Visit GitHub Profile</span>
                  <ExternalLink className="w-4 h-4 text-white dark:text-[#080B14] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Profile Card & Pinned Repos Preview */}
            <div className="lg:col-span-5 space-y-4">
              {/* Profile Card */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0C101D] border border-slate-200/90 dark:border-white/[0.08] flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0284C7] to-[#2563EB] dark:from-[#00D9FF] dark:to-[#2563EB] p-[2px]">
                    <div className="w-full h-full bg-white dark:bg-[#080B14] rounded-[10px] flex items-center justify-center">
                      <Terminal className="w-6 h-6 text-[#0284C7] dark:text-[#00D9FF]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">ubaidq01</h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">github.com/ubaidq01</p>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-sky-100 hover:bg-sky-200 dark:bg-[#161D31] dark:hover:bg-[#1E263D] text-[#0284C7] dark:text-[#00D9FF] text-xs font-mono font-semibold transition-colors"
                >
                  Follow →
                </a>
              </div>

              {/* Pinned Repos Preview */}
              <div className="space-y-3">
                {FEATURED_PROJECTS.slice(0, 2).map((proj) => (
                  <a
                    key={proj.id}
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-slate-50/90 dark:bg-[#0C101D] border border-slate-200/80 dark:border-white/[0.06] hover:border-[#0284C7]/40 dark:hover:border-[#00D9FF]/30 transition-all shadow-xs group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-800 dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-[#00D9FF] transition-colors">
                        <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                        <span>ubaidq01 / {proj.id}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/60 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 font-medium">
                        Public
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {proj.tagline}
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-[11px] font-mono text-slate-500">
                      <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400 font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00D9FF]" />
                        {proj.technologies[0]}
                      </span>
                      <span>Updated 2026</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
