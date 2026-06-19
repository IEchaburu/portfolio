export interface SkillCategory {
  title: string;
  skills: string[];
}

export const categories: SkillCategory[] = [
  {
    title: "BACKEND",
    skills: ["Node.js", "Python", "NestJS", "Express"],
  },
  {
    title: "FRONTEND",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "Zod"],
  },
  {
    title: "DEVOPS",
    skills: ["Docker", "S3", "Linux", "Grafana"],
  },
  {
    title: "AI/ML",
    skills: [
      "LangChain",
      "OpenAI",
      "RAG Systems",
    ],
  },
  {
    title: "ARCHITECTURE",
    skills: [
      "Event-Driven",
      "CQRS",
      "REST",
      "Domain Driven Design (in progress)",
    ],
  },
  {
    title: "DATABASES",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
  },
];
