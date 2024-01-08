"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem({ route, name }: { route: string; name: string }) {
  const pathname = usePathname() || "/";

  return (
    <Link
      key={route}
      href={route}
      className={"transition-all flex align-middle"}
    >
      <span className="relative py-1 px-2 font-semibold">
        {name}
        {route === pathname ? (
          <motion.div
            className="absolute h-1 w-1 left-1/2 -ml-[2px] top-7 bg-white from-transparent to-neutral-200"
            layoutId="sidebar"
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
}
