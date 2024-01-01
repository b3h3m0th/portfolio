"use client";

import { Canvas } from "@react-three/fiber";
import { Scene } from "./scene";

export const Background: React.FC = () => {
  return (
    <div className={`fixed left-0 top-0 z-[-2] flex h-screen w-screen`}>
      {new Array(12).fill(null).map((_, i) => {
        return (
          <div
            key={`bg-line-${i}`}
            className={`bg-line h-full w-1/12 border-r border-r-neutral-100 bg-white`}
          ></div>
        );
      })}
      <div className={"fixed h-screen w-screen"}>
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </div>
  );
};
