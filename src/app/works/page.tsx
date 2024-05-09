"use client";

import { cx } from "@/app/utils/cx";
import { WorkItem } from "../components/work-item";
import { type Work, WorkTag } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWorksModal } from "@/app/stores";
import { clash } from "@/app/fonts";
import { useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Loading from "../loading";

const WorkModal = dynamic(() =>
  import("../components/work-modal/work-modal").then((m) => m.WorkModal)
);

type Tags = ["all", WorkTag.development, WorkTag.design];
const tags: Tags = ["all", WorkTag.development, WorkTag.design];

enum View {
  List = "list",
  Block = "block",
}
const viewSearchParamKey = "view";

export default function Work() {
  const [works, setWorks] = useState<Work[] | null>(null);
  const [tag, setTag] = useState<Tags[number]>("all");
  const setModal = useWorksModal((state) => state.setModal);
  const searchParams = useSearchParams();
  const router = useRouter();

  let view = searchParams.get(viewSearchParamKey);

  if (!view || !Object.values<string>(View).includes(view)) {
    view = View.List;
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setWorks(null);
    fetch("/api/works")
      .then((w) => w.json())
      .then((w: Work[]) => {
        tag === "all"
          ? setWorks(w)
          : setWorks(w.filter((w) => w.tags?.includes(tag)));
      });
  }, [tag]);

  useEffect(() => {
    if (view) {
      router.replace(`/works?${createQueryString(viewSearchParamKey, view)}`);
    }
  }, [view, router, createQueryString]);

  return (
    <section>
      <h2 className={`${clash.className} font-semibold text-4xl mb-4`}>
        My Works
      </h2>
      <div className="flex flex-wrap justify-between mb-8 gap-4">
        <div className="flex gap-4">
          {tags.map((t) => (
            <button
              className={`proserounded border-neutral-600 transition ease-in-out ${cx(
                {
                  "opacity-100": tag === t,
                  "opacity-25": tag !== t,
                }
              )}`}
              key={`filter-${t}`}
              onClick={() => setTag(t)}
            >
              {`#${t}`}
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-4 mr-2">
          <Link
            href={`/works?${createQueryString(viewSearchParamKey, View.List)}`}
            className={`w-[26px] flex flex-col gap-0.5 justify-center cursor-pointer opacity-${
              view === View.List ? "100" : "25"
            } md:hover:opacity-100`}
          >
            {new Array(3).fill(null).map((_, i) => (
              <div key={`list-${i}`} className="w-full flex-1 bg-white"></div>
            ))}
          </Link>
          <Link
            href={`/works?${createQueryString(viewSearchParamKey, View.Block)}`}
            className={`cursor-pointer grid grid-cols-2 grid-rows-2 gap-0.5 opacity-${
              view === View.Block ? "100" : "25"
            } md:hover:opacity-100`}
          >
            {new Array(4).fill(null).map((_, i) => (
              <div key={`block-${i}`} className="h-3 w-3 bg-white"></div>
            ))}
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {works ? (
          view === View.List ? (
            works.map((w, i) => (
              <motion.div
                key={`work-list-${w.id}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.2, 1, 0.7, 1],
                  delay: 0.1 * i,
                }}
              >
                <WorkItem
                  work={{
                    id: w.id,
                    title: w.title,
                    description: w.description,
                    startDate: new Date(w.startDate),
                    endDate: w.endDate && new Date(w.endDate),
                    company: w.company,
                    tags: w.tags,
                  }}
                  index={i}
                  lineTop
                  lineBottom={i === works.length - 1}
                  onClick={() => setModal({ active: false, index: 0 })}
                ></WorkItem>
              </motion.div>
            ))
          ) : (
            <div className="columns-1 md:columns-2 gap-8">
              {works.map((w, i) => (
                <motion.div
                  key={`work-block-${w.id}`}
                  initial={{ opacity: 0, y: 30, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.2, 1, 0.7, 1],
                    delay:
                      0.1 *
                      ((half) => (i >= half ? i - half : i))(works.length / 2),
                  }}
                  className="mb-8 cursor-pointer"
                >
                  <Link href={`/works/${w.id}`}>
                    {w.image && (
                      <Image
                        src={w.image}
                        alt={w.title}
                        width={700}
                        height={0}
                        className="w-full h-auto"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          )
        ) : (
          <Loading />
        )}
      </AnimatePresence>
      {works && view === View.List && (
        <WorkModal
          works={works.map((w) => ({ image: w.image, title: w.title }))}
        />
      )}
    </section>
  );
}
