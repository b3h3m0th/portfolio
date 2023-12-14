import { getWorkPosts } from "@/lib";
import WorkItem from "../components/work-item";
import Line from "../components/line";

export default async function Work() {
  const workPosts = (await getWorkPosts()) || [];

  return (
    <section>
      <h1 className="font-bold text-4xl mb-8">My Work</h1>
      {workPosts.map((w) => (
        <div className="my-8" key={w.id}>
          <Line />
          <WorkItem {...w}></WorkItem>
        </div>
      ))}
    </section>
  );
}
