import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-16 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#about"
          className="font-semibold tracking-[2px] text-primary-hover text-base leading-none"
        >
          JR.
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.slice(0, -1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-dim hover:text-primary-hover transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact CTA — always visible */}
        <Button asChild size="sm" variant="outline">
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </header>
  )
}
