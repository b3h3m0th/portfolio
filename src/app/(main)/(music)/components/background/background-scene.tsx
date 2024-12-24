import { useMousePosition } from "@/app/hooks";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Vector2 } from "three";

import bgFragmentShader from "./shaders/background.frag";
import bgVertexShader from "./shaders/background.vert";

export function Scene() {
  const mesh = useRef(null);
  const pointer = useMousePosition();
  const { viewport, size } = useThree();

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
      // u_color1: { value: [252 / 255, 68 / 255, 15 / 255] },
      // u_color2: { value: [30 / 255, 255 / 255, 188 / 255] },
      u_color1: { value: [50 / 255, 50 / 255, 50 / 255] },
      u_color2: { value: [100 / 255, 100 / 255, 100 / 255] },
      u_color_accent: { value: [0 / 255, 0 / 255, 0 / 255] },
      u_lines_blur: { value: size.width < 768 ? 0.3 : 0.25 },
      u_noise: { value: 0.1 },
      u_offset_x: { value: 0.34 },
      u_offset_y: { value: 0.0 },
      u_lines_amount: {
        value: size.width < 768 ? 4.0 : 5.0,
      },
      u_background_scale: { value: size.width < 768 ? 5.0 : 1.0 },
    }),
    [viewport.width, viewport.height, size.width]
  );

  useFrame((state) => {
    (mesh.current as any).material.uniforms.u_time.value =
      state.clock.getElapsedTime();

    if (size.width > 768) {
      (mesh.current as any).material.uniforms.u_mouse.value = new Vector2(
        pointer.clientX,
        pointer.clientY
      );
    }
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
