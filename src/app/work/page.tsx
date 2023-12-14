import { getWorkPosts } from "@/lib";
import WorkItem from "../components/work-item";
import BezierLine from "../components/bezier-line";
import WorkModal from "../components/work-modal";

export default async function Work() {
  const workPosts = (await getWorkPosts()) || [];

  return (
    <section>
      <h1 className="font-bold text-4xl mb-8">My Work</h1>
      {workPosts.map((w, i) => (
        <div key={w.id}>
          <BezierLine />
          <WorkItem work={w} index={i}></WorkItem>
          {i === workPosts.length - 1 && <BezierLine />}
        </div>
      ))}
      <WorkModal works={workPosts} />
    </section>
  );
}
