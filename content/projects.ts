export interface STARMethod {
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface Project {
  title: string;
  imageUrls: string[];
  star: STARMethod;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Real-Time Event Pipeline",
    imageUrls: [
      "/Captura%20de%20pantalla%202025-10-17%20163335.png",
      "/image.png",
    ],
    star: {
      situation:
        "E-commerce platform struggled with processing 500K+ daily orders, causing checkout delays and inventory sync issues.",
      task: "Design and implement a scalable event-driven architecture to handle order processing, inventory updates, and third-party integrations.",
      action:
        "Built distributed event pipeline using Kafka, NestJS microservices, and Redis for caching. Implemented CQRS pattern with PostgreSQL for writes and read replicas for queries.",
      result:
        "99.9% uptime, reduced p95 latency from 2.3s to 180ms, processed 2M+ events/day with zero data loss. Saved $40K/month in infrastructure costs.",
    },
    techStack: ["NestJS", "Kafka", "PostgreSQL", "Redis", "Docker", "K8s"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Powered Data Pipeline",
    imageUrls: [
      "/rag.png",
    ],
    star: {
      situation:
        "SaaS company needed to extract structured data from 100K+ unstructured customer support tickets monthly.",
      task: "Build an automated data extraction pipeline using LLMs to classify, summarize, and route support tickets.",
      action:
        "Designed workflow orchestration with Temporal, integrated Claude API for entity extraction, and built vector search with Pinecone for semantic ticket matching. Implemented streaming responses for real-time UI updates.",
      result:
        "Reduced manual triage time by 75%, improved ticket routing accuracy to 94%, and processed 3.2M tokens daily at $0.003/ticket cost.",
    },
    techStack: ["TypeScript", "Temporal", "Claude API", "Pinecone", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "RAG Knowledge System",
    imageUrls: [
      "/buyin.png",
    ],
    star: {
      situation:
        "Internal documentation across 12 repos was fragmented, making onboarding new engineers a 3-month process.",
      task: "Create a conversational AI assistant that provides accurate, context-aware answers from the entire engineering knowledge base.",
      action:
        "Built RAG system using LangChain, embedded 50K+ documentation pages into ChromaDB, implemented re-ranking with Cohere, and added citation tracking. Deployed with streaming responses and feedback loops.",
      result:
        "Reduced avg. onboarding time to 3 weeks, 89% answer accuracy rate, 2,500+ queries/month, and 94% developer satisfaction score.",
    },
    techStack: ["LangChain", "ChromaDB", "OpenAI", "Next.js", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
