import type { SiteConfig } from "./types";
import { themePresets } from "./themePresets";

export const config = {
  brand: {
    name: "Template Business",
    legalName: "Template Business LLC",
    tagline: "Professional services for growing businesses",
    logo: "",
    favicon: "/favicon.svg",
    defaultTheme: "system",
  },

  seo: {
    title: "Template Business | Professional Services",
    description:
      "High-quality professional services tailored to your needs. We deliver scalable solutions that grow with your business.",
    keywords: [
      "professional services",
      "local business",
      "consulting",
      "support",
      "template business",
    ],
    canonicalUrl: "https://example.com",
    locale: "en_US",
    ogImage: "/images/hero.webp",
    robots: "index, follow",
  },

  theme: {
    fonts: {
      sans: "Inter",
      googleUrl:
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
    },
    colors: themePresets.carSpa, // Swap to themePresets.default or themePresets.warmGold or carSpa
  },

  navigation: {
    items: [
      { id: "services", label: "Services" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    cta: { label: "Get in Touch", target: "contact" },
  },

  hero: {
    title: "High-quality professional services tailored to your needs",
    subtitle:
      "We deliver scalable solutions that grow with your business. Reliable support, clear communication, and results you can count on.",
    cta: { label: "Contact Us", target: "contact" },
    backgroundImage: "/images/hero.webp",
    ariaLabel: "Professional team delivering services for local businesses",
  },

  about: {
    enabled: true,
    title: "About Template Business",
    paragraphs: [
      "Template Business provides high-quality professional services tailored to your needs. We work with clients of all sizes to plan, deliver, and support solutions that last.",
      "Our team is committed to clear communication, dependable delivery, and a straightforward working relationship from the first conversation through ongoing support.",
      "We deliver scalable solutions that grow with your business, so you can focus on your customers while we handle the details.",
    ],
    credentialsLabel: "Key credentials",
    credentials: [
      { text: "Licensed & insured" },
      { text: "Experienced team" },
      { text: "Client-focused" },
      { text: "On-time delivery" },
    ],
    stats: [
      { value: "10+", label: "Years experience" },
      { value: "100+", label: "Clients served" },
    ],
    image: "/images/about.webp",
    imageAlt: "Professional team collaborating with clients",
  },

  services: {
    enabled: true,
    title: "Our services",
    subtitle: "Flexible offerings you can rename to match any industry",
    items: [
      {
        icon: "star",
        title: "Core Service 1",
        description:
          "A flagship offering that solves your clients' primary need. Replace this title and description with your main service.",
      },
      {
        icon: "check-circle",
        title: "Core Service 2",
        description:
          "A supporting service that complements your core work. Update this copy to describe a second package or retainer.",
      },
      {
        icon: "zap",
        title: "Core Service 3",
        description:
          "An optional add-on or specialty. Swap this placeholder for consulting, maintenance, or another offer.",
      },
      {
        icon: "briefcase",
        title: "Core Service 4",
        description:
          "A consulting or planning offer. Replace this with strategy, audits, or onboarding for new clients.",
      },
      {
        icon: "settings",
        title: "Core Service 5",
        description:
          "Ongoing support or maintenance. Update this copy to describe retainers, check-ins, or follow-up care.",
      },
      {
        icon: "users",
        title: "Core Service 6",
        description:
          "A team or training service. Swap this placeholder for workshops, staffing, or client education.",
      },
    ],
  },

  contact: {
    enabled: true,
    title: "Get in Touch",
    subtitle: "Tell us about your project and we will get back to you shortly",
    phone: "+1 (555) 123-4567",
    phoneNote: "Available during business hours",
    email: "hello@example.com",
    emailNote: "We usually reply within one business day",
    location: "Your City, Country",
    serviceArea: "Serving clients locally and remotely",
    hours: [
      "Monday - Friday: 9:00 AM - 5:00 PM",
      "Typical response time: within one business day",
    ],
    actions: [
      { type: "phone", label: "Call now" },
      { type: "email", label: "Email us" },
    ],
    highlight: {
      enabled: true,
      title: "Quick response",
      description:
        "Need to talk through a project? Reach out and we will get back to you as soon as we can.",
      ctaLabel: "Call now",
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        {
          title: "Experienced team",
          description: "A dedicated group with a track record of delivering on time",
        },
        {
          title: "Clear process",
          description: "Simple steps from first contact to finished work",
        },
        {
          title: "Reliable support",
          description: "We stay available after delivery when you need follow-up",
        },
      ],
    },
  },

  legal: {
    jurisdiction: "Your State",
    privacyEmail: "privacy@example.com",
    legalEmail: "legal@example.com",
    lastUpdated: "2026-09-01",
    privacy: {
      intro:
        "{legalName} (\"we\", \"our\", or \"us\") respects your privacy and is committed to protecting the personal information you share with us. This policy explains how we handle information collected through our website.",
      sections: [
        {
          title: "Information we collect",
          paragraphs: [
            "We only collect personal information that you choose to provide, such as when you contact us by email or request information about our services.",
          ],
          bullets: [
            "Name and contact details",
            "Message content you choose to share",
          ],
        },
        {
          title: "How we use your information",
          paragraphs: [
            "We use your personal data solely to respond to inquiries, provide requested information, and keep administrative records of our communication. We do not use your information for marketing without your consent.",
          ],
        },
        {
          title: "Data sharing",
          paragraphs: [
            "We do not share, sell, or rent personal data to third parties. Your information is shared only if required by law or to protect our legal rights.",
          ],
        },
        {
          title: "Data retention and security",
          paragraphs: [
            "We retain personal data only as long as necessary to fulfill the purpose for which it was collected or to comply with legal requirements. We take reasonable measures to protect your information from unauthorized access, loss, misuse, or disclosure.",
          ],
        },
        {
          title: "Your rights",
          paragraphs: [
            "Depending on the laws of {jurisdiction}, you may have the right to request access to, correction of, or deletion of your personal data, and to withdraw consent at any time. You may also lodge a complaint with the relevant data protection authority in {jurisdiction}.",
          ],
        },
      ],
    },
    terms: {
      intro:
        "By accessing the {name} website or engaging our services, you agree to these Terms of Service. If you do not agree, please discontinue use immediately.",
      sections: [
        {
          title: "Services provided",
          paragraphs: [
            "We provide professional services as described on this website. Specific deliverables, timelines, and fees are set out in a separate agreement with you.",
          ],
        },
        {
          title: "Client responsibilities",
          paragraphs: ["Clients agree to:"],
          bullets: [
            "Provide accurate information about requirements",
            "Follow the professional guidance provided by our team",
            "Provide timely feedback and access needed to complete the work",
            "Maintain confidentiality and comply with applicable law",
          ],
        },
        {
          title: "Limitations and liability",
          paragraphs: [
            "While we maintain high professional standards, we cannot guarantee uninterrupted service or error-free results. We are not responsible for events beyond reasonable control. Liability is limited as permitted by law.",
          ],
        },
        {
          title: "Payment and cancellation",
          paragraphs: ["Commercial terms are defined in individual service agreements."],
          bullets: [
            "Advance payment may be required",
            "Cancellation and refund policies vary by service type",
          ],
        },
        {
          title: "Confidentiality",
          paragraphs: [
            "All client information is handled with strict confidentiality. We do not share or disclose data without consent, except as required by law.",
          ],
        },
        {
          title: "Governing law",
          paragraphs: [
            "These Terms are governed by the laws of {jurisdiction}. Disputes will be resolved in the courts of that jurisdiction.",
          ],
        },
        {
          title: "Updates to terms",
          paragraphs: [
            "We may update these Terms periodically. Continued use of our website or services indicates acceptance of any changes.",
          ],
        },
      ],
    },
  },

  footer: {
    description: "Professional services. Quality, reliability, and clear communication.",
    copyright: "Template Business LLC. All rights reserved.",
  },

  features: {
    themeToggle: true,
    contactForm: false,
  },
} satisfies SiteConfig;
