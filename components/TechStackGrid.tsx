"use client";
import { FC, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface TechItem {
  name: string;
  level: string;
  contents: string[];
}

interface Props {
  techstack: TechItem[];
}

function getTechStackImage(name: string) {
  const map: Record<string, string> = {
    "HTML": "/html5.svg",
    "CSS": "/css.svg",
    "JavaScript": "/javascript.png",
    "Vue.js": "/vuejs.svg",
    "React": "/react.svg",
    "Next.js": "/nextjs.png",
    "TypeScript": "/typescript.svg",
    "Node.js": "/nodejs.svg",
    "Tailwind CSS": "/tailwind.svg",
    "Sass": "/sass.png",
    "Cypress": "/cypress.svg",
    "Vitest": "/vitest.svg",
    "MongoDB": "/mongodb.svg",
    "PostgreSQL": "/postgresql.png",
    "Playwright": "/playwright.png",
    "Docker": "/docker.png",
    "Github Actions": "/github-actions.png",
    "AI Agents": "/claude.svg"
  };
  return `${basePath}${map[name] ?? `${basePath}/nextjs.png`}`;
}

function getLevelColor(level: string) {
  if (level === "Advanced" || level === "上級") return "bg-indigo-500/80 text-white";
  if (level === "Intermediate" || level === "中級") return "bg-blue-500/80 text-white";
  return "bg-gray-500/80 text-white";
}

export const TechStackGrid: FC<Props> = ({ techstack }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const selectedTech = selected !== null ? techstack[selected] : null;

  function handleSelect(i: number) {
    const next = selected === i ? null : i;
    setSelected(next);
    if (next !== null) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {techstack.map((tech, i) => (
          <button
            key={tech.name}
            onClick={() => handleSelect(i)}
            className={`group flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 ${
              selected === i
                ? "glass ring-1 ring-indigo-500/50 scale-105"
                : "hover:bg-white/5 hover:scale-105"
            }`}
          >
            <div className={`relative w-12 h-12 flex items-center justify-center transition-opacity ${
              selected !== null && selected !== i ? "opacity-40" : "opacity-100"
            }`}>
              <Image
                src={getTechStackImage(tech.name)}
                alt={tech.name}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className={`text-xs text-center transition-colors ${
              selected === i ? "text-white" : "text-gray-400 group-hover:text-gray-200"
            }`}>
              {tech.name}
            </span>
          </button>
        ))}
      </div>

      <div
        ref={detailRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          selectedTech ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {selectedTech && (
          <div className="glass rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Image
                  src={getTechStackImage(selectedTech.name)}
                  alt={selectedTech.name}
                  width={36}
                  height={36}
                />
                <h4 className="text-xl font-bold text-white">{selectedTech.name}</h4>
                <span className={`text-xs px-2.5 py-1 rounded-full ${getLevelColor(selectedTech.level)}`}>
                  {selectedTech.level}
                </span>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-white p-1 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <ul className="space-y-2">
              {selectedTech.contents.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-300">
                  <span className="text-indigo-400 mt-1 shrink-0">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
