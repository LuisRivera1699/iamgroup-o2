# Documentación del proyecto (IAMGroup)

Mantenida **en el repo**; el agente y el equipo deben **actualizarla** cuando cambien rutas, stack, despliegue o convenciones (regla: `iamgroup-project-documentation`).

## Contenido

| Archivo | Propósito |
|---------|-----------|
| [routes.md](routes.md) | Mapa de rutas públicas (Next.js App Router) y notas. |
| [CHANGELOG.md](CHANGELOG.md) | Registro breve de cambios relevantes (fecha + descripción). |

## Stack (Next.js + Tailwind en el repo)

- **Node:** 20+ recomendado (el proyecto pide 20.19+ para ESLint 9; versiones 20.17 pueden mostrar `EBADENGINE` sin afectar al build en muchos entornos).
- **Dependencias:** `npm install` (hay `package-lock.json`).
- **Comandos:** `npm run dev` (Turbopack), `npm run build`, `npm start`, `npm run lint`.
- **Estructura:** `app/` (App Router), `components/`, `lib/`, estáticos bajo `public/` cuando apliquen; alias `@/*` en `tsconfig.json`.
- **Imágenes remotas:** `next.config.ts` — `iamgroup.pe` (logo) e `images.unsplash.com` (fondos del hero de inicio, stock con licencia Unsplash).
- **Variable opcional:** `NEXT_PUBLIC_INVESTOR_PORTAL_URL` — enlace del botón «Mis inversiones»; ver `.env.example`.

## Marca y diseño

- Paleta: `colors/colors.md` en la raíz del repo.
- **Responsive:** toda la UI es **mobile-first** (misma calidad en móvil que en desktop); regla `iamgroup-ui-responsive` en `.cursor/rules/`.
- **Controles:** enlaces y botones con `cursor-pointer` y estados idle, hover, active, focus y disabled; regla `iamgroup-ui-interactive-states` en `.cursor/rules/`.
- **Scroll motion:** cada sección debe animar sus elementos internos (títulos, tarjetas, CTAs, contenedores) con entrada/salida coherente al scroll (`opacity + translate` sobrio + stagger), respetando `prefers-reduced-motion`; regla `iamgroup-ui-scroll-entry-exit`.
- **Activos:** iconos en SVG; imágenes de bancos gratuitos (p. ej. Unsplash, Pexels) con licencia adecuada y verificación de que cargan; regla `iamgroup-ui-assets` en `.cursor/rules/`.
- **Carpetas personales** (`current-page/`, `references/`): el agente no las indexa para trabajar en el sitio; `references/` no se usa en `src` — ver `iamgroup-user-private-folders`. El usuario puede @ archivos bajo `references/` en el chat; si el @ falla, comentar `references/` en `.cursorignore`.
- Reglas de Cursor: `.cursor/rules/`.
