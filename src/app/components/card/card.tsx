"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CardScene from "./card-scene";

export function Card() {
  return (
    <Canvas>
      <CardScene />
      <OrbitControls enableZoom={false} enableRotate={false}></OrbitControls>
    </Canvas>
  );
}
