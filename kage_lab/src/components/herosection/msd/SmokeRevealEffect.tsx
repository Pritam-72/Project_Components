"use client";
import { useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexFront;
  uniform sampler2D uTexBack;
  uniform float uProgress;

  void main() {
    vec4 front = texture2D(uTexFront, vUv);
    vec4 back = texture2D(uTexBack, vUv);
    gl_FragColor = mix(front, back, uProgress);
  }
`;

export default function SmokeRevealEffect({ frontImage, backImage }: { frontImage: string; backImage: string }) {
  const frontTex = useTexture(frontImage);
  const backTex = useTexture(backImage);
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTexFront: { value: frontTex },
          uTexBack: { value: backTex },
          uProgress: { value: 0 },
        }}
      />
    </mesh>
  );
}
