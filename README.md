# HoshGPT

پلتفرم کوچینگ هوش مصنوعی فارسی — **از سردرگمی تا درآمد، با کوچ هوش مصنوعی**

## Stage 1/10 — Foundation ✅

This is the foundation scaffold: Next.js 15 (App Router, Turbopack) + React 19
+ TypeScript (strict) + Tailwind + a small shadcn-style component set +
Prisma + NextAuth v5, wired end-to-end with HoshGPT's design token system
(dark-first, RTL Persian, glassmorphism).

### Design system at a glance

- **Fonts**: [Vazirmatn](https://fonts.google.com/specimen/Vazirmatn) (variable, Persian-first) for all display/body text; JetBrains Mono for numerals (XP, dates, life-score digits) so Latin numerals sit cleanly inside RTL layouts.
- **Color**: near-black base (`#0A0B0F`) with translucent glass surfaces. The one accent is a duotone gradient — violet `#7C6FF2` → emerald `#2DD4BF` — that literally encodes the tagline's journey from confusion to income. See `tailwind.config.ts` for the full token comment.
- **Components**: `src/components/ui/*` follows the shadcn/ui pattern (CVA + Radix + `cn()`), so `npx shadcn add <component>` will drop new components in seamlessly — `components.json` is already configured.

### Getting started

```bash
npm install
cp .env.example .env      # fill in DATABASE_URL and AUTH_SECRET
npx prisma db push        # or: npm run db:migrate
npm run dev
```

> This sandbox has no network access, so dependencies haven't been
> installed here — run `npm install` locally/in CI where npm registry
> access is available.

### Project structure

```
src/
  app/
    layout.tsx        RTL + dark + fonts + SEO metadata
    page.tsx           placeholder home (real Landing Page is stage 2)
    globals.css         Tailwind layers, shadcn CSS vars, glass utilities
    api/auth/[...nextauth]/route.ts
  components/ui/        button.tsx, card.tsx (shadcn pattern)
  lib/
    auth.ts             NextAuth v5 config (stub authorize — real logic in Auth stage)
    prisma.ts           Prisma client singleton
    fonts.ts            Vazirmatn + JetBrains Mono
    utils.ts            cn() helper
  types/index.ts         Session type augmentation
prisma/schema.prisma     User/Account/Session/VerificationToken (auth-core only)
```

### Remaining build order

1. ~~Foundation~~ ✅
2. Landing Page
3. Auth (real credentials + OAuth logic, forms, validation)
4. Personality Test
5. Dashboard
6. AI Coach
7. 30-Day Planner
8. Blog
9. Admin Panel
10. Deployment

Each stage extends `prisma/schema.prisma` with only the models it needs
(Profile in Auth, PersonalityTest/Question/Answer/Career in stage 4, and so
on) so the schema and the app compile at every step rather than arriving
all at once.
