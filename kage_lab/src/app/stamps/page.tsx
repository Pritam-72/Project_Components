"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { PiShuffleBold } from "react-icons/pi";
import { STAMPS_DATA, StampItem } from "./data";

export default function StampsPage() {
  const [stampList, setStampList] = useState<StampItem[]>(STAMPS_DATA);
  const [selectedStamp, setSelectedStamp] = useState<StampItem | null>(null);

  const shuffleStamps = useCallback(() => {
    setStampList((prev) =>
      prev.map((s) => ({
        ...s,
        x: Math.floor(Math.random() * 40) + 30,
        y: Math.floor(Math.random() * 40) + 30,
        rotate: Math.floor(Math.random() * 60) - 30,
      }))
    );
  }, []);

  return (
    <div className="relative w-screen h-screen bg-[#e7dfc6] overflow-hidden select-none flex items-center justify-center">
      <div className="absolute top-6 right-6 z-30">
        <button
          onClick={shuffleStamps}
          className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-full shadow-lg hover:bg-neutral-800 active:scale-95 transition-all text-sm font-medium"
        >
          <PiShuffleBold size={18} />
          <span>Shuffle Desk</span>
        </button>
      </div>
      {stampList.map((stamp) => (
        <motion.div
          key={stamp.id}
          animate={{ left: `${stamp.x}%`, top: `${stamp.y}%`, rotate: stamp.rotate }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
          onClick={() => setSelectedStamp(stamp)}
        >
          <div className="relative w-40 h-52 bg-white p-2 border border-neutral-300">
            <Image src={stamp.image} alt={stamp.title} fill className="object-cover" />
            <div className="absolute bottom-2 left-2 right-2 text-center text-xs font-serif font-bold text-neutral-800">
              {stamp.title} ({stamp.year})
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
