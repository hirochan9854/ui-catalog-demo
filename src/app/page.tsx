import { FactorMarquee } from "@/components/landing/factor-marquee";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { Stats } from "@/components/landing/stats";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FactorMarquee />
      <Features />
      <Stats />
      <Pricing />
      <Faq />
      <footer className="border-t border-border/60 px-6 py-10 text-center text-sm text-muted-foreground">
        © 2026 Nocto（デモ用の架空サービスです）
      </footer>
    </main>
  );
}
