import { config } from "./site.config";
import type { ThemeColors } from "./types";

const STYLE_ID = "site-theme";
const FONT_ID = "site-font";

function declarations(tokens: Record<string, string>) {
  return Object.entries(tokens)
    .map(([property, value]) => `  ${property}: ${value};`)
    .join("\n");
}

function accentTokens(accents: string[]) {
  return Object.fromEntries(
    accents.map((accent, index) => [`--accent-${index + 1}`, accent]),
  );
}

function buildThemeCss(colors: ThemeColors, fontSans: string) {
  const shared = {
    "--primary": colors.primary,
    "--primary-foreground": colors.primaryForeground,
    "--secondary": colors.secondary,
    "--secondary-foreground": colors.secondaryForeground,
    "--font-sans": `${fontSans}, sans-serif`,
    ...accentTokens(colors.accents),
  };

  const light = {
    "--background": colors.background.light,
    "--foreground": colors.foreground.light,
    "--border": colors.border.light,
    "--card": colors.card.light,
    "--card-foreground": colors.cardForeground.light,
    "--card-border": colors.cardBorder.light,
    "--muted": colors.muted.light,
    "--muted-foreground": colors.mutedForeground.light,
    "--shadow-hover":
      "0 10px 25px -5px hsl(220 20% 15% / 0.15), 0 4px 6px -2px hsl(220 20% 15% / 0.05)",
    "--shadow-card-hover":
      "0 20px 40px -10px hsl(220 20% 15% / 0.20), 0 8px 16px -4px hsl(220 20% 15% / 0.10)",
  };

  const dark = {
    "--background": colors.background.dark,
    "--foreground": colors.foreground.dark,
    "--border": colors.border.dark,
    "--card": colors.card.dark,
    "--card-foreground": colors.cardForeground.dark,
    "--card-border": colors.cardBorder.dark,
    "--muted": colors.muted.dark,
    "--muted-foreground": colors.mutedForeground.dark,
    "--shadow-hover":
      "0 10px 25px -5px hsl(220 40% 5% / 0.40), 0 4px 6px -2px hsl(220 40% 5% / 0.30)",
    "--shadow-card-hover":
      "0 20px 40px -10px hsl(220 40% 5% / 0.50), 0 8px 16px -4px hsl(220 40% 5% / 0.40)",
  };

  return `:root {\n${declarations({ ...shared, ...light })}\n}\n\n.dark {\n${declarations(dark)}\n}\n`;
}

function injectFontLink(googleUrl: string) {
  if (!googleUrl || document.getElementById(FONT_ID)) {
    return;
  }

  const preconnect = document.createElement("link");
  preconnect.rel = "preconnect";
  preconnect.href = "https://fonts.gstatic.com";
  preconnect.crossOrigin = "anonymous";
  document.head.appendChild(preconnect);

  const link = document.createElement("link");
  link.id = FONT_ID;
  link.rel = "stylesheet";
  link.href = googleUrl;
  document.head.appendChild(link);
}

export function applyTheme() {
  if (typeof document === "undefined") {
    return;
  }

  const { colors, fonts } = config.theme;
  const css = buildThemeCss(colors, fonts.sans);

  let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }
  style.textContent = css;

  injectFontLink(fonts.googleUrl);
}
