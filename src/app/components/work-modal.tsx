"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { useWorks } from "@/lib/stores";
import { WorkPost } from "@/types";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

type WorkModalProps = {
  works: Pick<WorkPost, "image">[];
};

export default function WorkModal({ works }: WorkModalProps) {
  const modalContainer = useRef(null);
  const { active, index } = useWorks((state) => state.modal);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="h-[150px] w-[300px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center"
      >
        <div
          style={{ top: index * -100 + "%", transition: "top .5s ease" }}
          className="h-full w-full absolute"
        >
          {works.map((work, index) => {
            return (
              <div
                className="h-full w-full overflow-hidden flex items-center justify-center bg-white"
                key={`modal_${index}`}
              >
                <Image
                  src={work.image ?? "/images/me_hero.jpg"}
                  width={300}
                  height={0}
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
