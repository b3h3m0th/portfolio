"use client";

import { cx } from "@/lib/utils/cx";
import WorkItem from "../components/work-item";
import WorkModal from "../components/work-modal";
import { Work, WorkTag } from "@/lib/types";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FilterTags = ["all", WorkTag.development, WorkTag.design];
const filterTags: FilterTags = ["all", WorkTag.development, WorkTag.design];

export default function Work() {
  const [workPosts, setWorkPosts] = useState<Work[] | null>(null);
  const [filter, setFilter] = useState<FilterTags[number]>("all");

  useEffect(() => {
    setWorkPosts(null);
    fetch("/api/work")
      .then((work) => work.json())
      .then((work: Work[]) => {
        filter === "all"
          ? setWorkPosts(work)
          : setWorkPosts(work.filter((w) => w.tags?.includes(filter)));
      });
  }, [filter]);

  return (
    <section>
      <h1 className="font-bold text-4xl mb-4">My Works</h1>
      <div className="flex gap-4 mb-8">
        {filterTags.map((t, i) => (
          <button
            className={`proserounded border-neutral-600 transition ease-in-out ${cx(
              {
                underline: filter === t,
              }
            )}`}
            key={`filter-${t}`}
            onClick={() => setFilter(t)}
          >
            {`#${t}`}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {workPosts ? (
          workPosts.map((w, i) => (
            <motion.div
              key={`work-${w.id}`}
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
                lineBottom={i === workPosts.length - 1}
              ></WorkItem>
            </motion.div>
          ))
        ) : (
          <span>Loading works...</span>
        )}
      </AnimatePresence>
      {workPosts && (
        <WorkModal
          works={workPosts.map((w) => ({ image: w.image, title: w.title }))}
        />
      )}
    </section>
  );
}
