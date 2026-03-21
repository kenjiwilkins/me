import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenji Wilkins - Software Developer",
  description: "A portfolio website for Kenji Wilkins, a software developer.",
  openGraph: {
    title: "Kenji Wilkins - Software Developer",
    description: "A portfolio website for Kenji Wilkins, a software developer.",
    url: "https://kenjiwilkins.com",
    siteName: "Kenji Wilkins",
    images: [
      {
        url: `${process.env.PAGES_BASE_PATH ?? ""}/profile.jpeg`,
        width: 800,
        height: 800,
        alt: "Kenji Wilkins"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative m-0 min-h-screen overflow-scroll bg-black text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
