# Service Website Template

A white-label marketing site for small service businesses. Brand, copy, colors, SEO, and legal pages all come from one config file.

## Customize a new client

Do these three things:

1. **Edit the site config**
   ```text
   client/src/config/site.config.ts
   ```
   Change `brand`, `seo`, `theme`, navigation, hero, about, services, contact, legal, and footer.

2. **Replace the images**
   - Favicon → `client/public/favicon.svg` (set `brand.favicon` to `/favicon.svg`)
   - Logo → `client/public/brand/`
   - Hero and about photos → `client/public/images/`
   - Open Graph image → reuse the hero photo (`/images/hero.webp`) or add `/brand/og-image.jpg`
   - Point `brand.logo`, `brand.favicon`, `seo.ogImage`, `hero.backgroundImage`, and `about.image` at those files. Leave `seo.ogImage` empty to skip social-image tags.

3. **Install and build**
   ```bash
   npm install
   npm run build
   ```
   Deploy the `dist/` folder.

That is the full client swap. You do not need to edit HTML, sitemap, robots, or component files.

## Commands

```bash
npm run dev       # http://localhost:3000
npm run build     # production output in dist/
npm run preview   # serve the production build
npm run check     # TypeScript
```

## What the build generates

From `site.config.ts`, Vite writes:

- SEO tags, Open Graph, Twitter, and JSON-LD into `dist/index.html`
- `dist/sitemap.xml` from `seo.canonicalUrl` plus navigation and legal routes
- `dist/robots.txt` pointing at that sitemap
- Theme CSS variables from `theme.colors`

## Optional flags

In `site.config.ts`:

- `about.enabled` / `services.enabled` / `contact.enabled` — hide a section
- `contact.highlight.enabled` — hide the highlight card
- `contact.phoneNote` / `contact.emailNote` — hide a helper line by leaving it empty
- `features.themeToggle` — hide the dark-mode toggle
- `brand.logo` — leave empty to show a text wordmark

## License

MIT
