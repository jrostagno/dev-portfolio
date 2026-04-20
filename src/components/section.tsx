import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  labelledBy?: string
}

export function Section({ id, children, className, labelledBy }: SectionProps) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.15, triggerOnce: true })
  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-24 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 motion-reduce:opacity-100 motion-reduce:translate-y-0",
        className
      )}
    >
      {children}
    </section>
  )
}
