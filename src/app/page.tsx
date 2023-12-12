import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1 className="font-bold text-4xl mb-8 flex items-center">
        <Image
          className="inline mr-4"
          src="/sign-of-the-horns_1f918.webp"
          alt="sign of the horns emoji"
          height={64}
          width={64}
        ></Image>
        <span>{`hi, I'm Simon`}</span>
      </h1>
      <p className="mb-8">I write (lots of) code.</p>
      <a href="https://stackoverflow.com/users/12834972/behemoth">
        <Image
          src="https://stackoverflow.com/users/flair/12834972.png"
          width="208"
          height="58"
          alt="profile for Behemoth at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
          title="profile for Behemoth at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
          priority={false}
          placeholder="empty"
        />
      </a>
    </section>
  );
}
