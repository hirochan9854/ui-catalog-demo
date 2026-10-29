import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "星の見え具合を100点満点で",
    description: "雲量・月明かり・光害・湿度をまとめて、今夜どれくらい星が見えるかを1つのスコアで表示します。",
    visual: <ScoreVisual />,
    className: "md:col-span-2",
  },
  {
    title: "1時間ごとの予報",
    description: "雲が切れる時間帯がひと目でわかります。",
    visual: <HourlyVisual />,
    className: "",
  },
  {
    title: "暗い場所を地図で探す",
    description: "現在地から1時間以内で行ける、光害の少ないスポットを表示します。",
    visual: <MapVisual />,
    className: "",
  },
  {
    title: "流星群や天体イベントを通知",
    description: "見頃の夜に晴れそうなときだけ、前日の夕方にお知らせします。晴れない夜には通知しません。",
    visual: <NotificationVisual />,
    className: "md:col-span-2",
  },
];

function ScoreVisual() {
  const factors = [
    { name: "雲量", value: "8%" },
    { name: "月明かり", value: "弱い" },
    { name: "光害", value: "少ない" },
    { name: "湿度", value: "62%" },
  ];
  return (
    <div className="flex h-full min-h-24 flex-col items-start justify-center gap-4 sm:flex-row sm:items-center sm:gap-8">
      <p className="font-heading text-7xl leading-none font-extrabold text-primary tabular-nums">91</p>
      <dl className="grid w-full grid-cols-2 gap-x-6 gap-y-1 text-sm sm:w-auto">
        {factors.map(({ name, value }) => (
          <div key={name} className="flex justify-between gap-4">
            <dt className="text-muted-foreground">{name}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function HourlyVisual() {
  const hours = [
    { hour: "21時", sky: "薄い雲" },
    { hour: "22時", sky: "晴れ" },
    { hour: "23時", sky: "晴れ" },
  ];
  return (
    <ul className="flex h-full min-h-24 flex-col justify-center divide-y divide-border text-sm">
      {hours.map(({ hour, sky }) => (
        <li key={hour} className="flex justify-between py-1.5">
          <span className="text-muted-foreground tabular-nums">{hour}</span>
          <span className={cn(sky === "晴れ" && "text-primary")}>{sky}</span>
        </li>
      ))}
    </ul>
  );
}

function MapVisual() {
  return (
    <svg viewBox="0 0 200 96" className="h-full min-h-24 w-full" aria-hidden>
      <circle cx="60" cy="50" r="44" className="fill-secondary" />
      <circle cx="60" cy="50" r="24" className="fill-border" />
      <circle cx="60" cy="50" r="4" className="fill-muted-foreground" />
      <circle cx="150" cy="30" r="5" className="fill-primary" />
      <circle cx="175" cy="62" r="3" className="fill-foreground" />
      <circle cx="122" cy="72" r="3" className="fill-foreground" />
    </svg>
  );
}

function NotificationVisual() {
  return (
    <div className="flex h-full min-h-24 items-center">
      <div className="w-full max-w-md rounded-md border border-border bg-background px-4 py-3 text-sm">
        <p className="flex justify-between text-xs text-muted-foreground">
          <span>Nocto</span>
          <span>8月11日 17:00</span>
        </p>
        <p className="mt-1">明日の夜はペルセウス座流星群の見頃です。22時以降は晴れる見込みです。</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto mb-12 max-w-5xl">
        <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">出かける前に、空の答え合わせ</h2>
        <p className="mt-4 text-muted-foreground">
          せっかく郊外まで行ったのに曇っていた、をなくします。
        </p>
      </div>
      <BentoGrid className="max-w-5xl">
        {features.map(({ title, description, visual, className }) => (
          <BentoGridItem
            key={title}
            title={title}
            description={description}
            header={visual}
            className={cn("rounded-lg dark:border-border dark:bg-card", className)}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
