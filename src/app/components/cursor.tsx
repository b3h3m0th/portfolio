"use client";

import { useMousePosition } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Cursor() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="bg-black left-0 top-0 w-2 h-2 fixed -translate-x-1/2 -translate-y-1/2 rounded-full"
      animate={{ x: x - 4, y: y - 4 }}
      transition={{ ease: "linear", duration: 0 }}
    ></motion.div>
  );
}
