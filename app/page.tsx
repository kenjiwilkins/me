"use client"
import Link from "next/link";
import "swiper/css";
import "./home.css"
import { useEffect, useState } from "react";
import { About } from "@/components/About";
export default function Home() {
  const [language, setLanguage] = useState<string>("en");
  useEffect(() => {
    const navigatorLanguage = navigator.language;
    if (navigatorLanguage.includes("ja")) {
      setLanguage("ja");
    } else {
      setLanguage("en");
    }
  }, [language])
  return (
    <main className="gradient overflow-y-scroll">
      <section id="home" className="min-h-screen w-full flex items-center justify-center">
        <Link href="/about" className="p-6 px-12 flex flex-col gap-4 border-2 border-gray-500 text-gray-500 hover:border-gray-100 hover:text-gray-100 active:border-gray-300 active:text-gray-300 rounded-lg transition-colors duration-500">
          <span className="text-4xl font-bold">Kenji Wilkins</span>
          <span className="text-2xl">A Software Developer</span>
          <span className="text-xl">A Problem Solver</span>
        </Link>
      </section>
      <About lang={language} />
    </main>
  );
}
