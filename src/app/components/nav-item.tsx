"use client";

import { cx } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem({ route, name }: { route: string; name: string }) {
  const pathname = usePathname() || "/";

  return (
    <Link
      key={route}
      href={route}
      className={cx("transition-all hover:text-neutral-800 flex align-middle", {
        "text-neutral-500": !(route === pathname),
      })}
    >
      <span className="relative py-1 px-2">
        {name}
        {route === pathname ? (
          <motion.div
            className="absolute h-1 w-1 left-1/2 -ml-[2px] rounded-full top-7 bg-neutral-900 from-transparent to-neutral-200"
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
