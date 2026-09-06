export type ThemeMode = "light" | "dark" | "system";

export interface LightDarkColor {
  light: string;
  dark: string;
}

export interface BrandConfig {
  name: string;
  legalName: string;
  tagline: string;
  logo: string;
  favicon: string;
  defaultTheme: ThemeMode;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  locale: string;
  ogImage: string;
  robots: string;
}

export interface ThemeColors {
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  background: LightDarkColor;
  foreground: LightDarkColor;
  muted: LightDarkColor;
  mutedForeground: LightDarkColor;
  card: LightDarkColor;
  cardForeground: LightDarkColor;
  cardBorder: LightDarkColor;
  border: LightDarkColor;
  accents: string[];
}

export interface ThemeConfig {
  fonts: {
    sans: string;
    googleUrl: string;
  };
  colors: ThemeColors;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface CtaConfig {
  label: string;
  target: string;
}

export interface NavigationConfig {
  items: NavItem[];
  cta: CtaConfig;
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  cta: CtaConfig;
  backgroundImage: string;
  ariaLabel: string;
}

export interface Credential {
  text: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutConfig {
  enabled: boolean;
  title: string;
  paragraphs: string[];
  credentialsLabel: string;
  credentials: Credential[];
  stats: StatItem[];
  image: string;
  imageAlt: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  enabled: boolean;
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface ContactAction {
  type: "phone" | "email";
  label: string;
}

export interface ContactHighlight {
  enabled: boolean;
  title: string;
  description: string;
  ctaLabel: string;
}

export interface ContactConfig {
  enabled: boolean;
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  location: string;
  serviceArea: string;
  hours: string[];
  actions: ContactAction[];
  highlight: ContactHighlight;
  whyChooseUs: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

export interface LegalSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalDocument {
  intro: string;
  sections: LegalSection[];
}

export interface LegalConfig {
  jurisdiction: string;
  privacyEmail: string;
  legalEmail: string;
  lastUpdated: string;
  privacy: LegalDocument;
  terms: LegalDocument;
}

export interface FooterConfig {
  description: string;
  copyright: string;
}

export interface FeaturesConfig {
  themeToggle: boolean;
  contactForm: boolean;
}

export interface SiteConfig {
  brand: BrandConfig;
  seo: SeoConfig;
  theme: ThemeConfig;
  navigation: NavigationConfig;
  hero: HeroConfig;
  about: AboutConfig;
  services: ServicesConfig;
  contact: ContactConfig;
  legal: LegalConfig;
  footer: FooterConfig;
  features: FeaturesConfig;
}
