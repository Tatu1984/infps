import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParticleField, ScrollProgress, CustomCursor } from "@/components/effects";
import { Navigation, Footer } from "@/components/common";

const HomePage = lazy(() => import("@/pages/HomePage").then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("@/pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ServicesPageNew = lazy(() => import("@/pages/ServicesPageNew").then((m) => ({ default: m.ServicesPageNew })));
const ServiceBucketDetailPage = lazy(() => import("@/pages/ServiceBucketDetailPage").then((m) => ({ default: m.ServiceBucketDetailPage })));
const ProductsPage = lazy(() => import("@/pages/ProductsPage").then((m) => ({ default: m.ProductsPage })));
const ProductDetailPage = lazy(() => import("@/pages/ProductDetailPage").then((m) => ({ default: m.ProductDetailPage })));
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage").then((m) => ({ default: m.PortfolioPage })));
const PortfolioDetailPage = lazy(() => import("@/pages/PortfolioDetailPage").then((m) => ({ default: m.PortfolioDetailPage })));
const CaseStudiesPage = lazy(() => import("@/pages/CaseStudiesPage").then((m) => ({ default: m.CaseStudiesPage })));
const CaseStudyDetailPage = lazy(() => import("@/pages/CaseStudyDetailPage").then((m) => ({ default: m.CaseStudyDetailPage })));
const TeamPage = lazy(() => import("@/pages/TeamPage").then((m) => ({ default: m.TeamPage })));
const ContactPage = lazy(() => import("@/pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const PreviousVersionsPage = lazy(() => import("@/pages/PreviousVersionsPage").then((m) => ({ default: m.PreviousVersionsPage })));

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-(--color-primary) border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <ParticleField />
        <ScrollProgress />
        <CustomCursor />
        <Navigation />

        <main>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPageNew />} />
              <Route path="/services/:slug" element={<ServiceBucketDetailPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/previous-versions" element={<PreviousVersionsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
