'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Copy, 
  ArrowUpRight, 
  MapPin, 
  Mail, 
  Sparkles, 
  User, 
  MessageSquare,
  Radio
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Message must be at least 8 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending message with celebratory confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#FF5A4F', '#FF8800', '#8B7CFF', '#F5F5F5'],
      });

      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const headingWords = ["LET'S", "CREATE", "SOMETHING", "EXTRAORDINARY."];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-center py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 bg-[#070707] text-[#F5F5F5] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Warm Accent Radiance */}
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[650px] rounded-full bg-[#FF5A4F]/10 blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] rounded-full bg-[#8B7CFF]/8 blur-[160px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1400px] mx-auto">
        {/* Top small label */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#FF5A4F] font-semibold">
            [ 06 // GET IN TOUCH ]
          </span>
          <div className="h-px w-14 bg-white/15" />
        </div>

        {/* Huge Editorial Heading */}
        <div className="mb-10 sm:mb-16 max-w-5xl">
          <h2 className="editorial-statement font-extrabold uppercase tracking-tight text-white">
            {headingWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`inline-block mr-4 ${
                  word === 'EXTRAORDINARY.' ? 'text-lava-glow font-light' : ''
                }`}
              >
                {word === 'EXTRAORDINARY.' ? (
                  <>
                    EXTRAORDINARY<span className="text-[#FF5A4F]">.</span>
                  </>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl font-light text-neutral-300 mt-6 max-w-3xl leading-relaxed"
          >
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s build something useful
            together.
          </motion.p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 border-t border-white/[0.08]">
          {/* LEFT COLUMN: Contact Details & Socials (Elevated & Highly Highlighted) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div className="space-y-8">
              {/* Direct Email with Elevated Card Interaction */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] via-[#0E0E12] to-transparent border border-white/10 hover:border-[#FF5A4F]/40 transition-all duration-300 group shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#FF5A4F] flex items-center gap-2 font-bold">
                    <Mail className="w-4 h-4" />
                    <span>DIRECT INQUIRIES</span>
                  </span>
                  <span className="text-xs font-mono text-neutral-400 uppercase font-semibold">
                    PRIMARY INBOX
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-2xl sm:text-3xl md:text-4xl font-mono font-black tracking-tight text-white group-hover:text-[#FF5A4F] transition-colors break-all sm:break-normal"
                  >
                    {PERSONAL_INFO.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="px-4 py-3 rounded-xl border border-white/15 bg-white/[0.06] hover:bg-[#FF5A4F] hover:text-black hover:border-[#FF5A4F] text-neutral-200 transition-all duration-200 cursor-pointer flex items-center gap-2 text-xs sm:text-sm font-mono font-bold"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span className="text-emerald-300 font-bold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* LOCATION & AVAILABILITY - PROMINENTLY HIGHLIGHTED CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Location Highlight Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FF5A4F]/10 via-[#0D0D10] to-[#070707] border border-[#FF5A4F]/25 hover:border-[#FF5A4F]/50 transition-all duration-300 shadow-md">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FF5A4F] font-bold mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>LOCATION / BASE</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {PERSONAL_INFO.location}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-neutral-300 mt-2">
                    IST (UTC+5:30) • Remote &amp; Relocation Open
                  </div>
                </div>

                {/* 2. Availability Highlight Card (Glowing Emerald Beacon) */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-[#0D0D10] to-[#070707] border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 shadow-[0_0_25px_-5px_rgba(16,185,129,0.18)]">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 font-bold mb-2">
                    <Radio className="w-4 h-4 animate-pulse" />
                    <span>AVAILABILITY STATUS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 shadow-[0_0_10px_#10B981]"></span>
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                      AVAILABLE
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-emerald-300/90 mt-2 font-medium">
                    Open to opportunities &amp; projects
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links as High-End Interactive Cards */}
            <div className="space-y-3 pt-4 border-t border-white/[0.08]">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-neutral-300 block mb-3 font-semibold">
                VERIFIED SOCIALS &amp; PROFILES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 text-neutral-300 hover:text-white transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-white/[0.05] group-hover:bg-[#FF5A4F]/20 transition-colors">
                      <GithubIcon className="w-5 h-5 text-white group-hover:text-[#FF5A4F] transition-colors" />
                    </div>
                    <div>
                      <span className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider block">
                        GitHub
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-neutral-400 group-hover:text-neutral-200">
                        @ubaidq01
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-[#FF5A4F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 text-neutral-300 hover:text-white transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-white/[0.05] group-hover:bg-[#0077B5]/20 transition-colors">
                      <LinkedinIcon className="w-5 h-5 text-white group-hover:text-[#0A66C2] transition-colors" />
                    </div>
                    <div>
                      <span className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider block">
                        LinkedIn
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-neutral-400 group-hover:text-neutral-200">
                        Ubaid Quazi
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-[#FF5A4F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: High-End Attractive Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#0E0E12] via-[#09090C] to-[#070707] border border-white/15 shadow-2xl overflow-hidden">
              {/* Subtle volcanic ambient glow behind form */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5A4F]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B7CFF]/8 rounded-full blur-3xl pointer-events-none" />

              {/* Form Top Title Bar */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-6 mb-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-2.5">
                    <span>SEND A MESSAGE</span>
                    <Sparkles className="w-5 h-5 text-[#FF5A4F]" />
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-neutral-300 mt-2">
                    Direct communication line • Instant inbox delivery
                  </p>
                </div>
                <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-neutral-300 font-semibold">
                  FAST RESPONSE
                </span>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4 relative z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                    MESSAGE TRANSMITTED
                  </h3>
                  <p className="text-base font-light text-neutral-300 max-w-sm mx-auto">
                    Thank you for getting in touch, <span className="text-white font-medium">Ubaid</span> has received your note and will get back to you promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-200 mb-2.5 font-bold"
                    >
                      <User className="w-4 h-4 text-[#FF5A4F]" />
                      <span>YOUR NAME *</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Alex Mercer"
                      className={`w-full px-5 py-4 sm:py-4.5 rounded-xl bg-[#070707] border ${
                        errors.name ? 'border-red-500' : 'border-white/15'
                      } text-white placeholder-neutral-500 text-base sm:text-lg focus:outline-none focus:border-[#FF5A4F] focus:ring-1 focus:ring-[#FF5A4F] transition-all shadow-inner`}
                    />
                    {errors.name && (
                      <span className="text-xs sm:text-sm font-mono text-red-400 mt-1.5 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-200 mb-2.5 font-bold"
                    >
                      <Mail className="w-4 h-4 text-[#FF5A4F]" />
                      <span>YOUR EMAIL *</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-5 py-4 sm:py-4.5 rounded-xl bg-[#070707] border ${
                        errors.email ? 'border-red-500' : 'border-white/15'
                      } text-white placeholder-neutral-500 text-base sm:text-lg focus:outline-none focus:border-[#FF5A4F] focus:ring-1 focus:ring-[#FF5A4F] transition-all shadow-inner`}
                    />
                    {errors.email && (
                      <span className="text-xs sm:text-sm font-mono text-red-400 mt-1.5 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="message"
                      className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-200 mb-2.5 font-bold"
                    >
                      <MessageSquare className="w-4 h-4 text-[#FF5A4F]" />
                      <span>YOUR MESSAGE *</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Tell me about your project, vision, ideas, or questions..."
                      className={`w-full px-5 py-4 sm:py-4.5 rounded-xl bg-[#070707] border ${
                        errors.message ? 'border-red-500' : 'border-white/15'
                      } text-white placeholder-neutral-500 text-base sm:text-lg focus:outline-none focus:border-[#FF5A4F] focus:ring-1 focus:ring-[#FF5A4F] transition-all resize-none shadow-inner`}
                    />
                    {errors.message && (
                      <span className="text-xs sm:text-sm font-mono text-red-400 mt-1.5 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button (Radiant Volcanic Accent) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 sm:py-5 px-6 sm:px-8 rounded-xl bg-gradient-to-r from-white via-neutral-100 to-[#FF5A4F]/20 hover:from-[#FF5A4F] hover:via-[#FF7A00] hover:to-[#FF5A4F] text-[#070707] hover:text-white font-mono font-black text-sm sm:text-base uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A4F] disabled:opacity-50 cursor-pointer shadow-lg hover:shadow-[0_0_35px_rgba(255,90,79,0.5)] transform hover:-translate-y-0.5"
                  >
                    <span>{isSubmitting ? 'TRANSMITTING MESSAGE...' : 'SEND MESSAGE'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
