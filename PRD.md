# PRD — Dev Portfolio · Javier Rostagno

**Versión:** 1.0
**Fecha:** 2026-04-20
**Autor:** Javier Rostagno (con asistencia Claude Code)
**Estado:** Borrador para aprobación

---

## 1. Overview

Sitio web personal estático que sirve como carta de presentación profesional para Javier Rostagno (Full Stack Developer). Una única página con scroll, dark-only, paleta navy/azul, deploy en Vercel. El contenido proviene del CV vigente; los proyectos son placeholders hasta reemplazo con reales.

## 2. Problem / Opportunity

- Javier necesita un espacio propio para presentar su perfil a recruiters y tech leads cuando aplica a búsquedas remotas internacionales.
- Su CV en PDF no es compartible como link vivo ni optimizado para ser consumido en móvil.
- LinkedIn + GitHub no transmiten un "showcase" curado ni una voz personal.
- **Oportunidad:** un portfolio simple, performante y profesional, con URL compartible y diferenciación visual moderada (dark mode navy, tipografía técnica).

## 3. Goals

**Primarios (deben cumplirse para lanzar):**
- G1. Página única accesible en URL pública (Vercel), cargando en < 2.5s (LCP) en 3G rápido.
- G2. Contenido fiel al CV actual, en inglés, escaneado por recruiter en < 30s.
- G3. Acceso rápido a canales de contacto (mail, LinkedIn, GitHub, tel) y descarga del CV en PDF.
- G4. Accesibilidad AA (contrastes, focus, keyboard nav, reduced-motion).

**Secundarios (nice-to-have para esta versión):**
- G5. Proyectos destacados visibles (aunque sean ficticios por ahora) para demostrar capacidad de showcase.
- G6. Identidad visual consistente con el `DESIGN.md` ya generado.

## 4. Non-goals (explícitamente fuera)

- N1. Sistema de blog / CMS.
- N2. Multi-idioma (solo inglés en v1).
- N3. Formulario de contacto con backend.
- N4. Autenticación, analytics, tracking.
- N5. Modo claro / toggle de theme (dark-only).
- N6. Tests automatizados (Vitest u otros) en v1.
- N7. Meta tags / OpenGraph / favicon custom (se puede agregar en v1.1).
- N8. Framer Motion u otras libs de animación.
- N9. Multi-route / React Router.
- N10. CMS de proyectos con panel admin.

## 5. Target users

| Persona | Contexto | Qué buscan |
|---|---|---|
| **Recruiter técnico** | Revisa 30–60s desde un link en LinkedIn o email | Rol + seniority + stack + contacto rápido |
| **Tech Lead / Engineering Manager** | Evaluación más profunda, 2–5 min | Experiencia, tecnologías dominadas, proyectos concretos, calidad del código |
| **Peer developer** | Descubre por compartido / comunidad | Stack, proyectos, GitHub |

Criterio de diseño: priorizar flujo del recruiter (arriba, rápido) sin sacrificar profundidad para leads.

## 6. User stories

### Must have
- **US1.** Como recruiter, quiero ver nombre, rol y ubicación en los primeros 2 segundos, para saber si el perfil encaja.
- **US2.** Como recruiter, quiero un CTA de contacto visible desde el primer scroll, para iniciar contacto sin fricción.
- **US3.** Como tech lead, quiero ver las tecnologías que Javier domina, para cruzarlas con el stack del equipo.
- **US4.** Como tech lead, quiero leer la experiencia laboral con empresa, periodo y bullets de responsabilidades, para validar seniority.
- **US5.** Como cualquier visitante, quiero descargar el CV en PDF, para compartirlo internamente o archivarlo.
- **US6.** Como usuario mobile, quiero navegar sin scroll horizontal ni zoom forzado, para leer cómodo desde el teléfono.
- **US7.** Como usuario con lector de pantalla, quiero que el orden de lectura y labels sean correctos, para entender el contenido.

### Should have
- **US8.** Como tech lead, quiero ver proyectos destacados con link al repo/demo, para juzgar calidad de código real.
- **US9.** Como usuario con `prefers-reduced-motion`, quiero que las animaciones se desactiven, para no marearme.

## 7. Functional requirements

### F1. Secciones (orden fijo, single page)
1. **Navbar** — logo `JR.` + links a anchors (`#about`, `#skills`, `#experience`, `#projects`, `#contact`).
2. **Hero** — eyebrow "Hi, I'm", nombre, rol + ubicación, párrafo intro, CTAs (Contact, Download CV, GitHub, LinkedIn), meta chips (`4+ years`, `English C1`, `Remote friendly`).
3. **Skills** — chips con ~16 tecnologías principales.
4. **Experience** — timeline con 3 roles (Clau, Sinapsis/Sharecare, Maslow) con empresa, periodo, bullets y stack.
5. **Projects** — 3 cards placeholder (Semantic Docs Search, Realtime Analytics Dashboard, AI Markdown Assistant) con descripción, stack y links `#` temporales.
6. **Contact** — grid 4 cards: Email, GitHub, LinkedIn, Phone.
7. **Footer** — copyright + crédito stack.

### F2. Interacciones
- F2.1 Click en links del navbar → scroll suave al anchor.
- F2.2 Click en "Download CV" → descarga `/cv.pdf` (no abre viewer).
- F2.3 Click en `mailto:` → abre cliente de correo.
- F2.4 Click en `tel:` → trigger de llamada en mobile, copiable en desktop.
- F2.5 Hover en cards de Experience/Projects → border azul + elevación sutil.

### F3. Contenido
- F3.1 Datos de Experience provienen del CV, sin alteraciones de hechos (fechas, empresas, tech).
- F3.2 Skills list manual (array tipado en `src/data/skills.ts`).
- F3.3 Projects hardcodeados en `src/data/projects.ts` con campos `name`, `description`, `stack[]`, `demoUrl`, `repoUrl`.

### F4. Descarga de CV
- F4.1 PDF ubicado en `public/cv.pdf`, copiado desde `/Users/jrostagno/Documents/resume/latex/full-stack/javier_rostagno_cv.pdf`.
- F4.2 Link con `download` attribute para forzar descarga.

## 8. Non-functional requirements

### NFR1. Performance
- LCP < 2.5s, CLS < 0.1, INP < 200ms en 3G rápido.
- Bundle JS inicial < 150 kB gzip.
- Fuentes con `font-display: swap`, solo pesos 400/500/600/700.

### NFR2. Accesibilidad
- WCAG 2.2 AA.
- Contraste body ≥ 4.5:1, texto dim ≥ 3:1.
- Focus rings visibles 2–4 px.
- Orden de tab = orden visual.
- `prefers-reduced-motion` respetado.
- Soporte full keyboard navigation.
- Labels descriptivas en todos los links (no "click here").

### NFR3. Responsive
- Breakpoints: 375 / 640 / 768 / 1024 / 1440.
- Mobile-first.
- Sin scroll horizontal en ningún breakpoint.
- Safe-area insets respetadas en iOS.

### NFR4. Browser support
- Últimas 2 versiones de Chrome, Safari, Firefox, Edge.
- iOS Safari 15+, Chrome Android.

### NFR5. SEO (mínimo)
- `<title>`: "Javier Rostagno · Full Stack Developer"
- `<meta name="description">` con resumen del perfil.
- `lang="en"` en `<html>`.
- Headings jerárquicos (h1 → h2 → h3).
- **Nota:** OG / Twitter cards se difieren a v1.1.

### NFR6. Mantenibilidad
- Contenido editable cambiando únicamente los arrays en `src/data/`.
- Tokens de color/tipografía centralizados en `tailwind.config.ts` + `globals.css`.
- Sin CSS global disperso; Tailwind + shadcn components.

## 9. Design

Fuente única de verdad: **`/Users/jrostagno/Documents/ai-project-1/portfolio/DESIGN.md`**.

Highlights:
- **Style:** Professional Dark — Navy + Blue CTA
- **Paleta:** bg `#0A1528`, surface `#122648`, primary `#3B82F6`, text `#CDD7EA` / `#F1F5FF`
- **Tipografía:** Inter (300/400/500/600/700)
- **Pattern:** Portfolio Grid
- **Radius:** 12 (inputs/contact), 16 (cards), 999 (pills)
- **Spacing rhythm:** 4/8 px base, escala hasta 56
- **Motion:** 150–300ms, ease-out, solo transform/opacity

## 10. Technical stack / architecture

| Capa | Decisión |
|---|---|
| Framework | React 18 + Vite 5 |
| Lenguaje | TypeScript (strict) |
| Styling | Tailwind CSS v3 + shadcn/ui (button, badge, card) |
| Ícono system | Lucide React |
| Routing | Ninguno (single page, anchors) |
| Animaciones | CSS + hook `useInView` con IntersectionObserver |
| State mgmt | No aplica |
| Package manager | npm |
| Linting | ESLint (template Vite default) |
| Build output | Estático (`dist/`), servido por Vercel CDN |
| Deploy | Vercel (auto-detecta Vite) |
| Node target | 20 LTS |

### Estructura de carpetas
```
portfolio/
├── DESIGN.md                  (fuente de verdad del diseño)
├── public/
│   └── cv.pdf
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── globals.css
│   ├── lib/utils.ts
│   ├── hooks/use-in-view.ts
│   ├── components/
│   │   ├── ui/               (shadcn primitives)
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   └── section.tsx       (wrapper con fade-in)
│   └── data/
│       ├── experience.ts
│       ├── projects.ts
│       └── skills.ts
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── components.json
└── vite.config.ts
```

## 11. Milestones

| # | Entregable | Criterio de salida |
|---|---|---|
| M1 | Scaffold + tooling | `npm run dev` levanta página vacía con Tailwind configurado y path alias `@/*` funcional |
| M2 | Tokens + base styles | Colores, tipografía y spacing del DESIGN aplicados en `globals.css` y `tailwind.config.ts` |
| M3 | Componentes de sección | Hero, Skills, Experience, Projects, Contact, Footer renderizando con data mock |
| M4 | Navbar + scroll suave + fade-in | Navegación por anchors funciona, secciones hacen fade-in al entrar en viewport |
| M5 | CV + contenido real | `public/cv.pdf` presente, botón descarga funciona, textos finales en inglés |
| M6 | QA local | Chequeo manual en 375/768/1440, Lighthouse ≥ 95, teclado completo, reduced-motion OK |
| M7 | Deploy Vercel | URL pública accesible, build verde en Vercel |

## 12. Success metrics

**Post-lanzamiento (subjetivos, medidos por Javier):**
- El link se comparte en LinkedIn sin errores de preview (aun sin OG, debe cargar sin romperse).
- Recruiters contactan por los medios expuestos en el portfolio al menos una vez en las primeras 4 semanas post-compartido.
- Javier puede reemplazar datos de experiencia / proyectos editando solo los archivos en `src/data/` sin tocar componentes.

**Técnicos:**
- Lighthouse Performance ≥ 95 en mobile simulation.
- Lighthouse Accessibility ≥ 95.
- Build output < 200 kB gzip total.
- Zero TypeScript errors, zero ESLint errors.

## 13. Risks & open questions

| # | Riesgo / Pregunta | Mitigación |
|---|---|---|
| R1 | Shadcn/ui init en Vite no es oficial — hay quirks con path alias | Seguir guía manual de shadcn para Vite; no usar `npx shadcn init` directo |
| R2 | Inter desde Google Fonts puede sumar layout shift | `font-display: swap` + preconnect + reserva de altura en h1 |
| R3 | Proyectos ficticios pueden dar mala impresión si se linkean a `#` | Mostrar texto "Demo / Repo coming soon" hasta tener reales, o que Javier reemplace antes del share público |
| R4 | Descarga de CV desde mobile a veces abre viewer en vez de descargar | `<a download>` + `Content-Disposition` (Vercel lo maneja bien para `.pdf` servidos de `public/`) |

### Decisiones pendientes (post-aprobación)
- P1. ¿Dominio custom o `.vercel.app`? — decidir antes de M7.
- P2. ¿Agregar OG/favicon en v1.1 inmediatamente después del deploy? — recomendado antes de compartir masivamente.
- P3. Reemplazo de proyectos ficticios: ¿Javier los da antes de M5 o queda como TODO post-lanzamiento?

## 14. Out of scope (explicit TODO for later)

- v1.1: Meta tags OG + Twitter Card + favicon JR.
- v1.2: Reemplazo de proyectos ficticios por reales.
- v1.3: Analytics (Plausible / Vercel Analytics).
- v2.0: i18n ES/EN.
- v2.1: Formulario de contacto con Formspree o Resend + API route (requiere migrar a Next.js si se quiere server-side).

---

## Appendix A — Content snippets (inglés)

### Hero lead (draft)
> "I build simple, efficient and maintainable software. I enjoy teams that value clean architecture, testing, and long-term quality. Currently exploring applied AI and performance optimization."

### Experience bullets (ejemplo Clau)
- Built frontend with server-side rendering.
- Managed production deploys via GitHub Actions CI.
- Supported customer requests, reviewed PRs, wrote unit + integration tests with Jest.
- Created and maintained API endpoints.

### Skills list (16)
`TypeScript`, `JavaScript`, `Python`, `React`, `Next.js`, `Node.js`, `FastAPI`, `PostgreSQL`, `AWS`, `Tailwind`, `Redux`, `Jest`, `Pytest`, `Storybook`, `Strapi`, `Git`

### Projects placeholder

1. **Semantic Docs Search** — RAG app for semantic search over technical documentation. Embeddings + chunking + reranking. *Stack:* Next.js, TypeScript, OpenAI API, pgvector, FastAPI.
2. **Realtime Analytics Dashboard** — Dashboard with live metrics, websockets and interactive charts. *Stack:* React, TypeScript, FastAPI, Redis, Recharts.
3. **AI Markdown Assistant** — Markdown editor with inline LLM suggestions and contextual actions. *Stack:* Vite, React, TS, Tailwind, Anthropic API.
