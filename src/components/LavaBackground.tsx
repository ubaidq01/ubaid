'use client';

import React, { useEffect, useRef } from 'react';

interface Ember {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  hue: number;
}

interface MagmaCell {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  pulseSpeed: number;
  pulsePhase: number;
  driftSpeedX: number;
  driftSpeedY: number;
  driftRadiusX: number;
  driftRadiusY: number;
  baseX: number;
  baseY: number;
  colorCenter: string;
  colorMid: string;
  colorEdge: string;
}

export default function LavaBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initMagmaCells();
    };

    window.addEventListener('resize', handleResize);

    // Initialize Boiling Magma Convection Hotspots
    let magmaCells: MagmaCell[] = [];
    const initMagmaCells = () => {
      magmaCells = [
        // Primary Top-Right Boiling Core
        {
          baseX: width * 0.82,
          baseY: height * 0.22,
          x: width * 0.82,
          y: height * 0.22,
          baseRadius: Math.max(width * 0.35, 340),
          radius: Math.max(width * 0.35, 340),
          pulseSpeed: 0.0018,
          pulsePhase: 0,
          driftSpeedX: 0.0008,
          driftSpeedY: 0.0012,
          driftRadiusX: 60,
          driftRadiusY: 45,
          colorCenter: 'rgba(255, 120, 40, 0.22)',
          colorMid: 'rgba(230, 45, 20, 0.12)',
          colorEdge: 'rgba(90, 10, 15, 0)',
        },
        // Center-Left Simmering Chamber
        {
          baseX: width * 0.25,
          baseY: height * 0.55,
          x: width * 0.25,
          y: height * 0.55,
          baseRadius: Math.max(width * 0.32, 300),
          radius: Math.max(width * 0.32, 300),
          pulseSpeed: 0.0022,
          pulsePhase: Math.PI * 0.7,
          driftSpeedX: 0.0011,
          driftSpeedY: 0.0009,
          driftRadiusX: 50,
          driftRadiusY: 55,
          colorCenter: 'rgba(255, 90, 30, 0.18)',
          colorMid: 'rgba(190, 30, 15, 0.09)',
          colorEdge: 'rgba(60, 5, 15, 0)',
        },
        // Deep Bottom Boiling Well
        {
          baseX: width * 0.65,
          baseY: height * 0.88,
          x: width * 0.65,
          y: height * 0.88,
          baseRadius: Math.max(width * 0.38, 380),
          radius: Math.max(width * 0.38, 380),
          pulseSpeed: 0.0015,
          pulsePhase: Math.PI * 1.4,
          driftSpeedX: 0.0009,
          driftSpeedY: 0.0014,
          driftRadiusX: 70,
          driftRadiusY: 35,
          colorCenter: 'rgba(255, 140, 50, 0.2)',
          colorMid: 'rgba(210, 40, 10, 0.11)',
          colorEdge: 'rgba(80, 10, 10, 0)',
        },
        // Subtle Purple Ambient Thermal Counterpart (Deep Crust)
        {
          baseX: width * 0.1,
          baseY: height * 0.15,
          x: width * 0.1,
          y: height * 0.15,
          baseRadius: Math.max(width * 0.28, 260),
          radius: Math.max(width * 0.28, 260),
          pulseSpeed: 0.0025,
          pulsePhase: Math.PI * 0.3,
          driftSpeedX: 0.0012,
          driftSpeedY: 0.001,
          driftRadiusX: 40,
          driftRadiusY: 40,
          colorCenter: 'rgba(139, 124, 255, 0.08)',
          colorMid: 'rgba(90, 40, 140, 0.04)',
          colorEdge: 'rgba(20, 5, 40, 0)',
        },
      ];
    };

    initMagmaCells();

    // Floating Rising Volcanic Embers
    const emberCount = 55;
    const embers: Ember[] = Array.from({ length: emberCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.6 + 0.25,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.7 + 0.2,
      maxOpacity: Math.random() * 0.75 + 0.25,
      hue: Math.random() > 0.3 ? Math.random() * 25 + 10 : 45, // 10-35 orange-red, 45 gold
    }));

    let time = 0;

    const render = () => {
      time += 1;

      // 1. Dark Volcanic Obsidian Base
      ctx.fillStyle = '#070707';
      ctx.fillRect(0, 0, width, height);

      // 2. Render Boiling Magma Hotspots with Additive Composite
      ctx.globalCompositeOperation = 'screen';

      for (let i = 0; i < magmaCells.length; i++) {
        const cell = magmaCells[i];

        // Harmonic Boiling Wobble
        const pulse = Math.sin(time * cell.pulseSpeed + cell.pulsePhase);
        const pulseSecondary = Math.cos(time * cell.pulseSpeed * 1.6 + cell.pulsePhase);
        cell.radius = cell.baseRadius * (1 + pulse * 0.12 + pulseSecondary * 0.06);

        cell.x = cell.baseX + Math.sin(time * cell.driftSpeedX) * cell.driftRadiusX;
        cell.y = cell.baseY + Math.cos(time * cell.driftSpeedY) * cell.driftRadiusY;

        const grad = ctx.createRadialGradient(
          cell.x,
          cell.y,
          0,
          cell.x,
          cell.y,
          Math.max(10, cell.radius)
        );
        grad.addColorStop(0, cell.colorCenter);
        grad.addColorStop(0.45, cell.colorMid);
        grad.addColorStop(1, cell.colorEdge);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cell.x, cell.y, Math.max(10, cell.radius), 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Render Rising Volcanic Embers / Heat Sparks
      for (let i = 0; i < embers.length; i++) {
        const ember = embers[i];
        ember.y -= ember.speedY;
        ember.x += ember.speedX + Math.sin((time + i * 20) * 0.02) * 0.3;

        // Reset ember when it ascends beyond top edge
        if (ember.y < -10) {
          ember.y = height + 10;
          ember.x = Math.random() * width;
          ember.opacity = 0;
        }

        // Fade in as it enters bottom, fade out near top
        const screenProgress = ember.y / height;
        const currentAlpha = Math.sin(screenProgress * Math.PI) * ember.maxOpacity;

        ctx.fillStyle = `hsla(${ember.hue}, 100%, 65%, ${Math.max(0, currentAlpha)})`;
        ctx.shadowColor = `hsla(${ember.hue}, 100%, 55%, 0.6)`;
        ctx.shadowBlur = 6;

        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-30 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* Dark Obsidian Film Grain Texture on top of boiling lava */}
      <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />
      {/* Faint Structural Coordinate Grid */}
      <div className="absolute inset-0 bg-grid-faint opacity-30 pointer-events-none" />
    </div>
  );
}
