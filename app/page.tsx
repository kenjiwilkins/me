"use client"
import Image from "next/image";
import "swiper/css";
import "./home.css"
import { useEffect, useState } from "react";
import { About } from "@/components/About";
import { Experiences } from "@/components/Experiences";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Blog } from "@/components/Blog";

export default function Home() {
  const [language, setLanguage] = useState<string>("en");
  useEffect(() => {
    const navigatorLanguage = navigator.language;
    if (navigatorLanguage.includes("ja")) {
      setLanguage("ja");
    } else {
      setLanguage("en");
    }
  }, [])
  return (
    <main className="gradient w-full">
      <section id="home" className="min-h-screen w-full flex items-center justify-center px-4">
        <div className="glass rounded-2xl p-10 md:p-16 max-w-2xl w-full flex flex-col items-center gap-6 text-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-md opacity-60" />
            <Image
              src="/profile.jpeg"
              alt="Kenji Wilkins"
              width={160}
              height={160}
              className="relative rounded-full border-2 border-white/10"
            />
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white">Kenji Wilkins</h1>
            <p className="text-xl md:text-2xl text-gray-400">Software Developer</p>
          </div>
          <p className="text-gray-400 text-sm max-w-md">Frontend engineer specializing in React & Vue.js, building high-quality web experiences.</p>
          <a
            href="#about"
            className="mt-2 px-8 py-3 rounded-lg bg-indigo-500/80 hover:bg-indigo-500 backdrop-blur-sm text-white font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Learn More
          </a>
        </div>
      </section>
      <About lang={language} />
      <Experiences lang={language} />
      <Projects lang={language} />
      <Contact lang={language} />
      <Blog lang={language} />
      <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Kenji Wilkins. All rights reserved.
      </footer>
    </main>
  );
}
