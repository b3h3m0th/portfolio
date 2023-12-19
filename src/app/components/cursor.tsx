"use client";

import { useMousePosition } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Cursor() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="z-[-1] left-0 top-0 w-24 h-24 invisible md:visible md:fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        background: "linear-gradient(90deg,#0ff 1.5%,#0f0 2%,#000 100%)",
        filter: "blur(100px)",
      }}
      animate={{ x: x - 48, y: y - 48 }}
      transition={{ ease: "linear", duration: 0, type: "spring" }}
    ></motion.div>
  );
}
