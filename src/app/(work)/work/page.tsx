"use client";

import { useSiteConfig } from "@/app/hooks";
import { Clock } from "../../components/clock";
import { BezierLine } from "../../components/bezier-line";
import { Card } from "../../components/card/card";
import Link from "next/link";
import { navItems } from "@/app/components/nav";
import Image from "next/image";
import { Marquee } from "@/app/components/marquee/marquee";

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
                  className={`absolute h-full w-full rounded-full ${config?.availabilityColorClassname}`}
                ></div>
                <div
                  className={`absolute animate-ping h-full w-full rounded-full ${config?.availabilityColorClassname}`}
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
      <div className="flex items-center mb-4 mt-8">
        <h2 className={`md:font-thin shrink-0 mr-4`}>I did</h2>
        <BezierLine />
      </div>
      <Link href={`work/works`}>
        <div className="flex w-full h-40 justify-center items-center relative group overflow-hidden cursor-pointer">
          <div className="w-full h-full blur-sm brightness-50 opacity-25 scale-110 group-hover:scale-[112%] duration-500">
            <Image
              alt="Selected works background"
              src="/images/bregenz-bewegt_landing-page-ui.webp"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <span className="text-lg font-semibold absolute group-hover">
            Selected works
          </span>
        </div>
      </Link>
      <div className="flex items-center mb-4 mt-8">
        <h2 className={`md:font-thin shrink-0 mr-4`}>I thank</h2>
        <BezierLine />
      </div>
      <div className="my-8">
        <Marquee pauseOnClick>
          <div className="flex gap-12 mr-12">
            {[
              {
                name: "Franz Morak",
                image: "/images/franz_morak_logo.png",
                url: "https://www.franzmorak.at",
              },
              {
                name: "Werner Grabher",
                image: "/images/werner_grabher_logo.png",
                url: "",
              },
              {
                name: "Schülerunion Vorarlberg",
                image: "/images/schuelerunion_vorarlberg_logo.png",
                url: "https://vbg.schuelerunion.at",
              },
              {
                name: "OJAD",
                image: "/images/ojad_logo.png",
                url: "https://www.ojad.at",
              },
              {
                name: "Eurest",
                image: "/images/eurest_logo.png",
                url: "https://www.eurest.at",
              },
              {
                name: "Alps BTE",
                image: "/images/alpsbte_logo.webp",
                url: "https://alps-bte.com",
              },
              {
                name: "Build The Earth",
                image: "/images/build_the_earth.gif",
                url: "https://buildtheearth.net",
              },
              {
                name: "Landeshauptstadt Bregenz",
                image: "/images/landeshauptstadt_bregenz_logo.png",
                url: "https://www.bregenz.gv.at",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="flex item-center"
                title={item.name}
                target="_blank"
              >
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  alt={item.name}
                  sizes="100vw"
                  className="h-12 w-auto contrast-50 grayscale brightness-150"
                />
              </a>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
