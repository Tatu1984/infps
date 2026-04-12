import { Link } from "react-router-dom";
import { caseStudies, serviceBuckets } from "@/data/services-restructured";
import { ArrowRight, Building2, Truck, MapPin, Clock, Users } from "lucide-react";

const industryIcons: Record<string, React.ReactNode> = {
  Healthcare: <Building2 size={24} />,
  Logistics: <Truck size={24} />,
  Government: <MapPin size={24} />,
};

export const CaseStudiesPage = () => {
  return (
    <main className="case-studies-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="page-hero-badge">Client Success Stories</span>
          <h1 className="page-hero-title">
            Real Projects. Measurable Results.
          </h1>
          <p className="page-hero-subtitle">
            See how we've helped companies transform their operations, modernize infrastructure,
            and build systems that scale. Every project delivers measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="case-studies-grid-section">
        <div className="container">
          <div className="case-studies-full-grid">
            {caseStudies.map((study, index) => (
              <Link
                key={study.slug}
                to={`/case-studies/${study.slug}`}
                className="case-study-full-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header */}
                <div
                  className="case-study-full-header"
                  style={{ background: study.gradient }}
                >
                  <div className="case-study-industry-badge">
                    {industryIcons[study.industry]}
                    <span>{study.industry}</span>
                  </div>
                  <h2 className="case-study-full-title">{study.title}</h2>
                  <p className="case-study-full-subtitle">{study.subtitle}</p>
                </div>

                {/* Card Body */}
                <div className="case-study-full-body">
                  {/* Meta Info */}
                  <div className="case-study-meta">
                    <div className="meta-item">
                      <Clock size={16} />
                      <span>{study.timeline}</span>
                    </div>
                    <div className="meta-item">
                      <Users size={16} />
                      <span>{study.clientType}</span>
                    </div>
                  </div>

                  {/* Challenge Preview */}
                  <div className="case-study-challenge">
                    <h4>The Challenge</h4>
                    <p>{study.challenge.slice(0, 150)}...</p>
                  </div>

                  {/* Outcomes */}
                  <div className="case-study-outcomes-grid">
                    {study.outcomes.slice(0, 3).map((outcome, i) => (
                      <div key={i} className="outcome-box">
                        <span className="outcome-metric">{outcome.metric}</span>
                        <span className="outcome-label">{outcome.description}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="case-study-technologies">
                    {study.technologies.slice(0, 5).map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="case-study-full-cta">
                    <span>Read Full Case Study</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="related-services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            These case studies showcase our core service offerings
          </p>
          <div className="related-services-grid">
            {serviceBuckets.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="related-service-card"
              >
                <div
                  className="service-icon"
                  style={{ background: service.gradient }}
                />
                <span className="service-name">{service.shortTitle}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-content">
            <h2>Ready to Build Your Success Story?</h2>
            <p>
              Let's discuss your project and how we can deliver similar results for your organization.
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
