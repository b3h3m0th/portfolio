"use client";
import { clash } from "@/app/fonts";
import { useMousePosition, useSiteConfig } from "@/app/hooks";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Clock from "./components/clock";
import { cx } from "@/lib/utils/cx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HomeScene from "./components/home-scene/home-scene";
import Image from "next/image";
import BezierLine from "./components/bezier-line";

function getAge() {
  const birthdate = new Date(2003, 10, 22);
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const month = today.getMonth() - birthdate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  return age;
}

export default function Home() {
  const config = useSiteConfig();

  return (
    <section>
      <div className="h-[calc(100vh-15rem)] mb-24 flex flex-col justify-stretch">
        <div className="my-auto w-full max-w-2xl mx-auto">
          <h1
            className={`mb-16 flex flex-col justify-center text-6xl md:text-8xl font-bold ${clash.className}`}
          >
            <p className="inline-block">Simon Ostini</p>
            <p className="inline-block md:text-right">Creative</p>
            <p className="inline-block md:text-center">Developer</p>
          </h1>
        </div>
        <div className="mt-auto flex flex-col md:flex-row justify-between font-light">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold">Based in Dornbirn, Austria</p>
            <p className="md:font-thin">
              Local time - <Clock />
            </p>
          </div>
          <div className="hidden md:hidden text-center font-thin text-2xl opacity-50 animate-bounce">
            &darr;
          </div>
          <div className="flex flex-col justify-right">
            <div className="rounded-full flex items-center">
              <div className="relative h-2 w-2 mr-2">
                <div
                  className={`absolute h-full w-full rounded-full ${cx({
                    "bg-green-500": !!config?.availableForWork,
                    "bg-red-500": !!!config?.availableForWork,
                  })}`}
                ></div>
                <div
                  className={`absolute animate-ping h-full w-full rounded-full ${cx(
                    {
                      "bg-green-500": !!config?.availableForWork,
                      "bg-red-500": !!!config?.availableForWork,
                    }
                  )}`}
                ></div>
              </div>
              <span className="font-semibold">
                {config?.availableForWork
                  ? "Available for freelance work"
                  : "Currently busy"}
              </span>
            </div>
            <a
              href="mailto:simonostini@gmail.com"
              className="md:text-right md:font-thin underline"
            >{`simonostini@gmail.com`}</a>
          </div>
        </div>
      </div>
      <div className={`mt-32 flex flex-col md:flex-row gap-8`}>
        <div className={`flex-1`}>
          <div className="flex items-center mb-4">
            <h2 className={`md:font-thin shrink-0 mr-4`}>I am</h2>
            <BezierLine />
          </div>
          <div className={`flex flex-col gap-4`}>
            <p className="text-justify">
              a {getAge()}-year-old creative developer based in Austria also
              known as Behemoth over the internet. I design and develop cool
              stuff for amazing people. Sometimes as a freelancer. Sometimes
              not.
            </p>
          </div>
        </div>
        <div className={`flex-1`}>
          <div className="flex items-center mb-4">
            <h2 className={`md:font-thin shrink-0 mr-4`}>I like</h2>
            <BezierLine />
          </div>
          <div className={`flex flex-col gap-4`}>
            <p className="text-justify">
              TypeScript, React, .NET, 80s Hard rock, Glam metal J. R. R.
              Tolkien, StackOverflow, WebGL, Open source, Leather jackets,
              Next.js, Darts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
