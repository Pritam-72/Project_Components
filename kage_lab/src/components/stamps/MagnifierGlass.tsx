"use client";
import React from "react";
import { motion, useMotionValue } from "motion/react";

interface MagnifierProps {
  zoomLevel?: number;
}

export default function MagnifierGlass({ zoomLevel = 2 }: MagnifierProps) {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  return (
    <motion.div
      drag
      dragMomentum={false}
      style={{ x, y }}
      className="fixed z-50 w-36 h-36 rounded-full border-4 border-amber-800/80 shadow-2xl backdrop-blur-[2px] cursor-grab active:cursor-grabbing pointer-events-auto"
    >
      <div className="absolute inset-0 rounded-full bg-amber-50/10 pointer-events-none border border-white/40 shadow-inner" />
    </motion.div>
  );
}
