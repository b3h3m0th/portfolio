"use client";

import { useMousePosition } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Cursor() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="z-[-1] left-0 top-0 w-0 h-0 md:w-96 md:h-96 invisible md:visible fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        background: "#9ee619",
        filter: "blur(250px)",
      }}
      animate={{ x: x - 96, y: y - 96 }}
      transition={{ ease: "linear", duration: 2 }}
    ></motion.div>
  );
}
