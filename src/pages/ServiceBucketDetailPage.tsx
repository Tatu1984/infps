import { useParams, Link, Navigate } from "react-router-dom";
import { serviceBuckets, caseStudies } from "@/data/services-restructured";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Layers,
  Server,
  Shield,
  Brain,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers size={40} />,
  server: <Server size={40} />,
  shield: <Shield size={40} />,
  brain: <Brain size={40} />,
};

export const ServiceBucketDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceBuckets.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedCaseStudy = caseStudies.find((c) =>
    c.relatedServices.includes(service.slug)
  );

  const otherServices = serviceBuckets.filter((s) => s.slug !== slug);

  return (
    <main className="service-bucket-detail-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ background: service.gradient }}>
        <div className="container">
          <Link to="/services" className="back-link light">
            <ArrowLeft size={18} />
            <span>All Services</span>
          </Link>

          <div className="service-hero-content">
            <div className="service-hero-icon">{iconMap[service.icon]}</div>
            <h1 className="service-hero-title">{service.title}</h1>
            <p className="service-hero-tagline">{service.tagline}</p>
            <p className="service-hero-desc">{service.description}</p>

            <div className="service-hero-ctas">
              <Link to="/contact" className="btn-primary-light">
                Get a Custom Proposal
                <ArrowRight size={18} />
              </Link>
              <a href="#capabilities" className="btn-secondary-light">
                Explore Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="service-metrics-bar">
        <div className="container">
          <div className="metrics-grid">
            {service.metrics.map((metric, i) => (
              <div key={i} className="metric-box">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-main-content">
        <div className="container">
          <div className="service-content-grid">
            {/* Left Column - Problems & Outcomes */}
            <div className="service-left-column">
              {/* Target Customer */}
              <div className="content-block">
                <h3 className="block-label">Who This Is For</h3>
                <p className="block-text">{service.targetCustomer}</p>
              </div>

              {/* Problems Solved */}
              <div className="content-block">
                <h3 className="block-heading">Problems We Solve</h3>
                <ul className="problems-list">
                  {service.problemsSolved.map((problem, i) => (
                    <li key={i} className="problem-item">
                      <span className="problem-icon">✕</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Outcomes */}
              <div className="content-block outcomes-block">
                <h3 className="block-heading">Business Outcomes</h3>
                <ul className="outcomes-list">
                  {service.businessOutcomes.map((outcome, i) => (
                    <li key={i} className="outcome-item">
                      <CheckCircle2 size={20} className="outcome-icon" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Capabilities */}
            <div className="service-right-column" id="capabilities">
              <div className="content-block capabilities-block">
                <h3 className="block-heading">Our Capabilities</h3>
                <div className="capabilities-grid">
                  {service.capabilities.map((capability, i) => (
                    <div key={i} className="capability-card">
                      <CheckCircle2 size={18} />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="content-block">
                <h3 className="block-heading">Technologies We Use</h3>
                <div className="tech-grid">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Study */}
      {relatedCaseStudy && (
        <section className="related-case-study-section">
          <div className="container">
            <h2 className="section-title">See This Service in Action</h2>
            <Link
              to={`/case-studies/${relatedCaseStudy.slug}`}
              className="related-case-study-card"
              style={{ background: relatedCaseStudy.gradient }}
            >
              <div className="case-study-info">
                <span className="case-study-industry">{relatedCaseStudy.industry}</span>
                <h3>{relatedCaseStudy.title}</h3>
                <p>{relatedCaseStudy.subtitle}</p>
              </div>
              <div className="case-study-outcomes">
                {relatedCaseStudy.outcomes.slice(0, 2).map((outcome, i) => (
                  <div key={i} className="outcome-box">
                    <span className="outcome-metric">{outcome.metric}</span>
                    <span className="outcome-desc">{outcome.description}</span>
                  </div>
                ))}
              </div>
              <span className="read-more">
                Read Case Study <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* Other Services */}
      <section className="other-services-section">
        <div className="container">
          <h2 className="section-title">Explore Other Services</h2>
          <div className="other-services-grid">
            {otherServices.map((otherService) => (
              <Link
                key={otherService.slug}
                to={`/services/${otherService.slug}`}
                className="other-service-card"
              >
                <div
                  className="other-service-icon"
                  style={{ background: otherService.gradient }}
                >
                  {iconMap[otherService.icon]}
                </div>
                <h3>{otherService.title}</h3>
                <p>{otherService.tagline}</p>
                <span className="other-service-cta">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss your {service.shortTitle.toLowerCase()} needs and how we can help
              you achieve your business goals.
            </p>
            <Link to="/contact" className="btn-primary-large">
              Schedule a Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
