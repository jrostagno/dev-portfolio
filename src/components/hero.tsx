import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

const metaChips = [
  "4+ years experience",
  "English C1",
  "Remote friendly",
]

export function Hero() {
  return (
    <div className="py-14 md:py-20">
      {/* Eyebrow */}
      <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
        Hi, I&apos;m
      </p>

      {/* Name */}
      <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] bg-gradient-to-br from-text-strong to-accent bg-clip-text text-transparent">
        Javier Rostagno
      </h1>

      {/* Role + location */}
      <p className="text-lg text-text-dim mt-2">
        Full Stack Developer · Remote from Argentina
      </p>

      {/* Lead paragraph */}
      <p className="max-w-[620px] mt-6 text-text leading-relaxed">
        I build simple, efficient and maintainable software. I enjoy teams that
        value clean architecture, testing, and long-term quality. Currently
        exploring applied AI and performance optimization.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild variant="default">
          <a href="#contact">Contact</a>
        </Button>

        <Button asChild variant="outline">
          <a href="/cv.pdf" download>
            <Download />
            Download CV
          </a>
        </Button>

        <Button asChild variant="outline">
          <a
            href="https://github.com/jrostagno"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
        </Button>

        <Button asChild variant="outline">
          <a
            href="https://www.linkedin.com/in/javier-rostagno/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </Button>
      </div>

      {/* Meta chips */}
      <div className="mt-10 flex flex-wrap gap-3">
        {metaChips.map((chip) => (
          <Badge key={chip} variant="outline" className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-primary inline-block shrink-0" />
            {chip}
          </Badge>
        ))}
      </div>
    </div>
  )
}
