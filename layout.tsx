import type { Metadata } from "next";
import { vazirmatn, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hoshgpt.ir"),
  title: {
    default: "HoshGPT — از سردرگمی تا درآمد، با کوچ هوش مصنوعی",
    template: "%s | HoshGPT",
  },
  description:
    "هوشجی‌پی‌تی، پلتفرم کوچینگ هوش مصنوعی فارسی برای کشف مسیر شغلی، ساخت عادت و افزایش درآمد.",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "HoshGPT",
    title: "HoshGPT — از سردرگمی تا درآمد، با کوچ هوش مصنوعی",
    description:
      "هوشجی‌پی‌تی، پلتفرم کوچینگ هوش مصنوعی فارسی برای کشف مسیر شغلی، ساخت عادت و افزایش درآمد.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HoshGPT — از سردرگمی تا درآمد، با کوچ هوش مصنوعی",
    description:
      "هوشجی‌پی‌تی، پلتفرم کوچینگ هوش مصنوعی فارسی برای کشف مسیر شغلی، ساخت عادت و افزایش درآمد.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
