import { FloatingConstellation } from "@/components/effects";
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
