import { getWorkPosts } from "@/lib";
import { Fragment } from "react";

export default async function Work() {
  const workPosts = (await getWorkPosts()) || [];

  return (
    <section>
      <h1 className="font-bold text-4xl mb-8">work</h1>
      <p>I wrote (lots of) code</p>
      {workPosts.map((w) => (
        <Fragment key={w.id}>
          <hr className="my-6 border-neutral-200" />
          <div key={w.id}>
            <h2 className="font-medium text-xl mb-1">{w.title}</h2>
            <p className="text-sm text-neutral-600 mb-8">
              {w.date.toLocaleDateString()}
            </p>
            <div dangerouslySetInnerHTML={{ __html: w.html }} />
          </div>
        </Fragment>
      ))}
      <div></div>
    </section>
  );
}
