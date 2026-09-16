# noxell.dev · Web del estudio

Página web pública del estudio **noxell.dev**: servicios, portfolio, blog,
metodología y contacto. Bilingüe (español e inglés).

## Tecnologías

- **Astro 5** (contenido estático) + **TypeScript**
- **GSAP** y **OGL** para animaciones y efectos visuales
- Fuentes variables con **Fontsource** (Bricolage Grotesque, Inter, JetBrains Mono)
- Sitemap con **@astrojs/sitemap**
- Blog con **colecciones de contenido** (`src/content/blog/{es,en}`)

## Requisitos

- Node.js 20 o superior
- npm

## Puesta en marcha

```bash
# 1. Instalar dependencias
npm install

# 2. Arrancar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en el navegador.

## Despliegue

```bash
npm run build   # genera dist/ con el sitio estático
npm run preview # vista previa de la compilación
```

El contenido de `dist/` es estático y se puede servir desde cualquier hosting.

## Scripts

| Comando           | Descripción                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Servidor de desarrollo       |
| `npm run check`   | Chequeo de tipos de Astro    |
| `npm run build`   | Compilación de producción    |
| `npm run preview` | Vista previa de la compilación |

## Estructura

```
public/
  favicon.svg / favicon.ico / favicon-96x96.png → Favicons
  apple-touch-icon.png                          → Icono Apple
  web-app-manifest-*.png / site.webmanifest     → Iconos PWA
  logorojo.png / logoazul.png                   → Logos de Noxell Dev
  portfolio/                                    → Ilustraciones del portfolio
src/
  pages/         → Rutas: index.astro (es), en/index.astro, blog/…
  layouts/       → Layout.astro (metadatos, favicons, estructura común)
  components/    → Header, Hero, Servicios, Portfolio, Blog, …
  content/blog/  → Artículos en es/ y en/ (colecciones de contenido)
  i18n/          → Textos de la interfaz en cada idioma
  data/          → Datos del sitio (site.ts)
  scripts/       → JS de cliente (animaciones, acordeón…)
  styles/        → CSS global y de componentes
astro.config.mjs → Configuración (site, sitemap, i18n)
```

## Idiomas

Español en `/` (idioma por defecto, sin prefijo) e inglés en `/en/`.
Los textos de la interfaz están en `src/i18n/`; los artículos, en
`src/content/blog/{es,en}/`.
