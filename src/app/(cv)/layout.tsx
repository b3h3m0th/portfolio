import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV - Simon Ostini - Creative Developer Portfolio",
  description: "CV of Creative Developer Simon Ostini",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
