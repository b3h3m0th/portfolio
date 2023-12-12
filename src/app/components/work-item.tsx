import { WorkPost } from "@/types";
import { Fragment } from "react";

export default function WorkItem(work: WorkPost) {
  return (
    <Fragment key={work.id}>
      <hr className="my-6 border-neutral-200" />
      <div key={work.id}>
        <h2 className="font-medium text-xl mb-1">{work.title}</h2>
        <div className="mb-8 text-sm text-neutral-600">
          {work.url && (
            <a className="mr-4" href={work.url.href}>
              {work.url.hostname}
            </a>
          )}
          <span>
            {`${work.startDate.toLocaleDateString()} — ${
              work.endDate?.toLocaleDateString() || "present"
            }`}
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: work.html }} />
      </div>
    </Fragment>
  );
}
