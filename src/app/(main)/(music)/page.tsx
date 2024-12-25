import { aktura, clash } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default async function Music() {
  return (
    <section>
      <Image
        src="/images/ostini_logo.png"
        width={1000}
        height={0}
        alt="Ostini logo"
        className="w-full h-auto object-contain mb-20"
      />
      <Link href="https://emubands.ffm.to/witchessimonostini">
        <h1
          className={`${aktura.className} font-semibold text-7xl text-center`}
          // style={{ color: "#ff8416" }}
        >
          Pre-save &quot;Witches&quot; now!
        </h1>
      </Link>
      <div className="flex justify-center h-16 mb-8">
        <Link href="https://simonostini.bandcamp.com/">
          <Image
            src="/images/icons/bc-logotype-light-512.png"
            width={300}
            height={500}
            alt="bandcamp logo"
            className="h-full w-auto"
          />
        </Link>
        <Link href="https://www.instagram.com/simon.ostini" className="m-4">
          <Image
            src="/images/icons/Instagram_Glyph_White.svg"
            width={300}
            height={500}
            alt="instagram logo"
            className="h-full w-auto"
          />
        </Link>
        <Link href="https://emubands.ffm.to/witchessimonostini" className="m-4">
          <Image
            src="/images/icons/Spotify_Primary_Logo_RGB_White.png"
            width={300}
            height={500}
            alt="spotify logo"
            className="h-full w-auto"
          />
        </Link>
        <Link href="https://simonostini.bandcamp.com/" className="m-3">
          <Image
            src="/images/icons/shopping_cart.svg"
            width={300}
            height={500}
            alt="shopping cart icon"
            className="h-full w-auto"
          />
        </Link>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/ostini_witches_mockup.png"
          width={1000}
          height={1000}
          alt="Ostini Witches album vinyl mockup"
          className="w-full max-w-full"
        />
      </div>
      <h2 className={`${aktura.className} font-semibold text-4xl mb-4`}>
        Biography
      </h2>
      <p className="prose-invert mb-8">
        Simon Ostini is a virtuosic rock guitarist from Austria with a fable for
        classical music and organ sounds. He started playing guitar at age 7. In
        his teenage years, he joined the local hard rock band StageFright,
        contributing to an album and an EP while also touring internationally.
        These early years shaped his musical foundation and ignited his drive to
        take playing guitar more seriously. After high school he moved to Sweden
        and recorded his solo album &quot;Witches&quot;. His main influences
        include glam metal bands such as Dokken and Slaughter, as well as
        guitarists Doug Aldrich, Marc Diglio, Satchel, Buckethead and Vinnie
        Vincent.
      </p>
    </section>
  );
}
