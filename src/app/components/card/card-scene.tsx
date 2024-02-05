import { useState } from "react";
import * as THREE from "three";
import { Float, useTexture } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";

export function CardScene() {
  const [flipped, setFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const [cardFront] = useTexture(["/images/card-front.png"]);
  const [cardBack] = useTexture(["/images/tarot-back.png"]);
  const [springs] = useSpring(
    () => ({
      rotationY: flipped ? -3.2 : 0,
      onStart: () => setIsFlipping(true),
      onResolve: () => setIsFlipping(false),
    }),
    [flipped, setIsFlipping]
  );

  return (
    <>
      <pointLight intensity={75} position={[0, 1, 5]}></pointLight>
      <Float speed={3} floatingRange={[0.25, -0.25]}>
        <animated.mesh
          castShadow
          rotation-y={springs.rotationY}
          onClick={!isFlipping ? () => setFlipped((prev) => !prev) : undefined}
        >
          <planeGeometry args={[70 / 22, 120 / 22, 10, 10]}></planeGeometry>
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
          onClick={!isFlipping ? () => setFlipped((prev) => !prev) : undefined}
        >
          <planeGeometry args={[70 / 22, 120 / 22, 10, 10]}></planeGeometry>
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
