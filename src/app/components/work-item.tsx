import { WorkPost } from "@/types";
import BezierLine from "./bezier-line";

export default function WorkItem(work: WorkPost) {
  return (
    <div className="work-item" key={work.id}>
      {/** <hr className="my-6 border-neutral-300" /> */}
      <div className="py-6" key={work.id}>
        <h2 className="font-bold text-xl mb-1">{work.title}</h2>
        <div className="mb-8 text-sm text-neutral-600">
          {work.url && (
            <a className="mr-4 underline" href={work.url.href} target="_blank">
              {work.url.hostname}
            </a>
          )}
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
        </div>
        {/**<div
          className="prose prose-neutral prose:sm"
          dangerouslySetInnerHTML={{ __html: work.html }}
        ></div>*/}
      </div>
    </div>
  );
}
