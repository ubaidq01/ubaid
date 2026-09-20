'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '#projects', number: '01' },
    { label: 'About', href: '#about', number: '02' },
    { label: 'Experience', href: '#experience', number: '03' },
    { label: 'Contact', href: '#contact', number: '04' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070707]/90 backdrop-blur-md border-b border-white/[0.08] py-3 sm:py-4'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Top Left: Bigger Brand (UBAID QUAZI / UQ.) */}
          <Link
            href="#hero"
            className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF5A4F]"
            aria-label="Ubaid Quazi - Home"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-black tracking-tighter text-white transition-colors group-hover:text-[#FF5A4F]">
                UQ<span className="text-[#FF5A4F]">.</span>
              </span>
              <span className="hidden sm:inline-block text-base sm:text-lg font-bold tracking-tight text-neutral-200 group-hover:text-white transition-colors">
                Ubaid Quazi
              </span>
            </div>

            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-mono tracking-widest text-neutral-300 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A4F] animate-pulse" />
              <span>CS (Data Science) &amp; AI</span>
            </span>
          </Link>

          {/* Top Right: Bigger & Clearer Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-9 lg:gap-11" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm sm:text-base font-semibold tracking-wider uppercase text-neutral-300 hover:text-white transition-colors duration-200 group focus:outline-none"
              >
                <span>{link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF5A4F] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Subtle vertical separator */}
            <div className="h-4 w-px bg-white/20" />

            {/* GitHub icon link */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors p-1 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            {/* Contact CTA Button (Larger & More Prominent) */}
            <Link
              href="#contact"
              className="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 bg-white/[0.05] text-neutral-200 hover:text-[#070707] hover:bg-white hover:border-white transition-all duration-300 flex items-center gap-2 shadow-sm"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5A4F] group-hover:text-black" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button (Larger & Touch-Friendly) */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-white/15 bg-white/[0.04] text-neutral-200 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Minimal Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#070707] px-8 pt-32 pb-12 md:hidden"
          >
            {/* Background ambient glow */}
            <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#FF5A4F]/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#8B7CFF]/10 blur-[100px] pointer-events-none" />

            {/* Links list */}
            <div className="flex flex-col space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF5A4F]">
                Navigation Menu
              </span>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="group flex items-baseline justify-between border-b border-white/[0.08] pb-4"
                >
                  <span className="text-4xl sm:text-5xl font-light tracking-tight text-neutral-200 group-hover:text-white group-hover:translate-x-2 transition-all">
                    {link.label}
                  </span>
                  <span className="text-sm font-mono text-neutral-500 group-hover:text-[#FF5A4F] transition-colors">
                    {link.number}
                  </span>
                </Link>
              ))}
            </div>

            {/* Bottom contact & socials */}
            <div className="space-y-6 border-t border-white/[0.08] pt-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                  Direct Inquiries
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base text-neutral-200 hover:text-[#FF5A4F] transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-8">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
