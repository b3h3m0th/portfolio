import Image from "next/image";
import Link from "next/link";

export default async function NotFound() {
  return (
    <section>
      <div className="flex mb-8 items-center">
        <h1 className="font-semibold text-4xl">{`404 - I think you got lost`}</h1>
      </div>
      <Link href="/">← Back to home</Link>
    </section>
  );
}
