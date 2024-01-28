"use client";

import { useRef, useEffect } from "react";
import { Variants, motion } from "framer-motion";
import gsap from "gsap";
import { useWorksModal } from "@/app/stores";
import { Work } from "@/lib/types";
import { useMousePosition } from "@/app/hooks";
import Image from "next/image";

const scaleAnimation: Variants = {
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

export function WorkModal({ works }: WorkModalProps) {
  const modalContainer = useRef(null);
  const { active, index } = useWorksModal(({ active, index }) => ({
    active,
    index,
  }));
  const { clientX, clientY } = useMousePosition();

  useEffect(() => {
    gsap.quickTo(modalContainer.current, "left", {
      duration: 0.7,
      ease: "power3",
    })(clientX);

    gsap.quickTo(modalContainer.current, "top", {
      duration: 0.7,
      ease: "power3",
    })(clientY);
  }, [clientX, clientY]);

  return (
    <motion.div
      ref={modalContainer}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className="-z-[1] h-[150px] w-[300px] fixed invisible md:visible overflow-hidden pointer-events-none"
    >
      <motion.div
        animate={{ top: index * -100 + "%" }}
        transition={{
          top: {
            duration: 0.3,
            ease: "linear",
          },
        }}
        className="h-full w-full absolute"
      >
        {works.map((work, index) => {
          return (
            <div
              className="h-full w-full overflow-hidden flex items-center justify-center bg-neutral-800"
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
      </motion.div>
    </motion.div>
  );
}
