# Changelog (proyecto)

Entradas breves. Formato: `## YYYY-MM-DD` y viñetas.

## 2026-04-23

- Home: nueva seccion compacta `Nuestras alianzas` debajo de `Nuestras cifras`, con fondo azul claro de seccion completa, logos de SBS/CAVALI centrados en mayor escala y tooltip flotante profesional en hover/focus con contexto institucional de cada alianza.
- Home: se añadió un patrón reusable `ScrollReveal` para animar por scroll elementos internos del homepage (títulos, tarjetas, contenedores y CTAs en `nosotros` y `métricas`), más una entrada escalonada del contenido textual/acciones del hero; todo con respeto a `prefers-reduced-motion`.
- Nueva regla `.cursor/rules/iamgroup-ui-scroll-entry-exit.mdc`: la animación se aplica por componente interno (no solo por sección), con `stagger` suave y transiciones sobrias ligadas al viewport.
- Header: cambiado de `sticky` a **`fixed inset-x-0`** — resuelve (1) franja azul de `body` visible por el hack de margen negativo impreciso, (2) header siempre sólido en páginas internas porque el transparente sobre `body` se confundía con el color de fondo, y (3) menú móvil que empujaba el contenido en lugar de superponerse. Panel móvil con `bg-[#0f2d4e]` siempre explícito. `globals.css` define `--header-h` con `@media sm`. Páginas internas usan `pt-[calc(var(--header-h)+3rem)]`.
- Header transparente en el tope con `useIsAtPageTop`; fondo sólido `#0f2d4e` al desplazarse.
- Regla **`iamgroup-user-private-folders`**: `current-page/` y `references/` quedan fuera del uso proactivo del agente; nada bajo `references/` se enlaza en el código del sitio; el usuario puede @ archivos de `references/` como contexto del chat. Sustituye `iamgroup-ignore-user-draft-folder`. `.cursorignore` incluye `references/`.

## 2026-04-22

- Hero: fondos del carrusel sustituidos por URLs de **Unsplash** (imágenes de stock con licencia adecuada); eliminación de `public/hero/*` que provenía de `references/`; `next.config` amplía `remotePatterns` a `images.unsplash.com`. La carpeta `references/` no se usa como origen de assets en código (regla `iamgroup-user-private-folders`).
- Hero de inicio: carrusel de 3 diapositivas (institucional, financiamiento, inversiones) con transición por opacidad, controles, puntos, flechas, teclado, swipe en táctil, autopause al hover o si la pestaña no está visible, respeto a `prefers-reduced-motion` y CTA a rutas del sitio.
- Home: nueva sección de entrada institucional (`Nosotros`) y bloque de métricas (`Nuestras cifras`) debajo del hero, con copy breve orientado a conversión, tarjetas de acceso a Inversiones/Financiamiento y CTA a `Nosotros`, manteniendo paleta azul corporativa, estados interactivos y enfoque responsive.
- Home (`Nuestras cifras`): fondo de sección ajustado a un contraste más oscuro y animación de conteo en entrada (de 0 al valor final) activada por `IntersectionObserver`, con respeto a `prefers-reduced-motion`.
- Inicializado Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, con home, rutas de menú (placeholders), header fixed transparente en tope y sólido al scroll, logo IAMGroup, CTA «Mis inversiones» (URL configurable) y patrón de colores alineado a `colors.md`.
- Regla `iamgroup-ui-responsive` (siempre activa) y actualización de skill: la UI debe ser **mobile-first** y con la misma exigencia en móvil que en desktop; experiencia de marca enlaza a esta regla.
- Regla `iamgroup-ui-interactive-states`: anclas y botones con `cursor-pointer` e **idle, hover, active, focus-visible y disabled** de forma coherente (documentación y skill actualizados).
- Regla `iamgroup-ui-assets`: iconos en **SVG**; imágenes de bancos gratuitos (Unsplash, Pexels, etc.) y **verificar** que funcionan antes de integrar; skill y `docs/README` actualizados.

## 2026-04-21

- Añadida documentación obligatoria en `docs/` (rutas, changelog, índice) y regla `iamgroup-project-documentation` en `.cursor/rules/`.
