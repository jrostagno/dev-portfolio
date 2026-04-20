import { ExternalLink } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <div className="py-14 md:py-20">
      <h3 className="uppercase tracking-[0.2em] text-xs text-primary mb-6">
        Selected Projects
      </h3>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="flex flex-col hover:border-primary-hover hover:-translate-y-0.5"
          >
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="gap-4">
              {project.demoUrl === "#" ? (
                <span className="text-text-dim text-xs italic">Coming soon</span>
              ) : (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-xs text-text-dim hover:text-primary-hover transition-colors"
                >
                  <ExternalLink size={12} />
                  Demo
                </a>
              )}
              {project.repoUrl === "#" ? null : (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-xs text-text-dim hover:text-primary-hover transition-colors"
                >
                  <ExternalLink size={12} />
                  Repo
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
