# AGENTS.md — noxell.dev · Website

Web pública del estudio noxell.dev: Astro 5, bilingüe (es/en), contenido
estático.

## Convenciones

- Idioma por defecto: español en `/`; inglés en `/en/`
  (`prefixDefaultLocale: false` en `astro.config.mjs`).
- Los artículos del blog viven en `src/content/blog/{es,en}/` como
  colecciones de contenido; el nombre del archivo define el slug/URL.
- Los textos de la interfaz están en `src/i18n/`; no hardcodear textos en
  los componentes, usa las utilidades de `src/i18n/`.
- Componentes en `src/components/`, páginas en `src/pages/`, JS de cliente
  en `src/scripts/`, estilos en `src/styles/`, datos en `src/data/`.
- Logos y favicons en `public/`: `logorojo.png` es el logo principal; los
  favicons (`favicon.svg`, `favicon.ico`, `favicon-96x96.png`,
  `apple-touch-icon.png`) ya están enlazados en `src/layouts/Layout.astro`.
  Si cambias el logo, actualiza ambos repos de noxell.dev (Website y
  Dashboard) para mantener la identidad común.
- Hay skills del proyecto en `.agents/skills/` (astro-framework, seo,
  accessibility, best-practices…): consúltalas antes de tocar esas áreas.
- `npm run check` antes de dar por terminado un cambio que toque
  TypeScript o las colecciones de contenido.
