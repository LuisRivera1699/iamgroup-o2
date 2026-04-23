import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GobiernoCorporativoStructureSection } from "@/components/gobierno-corporativo-structure-section";
import { HomeAlliancesSection } from "@/components/home-alliances-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Gobierno corporativo",
};

export default function GobiernoCorporativoPage() {
  return (
    <main id="contenido-principal" className="bg-[#0f2d4e]">
      <section className="relative isolate overflow-hidden pb-20 pt-[calc(var(--header-h)+2.2rem)] sm:pb-24 sm:pt-[calc(var(--header-h)+2.8rem)] lg:pb-28">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[#0a1624]/94 via-[#0f2d4e]/80 to-[#0f2d4e]/52"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0f2d4e]/88 via-transparent to-[#0f2d4e]/30"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c0deff]/60 to-transparent"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal direction="left" delayMs={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c0deff]">
                Gobierno corporativo
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delayMs={100}>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Gobernanza que sostiene cada decisión con{" "}
                <span className="text-[#fbb03b]">
                  criterio, trazabilidad y control.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="left" delayMs={190}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#d1deed] sm:text-lg">
                En IAMGroup definimos responsabilidades, mecanismos de
                supervisión y estándares de cumplimiento para operar con orden y
                fortalecer la confianza de inversionistas, clientes y aliados.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={280}>
              <div className="mt-8 sm:mt-10">
                <Link
                  href="#gobierno-corporativo-detalle"
                  className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-[#c0deff]/65 bg-[#c0deff]/10 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#c0deff]/20 active:bg-[#c0deff]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:min-h-12"
                >
                  Conoce más
                  <span aria-hidden className="text-base leading-none">
                    →
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <GobiernoCorporativoStructureSection />
      <HomeAlliancesSection />
    </main>
  );
}
