import { getWorkPosts } from "@/lib";
import Link from "next/link";

export default async function Home() {
  const workPosts = await getWorkPosts();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        👋 {`I'm Simon`}
      </h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {workPosts.length}
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href={"work"}>Work</Link>
      </div>
    </section>
  );
}
