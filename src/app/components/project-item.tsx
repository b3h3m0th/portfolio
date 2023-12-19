import { ProjectPost } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import BezierLine from "./bezier-line";

type ProjectItemProps = {
  project: Exclude<ProjectPost, "url">;
  lineTop?: boolean;
  lineBottom?: boolean;
};

export default function ProjectItem({
  project,
  lineTop,
  lineBottom,
}: ProjectItemProps) {
  return (
    <Link href={`/projects/${project.id}`} className="work-item py-6">
      {lineTop && <BezierLine />}
      <div className="py-12">
        <h2 className="font-bold mb-1">{project.title}</h2>
        <div className="text-sm text-neutral-600">
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
