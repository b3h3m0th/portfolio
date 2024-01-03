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
      // u_color1: { value: [180 / 255, 29 / 255, 54 / 255] },
      // u_color1: { value: [180 / 255, 29 / 255, 54 / 255] },
      u_color1: { value: [252 / 255, 68 / 255, 15 / 255] },
      u_color2: { value: [30 / 255, 255 / 255, 188 / 255] },
      u_color_accent: { value: [0 / 255, 0 / 255, 0 / 255] },
      u_lines_blur: { value: 0.25 },
      u_noise: { value: 0.1 },
      u_offset_x: { value: 0.34 },
      u_offset_y: { value: 0.0 },
      u_lines_amount: {
        value: 5.0,
      },
      u_background_scale: { value: 1.0 },
    }),
    [viewport.width, viewport.height]
  );

  useFrame((state) => {
    (mesh.current as any).material.uniforms.u_time.value =
      state.clock.getElapsedTime();
    (mesh.current as any).material.uniforms.u_mouse.value = new Vector2(
      pointer.x,
      pointer.y
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
