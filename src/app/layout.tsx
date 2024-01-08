import type { Metadata } from "next";
import "./globals.scss";
import { Footer } from "./components/footer";
import Cursor from "./components/cursor";
import { Navbar } from "./components/nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { switzer } from "@/app/fonts";
import { Background } from "./components/background/background";

export const metadata: Metadata = {
  title: "Simon Ostini - Portfolio",
  description: "Portfolio website of Simon Ostini",
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
    <html lang="en">
      <SpeedInsights />
      <Analytics />
      <body
        className={`${switzer.className} text-white min-h-[100vh] antialiased max-w-4xl mb-20 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto`}
      >
        <Cursor />
        <Background />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
