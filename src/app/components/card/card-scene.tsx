import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector2, Texture, DoubleSide } from "three";
import { Float, useTexture } from "@react-three/drei";

import vertexShader from "./shaders/home-scene.vert";
import fragmentShader from "./shaders/home-scene.frag";

export function CardScene() {
  const { viewport } = useThree();
  const mesh = useRef(null);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_resolution: {
        value: new Vector2(viewport.width, viewport.height),
      },
      u_texture: {
        value: new Texture(),
      },
    }),
    [viewport.width, viewport.height]
  );

  const [card] = useTexture(["/images/AS_custom.svg"]);

  useFrame((state) => {
    (mesh.current as any).material.uniforms.u_time.value =
      state.clock.getElapsedTime();
  });

  return (
    <>
      <Float speed={3} floatingRange={[0, 0.5]}>
        <mesh ref={mesh}>
          <planeGeometry args={[63 / 18, 88 / 18, 100, 100]}></planeGeometry>
          <shaderMaterial
            depthWrite={false}
            side={DoubleSide}
            transparent
            wireframe
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{ ...uniforms, u_texture: { value: card } }}
          ></shaderMaterial>
        </mesh>
      </Float>
    </>
  );
}
