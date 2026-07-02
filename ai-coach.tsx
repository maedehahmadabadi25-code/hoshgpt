"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/landing/reveal";

const TRAITS = ["صبور", "صادق", "تحلیل‌گر", "نتیجه‌محور"];

export function AICoach() {
  return (
    <section id="ai-coach" className="mx-auto max-w-6xl px-4 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Badge variant="journey">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            کوچ هوش مصنوعی
          </Badge>
          <h2 className="text-ink mt-5 text-3xl font-bold sm:text-4xl">
            یک کوچ واقعی، نه یک چت‌بات معمولی
          </h2>
          <p className="text-ink-muted mt-4 leading-8">
            کوچ هوش‌جی‌پی‌تی پیشرفت شما را به‌خاطر می‌سپارد، برنامه را متناسب با
            شرایط واقعی‌تان تنظیم می‌کند و همیشه با احترام و صداقت، شما را به
            جلو هل می‌دهد — دقیقاً مثل یک مربی حرفه‌ای انسانی.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {TRAITS.map((trait) => (
              <li
                key={trait}
                className="border-surface-border text-ink-muted rounded-full border px-3 py-1 text-xs"
              >
                {trait}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="p-4 sm:p-6">
            <div className="flex flex-col gap-3">
              <div className="flex justify-end">
                <div className="bg-surface-hover text-ink max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-7">
                  این هفته دو روز برنامه رو کامل انجام ندادم، احساس می‌کنم عقب افتادم.
                </div>
              </div>

              <div className="flex justify-start">
                <div className="glass border-confusion/20 max-w-[85%] rounded-2xl rounded-tr-sm border px-4 py-3 text-sm leading-7">
                  <p className="text-ink">
                    طبیعیه، ۵ روز از ۷ روز رو کامل انجام دادی که خودش پیشرفت
                    خوبیه. بیا برنامه‌ی فردا رو سبک‌تر کنیم تا دوباره روی ریتم
                    برگردی.
                  </p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="glass flex items-center gap-1.5 rounded-2xl rounded-tr-sm px-4 py-3">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="bg-ink-muted h-1.5 w-1.5 rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
