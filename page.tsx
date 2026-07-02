import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="bg-journey-radial pointer-events-none absolute inset-0" />

      <Card className="relative z-10 max-w-lg p-10 text-center">
        <p className="text-ink-muted mb-3 text-sm">مرحله ۱ از ۱۰ — پایه‌ریزی</p>
        <h1 className="text-journey mb-4 text-3xl font-bold leading-relaxed">
          از سردرگمی تا درآمد، با کوچ هوش مصنوعی
        </h1>
        <p className="text-ink-muted mb-8 leading-8">
          ساختار پروژه، سیستم طراحی و پایگاه‌داده هوش‌جی‌پی‌تی آماده است. صفحه
          فرود کامل در مرحله بعد ساخته می‌شود.
        </p>
        <Button>شروع کنید</Button>
      </Card>
    </main>
  );
}
