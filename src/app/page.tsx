"use client";

import { clash } from "@/lib/fonts";
import { useMousePosition, useSiteConfig } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Clock from "./components/clock";
import { cx } from "@/lib/utils/cx";
import Image from "next/image";

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
        <div className="my-auto w-full max-w-2xl mx-auto">
          <h1
            className={`mb-16 flex flex-col justify-center text-5xl md:text-8xl font-bold ${clash.className}`}
          >
            <motion.p
              initial={{ y: "100%", skewX: 30, opacity: 0 }}
              animate={{ y: 0, skewX: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.2, 1, 0.7, 1],
              }}
            >
              Simon Ostini
            </motion.p>
            <motion.p
              className="inline-block text-right font-thin"
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
            <motion.p
              className="inline-block text-center"
              initial={{ y: "100%", skewX: 30, opacity: 0 }}
              animate={{ y: 0, skewX: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.2, 1, 0.7, 1],
              }}
            >
              Developer
            </motion.p>
          </h1>
        </div>
        <div className="mt-auto flex flex-col md:flex-row justify-between font-light">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold">Based in Dornbirn, Austria</p>
            <p className="font-thin">
              Local time - <Clock />
            </p>
          </div>
          {/* <div className="font-thin text-4xl opacity-50 animate-bounce">
            &darr;
          </div> */}
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
              className="md:text-right font-thin underline"
            >{`simonostini@gmail.com`}</a>
          </div>
        </div>
      </div>
      <div className="hidden mt-32">
        <div className={`${clash.className} relative min-h-64 h-64`}>
          <h2 className={`font-thin text-sm uppercase mb-4`}>About me</h2>
          <div className="font-thin text-4xl leading-tight tracking-wide flex flex-col gap-4">
            <p>
              I&apos;m a {getAge()}-year-old creative developer based in Austria
              also known as{" "}
              <span className="font-bold text-white">Behemoth</span> over the
              internet.
            </p>
          </div>
          {/* <Image
            className="absolute left-1/2 -translate-x-1/2 top-0 -z-[1]"
            src="/images/me_hero.webp"
            height={300}
            width={300}
            alt="me"
          /> */}
        </div>
      </div>
    </section>
  );
}
