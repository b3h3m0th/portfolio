import { useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Float, useTexture } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";

import vertexShader from "./shaders/card.vert";
import fragmentShader from "./shaders/card.frag";

export function CardScene() {
  const { viewport } = useThree();
  const mesh = useRef(null);
  const [flipped, setFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_resolution: {
        value: new THREE.Vector2(viewport.width, viewport.height),
      },
      u_texture: {
        value: new THREE.Texture(),
      },
    }),
    [viewport.width, viewport.height]
  );

  const [cardFront] = useTexture(["/images/as_custom.svg"]);
  const [cardBack] = useTexture(["/images/as_custom_back.svg"]);
  const [springs] = useSpring(
    () => ({
      rotationY: flipped ? -3.2 : 0,
      onStart: () => setIsFlipping(true),
      onResolve: () => setIsFlipping(false),
    }),
    [flipped, setIsFlipping]
  );

  useFrame((state) => {
    if (!(mesh.current as any)?.material?.uniforms) return;
    (mesh.current as any).material.uniforms.u_time.value =
      state.clock.getElapsedTime();
  });

  return (
    <>
      <pointLight intensity={50} position={[0, 1, 5]}></pointLight>
      <Float speed={3} floatingRange={[0.25, -0.25]}>
        <animated.mesh
          castShadow
          rotation-y={springs.rotationY}
          ref={mesh}
          onClick={!isFlipping ? () => setFlipped((prev) => !prev) : undefined}
        >
          <planeGeometry args={[63 / 18, 88 / 18, 500, 500]}></planeGeometry>
          <meshLambertMaterial
            transparent
            side={THREE.FrontSide}
            map={cardFront}
          ></meshLambertMaterial>
          {/* <shaderMaterial
            side={THREE.FrontSide}
            transparent
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{ ...uniforms, u_texture: { value: cardFront } }}
          ></shaderMaterial> */}
        </animated.mesh>
        <animated.mesh
          rotation-y={springs.rotationY}
          ref={mesh}
          onClick={!isFlipping ? () => setFlipped((prev) => !prev) : undefined}
        >
          <planeGeometry args={[63 / 18, 88 / 18, 500, 500]}></planeGeometry>
          <meshLambertMaterial
            transparent
            side={THREE.BackSide}
            map={cardBack}
          ></meshLambertMaterial>
          {/* <shaderMaterial
            depthWrite={false}
            side={THREE.BackSide}
            transparent
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{ ...uniforms, u_texture: { value: cardBack } }}
          ></shaderMaterial> */}
        </animated.mesh>
      </Float>
    </>
  );
}
