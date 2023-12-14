import { WorkPost } from "@/types";
import Link from "next/link";

export default function WorkItem(work: WorkPost) {
  return (
    <Link href={`/work/${work.id}`} className="work-item py-6" key={work.id}>
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
        {/**<div
          className="prose prose-neutral prose:sm"
          dangerouslySetInnerHTML={{ __html: work.html }}
        ></div>*/}
      </div>
    </Link>
  );
}
