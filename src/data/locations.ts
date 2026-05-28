export interface LocationData {
  slug: string;
  city: string;
  region: string;
  country: "US" | "UK";
  /** Used in <h1>; pair with services noun to keep keyword density natural. */
  headline: string;
  /** Used in meta description (≤155 chars when combined with the prefix). */
  metaTeaser: string;
  /** 2–3 short paragraphs of localized context — why this market, who we serve. */
  intro: string[];
  /** Industries / verticals that index well in this city. */
  industries: string[];
  /** Service pillars displayed on the page — references existing service slugs. */
  servicePillars: Array<{ title: string; description: string; href: string }>;
  /** Targeted keyword cluster for usePageMeta. */
  keywords: string;
}

const sharedPillars: LocationData["servicePillars"] = [
  {
    title: "Custom Software & Platform Engineering",
    description:
      "Production-ready web, mobile and SaaS systems built by senior engineers — no junior-heavy outsourced teams.",
    href: "/services",
  },
  {
    title: "Cloud & DevOps Consulting",
    description:
      "AWS, Azure and GCP migration, Kubernetes platform engineering, and SRE programmes that pay for themselves in cloud savings.",
    href: "/services",
  },
  {
    title: "Security & Compliance Engineering",
    description:
      "SOC 2, HIPAA, ISO 27001 and GDPR readiness delivered as code, not a binder of policies.",
    href: "/services",
  },
  {
    title: "AI & LLM Engineering",
    description:
      "RAG applications, AI agents and intelligent automation — shipped with eval pipelines and observability from day one.",
    href: "/services",
  },
];

export const locations: LocationData[] = [
  {
    slug: "london",
    city: "London",
    region: "England",
    country: "UK",
    headline: "Enterprise Software & AI Consulting in London",
    metaTeaser:
      "Engineering-led technology consultancy for London fintech, SaaS and scale-up companies. Custom software, cloud, security and AI delivered by senior engineers.",
    intro: [
      "London's fintech and SaaS density means engineering teams have to ship faster than competitors twice their size. Infiniti Tech Partners works alongside in-house teams — or stands in for them — to deliver production-ready software, cloud platforms and AI systems without the overhead of a 20-person hire round.",
      "We support growth-stage companies across the Square Mile, Shoreditch and the wider M25 corridor, with engineers who have shipped regulated systems for FCA-supervised fintechs, healthtech, proptech and B2B SaaS scaleups.",
    ],
    industries: ["Fintech", "B2B SaaS", "Healthtech", "Proptech", "E-commerce"],
    servicePillars: sharedPillars,
    keywords:
      "software development company London, IT consultancy London, enterprise software development London, cloud consulting London, AI consulting London, fintech software development London",
  },
  {
    slug: "new-york",
    city: "New York",
    region: "New York",
    country: "US",
    headline: "Enterprise Technology Consulting in New York",
    metaTeaser:
      "Engineering-led technology consulting for New York fintech, media and enterprise SaaS companies. Custom software, cloud, security and AI built by senior engineers.",
    intro: [
      "New York buyers expect engineering partners who can hold their own with a Wall Street CISO and ship to a media-grade deadline in the same week. Infiniti Tech Partners delivers production-ready software, cloud and AI systems for enterprise and growth-stage companies across Manhattan, Brooklyn and the wider tri-state.",
      "From SOC 2-ready fintech platforms to LLM-powered workflows for media and professional-services firms, we plug into existing teams or run the whole engineering function — without the cost of building a 20-person department.",
    ],
    industries: ["Fintech", "Media & Publishing", "Enterprise SaaS", "Professional Services", "Healthtech"],
    servicePillars: sharedPillars,
    keywords:
      "IT consulting firm New York, enterprise software development New York, technology consulting NYC, cloud consulting New York, AI consulting New York, fintech software development New York",
  },
];

export const getLocation = (slug: string): LocationData | undefined =>
  locations.find((l) => l.slug === slug);
