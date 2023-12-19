import { getProjectPosts } from "@/lib";
import ProjectItem from "../components/project-item";

export default async function Projects() {
  const projectPosts = (await getProjectPosts()) || [];

  return (
    <section>
      <h1 className="font-bold text-4xl mb-8">Projects</h1>
      {projectPosts.map(({ url, ...post }, i) => (
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
