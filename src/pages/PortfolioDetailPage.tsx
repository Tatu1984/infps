import { useParams, Link } from "react-router-dom";
import { FloatingConstellation } from "@/components/effects";
import { MagneticButton, ParallaxLayer } from "@/components/ui";
import { projects, projectDetails } from "@/data/data";
import {
  ArrowLeft,
  CheckCircle,
  Zap,
  Target,
  Clock,
  Users,
  Quote,
  Activity,
  Stethoscope,
  Building2,
  Server,
} from "lucide-react";

// Map project slugs to icons
const projectIcons: Record<string, React.ReactNode> = {
  "pigeon-pulse": <Activity size={48} />,
  paravet: <Stethoscope size={48} />,
  "smart-city": <Building2 size={48} />,
  "mdc-system": <Server size={48} />,
};

export const PortfolioDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((p) => p.slug === slug);
  const details = projectDetails.find((d) => d.slug === slug);

  if (!project || !details) {
    return (
      <div className="portfolio-detail-page">
        <div className="section-container">
          <div className="portfolio-not-found">
            <h1>Project not found</h1>
            <Link to="/portfolio" className="back-link">
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <FloatingConstellation name="orion" />
      <div className="page-container portfolio-detail-page">
        <ParallaxLayer speed={0.1}>
          {/* Back Navigation */}
          <section className="portfolio-back-nav">
            <div className="section-container">
              <Link to="/portfolio" className="back-link">
                <ArrowLeft size={20} />
                <span>Back to Portfolio</span>
              </Link>
            </div>
          </section>
        </ParallaxLayer>

        <ParallaxLayer speed={0.1}>
          {/* Hero Section */}
          <section className="portfolio-detail-hero">
            <div className="section-container">
              <div className="portfolio-hero-grid">
                {/* Left Column - Content */}
                <div className="portfolio-hero-content">
                  <div className="portfolio-hero-icon-wrapper">
                    <div
                      className="portfolio-hero-icon"
                      style={{ background: project.gradient }}
                    >
                      {projectIcons[slug || ""] || <Activity size={48} />}
                    </div>
                  </div>
                  <span className="portfolio-hero-category">
                    {details.category}
                  </span>
                  <h1 className="portfolio-hero-title">{details.title}</h1>
                  <p className="portfolio-hero-subtitle">{details.subtitle}</p>
                  <p className="portfolio-hero-desc">
                    {details.heroDescription}
                  </p>

                  <div className="portfolio-hero-stats">
                    {details.timeline && (
                      <div className="portfolio-stat-card">
                        <Clock size={24} className="stat-icon" />
                        <div className="stat-content">
                          <span className="stat-label">Timeline</span>
                          <span className="stat-value">{details.timeline}</span>
                        </div>
                      </div>
                    )}
                    {details.teamSize && (
                      <div className="portfolio-stat-card">
                        <Users size={24} className="stat-icon" />
                        <div className="stat-content">
                          <span className="stat-label">Team Size</span>
                          <span className="stat-value">{details.teamSize}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="portfolio-hero-tech">
                    {details.technologies.map((tech, i) => (
                      <span key={i} className="portfolio-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Visual Element */}
                <div className="portfolio-hero-visual">
                  <div
                    className="portfolio-hero-image"
                    style={{ background: project.gradient }}
                  >
                    <div className="portfolio-hero-image-overlay">
                      <div className="portfolio-hero-image-icon">
                        {projectIcons[slug || ""] || <Activity size={80} />}
                      </div>
                      <div className="portfolio-hero-image-pattern"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer speed={0.1}>
          {/* Challenge Section */}
          <section className="portfolio-detail-section">
            <div className="section-container">
              <h2 className="portfolio-section-title">The Challenge</h2>
              <div className="portfolio-challenge-content">
                <p className="portfolio-challenge-text">{details.challenge}</p>
              </div>
            </div>
          </section>
        </ParallaxLayer>

        <ParallaxLayer speed={0.1}>
          {/* Mission Section */}
          <section className="portfolio-detail-section alt">
            <div className="section-container">
              <h2 className="portfolio-section-title">Our Mission</h2>
              <div className="portfolio-mission-wrapper">
                <p className="portfolio-mission-intro">{details.mission}</p>
                <div className="flex flex-wrap justify-center gap-6">
                  {details.missionPoints.map((point, i) => (
                    <div
                      key={i}
                      className="md:w-[48%] w-full portfolio-mission-item"
                    >
                      <Target size={20} className="mission-icon" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer speed={0.1}>
          {/* What We Delivered Section */}
          <section className="portfolio-detail-section">
            <div className="section-container">
              <h2 className="portfolio-section-title">What We Delivered</h2>
              <div className="flex flex-wrap justify-center gap-6">
                {details.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="portfolio-deliverable-item md:w-[48%] w-full "
                  >
                    <CheckCircle size={20} className="deliverable-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer speed={0.1}>
          {/* Pain Points & Solutions Section */}
          <section className="portfolio-detail-section alt">
            <div className="section-container">
              <h2 className="portfolio-section-title">
                Pain Points & Solutions
              </h2>
              <div className="portfolio-painpoints-grid">
                {details.painPoints.map((item, i) => (
                  <div key={i} className="portfolio-painpoint-card">
                    <div className="painpoint-challenge">
                      <span className="painpoint-label">Challenge</span>
                      <p>{item.challenge}</p>
                    </div>
                    <div className="painpoint-arrow">
                      <Zap size={24} />
                    </div>
                    <div className="painpoint-solution">
                      <span className="painpoint-label">Solution</span>
                      <p>{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ParallaxLayer>

        <ParallaxLayer speed={0.1}>
          {/* Results Section */}
          <section className="portfolio-detail-section">
            <div className="section-container">
              <h2 className="portfolio-section-title">Results & Impact</h2>
              <div className="flex flex-wrap justify-center gap-6">
                {details.results.map((result, i) => (
                  <div
                    key={i}
                    className="portfolio-result-item md:w-[48%] w-full "
                  >
                    <CheckCircle size={22} className="result-icon" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer speed={0.1}>
          {/* Testimonial Section */}
          {details.testimonial && (
            <section className="portfolio-testimonial-section">
              <div className="section-container">
                <div className="portfolio-testimonial-card">
                  <Quote size={40} className="testimonial-quote-icon" />
                  <blockquote className="testimonial-quote">
                    {details.testimonial.quote}
                  </blockquote>
                  <div className="testimonial-author">
                    <span className="testimonial-name">
                      {details.testimonial.author}
                    </span>
                    <span className="testimonial-role">
                      {details.testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          )}
        </ParallaxLayer>

        {/* CTA Section */}
        <section className="portfolio-detail-cta">
          <div className="section-container">
            <ParallaxLayer speed={0.1}>
              <div className="portfolio-cta-content">
                <h2 className="portfolio-cta-title">Have a Similar Project?</h2>
                <p className="portfolio-cta-desc">
                  Let's discuss how we can help bring your vision to life.
                </p>
                <div className="portfolio-cta-actions">
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
