import { Link } from "react-router-dom";
import { PageLayout } from "@/components/common/PageLayout";
import { FloatingConstellation } from "@/components/effects";
import { TiltCard, MagneticButton, Icon, ParallaxLayer, type IconName } from "@/components/ui";
import { products } from "@/data/data";
import { usePageMeta } from "@/hooks";

export const ProductsPage = () => {
  usePageMeta({
    title: "SaaS Products by Infiniti Tech Partners",
    description:
      "Production-ready SaaS tools built by our engineering team — AI automation, compliance, and enterprise platform accelerators for growth-stage companies.",
    canonical: "/products",
    keywords:
      "enterprise SaaS products, HRMS software, accounting software platform, fleet management software, school ERP, B2B marketplace platform, healthcare ERP software",
  });

  return (
    <>
      <FloatingConstellation name="cygnus" />
      <PageLayout
        tag="Our Products"
        title="Production-Ready"
        titleAccent="Enterprise Solutions"
        description="Production-ready enterprise solutions built with modern technologies—ready to deploy and scale."
      >
        <div className="section-container">
          <div className="page-section">
            <div className="products-grid-full">
              {products.map((product, i) => (
                <TiltCard key={i} className="product-card-full">
                  <Link
                    to={`/products/${product.slug}`}
                    className="product-card-link"
                  >
                    <div
                      className="product-visual-full"
                      style={{ background: product.gradient }}
                    >
                      <div className="product-icon-wrapper">
                        <Icon name={product.icon as IconName} size={48} />
                      </div>
                      <span className="product-category">
                        {product.category}
                      </span>
                    </div>
                    <div className="product-content-full">
                      <span className="product-tagline">{product.tagline}</span>
                      <h3 className="product-name-large">{product.name}</h3>
                      <p className="product-desc-full">{product.desc}</p>

                      <div className="product-tech-stack">
                        {product.technologies.map((tech, j) => (
                          <span key={j} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="product-highlights">
                        <span className="highlights-label">Highlights</span>
                        <p className="highlights-text">{product.highlights}</p>
                      </div>

                      <div className="product-features-full">
                        {product.features.map((f, j) => (
                          <span key={j} className="feature-tag">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              ))}
            </div>
          </div>

          <div className="page-section page-cta-section">
            <ParallaxLayer speed={0.1}>
              <div className="page-cta-content">
                <h2 className="page-cta-title">
                  Ready to Transform Your Business?
                </h2>
                <p className="page-cta-desc">
                  Our products are production-ready and can be customized to fit
                  your specific needs.
                </p>
                <MagneticButton href="/contact" className="btn-primary large">
                  Get in Touch
                </MagneticButton>
              </div>
            </ParallaxLayer>
          </div>
        </div>
      </PageLayout>
    </>
  );
};
