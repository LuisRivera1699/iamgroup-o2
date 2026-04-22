"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

type CountUpNumberProps = {
  to: number;
  start: boolean;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
};

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function CountUpNumber({
  to,
  start,
  decimals = 0,
  prefix = "",
  suffix = "",
  durationMs = 1200,
}: CountUpNumberProps) {
  const [value, setValue] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!start) return;
    if (reducedMotion) {
      setValue(to);
      return;
    }

    let frame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = progress < 1 ? to * eased : to;
      setValue(next);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [durationMs, reducedMotion, start, to]);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("es-PE", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }),
    [decimals],
  );

  return (
    <span>
      {prefix}
      {formatter.format(value)}
      {suffix}
    </span>
  );
}

export function HomeMetricsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (hasEntered) return;
    const node = sectionRef.current;
    if (!node) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasEntered]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="home-metrics-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#0f2d4e] via-[#143c69] to-[#1d3f62]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c0deff]/55 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-[#96bde6]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-10 h-48 w-48 rounded-full bg-[#fbb03b]/15 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <ScrollReveal direction="left" delayMs={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c0deff]">
                Nuestras cifras
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delayMs={90}>
              <h2
                id="home-metrics-title"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              >
                Resultados que respaldan la gestión de IAMGroup.
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delayMs={170}>
            <Link
              href="/nosotros"
              className="inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-full border border-[#c0deff]/60 bg-[#c0deff]/10 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#c0deff]/20 active:bg-[#c0deff]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:min-h-12"
            >
              Conoce más
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delayMs={90} threshold={0.2}>
          <ul className="mt-9 grid gap-0 rounded-3xl border border-[#a0bad6]/45 bg-[#d1deed] p-5 shadow-[0_18px_42px_-34px_rgba(10,22,36,0.75)] sm:p-7 md:grid-cols-3 md:p-8">
            <li className="py-4 pt-2 md:pr-8">
              <ScrollReveal direction="up" delayMs={80} threshold={0.35}>
                <div className="flex flex-col">
                  <p className="text-4xl font-semibold leading-[1.02] tracking-tight text-[#0f2d4e] sm:text-5xl">
                    <CountUpNumber
                      to={400}
                      start={hasEntered}
                      prefix="US$ "
                      suffix="M+"
                    />
                  </p>
                  <p className="mt-3 max-w-[24ch] text-pretty text-base leading-snug text-[#143c69] sm:text-[1.05rem]">
                    Activos y patrimonios administrados
                  </p>
                </div>
              </ScrollReveal>
            </li>

            <li className="border-t border-[#7e9ab8]/35 py-4 pt-6 md:border-l md:border-t-0 md:px-8 md:pt-4">
              <ScrollReveal direction="up" delayMs={180} threshold={0.35}>
                <div className="flex flex-col">
                  <p className="text-4xl font-semibold leading-[1.02] tracking-tight text-[#0f2d4e] sm:text-5xl">
                    <CountUpNumber to={10} start={hasEntered} /> fondos
                  </p>
                  <p className="mt-3 max-w-[24ch] text-pretty text-base leading-snug text-[#143c69] sm:text-[1.05rem]">
                    Gestionados en dólares y soles
                  </p>
                </div>
              </ScrollReveal>
            </li>

            <li className="border-t border-[#7e9ab8]/35 py-4 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-4">
              <ScrollReveal direction="up" delayMs={280} threshold={0.35}>
                <div className="flex flex-col">
                  <p
                    className="text-4xl font-semibold leading-[1.02] tracking-tight text-[#0f2d4e] sm:text-5xl"
                    aria-label="Desde nueve hasta doce por ciento"
                  >
                    <span className="inline-flex items-baseline gap-2">
                      <CountUpNumber to={9} start={hasEntered} suffix="%" />
                      <span aria-hidden>-</span>
                      <CountUpNumber to={12} start={hasEntered} suffix="%" />
                    </span>
                  </p>
                  <p className="mt-3 max-w-[24ch] text-pretty text-base leading-snug text-[#143c69] sm:text-[1.05rem]">
                    Rentabilidades anuales generadas
                  </p>
                </div>
              </ScrollReveal>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal direction="up" delayMs={140}>
          <p className="mt-4 text-xs text-[#c8e2ff] sm:text-sm">
            Cifras referenciales de gestión histórica; no constituyen garantía
            de rendimiento futuro.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
