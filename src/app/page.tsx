"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";

import fragmentShader from "./shaders/home/home.frag";
import vertexShader from "./shaders/home/home.vert";
import { useMemo, useRef } from "react";

function Scene() {
  const mesh = useRef(null);
  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    (mesh.current as any).material.uniforms.u_time.value =
      state.clock.getElapsedTime();
  });

  return (
    <>
      <mesh ref={mesh}>
        <planeGeometry args={[2, 2]}></planeGeometry>
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        ></shaderMaterial>
      </mesh>
    </>
  );
}

export default function Home() {
  const getAge = () => {
    const birthdate = new Date(2003, 10, 22);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <section className="relative">
      <div className="absolute w-full h-[50vh]">
        <Canvas>
          <Scene></Scene>
        </Canvas>
      </div>
      <h1 className="mb-8 h-[50vh] flex flex-col justify-center">
        <div className="relative overflow-hidden h-max-content">
          <motion.p
            className="text-8xl font-black"
            initial={{ y: "100%", skewX: 30 }}
            animate={{ y: 0, skewX: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 1, 0.7, 1] }}
          >
            Simon Ostini
          </motion.p>
        </div>
        <div className={`relative overflow-hidden h-max-content`}>
          <motion.p
            className={`text-8xl font-black text-right`}
            initial={{ y: "100%", skewX: 30 }}
            animate={{ y: 0, skewX: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.2, 1, 0.7, 1],
              delay: 0.1,
            }}
          >
            Creative
          </motion.p>
        </div>
        <div className="relative overflow-hidden h-max-content text-center">
          <motion.p
            className="inline-block text-8xl font-black"
            initial={{ y: "100%", skewX: 30 }}
            animate={{ y: 0, skewX: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.2, 1, 0.7, 1],
              delay: 0.1,
            }}
          >
            Developer
          </motion.p>
        </div>
      </h1>
      <div className="relative overflow-hidden h-max-content mb-8">
        <motion.p
          initial={{ y: "100%", skewX: 30 }}
          whileInView={{ y: 0, skewX: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.2, 1, 0.7, 1],
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          {`Hey, I'm a ${getAge()}-year-old creative developer from Austria, also known as "Behemoth" over the internet. I've been writing code since I was 14 and I'm still hooked on learning new things every day. Oh, and also I play guitar a lot!`}
        </motion.p>
      </div>
      <div className="relative overflow-hidden h-max-content">
        <motion.a
          href="mailto:simonostini@gmail.com"
          className="font-bold inline-block"
          initial={{ y: "100%", skewX: 30 }}
          whileInView={{ y: 0, skewX: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.2, 1, 0.7, 1],
            delay: 0.3,
          }}
          viewport={{ once: true }}
        >
          {`simonostini@gmail.com`}
        </motion.a>
      </div>
      <div className="relative overflow-hidden h-max-content">
        <motion.a
          href="tel:+436508441272"
          className="font-bold inline-block"
          initial={{ y: "100%", skewX: 30 }}
          whileInView={{ y: 0, skewX: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.2, 1, 0.7, 1],
            delay: 0.4,
          }}
          viewport={{ once: true }}
        >
          {`+43 650 844 1272`}
        </motion.a>
      </div>
    </section>
  );
}
