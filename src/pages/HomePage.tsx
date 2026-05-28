import { FloatingConstellation } from "@/components/effects";
import { usePageMeta } from "@/hooks";
import {
  HeroSectionNew,
  TrustBarSection,
  ProblemSolutionSection,
  ServicesBucketsSection,
  CaseStudiesSection,
  AboutSection,
  ProductsSection,
  ProcessSection,
  ContactSection,
} from "@/components/sections";

export const HomePage = () => {
  usePageMeta({
    title: "Enterprise Technology Consulting | Infiniti Tech Partners",
    description:
      "Ship production-ready software, cloud, security and AI systems without building a 20-person team. Enterprise tech consulting for growth-stage US and UK firms.",
    canonical: "/",
    keywords:
      "enterprise technology consulting, custom software development, application modernization services, cloud engineering consulting, enterprise AI consulting, fractional engineering team, IT consulting firm, IT consultancy UK",
  });

  return (
    <>
      <FloatingConstellation name="orion" />
      <HeroSectionNew />
      <TrustBarSection />
      <ProblemSolutionSection />
      <ServicesBucketsSection />
      <CaseStudiesSection />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
};
