import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "APP Home Plans | Construction Company in Nilgiris & Wayanad",

  description:
    "APP Home Plans delivers villas, modern homes, commercial buildings, interiors and renovations across Nilgiris and Wayanad with over 20 years of experience.",

  keywords: [
    "construction company",
    "villa construction",
    "Nilgiris builders",
    "Wayanad builders",
    "APP Home Plans",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
