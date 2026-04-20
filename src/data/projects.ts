export type Project = {
  name: string
  description: string
  stack: string[]
  demoUrl: string
  repoUrl: string
}

export const projects: Project[] = [
  {
    name: "Semantic Docs Search",
    description:
      "RAG app for semantic search over technical documentation. Embeddings, chunking and reranking.",
    stack: ["Next.js", "TypeScript", "OpenAI API", "pgvector", "FastAPI"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    name: "Realtime Analytics Dashboard",
    description:
      "Dashboard with live metrics, websockets and interactive charts.",
    stack: ["React", "TypeScript", "FastAPI", "Redis", "Recharts"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    name: "AI Markdown Assistant",
    description:
      "Markdown editor with inline LLM suggestions and contextual actions.",
    stack: ["Vite", "React", "TypeScript", "Tailwind", "Anthropic API"],
    demoUrl: "#",
    repoUrl: "#",
  },
]
