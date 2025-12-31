import { useParams, Link } from "react-router-dom";
import { FloatingConstellation } from "@/components/effects";
import { MagneticButton, Icon, type IconName } from "@/components/ui";
import { ImagesSlider } from "@/components/ui/images-slider";
import { products, productDetails } from "@/data/data";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { getProductScreenshots } from "@/utils/screenshots";

export const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = products.find((p) => p.slug === slug);
  const details = productDetails.find((d) => d.slug === slug);

  const screenshots = slug ? getProductScreenshots(slug) : [];
  const showScreenshots = screenshots.length > 0;

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="section-container">
          <div className="product-not-found">
            <h1>Product not found</h1>
            <Link to="/products" className="back-link">
              <ArrowLeft size={20} />
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <FloatingConstellation name="orion" />
      <div className="page-container product-detail-page">
        {/* Back Navigation */}
        <section className="product-back-nav">
          <div className="section-container">
            <Link to="/products" className="back-link">
              <ArrowLeft size={20} />
              <span>Back to Products</span>
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="product-detail-hero">
          <div className="section-container">
            <div className="product-hero-content">
              <div className="product-hero-left">
                <div className="product-hero-meta">
                  <div
                    className="product-hero-icon"
                    style={{ background: product.gradient }}
                  >
                    <Icon name={product.icon as IconName} size={40} />
                  </div>
                  <span className="product-hero-category">
                    {product.category}
                  </span>
                </div>

                <h1 className="product-hero-title">
                  {details?.heroTitle || product.name}
                </h1>
                <p className="product-hero-tagline">{product.tagline}</p>
                <p className="product-hero-desc">
                  {details?.heroDescription || product.desc}
                </p>

                {/* Stats */}
                {details?.stats && (
                  <div className="product-hero-stats">
                    {details.stats.map((stat, i) => (
                      <div key={i} className="product-stat">
                        <span className="product-stat-value">{stat.value}</span>
                        <span className="product-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="product-hero-actions">
                  {product.demoUrl && (
                    <a
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ExternalLink size={20} />
                      View Live Demo
                    </a>
                  )}
                  <MagneticButton href="/contact" className="btn-secondary">
                    Request Quote
                  </MagneticButton>
                </div>
              </div>

              <div className="product-hero-right">
                <div
                  className="product-hero-visual overflow-hidden"
                  style={{
                    background: showScreenshots
                      ? "transparent"
                      : product.gradient,
                  }}
                >
                  {showScreenshots ? (
                    <ImagesSlider
                      images={screenshots}
                      autoplay={true}
                      interval={2000}
                      overlay={false}
                      className="h-full w-full rounded-[30px]"
                    >
                      <div />
                    </ImagesSlider>
                  ) : (
                    <Icon name={product.icon as IconName} size={120} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="product-detail-section">
          <div className="section-container">
            <h2 className="product-section-title">Technology Stack</h2>
            <div className="product-tech-list">
              {product.technologies.map((tech, i) => (
                <span key={i} className="product-tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Core Modules */}
        {details?.modules && (
          <section className="product-detail-section alt">
            <div className="section-container">
              <h2 className="product-section-title">Core Modules</h2>
              <div className="product-modules-grid">
                {details.modules.map((module, i) => (
                  <div key={i} className="product-module-card">
                    <div className="product-module-icon">
                      <Icon name={module.icon as IconName} size={28} />
                    </div>
                    <h3 className="product-module-title">{module.title}</h3>
                    <p className="product-module-desc">{module.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Portals / Roles */}
        {details?.portals && (
          <section className="product-detail-section">
            <div className="section-container">
              <h2 className="product-section-title">
                {details.portals.some((p) => p.description?.includes("Portal"))
                  ? "Role-Based Portals"
                  : "Platform Components"}
              </h2>
              <div className="product-portals-grid">
                {details.portals.map((portal, i) => (
                  <div key={i} className="product-portal-card">
                    <h3 className="product-portal-title">{portal.title}</h3>
                    {portal.description && (
                      <p className="product-portal-desc">
                        {portal.description}
                      </p>
                    )}
                    <ul className="product-portal-features">
                      {portal.features.map((feature, j) => (
                        <li key={j}>
                          <CheckCircle size={16} className="check-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Complete Features */}
        {details?.completeFeatures && (
          <section className="product-detail-section alt">
            <div className="section-container">
              <h2 className="product-section-title">Complete Feature List</h2>
              <div className="product-features-grid">
                {details.completeFeatures.map((feature, i) => (
                  <div key={i} className="product-feature-item">
                    <CheckCircle size={18} className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="product-detail-cta">
          <div className="section-container">
            <div className="product-cta-content">
              <h2 className="product-cta-title">Ready to Get Started?</h2>
              <p className="product-cta-desc">
                Get a production-ready solution customized to your specific
                needs
              </p>
              <div className="product-cta-actions">
                {product.demoUrl && (
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary large"
                  >
                    <ExternalLink size={20} />
                    Try Live Demo
                  </a>
                )}
                <MagneticButton href="/contact" className="btn-secondary large">
                  Contact Sales
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
