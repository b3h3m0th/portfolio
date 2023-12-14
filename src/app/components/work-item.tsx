"use client";

import { useWorks } from "@/lib/stores";
import { WorkPost } from "@/types";
import Link from "next/link";

export default function WorkItem({
  work,
  index,
}: {
  work: Pick<
    WorkPost,
    "title" | "description" | "startDate" | "endDate" | "company" | "id"
  >;
  index: number;
}) {
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
      key={work.id}
    >
      <div className="py-6">
        <h2 className="font-bold text-xl mb-1">{work.title}</h2>
        <div className="text-sm text-neutral-600">
          <span className="mr-4">
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
          {work.company && <span>{work.company}</span>}
        </div>
      </div>
    </Link>
  );
}
