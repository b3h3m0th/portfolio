import { getWorkPosts } from "@/lib";
import WorkItem from "../components/work-item";
import WorkModal from "../components/work-modal";

export default async function Work() {
  const workPosts = (await getWorkPosts()) || [];

  return (
    <section>
      <h1 className="font-bold text-4xl mb-8">My Work</h1>
      {workPosts.map((w, i) => (
        <div key={w.id}>
          <WorkItem
            work={{
              id: w.id,
              title: w.title,
              description: w.description,
              startDate: w.startDate,
              endDate: w.endDate,
              company: w.company,
            }}
            index={i}
            lineTop
            lineBottom={i === workPosts.length - 1}
          ></WorkItem>
        </div>
      ))}
      <WorkModal works={workPosts.map((w) => ({ image: w.image }))} />
    </section>
  );
}
