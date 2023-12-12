import { getWorkPosts } from "@/lib";
import WorkItem from "../components/work-item";

export default async function Work() {
  const workPosts = (await getWorkPosts()) || [];

  return (
    <section>
      <h1 className="font-bold text-4xl mb-8">My Work</h1>
      {workPosts.map((w) => (
        <WorkItem key={w.id} {...w}></WorkItem>
      ))}
      <div></div>
    </section>
  );
}
