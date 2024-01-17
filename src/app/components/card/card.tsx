"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CardScene } from "./card-scene";
import { useState } from "react";
import { Variants, motion } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export function Card() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      variants={variants}
      className="h-full"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      transition={{ duration: 2 }}
    >
      <Canvas onCreated={() => setIsLoaded(true)}>
        <CardScene />
        <OrbitControls enableZoom={false} enableRotate={false}></OrbitControls>
      </Canvas>
    </motion.div>
  );
}
