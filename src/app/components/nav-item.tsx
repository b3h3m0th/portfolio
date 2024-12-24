"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem({ route, name }: { route: string; name: string }) {
  const emptyPathame = "/";
  const pathname = usePathname() || emptyPathame;

  console.log(route, pathname);

  return (
    <Link
      key={route}
      href={route}
      className={"transition-all flex align-middle"}
    >
      <span className="relative py-1 px-2 font-semibold">
        {name}
        {pathname.startsWith(route) && route !== emptyPathame ? (
          <motion.div
            className="absolute left-1/2 top-6 text-center"
            layoutId="sidebar"
          >
            <span className="relative -left-1/2 text-xs">&#10022;</span>
          </motion.div>
        ) : null}
      </span>
    </Link>
  );
}
