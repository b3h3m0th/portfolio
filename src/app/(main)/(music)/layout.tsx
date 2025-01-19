import { Background } from "@/app/components/background/background";
import type { Metadata } from "next";
import "./globals.music.scss";

export const metadata: Metadata = {
  title: "Simon Ostini | Guitarist | Official Website",
  description:
    'Simon Ostini | Guitarist | Official Website - "WITCHES" OUT NOW!',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/ostini_witches_cover.png",
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
      <Background
        image={{
          src: "/images/ostini_witches_cover_plain.png",
          alt: "baroque wallpaper",
          classname: "opacity-20",
        }}
      />
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 mx-4 music">
        {children}
      </main>
    </>
  );
}
