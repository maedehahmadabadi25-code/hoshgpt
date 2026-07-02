import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Reveal } from "@/components/landing/reveal";

const FAQS = [
  {
    q: "هوش‌جی‌پی‌تی چه فرقی با چت‌جی‌پی‌تی معمولی داره؟",
    a: "هوش‌جی‌پی‌تی یک ابزار چت عمومی نیست؛ یک مسیر مشخص شامل تست شخصیت، پیشنهاد شغلی، برنامه ۳۰ روزه و کوچ هوشمندیه که پیشرفت واقعی شما رو دنبال می‌کنه و بر اساس اون، قدم بعدی رو پیشنهاد می‌ده.",
  },
  {
    q: "تست شخصیت چقدر طول می‌کشه؟",
    a: "تست شامل ۱۰ سوال هوشمنده و معمولاً کمتر از ۵ دقیقه زمان می‌بره. نتیجه شامل تحلیل شخصیت، نقاط قوت و ضعف، پیشنهادهای شغلی و یک نقشه‌ی راه یادگیریه.",
  },
  {
    q: "آیا استفاده از هوش‌جی‌پی‌تی رایگانه؟",
    a: "می‌تونید به‌صورت رایگان شروع کنید و از تست شخصیت و بخشی از امکانات استفاده کنید. برای دسترسی کامل به کوچ هوشمند و برنامه‌ی ۳۰ روزه، نسخه‌ی حرفه‌ای هم در دسترسه.",
  },
  {
    q: "آیا اطلاعات من امن نگه‌داشته می‌شه؟",
    a: "بله. اطلاعات شما با استانداردهای امنیتی رمزنگاری و محافظت می‌شه و در اختیار هیچ شخص یا سرویس ثالثی قرار نمی‌گیره.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24">
      <Reveal className="text-center">
        <h2 className="text-ink text-3xl font-bold sm:text-4xl">سوالات متداول</h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
