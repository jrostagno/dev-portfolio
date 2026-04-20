import { Mail, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

type ContactCard = {
  label: string
  value: string
  href: string
  icon: React.ElementType
  external?: boolean
}

const contactCards: ContactCard[] = [
  {
    label: "EMAIL",
    value: "javier.rostagno@gmail.com",
    href: "mailto:javier.rostagno@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "GITHUB",
    value: "github.com/jrostagno",
    href: "https://github.com/jrostagno",
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/javier-rostagno",
    href: "https://www.linkedin.com/in/javier-rostagno/",
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "PHONE",
    value: "+54 9 351 123 4567",
    href: "tel:+5493511234567",
    icon: Phone,
    external: false,
  },
]

export function Contact() {
  return (
    <div className="py-14 md:py-20">
      <h3 className="uppercase tracking-[0.2em] text-xs text-primary mb-6">
        Contact
      </h3>

      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
      >
        {contactCards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            {...(card.external
              ? { target: "_blank", rel: "noreferrer noopener" }
              : {})}
            className="group rounded-md border border-border bg-surface p-5 flex flex-col gap-1 transition-[border-color,background-color,transform] duration-200 hover:border-primary-hover hover:bg-surface-2 hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-text-dim">
                {card.label}
              </p>
              <card.icon
                size={18}
                className="text-text-dim group-hover:text-primary-hover transition-colors duration-200 shrink-0"
              />
            </div>
            <p className="text-text-strong text-sm">{card.value}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
