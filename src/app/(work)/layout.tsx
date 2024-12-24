import type { Metadata } from "next";
import "../globals.scss";
import { Footer } from "../components/footer";
import { Navbar } from "../components/nav";
import { Background } from "../components/background/background";
import { switzer } from "../fonts";
import { Cursor } from "../components/cursor";

export const metadata: Metadata = {
  title: "Simon Ostini - Creative Developer Portfolio",
  description: "Portfolio website of Creative Developer Simon Ostini",
  robots: {
    index: true,
    follow: true,
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Cursor /> */}
      <Background />
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 mx-4">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
