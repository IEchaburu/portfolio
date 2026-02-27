export interface SkillCategory {
  title: string;
  skills: string[];
}

export const categories: SkillCategory[] = [
  {
    title: "BACKEND",
    skills: ["Node.js", "Python", "Go", "NestJS", "FastAPI", "Express"],
  },
  {
    title: "FRONTEND",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Vite", "Vue"],
  },
  {
    title: "DEVOPS",
    skills: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "CI/CD"],
  },
  {
    title: "AI/ML",
    skills: [
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "OpenAI",
      "Pinecone",
      "RAG Systems",
    ],
  },
  {
    title: "ARCHITECTURE",
    skills: [
      "Microservices",
      "Event-Driven",
      "CQRS",
      "DDD",
      "REST/GraphQL",
      "Serverless",
    ],
  },
  {
    title: "DATABASES",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Neo4j",
      "ClickHouse",
      "Supabase",
    ],
  },
];
