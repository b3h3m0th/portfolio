import type { Metadata } from "next";
import { Background } from "./components/background/background";

export const metadata: Metadata = {
  title: 'Simon Ostini - "WITCHES OUT NOW!"',
  description: 'Simon Ostini - "WITCHES OUT NOW!"',
  robots: {
    index: true,
    follow: true,
  },
};

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Cursor /> */}
      <Background />
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 mx-4">
        {children}
      </main>
    </>
  );
}
