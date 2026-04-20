import { Link } from "react-router-dom";
import { serviceBuckets, caseStudies, trustMetrics } from "@/data/services-restructured";
import { ArrowRight, Layers, Server, Shield, Brain, CheckCircle2 } from "lucide-react";
import { ParallaxLayer } from "@/components/ui";

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers size={32} />,
  server: <Server size={32} />,
  shield: <Shield size={32} />,
  brain: <Brain size={32} />,
};

export const ServicesPageNew = () => {
  return (
    <main className="services-page-new">
      {/* Hero Section */}
      <section className="page-hero services-hero">
        <div className="page-hero-content">
          <span className="page-hero-badge">Our Services</span>
          <h1 className="page-hero-title">
            Enterprise Technology Services
          </h1>
          <p className="page-hero-subtitle">
            From custom platforms to secure infrastructure—we deliver production-ready systems
            that help growing companies compete without building a 20-person engineering team.
          </p>

          {/* Quick Stats */}
          <div className="hero-stats">
            {trustMetrics.map((metric, i) => (
              <div key={i} className="hero-stat">
                <span className="stat-value">{metric.value}</span>
                <span className="stat-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-detail-section">
        <div className="container">
          {serviceBuckets.map((service, index) => (
            <div
              key={service.slug}
              className={`service-detail-block ${index % 2 === 1 ? "reverse" : ""}`}
            >
              {/* Content Side */}
              <div className="service-detail-content">
                <div
                  className="service-detail-icon"
                  style={{ background: service.gradient }}
                >
                  {iconMap[service.icon]}
                </div>

                <h2 className="service-detail-title">{service.title}</h2>
                <p className="service-detail-tagline">{service.tagline}</p>
                <p className="service-detail-desc">{service.description}</p>

                {/* Problems Solved */}
                <div className="service-problems">
                  <h4>Problems We Solve:</h4>
                  <ul>
                    {service.problemsSolved.slice(0, 3).map((problem, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} />
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/services/${service.slug}`}
                  className="service-detail-cta"
                >
                  Explore {service.shortTitle} Services
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Outcomes Side */}
              <div className="service-detail-outcomes">
                <h4>Business Outcomes</h4>
                <div className="outcomes-cards">
                  {service.businessOutcomes.map((outcome, i) => (
                    <div key={i} className="outcome-card">
                      <CheckCircle2 size={20} className="outcome-check" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="service-metrics">
                  {service.metrics.map((metric, i) => (
                    <div key={i} className="metric-item">
                      <span className="metric-value">{metric.value}</span>
                      <span className="metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="services-case-studies">
        <div className="container">
          <h2 className="section-title">See Our Work in Action</h2>
          <p className="section-subtitle">
            Real projects with measurable results across industries
          </p>
          <div className="case-studies-preview">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                to={`/case-studies/${study.slug}`}
                className="case-preview-card"
                style={{ background: study.gradient }}
              >
                <span className="preview-industry">{study.industry}</span>
                <h3>{study.title}</h3>
                <p>{study.subtitle}</p>
                <div className="preview-outcome">
                  <span className="outcome-highlight">{study.outcomes[0].metric}</span>
                  <span>{study.outcomes[0].description}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta-section">
        <div className="container">
          <ParallaxLayer speed={0.1}>
            <div className="page-cta-content">
              <h2>Ready to Discuss Your Project?</h2>
              <p>
                Let's talk about your technology challenges and how we can help you build
                systems that scale with your business.
              </p>
              <Link to="/contact" className="btn-primary-large">
                Schedule a Consultation
                <ArrowRight size={20} />
              </Link>
            </div>
          </ParallaxLayer>
        </div>
      </section>
    </main>
  );
};
