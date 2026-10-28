import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  { value: 3200, unit: "か所", label: "登録済みの観測スポット" },
  { value: 24, unit: "回/日", label: "予報の更新" },
  { value: 4.7, unit: "", label: "アプリの評価", decimalPlaces: 1 },
];

export function Stats() {
  return (
    <section className="px-6 py-16">
      <dl className="mx-auto grid max-w-4xl gap-10 text-center sm:grid-cols-3">
        {stats.map(({ value, unit, label, decimalPlaces }) => (
          <div key={label}>
            <dd className="text-5xl font-bold tracking-tight text-primary">
              <NumberTicker value={value} decimalPlaces={decimalPlaces} className="text-primary" />
              {unit && <span className="ml-1 text-2xl">{unit}</span>}
            </dd>
            <dt className="mt-2 text-sm text-muted-foreground">{label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
