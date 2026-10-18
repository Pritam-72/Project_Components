"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const MsdHeroSection = () => {
  return (
    <div className="relative w-full h-dvh overflow-hidden bg-white select-none">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 1] }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            {/* Shader mesh will be mounted here */}
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default MsdHeroSection;
