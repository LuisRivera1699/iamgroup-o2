"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";

type HeroSlide = {
  id: string;
  image: string;
  kicker: string;
  title: string;
  lead: string;
  cta: { href: string; label: string };
  ctaSecondary?: { href: string; label: string };
};

/** Fondos desde Unsplash (licencia Unsplash); no usar `references/` como origen en código. */
const SLIDES: readonly HeroSlide[] = [
  {
    id: "enfoque-iamgroup",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80",
    kicker: "Enfoque IAMGroup",
    title: "Especialistas en asesoría y gestión de inversiones",
    lead:
      "Integramos análisis financiero, estrategia y acompañamiento continuo para inversionistas y empresas que buscan financiamiento con respaldo experto.",
    cta: { href: "/inversiones", label: "Ir a inversiones" },
    ctaSecondary: { href: "/financiamiento", label: "Ir a financiamiento" },
  },
  {
    id: "inversionistas",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
    kicker: "Para inversionistas",
    title: "Impulse su capital con oportunidades analizadas en profundidad",
    lead:
      "Si busca inversiones, le guiamos con criterios técnicos, transparencia y seguimiento profesional para decidir con confianza.",
    cta: { href: "/inversiones", label: "Busco inversiones" },
  },
  {
    id: "financiamiento",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80",
    kicker: "Para empresas y personas",
    title: "Encuentre el financiamiento adecuado para avanzar con solidez",
    lead:
      "Si busca financiamiento, estructuramos alternativas de deuda y capital según su etapa, flujo y objetivos de crecimiento.",
    cta: { href: "/financiamiento", label: "Busco financiamiento" },
  },
];

const AUTO_MS = 7000;

type TouchStart = { x: number; y: number; t: number };

export function HomeHeroCarousel() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [hoverPause, setHoverPause] = useState(false);
  const idBase = useId();
  const touch = useRef<TouchStart | null>(null);
  const total = SLIDES.length;

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  const goTo = useCallback((next: number) => {
    setIndex(next);
  }, []);

  useEffect(() => {
    if (reducedMotion || tabHidden || hoverPause) return;
    const t = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(t);
  }, [go, reducedMotion, tabHidden, hoverPause, index]);

  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    onVis();
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
    if (e.key === "Home") {
      e.preventDefault();
      goTo(0);
    }
    if (e.key === "End") {
      e.preventDefault();
      goTo(total - 1);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const p = e.touches[0];
    touch.current = { x: p.clientX, y: p.clientY, t: Date.now() };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const p = e.changedTouches[0];
    const dx = p.clientX - touch.current.x;
    const dy = p.clientY - touch.current.y;
    const dt = Date.now() - touch.current.t;
    touch.current = null;
    if (dt > 600 || Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.2) {
      return;
    }
    if (dx < 0) go(1);
    else go(-1);
  };

  return (
    <div>
      <section
        className="relative w-full"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Presentación principal"
        onKeyDown={onKeyDown}
        onPointerEnter={() => setHoverPause(true)}
        onPointerLeave={() => setHoverPause(false)}
        tabIndex={0}
      >
        <h1 className="sr-only">
          IAMGroup — grupo financiero: institución, financiamiento e inversiones
        </h1>
        <div
          className="relative h-[min(85dvh,900px)] min-h-[22rem] w-full overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {SLIDES.map((slide, i) => {
            const active = i === index;
            return (
              <div
                key={slide.id}
                className={[
                  "absolute inset-0",
                  !reducedMotion
                    ? `transition-opacity duration-700 ease-out ${active ? "z-[1] opacity-100" : "z-0 opacity-0 [pointer-events:none]"}`
                    : active
                      ? "z-[1] opacity-100"
                      : "z-0 hidden opacity-0 [pointer-events:none]",
                ].join(" ")}
                aria-hidden={!active}
                id={`${idBase}-panel-${i}`}
                role="group"
                aria-roledescription="diapositiva"
                aria-label={`${i + 1} de ${total}`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority={i === 0}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#0a1624]/[0.88] via-[#0c2c50]/[0.55] to-[#0f2d4e]/[0.2]"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0a1624]/80 via-transparent to-[#0f2d4e]/20"
                    aria-hidden
                  />
                </div>
                <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:mx-auto lg:max-w-7xl lg:px-8 lg:pb-32">
                  <p
                    className={[
                      "text-xs font-medium uppercase tracking-[0.2em] text-[#c0deff]/90",
                      !reducedMotion
                        ? `transform-gpu transition-[opacity,transform] duration-700 ease-out ${active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`
                        : "",
                    ].join(" ")}
                    style={
                      reducedMotion
                        ? undefined
                        : { transitionDelay: active ? "80ms" : "0ms" }
                    }
                  >
                    {slide.kicker}
                  </p>
                  <h2
                    className={[
                      "mt-2 max-w-[20ch] text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:max-w-[22ch] sm:text-4xl lg:max-w-[26ch] lg:text-5xl",
                      !reducedMotion
                        ? `transform-gpu transition-[opacity,transform] duration-700 ease-out ${active ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`
                        : "",
                    ].join(" ")}
                    style={
                      reducedMotion
                        ? undefined
                        : { transitionDelay: active ? "150ms" : "0ms" }
                    }
                  >
                    {slide.title}
                  </h2>
                  <p
                    className={[
                      "mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#d1d1d1] sm:text-lg",
                      !reducedMotion
                        ? `transform-gpu transition-[opacity,transform] duration-700 ease-out ${active ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`
                        : "",
                    ].join(" ")}
                    style={
                      reducedMotion
                        ? undefined
                        : { transitionDelay: active ? "230ms" : "0ms" }
                    }
                  >
                    {slide.lead}
                  </p>
                  <div
                    className={[
                      "mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4",
                      !reducedMotion
                        ? `transform-gpu transition-[opacity,transform] duration-700 ease-out ${active ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`
                        : "",
                    ].join(" ")}
                    style={
                      reducedMotion
                        ? undefined
                        : { transitionDelay: active ? "320ms" : "0ms" }
                    }
                  >
                    <Link
                      href={slide.cta.href}
                      className="inline-flex min-h-11 min-w-[10rem] cursor-pointer items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#0f2d4e] transition-opacity hover:opacity-95 active:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:min-h-12"
                    >
                      {slide.cta.label}
                    </Link>
                    {slide.ctaSecondary ? (
                      <Link
                        href={slide.ctaSecondary.href}
                        className="inline-flex min-h-11 min-w-[10rem] cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/10 active:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:min-h-12"
                      >
                        {slide.ctaSecondary.label}
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex items-end justify-end gap-2 px-4 pb-4 sm:px-6 sm:pb-5 lg:px-8">
          <div
            className="pointer-events-auto flex items-center gap-1 sm:gap-2"
            role="tablist"
            aria-label="Seleccionar diapositiva"
          >
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-controls={`${idBase}-panel-${i}`}
                aria-label={`${s.kicker}, diapositiva ${i + 1}`}
                className={[
                  "h-2.5 w-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-2 sm:min-w-8 sm:rounded-sm",
                  i === index
                    ? "bg-white sm:min-w-10"
                    : "bg-white/35 hover:bg-white/60",
                ].join(" ")}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute right-2 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 sm:right-4 lg:right-6">
          <button
            type="button"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0f2d4e]/50 text-white backdrop-blur-sm transition hover:bg-[#0f2d4e]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => go(-1)}
            aria-label="Diapositiva anterior"
          >
            <span aria-hidden className="text-lg leading-none">
              ‹
            </span>
          </button>
          <button
            type="button"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0f2d4e]/50 text-white backdrop-blur-sm transition hover:bg-[#0f2d4e]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => go(1)}
            aria-label="Siguiente diapositiva"
          >
            <span aria-hidden className="text-lg leading-none">
              ›
            </span>
          </button>
        </div>

        <p className="sr-only" role="status" aria-live="polite" aria-atomic>
          {`Diapositiva ${index + 1} de ${total}: ${SLIDES[index].title}`}
        </p>
      </section>
      <p className="border-t border-[#1d3f62]/30 bg-gradient-to-b from-[#0a1624] to-[#0c2c50] px-4 py-2 text-center text-[0.7rem] text-[#8da1b8] sm:text-xs">
        Fotografías de fondo con fines ilustrativos (Unsplash). No constituyen
        oferta ni asesoría.
      </p>
    </div>
  );
}
