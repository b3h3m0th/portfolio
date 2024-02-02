import Link from "next/link";
import { BezierLine } from "@/app/components/bezier-line";
import { MDX } from "@/app/components/mdx";
import { getProject, getProjects } from "@/lib";
import { redirect } from "next/navigation";
import { clash } from "@/app/fonts";

type ProjectDetailProps = {
  params: { id: string };
};

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const project = await getProject(params.id);
  const projects = await getProjects();
  if (!project) redirect("/projects");

  return (
    <section className="project-detail flex flex-col lg:flex-row gap-8">
      <div className="md:max-w-prose md:w-[65ch]">
        <Link
          className="prose prose-invert text-sm inline-block mb-6"
          href="/projects"
        >
          ← Back to overview
        </Link>
        <h1 className={`${clash.className} font-semibold text-4xl mb-2`}>
          {project.title}
        </h1>
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
        <div className="prose prose-invert pt-8">
          <MDX source={project.markdown}></MDX>
        </div>
      </div>
      <div className="flex-1 prose prose-invert">
        <h2 className="mb-2">More Projects</h2>
        <ul className="p-0">
          {projects
            .filter((p) => p.id !== project.id)
            .map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="no-underline block"
              >
                <li className={`p-1 list-none m-0`}>{p.title}</li>
              </Link>
            ))}
        </ul>
      </div>
    </section>
  );
}
