"use client";

import { useMousePosition } from "@/app/hooks";
import { motion } from "framer-motion";

export function Cursor() {
  const { clientX, clientY } = useMousePosition();

  return (
    <motion.div
      className="z-[-1] left-0 top-0 w-0 h-0 md:w-48 md:h-48 invisible md:visible fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        background: "#fff",
        filter: "blur(100px)",
      }}
      animate={{ x: clientX - 96, y: clientY - 96 }}
      transition={{ ease: "linear", duration: 1 }}
    ></motion.div>
  );
}
