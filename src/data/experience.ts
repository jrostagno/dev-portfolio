export type Experience = {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Clau",
    location: "Remote · Argentina",
    period: "2022 – Present",
    bullets: [
      "Built frontend with server-side rendering using Next.js and TypeScript.",
      "Managed production deploys via GitHub Actions CI/CD pipelines.",
      "Supported customer requests, reviewed PRs, and wrote unit and integration tests with Jest.",
      "Created and maintained API endpoints with Node.js.",
      "Collaborated cross-functionally with design and product teams to ship features on schedule.",
    ],
    stack: ["Next.js", "TypeScript", "React", "Node.js", "Jest", "GitHub Actions"],
  },
  {
    role: "Full Stack Developer",
    company: "Sinapsis / Sharecare",
    location: "Remote",
    period: "2020 – 2022",
    bullets: [
      "Developed features across frontend and backend for a digital health platform.",
      "Built reusable React components and maintained a shared component library.",
      "Designed and implemented RESTful API endpoints with Node.js and PostgreSQL.",
      "Shipped production deploys via CI/CD and monitored service health.",
      "Reviewed pull requests and mentored junior developers on best practices.",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redux", "Storybook"],
  },
  {
    role: "Full Stack Developer",
    company: "Maslow",
    location: "Remote · Argentina",
    period: "2019 – 2020",
    bullets: [
      "Developed new product features end-to-end from design spec to production.",
      "Implemented REST APIs and integrated third-party services.",
      "Improved frontend performance and reduced bundle size through code splitting.",
      "Participated in agile ceremonies and contributed to sprint planning.",
    ],
    stack: ["React", "JavaScript", "Node.js", "PostgreSQL", "Strapi"],
  },
]
