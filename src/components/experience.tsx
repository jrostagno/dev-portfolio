import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/data/experience"

export function Experience() {
  return (
    <div className="py-14 md:py-20">
      <h3 className="uppercase tracking-[0.2em] text-xs text-primary mb-6">
        Experience
      </h3>

      <div className="grid gap-5">
        {experience.map((job) => (
          <Card
            key={`${job.company}-${job.period}`}
            className="hover:border-primary-hover hover:-translate-y-0.5"
          >
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <CardTitle>{job.role}</CardTitle>
                  <p className="text-primary-hover text-sm mt-0.5">{job.company}</p>
                </div>
                <div className="text-text-dim text-sm md:text-right shrink-0">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-2 text-text text-sm">
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[9px] before:size-[6px] before:rounded-full before:bg-primary"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex-wrap gap-2">
              {job.stack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
