'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070707] text-[#F5F5F5] border-t border-white/[0.06] py-14 sm:py-20 px-6 sm:px-10 lg:px-16">
      <div className="w-full max-w-[1400px] mx-auto space-y-12">
        {/* Main 3-column studio row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: UQ. */}
          <div>
            <Link
              href="#hero"
              className="text-2xl font-black tracking-tighter text-white hover:text-[#FF5A4F] transition-colors"
            >
              UQ<span className="text-[#FF5A4F]">.</span>
            </Link>
          </div>

          {/* Center: BUILDING DIGITAL EXPERIENCES. */}
          <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-neutral-400">
            BUILDING DIGITAL EXPERIENCES.
          </div>

          {/* Right: GitHub & LinkedIn */}
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom row: Copyright & Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/[0.04] pt-8 text-xs font-mono text-neutral-600 gap-4">
          <div>© 2026 Ubaid Quazi. All rights reserved.</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-500 hover:text-[#FF5A4F] transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
