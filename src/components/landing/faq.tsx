import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "望遠鏡がなくても楽しめますか？",
    answer: "楽しめます。スコアが高い夜なら、肉眼でも天の川や流星を見られる場所を案内します。",
  },
  {
    question: "予報はどれくらい当たりますか？",
    answer: "数時間先の雲の予報は外れることもあります。出かける直前にもう一度スコアを確認するのがおすすめです。",
  },
  {
    question: "海外でも使えますか？",
    answer: "現在は日本国内のみ対応しています。",
  },
];

export function Faq() {
  return (
    <section id="faq" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">よくある質問</h2>
        <Accordion>
          {faqs.map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
