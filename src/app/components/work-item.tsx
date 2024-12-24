"use client";

import { useWorksModal } from "@/app/stores";
import { Work } from "@/lib/types";
import Link from "next/link";
import { BezierLine } from "./bezier-line";

type WorkItemProps = {
  work: Omit<Work, "url" | "image" | "html" | "markdown">;
  index: number;
  lineTop?: boolean;
  lineBottom?: boolean;
  onClick?: () => void;
};

export function WorkItem({
  work,
  index,
  lineTop,
  lineBottom,
  onClick,
}: WorkItemProps) {
  const setModal = useWorksModal((state) => state.setModal);

  return (
    <Link
      href={`/work/works/${work.id}`}
      className="work-item"
      onClick={onClick}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
    >
      {lineTop && <BezierLine />}
      <div className="py-6 overflow-hidden">
        <h2 className="font-semibold mb-2">{work.title}</h2>
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
              <span className="mx-2">&#10022;</span>
              <span>{work.company}</span>
            </>
          )}
          {work.tags && (
            <div className="inline-block">
              <span className="mx-2">&#10022;</span>
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
