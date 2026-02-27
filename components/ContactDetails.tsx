import { Mail, Github, Linkedin, Download, ArrowUpRight } from "lucide-react";
import { contactCards, type ContactCard } from "@/content/contact";

const iconMap = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  download: Download,
} as const;

function Card({ card }: { card: ContactCard }) {
  const Icon = iconMap[card.icon];

  return (
    <a
      href={card.link}
      target={card.link.startsWith("http") ? "_blank" : undefined}
      rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group block border-[3px] border-border-brutal p-5 sm:p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-gold shadow-[6px_6px_0_0_var(--shadow-color)] ${
        card.inverted
          ? "bg-foreground text-background"
          : "bg-background text-foreground"
      }`}
    >
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider opacity-60 group-hover:text-black transition-colors">
          {card.label}
        </span>
        <ArrowUpRight
          size={18}
          className="transition-colors group-hover:text-black flex-shrink-0 ml-2"
        />
      </div>

      <div className="flex items-center gap-3 sm:gap-4 font-mono text-sm sm:text-lg group-hover:text-black transition-colors">
        <Icon size={20} className="flex-shrink-0 sm:hidden" />
        <Icon size={24} className="flex-shrink-0 hidden sm:block" />
        <span className="break-all">{card.content}</span>
      </div>
    </a>
  );
}

export function ContactDetails() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 border-t-[3px] border-border-brutal"
    >
      <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl uppercase mb-8 md:mb-12">
        CONTACT DETAILS
      </h2>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        {contactCards.map((card) => (
          <Card key={card.label} card={card} />
        ))}
      </div>
    </section>
  );
}
