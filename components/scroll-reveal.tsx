"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delayMs?: number;
  durationMs?: number;
  once?: boolean;
};

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

export function ScrollReveal({
  children,
  className = "",
  threshold = 0.2,
  rootMargin = "0px 0px -12% 0px",
  direction = "up",
  delayMs = 0,
  durationMs = 700,
  once = false,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
          return;
        }

        if (!once) setIsVisible(false);
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  const hiddenTransformClassName = useMemo(() => {
    if (direction === "left") return "-translate-x-7";
    if (direction === "right") return "translate-x-7";
    if (direction === "down") return "-translate-y-7";
    if (direction === "none") return "";
    return "translate-y-7";
  }, [direction]);

  const motionClassName = useMemo(() => {
    if (reducedMotion) return "";

    return [
      "transform-gpu transition-[opacity,transform,filter] duration-700 ease-out will-change-[opacity,transform,filter]",
      isVisible
        ? "opacity-100 translate-x-0 translate-y-0 blur-0"
        : `opacity-0 ${hiddenTransformClassName} blur-[2px]`,
    ].join(" ");
  }, [hiddenTransformClassName, isVisible, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={[className, motionClassName].filter(Boolean).join(" ")}
      style={
        reducedMotion
          ? undefined
          : {
              transitionDelay: `${delayMs}ms`,
              transitionDuration: `${durationMs}ms`,
            }
      }
    >
      {children}
    </div>
  );
}
