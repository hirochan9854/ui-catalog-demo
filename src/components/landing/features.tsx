import { Bell, Clock, MapPinned, Sparkles } from "lucide-react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "星の見え具合を100点満点で",
    description: "雲量・月明かり・光害・湿度をまとめて、今夜どれくらい星が見えるかを1つのスコアで表示します。",
    icon: Sparkles,
    visual: <ScoreVisual />,
    className: "md:col-span-2",
  },
  {
    title: "1時間ごとの予報",
    description: "雲が切れる時間帯がひと目でわかります。",
    icon: Clock,
    visual: <IconVisual icon={Clock} />,
    className: "",
  },
  {
    title: "暗い場所を地図で探す",
    description: "現在地から1時間以内で行ける、光害の少ないスポットを表示します。",
    icon: MapPinned,
    visual: <IconVisual icon={MapPinned} />,
    className: "",
  },
  {
    title: "流星群や天体イベントを通知",
    description: "見頃の夜に晴れそうなときだけ、前日の夕方にお知らせします。晴れない夜には通知しません。",
    icon: Bell,
    visual: <IconVisual icon={Bell} />,
    className: "md:col-span-2",
  },
];

function ScoreVisual() {
  const hours = [
    { hour: "20時", score: 42 },
    { hour: "21時", score: 68 },
    { hour: "22時", score: 91 },
    { hour: "23時", score: 87 },
    { hour: "0時", score: 74 },
  ];
  return (
    <div className="flex h-full min-h-24 w-full items-end justify-around gap-2 rounded-lg bg-linear-to-br from-primary/25 via-primary/5 to-transparent px-5 pt-4 pb-2 font-mono text-[10px] text-muted-foreground">
      {hours.map(({ hour, score }) => (
        <div key={hour} className="flex flex-1 flex-col items-center gap-1">
          <div className="w-full rounded-sm bg-primary/70" style={{ height: `${score * 0.6}px` }} />
          <span>{hour}</span>
        </div>
      ))}
    </div>
  );
}

function IconVisual({ icon: Icon }: { icon: typeof Sparkles }) {
  return (
    <div className="flex h-full min-h-24 w-full items-center justify-center rounded-lg bg-linear-to-br from-primary/25 via-primary/5 to-transparent">
      <Icon className="size-8 text-primary/70" />
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">出かける前に、空の答え合わせ</h2>
        <p className="mt-4 text-muted-foreground">
          せっかく郊外まで行ったのに曇っていた、をなくします。
        </p>
      </div>
      <BentoGrid className="max-w-5xl">
        {features.map(({ title, description, icon: Icon, visual, className }) => (
          <BentoGridItem
            key={title}
            title={title}
            description={description}
            header={visual}
            icon={<Icon className="size-5 text-primary" />}
            className={cn("dark:border-border dark:bg-card", className)}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
