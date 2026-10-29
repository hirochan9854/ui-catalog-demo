import { Marquee } from "@/components/ui/marquee";

const factors = [
  "雲量",
  "月齢",
  "光害マップ",
  "湿度・露点",
  "大気の透明度",
  "シーイング",
  "流星群カレンダー",
  "人工衛星の通過",
];

export function FactorMarquee() {
  return (
    <section className="border-y border-border py-8">
      <p className="mx-auto mb-5 max-w-5xl px-6 text-sm text-muted-foreground lg:px-0">
        予報に使っているデータ
      </p>
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:30s]">
          {factors.map((factor) => (
            <span key={factor} className="mx-6 font-heading text-xl font-semibold">
              {factor}
            </span>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-linear-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-linear-to-l from-background" />
      </div>
    </section>
  );
}
