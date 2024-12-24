import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV - Simon Ostini - Creative Developer Portfolio",
  description: "CV - Simon Ostini - Creative Developer",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return <div className="fixed h-screen w-screen left-0 top-0">{children}</div>;
}
