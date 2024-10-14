import { clash } from "./fonts";

export default function Loading() {
  return (
    <section>
      <div className="h-[calc(100vh-12rem)] flex justify-center items-center">
        <h1
          className={`${clash.className} font-semibold text-4xl animate-spin`}
        >
          &#10022;
        </h1>
      </div>
    </section>
  );
}
