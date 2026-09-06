# White-Label Readiness Audit

Repository scan of `service-website-template`. Source of truth is the current working tree, not the README claim that one config file customizes the whole site.

**Verdict:** The bones of a sellable template are already here (sectioned React components, Tailwind semantic tokens, a `config.ts` that drives most home-page copy). What blocks selling it is that **the product still is DreamBig**. Brand, SEO, legal, and half the Contact UI are not data.

| Metric | Result |
| --- | --- |
| Config coverage | Partial |
| Files still branded DreamBig | 12 |
| Conflicting color systems | 2 |
| Leftover industry identities | 3 (software, London security, UK law) |

---

## 1. Repository & Tech Stack Audit

This is a **Vite SPA**, not Next.js or Astro. There is no framework metadata API; the document head is static HTML.

| Layer | What is actually used | Notes |
| --- | --- | --- |
| App | React 18.3 + TypeScript 5.6 + Vite 5.4 | `package.json` name is still `rest-express` |
| UI | shadcn/ui New York + Radix Slot + Lucide | Only `button`, `card`, `badge` are installed |
| Styling | Tailwind 3.4 + CSS variables + `tailwindcss-animate` | `@tailwindcss/vite` 4.1 is unused |
| Routing | Wouter | Home, privacy, terms, 404 |
| Theme | Custom `useTheme` hook + `localStorage` | `next-themes` is installed and never imported |

Leftovers from earlier lives of this repo: `tsconfig.json` still includes missing `shared/` and `server/` folders, and `vite.config.md` still describes a **SafeGuardLondon** project.

### Core layout files

| Role | File | Reads site config? |
| --- | --- | --- |
| Shell / routes | `client/src/App.tsx` | No |
| Landing composition | `client/src/pages/Home.tsx` | No (children do) |
| Nav, Hero, Services, About, Contact, Footer | `client/src/components/*` | Yes, except Logo |
| Legal pages | `client/src/pages/PrivacyPolicy.tsx`, `TermsOfService.tsx` | No |
| SEO / JSON-LD | `client/index.html` | No |
| Brand mark | `Logo.tsx` + `DreamBigLogo.tsx` | No |

---

## 2. Hardcoded Content & Titles

A config layer exists, but it only covers the home page marketing sections. Brand, SEO, and legal are still compiled into the app.

**Already driven by `config.ts`:** hero title/subtitle/CTA/image, nav labels, about paragraphs/credentials/stats/image, service cards, contact phone/email/hours, footer description and links.

**Still hardcoded:**

| Surface | Where it lives now | Hardcoded? |
| --- | --- | --- |
| Business name in nav / footer | `Logo.tsx` — `DreamBig kft` | Yes |
| Page title, OG, Twitter, JSON-LD | `client/index.html` (~130 lines of DreamBig data) | Yes |
| Hero, services, about paragraphs, contact numbers | `config.ts` | Centralized |
| Contact helper copy | `Contact.tsx` — London, 24/7 emergency, Emergency Hotline | Yes |
| About labels | `About.tsx` — KEY CREDENTIALS, Years Experience, Clients Served | Yes |
| Privacy / Terms | Full legal copy + `privacy@` / `legal@dreambig.dev` + UK GDPR / England | Yes |
| Sitemap + robots | `client/public/sitemap.xml`, `robots.txt` → `dreambig.dev` | Yes |
| Font family | `index.html` + `--font-sans` in `index.css` (Inter only) | Yes |

**Metadata setup:** there is no Next/Astro metadata object. All SEO lives in `client/index.html` as a fully hardcoded DreamBig document. The README already admits this: “Update SEO & Meta Tags (CRITICAL!) — Edit `client/index.html`.” That instruction is the opposite of a white-label product.

---

## 3. Configuration Setup

Config already exists:

- `client/src/config/config.ts` — the data
- `client/src/config/types.ts` — `SiteConfig` interfaces
- `client/src/config/index.ts` — runtime color applicator + re-export
- **No `.env`**

**Already managed:** `meta` (name, tagline, location, website), a large HSL `colors` object, navigation, hero, about, services, contact, footer.

**Still missing for a sellable template:**

- SEO / Open Graph / Twitter / JSON-LD / canonical / locale
- Typography (font family + Google/local font URL)
- Logo / favicon / OG image paths
- Legal page copy, legal emails, governing law
- Social links, analytics IDs
- Section visibility / feature flags
- Contact form vs tel/mailto behavior
- Sitemap base URL
- Theme default (`light` / `dark` / `system`)

**Structural problems with the current config:**

1. `export const config = { ... }` is **not typed as `SiteConfig`**, so the type file does not enforce anything.
2. It imports Lucide components (`Code`, `Smartphone`, …) and Vite image modules. That makes it a React module, not data. A buyer cannot hand you a JSON file or a CMS row.
3. `config/index.ts` is a side-effect module that mutates `document.documentElement` on import. That is not configuration; it is boot logic hidden behind an import.

**Recommendation:** keep `client/src/config/`, but split it into data (`site.config.ts`) vs boot (`applyTheme.ts`). Do not invent a second root-level config.

---

## 4. Styling & Theming Flexibility

A buyer cannot safely change brand colors from one file today. Two palettes fight each other, and typography is not configurable at all.

| Token | `index.css` (compile-time) | `config.ts` (runtime JS) |
| --- | --- | --- |
| `--primary` (light) | `45 75% 52%` (warm gold) | `220 45% 42%` (blue-gray) |
| `--background` (light) | `40 25% 97%` | `220 15% 99%` |
| `--primary` (dark) | `45 80% 58%` | same `220 45% 42%` |
| Font | Inter hardcoded | not in config |
| Accent 1–6 | not in CSS | applied only as inline styles in Services |

`config/index.ts` writes CSS variables after load and watches the `html` class with `MutationObserver`. First paint uses the gold CSS defaults, then snaps to the blue-gray config (FOUC). Accent colors never become CSS variables.

Tailwind itself is correctly wired (`hsl(var(--primary) / <alpha-value>)`), so the *architecture* for single-file theming is already there. The missing piece is one write path into those variables, plus fonts in the same config.

---

## 5. Architectural Weaknesses

| # | Weakness | Why it blocks white-label sales |
| --- | --- | --- |
| 1 | Split source of truth | README says edit one file. Buyers still must touch HTML, legal pages, Logo, sitemap, and leftover Contact copy. |
| 2 | Dual color systems + FOUC | `index.css` and `config.ts` disagree. Theme apply is client-only JS, so first paint flashes the wrong brand. |
| 3 | Brand is compiled into components | `DreamBigLogo` SVG and hardcoded name make the product a single-client site, not a template. |
| 4 | Non-serializable config + leftover industries | Lucide icons are imported as components. Copy still mixes software, London security, and UK law. |
| 5 | Product hygiene leftovers | `rest-express` package name, unused `next-themes`, dead `hover-elevate` classes, SafeGuardLondon docs, hardcoded `SectionId`. |

---

## High-Level Summary

The current repo is a DreamBig marketing site with a config file bolted on — not yet a white-label product. Until brand, SEO, legal, theme, and leftover industry copy collapse into one typed, serializable `siteConfig` plus generic components, every new client is a hunt through 12 files.

---

## Proposed Centralized Config Schema

Keep TypeScript (autocomplete + validation), but make values **data-only**. Resolve icon *names* to Lucide components in one mapper. Apply theme by writing CSS variables once, not via a MutationObserver.

```ts
// client/src/config/site.config.ts
import type { SiteConfig } from "./types";

export const siteConfig = {
  brand: {
    name: "Acme Services",
    legalName: "Acme Services Ltd",
    tagline: "Reliable service for local businesses",
    logo: "/brand/logo.svg",          // or empty → wordmark only
    favicon: "/brand/favicon.ico",
    defaultTheme: "system",           // "light" | "dark" | "system"
  },

  seo: {
    title: "Acme Services | Professional Support in Your City",
    description: "…",
    keywords: ["service", "your-city"],
    canonicalUrl: "https://acme.example",
    locale: "en_GB",
    ogImage: "/brand/og-image.jpg",
    robots: "index, follow",
  },

  theme: {
    fonts: {
      sans: "Inter",
      googleUrl:
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
    },
    colors: {
      primary: "220 45% 42%",
      primaryForeground: "0 0% 100%",
      secondary: "220 30% 28%",
      secondaryForeground: "0 0% 98%",
      background: { light: "220 15% 99%", dark: "220 25% 8%" },
      foreground: { light: "220 35% 10%", dark: "220 15% 98%" },
      muted: { light: "220 22% 90%", dark: "220 22% 18%" },
      mutedForeground: { light: "220 20% 40%", dark: "220 10% 75%" },
      card: { light: "0 0% 100%", dark: "220 30% 12%" },
      border: { light: "220 25% 80%", dark: "220 25% 35%" },
      accents: ["210 100% 56%", "160 84% 45%", "45 95% 58%"],
    },
  },

  navigation: {
    items: [
      { id: "services", label: "Services" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    cta: { label: "Get a Quote", target: "contact" },
  },

  hero: {
    title: "Custom solutions built for your business",
    subtitle: "…",
    cta: { label: "Get a Quote", target: "contact" },
    backgroundImage: "/images/hero.webp",
    ariaLabel: "Team at work",
  },

  about: {
    enabled: true,
    title: "About Acme",
    paragraphs: ["…"],
    credentialsLabel: "Key credentials",
    credentials: [{ text: "Fully insured" }],
    stats: [
      { value: "20+", label: "Years experience" },
      { value: "200+", label: "Clients served" },
    ],
    image: "/images/about.webp",
    imageAlt: "…",
  },

  services: {
    enabled: true,
    title: "What we do",
    subtitle: "…",
    items: [
      {
        icon: "code", // string → mapped to Lucide in one place
        title: "Custom development",
        description: "…",
      },
    ],
  },

  contact: {
    enabled: true,
    title: "Get in touch",
    subtitle: "…",
    phone: "+36 30 123 4567",
    email: "hello@acme.example",
    location: "Győr, Hungary",
    serviceArea: "Worldwide",
    hours: ["Monday – Friday: 9:00–18:00 CET"],
    actions: [
      { type: "phone", label: "Call now" },
      { type: "email", label: "Email us" },
    ],
    highlight: {
      enabled: true,                  // hide "Emergency Hotline" for non-emergency businesses
      title: "Quick response",
      description: "…",
      ctaLabel: "Call now",
    },
    whyChooseUs: {
      title: "Why choose us?",
      items: [{ title: "Experienced team", description: "…" }],
    },
  },

  legal: {
    jurisdiction: "Hungary",
    privacyEmail: "privacy@acme.example",
    legalEmail: "legal@acme.example",
    lastUpdated: "2026-09-01",
    privacy: { intro: "…", sections: [/* templated blocks */] },
    terms: { intro: "…", sections: [/* templated blocks */] },
  },

  footer: {
    description: "…",
    copyright: "Acme Services Ltd. All rights reserved.",
  },

  features: {
    themeToggle: true,
    contactForm: false,
  },
} satisfies SiteConfig;
```

The 5-minute client swap becomes: change `brand`, `seo`, `theme.colors`, `hero`, `services.items`, `contact`, drop in `/public/brand/*`. No component edits.

---

## Step-by-Step Refactoring Plan

| Phase | Work |
| --- | --- |
| 0 — Hygiene | Rename package, drop unused deps, remove leftover industry copy and Replit artifacts. |
| 1 — Schema | Expand `SiteConfig`: brand, seo, theme, typography, sections, legal, features. Icon names as strings. |
| 2 — Theme | Write HSL tokens into `:root` / `.dark` at build or boot. Delete the MutationObserver. Put fonts in config. |
| 3 — Brand | Replace `DreamBigLogo` with a configurable image/SVG path and `businessName`. |
| 4 — Head + legal | Inject title/OG/JSON-LD from config. Templatize Privacy and Terms. |
| 5 — Polish | Dynamic sitemap, generic 404, section feature flags, buyer README. |

### Phase details

**Phase 0 — Hygiene (half day)**  
Rename the package. Remove `next-themes` and `@tailwindcss/vite`. Delete `vite.config.md` / Replit leftovers. Strip London-emergency / UK-GDPR / “security personnel” copy from Contact and Terms. Fix the 404 to be a real customer page. Type `config` as `SiteConfig`.

**Phase 1 — Make config data, not UI**  
Move Lucide imports out of `config.ts` into `iconMap.ts` (`"code"` → `Code`). Change images to public-path strings. Split `index.ts` side effects into `applyTheme.ts`. Expand `types.ts` to the schema above. Derive `SectionId` from `navigation.items` so adding a section does not require editing the hook.

**Phase 2 — One theme pipeline**  
Delete the gold defaults-vs-blue overwrite dance. Generate `:root` and `.dark` from `siteConfig.theme.colors` at boot (inline `<style>` in `index.html` or a tiny `theme.css` written by a Vite plugin). Put accent tokens on `:root` as `--accent-1`… and use them in CSS. Add `theme.fonts` and inject the font `<link>` from config.

**Phase 3 — Generic brand surface**  
Replace `DreamBigLogo` with `<img src={siteConfig.brand.logo} />` (fallback: wordmark from `brand.name`). Drive nav/footer labels from config, including “Quick Links” / credential / stat labels.

**Phase 4 — Head + legal from config**  
Add a small `SeoHead` (or Vite HTML transform) that writes title, description, OG, Twitter, canonical, JSON-LD, and favicon from `seo` + `contact`. Turn Privacy/Terms into a section renderer over `legal.*`. Generate `sitemap.xml` / `robots.txt` at build from `seo.canonicalUrl`.

**Phase 5 — Sellable product polish**  
Feature flags (`about.enabled`, `highlight.enabled`, `themeToggle`). Optional contact form behind `features.contactForm`. Example `site.config.example.ts` plus two demo brands in README. One “New client checklist” that is literally: edit config, drop assets, build.

Do not introduce Next.js or a CMS for v1. The current Vite + Tailwind token setup is enough; the work is collapsing sources of truth, not changing frameworks.

**Highest-leverage first PR:** Phase 0 + 1 + 3 — typed serializable config, generic logo, leftover industry copy gone. That alone makes the repo look like a template instead of a DreamBig site.
