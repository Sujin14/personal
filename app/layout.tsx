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

const SITE_URL = "https://personalwork-ten.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Something for you",
  description: "Open when you have a few minutes. Best with headphones—and an open heart.",
  openGraph: {
    url: SITE_URL,
    title: "Something for you",
    description: "Open when you have a few minutes. Best with headphones—and an open heart.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Something for you",
    description: "Open when you have a few minutes. Best with headphones—and an open heart.",
  },
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
