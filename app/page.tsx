import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { TechStack } from "@/components/TechStack";
import { HumanAI } from "@/components/HumanAI";
import { ContactDetails } from "@/components/ContactDetails";
import { Footer } from "@/components/Footer";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-mono">
      <Header />
      <Hero />

      <section
        id="work"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 border-t-[3px] border-border-brutal"
      >
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl uppercase mb-8 md:mb-12">
          CASE STUDIES / DEEP DIVE
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <TechStack />
      <HumanAI />
      <ContactDetails />
      <Footer />
    </div>
  );
}
