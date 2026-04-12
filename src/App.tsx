import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParticleField, ScrollProgress, CustomCursor } from "@/components/effects";
import { Navigation, Footer } from "@/components/common";
import {
  HomePage,
  AboutPage,
  ServicesPageNew,
  ServiceBucketDetailPage,
  ProductsPage,
  ProductDetailPage,
  PortfolioPage,
  PortfolioDetailPage,
  CaseStudiesPage,
  CaseStudyDetailPage,
  TeamPage,
  ContactPage,
  PreviousVersionsPage,
} from "@/pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <ParticleField />
        <ScrollProgress />
        <CustomCursor />
        <Navigation />

        <main>
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
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
