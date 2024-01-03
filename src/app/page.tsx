"use client";

import { clash } from "@/lib/fonts";
import { motion } from "framer-motion";

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
      <h1 className="mb-8 h-[50vh] flex flex-col justify-center text-5xl md:text-8xl font-bold">
        <div className="relative h-max-content">
          <motion.p
            initial={{ y: "100%", skewX: 30 }}
            animate={{ y: 0, skewX: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 1, 0.7, 1] }}
          >
            Simon Ostini
          </motion.p>
        </div>
        <div
          className={`relative h-max-content font-display italic font-thin text-right`}
        >
          <motion.p
            className="inline-block"
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
            className="inline-block"
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
