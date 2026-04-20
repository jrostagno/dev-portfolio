export const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "AWS",
  "Tailwind",
  "Redux",
  "Jest",
  "Pytest",
  "Storybook",
  "Strapi",
  "Git",
] as const

export type Skill = (typeof skills)[number]
