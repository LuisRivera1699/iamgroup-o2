import Image from "next/image";
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
                <article className="flex h-full flex-col rounded-2xl border border-[#c2d9ec] bg-white p-5 shadow-[0_20px_42px_-32px_rgba(15,45,78,0.35)] sm:p-6">
                  <div className="flex h-14 items-center sm:h-16">
                    <Image
                      src={pillar.iconSrc}
                      alt=""
                      width={176}
                      height={120}
                      aria-hidden
                      className="h-12 w-auto object-contain sm:h-14"
                    />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#0f2d4e] lg:min-h-[4.6rem]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1d3f62] sm:text-base lg:min-h-[8.6rem]">
                    {pillar.summary}
                  </p>
                  <div className="mt-4 rounded-xl border border-[#b8d0e5] bg-[#edf5fc] px-4 py-3">
                    <ul className="space-y-2">
                      {pillar.detailPoints.map((detailPoint) => (
                        <li
                          key={detailPoint}
                          className="flex items-start gap-2 text-sm leading-relaxed text-[#1d3f62]"
                        >
                          <span aria-hidden className="mt-0.5 text-[#0f2d4e]">
                            •
                          </span>
                          <span>{detailPoint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal direction="up" delayMs={120}>
          <div className="mt-8 rounded-3xl border border-[#b8d0e5] bg-[#dceaf7] p-6 shadow-[0_20px_40px_-34px_rgba(15,45,78,0.35)] lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.25fr_1.75fr] lg:items-start">
              <div>
                <h3 className="text-balance text-3xl font-semibold leading-tight text-[#0f2d4e] sm:text-4xl">
                  Compromiso con grupos de interés
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1d3f62] sm:text-base">
                  Mantenemos una relación cercana y transparente con
                  inversionistas, empresas, reguladores y aliados, promoviendo
                  decisiones alineadas al interés de largo plazo.
                </p>
              </div>

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
      </div>
    </section>
  );
}
