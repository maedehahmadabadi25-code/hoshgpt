import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

// HoshGPT design tokens
// Signature idea: the brand promise is a journey "از سردرگمی تا درآمد"
// (from confusion to income). The one accent in this system is a duotone
// gradient that literally encodes that journey — a cool, introspective
// violet resolving into a warm, grounded emerald — used sparingly against
// a near-black, glass surface system. Everything else stays quiet.
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0B0F", // near-black, blue-tinted — the resting state
          raised: "#101218",
        },
        surface: {
          DEFAULT: "rgba(255,255,255,0.04)",
          hover: "rgba(255,255,255,0.07)",
          border: "rgba(255,255,255,0.09)",
        },
        ink: {
          DEFAULT: "#F5F5F7", // primary text
          muted: "#9A9AA5", // secondary text
          faint: "#5C5C66", // tertiary / disabled
        },
        confusion: {
          DEFAULT: "#7C6FF2", // cool violet — start of the journey
          soft: "#7C6FF233",
        },
        income: {
          DEFAULT: "#2DD4BF", // grounded emerald-teal — end of the journey
          soft: "#2DD4BF33",
        },
        danger: "#F26D6D",
        warning: "#F2B84B",
      },
      backgroundImage: {
        "journey-gradient": "linear-gradient(90deg, #7C6FF2 0%, #2DD4BF 100%)",
        "journey-radial": "radial-gradient(circle at 30% 20%, #7C6FF233, transparent 60%)",
      },
      fontFamily: {
        // Vazirmatn: variable weight (100–900) Persian-first face used for
        // both display and body — hierarchy comes from weight and size
        // rather than mixing families, which keeps RTL type calm and Apple-like.
        sans: ["var(--font-vazirmatn)", "Tahoma", "sans-serif"],
        // JetBrains Mono: utility face for stats, XP counters, dates — anything
        // where Latin numerals need to sit cleanly inside an RTL layout.
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35)",
        glow: "0 0 40px -10px rgba(124,111,242,0.35)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
