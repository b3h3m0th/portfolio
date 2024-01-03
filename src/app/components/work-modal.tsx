"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { useWorks } from "@/lib/stores";
import { Work } from "@/lib/types";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.7, 0, 0.2, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.3, 0, 0.7, 0] },
  },
};

type WorkModalProps = {
  works: Pick<Work, "image" | "title">[];
};

export default function WorkModal({ works }: WorkModalProps) {
  const modalContainer = useRef(null);
  const { active, index } = useWorks((state) => state.modal);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.7,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.7,
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
        className="h-[150px] w-[300px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center hidden md:block"
      >
        <div
          style={{ top: index * -100 + "%", transition: "top .5s ease" }}
          className="h-full w-full absolute"
        >
          {works.map((work, index) => {
            return (
              <div
                className="h-full w-full overflow-hidden flex items-center justify-center bg-neutral-200"
                key={`modal_${index}`}
              >
                {work.image && (
                  <Image
                    src={work.image}
                    width={200}
                    height={0}
                    className="w-auto h-[130px]"
                    alt={`${work.title}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
