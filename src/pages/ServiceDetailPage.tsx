import { useParams, Link } from "react-router-dom";
import { FloatingConstellation } from "@/components/effects";
import {
  MagneticButton,
  Icon,
  ParallaxLayer,
  type IconName,
} from "@/components/ui";
import { services, serviceDetails } from "@/data/data";
import { ArrowLeft, CheckCircle, TrendingUp } from "lucide-react";

export const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = services.find((s) => s.slug === slug);
  const details = serviceDetails.find((d) => d.slug === slug);

  if (!service || !details) {
    return (
      <div className="service-detail-page">
        <div className="section-container">
          <div className="service-not-found">
            <h1>Service not found</h1>
            <Link to="/services" className="back-link">
              <ArrowLeft size={20} />
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <FloatingConstellation name="orion" />
      <div className="page-container service-detail-page">
        {/* Back Navigation */}
        <section className="service-back-nav">
          <div className="section-container">
            <ParallaxLayer speed={0.05}>
              <Link to="/services" className="back-link">
                <ArrowLeft size={20} />
                <span>Back to Services</span>
              </Link>
            </ParallaxLayer>
          </div>
        </section>

        {/* Hero Section */}
        <section className="service-detail-hero">
          <div className="section-container">
            <div className="service-hero-content">
              <div className="service-hero-icon-wrapper">
                <div className="service-hero-icon">
                  <Icon name={service.icon as IconName} size={48} />
                </div>
              </div>

              <ParallaxLayer speed={0.05}>
                <p className="service-hero-title">{details.heroTitle}</p>
              </ParallaxLayer>
              <ParallaxLayer speed={0.05}>
                <div className="service-hero-descriptions">
                  <p className="service-hero-desc">{details.heroDescription}</p>
                  {details.heroDescription2 && (
                    <p className="service-hero-desc">
                      {details.heroDescription2}
                    </p>
                  )}
                </div>
              </ParallaxLayer>
              <div className="service-hero-features">
                {service.features.map((feature, i) => (
                  <span key={i} className="service-hero-feature">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="service-hero-actions">
                <MagneticButton href="/contact" className="btn-primary">
                  Get Started
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="my-20">
          <div className="section-container">
            <ParallaxLayer speed={0.05}>
              <h2 className="service-section-title">
                {details.whyMattersTitle}
              </h2>
            </ParallaxLayer>
            <div className="service-why-matters">
              <ParallaxLayer speed={0.08}>
                <p className="service-why-intro">{details.whyMattersIntro}</p>
              </ParallaxLayer>

              <div className="service-benefits-grid">
                {details.benefits.map((benefit, i) => (
                  <div key={i} className="service-benefit-card">
                    <h3 className="service-benefit-title">{benefit.title}</h3>
                    <p className="service-benefit-desc">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              <ParallaxLayer speed={0.08}>
                <p className="service-why-closing">
                  {details.whyMattersClosing}
                </p>
              </ParallaxLayer>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="my-20 w-full">
          <div className="section-container w-full">
            <ParallaxLayer speed={0.05}>
              <h2 className="service-section-title">How We Build Solutions</h2>
            </ParallaxLayer>
            <div className="service-capabilities-wrapper w-full! max-w-7xl!">
              <ParallaxLayer speed={0.08}>
                <p className="service-capabilities-intro">
                  {details.capabilitiesIntro}
                </p>
              </ParallaxLayer>
              <div className="service-capabilities-box">
                <h3 className="service-capabilities-heading">
                  Our Capabilities
                </h3>
                <div className="w-full max-w-7xl! flex justify-center flex-wrap gap-6">
                  {details.capabilities.map((capability, i) => (
                    <div
                      key={i}
                      className="service-capability-item lg:w-[30%] md:w-[40%] w-full"
                    >
                      <CheckCircle size={20} className="capability-icon" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Impact Section */}
        <section className="my-20">
          <div className="section-container">
            <ParallaxLayer speed={0.05}>
              <h2 className="service-section-title">Business Impact</h2>
            </ParallaxLayer>
            <div className="service-impact-wrapper">
              <div className="service-impact-grid">
                {details.revenueImpact.map((impact, i) => (
                  <div key={i} className="service-impact-item">
                    <TrendingUp size={22} className="impact-icon" />
                    <span>{impact}</span>
                  </div>
                ))}
              </div>
              {details.revenueClosing && (
                <ParallaxLayer speed={0.08}>
                  <p className="service-impact-closing">
                    {details.revenueClosing}
                  </p>
                </ParallaxLayer>
              )}
            </div>
          </div>
        </section>

        {/* Highlight CTA Section */}
        <section className="my-20">
          <div className="section-container">
            <ParallaxLayer speed={0.1}>
              <div className="service-highlight-card">
                <p className="service-highlight-text">{details.highlightCTA}</p>
              </div>
            </ParallaxLayer>
          </div>
        </section>

        {/* Technologies Section */}
        {details.technologies && (
          <section className="py-20 alt">
            <div className="section-container">
              <ParallaxLayer speed={0.05}>
                <h2 className="service-section-title">Technologies We Use</h2>
              </ParallaxLayer>
              <div className="service-tech-list">
                {details.technologies.map((tech, i) => (
                  <span key={i} className="service-tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="my-20">
          <div className="section-container">
            <ParallaxLayer speed={0.1}>
              <div className="service-cta-content">
                <h2 className="service-cta-title">Ready to Get Started?</h2>
                <p className="service-cta-desc">
                  Let's discuss how our {service.title.toLowerCase()} services
                  can help your business.
                </p>
                <div className="service-cta-actions">
                  <MagneticButton href="/contact" className="btn-primary large">
                    Get in Touch
                  </MagneticButton>
                </div>
              </div>
            </ParallaxLayer>
          </div>
        </section>
      </div>
    </>
  );
};
