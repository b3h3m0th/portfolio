import { InstagramFeed } from "@/app/components/instagram-feed";
import { aktura } from "@/app/fonts";
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
      <Link href="https://open.spotify.com/artist/5Yf41IPX8ATChIp7e3bSVE">
        <h1
          className={`${aktura.className} font-semibold text-7xl text-center capitalize`}
        >
          &quot;Witches&quot; out now!
        </h1>
      </Link>
      <div className="flex justify-center h-16 mb-8">
        <Link
          href="https://open.spotify.com/artist/5Yf41IPX8ATChIp7e3bSVE"
          className="m-4"
        >
          <Image
            src="/images/icons/Spotify_Primary_Logo_RGB_White.png"
            width={300}
            height={500}
            alt="spotify logo"
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
        <Link href="https://simonostini.bandcamp.com/">
          <Image
            src="/images/icons/bc-logotype-light-512.png"
            width={300}
            height={500}
            alt="bandcamp logo"
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
      <h2 className={`${aktura.className} font-semibold text-4xl mb-4`}>
        Music
      </h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mb-8">
        {[
          "https://www.youtube.com/embed/HwUZK7yUZqc",
          "https://www.youtube.com/embed/HhXK9fxENE4",
          "https://www.youtube.com/embed/BZ34YpSBSoU"
        ].map((url) => (
          <div
            key={url}
            className="relative w-full pb-[56.25%] h-0 overflow-hidden"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
      <h2 className={`${aktura.className} font-semibold text-4xl mb-4`}>
        Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 mb-8">
        {new Array(10).fill(null).map((_, i) => (
          <div key={i} className="flex items-start">
            <Image
              src={`/images/music_gallery/simon_ostini_${i}.png`}
              width={1000}
              height={1000}
              alt="Simon Ostini photo"
              className="object-cover w-full h-full max-w-prose"
            />
          </div>
        ))}
      </div>
      <h2 className={`${aktura.className} font-semibold text-4xl mb-4`}>
        Biography
      </h2>
      <div className="prose prose-invert mb-8">
        <p>
          Simon Ostini is a rock guitarist from Austria known for his virtuosic
          and flashy playing. He started playing guitar at age 7. In his teenage
          years, he joined the local hard rock band StageFright, contributing to
          an album and an EP while also touring internationally. He quickly
          gained a strong reputation for his technical skills and began giving
          lessons to other players and reached a growing online audience. His
          technical skills quickly drew attention, leading to teaching
          opportunities and a growing online audience.
        </p>
        <p>
          By gaining attention online through occasional publication of guitar
          videos, he was invited to several collaborations from brands,
          including Marshall Amps and Polychrome DSP. These early years shaped
          his musical foundation and ignited his drive to take playing guitar
          more seriously.
        </p>
        <p>
          After graduating high school he moved to Sweden where he recorded and
          released his solo album &quot;Witches&quot;. He began working as a
          session guitarist, taking part in various projects and appearing as a
          featured artist on the debut album of the Swiss metal band{" "}
          <a href="https://www.youtube.com/@IWontSkye">I Won&apos;t Skye</a>. In
          August 2025, Simon Ostini joined the German metal band{" "}
          <a href="https://de.wikipedia.org/wiki/Ela_(Band)">ELA</a> and
          contributed guitar work to their upcoming sixth studio album. His main
          influences include guitarists John Sykes, Doug Aldrich, Satchel,
          Buckethead and Vinnie Vincent.
        </p>
      </div>
      <div className="mt-20 mb-20">
        <InstagramFeed />
      </div>
      <h2 className={`${aktura.className} font-semibold text-4xl mb-4`}>
        Impressum
      </h2>
      <div className="flex flex-col">
        <span>&copy; Simon Ostini</span>
        <span>Fästningsgatan 2B</span>
        <span>291 34 Kristianstad</span>
        <span>Sweden</span>
        <a
          href="mailto:simonostini@gmail.com"
          className="prose prose-invert hover:underline"
        >{`simonostini@gmail.com`}</a>
      </div>
    </section>
  );
}
