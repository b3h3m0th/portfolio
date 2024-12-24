import { clash } from "@/app/fonts";
import Image from "next/image";

export default async function Music() {
  return (
    <section>
      <Image
        src="/images/ostini_logo.png"
        width={1000}
        height={0}
        alt="Ostini logo"
        className="w-full h-full object-contain"
      />
      <h2 className={`${clash.className} font-semibold text-4xl mb-4`}>
        Music
      </h2>
      <p className="prose prose-invert mb-8">Music</p>
    </section>
  );
}
