import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  { value: 3200, unit: "か所", label: "登録済みの観測スポット" },
  { value: 24, unit: "回/日", label: "予報の更新" },
  { value: 4.7, unit: "", label: "アプリの評価", decimalPlaces: 1 },
];

export function Stats() {
  return (
    <section className="px-6 py-8">
      <dl className="mx-auto grid max-w-5xl gap-10 border-y border-border py-10 sm:grid-cols-3">
        {stats.map(({ value, unit, label, decimalPlaces }) => (
          <div key={label}>
            <dd className="font-heading text-5xl font-extrabold">
              <NumberTicker value={value} decimalPlaces={decimalPlaces} className="text-foreground" />
              {unit && <span className="ml-1 text-xl">{unit}</span>}
            </dd>
            <dt className="mt-2 text-sm text-muted-foreground">{label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
