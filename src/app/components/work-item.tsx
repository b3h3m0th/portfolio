import { WorkPost } from "@/types";
import { Fragment } from "react";

export default function WorkItem(work: WorkPost) {
  return (
    <Fragment key={work.id}>
      <hr className="my-6 border-neutral-200" />
      <div key={work.id}>
        <h2 className="font-medium text-xl mb-1">{work.title}</h2>
        <p className="text-sm text-neutral-600 mb-8">
          {`${work.startDate.toLocaleDateString()} - ${
            work.endDate?.toLocaleDateString() || "present"
          }`}
        </p>
        <div dangerouslySetInnerHTML={{ __html: work.html }} />
      </div>
    </Fragment>
  );
}
