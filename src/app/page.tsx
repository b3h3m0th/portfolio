"use client";

import { useSiteConfig } from "@/app/hooks";
import { cx } from "@/app/utils/cx";
import { Clock } from "./components/clock";
import { BezierLine } from "./components/bezier-line";
import { Card } from "./components/card/card";

function getAge() {
  const birthdate = new Date(2003, 10, 22);
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const month = today.getMonth() - birthdate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  return age;
}

export default function Home() {
  const config = useSiteConfig();

  return (
    <section>
      <div className="h-[calc(100vh-15rem)] mb-24 flex flex-col justify-stretch items-stretch">
        <div className="relative w-full -mt-16 flex-1 flex flex-col justify-center">
          <div className="card absolute left-0 top-0 w-full h-full">
            <Card />
          </div>
        </div>
        <div className="mt-auto flex flex-col md:flex-row justify-between font-light">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold">Based in {config?.location}</p>
            <p className="md:font-thin">
              Local time - <Clock />
            </p>
          </div>
          <div className="text-center font-thin opacity-50 animate-bounce">
            {/* &darr; */}
          </div>
          <div className="flex flex-col justify-right">
            <div className="rounded-full flex items-center">
              <div className="relative h-2 w-2 mr-2">
                <div
                  className={`absolute h-full w-full rounded-full ${config?.availabilityColor}`}
                ></div>
                <div
                  className={`absolute animate-ping h-full w-full rounded-full ${config?.availabilityColor}`}
                ></div>
              </div>
              <span className="font-semibold">{config?.availability}</span>
            </div>
            <a
              href="mailto:simonostini@gmail.com"
              className="md:text-right md:font-thin hover:underline"
            >{`simonostini@gmail.com`}</a>
          </div>
        </div>
      </div>
      <div className={`mt-32 flex flex-col md:flex-row gap-8`}>
        <div className={`flex-1`}>
          <div className="flex items-center mb-4">
            <h2 className={`md:font-thin shrink-0 mr-4`}>I am</h2>
            <BezierLine />
          </div>
          <div className={`flex flex-col gap-4`}>
            <p className="text-justify">
              Simon Ostini, a {getAge()}-year-old creative developer from
              Austria also known as Behemoth over the internet. I design and
              develop cool stuff for amazing people. Sometimes as a freelancer.
              Sometimes not.
            </p>
          </div>
        </div>
        <div className={`flex-1`}>
          <div className="flex items-center mb-4">
            <h2 className={`md:font-thin shrink-0 mr-4`}>I like</h2>
            <BezierLine />
          </div>
          <div className={`flex flex-col gap-4`}>
            <p className="text-justify">
              {[
                "TypeScript",
                "React",
                ".NET",
                "80s Hard rock",
                "Vim",
                "Middle-earth",
                "Soccer",
                "Stack Overflow",
                "WebGL",
                "Open source",
                "Playing guitar",
                "Next.js",
                "Darts",
                "Obsidian",
                "Pizza",
                "Visual Studio Code",
                "Cats",
                "LaTeX",
                "Magic",
                "Sass",
                "Git",
              ].map((e, index, array) => (
                <span key={`like-${e}`}>
                  {e} {index !== array.length - 1 && <>&#10022; </>}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
