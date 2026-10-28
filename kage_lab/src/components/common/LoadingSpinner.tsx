"use client";

import React from "react";

interface LoadingSpinnerProps {
  label?: string;
  size?: "sm" | "md" | "lg";
}

export default function LoadingSpinner({
  label = "Loading experiment assets...",
  size = "md",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  }[size];

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-8 text-neutral-400 select-none">
      <div
        className={`${sizeClasses} rounded-full border-neutral-700 border-t-amber-400 animate-spin`}
      />
      {label && <p className="text-xs font-mono tracking-wider">{label}</p>}
    </div>
  );
}
