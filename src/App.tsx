import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"

export default function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 sm:px-8 space-y-20 md:space-y-28 pt-10 md:pt-16 pb-16">
        <Section id="about">
          <Hero />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Footer />
      </div>
    </>
  )
}
