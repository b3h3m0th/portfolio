"use client";

import { useWorks } from "@/lib/stores";
import { WorkPost } from "@/types";
import Link from "next/link";
import BezierLine from "./bezier-line";

type WorkItemProps = {
  work: Omit<WorkPost, "url" | "image" | "html" | "markdown">;
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
      href={`/work/${work.id}`}
      className="work-item py-6"
    >
      {lineTop && <BezierLine />}
      <div className="py-6">
        <h2 className="font-bold mb-1">{work.title}</h2>
        <div className="text-sm text-neutral-600">
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
                <span key={`tag-${t}`}>{`#${t}`}</span>
              ))}
            </div>
          )}
        </div>
      </div>
      {lineBottom && <BezierLine />}
    </Link>
  );
}
