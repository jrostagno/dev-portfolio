export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 mt-16 py-8 text-center text-sm text-text-dim">
      © {year} Javier Rostagno · Built with React + Vite + Tailwind
    </footer>
  )
}
