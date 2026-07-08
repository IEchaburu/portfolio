"use client";

import { Github, Lock } from "lucide-react";
import { useState } from "react";

export function PrivateRepoButton() {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      type="button"
      aria-label="Repository is private"
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onClick={() => setRevealed(true)}
      className="w-full font-mono uppercase px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm bg-background border-[3px] border-border-brutal hover:bg-foreground/5 transition-colors flex items-center justify-center gap-1.5 sm:gap-2 shadow-[4px_4px_0_0_var(--shadow-color)] cursor-default"
    >
      {revealed ? (
        <>
          <Lock size={14} className="sm:hidden" />
          <Lock size={16} className="hidden sm:block" />
          <span>PRIVATE REPO</span>
        </>
      ) : (
        <>
          <Github size={14} className="sm:hidden" />
          <Github size={16} className="hidden sm:block" />
          <span className="hidden sm:inline">READ CODE</span>
          <span className="sm:hidden">CODE</span>
        </>
      )}
    </button>
  );
}
