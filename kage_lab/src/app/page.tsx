"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface ExperimentCard {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  route: string;
  gradient: string;
  tech: string[];
}

const EXPERIMENTS: ExperimentCard[] = [
  {
    id: "msd-hero",
    title: "MSD Smoke Reveal",
    subtitle: "Mahendra Singh Dhoni 3D Showcase",
    tag: "Three.js / Shader",
    description: "Full-screen hero experience with dynamic WebGL smoke dispersion shader, interactive pointer physics, and blend-mode typography.",
    route: "/hero/msd",
    gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    tech: ["Three.js", "R3F", "Custom GLSL", "Motion"],
  },
  {
    id: "vintage-stamps",
    title: "Interactive Postal Desk",
    subtitle: "Delhi, Chennai, Mumbai, Kerala",
    tag: "Motion Physics",
    description: "Vintage postal desk with tactile stamp physics, card deck shuffling, zoom controls, and a draggable dual-layer optical magnifying loupe.",
    route: "/stamps",
    gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
    tech: ["Motion", "Magnifier Loupe", "Special Elite", "Tactile Cards"],
  },
  {
    id: "trace-drawing",
    title: "Trace Drawing Studio",
    subtitle: "Creative Line Art Tracing",
    tag: "Canvas / Tracing",
    description: "Smooth pressure-sensitive drawing canvas over curated reference images with Bezier interpolation, undo/redo stack, and PNG artwork export.",
    route: "/trace-drawing",
    gradient: "from-blue-500/20 via-indigo-600/10 to-transparent",
    tech: ["HTML5 Canvas", "Bezier Curves", "html2canvas-pro", "Tool Dock"],
  },
  {
    id: "window-shutter",
    title: "Train Window Shutter",
    subtitle: "Kinematic Drag & Ambient Lighting",
    tag: "Interactive Audio / Video",
    description: "Scenic train window experience with draggable mechanical shutter, reactive scene exposure brightness, sound effects, and snap physics.",
    route: "/window-shutter",
    gradient: "from-violet-500/20 via-purple-600/10 to-transparent",
    tech: ["Motion Drag", "Dynamic Brightness", "Web Audio", "WebM Loop"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-amber-500 selection:text-neutral-950">
      {/* Background ambient mesh */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 z-10">
        {/* Header section */}
        <header className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/60 text-xs font-mono text-neutral-300 tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Creative Lab v0.1.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent mb-6"
          >
            Kage Lab
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-neutral-400 leading-relaxed"
          >
            An interactive playground of creative web components, WebGL shaders, tactile physics simulations, and modern animation experiments built with Next.js, Motion, and Three.js.
          </motion.p>
        </header>

        {/* Experiment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EXPERIMENTS.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            >
              <Link
                href={exp.route}
                className="group relative block h-full p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/90 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-800/90 text-neutral-300 border border-neutral-700/60">
                        {exp.tag}
                      </span>
                      <span className="text-xs font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">
                        {exp.route} →
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                      {exp.title}
                    </h2>
                    <h3 className="text-sm font-medium text-neutral-400 mb-4">
                      {exp.subtitle}
                    </h3>

                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/60">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-neutral-950/60 text-neutral-400 border border-neutral-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>Built by Preetimohan Pratihari · Project Components</div>
          <div className="flex items-center gap-6">
            <span>Next.js 16</span>
            <span>React 19</span>
            <span>Motion 13</span>
            <span>Three.js</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
