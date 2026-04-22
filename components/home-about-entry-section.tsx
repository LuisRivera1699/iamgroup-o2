import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const PILLAR_CARDS = [
  {
    id: "inversiones",
    audience: "Para inversionistas y familias",
    title: "Estrategias patrimoniales con criterio conservador",
    description:
      "Diseñamos alternativas diversificadas para proteger y hacer crecer patrimonio con acompañamiento experto y visión de largo plazo.",
    href: "/inversiones",
    cta: "Explorar inversiones",
    tone: "sky",
  },
  {
    id: "financiamiento",
    audience: "Para empresas en expansión",
    title: "Financiamiento oportuno para objetivos concretos",
    description:
      "Estructuramos soluciones flexibles de mediano y corto plazo para que su empresa avance con orden financiero y velocidad.",
    href: "/financiamiento",
    cta: "Ver financiamiento",
    tone: "navy",
  },
] as const;

export function HomeAboutEntrySection() {
  return (
    <section
      aria-labelledby="iamgroup-intro-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#c8e2ff] via-[#d1deed] to-[#a4bbd4]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#275384]/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#5f84ab]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-[#96bde6]/30 blur-3xl"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:gap-10 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <ScrollReveal direction="left" delayMs={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1d3f62]">
                Nosotros
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delayMs={90}>
              <h2
                id="iamgroup-intro-title"
                className="mt-3 text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-[#0f2d4e] sm:text-4xl lg:text-5xl"
              >
                Soluciones financieras para crecer con confianza.
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delayMs={180}>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-[#143c69] sm:text-base">
                En IAMGroup combinamos más de dos décadas de experiencia en el
                sistema financiero para guiar decisiones patrimoniales y de
                financiamiento con enfoque claro, rentable y responsable.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delayMs={210}>
            <Link
              href="/nosotros"
              className="inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-full border border-[#0f2d4e]/20 bg-[#0f2d4e] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#143c69] active:bg-[#1d3f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e] sm:min-h-12"
            >
              Conocer IAMGroup
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {PILLAR_CARDS.map((card, index) => {
            const isSky = card.tone === "sky";
            const direction = index % 2 === 0 ? "left" : "right";

            return (
              <ScrollReveal
                key={card.id}
                direction={direction}
                delayMs={120 + index * 130}
                threshold={0.14}
                className="h-full"
              >
                <article
                  className={[
                    "flex min-h-64 h-full flex-col rounded-3xl border p-6 shadow-[0_22px_55px_-36px_rgba(31,74,123,0.5)] sm:p-7",
                    isSky
                      ? "border-[#96bde6] bg-[#d1deed] text-[#0f2d4e]"
                      : "border-[#7e9ab8] bg-[#bbcadb] text-[#0f2d4e]",
                  ].join(" ")}
                >
                  <p
                    className="w-fit rounded-full bg-[#fbb03b] px-3 py-1 text-xs font-semibold tracking-wide text-[#0f2d4e]"
                  >
                    {card.audience}
                  </p>
                  <h3 className="mt-5 text-balance text-2xl font-semibold leading-[1.15]">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-[#1b3859] sm:text-base">
                    {card.description}
                  </p>

                  <ScrollReveal
                    direction="up"
                    delayMs={180 + index * 90}
                    threshold={0.3}
                    className="mt-auto pt-7"
                  >
                    <Link
                      href={card.href}
                      className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full bg-[#0f2d4e] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#143c69] active:bg-[#1d3f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e] sm:min-h-12"
                    >
                      {card.cta}
                      <span aria-hidden className="text-base leading-none">
                        →
                      </span>
                    </Link>
                  </ScrollReveal>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
