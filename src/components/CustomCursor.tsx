'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'project'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    // Detected desktop
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsTouchDevice(false);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      if (projectEl) {
        setCursorType('project');
        return;
      }

      const interactiveEl = target.closest('a, button, [data-cursor="pointer"], input, textarea');
      if (interactiveEl) {
        setCursorType('pointer');
        return;
      }

      setCursorType('default');
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Small center dot */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5A4F]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: cursorType === 'project' ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />

      {/* Outer reactive ring / pill */}
      <motion.div
        className="fixed top-0 left-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 backdrop-blur-[2px] transition-colors"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: cursorType === 'project' ? 84 : cursorType === 'pointer' ? 48 : 32,
          height: cursorType === 'project' ? 84 : cursorType === 'pointer' ? 48 : 32,
          borderColor:
            cursorType === 'project'
              ? 'rgba(255, 90, 79, 0.8)'
              : cursorType === 'pointer'
              ? 'rgba(255, 255, 255, 0.6)'
              : 'rgba(255, 255, 255, 0.25)',
          backgroundColor:
            cursorType === 'project'
              ? 'rgba(7, 7, 7, 0.85)'
              : cursorType === 'pointer'
              ? 'rgba(255, 255, 255, 0.05)'
              : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      >
        {cursorType === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold tracking-widest text-[#FF5A4F]"
          >
            VIEW →
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
