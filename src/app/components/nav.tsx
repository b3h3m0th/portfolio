"use client";

import { LayoutGroup } from "framer-motion";
import { NavItem } from "./nav-item";
import Image from "next/image";

export const navItems = {
  "/": {
    name: "Music",
  },
  "/work": {
    name: "Work",
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
              {Object.entries(navItems).map(([path, { name }]) => (
                <NavItem key={path} route={path} name={name} />
              ))}
            </div>
            <div className="ml-auto py-1 px-2">
              <a
                href="https://github.com/b3h3m0th"
                target="_blank"
                aria-label="GitHub"
              >
                <Image
                  width={24}
                  height={24}
                  src="/images/github.svg"
                  alt="GitHub icon"
                />
              </a>
            </div>
            <div className="py-1 px-2">
              <a
                href="https://stackoverflow.com/users/12834972/behemoth"
                target="_blank"
                aria-label="StackOverflow"
              >
                <Image
                  width={24}
                  height={24}
                  src="/images/stackoverflow.svg"
                  alt="Stack Overflow icon"
                />
              </a>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
