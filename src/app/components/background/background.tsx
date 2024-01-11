"use client";

import { Canvas } from "@react-three/fiber";
import { Scene } from "./background-scene";

export const Background: React.FC = () => {
  return (
    <div className={`fixed z-[-2] left-0 top-0 w-screen h-screen`}>
      <div className="absolute hidden md:flex left-0 top-0 z-[1] w-full h-full">
        {new Array(12).fill(null).map((_, i) => {
          return (
            <div
              key={`bg-line-${i}`}
              className={`bg-line h-full w-1/12 border-r border-r-neutral-900 opacity-10`}
            ></div>
          );
        })}
      </div>
      <div className={"absolute left-0 top-0 h-screen w-screen"}>
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </div>
  );
};
