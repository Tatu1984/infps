import { useParams, Link, Navigate } from "react-router-dom";
import { caseStudies, serviceBuckets } from "@/data/services-restructured";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Users,
  CheckCircle2,
  Quote,
  Building2,
  Truck,
  MapPin,
} from "lucide-react";

const industryIcons: Record<string, React.ReactNode> = {
  Healthcare: <Building2 size={28} />,
  Logistics: <Truck size={28} />,
  Government: <MapPin size={28} />,
};

export const CaseStudyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  const relatedServices = serviceBuckets.filter((s) =>
    study.relatedServices.includes(s.slug)
  );

  return (
    <main className="case-study-detail-page">
      {/* Hero Section */}
      <section
        className="case-study-hero"
        style={{ background: study.gradient }}
      >
        <div className="container">
          <Link to="/case-studies" className="back-link">
            <ArrowLeft size={18} />
            <span>All Case Studies</span>
          </Link>

          <div className="case-study-hero-content">
            <div className="case-study-industry-large">
              {industryIcons[study.industry]}
              <span>{study.industry}</span>
            </div>

            <h1 className="case-study-detail-title">{study.title}</h1>
            <p className="case-study-detail-subtitle">{study.subtitle}</p>

            <div className="case-study-hero-meta">
              <div className="meta-box">
                <Clock size={20} />
                <div>
                  <span className="meta-label">Timeline</span>
                  <span className="meta-value">{study.timeline}</span>
                </div>
              </div>
              <div className="meta-box">
                <Users size={20} />
                <div>
                  <span className="meta-label">Client Type</span>
                  <span className="meta-value">{study.clientType}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Bar */}
      <section className="outcomes-bar">
        <div className="container">
          <div className="outcomes-grid">
            {study.outcomes.map((outcome, i) => (
              <div key={i} className="outcome-item">
                <span className="outcome-value">{outcome.metric}</span>
                <span className="outcome-desc">{outcome.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="case-study-content">
        <div className="container">
          <div className="content-grid">
            {/* Main Column */}
            <div className="content-main">
              {/* The Challenge */}
              <div className="content-block">
                <h2 className="content-heading">The Challenge</h2>
                <p className="content-text">{study.challenge}</p>
              </div>

              {/* The Solution */}
              <div className="content-block">
                <h2 className="content-heading">Our Solution</h2>
                <p className="content-text">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="content-block results-block">
                <h2 className="content-heading">Results & Impact</h2>
                <div className="results-list">
                  {study.outcomes.map((outcome, i) => (
                    <div key={i} className="result-item">
                      <CheckCircle2 size={24} className="result-icon" />
                      <div className="result-content">
                        <span className="result-metric">{outcome.metric}</span>
                        <span className="result-desc">{outcome.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="testimonial-block">
                <Quote size={40} className="quote-icon" />
                <blockquote className="testimonial-quote">
                  "{study.testimonial.quote}"
                </blockquote>
                <div className="testimonial-author">
                  <span className="author-name">{study.testimonial.author}</span>
                  <span className="author-role">{study.testimonial.role}</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="content-sidebar">
              {/* Technologies Used */}
              <div className="sidebar-block">
                <h3 className="sidebar-heading">Technologies Used</h3>
                <div className="tech-tags">
                  {study.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <div className="sidebar-block">
                <h3 className="sidebar-heading">Related Services</h3>
                <div className="related-services-list">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="related-service-link"
                    >
                      <span>{service.title}</span>
                      <ArrowRight size={16} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="sidebar-cta">
                <h3>Start Your Project</h3>
                <p>Ready to achieve similar results?</p>
                <Link to="/contact" className="btn-primary">
                  Schedule Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="other-case-studies">
        <div className="container">
          <h2 className="section-title">More Case Studies</h2>
          <div className="other-studies-grid">
            {caseStudies
              .filter((s) => s.slug !== study.slug)
              .map((otherStudy) => (
                <Link
                  key={otherStudy.slug}
                  to={`/case-studies/${otherStudy.slug}`}
                  className="other-study-card"
                  style={{ background: otherStudy.gradient }}
                >
                  <span className="other-study-industry">{otherStudy.industry}</span>
                  <h3>{otherStudy.title}</h3>
                  <span className="other-study-cta">
                    Read Case Study <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};
