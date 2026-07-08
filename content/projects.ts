export interface ProjectSection {
  label: string;
  body: string;
  emphasis?: boolean;
}

export interface Project {
  title: string;
  imageUrls: string[];
  sections: ProjectSection[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Willow Stock Management System",
    imageUrls: [
      "/Captura%20de%20pantalla%202025-10-17%20163335.png",
      "/image.png",
    ],
    sections: [
      {
        label: "Problem",
        body: "E-commerce retailers selling across multiple channels constantly fight stock drift: overselling, manual re-counts, and no single source of truth. A co-founder surfaced this pain from the industry, and we built Willow to automate cross-channel inventory sync, product tracking, and sales insights.",
      },
      {
        label: "Approach",
        body: "As one of three founders and a core engineer, I owned the reliability of the sync engine. The hard part was keeping stock consistent across integrations with Mercado Libre, Tiendanube, and Shopify while sales and inventory updates happened concurrently — reconciling conflicting counts, respecting each channel's API rate limits, and surviving partial failures without ever interrupting live selling. Built on NestJS with MySQL and Redis, containerized with Docker, and instrumented with Grafana for observability into the sync pipeline.",
      },
      {
        label: "Outcome",
        body: "Shipped as a commercial product and ran in production serving live e-commerce sellers into early 2026.",
        emphasis: true,
      },
    ],
    techStack: ["NestJS", "MySQL", "Redis", "Docker", "Grafana"],
    githubUrl: "https://github.com/IEchaburu/StockX-API",
  },
  {
    title: "WhatsApp Sales & Support Assistant",
    imageUrls: [
      "/rag.png",
    ],
    sections: [
      {
        label: "Problem",
        body: "A tech store's staff were drowning in inbound WhatsApp messages — support questions, product queries, price checks — most of which never converted to a sale, pulling them away from the conversations that actually would.",
      },
      {
        label: "Approach",
        body: "Building it with my brother, I made a WhatsApp AI assistant that handled the high-volume support automatically and classified each conversation, surfacing insights on what customers asked and where demand was trending. When it detected a genuine buying signal, it handed off to a human to close the sale. Answers were grounded in the store's real catalog via a vector database, so the assistant stayed accurate. Orchestrated with n8n, wired to Supabase (including the vector store) and Google Sheets for data, and powered by the Gemini API.",
      },
      {
        label: "Outcome",
        body: "In a live trial it handled real customer messages and escalated genuine leads to staff correctly — the system worked. The store didn't adopt it long-term, but the design became the blueprint for the AI assistant I later built for BuyIN, which is live today.",
        emphasis: true,
      },
    ],
    techStack: ["n8n", "JavaScript", "Supabase", "Google Sheets", "Gemini API"],
  },
  {
    title: "BuyIN — Luxury Development Portfolio",
    imageUrls: [
      "/buyin.png",
    ],
    sections: [
      {
        label: "Problem",
        body: "BuyIN is a curated portfolio for luxury pre-development real-estate brokers — the bridge between developers and buyers — covering high-end markets in Punta del Este, Miami, and Buenos Aires. They needed a branded showcase for their available developments and a way to turn visitors into qualified leads, as the first step toward scaling into a full marketplace.",
      },
      {
        label: "Approach",
        body: "I built the site and an integrated AI assistant that answers detailed questions about each development and, via a purpose-built system prompt, naturally captures visitor information and qualifies them as sales leads. It's the productionized evolution of the WhatsApp assistant I prototyped for the tech store — the same lead-capture idea, rebuilt for the web. Next.js and PostgreSQL, with the assistant powered by the Vercel AI SDK, deployed on Vercel.",
      },
      {
        label: "Outcome",
        body: "Live in production, currently in a limited soft-launch to friends and family ahead of the brand's public social-media push.",
        emphasis: true,
      },
    ],
    techStack: ["Next.js", "PostgreSQL", "Vercel AI SDK", "Vercel"],
    liveUrl: "https://buyinrealestate.com/",
  },
];
