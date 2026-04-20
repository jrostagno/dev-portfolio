# DESIGN — Javier Rostagno Portfolio

> Design system generado con la skill `ui-ux-pro-max` para un dev portfolio de una sola vista.
> Tono: profesional, técnico, elegante, paleta azul/navy.

---

## 1. Product & Pattern

- **Product type:** Portfolio / Personal site (developer)
- **Audience:** Recruiters, tech leads, clientes que evalúan contratación remota
- **Pattern:** `Portfolio Grid`
- **Section order (single view, scroll vertical):**
  1. **Hero** — Nombre, rol, tagline, CTAs (Contact / GitHub / LinkedIn)
  2. **Stack / Skills** — Chips con tecnologías principales
  3. **Experience** — Timeline de roles (Clau, Sinapsis/Sharecare, Maslow)
  4. **Selected Projects** *(opcional a futuro)* — Cards con link y stack
  5. **Contact** — Email, GitHub, LinkedIn, teléfono
  6. **Footer** — Copyright + meta
- **Primary CTA placement:** Hero + Contact section (ambos al alcance sin scroll profundo)
- **Conversion focus:** Visuals first, carga rápida, jerarquía clara entre experiencia y contacto.

---

## 2. Style

- **Name:** Professional Dark — Navy + Blue CTA
- **Mode:** Dark-first (opcional toggle a light en el futuro)
- **Keywords:** dark, precision, technical, clean, premium, developer
- **Feel:** Interfaz sobria, foco en el contenido, acentos azules solo donde aportan jerarquía (CTA, links, hover, subtítulos).

---

## 3. Color System

Paleta navy profesional con azul como acento (Result 3 del dominio `color`, ajustada para dark-first).

### Tokens

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Background base | `#0A1528` | `--bg` |
| Background elevated | `#0F1D38` | `--bg-2` |
| Surface (cards) | `#122648` | `--surface` |
| Surface hover | `#17305A` | `--surface-2` |
| Border | `#1F3B6E` | `--border` |
| Text default | `#CDD7EA` | `--text` |
| Text dim | `#8FA0C2` | `--text-dim` |
| Text strong | `#F1F5FF` | `--text-strong` |
| Primary / CTA | `#3B82F6` | `--primary` |
| Primary hover | `#60A5FA` | `--primary-2` |
| Primary soft bg | `rgba(59,130,246,0.15)` | `--primary-soft` |
| Accent chips | `#93C5FD` | `--accent` |
| Destructive | `#DC2626` | `--destructive` |

### Rules

- Texto largo sobre `--bg` o `--surface`: usar `--text` (contraste ≥ 4.5:1).
- Títulos: `--text-strong`.
- Labels secundarios / timestamps: `--text-dim` (contraste ≥ 3:1).
- CTA principal sólido con `--primary`; secundarios con borde `--border` y hover a `--primary-2`.
- Nunca usar azul como único indicador de estado (añadir ícono o texto).

---

## 4. Typography

- **Familia única:** `Inter` (heading + body) — eficiente, técnica, legible.
- **Fallback:** `system-ui, -apple-system, Segoe UI, Roboto, sans-serif`
- **Pesos:** 300, 400, 500, 600, 700
- **Google Fonts:**
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  ```

### Escala (px / line-height)

| Token | Size | LH | Uso |
|-------|------|----|-----|
| `display` | clamp(40, 6vw, 64) | 1.05 | H1 hero |
| `h2` | 18 | 1.4 | Subtítulo hero |
| `h3` | 14 (uppercase, tracking 3px) | 1.2 | Section label |
| `h4` | 17 | 1.3 | Card title |
| `body` | 16 | 1.6 | Párrafos |
| `small` | 13 | 1.5 | Meta / labels |
| `xs` | 11–12 | 1.4 | Chips secundarios |

- Mínimo body **16px en mobile** (evita auto-zoom iOS).
- Line-length ideal: 60–75 chars desktop, 35–60 mobile.

---

## 5. Spacing & Layout

- **Ritmo base:** 4 / 8 px. Escala: 4, 8, 12, 16, 24, 32, 48, 56.
- **Container max-width:** 960px (cómodo para portfolio one-page).
- **Side padding:** 24px mobile, 32px desktop.
- **Breakpoints:** 375 / 640 / 768 / 1024 / 1440.
- **Section spacing:** 48–56 px entre bloques mayores.
- **Radius:** `12px` (inputs/chips de contacto), `16px` (cards), `999px` (botones, chips skill).
- **Mobile-first**, sin scroll horizontal.

---

## 6. Components

### Navbar
- Sticky no obligatorio en one-page; links anchor (`#about`, `#skills`, `#experience`, `#contact`).
- Logo izquierda (`JR.`, tracking 2px, `--primary-2`), links alineados a la derecha.

### Hero
- Eyebrow uppercase azul, H1 con gradiente sutil (blanco → `#93C5FD`), H2 dim.
- Lead máx. 620px ancho.
- CTA row: 1 primary + 2 ghost. Pill shape (radius 999).
- Meta row con bullets (años, idioma, remoto).

### Chip / Tag
- Background `--primary-soft`, border `--border`, text `--accent`, radius 999, padding 6×12.
- Variant `small` (dentro de cards): sin background, padding reducido.

### Experience Card
- Surface `--surface`, border `--border`, radius 16, padding 24.
- Hover: border `--primary-2`, `translateY(-2px)`, transición 150ms ease.
- Header horizontal: título + company a la izquierda, periodo + ubicación a la derecha (stack en mobile).
- Bullet list con punto azul de 4px.

### Contact grid
- `repeat(auto-fit, minmax(240px, 1fr))`.
- Cards con label uppercase dim + valor strong.
- Hover: border `--primary-2`, fondo `--surface-2`.

### Button
- Primary: `--primary` sólido, texto blanco, hover `--primary-2` + `translateY(-1px)`.
- Ghost: border `--border`, texto `--text`, hover border+texto `--primary-2`.
- Min height 44px (touch target).

---

## 7. Motion

- Duración micro-interacciones: **150–250ms**, easing `ease-out` entrada / `ease-in` salida.
- Solo animar `transform` y `opacity` (evitar width/height/top/left).
- Animaciones: hover en cards, CTA lift, fade-in de secciones al hacer scroll (opcional, usar IntersectionObserver).
- Respetar `prefers-reduced-motion`.

---

## 8. Accessibility (no negociable)

- Contrastes verificados: body ≥ 4.5:1, dim ≥ 3:1 (aplica a la paleta dada).
- Focus ring visible en todos los interactivos (`outline: 2px solid var(--primary-2); outline-offset: 2px`).
- `aria-label` en botones icon-only.
- Orden de tabulación = orden visual.
- Todos los links externos con `rel="noreferrer"` y texto descriptivo (no "click aquí").
- No convey info solo por color.
- Imagenes decorativas con `alt=""`, significativas con alt descriptivo.

---

## 9. Performance

- Tipografía: `font-display: swap` + preload solo del peso 400/600.
- Imágenes: WebP/AVIF, `loading="lazy"` para todo lo debajo del fold, `width/height` declarados (CLS < 0.1).
- Bundle: splitting por ruta si se agregan más vistas; para one-page basta un bundle.
- Reservar espacio para contenido asíncrono (skeleton si hubiera fetch de proyectos).

---

## 10. Anti-patterns (evitar)

- Plantillas corporativas genéricas (cards idénticas, hero con video stock).
- Emojis como íconos estructurales — usar Lucide/Heroicons.
- Mezclar estilos (glass + clay + flat) en la misma vista.
- Gris sobre gris, texto < 12px en body.
- Parallax decorativo o animaciones >500ms sin motivo.
- Depender de hover para acciones críticas.
- CTAs múltiples compitiendo por jerarquía — **una sola acción primaria visible por pantalla**.

---

## 11. Pre-delivery Checklist

### Visual
- [ ] Iconos SVG (Lucide), ninguno emoji
- [ ] Paleta aplicada solo via tokens CSS (sin hex sueltos en componentes)
- [ ] Consistencia de radius (12 / 16 / 999)
- [ ] Dark mode testeado como único modo soportado

### Interacción
- [ ] Hover + focus visibles en todos los interactivos
- [ ] Touch targets ≥ 44×44
- [ ] Disabled states claros
- [ ] Transiciones 150–300ms

### Layout
- [ ] Mobile (375), tablet (768), desktop (1024, 1440)
- [ ] Sin scroll horizontal
- [ ] Safe-area en mobile (notch)
- [ ] Spacing 4/8 px consistente

### Accesibilidad
- [ ] Contraste AA (4.5:1 body, 3:1 dim)
- [ ] Focus ring visible
- [ ] `prefers-reduced-motion` respetado
- [ ] Orden de tab correcto

### Performance
- [ ] Lighthouse > 95 en Performance y Accessibility
- [ ] CLS < 0.1, LCP < 2.5s
- [ ] Fuentes con `display: swap`

---

## 12. Reference Commands

Regenerar / ampliar con la skill:

```bash
# Design system completo
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "developer portfolio minimal blue" --design-system -p "Javier Rostagno Portfolio" -f markdown

# Estructura de landing
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "portfolio hero project grid" --domain landing

# UX deep-dive previo a entregar
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "animation accessibility loading z-index" --domain ux
```
