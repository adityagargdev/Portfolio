"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Life", href: "#life" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F5F0]/90 backdrop-blur-md border-b border-[#D8D8D3]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-32 h-16">
        <span className="font-bold text-lg tracking-tight text-[#1A1A1A]">AG</span>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:adityacharchitgarg@gmail.com"
          className="text-sm px-4 py-2 rounded-full border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F5F0] transition-all duration-200"
        >
          Say hi
        </a>
      </div>
    </nav>
  );
}
