"use client";

import { useTheme } from "@/components/theme/ThemeProvider";

const navLinks = [
  { href: "#work", label: "WORK" },
  { href: "#stack", label: "STACK" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
];

export function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="border-b-[3px] border-border-brutal bg-background p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <nav className="flex gap-8">
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

        <div className="flex items-center gap-3">
          <span className="font-mono uppercase text-sm">DARK MODE</span>
          <button
            onClick={toggleDarkMode}
            className="relative w-20 h-10 border-[3px] border-border-brutal bg-background"
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
    </header>
  );
}
