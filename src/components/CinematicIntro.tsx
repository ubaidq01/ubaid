'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicIntroProps {
  onComplete?: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Elegant, deliberate pacing giving proper time for introduction (~2.8s)
    const totalDuration = 2700;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(1, elapsed / totalDuration);
      // Ease-out curve for smooth deceleration towards 100%
      const easedProgress = Math.floor((1 - Math.pow(1 - progressRatio, 2.2)) * 100);
      setCounter(easedProgress);

      if (elapsed >= totalDuration) {
        clearInterval(timer);
        setTimeout(() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }, 300);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  const nameLetters = 'UBAID QUAZI'.split('');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: 'blur(16px)',
            transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070707] select-none cursor-default overflow-hidden"
          onClick={() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }}
        >
          {/* Deep Molten Lava Breathing Core Glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.3 }}
            animate={{ scale: [0.8, 1.15, 0.95], opacity: [0.35, 0.65, 0.45] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] rounded-full bg-gradient-to-r from-[#FF5A4F]/25 via-[#FF7A00]/20 to-transparent blur-[140px] pointer-events-none"
          />

          {/* Faint Background Grid Texture & Noise */}
          <div className="absolute inset-0 bg-grid-faint opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex items-center gap-3 mb-6 sm:mb-8"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5A4F] animate-ping" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-neutral-200 font-semibold">
                PORTFOLIO SYSTEM // 2026
              </span>
            </motion.div>

            {/* Giant Name Reveal: UBAID QUAZI */}
            <div className="overflow-hidden my-3 sm:my-6 flex items-center justify-center flex-wrap">
              {nameLetters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 55, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.9,
                    delay: 0.25 + index * 0.055,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight uppercase ${
                    char === ' ' ? 'w-5 sm:w-9' : ''
                  } ${
                    index < 5
                      ? 'text-white'
                      : 'text-lava-glow font-extrabold'
                  } drop-shadow-[0_0_35px_rgba(255,90,79,0.4)]`}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Molten Lava Energy Horizon Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="w-64 sm:w-96 h-[2.5px] bg-gradient-to-r from-transparent via-[#FF5A4F] to-transparent my-4 sm:my-6 origin-center"
            />

            {/* Subtitle with Proper Time for Reading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-2.5"
            >
              <p className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-neutral-200 font-bold">
                FULL-STACK DEVELOPER &amp; AI ENTHUSIAST
              </p>
              <p className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider">
                EXPLORING INTELLIGENT EXPERIENCES &amp; ON-DEVICE PERCEPTION
              </p>
            </motion.div>

            {/* Counter & System Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="mt-10 sm:mt-14 flex items-center gap-4 text-xs sm:text-sm font-mono text-neutral-300 font-semibold"
            >
              <span>INITIALIZING SYSTEM</span>
              <span className="text-[#FF5A4F] font-black tracking-wider text-sm sm:text-base">{counter}%</span>
            </motion.div>
          </div>

          {/* Quick Skip hint */}
          <div className="absolute bottom-6 text-[10px] font-mono uppercase tracking-widest text-neutral-500 hover:text-neutral-300 transition-colors">
            [ CLICK ANYWHERE TO SKIP ]
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
