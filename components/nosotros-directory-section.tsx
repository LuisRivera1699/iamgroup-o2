"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

type BoardMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
};

type NosotrosDirectorySectionProps = {
  members: readonly BoardMember[];
};

const MIN_CARD_WIDTH_PX = 264;
const CARD_GAP_PX = 20;
const AUTOPLAY_MS = 4500;
const DRAG_THRESHOLD_PX = 48;

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function DirectoryCard({ member }: { member: BoardMember }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[#b7cde3] bg-white p-4 shadow-[0_20px_42px_-30px_rgba(15,45,78,0.5)] sm:p-5">
      <div className="relative overflow-hidden rounded-xl border border-[#d1deed]">
        <Image
          src={member.image}
          alt={`Retrato de ${member.name}`}
          width={1200}
          height={1600}
          sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 100vw"
          className="h-72 w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03] group-focus-within:scale-[1.03] sm:h-80"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f2d4e]/95 via-[#0f2d4e]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />
        <p className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-sm leading-relaxed text-[#e6f2ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          {member.bio}
        </p>
      </div>

      <div className="mt-4 grid h-[5.6rem] grid-cols-[1fr_auto] items-start gap-4 sm:h-[6rem]">
        <div className="min-w-0">
          <h3 className="line-clamp-2 text-xl font-semibold leading-tight text-[#0f2d4e]">
            {member.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm font-medium text-[#1d3f62]">
            {member.role}
          </p>
        </div>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Perfil de LinkedIn de ${member.name}`}
          className="mt-0.5 inline-flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center text-[#0a66c2] transition-colors hover:text-[#084d96] active:text-[#063f79] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e]"
        >
          <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.17H5.67V18H8.34V10.17ZM7 6A1.56 1.56 0 0 0 5.44 7.56C5.44 8.41 6.12 9.12 7 9.12C7.86 9.12 8.55 8.41 8.55 7.56C8.55 6.71 7.86 6 7 6ZM18.33 13.48C18.33 10.9 16.95 9.7 15.11 9.7C13.63 9.7 12.97 10.52 12.6 11.09V10.17H9.94V18H12.6V14.13C12.6 13.11 12.79 12.12 14.05 12.12C15.29 12.12 15.31 13.28 15.31 14.2V18H18V13.74C18 13.65 18 13.57 17.99 13.48H18.33Z" />
          </svg>
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </article>
  );
}

export function NosotrosDirectorySection({ members }: NosotrosDirectorySectionProps) {
  const reducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragStartX = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldCarousel, setShouldCarousel] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof ResizeObserver === "undefined") return;

    const updateLayout = () => {
      const minWidthForThreeCards = MIN_CARD_WIDTH_PX * 3 + CARD_GAP_PX * 2;
      setShouldCarousel(node.clientWidth < minWidthForThreeCards);
    };

    updateLayout();
    const observer = new ResizeObserver(updateLayout);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldCarousel || reducedMotion || isDragging) return;
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % members.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(interval);
  }, [isDragging, members.length, reducedMotion, shouldCarousel]);

  const goNext = () => setActiveIndex((index) => (index + 1) % members.length);
  const goPrev = () =>
    setActiveIndex((index) => (index - 1 + members.length) % members.length);

  const handlePointerDown = (clientX: number) => {
    dragStartX.current = clientX;
    setIsDragging(true);
  };

  const handlePointerUp = (clientX: number) => {
    if (dragStartX.current === null) {
      setIsDragging(false);
      return;
    }

    const deltaX = clientX - dragStartX.current;
    dragStartX.current = null;
    setIsDragging(false);

    if (Math.abs(deltaX) < DRAG_THRESHOLD_PX) return;
    if (deltaX < 0) goNext();
    else goPrev();
  };

  return (
    <section
      aria-labelledby="nosotros-directorio-title"
      className="bg-gradient-to-b from-[#d7e7f6] via-[#e5f0fa] to-[#edf5fc] py-14 sm:py-16 lg:py-20"
    >
      <div
        ref={containerRef}
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <ScrollReveal direction="left" delayMs={0}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3f62]">
              Directorio
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delayMs={90}>
            <h2
              id="nosotros-directorio-title"
              className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0f2d4e] sm:text-4xl"
            >
              Liderazgo con trayectoria, criterio financiero y visión estratégica.
            </h2>
          </ScrollReveal>
        </div>

        {shouldCarousel ? (
          <ScrollReveal direction="up" delayMs={120}>
            <div className="mt-8">
              <div
                className="touch-pan-y overflow-hidden"
                onPointerDown={(event) => {
                  (event.currentTarget as HTMLElement).setPointerCapture(
                    event.pointerId,
                  );
                  handlePointerDown(event.clientX);
                }}
                onPointerUp={(event) => {
                  (event.currentTarget as HTMLElement).releasePointerCapture(
                    event.pointerId,
                  );
                  handlePointerUp(event.clientX);
                }}
                onPointerCancel={() => {
                  dragStartX.current = null;
                  setIsDragging(false);
                }}
              >
                <ul
                  className="flex transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {members.map((member) => (
                    <li key={member.id} className="w-full shrink-0">
                      <DirectoryCard member={member} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#7e9ab8]/50 bg-white text-[#0f2d4e] transition-colors hover:bg-[#ecf3fa] active:bg-[#dbe8f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e]"
                  aria-label="Ver perfil anterior"
                >
                  ‹
                </button>
                <div className="flex items-center gap-2">
                  {members.map((member, index) => (
                    <button
                      key={member.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Ir al perfil ${index + 1}`}
                      className={[
                        "h-2.5 w-2.5 cursor-pointer rounded-full transition-colors",
                        index === activeIndex ? "bg-[#0f2d4e]" : "bg-[#9bb5cf]",
                      ].join(" ")}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#7e9ab8]/50 bg-white text-[#0f2d4e] transition-colors hover:bg-[#ecf3fa] active:bg-[#dbe8f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e]"
                  aria-label="Ver perfil siguiente"
                >
                  ›
                </button>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          <ul className="mt-8 flex flex-nowrap items-stretch gap-5">
            {members.map((member, index) => (
              <ScrollReveal
                key={member.id}
                direction="up"
                delayMs={90 + index * 90}
                threshold={0.15}
                className="min-w-[16.5rem] flex-1"
              >
                <li className="h-full">
                  <DirectoryCard member={member} />
                </li>
              </ScrollReveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
