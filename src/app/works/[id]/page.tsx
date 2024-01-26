import Link from "next/link";
import { BezierLine } from "@/app/components/bezier-line";
import { MDX } from "@/app/components/mdx";
import { getWork } from "@/lib";
import { redirect } from "next/navigation";
import { clash } from "@/app/fonts";

type WorkDetailPost = {
  params: { id: string };
};

export default async function WorkDetail({ params }: WorkDetailPost) {
  const work = await getWork(params.id);
  if (!work) redirect("/works");

  return (
    <section className="work-detail">
      <Link
        className="prose prose-invert inline-block text-sm mb-6"
        href="/works"
      >
        ← Back to overview
      </Link>
      <h1 className={`${clash.className} font-semibold text-4xl mb-2`}>
        {work.title}
      </h1>
      <div className="text-sm prose prose-invert mb-12">
        <span>
          {`${
            work.startDate.getMonth() + 1
          }.${work.startDate.getFullYear()} — ${
            (work.endDate &&
              `${work.endDate.getMonth() + 1}.${work.endDate.getFullYear()}`) ||
            "present"
          }`}
        </span>
        {work.url ? (
          <a href={work.url.href} className="ml-8 underline" target="_blank">
            {work.url.hostname}
          </a>
        ) : (
          work.company && <span className="ml-8">{work.company}</span>
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
      <div className="prose prose-invert prose:sm pt-8">
        <MDX source={work.markdown}></MDX>
      </div>
    </section>
  );
}
