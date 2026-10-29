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
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr_2fr]">
        <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">よくある質問</h2>
        <Accordion>
          {faqs.map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger className="text-base">{question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
