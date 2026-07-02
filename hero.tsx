"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-40 sm:pt-48">
      <div className="bg-journey-radial pointer-events-none absolute inset-0" aria-hidden="true" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div variants={item}>
          <Badge variant="journey">
            <Compass className="h-3.5 w-3.5" aria-hidden="true" />
            دستیار رشد فردی و شغلی شما
          </Badge>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-ink mt-6 text-4xl font-extrabold leading-[1.5] sm:text-5xl sm:leading-[1.45]"
        >
          از <span className="text-confusion">سردرگمی</span> تا{" "}
          <span className="text-income">درآمد</span>، با کوچ هوش مصنوعی
        </motion.h1>

        <motion.p variants={item} className="text-ink-muted mt-6 max-w-xl text-lg leading-8">
          هوش‌جی‌پی‌تی با تست شخصیت، پیشنهاد مسیر شغلی، برنامه ۳۰ روزه و یک کوچ
          هوشمند فارسی‌زبان، قدم‌به‌قدم کنار شماست تا مسیر درست را پیدا کنید و
          درآمد واقعی بسازید.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <a href="/register">
              شروع رایگان
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#features">مشاهده چگونگی کار</a>
          </Button>
        </motion.div>

        {/* Signature visual: the tagline made literal — a مسیر from confusion to income */}
        <motion.div variants={item} className="mt-16 w-full max-w-xl">
          <Card className="p-6 sm:p-8">
            <div className="flex items-center justify-between text-sm">
              <span className="text-confusion font-semibold">امروز</span>
              <span className="text-income font-semibold">۳۰ روز بعد</span>
            </div>

            <div className="relative mt-4 h-2 overflow-hidden rounded-full bg-surface-border">
              <motion.div
                className="bg-journey-gradient absolute inset-y-0 right-0 rounded-full"
                initial={{ width: "6%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
              />
            </div>

            <div className="text-ink-muted mt-4 flex items-center justify-between text-xs">
              <span>تست شخصیت • مسیر شغلی نامشخص</span>
              <span className="rtl-nums font-mono">درآمد فعال + برنامه روزانه</span>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
