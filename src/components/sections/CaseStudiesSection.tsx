import { Link } from "react-router-dom";
import { useInView } from "@/hooks";
import { caseStudies } from "@/data/services-restructured";
import { ArrowRight, Building2, Truck, MapPin } from "lucide-react";

const industryIcons: Record<string, React.ReactNode> = {
  Healthcare: <Building2 size={24} />,
  Logistics: <Truck size={24} />,
  Government: <MapPin size={24} />,
};

export const CaseStudiesSection = () => {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`case-studies-section ${inView ? "visible" : ""}`}
      id="case-studies"
    >
      <div className="case-studies-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Proven Results</span>
          <h2 className="section-title">
            See How We've Helped Companies Like Yours
          </h2>
          <p className="section-subtitle">
            Real projects. Measurable outcomes. Here's what we've delivered for our clients.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug}
              to={`/case-studies/${study.slug}`}
              className="case-study-card"
              style={{ background: study.gradient }}
            >
              <div className="case-study-card-inner">
                {/* Industry Badge */}
                <div className="case-study-industry">
                  {industryIcons[study.industry]}
                  <span>{study.industry}</span>
                </div>

                {/* Title */}
                <h3 className="case-study-title">{study.title}</h3>
                <p className="case-study-subtitle">{study.subtitle}</p>

                {/* Key Outcome */}
                <div className="case-study-outcome">
                  <span className="outcome-metric">{study.outcomes[0].metric}</span>
                  <span className="outcome-label">{study.outcomes[0].description}</span>
                </div>

                {/* Technologies */}
                <div className="case-study-tech">
                  {study.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 4 && (
                    <span className="tech-tag">+{study.technologies.length - 4}</span>
                  )}
                </div>

                {/* Read More */}
                <div className="case-study-cta">
                  <span>Read Case Study</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="case-studies-footer">
          <Link to="/case-studies" className="view-all-link">
            View All Case Studies
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
