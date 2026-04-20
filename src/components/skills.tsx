import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/skills"

export function Skills() {
  return (
    <div className="py-14 md:py-20">
      <h3 className="uppercase tracking-[0.2em] text-xs text-primary mb-6">
        Stack
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="default">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
