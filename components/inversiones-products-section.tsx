"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const INVESTMENT_PRODUCTS = [
  {
    id: "medicash-soles",
    title: "Fondo Medicash/Soles",
    summary:
      "Financia la emisión de facturas y recibos de médicos por servicios en clínicas privadas.",
    detail:
      "El repago proviene de facturas emitidas a aseguradoras como Pacífico, Rímac, Mapfre y La Positiva, con confirmación de pago por clínica privada y plazo promedio de 60 días.",
    points: ["Operación de corto plazo", "Plazo promedio: 60 días"],
    iconSrc: "/icons/inversiones/fondo-medicash-soles.svg",
    iconWidth: 176,
    iconHeight: 120,
  },
  {
    id: "facturas-dolares",
    title: "Fondo Facturas Dólares",
    summary:
      "Financia facturas emitidas y reconocidas por empresas con la más alta calificación crediticia (AAA).",
    detail:
      "Se valida el riesgo crediticio con Sentinel (SBS) y FINEXO de la Bolsa de Valores de Lima, complementado con evaluación de estados financieros para reforzar control y consistencia.",
    points: ["Obligados de primer nivel", "Plazo promedio: 60 días"],
    iconSrc: "/icons/inversiones/fondo-facturas-dolares.svg",
    iconWidth: 176,
    iconHeight: 120,
  },
] as const;

export function InversionesProductsSection() {
  const [activeProductId, setActiveProductId] = useState<
    (typeof INVESTMENT_PRODUCTS)[number]["id"] | null
  >(null);

  const activeProduct = useMemo(
    () => INVESTMENT_PRODUCTS.find((product) => product.id === activeProductId),
    [activeProductId],
  );

  useEffect(() => {
    if (!activeProduct) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProductId(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProduct]);

  return (
    <section
      aria-labelledby="inversiones-productos-title"
      className="relative z-20 -mt-16 bg-gradient-to-b from-transparent via-[#edf5fc] to-[#f8fbff] pb-14 pt-4 sm:-mt-20 sm:pb-16 sm:pt-6 lg:-mt-24 lg:pb-20 lg:pt-8"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delayMs={40}>
          <div className="rounded-3xl border border-[#c2d9ec] bg-white/95 p-5 shadow-[0_24px_52px_-34px_rgba(15,45,78,0.45)] sm:p-7 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3f62]">
              Para inversionistas
            </p>
            <h2
              id="inversiones-productos-title"
              className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              <span className="text-[#fbb03b]">
                Haz que tu capital avance con propósito.
              </span>{" "}
              <span className="text-[#0f2d4e]">
                Estrategias de inversión respaldadas por economía real.
              </span>
            </h2>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#b8d0e5] bg-[#eaf3fb] px-4 py-4 sm:px-5">
              <Image
                src="/icons/inversiones/portfolio-diversified.svg"
                alt=""
                width={176}
                height={120}
                aria-hidden
                className="h-14 w-auto shrink-0 object-contain sm:h-16"
              />
              <p className="text-sm font-medium leading-relaxed text-[#0f2d4e] sm:text-base">
                Portafolio conservador, rentable y con mecanismos de evaluación
                de riesgo para una gestión patrimonial sostenible.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ul className="mt-5 grid gap-4 lg:grid-cols-2">
          {INVESTMENT_PRODUCTS.map((product, index) => (
            <ScrollReveal
              key={product.id}
              direction={index % 2 === 0 ? "left" : "right"}
              delayMs={120 + index * 90}
              threshold={0.16}
              className="h-full"
            >
              <li className="h-full">
                <article className="group relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-[#b8d0e5] bg-gradient-to-br from-white via-[#f8fbff] to-[#ecf4fb] p-5 text-left shadow-[0_20px_42px_-30px_rgba(15,45,78,0.38)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_26px_52px_-32px_rgba(15,45,78,0.48)] sm:p-6">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#c0deff]/40 blur-2xl"
                  />

                  <div className="relative my-auto flex w-full flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#c2d9ec] bg-white/95 shadow-[0_10px_26px_-20px_rgba(15,45,78,0.55)]">
                        <Image
                          src={product.iconSrc}
                          alt=""
                          width={product.iconWidth}
                          height={product.iconHeight}
                          aria-hidden
                          className="h-11 w-auto object-contain"
                        />
                      </div>
                      <h3 className="text-balance text-2xl font-semibold leading-tight text-[#0f2d4e]">
                        {product.title}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveProductId(product.id)}
                      className="inline-flex min-h-11 w-fit cursor-pointer items-center justify-center gap-2 rounded-full border border-[#0f2d4e]/20 bg-[#0f2d4e] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#143c69] active:bg-[#1d3f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e] sm:min-h-12 sm:shrink-0"
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
      </div>

      {activeProduct ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#0f2d4e]/70 px-4 py-6 sm:px-6"
          onClick={() => setActiveProductId(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="inversiones-product-modal-title"
            className="w-full max-w-2xl rounded-2xl border border-[#c2d9ec] bg-white p-5 shadow-[0_28px_60px_-32px_rgba(6,16,30,0.9)] sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3
                id="inversiones-product-modal-title"
                className="text-balance text-2xl font-semibold leading-tight text-[#0f2d4e] sm:text-3xl"
              >
                {activeProduct.title}
              </h3>
              <button
                type="button"
                onClick={() => setActiveProductId(null)}
                aria-label="Cerrar detalle del producto"
                className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-[#0f2d4e]/20 bg-white text-xl leading-none text-[#0f2d4e] transition-colors hover:bg-[#edf5fc] active:bg-[#dce9f8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e]"
              >
                ×
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#1d3f62] sm:text-base">
              {activeProduct.summary}
            </p>

            <ul className="mt-5 space-y-2">
              {activeProduct.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm font-semibold text-[#0f2d4e] sm:text-base"
                >
                  <span aria-hidden>→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl border border-[#b8d0e5] bg-[#edf5fc] px-4 py-3 text-sm leading-relaxed text-[#1d3f62] sm:text-base">
              {activeProduct.detail}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
