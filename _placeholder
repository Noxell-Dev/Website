---
name: landing-pages
description: Create landing pages with the noxell.dev design system and process. Use when asked to "create a landing page", "nueva landing", or to build a marketing/one-page site with the studio identity.
license: MIT
metadata:
  author: noxell.dev
  version: "1.0"
---

Actúa como diseñador y desarrollador web senior del estudio noxell.dev. Crea una landing page completa para **[NOMBRE DEL NEGOCIO]**, un **[SECTOR / TIPO DE NEGOCIO]** cuyo objetivo principal es **[OBJETIVO: captar clientes / vender / reservas / etc.]**.

## 1. Stack técnico

- **Astro 5** con TypeScript y Tailwind CSS. Contenido estático, sin backend.
- **Bilingüe español/inglés**: español en `/`, inglés en `/en/` (`prefixDefaultLocale: false`). Los textos de la interfaz van en `src/i18n/`; **nunca hardcodees textos en los componentes**.
- Estructura de carpetas: componentes en `src/components/`, páginas en `src/pages/`, JS de cliente en `src/scripts/`, estilos en `src/styles/`, datos en `src/data/`.
- Antes de dar por terminado: `npm run check` sin errores.

## 2. Identidad visual (sistema de diseño noxell.dev)

- **Fondo**: grafito oscuro con malla CSS en grises cálidos + tenue resplandor rojo. Nada de WebGL ni efectos pesados.
- **Colores exactos**:
  - Fondo: `#0a0a0d` · Superficie: `#121218` · Texto: `#f4f4f2` · Texto apagado: `#a3a3ae`
  - Rojo de marca: `#dc1212` (hover `#f60f0f`, texto `#ff6b6b`) — solo para acentos, CTAs y detalles clave
  - Blanco neutro para brillos sutiles y líneas/elementos secundarios
  - Azul `#2a2cc4` solo como color secundario puntual
- **Tipografías**: Bricolage Grotesque para titulares (display), Inter para cuerpo, JetBrains Mono para detalles técnicos/etiquetas.
- **Iconos**: SVG geométricos o glifos minimalistas. **Prohibido usar emojis como iconos**.
- Estética: oscura, premium y minimalista. Mucho aire, jerarquía tipográfica clara, micro-interacciones sutiles.

## 3. Estructura de la landing (en este orden)

1. **Header fijo**: logo + navegación (Servicios, Proceso, Casos, FAQ, Contacto) + selector de idioma ES/EN + CTA "Hablemos". En móvil: botón hamburguesa que despliega el menú (con `aria-expanded` y cierre con Escape), como en noxell.dev.
2. **Hero**: titular claro con la propuesta de valor en una frase, subtítulo que explique el beneficio, dos CTAs (principal: contacto; secundario: ver casos/proceso) y un visual o prueba social inmediata.
3. **Prueba social**: logos de clientes, cifras o testimonios breves.
4. **Servicios**: tarjetas con lo que ofrece el negocio, cada una con icono SVG, título y descripción de una línea.
5. **Proceso / Metodología**: 3–4 pasos numerados que expliquen cómo se trabaja, de forma que genere confianza.
6. **Casos o portfolio**: 2–4 ejemplos con resultado destacable.
7. **FAQ**: 4–6 preguntas reales que tengan los usuarios (no preguntas comerciales directas), en formato acordeón accesible.
8. **CTA final + Contacto**: formulario simple (nombre, email, mensaje) o datos de contacto claros + llamada a la acción directa.
9. **Footer**: logo, navegación, idiomas, aviso legal y redes.

## 4. Copywriting

- Español claro, conciso y directo. Tono profesional pero cercano, sin humo corporativo.
- Cada sección responde a una duda real del visitante y termina empujando suavemente al contacto.
- CTAs con verbos de acción ("Hablemos", "Pide tu presupuesto", "Reserva tu llamada").

## 5. SEO (obligatorio)

- Un único `H1` por página con la palabra clave principal; secciones en `H2`, subsecciones en `H3`.
- `title` único (~55 caracteres) y `meta description` (~150–160 caracteres) por idioma, con la palabra clave principal de forma natural.
- Open Graph y Twitter Cards completos, `canonical`, `hreflang` es/en y `x-default`.
- `robots.txt` permitiendo el rastreo + `sitemap.xml` con todas las URLs.
- Datos estructurados JSON-LD (`Organization` / `LocalBusiness` y `FAQPage` donde aplique).
- URLs limpias, imágenes con `alt` descriptivo y atributos `width`/`height` para evitar CLS.

## 6. Responsive y rendimiento

- **Mobile-first**: todo debe verse perfecto en móvil antes que en escritorio.
- Core Web Vitals en verde: LCP < 2,5 s, INP < 200 ms, CLS < 0,1. Imágenes optimizadas (formatos modernos, lazy loading fuera del hero), sin librerías pesadas.
- Navegación móvil con menú hamburguesa desplegable, no con enlaces apelotonados.

## 7. Accesibilidad

- HTML semántico (`header`, `nav`, `main`, `section`, `footer`), contraste suficiente, foco visible, `aria-label` en botones icónicos y `aria-expanded` en desplegables. Todo interactivo debe funcionar con teclado.

## Entregable

Código completo y funcional de la landing en Astro siguiendo todo lo anterior, con los textos en español e inglés. Al final, resume: estructura creada, decisiones de diseño y checklist SEO cumplido.

**Datos del proyecto:**
- Nombre del negocio: [NOMBRE]
- Sector: [SECTOR]
- Objetivo de la landing: [OBJETIVO]
- Servicios a destacar: [LISTA]
- Idiomas: español e inglés
- Contacto: [EMAIL / TELÉFONO / FORMULARIO]
