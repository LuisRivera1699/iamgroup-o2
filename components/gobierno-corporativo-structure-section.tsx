"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const GOVERNANCE_PILLARS = [
  {
    id: "directorio",
    title: "Directorio",
    summary:
      "Conformado por profesionales con amplia experiencia financiera y empresarial, con sesiones mensuales de seguimiento estratégico.",
    detailPoints: [
      "Revisión de dirección, estrategia y desempeño de la gestora.",
      "Seguimiento de los fondos administrados con enfoque transparente.",
    ],
    iconSrc: "/icons/gobierno-corporativo/directorio.svg",
  },
  {
    id: "cumplimiento",
    title: "Oficial de Cumplimiento Corporativo",
    summary:
      "El OCC supervisa la implementación y funcionamiento del sistema de prevención de lavado de activos y financiamiento del terrorismo.",
    detailPoints: [
      "Monitoreo regulatorio transversal en toda la organización.",
      "Reporte directo a la UIF de la SBS para reforzar cumplimiento.",
    ],
    iconSrc: "/icons/gobierno-corporativo/cumplimiento-splaft.svg",
  },
  {
    id: "comites",
    title: "Comités",
    summary:
      "La toma de decisiones se refuerza con órganos especializados que evalúan inversiones y vigilan el cumplimiento de políticas.",
    detailPoints: [
      "Comité de Inversiones: evalúa operaciones según políticas vigentes.",
      "Comité de Vigilancia: supervisa el reglamento de los fondos.",
    ],
    iconSrc: "/icons/gobierno-corporativo/comites.svg",
  },
] as const;

const STAKEHOLDER_ACTIONS = [
  {
    id: "dialogo",
    title: "Diálogo continuo",
    iconSrc: "/icons/gobierno-corporativo/dialogo-stakeholders.svg",
  },
  {
    id: "transparencia",
    title: "Transparencia informativa",
    iconSrc: "/icons/gobierno-corporativo/transparencia-reportes.svg",
  },
  {
    id: "alineamiento",
    title: "Alineamiento de intereses",
    iconSrc: "/icons/gobierno-corporativo/alineamiento-intereses.svg",
  },
] as const;

export function GobiernoCorporativoStructureSection() {
  const [activePillarId, setActivePillarId] = useState<
    (typeof GOVERNANCE_PILLARS)[number]["id"] | null
  >(null);

  const activePillar = useMemo(
    () => GOVERNANCE_PILLARS.find((pillar) => pillar.id === activePillarId),
    [activePillarId],
  );

  useEffect(() => {
    if (!activePillar) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePillarId(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePillar]);

  return (
    <section
      id="gobierno-corporativo-detalle"
      aria-labelledby="gobierno-corporativo-detalle-title"
      className="scroll-mt-[calc(var(--header-h)+1.5rem)] bg-gradient-to-b from-[#edf5fc] via-[#f6faff] to-[#e9f2fb] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="left" delayMs={10}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3f62]">
            Buen gobierno corporativo
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" delayMs={90}>
          <h2
            id="gobierno-corporativo-detalle-title"
            className="mt-3 max-w-5xl text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0f2d4e] sm:text-4xl lg:text-5xl"
          >
            Estructura institucional con{" "}
            <span className="text-[#fbb03b]">control, disciplina y</span>{" "}
            trazabilidad en cada decisión.
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="left" delayMs={170}>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-[#1d3f62] sm:text-base">
            Nuestra gobernanza combina dirección estratégica, supervisión
            regulatoria y comités especializados para proteger la operación y
            fortalecer la confianza de inversionistas, clientes y aliados.
          </p>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <ScrollReveal direction="right" delayMs={90} className="h-full">
            <article className="h-full rounded-2xl border border-[#c2d9ec] bg-white p-5 shadow-[0_20px_42px_-32px_rgba(15,45,78,0.35)] sm:p-6">
              <div className="flex items-start gap-4">
                <Image
                  src="/icons/gobierno-corporativo/integridad-transparencia.svg"
                  alt=""
                  width={176}
                  height={120}
                  aria-hidden
                  className="h-16 w-auto shrink-0 object-contain sm:h-20"
                />
                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-[#0f2d4e]">
                    Integridad y transparencia
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1d3f62] sm:text-base">
                    Operamos bajo principios de ética, responsabilidad y
                    rendición de cuentas para sostener una administración
                    rigurosa en IAMGroup y sus operaciones relacionadas.
                  </p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal direction="left" delayMs={170} className="h-full">
            <article className="h-full rounded-2xl border border-[#c2d9ec] bg-white p-5 shadow-[0_20px_42px_-32px_rgba(15,45,78,0.35)] sm:p-6">
              <div className="flex items-start gap-4">
                <Image
                  src="/icons/gobierno-corporativo/elementos-gobierno.svg"
                  alt=""
                  width={176}
                  height={120}
                  aria-hidden
                  className="h-16 w-auto shrink-0 object-contain sm:h-20"
                />
                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-[#0f2d4e]">
                    Elementos clave
                  </h3>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-center gap-2 text-sm font-medium leading-relaxed text-[#1d3f62] sm:text-base">
                      <span aria-hidden className="text-[#0f2d4e]">
                        →
                      </span>
                      Directorio con revisión mensual
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium leading-relaxed text-[#1d3f62] sm:text-base">
                      <span aria-hidden className="text-[#0f2d4e]">
                        →
                      </span>
                      Oficial de Cumplimiento Corporativo (SPLAFT)
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium leading-relaxed text-[#1d3f62] sm:text-base">
                      <span aria-hidden className="text-[#0f2d4e]">
                        →
                      </span>
                      Comités de Inversiones y Vigilancia
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>

        <ul className="mt-5 grid gap-4 lg:grid-cols-3">
          {GOVERNANCE_PILLARS.map((pillar, index) => (
            <ScrollReveal
              key={pillar.id}
              direction="up"
              delayMs={130 + index * 80}
              threshold={0.14}
              className="h-full"
            >
              <li className="h-full">
                <article className="group relative overflow-hidden rounded-2xl border border-[#b8d0e5] bg-gradient-to-br from-white via-[#f8fbff] to-[#ecf4fb] p-5 text-left shadow-[0_20px_42px_-32px_rgba(15,45,78,0.35)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_26px_52px_-32px_rgba(15,45,78,0.45)] sm:p-6 lg:flex lg:h-full lg:flex-col">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#c0deff]/40 blur-2xl"
                  />
                  <div className="relative flex flex-col gap-5 lg:h-full">
                    <div className="flex items-start gap-4 lg:min-h-[7rem]">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#c2d9ec] bg-white/95 shadow-[0_10px_26px_-20px_rgba(15,45,78,0.55)] sm:h-16 sm:w-16">
                        <Image
                          src={pillar.iconSrc}
                          alt=""
                          width={176}
                          height={120}
                          aria-hidden
                          className="h-10 w-auto object-contain sm:h-12"
                        />
                      </div>
                      <h3 className="text-balance text-2xl font-semibold leading-tight text-[#0f2d4e]">
                        {pillar.title}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActivePillarId(pillar.id)}
                      className="inline-flex min-h-11 w-fit cursor-pointer items-center justify-center gap-2 rounded-full border border-[#0f2d4e]/20 bg-[#0f2d4e] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#143c69] active:bg-[#1d3f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e] sm:min-h-12 lg:mt-auto"
                    >
                      Ver más
                      <span aria-hidden className="text-base leading-none">
                        →
                      </span>
                    </button>
                  </div>
                </article>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal direction="up" delayMs={120}>
          <div className="mt-8 rounded-3xl border border-[#b8d0e5] bg-[#dceaf7] p-6 shadow-[0_20px_40px_-34px_rgba(15,45,78,0.35)] lg:p-8">
            <div className="flex flex-col gap-5">
              <h3 className="text-balance text-3xl font-semibold leading-tight text-[#0f2d4e] sm:text-4xl">
                Compromiso con grupos de interés
              </h3>

              <ul className="grid gap-3 sm:grid-cols-3">
                {STAKEHOLDER_ACTIONS.map((action) => (
                  <li key={action.id}>
                    <article className="h-full rounded-2xl border border-[#b8d0e5] bg-white/85 p-4 text-center">
                      <Image
                        src={action.iconSrc}
                        alt=""
                        width={120}
                        height={84}
                        aria-hidden
                        className="mx-auto h-12 w-auto object-contain"
                      />
                      <p className="mt-3 text-sm font-semibold leading-snug text-[#0f2d4e]">
                        {action.title}
                      </p>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {activePillar ? (
          <div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[#0f2d4e]/70 px-4 py-6 sm:px-6"
            onClick={() => setActivePillarId(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="gobierno-pilar-modal-title"
              className="w-full max-w-2xl rounded-2xl border border-[#c2d9ec] bg-white p-5 shadow-[0_28px_60px_-32px_rgba(6,16,30,0.9)] sm:p-7"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <h3
                  id="gobierno-pilar-modal-title"
                  className="text-balance text-2xl font-semibold leading-tight text-[#0f2d4e] sm:text-3xl"
                >
                  {activePillar.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setActivePillarId(null)}
                  aria-label="Cerrar detalle del pilar"
                  className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-[#0f2d4e]/20 bg-white text-xl leading-none text-[#0f2d4e] transition-colors hover:bg-[#edf5fc] active:bg-[#dce9f8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e]"
                >
                  ×
                </button>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#1d3f62] sm:text-base">
                {activePillar.summary}
              </p>

              <div className="mt-5 rounded-xl border border-[#b8d0e5] bg-[#edf5fc] px-4 py-3">
                <ul className="space-y-2">
                  {activePillar.detailPoints.map((detailPoint) => (
                    <li
                      key={detailPoint}
                      className="flex items-start gap-2 text-sm leading-relaxed text-[#1d3f62] sm:text-base"
                    >
                      <span aria-hidden className="mt-0.5 text-[#0f2d4e]">
                        •
                      </span>
                      <span>{detailPoint}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
