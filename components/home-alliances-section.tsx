import Image from "next/image";

const alliances = [
  {
    id: "sbs",
    name: "Superintendencia de Banca, Seguros y AFP",
    logoSrc: "/logos/alliances/sbs-logotipo.svg",
    logoWidth: 240,
    logoHeight: 65,
    tooltip: "Inscritos en la SBS como empresa de factoring y prestamos.",
  },
  {
    id: "cavali",
    name: "CAVALI",
    logoSrc: "/logos/alliances/cavali-logo.png",
    logoWidth: 868,
    logoHeight: 314,
    tooltip: "Cavali es un participante asociado.",
  },
];

export function HomeAlliancesSection() {
  return (
    <section
      aria-labelledby="home-alliances-title"
      className="border-t border-[#88aaca]/45 bg-gradient-to-b from-[#abcbe8] to-[#95badc]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-9 sm:px-6 sm:py-10 lg:px-8">
        <h2
          id="home-alliances-title"
          className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#143c69]"
        >
          Nuestras alianzas
        </h2>

        <ul className="mt-6 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-20">
          {alliances.map((alliance) => (
            <li key={alliance.id} className="relative flex items-center justify-center">
              <figure
                tabIndex={0}
                aria-label={`${alliance.name}. ${alliance.tooltip}`}
                className="group relative inline-flex cursor-pointer items-center justify-center rounded-md px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143c69]"
              >
                <Image
                  src={alliance.logoSrc}
                  alt={`Logo de ${alliance.name}`}
                  width={alliance.logoWidth}
                  height={alliance.logoHeight}
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 280px, 220px"
                  className="h-14 w-auto object-contain sm:h-16 lg:h-20"
                />
                <figcaption
                  role="tooltip"
                  className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 w-[min(18rem,85vw)] -translate-x-1/2 translate-y-1 rounded-lg border border-[#9fc2e3]/45 bg-[#0f2d4e] px-3 py-2 text-center text-xs font-medium leading-snug text-[#e6f2ff] opacity-0 shadow-[0_16px_36px_-20px_rgba(7,15,29,0.95)] transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                >
                  {alliance.tooltip}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
