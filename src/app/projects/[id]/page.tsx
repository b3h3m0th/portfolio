import BezierLine from "@/app/components/bezier-line";
import { getProjectPost } from "@/lib";
import Link from "next/link";
import { redirect } from "next/navigation";

type ProjectDetailProps = {
  params: { id: string };
};

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const project = await getProjectPost(params.id);
  if (!project) redirect("/projects");

  return (
    <section className="work-detail">
      <Link className="inline-block mb-6" href="/projects">
        ← Back to overview
      </Link>
      <h1 className="font-bold text-4xl mb-2">{project.title}</h1>
      <div className="text-sm text-neutral-600 mb-12">
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
        {project.url && (
          <a href={project.url.href} className="ml-4 underline" target="_blank">
            {project.url.hostname}
          </a>
        )}
      </div>
      <BezierLine />
      <div
        className="prose prose-neutral prose:sm pt-8"
        dangerouslySetInnerHTML={{ __html: project.html }}
      ></div>
    </section>
  );
}
