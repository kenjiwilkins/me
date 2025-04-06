"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface Link {
  href: string;
  label: string;
}

const links: Link[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experiences", label: "Experiences" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
]

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className="bg-gray-900 opacity-90 text-white p-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center gap-2">
        <Link href="/">
          <span className="text-2xl font-bold flex gap-1">
            <span className="hidden md:inline">Michael</span>
            <span>Kenji</span>
            <span className="hidden sm:inline">Wilkins</span>
          </span>
        </Link>
        <ul className="space-x-4 hidden sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <button className="sm:hidden" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </nav>
      {isMenuOpen && (
        <ul className="absolute top-0 left-0 w-full z-20 h-screen bg-gray-900 opacity-90 flex flex-col items-center justify-center space-y-4">
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <X size={24} />
          </button>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}