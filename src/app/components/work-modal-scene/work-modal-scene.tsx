import { Work } from "@/lib/types";
import { useTexture } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Vector2, Texture } from "three";

import vertexShader from "./shaders/work-modal-scene.vert";
import fragmentShader from "./shaders/work-modal-scene.frag";

type WorkModalSceneProps = {
  image: Exclude<Work["image"], undefined>;
};

export function WorkModalScene({ image }: WorkModalSceneProps) {
  const { viewport, size } = useThree();
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

  const [texture] = useTexture([image]);

  useFrame((state) => {
    (mesh.current as any).material.uniforms.u_time.value =
      state.clock.getElapsedTime();
  });
  return (
    <>
      <mesh ref={mesh}>
        <planeGeometry args={[1, 1]}></planeGeometry>
        <shaderMaterial
          depthWrite={false}
          transparent
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{ ...uniforms, u_texture: { value: texture } }}
        ></shaderMaterial>
      </mesh>
    </>
  );
}
