import Aurora from "@/components/Aurora";
import SplitText from "@/components/SplitText";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Spotlight } from "@/components/ui/spotlight-new";
import { cn } from "@/lib/utils";

const GOOD_SCORE = 80;

const tonight = [
  { hour: 18, score: 12 },
  { hour: 19, score: 24 },
  { hour: 20, score: 41 },
  { hour: 21, score: 68 },
  { hour: 22, score: 91 },
  { hour: 23, score: 87 },
  { hour: 0, score: 74 },
  { hour: 1, score: 52 },
  { hour: 2, score: 33 },
  { hour: 3, score: 20 },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-24 pb-20 sm:pt-32">
      {/* Aurora はルートに relative を固定で付けるので、配置は外側の div で決める */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[60vh]">
        <Aurora colorStops={["#0e1a33", "#2b4a8a", "#16264a"]} amplitude={0.8} opacity={0.5} />
      </div>
      <Spotlight />

      <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-end">
        <div>
          {/* SplitText はスペースのない日本語を1語とみなして折り返さないので、改行してよい位置で分けておく */}
          <h1 className="flex flex-col items-start font-heading text-4xl leading-[1.25] font-extrabold sm:text-7xl">
            <SplitText text="今夜の星空、" tag="span" splitType="chars" effect="rise" trigger="load" />
            <SplitText text="見えるかどうか。" tag="span" splitType="chars" effect="rise" trigger="load" />
          </h1>
          <p className="mt-8 max-w-md text-base leading-loose text-muted-foreground">
            雲の量、月明かり、街の明るさから、星がいちばんよく見える時間と場所を1時間ごとに予報します。
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ShimmerButton
              background="var(--primary)"
              shimmerColor="#fff6dc"
              borderRadius="0.5rem"
              className="px-7 text-base font-semibold text-primary-foreground"
            >
              今夜の予報を見る
            </ShimmerButton>
            <a href="#features" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
              できることを見る
            </a>
          </div>
        </div>

        <TonightForecast />
      </div>
    </section>
  );
}

function TonightForecast() {
  return (
    <figure className="border-l border-border pl-6">
      <figcaption className="text-sm text-muted-foreground">
        8月12日の夜、長野県・野辺山の予報
      </figcaption>
      <p className="mt-2 font-heading text-2xl font-semibold">22時〜23時がいちばん見えます</p>
      <ol className="mt-6 flex h-40 items-end gap-1.5" aria-label="1時間ごとの見え具合">
        {tonight.map(({ hour, score }) => (
          <li key={hour} className="flex flex-1 flex-col items-center gap-2">
            <div
              className={cn("w-full rounded-t-sm", score >= GOOD_SCORE ? "bg-primary" : "bg-secondary")}
              style={{ height: `${score * 1.2}px` }}
              title={`${hour}時 ${score}点`}
            />
            <span className="text-[11px] text-muted-foreground tabular-nums">{hour}</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-muted-foreground">
        月齢 8.4。月は23時40分に沈みます。
      </p>
    </figure>
  );
}
