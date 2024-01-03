import BezierLine from "@/app/components/bezier-line";
import { MDX } from "@/app/components/mdx";
import { getProject } from "@/lib";
import Link from "next/link";
import { redirect } from "next/navigation";

type ProjectDetailProps = {
  params: { id: string };
};

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const project = await getProject(params.id);
  if (!project) redirect("/projects");

  return (
    <section className="work-detail">
      <Link
        className="prose prose-invert text-sm inline-block mb-6"
        href="/projects"
      >
        ← Back to overview
      </Link>
      <h1 className="font-bold text-4xl mb-2">{project.title}</h1>
      <div className="text-sm prose prose-invert mb-12">
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
        {project.sourceCode && (
          <a
            href={project.sourceCode.href}
            className="ml-4 underline"
            target="_blank"
          >
            Source Code
          </a>
        )}
      </div>
      <BezierLine />
      <div className="prose prose-invert prose:sm pt-8">
        <MDX source={project.markdown}></MDX>
      </div>
    </section>
  );
}
