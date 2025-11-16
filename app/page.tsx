import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import WorkProcess from "@/components/home/WorkProcess";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <WorkProcess />

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-primary/40 to-secondary/40 text-white relative z-10">
        {/* Blackish overlay */}
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="max-w-4xl mx-auto text-center px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 opacity-95">
            Let's discuss your project and bring your vision to life
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
          >
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}