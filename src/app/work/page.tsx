import { getWorkPosts } from "@/lib";
import WorkItem from "../components/work-item";
import BezierLine from "../components/bezier-line";

export default async function Work() {
  const workPosts = (await getWorkPosts()) || [];

  return (
    <section>
      <h1 className="font-bold text-4xl mb-8">My Work</h1>
      {workPosts.map((w, i) => (
        <div className="my-8 pb-1" key={w.id}>
          <BezierLine />
          <WorkItem {...w}></WorkItem>
          {i === workPosts.length - 1 && <BezierLine />}
        </div>
      ))}
    </section>
  );
}
