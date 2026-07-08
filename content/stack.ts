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
      "Vercel SDK",
      "OpenAI",
      "RAG Systems",
    ],
  },
  {
    title: "ARCHITECTURE",
    skills: [
      "REST",
      "Domain Driven Design",
      "Event-Driven (In progress)",
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
