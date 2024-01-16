import { Project } from "@/lib/types/project";
import Link from "next/link";
import { BezierLine } from "./bezier-line";

type ProjectItemProps = {
  project: Exclude<Project, "url">;
  lineTop?: boolean;
  lineBottom?: boolean;
};

export function ProjectItem({
  project,
  lineTop,
  lineBottom,
}: ProjectItemProps) {
  return (
    <Link href={`/projects/${project.id}`} className="work-item py-6">
      {lineTop && <BezierLine />}
      <div className="py-6">
        <h2 className="font-bold mb-1">{project.title}</h2>
        <div className="text-sm">
          <span className="mr-4">
            {`${
              project.startDate.getMonth() + 1
            }.${project.startDate.getFullYear()} — ${
              (project.endDate &&
                `${
                  project.endDate.getMonth() + 1
                }.${project.endDate.getFullYear()}`) ||
              "present"
            }`}
          </span>
        </div>
      </div>
      {lineBottom && <BezierLine />}
    </Link>
  );
}
