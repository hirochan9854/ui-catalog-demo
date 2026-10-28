import { FactorMarquee } from "@/components/landing/factor-marquee";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { Stats } from "@/components/landing/stats";

export default function Home() {
  return (
    <main className="flex-1">
      <p className="relative z-50 bg-muted px-4 py-2 text-center text-xs text-muted-foreground">
        UIライブラリの動作確認用のデモページです。サービス名・機能・料金・数字などの内容は、すべて Claude に適当に生成させた架空のものです。
      </p>
      <Hero />
      <FactorMarquee />
      <Features />
      <Stats />
      <Pricing />
      <Faq />
      <footer className="border-t border-border/60 px-6 py-10 text-center text-sm text-muted-foreground">
        Nocto は実在しないサービスです。このページの文章と数字は Claude が生成しました。
      </footer>
    </main>
  );
}
