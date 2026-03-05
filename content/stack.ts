export interface SkillCategory {
  title: string;
  skills: string[];
}

export const categories: SkillCategory[] = [
  {
    title: "BACKEND",
    skills: ["Node.js", "Python", "NestJS", "FastAPI", "Express"],
  },
  {
    title: "FRONTEND",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "Zod"],
  },
  {
    title: "DEVOPS",
    skills: ["Docker", "S3", "Linux", "CI/CD", "Grafana"],
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
      "Microservices",
      "Event-Driven",
      "CQRS",
      "REST",
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
