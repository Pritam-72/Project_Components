"use client";

import { motion, useMotionValue, useTransform, useDragControls, animate, PanInfo } from "motion/react";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const TOP_OFFSET = 30;

export default function WindowShutter() {
  const shutterRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [height, setHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const y = useMotionValue(0);
  const dragControls = useDragControls();

  const topLimit = -(height - TOP_OFFSET);

  const playShutterSound = useCallback(() => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/image/window-shutter/shutter-sound.m4a");
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    } catch {}
  }, []);

  const brightness = useTransform(y, (currentY) => {
    const totalDist = height > TOP_OFFSET ? height - TOP_OFFSET : 1;
    const progress = Math.min(Math.max(-currentY / totalDist, 0), 1);
    const brightnessVal = 0.2 + progress * 0.9;
    return `brightness(${brightnessVal})`;
  });

  const textColor = useTransform(y, (currentY) => {
    const totalDist = height > TOP_OFFSET ? height - TOP_OFFSET : 1;
    const progress = Math.min(Math.max(-currentY / totalDist, 0), 1);
    const val = Math.round((1 - progress) * 255);
    return `rgb(${val}, ${val}, ${val})`;
  });

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    playShutterSound();
    const velocity = info.velocity.y;
    const currentY = y.get();
    const shouldOpen = velocity < -200 || (velocity <= 200 && currentY < topLimit / 2);
    const targetY = shouldOpen ? topLimit : 0;

    animate(y, targetY, {
      type: "spring",
      stiffness: 400,
      damping: 35,
      onComplete: () => setIsOpen(shouldOpen),
    });
  };

  useEffect(() => {
    if (!shutterRef.current) return;
    const observer = new ResizeObserver(() => {
      const rect = shutterRef.current?.getBoundingClientRect();
      if (rect) {
        setHeight(rect.height);
        y.set(-(rect.height - TOP_OFFSET));
      }
    });
    observer.observe(shutterRef.current);
    return () => observer.disconnect();
  }, [y]);

  return (
    <motion.div style={{ filter: brightness }} className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 select-none p-4">
      <div ref={shutterRef} className="relative w-full max-w-[420px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral-800">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/image/window-shutter/train-video-day.webm" type="video/webm" />
        </video>
        <motion.div
          drag="y"
          dragControls={dragControls}
          dragConstraints={{ top: topLimit, bottom: 0 }}
          dragElastic={0.05}
          onDragStart={() => { setHasInteracted(true); playShutterSound(); }}
          onDragEnd={handleDragEnd}
          style={{ y }}
          className="absolute inset-0 z-20 cursor-grab active:cursor-grabbing"
        >
          <Image src="/image/window-shutter/window-shutter.webp" alt="Shutter" fill className="object-cover" priority />
        </motion.div>
      </div>
      <motion.p style={{ color: textColor }} className="mt-4 text-sm font-medium tracking-wider uppercase">
        Drag shutter to adjust light
      </motion.p>
    </motion.div>
  );
}
