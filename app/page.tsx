import "./home.css"
export default function Home() {
  return (
    <div className="h-[calc(100vh-4rem)] gradient">
      <main className="h-full flex items-center justify-center">
        <button className="p-6 px-12 flex flex-col gap-4 border-2 border-gray-500 text-gray-500 hover:border-gray-100 hover:text-gray-100 active:border-gray-300 active:text-gray-300 rounded-lg transition-colors duration-500">
          <span className="text-4xl font-bold">Kenji Wilkins</span>
          <span className="text-2xl">A Software Developer</span>
          <span className="text-xl">A Problem Solver</span>
        </button>
      </main>
    </div>
  );
}
