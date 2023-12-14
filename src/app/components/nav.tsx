"use client";

import { motion, LayoutGroup } from "framer-motion";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { cx } from "@/lib/utils";
import { Github, Stackoverflow } from "iconoir-react";

const navItems = {
  "/": {
    name: "Home",
  },
  "/work": {
    name: "Work",
  },
  "/projects": {
    name: "Projects",
  },
  "/not-found": {
    name: "Not Found",
  },
} as const;

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row items-start scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex">
              <Suspense fallback={null}>
                {Object.entries(navItems).map(([path, { name }]) => (
                  <NavItem key={path} route={path} name={name} />
                ))}
              </Suspense>
            </div>
            <div className="ml-auto py-1 px-2">
              <a href="https://github.com/b3h3m0th" target="_blank">
                <Github />
              </a>
            </div>
            <div className="py-1 px-2">
              <a
                href="https://stackoverflow.com/users/12834972/behemoth"
                target="_blank"
              >
                <Stackoverflow />
              </a>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

function NavItem({ route, name }: { route: string; name: string }) {
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
