"use client";

import { clash } from "@/lib/fonts";
import { useMousePosition, useSiteConfig, useTime } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Clock from "./components/clock";

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
  const { clientX } = useMousePosition();
  const [fontWeight, setFontWeight] = useState(0);
  const config = useSiteConfig();

  useEffect(() => {
    setFontWeight((clientX / window.screen.width) * 900);
  }, [clientX]);

  return (
    <section>
      <div className="h-[calc(100vh-15rem)] mb-24 flex flex-col justify-stretch">
        <div className="my-auto">
          <h1 className="flex flex-col justify-center text-5xl md:text-8xl font-bold">
            <div className={`relative ${clash.className} h-max-content`}>
              <motion.p
                initial={{ y: "100%", skewX: 30 }}
                animate={{ y: 0, skewX: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 1, 0.7, 1] }}
              >
                Simon Ostini
              </motion.p>
            </div>
            <div
              className={`relative h-max-content ${clash.className} italic font-thin text-right`}
            >
              <motion.p
                className="inline-block"
                initial={{ y: "100%", skewX: 30, opacity: 0 }}
                animate={{
                  y: 0,
                  skewX: 0,
                  opacity: 1,
                  fontWeight,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.2, 1, 0.7, 1],
                  fontWeight: { duration: 0, ease: "linear" },
                }}
              >
                Creative
              </motion.p>
            </div>
            <div
              className={`relative ${clash.className} h-max-content text-center`}
            >
              <motion.p
                className="inline-block"
                initial={{ y: "100%", skewX: 30, opacity: 0 }}
                animate={{ y: 0, skewX: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.2, 1, 0.7, 1],
                }}
              >
                Developer
              </motion.p>
            </div>
          </h1>
        </div>
        <div className="mt-auto flex flex-col md:flex-row justify-between">
          {config?.availableForWork ? (
            <div className="md:border border-white md:px-3 md:py-1 rounded-full flex items-center">
              <div className="bg-green-500 h-2 w-2 rounded-full mr-2"></div>
              <span>Available for freelance work</span>
            </div>
          ) : (
            <div className="md:border border-white md:px-3 md:py-1 rounded-full flex items-center">
              <div className="bg-red-500 h-2 w-2 rounded-full mr-2"></div>
              <span>Currently busy</span>
            </div>
          )}
          <div>
            Local time - <Clock />
          </div>
        </div>
      </div>
      <div className="hidden">
        <div className="relative overflow-hidden h-max-content mb-8 text-neutral-300">
          <motion.p
            initial={{ y: "100%", skewX: 30 }}
            animate={{ y: 0, skewX: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.2, 1, 0.7, 1],
              delay: 0.2,
            }}
          >
            {`Hey, I'm a ${getAge()}-year-old creative developer from Austria, also known as "Behemoth" over the internet. I've been writing code since I was 14 and I'm still hooked on learning new things every day. Oh, and also I play guitar a lot!`}
          </motion.p>
        </div>
        <div className="relative overflow-hidden h-max-content">
          <motion.a
            href="mailto:simonostini@gmail.com"
            className="inline-block"
            initial={{ y: "100%", skewX: 30 }}
            animate={{ y: 0, skewX: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.2, 1, 0.7, 1],
              delay: 0.3,
            }}
          >
            {`simonostini@gmail.com`}
          </motion.a>
        </div>
        <div className="relative overflow-hidden h-max-content">
          <motion.a
            href="tel:+436508441272"
            className="inline-block"
            initial={{ y: "100%", skewX: 30 }}
            animate={{ y: 0, skewX: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.2, 1, 0.7, 1],
              delay: 0.4,
            }}
          >
            {`+43 650 844 1272`}
          </motion.a>
        </div>
      </div>
    </section>
  );
}
