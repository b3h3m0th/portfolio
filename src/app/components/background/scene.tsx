import { useMousePosition } from "@/lib/hooks";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Vector2 } from "three";

import bgFragmentShader from "../../shaders/background/background.frag";
import bgVertexShader from "../../shaders/background/background.vert";

export function Scene() {
  const mesh = useRef(null);
  const { viewport } = useThree();
  const pointer = useMousePosition();

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_mouse: {
        value: new Vector2(0, 0),
      },
      u_resolution: {
        value: new Vector2(viewport.width, viewport.height),
      },
      uTime: { value: 0 },
      uColor1: { value: [0 / 255, 184 / 255, 129 / 255] },
      uColor2: { value: [0 / 255, 184 / 255, 194 / 255] },
      uColorAccent: { value: [0 / 255, 0 / 255, 0 / 255] },
      uLinesBlur: { value: 0.25 },
      uNoise: { value: 0.075 },
      uOffsetX: { value: 0.34 },
      uOffsetY: { value: 0.0 },
      uLinesAmount: {
        value: 5,
      },
      uPlaneRes: {
        value: new Vector2(viewport.width, viewport.height),
      },
      uMouse2D: {
        value: new Vector2(0, 0),
      },
      uBackgroundScale: { value: 1.0 },
    }),
    [viewport]
  );

  useFrame((state) => {
    (mesh.current as any).material.uniforms.u_time.value =
      state.clock.getElapsedTime();
    (mesh.current as any).material.uniforms.uTime.value =
      state.clock.getElapsedTime();
    (mesh.current as any).material.uniforms.uMouse2D.value = new Vector2(
      pointer.x / 3000,
      pointer.y / 3000
    );
  });

  return (
    <>
      <mesh ref={mesh} scale={[viewport.width, viewport.height, 0]}>
        <planeGeometry args={[1, 1]}></planeGeometry>
        <shaderMaterial
          fragmentShader={bgFragmentShader}
          vertexShader={bgVertexShader}
          uniforms={uniforms}
        ></shaderMaterial>
      </mesh>
    </>
  );
}
