import { Link } from "react-router-dom";
import { PageLayout } from "@/components/common/PageLayout";
import { FloatingConstellation } from "@/components/effects";
import { ParallaxLayer, TiltCard, MagneticButton } from "@/components/ui";
import { projects } from "@/data/data";

export const PortfolioPage = () => {
  return (
    <>
      <FloatingConstellation name="gemini" />
      <PageLayout
        tag="Our Work"
        title="Featured"
        titleAccent="Projects"
        description="Explore our portfolio of successful projects across various industries."
      >
        <div className="section-container">
          <div className="page-section">
            <div className="flex flex-wrap gap-6 justify-center">
              {projects.map((project, i) => (
                <TiltCard
                  key={i}
                  className="portfolio-card-full lg:w-[32%] md:w-[45%] w-full"
                >
                  <Link to={`/portfolio/${project.slug}`}>
                    <div
                      className="portfolio-image-full"
                      style={{ background: project.gradient }}
                    >
                      <div className="portfolio-overlay-full">
                        <span className="portfolio-category-badge">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="portfolio-content-full">
                      <h3 className="portfolio-title-large">{project.title}</h3>
                      <p className="portfolio-desc-full">{project.desc}</p>
                      <div className="portfolio-tech-full">
                        {project.tech.map((t, j) => (
                          <span key={j} className="tech-tag">
                            {t}
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
                <h2 className="page-cta-title">Have a project in mind?</h2>
                <p className="page-cta-desc">
                  Let's bring your vision to life with our expertise.
                </p>
                <MagneticButton href="/contact" className="btn-primary large">
                  Start Your Project
                </MagneticButton>
              </div>
            </ParallaxLayer>
          </div>
        </div>
      </PageLayout>
    </>
  );
};
