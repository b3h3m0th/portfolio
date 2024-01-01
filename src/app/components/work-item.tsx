"use client";

import { useWorks } from "@/lib/stores";
import { Work } from "@/types";
import Link from "next/link";
import BezierLine from "./bezier-line";
import { motion } from "framer-motion";

type WorkItemProps = {
  work: Omit<Work, "url" | "image" | "html" | "markdown">;
  index: number;
  lineTop?: boolean;
  lineBottom?: boolean;
};

export default function WorkItem({
  work,
  index,
  lineTop,
  lineBottom,
}: WorkItemProps) {
  const setModal = useWorks((state) => state.setModal);

  return (
    <Link
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      href={`/works/${work.id}`}
      className="work-item py-6"
    >
      {lineTop && <BezierLine />}
      <div className="py-6 overflow-hidden">
        <h2 className="font-bold mb-1">{work.title}</h2>
        <div className="text-sm">
          <span>
            {`${
              work.startDate.getMonth() + 1
            }.${work.startDate.getFullYear()} — ${
              (work.endDate &&
                `${
                  work.endDate.getMonth() + 1
                }.${work.endDate.getFullYear()}`) ||
              "present"
            }`}
          </span>
          {work.company && (
            <>
              <span className="mx-2">&bull;</span>
              <span>{work.company}</span>
            </>
          )}
          {work.tags && (
            <div className="inline-block">
              <span className="mx-2">&bull;</span>
              {work.tags.map((t) => (
                <span className="mr-2" key={`tag-${t}`}>{`#${t}`}</span>
              ))}
            </div>
          )}
        </div>
      </div>
      {lineBottom && <BezierLine />}
    </Link>
  );
}
