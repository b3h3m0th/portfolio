import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Footer } from "./components/footer";
import Cursor from "./components/cursor";
import { Navbar } from "./components/nav";

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
      <body
        className={`${GeistSans.className} antialiased max-w-2xl mb-20 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto`}
      >
        {/*         <Cursor /> */}
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
