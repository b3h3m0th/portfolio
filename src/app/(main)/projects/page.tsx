import { getProjects } from "@/lib";
import { ProjectItem } from "@/app/components/project-item";
import { clash } from "@/app/fonts";

export default async function Projects() {
  const projectPosts = (await getProjects()) || [];

  return (
    <section>
      <h2 className={`${clash.className} font-semibold text-4xl mb-4`}>
        My Projects
      </h2>
      <p className="prose prose-invert mb-8">
        Some of the many personal projects I have worked on just for fun.
      </p>
      {projectPosts.map(({ sourceCode, ...post }, i) => (
        <ProjectItem
          project={post}
          key={`project-${i}`}
          lineTop
          lineBottom={i === projectPosts.length - 1}
        />
      ))}
    </section>
  );
}
