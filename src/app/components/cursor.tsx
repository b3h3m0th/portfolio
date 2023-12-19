"use client";

import { useMousePosition } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Cursor() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="z-[-1] left-0 top-0 w-0 h-0 md:w-48 md:h-48 invisible md:visible fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        background: "linear-gradient(90deg,#0ff 1.5%,#000 2%,#000 100%)",
        filter: "blur(150px)",
      }}
      animate={{ x: x - 96, y: y - 96 }}
      transition={{ ease: "linear", duration: 2 }}
    ></motion.div>
  );
}
