"use client";
import React, { FC, useState } from "react";
import { Menu, X } from "lucide-react";

interface Link {
  name: string;
  link: string;
}

const LINKS: Link[] = [
  { name: "ABOUT", link: "#about" },
  { name: "PROJECTS", link: "#project" },
  { name: "SKILLS", link: "#skills" },
  { name: "CONTACT", link: "#contact" },
];

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-4 z-50 px-4 ">
      <nav
        className="flex justify-between items-center px-4 py-4 bg-white/10 border border-[#cf84a0] rounded-xl shadow-md text-white backdrop-blur-md"
        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      >
        {/* Logo */}
        <h1 className="text-lg md:text-2xl font-bold">RIA'S PORTFOLIO.☘︎ ݁˖</h1>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {LINKS.map((link) => (
            <a key={link.name} href={link.link} className="hover:underline">
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white/10 border border-[#cf84a0] rounded-xl p-4 flex flex-col gap-3 text-white backdrop-blur-md">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="block py-2 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
