import Aurora from "@/components/Aurora";
import SplitText from "@/components/SplitText";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Spotlight } from "@/components/ui/spotlight-new";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Aurora はルートに relative を固定で付けるので、配置は外側の div で決める */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[70vh]">
        <Aurora colorStops={["#312e81", "#a78bfa", "#0e7490"]} amplitude={1.1} opacity={0.6} />
      </div>
      <Spotlight />

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Badge variant="secondary" className="mb-6">
          β版 先行登録受付中
        </Badge>
        {/* SplitText はスペースのない日本語を1語とみなして折り返さないので、改行してよい位置で分けておく */}
        <h1 className="flex flex-wrap justify-center text-4xl font-bold tracking-tight sm:text-6xl">
          <SplitText text="今夜の星空、" tag="span" splitType="chars" effect="rise" trigger="load" />
          <SplitText text="見えるかどうか。" tag="span" splitType="chars" effect="rise" trigger="load" />
        </h1>
        <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          雲の量、月明かり、街の明るさ。Nocto がまとめて計算して、星がいちばんよく見える時間と場所を1時間ごとに予報します。
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <ShimmerButton background="var(--primary)" className="px-8 text-base font-semibold">
            無料ではじめる
          </ShimmerButton>
          <a href="#features" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            機能を見る →
          </a>
        </div>
      </div>
    </section>
  );
}
