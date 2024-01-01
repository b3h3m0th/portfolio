import { getProjects } from "@/lib";
import ProjectItem from "../components/project-item";

export default async function Projects() {
  const projectPosts = (await getProjects()) || [];

  return (
    <section>
      <h1 className="font-bold text-4xl mb-2">Projects</h1>
      <p className="mb-8">{`some of the many personal projects I have worked on just for fun.`}</p>
      {projectPosts.map(({ sourceCode, ...post }, i) => (
        <ProjectItem
          project={post}
          key={`project-${i}`}
          lineTop
          lineBottom={i === projectPosts.length - 1}
        />
      ))}
      <p className="mt-6">
        More to come, currently filling this page up with content...
      </p>
    </section>
  );
}
