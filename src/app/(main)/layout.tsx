import type { Metadata } from "next";
import "../globals.scss";
import { Footer } from "../components/footer";
import { Navbar } from "../components/nav";
import { Background } from "../components/background/background";
import { switzer } from "../fonts";

export const metadata: Metadata = {
  title: "Simon Ostini - Creative Developer Portfolio",
  description: "Portfolio website of Creative Developer Simon Ostini",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${switzer.className} text-white min-h-screen antialiased max-w-4xl mb-20 flex mt-8 mx-auto bg-neutral-950`}
    >
      {/* <Cursor /> */}
      <Background />
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 mx-4">
        <Navbar />
        {children}
        <Footer />
      </main>
    </body>
  );
}
