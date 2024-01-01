import { GeistSans } from "geist/font/sans";
import { Cinzel, Playfair_Display, Roboto_Mono } from "next/font/google";

export const geist = GeistSans;
export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});
export const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
});
