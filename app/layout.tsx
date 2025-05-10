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
        url: "/profile.jpeg",
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
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-y-scroll`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
