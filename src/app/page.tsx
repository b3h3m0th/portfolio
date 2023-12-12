"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
      <h1 className="font-bold text-4xl mb-8 flex items-center">
        <span>{`Hi, I'm Simon`}</span>
      </h1>
      <p className="mb-8">
        {`I'm a ${getAge()}-year-old full-stack developer from Austria. I've been writing code since I was 15 and I'm still hooked on learning new things every day. Over the years, I have become an active and highly reputated member of the awesome StackOverflow community, where I both learn and share my knowledge. Oh, and also I play guitar a lot!`}
      </p>
      <div className="w-[300px] rounded-3xl overflow-hidden">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ ease: "easeInOut" }}
        >
          <Image
            width={300}
            height={0}
            src="/me_hero.jpg"
            alt="Simon Ostini playing guitar"
          />
        </motion.div>
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
    </section>
  );
}
