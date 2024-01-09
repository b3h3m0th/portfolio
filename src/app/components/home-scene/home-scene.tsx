import { useMemo, useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { Vector2, TextureLoader, Texture, DoubleSide } from "three";

import vertexShader from "./shaders/home-scene.vert";
import fragmentShader from "./shaders/home-scene.frag";
import { Float } from "@react-three/drei";

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

  const [image] = useLoader(TextureLoader, ["/images/king_of_diamonds2.png"]);

  useFrame((state) => {
    (mesh.current as any).material.uniforms.u_time.value =
      state.clock.getElapsedTime();
  });

  return (
    <>
      <Float speed={3} floatingRange={[-0.5, 0.5]}>
        <mesh ref={mesh}>
          <planeGeometry args={[63 / 18, 88 / 18, 100, 100]}></planeGeometry>
          <shaderMaterial
            depthWrite={false}
            side={DoubleSide}
            transparent
            wireframe
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{ ...uniforms, u_texture: { value: image } }}
          ></shaderMaterial>
        </mesh>
      </Float>
      {/* <RoundedBox
        ref={mesh}
        args={[63 / 14, 88 / 14, 1 / 14]}
        bevelSegments={4}
      >
        <boxGeometry args={[63 / 14, 88 / 14, 1 / 14, 50, 50]}></boxGeometry>
        <meshBasicMaterial map={image}></meshBasicMaterial>
        <meshBasicMaterial color="red" attach="material-1"></meshBasicMaterial>
        <shaderMaterial
          attach="material-0"
          transparent
          // wireframe
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{ ...uniforms, u_texture: { value: image } }}
        ></shaderMaterial>
      </RoundedBox> */}
    </>
  );
}
