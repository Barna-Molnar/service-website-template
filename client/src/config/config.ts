import { SiteConfig } from "./types";
import { Code, Smartphone, Monitor, Database, Settings, Users } from "lucide-react";
import heroImage from "@assets/stock_images/corporate_security_m_e607b3e0.jpg";
import aboutImage from "@assets/stock_images/professional_securit_717af2d8.jpg";

// DreamBig Kft - Software Development Services
export const config = {
  meta: {
    businessName: "DreamBig Kft",
    tagline: "Professional Software Development Services",
    location: "Győr, Hungary (Worldwide)",
    website: "dreambig.dev"
  },
  
  colors: {
    // Soft neutral with colorful accents
    primary: "220 14% 50%",              // Soft gray-blue for buttons - not too dominant
    primaryForeground: "0 0% 100%",
    secondary: "220 12% 28%",             // Darker neutral
    secondaryForeground: "0 0% 98%",
    background: {
      light: "220 15% 98%",               // Light neutral gray
      dark: "220 20% 11%"                 // Deep neutral gray
    },
    foreground: {
      light: "220 22% 18%",               // Dark neutral
      dark: "220 10% 96%"                 // Almost white
    },
    border: {
      light: "220 13% 88%",               // Light gray
      dark: "220 18% 28%"                 // Medium gray
    },
    card: {
      light: "220 12% 99%",               // Almost white
      dark: "220 25% 14%"                 // Dark gray
    },
    cardForeground: {
      light: "220 25% 15%",
      dark: "220 10% 97%"
    },
    cardBorder: {
      light: "220 13% 92%",               // Subtle border
      dark: "220 20% 22%"
    },
    muted: {
      light: "220 12% 94%",               // Very light gray
      dark: "220 18% 20%"                 // Muted gray
    },
    mutedForeground: {
      light: "220 12% 45%",               // Medium gray
      dark: "220 10% 70%"                 // Muted text
    },
    // Accent colors for icons
    accent1: "210 100% 56%",             // Bright blue
    accent2: "340 82% 60%",               // Vibrant pink
    accent3: "280 95% 60%",               // Purple
    accent4: "160 84% 45%",               // Teal
    accent5: "45 95% 58%",                // Amber
    accent6: "260 89% 65%",               // Indigo
  },

  navigation: {
    items: [
      { id: "services", label: "Services" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" }
    ],
    ctaButton: "Start Your Project"
  },

  hero: {
    title: "Custom Software Solutions Built for Your Business",
    subtitle: "Professional software development services including consulting, custom applications, maintenance, and team training. We deliver scalable solutions that grow with your business.",
    ctaButton: "Get a Quote",
    backgroundImage: heroImage,
    ariaLabel: "Professional software development team creating custom business solutions"
  },

  about: {
    title: "About DreamBig Kft",
    paragraphs: [
      "DreamBig Kft specializes in delivering professional software development services to businesses worldwide. With extensive experience in modern technologies and agile methodologies, we transform your ideas into robust, scalable software solutions.",
      "Based in Győr, Hungary, but serving clients globally, our team brings expertise in web and mobile application development, cloud infrastructure, and software consulting. We're committed to quality, efficiency, and innovation in every project.",
      "Our approach combines cutting-edge technology with proven methodologies, ensuring your software not only meets current requirements but is designed to evolve with your business needs."
    ],
    credentials: [
      { text: "Agile Certified" },
      { text: "Cloud Expert" },
      { text: "Full Stack Development" },
      { text: "Mobile Applications" },
      { text: "DevOps Certified" }
    ],
    stats: {
      yearsExperience: "10+",
      clientsServed: "100+"
    },
    image: aboutImage,
    imageAlt: "Professional software development team collaborating on innovative solutions"
  },

  services: {
    title: "Software Development Services",
    subtitle: "Comprehensive development solutions tailored to your business needs and goals",
    services: [
      {
        icon: Code,
        title: "Custom Application Development",
        description: "Build tailored web and mobile applications using modern frameworks. From concept to deployment, we create scalable solutions that meet your exact requirements."
      },
      {
        icon: Monitor,
        title: "Software Consulting",
        description: "Expert guidance on technology selection, architecture design, and development strategy. We help you make informed decisions for your software projects."
      },
      {
        icon: Database,
        title: "Database Solutions",
        description: "Design, implement, and optimize database systems for performance and scalability. We ensure your data infrastructure supports business growth."
      },
      {
        icon: Settings,
        title: "Maintenance & Support",
        description: "Ongoing maintenance, updates, and support to keep your software running smoothly. We provide continuous improvement and bug fixes."
      },
      {
        icon: Users,
        title: "Team Training",
        description: "Comprehensive training programs to upskill your development team. Learn modern practices, frameworks, and best practices from experienced professionals."
      },
      {
        icon: Smartphone,
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications for iOS and Android. We create responsive, feature-rich mobile solutions that engage users."
      }
    ]
  },

  contact: {
    title: "Get in Touch",
    subtitle: "Let's discuss your software development needs and how we can help",
    contactInfo: {
      phone: "+36 30 123 4567",
      email: "info@dreambig.dev",
      location: "Győr, Hungary (Worldwide Services)",
      businessHours: {
        weekdays: "Monday - Friday: 9:00 AM - 6:00 PM CET",
        emergency: "Response Time: Within 24 Hours"
      },
      emergencyResponse: {
        title: "Quick Response Time",
        description: "We understand urgent requirements. Contact us for immediate consultation and rapid project turnaround when you need it most."
      }
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        {
          title: "Experienced Team",
          description: "Skilled developers with years of hands-on experience in modern technologies"
        },
        {
          title: "Agile Methodology",
          description: "Flexible development process ensuring rapid delivery and continuous improvement"
        },
        {
          title: "Global Reach",
          description: "Worldwide service delivery with remote collaboration capabilities"
        }
      ]
    }
  },

  footer: {
    description: "Professional software development services. Quality, innovation, and reliability.",
    quickLinks: [
      { id: "services", label: "Services" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" }
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" }
    ],
    copyright: "DreamBig Kft. All rights reserved. Based in Győr, Hungary."
  }
};