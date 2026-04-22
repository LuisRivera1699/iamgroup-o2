import { HomeHeroCarousel } from "@/components/home-hero-carousel";
import { HomeAboutEntrySection } from "@/components/home-about-entry-section";
import { HomeMetricsSection } from "@/components/home-metrics-section";

export default function Home() {
  return (
    <main id="contenido-principal" className="min-h-0">
      <HomeHeroCarousel />
      <HomeAboutEntrySection />
      <HomeMetricsSection />
    </main>
  );
}
