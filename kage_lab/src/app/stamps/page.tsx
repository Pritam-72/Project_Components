"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { STAMPS_DATA, StampItem } from "./data";

export default function StampsPage() {
  const [stampList] = useState<StampItem[]>(STAMPS_DATA);
  const [selectedStamp, setSelectedStamp] = useState<StampItem | null>(null);

  return (
    <div className="relative w-screen h-screen bg-[#e7dfc6] overflow-hidden select-none flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(#0000000d_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      {stampList.map((stamp) => (
        <motion.div
          key={stamp.id}
          style={{ left: `${stamp.x}%`, top: `${stamp.y}%` }}
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
