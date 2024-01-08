import { useMemo, useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { Vector2, TextureLoader, Texture } from "three";

import vertexShader from "./shaders/home-scene.vert";
import fragmentShader from "./shaders/home-scene.frag";

export default function HomeScene() {
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
    []
  );

  const [image] = useLoader(TextureLoader, ["/images/metal.jpg"]);

  useFrame((state) => {
    (mesh.current as any).material.uniforms.u_time.value =
      state.clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[7, 6, 50, 50]}></planeGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{ ...uniforms, u_texture: { value: image } }}
      ></shaderMaterial>
    </mesh>
  );
}
