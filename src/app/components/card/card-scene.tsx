import { useRef, useState } from "react";
import * as THREE from "three";
import { Float, OrbitControls, useTexture } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";

export function CardScene() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [entryAnimationFinished, setEntryAnimationFinished] = useState(false);

  const [cardFront] = useTexture(["/images/tarot-front.png"]);
  const [cardBack] = useTexture(["/images/tarot-back.png"]);
  const [springs] = useSpring(
    () => ({
      "rotation-y": isFlipped ? -3.2 : 0,
      scale: isHovered ? 0.95 : 1,
      onResolve() {
        setEntryAnimationFinished(true);
      },
      ...(!entryAnimationFinished
        ? {
            config: {
              mass: 8,
              friction: 50,
              tension: 100,
            },
            from: {
              scale: 0.3,
              "rotation-y": -10,
              "rotation-z": 0.2,
            },
            to: {
              scale: 1,
              "rotation-y": 0,
              "rotation-z": 0,
            },
          }
        : {
            config: {
              mass: 1,
              friction: 25,
              tension: 100,
            },
          }),
    }),
    [isFlipped, isHovered]
  );

  const handleMouseEnter = () => {
    document.body.classList.add("cursor-pointer");
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    document.body.classList.remove("cursor-pointer");
    setIsHovered(false);
  };

  return (
    <>
      <directionalLight intensity={2} position={[0, 1, 10]}></directionalLight>
      <Float speed={3} floatingRange={[0.1, -0.1]}>
        <animated.mesh
          {...springs}
          onClick={() => setIsFlipped((prev) => !prev)}
          onPointerEnter={handleMouseEnter}
          onPointerLeave={handleMouseLeave}
        >
          <planeGeometry args={[70 / 22, 120 / 22, 100, 100]}></planeGeometry>
          <meshPhongMaterial
            transparent
            shininess={100}
            side={THREE.FrontSide}
            map={cardFront}
          ></meshPhongMaterial>
          {/* <shaderMaterial
            side={THREE.FrontSide}
            transparent
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{ ...uniforms, u_texture: { value: cardFront } }}
          ></shaderMaterial> */}
        </animated.mesh>
        <animated.mesh
          {...springs}
          onClick={() => setIsFlipped((prev) => !prev)}
          onPointerEnter={handleMouseEnter}
          onPointerLeave={handleMouseLeave}
        >
          <planeGeometry args={[70 / 22, 120 / 22, 100, 100]}></planeGeometry>
          <meshPhongMaterial
            transparent
            shininess={100}
            side={THREE.BackSide}
            map={cardBack}
          ></meshPhongMaterial>
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
