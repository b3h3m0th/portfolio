import { getProjects } from "@/lib";
import ProjectItem from "../components/project-item";
import { clash } from "@/lib/fonts";

export default async function Projects() {
  const projectPosts = (await getProjects()) || [];

  return (
    <section>
      <h2 className={`${clash.className} font-bold text-4xl mb-4`}>My Works</h2>
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
