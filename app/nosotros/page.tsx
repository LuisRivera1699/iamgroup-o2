import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeAlliancesSection } from "@/components/home-alliances-section";
import { HomeMetricsSection } from "@/components/home-metrics-section";
import { NosotrosDirectorySection } from "@/components/nosotros-directory-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LOGO_IAM_URL } from "@/lib/site";

const SOLUTION_CARDS = [
  {
    id: "inversiones",
    badge: "Para inversionistas",
    title: "Inversiones",
    description:
      "Diseñamos alternativas para un portafolio diversificado, conservador y rentable según su perfil de riesgo.",
    highlights: ["Fondo Medicash/Soles", "Fondo Facturas Dólares"],
    href: "/inversiones",
    cta: "Ver inversiones",
    tone: "sky",
  },
  {
    id: "financiamiento",
    badge: "Para empresas",
    title: "Financiamiento",
    description:
      "Estructuramos soluciones oportunas y flexibles para impulsar crecimiento empresarial con ejecución ágil.",
    highlights: [
      "Factoring",
      "Confirming",
      "Adelanto de flujos",
      "Estructuración y financiamiento a mediano plazo",
    ],
    href: "/financiamiento",
    cta: "Ver financiamiento",
    tone: "navy",
  },
] as const;

const BOARD_MEMBERS = [
  {
    id: "luis-castro",
    name: "Luis Castro Echecopar",
    role: "Director y Gerente General",
    bio: "Más de 28 años en el sector financiero, con posiciones de dirección en BBVA, Santander, BanBif y SAFs. Ha liderado asesoría y estructuración financiera para CineStar y la Universidad San Juan Bautista, y fue Gerente y Director en B Time (representante de Casio y Swatch).",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
    linkedin:
      "https://www.linkedin.com/search/results/people/?keywords=Luis%20Castro%20Echecopar",
  },
  {
    id: "eduardo-rosa",
    name: "Eduardo De La Rosa Cárdenas",
    role: "Presidente del Directorio",
    bio: "Empresario con sólida trayectoria en salud e inmobiliario. Principal accionista de la Clínica Providencia y propietario de Constructora SCI SAC, con más de 20 años de experiencia en el mercado inmobiliario.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    linkedin:
      "https://www.linkedin.com/search/results/people/?keywords=Eduardo%20De%20La%20Rosa%20Cardenas",
  },
  {
    id: "eduardo-morales",
    name: "Eduardo Morales",
    role: "Director Corporativo",
    bio: "Ejecutivo con experiencia en Interbank, BanBif, Banco Pichincha y Clínica San Borja. Actualmente preside el Directorio de Control Parking y participa en el comité de riesgos de Caja Huancayo. Exdecano de la Facultad de Economía de la Universidad de Lima.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    linkedin:
      "https://www.linkedin.com/search/results/people/?keywords=Eduardo%20Morales%20director%20corporativo",
  },
] as const;

const CORE_DIAGRAM_ITEMS = [
  {
    id: "nosotros-core",
    title: "Nosotros",
    text: "Brindamos soluciones empresariales para crecimiento patrimonial y acceso a financiamientos a la medida, con un equipo de más de 25 años de experiencia financiera.",
  },
  {
    id: "propuesta-valor",
    title: "Propuesta de valor",
    text: "Nos enfocamos en superar las expectativas de nuestros clientes mediante asesoría especializada, un portafolio diversificado, conservador y rentable, y soluciones de financiamiento oportunas y flexibles.",
  },
  {
    id: "mision",
    title: "Misión",
    text: "Ser el pilar financiero de nuestros clientes para que cumplan sus objetivos de forma efectiva y responsable.",
  },
  {
    id: "vision",
    title: "Visión",
    text: "Ser reconocidos como una empresa peruana referente en soluciones empresariales conservadoras, rentables y transparentes, a través de una experiencia de servicio que supere las expectativas.",
  },
] as const;

const CORE_VALUES = [
  "Transparencia",
  "Integridad",
  "Pasión",
  "Enfoque en resultados",
] as const;

export const metadata: Metadata = {
  title: "Nosotros",
};

export default function NosotrosPage() {
  return (
    <main id="contenido-principal" className="bg-[#0f2d4e]">
      <section className="relative isolate overflow-hidden pb-24 pt-[calc(var(--header-h)+2.2rem)] sm:pb-28 sm:pt-[calc(var(--header-h)+2.8rem)] lg:pb-32">
        <Image
          src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=2200&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[#0b1b2d]/90 via-[#0f2d4e]/72 to-[#0f2d4e]/45"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0f2d4e]/80 via-transparent to-[#0f2d4e]/35"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c0deff]/60 to-transparent"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal direction="left" delayMs={0}>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.07] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Impulsamos{" "}
                <span className="text-[#fbb03b]">crecimiento patrimonial</span>{" "}
                con asesoría financiera de alto nivel.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="left" delayMs={110}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#d1deed] sm:text-lg">
                Brindamos soluciones empresariales y financiamientos a la
                medida, respaldados por un equipo con más de 25 años de
                experiencia en el sistema financiero.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={250}>
              <div className="mt-8 sm:mt-10">
                <Link
                  href="/contacto"
                  className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#0f2d4e] transition-opacity hover:opacity-95 active:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:min-h-12"
                >
                  Contacta a un asesor
                  <span aria-hidden className="text-base leading-none">
                    →
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="nosotros-soluciones-title"
        className="relative z-20 -mt-12 pb-14 sm:-mt-16 sm:pb-16 lg:-mt-20 lg:pb-20"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delayMs={60}>
            <div className="rounded-3xl border border-[#7e9ab8]/45 bg-[#123b66]/95 p-5 shadow-[0_24px_55px_-36px_rgba(7,18,34,0.95)] sm:p-7 lg:p-8">
              <h2
                id="nosotros-soluciones-title"
                className="text-balance text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl"
              >
                Soluciones financieras para crecer con confianza.
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#d1deed] sm:text-base">
                Combinamos experiencia, asesoría estratégica y ejecución para
                impulsar oportunidades de crecimiento patrimonial y acceso a
                financiamiento a la medida.
              </p>
            </div>
          </ScrollReveal>

          <ul className="mt-4 grid gap-4 lg:grid-cols-2">
            {SOLUTION_CARDS.map((card, index) => {
              const isSky = card.tone === "sky";

              return (
                <ScrollReveal
                  key={card.id}
                  direction={index === 0 ? "left" : "right"}
                  delayMs={120 + index * 90}
                  threshold={0.16}
                  className="h-full"
                >
                  <li className="h-full">
                    <article
                      className={[
                        "flex h-full flex-col items-start rounded-2xl border p-5 shadow-[0_20px_45px_-30px_rgba(11,31,53,0.6)] sm:p-6",
                        isSky
                          ? "border-[#96bde6] bg-[#d1deed] text-[#0f2d4e]"
                          : "border-[#7e9ab8] bg-[#bbcadb] text-[#0f2d4e]",
                      ].join(" ")}
                    >
                      <p className="w-fit rounded-full bg-[#fbb03b] px-3 py-1 text-xs font-semibold tracking-wide text-[#0f2d4e]">
                        {card.badge}
                      </p>
                      <h3 className="mt-4 text-3xl font-semibold leading-tight">
                        {card.title}
                      </h3>
                      <p className="mt-3 max-w-[56ch] text-sm leading-relaxed text-[#1b3859] sm:text-base">
                        {card.description}
                      </p>

                      <ul className="mt-5 flex-1 space-y-2">
                        {card.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm font-semibold text-[#0f2d4e] sm:text-base"
                          >
                            <span aria-hidden className="text-[#0f2d4e]">
                              →
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6">
                        <Link
                          href={card.href}
                          className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0f2d4e] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#143c69] active:bg-[#1d3f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e] sm:min-h-12"
                        >
                          {card.cta}
                          <span aria-hidden className="text-base leading-none">
                            →
                          </span>
                        </Link>
                      </div>
                    </article>
                  </li>
                </ScrollReveal>
              );
            })}
          </ul>
        </div>
      </section>

      <NosotrosDirectorySection members={BOARD_MEMBERS} />

      <section
        aria-labelledby="nosotros-core-title"
        className="bg-gradient-to-b from-[#f9fcff] via-[#f1f7fd] to-[#e2edf8] py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal direction="left" delayMs={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3f62]">
                Esencia IAMGroup
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delayMs={90}>
              <h2
                id="nosotros-core-title"
                className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0f2d4e] sm:text-4xl"
              >
                Arquitectura estratégica para decisiones financieras con
                confianza.
              </h2>
            </ScrollReveal>
          </div>

          <ul className="mt-8 grid gap-4 lg:hidden">
            {CORE_DIAGRAM_ITEMS.map((block, index) => (
              <ScrollReveal
                key={block.id}
                direction="up"
                delayMs={90 + index * 80}
                threshold={0.16}
                className="h-full"
              >
                <li className="h-full rounded-2xl border border-[#c2d9ec] bg-white p-5 shadow-[0_20px_42px_-32px_rgba(15,45,78,0.35)] sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a7ea2]">
                    {`0${index + 1}`.slice(-2)}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-tight text-[#0f2d4e] sm:text-2xl">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1d3f62] sm:text-base">
                    {block.text}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>

          <div className="relative mt-10 hidden lg:block">
            <div className="relative mx-auto grid max-w-6xl grid-cols-3 grid-rows-3 gap-5">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#a8c4de] via-[#86a9cb] to-[#a8c4de]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-[#a8c4de] via-[#86a9cb] to-[#a8c4de]"
              />

              <ScrollReveal
                direction="down"
                delayMs={120}
                className="col-start-2 row-start-1"
              >
                <article className="rounded-2xl border border-[#c2d9ec] bg-white p-5 shadow-[0_20px_40px_-28px_rgba(15,45,78,0.38)]">
                  <h3 className="text-xl font-semibold leading-tight text-[#0f2d4e]">
                    {CORE_DIAGRAM_ITEMS[0].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1d3f62]">
                    {CORE_DIAGRAM_ITEMS[0].text}
                  </p>
                </article>
              </ScrollReveal>

              <ScrollReveal
                direction="right"
                delayMs={210}
                className="col-start-1 row-start-2"
              >
                <article className="rounded-2xl border border-[#c2d9ec] bg-white p-5 shadow-[0_20px_40px_-28px_rgba(15,45,78,0.38)]">
                  <h3 className="text-xl font-semibold leading-tight text-[#0f2d4e]">
                    {CORE_DIAGRAM_ITEMS[2].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1d3f62]">
                    {CORE_DIAGRAM_ITEMS[2].text}
                  </p>
                </article>
              </ScrollReveal>

              <ScrollReveal
                direction="up"
                delayMs={150}
                className="col-start-2 row-start-2 flex items-center justify-center"
              >
                <div className="flex h-48 w-48 flex-col items-center justify-center rounded-full border-4 border-[#9fbddb] bg-[#0f2d4e] px-5 text-center shadow-[0_24px_48px_-32px_rgba(15,45,78,0.6)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c0deff]">
                    Núcleo
                  </p>
                  <Image
                    src={LOGO_IAM_URL}
                    alt="IAMGroup"
                    width={200}
                    height={56}
                    className="mt-2 h-9 w-auto"
                    sizes="140px"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal
                direction="left"
                delayMs={300}
                className="col-start-3 row-start-2"
              >
                <article className="rounded-2xl border border-[#c2d9ec] bg-white p-5 shadow-[0_20px_40px_-28px_rgba(15,45,78,0.38)]">
                  <h3 className="text-xl font-semibold leading-tight text-[#0f2d4e]">
                    {CORE_DIAGRAM_ITEMS[1].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1d3f62]">
                    {CORE_DIAGRAM_ITEMS[1].text}
                  </p>
                </article>
              </ScrollReveal>

              <ScrollReveal
                direction="up"
                delayMs={390}
                className="col-start-2 row-start-3"
              >
                <article className="rounded-2xl border border-[#c2d9ec] bg-white p-5 shadow-[0_20px_40px_-28px_rgba(15,45,78,0.38)]">
                  <h3 className="text-xl font-semibold leading-tight text-[#0f2d4e]">
                    {CORE_DIAGRAM_ITEMS[3].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1d3f62]">
                    {CORE_DIAGRAM_ITEMS[3].text}
                  </p>
                </article>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal direction="up" delayMs={120}>
            <div className="mt-6 rounded-2xl border border-[#b8d0e5] bg-[#eaf3fb] p-5 sm:mt-7 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3f62]">
                Nuestros valores
              </p>
              <p className="mt-3 flex flex-wrap items-baseline text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                {CORE_VALUES.map((value, index) => (
                  <span key={value} className="inline-flex items-baseline">
                    <span className="rounded-sm px-1 py-0.5 text-[#9aabba] transition-[color,background-color] duration-200 hover:bg-[#fbb03b] hover:text-[#0f2d4e]">
                      {value}
                    </span>
                    {index < CORE_VALUES.length - 1 ? (
                      <span aria-hidden className="mx-3 text-[#9aabba]">
                        —
                      </span>
                    ) : null}
                  </span>
                ))}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <HomeMetricsSection showCta={false} />
      <HomeAlliancesSection />
    </main>
  );
}
