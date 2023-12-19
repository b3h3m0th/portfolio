"use client";

import { motion } from "framer-motion";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Simon Ostini",
  robots: {
    index: true,
    follow: true,
  },
};

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
    <section>
      <h1 className="mb-8">
        <div className="relative overflow-hidden h-max-content">
          <motion.p
            className="text-8xl font-black"
            initial={{ y: "100%", skewX: 30 }}
            whileInView={{ y: 0, skewX: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 1, 0.7, 1] }}
            viewport={{ once: true }}
          >
            Simon
          </motion.p>
        </div>
        <div className="relative overflow-hidden h-max-content">
          <motion.p
            className="text-8xl font-black"
            initial={{ y: "100%", skewX: 30 }}
            whileInView={{ y: 0, skewX: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.2, 1, 0.7, 1],
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            Ostini
          </motion.p>
        </div>
      </h1>
      <div className="relative overflow-hidden h-max-content mb-8">
        <motion.p
          className="prose"
          initial={{ y: "100%", skewX: 30 }}
          whileInView={{ y: 0, skewX: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.2, 1, 0.7, 1],
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          {`Hi, I'm a ${getAge()}-year-old creative developer from Austria. I've been writing code since I was 15 and I'm still hooked on learning new things every day. Oh, and also I play guitar a lot!`}
        </motion.p>
      </div>
      {/* <a href="https://stackoverflow.com/users/12834972/behemoth">
        <Image
          src="https://stackoverflow.com/users/flair/12834972.png"
          width="208"
          height="58"
          alt="profile for Behemoth at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
          title="profile for Behemoth at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
          priority={false}
          placeholder="empty"
        />
      </a> */}
      <div className="relative overflow-hidden h-max-content">
        <motion.a
          href="mailto:simonostini@gmail.com"
          className="prose font-bold inline-block"
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
          className="prose font-bold inline-block"
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
      {/* <p className="mb-8 prose">
        {`Over the years, I have become an active and highly reputated member of the awesome StackOverflow community, where I both learn and share my knowledge.`}
      </p> */}
      {/*       <div className="w-[300px] overflow-hidden">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ ease: "easeInOut" }}
        >
          <Image
            width={300}
            height={0}
            src="/images/me_hero.jpg"
            alt="simon ostini playing guitar"
          />
        </motion.div>
      </div> */}
    </section>
  );
}
