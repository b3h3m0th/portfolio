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
        className="w-full h-auto object-contain"
      />
      <h2 className={`${clash.className} font-semibold text-4xl mb-4`}>
        Biography
      </h2>
      <p className="prose prose-invert mb-8">
        Simon Ostini is a virtuosic rock guitarist from Austria with a fable for
        classical music and organ sounds. He started playing guitar at age 7. In
        his teenage years, he joined the local hard rock band StageFright,
        contributing to an album and an EP while also touring internationally.
        These early years shaped his musical foundation and ignited his drive to
        take playing guitar more seriously. After high school he moved to Sweden
        to record his solo album &quot;Witches&quot;. His main influences
        include glam metal bands such as Dokken and Slaughter, as well as
        guitarists Doug Aldrich, Marc Diglio, Satchel, Buckethead and Vinnie
        Vincent.
      </p>
    </section>
  );
}
