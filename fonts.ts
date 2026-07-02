import { Vazirmatn, JetBrains_Mono } from "next/font/google";

// Vazirmatn is a variable Persian-first typeface (weights 100–900) that
// carries both display and body roles for HoshGPT — see tailwind.config.ts
// for the rationale.
export const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

// Utility face for numerals: XP, percentages, dates, life-score digits.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});
