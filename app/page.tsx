import Link from "next/link";
import "./home.css"
export default function Home() {
  return (
    <main className="gradient overflow-y-scroll">
      <section id="home" className="min-h-screen w-full flex items-center justify-center">
        <Link href="/about" className="p-6 px-12 flex flex-col gap-4 border-2 border-gray-500 text-gray-500 hover:border-gray-100 hover:text-gray-100 active:border-gray-300 active:text-gray-300 rounded-lg transition-colors duration-500">
          <span className="text-4xl font-bold">Kenji Wilkins</span>
          <span className="text-2xl">A Software Developer</span>
          <span className="text-xl">A Problem Solver</span>
        </Link>
      </section>
      <section id="about" className="min-h-screen w-full flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">About Me</h1>
        </div>
      </section>
    </main>
  );
}
