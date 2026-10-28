import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "¥0",
    description: "近所で星を眺めたい方に",
    features: ["今夜のスコア", "3時間ごとの予報", "お気に入りスポット 1か所"],
    recommended: false,
  },
  {
    name: "Plus",
    price: "¥480",
    description: "遠征して星を見に行く方に",
    features: ["1時間ごとの予報", "光害マップ", "天体イベント通知", "お気に入りスポット 無制限"],
    recommended: true,
  },
  {
    name: "Club",
    price: "¥1,200",
    description: "天文サークル・観望会の運営に",
    features: ["Plus の全機能", "メンバー10人まで", "観望会の予定を共有"],
    recommended: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">料金プラン</h2>
        <p className="mt-4 text-muted-foreground">Plus プランは30日間無料でお試しいただけます。</p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={cn(plan.recommended && "ring-2 ring-primary md:-translate-y-2")}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                {plan.recommended && <Badge>おすすめ</Badge>}
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-3xl font-bold">
                {plan.price}
                <span className="text-sm font-normal text-muted-foreground"> / 月</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.recommended ? "default" : "outline"}>
                {plan.recommended ? "30日間無料で試す" : "選択する"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
