import { Link } from "react-router-dom";
import { useInView } from "@/hooks";
import { serviceBuckets } from "@/data/services-restructured";
import { ArrowRight, Layers, Server, Shield, Brain } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers size={28} />,
  server: <Server size={28} />,
  shield: <Shield size={28} />,
  brain: <Brain size={28} />,
};

export const ServicesBucketsSection = () => {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`services-buckets-section ${inView ? "visible" : ""}`}
      id="services"
    >
      <div className="services-buckets-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">What We Do</span>
          <h2 className="section-title">
            End-to-End Technology Services
          </h2>
          <p className="section-subtitle">
            From custom platforms to secure infrastructure—we deliver production-ready systems that scale with your business.
          </p>
        </div>

        {/* Service Cards */}
        <div className="services-buckets-grid">
          {serviceBuckets.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="service-bucket-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className="service-bucket-icon"
                style={{ background: service.gradient }}
              >
                {iconMap[service.icon]}
              </div>

              {/* Content */}
              <div className="service-bucket-content">
                <h3 className="service-bucket-title">{service.title}</h3>
                <p className="service-bucket-tagline">{service.tagline}</p>

                {/* Key Outcomes */}
                <div className="service-bucket-outcomes">
                  {service.businessOutcomes.slice(0, 2).map((outcome, i) => (
                    <div key={i} className="service-outcome">
                      <span className="outcome-check">✓</span>
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="service-bucket-cta">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-buckets-footer">
          <Link to="/services" className="services-overview-link">
            View All Services & Capabilities
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
