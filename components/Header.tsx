"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

const navLinks = [
  { href: "#work", label: "WORK" },
  { href: "#stack", label: "STACK" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
];

export function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b-[3px] border-border-brutal bg-background p-4 md:p-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono uppercase tracking-wider hover:bg-gold px-2 py-1 transition-colors border-[3px] border-transparent hover:border-border-brutal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden border-[3px] border-border-brutal p-2 hover:bg-gold transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Dark mode toggle */}
        <div className="flex items-center gap-3">
          <span className="font-mono uppercase text-xs sm:text-sm hidden sm:inline">
            DARK MODE
          </span>
          <button
            onClick={toggleDarkMode}
            className="relative w-16 h-8 sm:w-20 sm:h-10 border-[3px] border-border-brutal bg-background"
            style={{
              boxShadow: darkMode
                ? "-4px -4px 0 0 #fff"
                : "4px 4px 0 0 #000",
            }}
            aria-label="Toggle dark mode"
          >
            <div
              className="absolute top-0 h-full w-1/2 bg-gold border-[3px] border-border-brutal transition-transform duration-300"
              style={{
                transform: darkMode ? "translateX(100%)" : "translateX(0)",
                boxShadow: "2px 2px 0 0 rgba(0,0,0,0.3)",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className="md:hidden mt-4 border-t-[3px] border-border-brutal pt-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono uppercase tracking-wider hover:bg-gold px-3 py-2 transition-colors border-[3px] border-transparent hover:border-border-brutal"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
