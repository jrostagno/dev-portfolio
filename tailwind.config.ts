import animatePlugin from "tailwindcss-animate"
import type { Config } from "tailwindcss"

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--bg))",
        "background-2": "hsl(var(--bg-2))",
        surface: "hsl(var(--surface))",
        "surface-2": "hsl(var(--surface-2))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        "primary-hover": "hsl(var(--primary-hover))",
        "primary-soft": "var(--primary-soft)",
        accent: "hsl(var(--accent))",
        text: "hsl(var(--text))",
        "text-dim": "hsl(var(--text-dim))",
        "text-strong": "hsl(var(--text-strong))",
        destructive: "hsl(var(--destructive))",
      },
      borderRadius: {
        md: "12px",
        lg: "16px",
        pill: "999px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config
