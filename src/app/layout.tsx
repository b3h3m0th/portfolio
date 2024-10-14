import type { Metadata } from "next";
import "./globals.scss";
import { Footer } from "./components/footer";
import { Cursor } from "./components/cursor";
import { Navbar } from "./components/nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { switzer } from "@/app/fonts";
import { Background } from "./components/background/background";

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
    <html lang="en">
      <SpeedInsights />
      <Analytics />
      {children}
    </html>
  );
}
