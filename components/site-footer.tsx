import Image from "next/image";
import Link from "next/link";
import { INVESTOR_PORTAL_URL, LOGO_IAM_URL } from "@/lib/site";

const FOOTER_LINKS = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/inversiones", label: "Inversiones" },
  { href: "/financiamiento", label: "Financiamiento" },
  { href: "/gobierno-corporativo", label: "Gobierno corporativo" },
  { href: "/contacto", label: "Contacto" },
  { href: "/terminos-y-condiciones", label: "Términos y condiciones" },
  { href: "/politica-de-privacidad", label: "Política de privacidad" },
  { href: "/libro-de-reclamaciones", label: "Libro de reclamaciones" },
] as const;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1d3f62]/45 bg-[#0f2d4e] text-[#d1d1d1]">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-start gap-4">
            <Link
              href="/"
              className="inline-flex w-fit cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff]/80"
            >
              <Image
                src={LOGO_IAM_URL}
                alt="IAMGroup"
                width={200}
                height={56}
                className="h-10 w-auto sm:h-11"
                sizes="(max-width: 640px) 160px, 200px"
              />
            </Link>
            <a
              href={INVESTOR_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#0f2d4e] transition-opacity hover:opacity-95 active:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Mis inversiones
            </a>
          </div>

          <nav aria-label="Enlaces del pie de página" className="md:max-w-3xl">
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex cursor-pointer text-sm text-[#d1d1d1] transition-colors hover:text-white active:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff]/80"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/15 pt-4 text-xs text-[#b6c7d9] sm:flex sm:items-center sm:justify-between sm:text-sm">
          <p>{`© ${currentYear} IAMGroup`}</p>
          <p className="mt-2 sm:mt-0">
            Construido por{" "}
            <a
              href="https://teamaurora.pe"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer font-semibold text-[#c0deff] transition-colors hover:text-white active:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff]/80"
            >
              Aurora AI Driven Software Factory
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
