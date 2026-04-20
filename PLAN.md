# Implementation Plan — Dev Portfolio

> Derivado de `PRD.md`. Orden secuencial por milestone. Cada tarea tiene criterio de aceptación concreto.
> Convención: `[ ]` pendiente · `[x]` completado.

---

## M1 · Scaffold + tooling

**Objetivo:** proyecto Vite + React + TS inicializado con Tailwind y shadcn/ui listos para usar.

- [x] **T1.1** Scaffold Vite con template `react-ts` en `/Users/jrostagno/Documents/ai-project-1/portfolio/`.
  - Comando: `npm create vite@latest . -- --template react-ts --yes`
  - Aceptación: `package.json`, `vite.config.ts`, `src/main.tsx`, `src/App.tsx` creados. No pisa `DESIGN.md`, `PRD.md`, `.agents/`.

- [x] **T1.2** Instalar dependencias base de Vite (`npm install`).
  - Aceptación: `node_modules/` presente, `npm run dev` arranca sin errores.

- [x] **T1.3** Configurar path alias `@/*` → `src/*`.
  - Editar `tsconfig.json` + `tsconfig.app.json` (`baseUrl`, `paths`).
  - Editar `vite.config.ts` con `resolve.alias` (requiere `@types/node`).
  - Aceptación: `import x from "@/lib/utils"` resuelve sin error de TS.

- [x] **T1.4** Instalar Tailwind CSS v3 + PostCSS + Autoprefixer.
  - Comando: `npm install -D tailwindcss@3 postcss autoprefixer && npx tailwindcss init -p`
  - Aceptación: `tailwind.config.js/ts` y `postcss.config.js` creados.

- [x] **T1.5** Instalar dependencias de shadcn/ui (manual para Vite).
  - Comando: `npm install class-variance-authority clsx tailwind-merge lucide-react tailwindcss-animate`
  - Aceptación: instaladas sin warnings bloqueantes.

- [x] **T1.6** Crear `src/lib/utils.ts` con helper `cn()`.
  - Contenido: `twMerge(clsx(...))`.
  - Aceptación: import desde componentes funciona.

- [x] **T1.7** Crear `components.json` en la raíz (config shadcn/ui para Vite).
  - Campos: style "new-york", baseColor "slate", cssVariables true, paths apuntando a `src/components`, `src/lib/utils`.
  - Aceptación: `npx shadcn@latest add button` reconoce el archivo (probar en M3).

- [x] **T1.8** Verificar que `npm run dev` levanta la página default de Vite sin errores.
  - Aceptación: browser muestra el hello de Vite en `http://localhost:5173`.

---

## M2 · Tokens + base styles

**Objetivo:** tokens de color/tipografía/espacio del DESIGN.md aplicados globalmente.

- [x] **T2.1** Extender `tailwind.config.ts` con `darkMode: "class"` y `content` paths.
  - Aceptación: archivo tipado como `Config`, darkMode correcto.

- [x] **T2.2** Definir tokens de color en `tailwind.config.ts` bajo `theme.extend.colors` usando variables CSS.
  - Nombres: `background`, `background-2`, `surface`, `surface-2`, `border`, `primary`, `primary-hover`, `accent`, `text`, `text-dim`, `text-strong`, `destructive`.
  - Mapeo a HSL vars: `hsl(var(--bg))`, etc.
  - Aceptación: `className="bg-background text-text"` renderiza el color correcto.

- [x] **T2.3** Crear `src/globals.css` con `@tailwind base/components/utilities`.
  - Definir `:root` con tokens HSL (convertir hex de DESIGN.md a HSL).
  - Importar Inter desde Google Fonts con `font-display: swap`.
  - Base styles: `html { scroll-behavior: smooth }`, `body { font-family: Inter, system-ui }`.
  - Gradientes radiales azules sutiles en `body::before` o directamente en `body` (referencia: `my-project/src/index.css`).
  - Aceptación: body renderiza con fondo `#0A1528` y texto Inter.

- [x] **T2.4** Importar `globals.css` en `src/main.tsx` y eliminar CSS default de Vite.
  - Borrar `src/index.css` (si existe) y `src/App.css`.
  - Aceptación: sin estilos default heredados.

- [x] **T2.5** Agregar `class="dark"` al `<html>` en `index.html` + `lang="en"` + `<title>` del PRD.
  - Aceptación: DOM tiene `<html class="dark" lang="en">`.

- [x] **T2.6** Extender `tailwind.config.ts` con `theme.extend.borderRadius` (lg=16, md=12, pill=999) y `fontFamily` Inter.
  - Aceptación: `rounded-lg`, `rounded-md`, `rounded-full` dan los radios del DESIGN.

- [x] **T2.7** Agregar plugin `tailwindcss-animate` al config.
  - Aceptación: plugin cargado sin error en dev.

---

## M3 · Componentes de sección

**Objetivo:** todas las secciones renderizan con data mock, sin interactividad aún.

- [x] **T3.1** Crear `src/data/skills.ts` con array tipado de 16 strings (PRD §Appendix A).
  - Aceptación: `export const skills: readonly string[] = [...]`.

- [x] **T3.2** Crear `src/data/experience.ts` con tipo `Experience` y 3 entradas (Clau, Sinapsis, Maslow).
  - Campos: `role`, `company`, `location`, `period`, `bullets[]`, `stack[]`.
  - Contenido: traducciones al inglés de los bullets del CV.
  - Aceptación: tipo exportado + array constante tipado.

- [x] **T3.3** Crear `src/data/projects.ts` con tipo `Project` y 3 entradas placeholder (PRD §Appendix A).
  - Campos: `name`, `description`, `stack[]`, `demoUrl`, `repoUrl` (ambos URLs `"#"` por ahora).
  - Aceptación: tipo exportado + 3 entradas.

- [x] **T3.4** Agregar componentes shadcn necesarios: `button`, `badge`, `card`.
  - Comando: `npx shadcn@latest add button badge card`
  - Aceptación: archivos en `src/components/ui/*.tsx` presentes y tipados.

- [x] **T3.5** Crear `src/components/navbar.tsx`.
  - Contiene logo `JR.` + nav links (About, Skills, Experience, Projects, Contact).
  - Links usan `<a href="#anchor">`.
  - Aceptación: renderiza arriba de la página con spacing del DESIGN.

- [x] **T3.6** Crear `src/components/hero.tsx`.
  - Eyebrow, h1, h2, lead, meta chips, 4 CTAs (mailto, download /cv.pdf, github, linkedin).
  - Usar componente shadcn `Button` con variantes `default` (primary) y `outline` (ghost).
  - Aceptación: renderiza con contenido del PRD, CTAs clickeables (aún no se prueba descarga).

- [x] **T3.7** Crear `src/components/skills.tsx`.
  - Itera `skills` de data y renderiza `<Badge>` por cada uno.
  - Aceptación: 16 chips en layout flex-wrap.

- [x] **T3.8** Crear `src/components/experience.tsx`.
  - Itera `experience` y renderiza cards con `<Card>` de shadcn.
  - Card: título, company, periodo/location a la derecha, lista de bullets, chips de stack.
  - Aceptación: 3 cards con datos reales.

- [x] **T3.9** Crear `src/components/projects.tsx`.
  - Itera `projects` y renderiza cards con name, description, stack chips, links Demo/Repo.
  - Links `href="#"` muestran texto "Coming soon" hasta tener URL real.
  - Aceptación: 3 cards, links no rompen nada.

- [x] **T3.10** Crear `src/components/contact.tsx`.
  - Grid `auto-fit minmax(240px, 1fr)` con 4 tarjetas: Email, GitHub, LinkedIn, Phone.
  - Cada card es un `<a>` con label uppercase dim + value strong.
  - Aceptación: mailto/tel/https correctos.

- [x] **T3.11** Crear `src/components/footer.tsx`.
  - Texto: `© {year} Javier Rostagno · Built with React + Vite + Tailwind`.
  - Aceptación: año dinámico con `new Date().getFullYear()`.

- [x] **T3.12** Componer todo en `src/App.tsx`.
  - Orden: Navbar, Hero, Skills, Experience, Projects, Contact, Footer envueltos en `<main>`.
  - Container con `max-w-5xl mx-auto px-6`.
  - Aceptación: página completa renderiza en dev.

---

## M4 · Navbar + scroll suave + fade-in

**Objetivo:** navegación funcional y secciones con entrada animada.

- [x] **T4.1** Asegurar `scroll-behavior: smooth` en `html` (ya cubierto en T2.3).
  - Aceptación: click en nav link hace scroll suave al anchor correspondiente.

- [x] **T4.2** Crear `src/hooks/use-in-view.ts`.
  - API: `useInView(options?): [ref, isInView]` con `IntersectionObserver` (threshold 0.15, triggerOnce true).
  - Aceptación: hook exportado, tipado correctamente, unit-testable.

- [x] **T4.3** Crear `src/components/section.tsx`.
  - Wrapper `<section id={id} ref={ref} className={...}>`.
  - Aplica `opacity-0 translate-y-2` → `opacity-100 translate-y-0` con transition 400ms.
  - Respeta `prefers-reduced-motion` (usa `motion-safe:` / `motion-reduce:`).
  - Aceptación: secciones hacen fade-in una vez al entrar en viewport.

- [x] **T4.4** Envolver cada sección en `<Section id="...">` en `App.tsx`.
  - IDs: `about`, `skills`, `experience`, `projects`, `contact`.
  - Aceptación: navbar link `#skills` hace scroll a la sección y se activa el fade-in.

- [x] **T4.5** Agregar `scroll-margin-top` a las secciones para compensar navbar si se vuelve sticky.
  - Aceptación: anchor scroll deja la sección visible, no tapada por el navbar.

---

## M5 · CV + contenido final

**Objetivo:** PDF del CV descargable + contenido textual en inglés revisado.

- [ ] **T5.1** Copiar CV a `public/cv.pdf`.
  - Comando: `cp /Users/jrostagno/Documents/resume/latex/full-stack/javier_rostagno_cv.pdf public/cv.pdf`
  - Aceptación: archivo presente en `public/`, accesible via `/cv.pdf` en dev.

- [ ] **T5.2** Confirmar que el CTA "Download CV" en Hero usa `href="/cv.pdf"` con atributo `download`.
  - Aceptación: click descarga el archivo (no abre viewer del browser).

- [ ] **T5.3** Revisar copy de todas las secciones en inglés (hero lead, bullets, project descriptions).
  - Leer en voz alta, verificar gramática.
  - Aceptación: sin errores de tipeo ni calcos del español.

- [ ] **T5.4** Agregar `<meta name="description">` en `index.html` con resumen del perfil.
  - Aceptación: tag presente en DOM.

---

## M6 · QA local

**Objetivo:** calidad visual y técnica antes de deploy.

- [ ] **T6.1** Test responsive en DevTools: 375, 640, 768, 1024, 1440 px. _(manual — requiere browser local)_
  - Criterios: sin scroll horizontal, sin contenido cortado, tipografías legibles.
  - Aceptación: todos los breakpoints OK.

- [ ] **T6.2** Navegación completa solo por teclado (Tab, Shift+Tab, Enter). _(manual — requiere browser local)_
  - Criterios: orden lógico, focus ring visible en todos los interactivos.
  - Aceptación: usuario puede llegar a todos los CTAs y links sin mouse.

- [ ] **T6.3** Activar `prefers-reduced-motion` en DevTools → animaciones deshabilitadas. _(manual — requiere browser local)_
  - Aceptación: fade-in inmediato, sin transiciones.

- [ ] **T6.4** Verificar contrastes con extensión (axe / Lighthouse). _(manual — requiere browser local)_
  - Criterios: body ≥ 4.5:1, dim ≥ 3:1.
  - Aceptación: cero violaciones AA.

- [ ] **T6.5** Lighthouse en mobile simulation. _(manual — requiere browser local)_
  - Aceptación: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 90.

- [x] **T6.6** `npm run build` sin errores, `npm run preview` sirve build.
  - Aceptación: `dist/` generado, preview idéntico a dev. **Build OK en 732ms (Vite 5.4.21). Preview no validado en harness (sandbox), pendiente smoke local.**

- [x] **T6.7** Verificar bundle size con `du -sh dist/assets/*.js`.
  - Aceptación: JS inicial < 150 kB gzip. **Actual: 61.07 kB gzip JS + 4.15 kB CSS + 0.48 kB HTML ≈ 65.7 kB total gzip.**

- [x] **T6.8** Correr linter.
  - Comando: `npm run lint`
  - Aceptación: cero errores, advertencias revisadas. **tsc --noEmit y eslint . → 0 errores, 0 warnings.**

---

## M7 · Deploy Vercel

**Objetivo:** URL pública accesible.

- [ ] **T7.1** Inicializar repo git.
  - Comandos: `git init && git add -A && git commit -m "feat: initial portfolio"`.
  - Aceptación: repo limpio, sin archivos sensibles trackeados.

- [ ] **T7.2** Crear repo en GitHub (`jrostagno/portfolio` u otro nombre).
  - Aceptación: remote agregado, push a `main` exitoso.

- [ ] **T7.3** Conectar repo a Vercel (dashboard o `vercel` CLI).
  - Framework detectado: Vite. Build command: `npm run build`. Output: `dist`.
  - Aceptación: primera build green, URL `.vercel.app` accesible.

- [ ] **T7.4** Probar URL desde mobile real + desktop.
  - Verificar: descarga de CV, links mailto/tel, scroll suave, fade-ins.
  - Aceptación: todo funciona igual que en local.

- [ ] **T7.5** (Opcional) Configurar dominio custom si Javier tiene uno.
  - Aceptación: DNS apuntando a Vercel, HTTPS automático.

---

## Dependencias entre milestones

```
M1 → M2 → M3 → M4 → M5 → M6 → M7
```

Cada milestone depende del anterior. No se puede paralelizar (portfolio chico, riesgo de bugs por desincronización).

## Criterio de "done" global

- [ ] Todos los items de M1–M7 marcados.
- [ ] URL de Vercel compartida con Javier.
- [ ] Commit final con tag `v1.0.0`.

## Post-v1 (fuera de este PLAN)

Referencia PRD §14 — OG tags, favicon, proyectos reales, analytics, i18n, formulario de contacto.
