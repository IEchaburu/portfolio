export interface STARMethod {
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface Project {
  title: string;
  imageUrl: string;
  star: STARMethod;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Real-Time Event Pipeline",
    imageUrl:
      "https://images.unsplash.com/photo-1602634630420-30a51ffa9326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwYXJjaGl0ZWN0dXJlJTIwZGlhZ3JhbSUyMGRhcmt8ZW58MXx8fHwxNzcwOTM3MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    imageUrl:
      "https://images.unsplash.com/photo-1635145613344-3e59b1e8afd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcGlwZWxpbmUlMjBpbmZyYXN0cnVjdHVyZSUyMGNvZGV8ZW58MXx8fHwxNzcwOTM3MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    imageUrl:
      "https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG5ldXJhbCUyMG5ldHdvcmslMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MDgzMjEwMnww&ixlib=rb-4.1.0&q=80&w=1080",
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
  {
    title: "Microservices Orchestration",
    imageUrl:
      "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NlcnZpY2VzJTIwc3lzdGVtJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDkzNzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    star: {
      situation:
        "Monolithic payment system couldn't scale during Black Friday, leading to $200K in lost revenue and customer churn.",
      task: "Decompose the monolith into microservices while maintaining zero-downtime migration and data consistency.",
      action:
        "Applied strangler fig pattern, extracted payment, fraud detection, and notification services. Implemented saga pattern for distributed transactions, used Istio for service mesh, and built comprehensive observability with Datadog.",
      result:
        "Handled 10x Black Friday traffic (150K concurrent users), reduced deployment time from 2hrs to 15min, and achieved 99.95% uptime SLA.",
    },
    techStack: ["Go", "gRPC", "Istio", "PostgreSQL", "Terraform", "AWS EKS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
