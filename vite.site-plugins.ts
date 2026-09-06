import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { config } from "./client/src/config/site.config";

const HEAD_MARKER = "<!--app-head-->";

function escapeAttr(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function toAbsoluteUrl(base: string, maybePath: string) {
  if (/^https?:\/\//i.test(maybePath)) {
    return maybePath;
  }
  const origin = base.replace(/\/$/, "");
  const suffix = maybePath.startsWith("/") ? maybePath : `/${maybePath}`;
  return `${origin}${suffix}`;
}

function htmlLang(locale: string) {
  return locale.split(/[_-]/)[0] || "en";
}

function jsonLd() {
  const payload = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: config.brand.legalName,
    description: config.seo.description,
    url: config.seo.canonicalUrl,
    telephone: config.contact.phone,
    email: config.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: config.contact.location,
    },
    areaServed: config.contact.serviceArea,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: config.services.title,
      itemListElement: config.services.items.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return JSON.stringify(payload).replaceAll("<", "\\u003c");
}

export function buildHeadSnippet() {
  const { brand, seo, theme } = config;
  const canonical = seo.canonicalUrl.replace(/\/$/, "");
  const ogImage = toAbsoluteUrl(canonical, seo.ogImage);
  const keywords = seo.keywords.join(", ");

  return [
    `<title>${escapeAttr(seo.title)}</title>`,
    `<meta name="title" content="${escapeAttr(seo.title)}" />`,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`,
    `<meta name="keywords" content="${escapeAttr(keywords)}" />`,
    `<meta name="author" content="${escapeAttr(brand.legalName)}" />`,
    `<meta name="robots" content="${escapeAttr(seo.robots)}" />`,
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
    brand.favicon
      ? `<link rel="icon" href="${escapeAttr(brand.favicon)}" />`
      : "",
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `<meta property="og:title" content="${escapeAttr(seo.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(seo.description)}" />`,
    `<meta property="og:image" content="${escapeAttr(ogImage)}" />`,
    `<meta property="og:site_name" content="${escapeAttr(brand.name)}" />`,
    `<meta property="og:locale" content="${escapeAttr(seo.locale)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:url" content="${escapeAttr(canonical)}" />`,
    `<meta name="twitter:title" content="${escapeAttr(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(ogImage)}" />`,
    `<script type="application/ld+json">${jsonLd()}</script>`,
    theme.fonts.googleUrl
      ? [
          `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`,
          `<link rel="stylesheet" href="${escapeAttr(theme.fonts.googleUrl)}" />`,
        ].join("\n    ")
      : "",
  ]
    .filter(Boolean)
    .join("\n    ");
}

export function buildRobotsTxt() {
  const sitemapUrl = toAbsoluteUrl(config.seo.canonicalUrl, "/sitemap.xml");
  return [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${sitemapUrl}`,
    "",
  ].join("\n");
}

export function buildSitemapXml() {
  const origin = config.seo.canonicalUrl.replace(/\/$/, "");
  const lastmod = config.legal.lastUpdated;
  const urls = [
    { loc: `${origin}/`, changefreq: "monthly", priority: "1.0" },
    ...config.navigation.items.map((item) => ({
      loc: `${origin}/#${item.id}`,
      changefreq: "monthly",
      priority: "0.8",
    })),
    { loc: `${origin}/privacy-policy`, changefreq: "yearly", priority: "0.3" },
    { loc: `${origin}/terms-of-service`, changefreq: "yearly", priority: "0.3" },
  ];

  const entries = urls
    .map(
      (url) => `    <url>
        <loc>${escapeAttr(url.loc)}</loc>
        <lastmod>${escapeAttr(lastmod)}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
    </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

export function siteMetaPlugin(): Plugin {
  return {
    name: "site-meta",
    transformIndexHtml(html) {
      const withLang = html.replace(
        /<html\s+lang="[^"]*"/,
        `<html lang="${escapeAttr(htmlLang(config.seo.locale))}"`,
      );
      if (!withLang.includes(HEAD_MARKER)) {
        return withLang;
      }
      return withLang.replace(HEAD_MARKER, buildHeadSnippet());
    },
  };
}

export function siteFilesPlugin(): Plugin {
  return {
    name: "site-files",
    writeBundle(options) {
      const outDir = options.dir;
      if (!outDir) {
        return;
      }
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "robots.txt"), buildRobotsTxt());
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), buildSitemapXml());
    },
  };
}
