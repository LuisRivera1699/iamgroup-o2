"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const FINANCING_PRODUCTS = [
  {
    id: "factoring",
    title: "Factoring",
    summary:
      "Impulsa la liquidez de tu empresa financiando facturas y letras negociadas en CAVALI.",
    detail:
      "Trabajamos con obligados calificados para convertir cuentas por cobrar en flujo de caja útil para consolidar operación y crecimiento.",
    points: ["Facturas y letras negociadas", "Liquidez inmediata de corto plazo"],
    iconSrc: "/icons/financiamiento/factoring.svg",
    iconWidth: 176,
    iconHeight: 120,
  },
  {
    id: "confirming",
    title: "Confirming",
    summary:
      "Financia tus compras mediante cesión de facturas, optimizando el ciclo de pago de proveedores.",
    detail:
      "La estructura vía CAVALI y obligados calificados permite administrar mejor la caja sin frenar el ritmo comercial.",
    points: ["Cesión de facturas", "Mayor eficiencia de capital de trabajo"],
    iconSrc: "/icons/financiamiento/confirming.svg",
    iconWidth: 176,
    iconHeight: 120,
  },
  {
    id: "adelanto-flujos",
    title: "Adelanto de flujos",
    summary:
      "Accede a capital de trabajo para atender órdenes de compra o contratos con pagos direccionados.",
    detail:
      "Diseñamos operaciones de corto plazo para anticipar ingresos esperados y sostener ejecución sin presiones de liquidez.",
    points: ["Capital de trabajo oportuno", "Soporte para contratos y órdenes"],
    iconSrc: "/icons/financiamiento/adelanto-flujos.svg",
    iconWidth: 176,
    iconHeight: 120,
  },
  {
    id: "mediano-plazo",
    title: "Estructuración y financiamiento a mediano plazo",
    summary:
      "Construimos financiamiento a medida en operaciones con medios de pago identificados.",
    detail:
      "Estructuramos soluciones con cobertura, plazo y esquema de repago alineados al perfil operativo y financiero de cada cliente.",
    points: ["Diseño financiero a medida", "Medios de pago identificados"],
    iconSrc: "/icons/financiamiento/mediano-plazo.svg",
    iconWidth: 176,
    iconHeight: 120,
  },
] as const;

export function FinanciamientoProductsSection() {
  const [activeProductId, setActiveProductId] = useState<
    (typeof FINANCING_PRODUCTS)[number]["id"] | null
  >(null);

  const activeProduct = useMemo(
    () => FINANCING_PRODUCTS.find((product) => product.id === activeProductId),
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
      aria-labelledby="financiamiento-productos-title"
      className="relative z-20 -mt-16 bg-gradient-to-b from-transparent via-[#edf5fc] to-[#f8fbff] pb-14 pt-4 sm:-mt-20 sm:pb-16 sm:pt-6 lg:-mt-24 lg:pb-20 lg:pt-8"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delayMs={40}>
          <div className="rounded-3xl border border-[#c2d9ec] bg-white/95 p-5 shadow-[0_24px_52px_-34px_rgba(15,45,78,0.45)] sm:p-7 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3f62]">
              Para empresas
            </p>
            <h2
              id="financiamiento-productos-title"
              className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              <span className="text-[#fbb03b]">
                Convierte tus cuentas por cobrar en crecimiento.
              </span>{" "}
              <span className="text-[#0f2d4e]">
                Soluciones de financiamiento diseñadas para tu operación.
              </span>
            </h2>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#b8d0e5] bg-[#eaf3fb] px-4 py-4 sm:px-5">
              <Image
                src="/icons/financiamiento/soluciones-liquidez.svg"
                alt=""
                width={176}
                height={120}
                aria-hidden
                className="h-14 w-auto shrink-0 object-contain sm:h-16"
              />
              <p className="text-sm font-medium leading-relaxed text-[#0f2d4e] sm:text-base">
                Combinamos conocimiento financiero y ejecución estructurada para
                que cada empresa acceda al financiamiento adecuado en el momento
                correcto.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ul className="mt-5 grid gap-4 lg:grid-cols-2">
          {FINANCING_PRODUCTS.map((product, index) => (
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
            aria-labelledby="financiamiento-product-modal-title"
            className="w-full max-w-2xl rounded-2xl border border-[#c2d9ec] bg-white p-5 shadow-[0_28px_60px_-32px_rgba(6,16,30,0.9)] sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3
                id="financiamiento-product-modal-title"
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
