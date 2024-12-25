import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { switzer } from "@/app/fonts";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Simon Ostini",
  description: "Simon Ostini",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "./icon.png",
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
        className={`${switzer.className} text-white min-h-screen antialiased max-w-4xl mb-20 flex mt-8 mx-auto bg-neutral-950`}
      >
        {children}
      </body>
    </html>
  );
}
