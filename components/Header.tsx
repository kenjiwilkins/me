"use client";
import { FC, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#experiences", label: "Experiences" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#blog", label: "Blog" },
]

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-500 ${scrolled ? "top-3" : "top-5"}`}>
      <nav className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"}`}>
        <a href="#home" className="text-white font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
          KW<span className="text-indigo-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={20} />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={closeMenu} />
          <div className="relative mt-4 mx-4 glass rounded-2xl p-6 flex flex-col gap-2">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-bold text-lg">KW<span className="text-indigo-400">.</span></span>
              <button onClick={closeMenu} className="text-gray-400 hover:text-white p-1 transition-colors">
                <X size={20} />
              </button>
            </div>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all text-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
