import { getProjectPosts } from "@/lib";
import ProjectItem from "../components/project-item";

export default async function Projects() {
  const projectPosts = (await getProjectPosts()) || [];

  return (
    <section>
      <h1 className="font-bold text-4xl mb-8">Projects</h1>
      {projectPosts.map(({ sourceCode, ...post }, i) => (
        <ProjectItem
          project={post}
          key={`project-${i}`}
          lineTop
          lineBottom={i === projectPosts.length - 1}
        />
      ))}
      <p className="prose mt-6">
        More to come, currently filling this page up with content.
      </p>
    </section>
  );
}
