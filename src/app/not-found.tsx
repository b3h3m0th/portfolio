import Image from "next/image";
import Link from "next/link";

export default async function NotFound() {
  return (
    <section>
      <div className="flex mb-8 items-center">
        <Image
          className="inline mr-4"
          src="/images/face-with-monocle_1f9d0.webp"
          alt="face with monocle emoji"
          height={64}
          width={64}
        ></Image>
        <h1 className="font-bold text-4xl">{`404 - I think you got lost`}</h1>
      </div>
      <Link href="/">← Back to home</Link>
    </section>
  );
}
