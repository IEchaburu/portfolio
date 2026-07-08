import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectImageCarousel } from "@/components/ProjectImageCarousel";
import { PrivateRepoButton } from "@/components/PrivateRepoButton";

export function ProjectCard({ title, imageUrls, sections, techStack, liveUrl, githubUrl }: Project) {
  const hasLive = Boolean(liveUrl && liveUrl !== "#");
  const hasRepo = Boolean(githubUrl && githubUrl !== "#");

  return (
    <div className="border-[3px] border-border-brutal bg-background shadow-[6px_6px_0_0_var(--shadow-color)]">
      <div className="border-b-[3px] border-border-brutal relative h-48 sm:h-64">
        <ProjectImageCarousel images={imageUrls} alt={title} />
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="font-mono text-xl sm:text-2xl uppercase mb-4 sm:mb-6">{title}</h3>

        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          {sections.map((section) => (
            <div key={section.label}>
              <div className="font-mono text-xs uppercase text-gold mb-1">
                {section.label.toUpperCase()}
              </div>
              <p className={`font-mono text-xs sm:text-sm ${section.emphasis ? "font-bold" : ""}`}>
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] sm:text-xs uppercase px-2 sm:px-3 py-1 border-[2px] border-border-brutal"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className={`grid ${hasLive ? "grid-cols-2" : "grid-cols-1"} gap-2 sm:gap-4`}>
          {hasLive && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono uppercase px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm bg-gold text-black border-[3px] border-border-brutal hover:bg-neon-green transition-colors flex items-center justify-center gap-1.5 sm:gap-2 shadow-[4px_4px_0_0_var(--gold)]"
            >
              <ExternalLink size={14} className="sm:hidden" />
              <ExternalLink size={16} className="hidden sm:block" />
              <span className="hidden sm:inline">LIVE DEMO</span>
              <span className="sm:hidden">DEMO</span>
            </a>
          )}

          {hasRepo ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono uppercase px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm bg-background border-[3px] border-border-brutal hover:bg-foreground/5 transition-colors flex items-center justify-center gap-1.5 sm:gap-2 shadow-[4px_4px_0_0_var(--shadow-color)]"
            >
              <Github size={14} className="sm:hidden" />
              <Github size={16} className="hidden sm:block" />
              <span className="hidden sm:inline">READ CODE</span>
              <span className="sm:hidden">CODE</span>
            </a>
          ) : (
            <PrivateRepoButton />
          )}
        </div>
      </div>
    </div>
  );
}
