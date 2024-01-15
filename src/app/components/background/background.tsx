"use client";

import { Canvas } from "@react-three/fiber";
import { Scene } from "./background-scene";

export const Background: React.FC = () => {
  return (
    <div className={`fixed -z-[2] left-0 top-0 w-screen h-screen`}>
      <div className="absolute md:flex left-0 top-0 z-[1] w-full h-full">
        {new Array(12).fill(null).map((_, i) => {
          return (
            <div
              key={`bg-line-${i}`}
              className={`h-full w-1/12 border-r border-r-neutral-950 opacity-20`}
            ></div>
          );
        })}
      </div>
      <div className={"absolute left-0 top-0 h-screen w-screen bg-neutral-950"}>
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </div>
  );
};
