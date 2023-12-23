import BezierLine from "@/app/components/bezier-line";
import { MDX } from "@/app/components/mdx";
import { getWorkPost } from "@/lib";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { redirect } from "next/navigation";

type WorkDetailPost = {
  params: { id: string };
};

export default async function WorkDetail({ params }: WorkDetailPost) {
  const work = await getWorkPost(params.id);
  if (!work) redirect("/work");

  return (
    <section className="work-detail">
      <Link className="prose inline-block text-sm mb-6" href="/work">
        ← Back to overview
      </Link>
      <h1 className="font-bold text-4xl mb-2">{work.title}</h1>
      <div className="text-sm text-neutral-600 mb-12">
        <span className="mr-4">
          {`${
            work.startDate.getMonth() + 1
          }.${work.startDate.getFullYear()} — ${
            (work.endDate &&
              `${work.endDate.getMonth() + 1}.${work.endDate.getFullYear()}`) ||
            "present"
          }`}
        </span>
        {work.url ? (
          <a href={work.url.href} className="ml-4 underline" target="_blank">
            {work.url.hostname}
          </a>
        ) : (
          <span className="ml-4">{work.company}</span>
        )}
        {work.tags && (
          <div className="inline-block ml-8">
            {work.tags.map((t) => (
              <span className="mr-2" key={`tag-${t}`}>
                {`#${t}`}
              </span>
            ))}
          </div>
        )}
      </div>
      <BezierLine />
      <div className="prose prose-neutral prose:sm pt-8">
        <MDX source={work.markdown}></MDX>
      </div>
    </section>
  );
}
