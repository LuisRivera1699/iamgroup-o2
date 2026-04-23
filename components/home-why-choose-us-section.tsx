import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const REASONS = [
  {
    id: "experiencia",
    title: "Experiencia y conocimiento",
    iconSrc: "/icons/why-choose-us/experience.svg",
    iconWidth: 160,
    iconHeight: 120,
  },
  {
    id: "resultados",
    title: "Gestión con resultados",
    iconSrc: "/icons/why-choose-us/results.svg",
    iconWidth: 160,
    iconHeight: 120,
  },
  {
    id: "seguridad",
    title: "Inversiones a medida y seguras",
    iconSrc: "/icons/why-choose-us/security.svg",
    iconWidth: 160,
    iconHeight: 120,
  },
] as const;

export function HomeWhyChooseUsSection() {
  return (
    <section aria-labelledby="home-why-title" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
        <div aria-hidden className="absolute inset-0 bg-[#0f2d4e]/70" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-[#0f2d4e]/65 via-[#143c69]/55 to-[#0f2d4e]/75"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c0deff]/55 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <ScrollReveal direction="left" delayMs={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8e2ff]">
                ¿Por qué elegirnos?
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delayMs={90}>
              <h2
                id="home-why-title"
                className="mt-3 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Experiencia probada y comprobada
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delayMs={180}>
            <Link
              href="/contacto?interes=inversiones"
              className="inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-full border border-white/45 bg-white px-5 py-2 text-sm font-semibold text-[#0f2d4e] transition-colors hover:bg-[#dbe9f6] active:bg-[#c8def2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:min-h-12"
            >
              Contacta a un asesor
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </Link>
          </ScrollReveal>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {REASONS.map((reason, index) => {
            return (
              <ScrollReveal
                key={reason.id}
                direction="up"
                delayMs={90 + index * 90}
                threshold={0.16}
                className="h-full"
              >
                <li className="h-full">
                  <article className="flex h-full flex-col items-center rounded-2xl border border-[#c2d9ec]/90 bg-[#e7f1fa]/95 p-5 text-center shadow-[0_18px_40px_-30px_rgba(20,60,105,0.7)] sm:p-6">
                    <Image
                      src={reason.iconSrc}
                      alt=""
                      width={reason.iconWidth}
                      height={reason.iconHeight}
                      aria-hidden
                      className="h-28 w-auto object-contain sm:h-32"
                    />

                    <h3 className="mt-4 text-balance text-2xl font-semibold leading-[1.15] text-[#0f2d4e]">
                      {reason.title}
                    </h3>
                  </article>
                </li>
              </ScrollReveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
