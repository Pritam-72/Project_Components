"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LabNavbar() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <nav className="fixed top-4 left-4 z-50 flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 text-xs font-mono shadow-xl select-none">
      <Link
        href="/"
        className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 font-bold"
      >
        <span>←</span>
        <span>KAGE LAB</span>
      </Link>
      <span className="w-1 h-1 rounded-full bg-neutral-600" />
      <span className="text-neutral-300 font-medium tracking-wide">
        {pathname.replace("/", "").toUpperCase()}
      </span>
    </nav>
  );
}
