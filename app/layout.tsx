import type { Metadata } from "next";
import { Playfair_Display, Lato, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Cupid's Heart - A 13 Year Love Story",
  description: "A journey through 13 years of love, from cupid's birth to a heartfelt proposal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} ${dancing.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
