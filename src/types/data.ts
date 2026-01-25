// TypeScript interfaces for data.tsx
export interface NavItem {
  label: string;
  href: string;
}

export interface Value {
  icon: string;
  title: string;
  desc: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Service {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  features: string[];
}

export interface ServiceDetail {
  slug: string;
  heroTitle: string;
  heroDescription: string;
  heroDescription2?: string;
  // Why It Matters section
  whyMattersTitle: string;
  whyMattersIntro: string;
  whyMattersClosing: string;
  // Capabilities section
  capabilitiesIntro: string;
  capabilities: string[];
  // Benefits (shown as cards in Why It Matters)
  benefits: { title: string; desc: string }[];
  // Revenue/Business Impact
  revenueImpact: string[];
  revenueClosing: string;
  // Highlight CTA
  highlightCTA: string;
  technologies?: string[];
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  icon: string;
  desc: string;
  gradient: string;
  features: string[];
  technologies: string[];
  highlights: string;
  demoUrl?: string;
}

export interface ProductModule {
  icon: string;
  title: string;
  description: string;
}

export interface ProductPortal {
  title: string;
  description?: string;
  features: string[];
}

export interface ProductDetail {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  modules: ProductModule[];
  portals?: ProductPortal[];
  completeFeatures: string[];
  stats?: { label: string; value: string }[];
}

export interface Project {
  slug: string;
  category: string;
  title: string;
  desc: string;
  tech: string[];
  gradient: string;
}

export interface ProjectPainPoint {
  challenge: string;
  solution: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  timeline?: string;
  teamSize?: string;
  heroDescription: string;
  challenge: string;
  mission: string;
  missionPoints: string[];
  technologies: string[];
  deliverables: string[];
  painPoints: ProjectPainPoint[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  points: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  linkedin?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  hours: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "linkedin" | "twitter" | "github";
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface AboutClientReason {
  text: string;
}

export interface Version {
  version: string;
  header: string;
  description: string;
  link?: string;
  isLatest?: boolean;
}
