import { Compass, MessagesSquare, CalendarCheck2, Gauge, LineChart, LayoutDashboard } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Reveal } from "@/components/landing/reveal";

const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "داشبورد یکپارچه",
    description: "همه‌چیز درباره‌ی مسیر رشد شما — از پیشرفت تست تا وضعیت برنامه‌ی امروز — در یک نگاه.",
  },
  {
    icon: Compass,
    title: "تست شخصیت هوشمند",
    description: "با یک تست ۱۰ سوالی، نقاط قوت، ضعف و مسیرهای شغلی متناسب با شما تحلیل می‌شود.",
  },
  {
    icon: MessagesSquare,
    title: "کوچ هوش مصنوعی",
    description: "یک کوچ صبور و حرفه‌ای که پیشرفت شما را به‌خاطر می‌سپارد و برنامه را متناسب تنظیم می‌کند.",
  },
  {
    icon: CalendarCheck2,
    title: "برنامه ۳۰ روزه",
    description: "وظایف روزانه‌ی صبح، ظهر و شب، به‌همراه امتیاز تجربه و مرور هفتگی برای حفظ انگیزه.",
  },
  {
    icon: Gauge,
    title: "امتیاز زندگی",
    description: "سلامت، شغل، مالی، ذهنیت، روابط، یادگیری و انضباط را به‌صورت بصری دنبال کنید.",
  },
  {
    icon: LineChart,
    title: "تحلیل پیشرفت",
    description: "روند رشد خود را در طول زمان ببینید و بفهمید کدام بخش نیاز به تمرکز بیشتری دارد.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-ink text-3xl font-bold sm:text-4xl">همه ابزارهای رشد، یک‌جا</h2>
        <p className="text-ink-muted mt-4 leading-8">
          هوش‌جی‌پی‌تی فقط یک چت‌بات نیست؛ مجموعه‌ای از ابزارهاست که با هم مسیر
          شما را از سردرگمی به نتیجه‌ی مشخص می‌رسانند.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <Reveal key={feature.title} delay={(i % 3) * 0.08}>
            <Card className="glass-hover h-full p-2">
              <CardHeader>
                <div className="bg-confusion/10 mb-2 flex h-11 w-11 items-center justify-center rounded-xl">
                  <feature.icon className="text-confusion h-5 w-5" aria-hidden="true" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="leading-7">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
