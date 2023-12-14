import { getWorkPost } from "@/lib";
import Link from "next/link";

export default async function WorkDetail({
  params,
}: {
  params: { id: string };
}) {
  const work = await getWorkPost(params.id);

  return (
    <section className="work-detail">
      <Link className="inline-block mb-6" href="/work">
        ← Back to overview
      </Link>
      <h1 className="font-bold text-4xl mb-2">{work.title}</h1>
      <div className="text-sm text-neutral-600">
        <span className="mr-4">
          {`${
            work.startDate.getMonth() + 1
          }.${work.startDate.getFullYear()} — ${
            (work.endDate &&
              `${work.endDate.getMonth() + 1}.${work.endDate.getFullYear()}`) ||
            "present"
          }`}
        </span>
        {work.url && (
          <a href={work.url.href} className="ml-4 underline" target="_blank">
            {work.url.hostname}
          </a>
        )}
      </div>
    </section>
  );
}
