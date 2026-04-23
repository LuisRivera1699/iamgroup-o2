# Changelog (proyecto)

Entradas breves. Formato: `## YYYY-MM-DD` y viñetas.

## 2026-04-23

- Contacto (build): `ContactoAdvisorFormSection` ahora se renderiza dentro de `Suspense` en `/contacto` para cumplir con Next.js al usar `useSearchParams` y evitar el fallo de prerender en despliegues estáticos de Vercel.
- Gobierno corporativo (pilares): se eliminó el espacio vertical innecesario en mobile; la estandarización de altura y alineación del CTA se mantiene enfocada a desktop (`lg`) para evitar tarjetas estiradas.
- Gobierno corporativo (pilares): refinada la alineación interna de cards con una franja superior uniforme (ícono+título) y CTA anclado al pie, para alinear visualmente los botones `Ver más` entre las tres tarjetas.
- Gobierno corporativo (pilares): se estandarizó la altura de las cards de `Directorio`, `Oficial de Cumplimiento Corporativo` y `Comités` para que mantengan dimensiones uniformes en la misma fila.
- Gobierno corporativo (pilares): las cards de `Directorio`, `Oficial de Cumplimiento Corporativo` y `Comités` pasaron a formato sintético (ícono + título + `Ver más`) con modal centrado para el contenido detallado, replicando el patrón de Inversiones/Financiamiento.
- Gobierno corporativo (grupos de interés): se retiró el texto descriptivo del bloque de `Compromiso con grupos de interés` y se reajustó su layout para eliminar espacios en blanco y mantener alineación visual.
- Inversiones y Financiamiento (cards de productos): se centró verticalmente el contenido interno (ícono, título y CTA) para corregir el desbalance visual entre tarjetas de distintas alturas.
- Financiamiento (sección productos): se retiró el párrafo introductorio sobre liquidez y capital de trabajo, y las cards de `Factoring`, `Confirming`, `Adelanto de flujos` y `Estructuración y financiamiento a mediano plazo` quedaron en formato sintético (ícono + título + `Ver más`).
- Financiamiento (sección productos): el detalle que antes estaba dentro de cada card ahora se muestra en modal centrado al hacer click en `Ver más`, con cierre por botón, fondo o tecla `Escape`, y composición visual alineada al patrón premium aplicado en Inversiones.
- Inversiones (cards de productos): refinada la composición visual de `Fondo Medicash/Soles` y `Fondo Facturas Dólares` con layout más compacto y balanceado (fondo con gradiente suave, cápsula para ícono y CTA integrado), eliminando el vacío visual de la versión previa.
- Inversiones (sección productos): se retiró el párrafo de propuesta competitiva/diversificada y las cards `Fondo Medicash/Soles` y `Fondo Facturas Dólares` quedaron en formato sintético (solo ícono + título) con accionable `Ver más`.
- Inversiones (sección productos): el contenido descriptivo que estaba dentro de cada card ahora se muestra en un modal centrado al hacer click en `Ver más`, con cierre por botón, fondo o tecla `Escape`.
- Nosotros (sección de soluciones): se retiraron los párrafos descriptivos de las cards `Inversiones` y `Financiamiento`, dejando un bloque más sintético para la opción de diseño 2.
- Home (sección `Nosotros`): se retiró el párrafo descriptivo de las dos cards de acceso (`Inversiones` y `Financiamiento`) para un bloque más directo y limpio en la opción de diseño 2.
- Home (`Por qué elegirnos`): las cards de `Experiencia probada y comprobada` quedaron simplificadas a solo ícono + título; se retiraron el texto adicional y el contenido revelado en hover/click.
- Home (Por qué elegirnos): ícono `Experiencia y conocimiento` rediseñado en SVG propio con composición clásica (medalla con estrella en amarillo corporativo y libro abierto con páginas) para ganar estética, coherencia de marca y alejarse del aspecto genérico anterior.
- Home (Por qué elegirnos): ícono `Inversiones a medida y seguras` rediseñado en SVG propio con escudo institucional, sello amarillo con check y barras ascendentes, manteniendo coherencia visual con el nuevo ícono de experiencia.
- Inversiones (Fondo Medicash/Soles): ícono simplificado a una sola moneda institucional con anillo externo azul, aro interior en azul claro, acento amarillo de marca y símbolo `S/.` vectorial al centro para lectura nítida del producto.
- Inversiones (Fondo Facturas Dólares): ícono reemplazado por una moneda institucional consistente con la de Soles (aros azul/azul claro, núcleo amarillo) y símbolo `$` vectorial al centro para lectura inmediata del producto.
- Inversiones (Flujo del capital · paso 01): ícono `Inversionista` rediseñado como silueta institucional (cabeza + torso) con acento amarillo corporativo en pin y detalle sutil de cuello en V, acorde al sistema de íconos del sitio.
- Inversiones (Flujo del capital · pasos 02-05): íconos rediseñados en línea institucional común — `IAM/Fondos` con documento + lupa de análisis, `CAVALI` con documento y sello amarillo de verificación, `Empresa AAA` con edificio corporativo y distintivo amarillo de calificación, y `Inversionista (retorno)` con ciclo de beneficios creciente y marcador amarillo.
- Financiamiento (íconos): rediseño completo del set `soluciones-liquidez`, `factoring`, `confirming`, `adelanto-flujos` y `mediano-plazo` siguiendo el sistema visual institucional (navy, azul claro y acento amarillo corporativo), con moneda `S/` consistente y símbolos semánticos (documento, reloj, calendario, check) para reforzar la lectura del producto.
- Gobierno corporativo (íconos): rediseño completo del set `integridad-transparencia`, `elementos-gobierno`, `directorio`, `cumplimiento-splaft`, `comites`, `dialogo-stakeholders`, `transparencia-reportes` y `alineamiento-intereses` bajo el sistema institucional (navy, azul claro y acento amarillo) con símbolos semánticos de escudo, nodos, mesa de directorio, documento + escudo, clipboard, diálogos, ojo y flechas alineadas.
- Home (Por qué elegirnos): ícono `Gestión con resultados` rediseñado con medalla institucional (flecha amarilla ascendente) y panel con barras + línea de tendencia culminando en marcador amarillo, cerrando la familia visual de la sección junto a `experience` y `security`.
- Contacto (routing): se habilitó preselección por query (`/contacto?interes=inversiones|financiamiento`) y el formulario ahora autoselecciona el interés inicial al llegar desde CTAs contextuales.
- Home/Inversiones/Financiamiento: los botones `Contacta a un asesor` vinculados a inversiones o financiamiento ahora redirigen a contacto con la preselección correspondiente; en contextos no específicos se mantiene `/contacto` sin preselección.
- Contacto: la vista dejó el placeholder y ahora incluye hero institucional con copy de orientación comercial, acento amarillo de marca y fondo de imagen de stock (Unsplash) con overlays de contraste.
- Contacto: nuevo formulario interactivo `Conversa con un asesor` con flujo local sin integración externa; al enviar muestra una vista de agradecimiento en la misma página.
- Contacto (formulario): selector dinámico de opciones según interés (`Inversiones` o `Financiamiento`), campos solicitados (nombre, DNI, correo, celular, mensaje), aceptación de políticas y botón `Enviar` con estados de interacción/validación.
- Gobierno corporativo: se reemplazó el placeholder por una sección completa de `Buen gobierno corporativo` inspirada en las referencias visuales, con bloque institucional, tarjetas de `Directorio`/`Oficial de Cumplimiento Corporativo`/`Comités` y panel de `Compromiso con grupos de interés`.
- Gobierno corporativo (pilares): cards de `Directorio`, `Oficial de Cumplimiento Corporativo` y `Comités` estandarizadas con la misma estructura interna (zona de ícono, jerarquía de título, cuerpo y bloque de detalle) para lectura y alturas más coherentes.
- Gobierno corporativo: se añadió como última sección `Nuestras alianzas` reutilizando el bloque de Home para mantener respaldo institucional y consistencia entre vistas.
- Gobierno corporativo: nueva iconografía SVG propia en `public/icons/gobierno-corporativo/` para integridad/transparencia, elementos de control, pilares de gobierno y acciones con stakeholders, manteniendo coherencia visual de marca.
- Gobierno corporativo: nuevo hero institucional con imagen de fondo (Unsplash), overlays para contraste, copy orientado a confianza/estructura y CTA `Conoce más` con ancla al siguiente bloque.
- Gobierno corporativo: el ancla `#gobierno-corporativo-detalle` quedó conectada a la nueva sección de contenido para mantener el flujo de lectura desde el CTA `Conoce más`.
- Global UX: habilitado `scroll-behavior: smooth` en `html` con fallback automático para `prefers-reduced-motion`.
- Financiamiento: la vista dejó el placeholder y ahora replica la estructura inicial de Inversiones con hero + sección de productos traslapada, copy propio orientado a liquidez empresarial y CTA `Contacta a un asesor` hacia `/contacto`.
- Financiamiento (productos): nuevo bloque comercial con 4 soluciones (`Factoring`, `Confirming`, `Adelanto de flujos`, `Estructuración y financiamiento a mediano plazo`), detalle visible por card e iconografía SVG propia para coherencia visual con marca.
- Financiamiento: se añadió al cierre de la página la sección `Nuestras alianzas` reutilizada desde Home para mantener respaldo institucional y consistencia visual entre vistas.
- Inversiones: se reutilizó la sección `Nuestras cifras` como bloque siguiente y el CTA del bloque se parametrizó para mostrar `Contacta a un asesor` con destino `/contacto`.
- Inversiones: nueva sección didáctica `Cómo movemos tu capital` (fondo oscuro con imagen + overlay) con diagrama visual de flujo de capital en 5 pasos y bloque claro de `Herramientas de evaluación`.
- Inversiones (productos): actualización de titular principal por una versión propia de marca, evitando wording genérico y manteniendo jerarquía visual con acento amarillo.
- Inversiones (sección productos): refinada la integración visual con el hero (traslape más orgánico), el texto de impacto pasó a acento amarillo de marca y se eliminó el reveal por hover para mostrar el detalle completo de cada fondo de forma directa.
- Inversiones: nueva segunda sección traslapada al hero con enfoque comercial directo para inversionistas, resumen de propuesta competitiva/diversificada y cards de producto (`Fondo Medicash/Soles`, `Fondo Facturas Dólares`) con detalle revelado en hover/click e iconografía SVG propia.
- Inversiones: hero section renovado con imagen de fondo de stock (Unsplash), copy de impacto orientado a inversionistas, resaltado amarillo de marca y CTA `Contacta a un asesor` hacia `/contacto` sin formulario embebido.
- Nosotros (Directorio): corregido el espacio vacío excesivo en tarjetas; se retiró la altura mínima global y se normalizó solo el bloque de nombre/cargo para mantener coherencia sin huecos.
- Nosotros (Directorio): se normalizó la altura de tarjetas para mantener dimensiones coherentes entre perfiles en una sola fila/carrusel, incluso cuando cambian los saltos de línea en nombres y cargos.
- Nosotros (Directorio): ahora nunca se divide en dos filas; mantiene una sola fila mientras haya espacio y, al no caber, cambia a carrusel automático con drag, flechas y puntos de navegación.
- Nosotros: en `Nuestras cifras` se ocultó el botón `Conoce más` cuando el bloque se renderiza dentro de `/nosotros`, manteniéndolo activo en Home.
- Nosotros: se añadieron al final de la página las secciones `Nuestras cifras` y `Nuestras alianzas` reutilizando los bloques del home para completar el cierre institucional.
- Nosotros (valores): interacción hover refinada; cada valor ahora resalta con fondo amarillo y texto azul oscuro para un acento más alineado a marca.
- Nosotros (core/diagrama): nodo central actualizado a círculo oscuro con etiqueta `Núcleo` + logo IAMGroup para mejorar contraste y jerarquía de marca.
- Nosotros (core/diagrama): refinada la composición visual en desktop con grilla 3x3 y conectores centrados para eliminar solapes y mejorar legibilidad de los bloques estratégicos.
- Nosotros (core): sección rediseñada a formato visual tipo diagrama estratégico (nodo central IAMGroup + bloques conectados de Nosotros/Propuesta/Misión/Visión en desktop) con versión compacta en móvil.
- Nosotros (valores): cada valor ahora resalta en amarillo corporativo al pasar el mouse, manteniendo separadores sobrios para una lectura clara.
- Nosotros: nueva sección clara de información core (`Nosotros`, `Propuesta de valor`, `Misión`, `Visión`) con layout en cards y bloque tipográfico de `Nuestros valores` para reforzar claridad, confianza y coherencia institucional.
- Nosotros (Directorio): el CTA textual `Ver LinkedIn` fue reemplazado por el logo de LinkedIn sin contenedor circular y reubicado en la esquina derecha del bloque nombre/cargo, manteniendo accesibilidad con `aria-label`.
- Nosotros: nueva sección `Directorio` con 3 perfiles ejecutivos en cards (foto, nombre, cargo, enlace a LinkedIn y descripción visible en hover/focus) para reforzar confianza y claridad institucional.
- Nosotros (cards): alineación interna ajustada para mejor consistencia visual entre columnas y `chips` actualizados a amarillo corporativo.
- Nosotros: segunda sección incorporada y expandida con tarjetas traslapadas al hero (Inversiones y Financiamiento), manteniendo síntesis de oferta y resaltando líneas clave de productos/soluciones.
- Nosotros (hero): se retiró el rótulo superior de sección y se destacó en amarillo corporativo una frase clave del titular para reforzar jerarquía visual.
- Nosotros: hero section renovado con imagen de fondo de stock (Unsplash), overlay para legibilidad, titular corto de impacto, texto institucional resumido y CTA `Contacta a un asesor` hacia `/contacto`.
- Home: se retiró el aviso textual bajo el hero sobre fotografías de fondo ilustrativas.
- Footer: botón `Mis inversiones` reubicado debajo del logo para mejorar jerarquía visual y mantener consistencia con el header.
- Global: nuevo `SiteFooter` simple/profesional en azul oscuro corporativo (`#0f2d4e`) con logo IAMGroup, enlaces de navegación y legales, botón `Mis inversiones` consistente con el header, copyright dinámico (`© año actual`) y crédito externo a Team Aurora.
- Home: `Por que elegirnos` ajustada con fondo de imagen de stock gratuita (Unsplash) y overlay para legibilidad; se recupera el estilo claro de cards y la paleta original de iconos SVG.
- Home: nueva seccion `Por que elegirnos` con encabezado + CTA a contacto y 3 cards resumidas (experiencia, resultados, seguridad) con iconos SVG propios; cada card revela detalle en hover/focus y al tocar en movil, con animacion de entrada por scroll.
- Home: nueva seccion compacta `Nuestras alianzas` debajo de `Nuestras cifras`, con fondo azul claro de seccion completa, logos de SBS/CAVALI centrados en mayor escala, tooltip flotante profesional en hover/focus y animacion de entrada por scroll con `stagger` suave.
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
