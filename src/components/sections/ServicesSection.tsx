import {
  ParallaxLayer,
  SplitText,
  TiltCard,
  Icon,
  type IconName,
} from "@/components/ui";
import { services } from "@/data/data";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="section-container">
        <ParallaxLayer speed={-0.2}>
          <div className="section-header">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">
              <SplitText text="End-to-End Technology" />
              <br />
              <SplitText text="Solutions That Scale" className="accent" />
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '1rem auto 0', opacity: 0.7 }}>
              From custom platforms to secure infrastructure—we deliver production-ready systems.
            </p>
          </div>
        </ParallaxLayer>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, i) => (
            <TiltCard
              key={i}
              className="w-full md:w-[47%] lg:w-[32%] service-card"
            >
              <Link to={`/services/${service.slug}`}>
                <>
                  <div className="service-icon">
                    <Icon name={service.icon as IconName} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                  <ul className="service-features">
                    {service.features.map((f, j) => (
                      <li key={j}>{f}</li>
                    ))}
                  </ul>
                </>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
