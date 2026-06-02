import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { serviceBuckets, caseStudies } from "@/data/services-restructured";
import { ParallaxLayer } from "@/components/ui";
import { usePageMeta, useBreadcrumb } from "@/hooks";
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

const SERVICE_KEYWORDS: Record<string, string> = {
  "enterprise-platforms":
    "custom enterprise software development, application modernization services, SaaS development for growth-stage startups, web application development B2B SaaS, product engineering services for scaleups",
  "infrastructure-cloud":
    "cloud engineering consulting services, AWS migration consulting, multi-cloud DevOps consulting, Kubernetes platform engineering, site reliability engineering as a service, cloud cost optimization consulting",
  "security-compliance":
    "SOC 2 compliance consulting services, HIPAA compliance software development, ISO 27001 readiness consulting, penetration testing services for fintech, cloud security posture management",
  "ai-automation":
    "enterprise AI consulting services, LLM application development, RAG implementation consulting, AI agent development for enterprise workflows, intelligent process automation, generative AI integration",
};

const SCHEMA_NODE_ID = "service-jsonld";

export const ServiceBucketDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceBuckets.find((s) => s.slug === slug);

  usePageMeta({
    title: service
      ? `${service.title} | Infiniti Tech Partners`
      : "Services | Infiniti Tech Partners",
    description: service
      ? service.description.length <= 155
        ? service.description
        : service.description.slice(0, 152).replace(/\s+\S*$/, "") + "..."
      : "Enterprise technology consulting services for growth-stage US and UK companies.",
    canonical: service ? `/services/${service.slug}` : "/services",
    keywords: service ? SERVICE_KEYWORDS[service.slug] : undefined,
  });

  useBreadcrumb(
    service
      ? [
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${service.slug}` },
        ]
      : []
  );

  // Inject Service + FAQPage schema for this specific pillar. The FAQ block
  // gives Google rich-result real-estate even for niche B2B queries.
  useEffect(() => {
    if (!service) return;
    const url = `https://www.infinititechpartners.com/services/${service.slug}`;
    const faq = [
      {
        q: `Who is ${service.title} for?`,
        a: service.targetCustomer,
      },
      {
        q: `What problems does ${service.title} solve?`,
        a: service.problemsSolved.join(" "),
      },
      {
        q: `What outcomes can we expect?`,
        a: service.businessOutcomes.join(" "),
      },
      {
        q: `What technologies do you use for ${service.title}?`,
        a: service.technologies.join(", "),
      },
    ];
    const node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = SCHEMA_NODE_ID;
    node.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": url,
          "name": service.title,
          "url": url,
          "description": service.description,
          "serviceType": service.title,
          "provider": { "@id": "https://www.infinititechpartners.com/#organization" },
          "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "United Kingdom" },
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${service.title} capabilities`,
            "itemListElement": service.capabilities.map((capability) => ({
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": capability },
            })),
          },
        },
        {
          "@type": "FAQPage",
          "mainEntity": faq.map((entry) => ({
            "@type": "Question",
            "name": entry.q,
            "acceptedAnswer": { "@type": "Answer", "text": entry.a },
          })),
        },
      ],
    });
    document.head.appendChild(node);
    return () => {
      document.getElementById(SCHEMA_NODE_ID)?.remove();
    };
  }, [service]);

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
          <ParallaxLayer speed={0.1}>
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
          </ParallaxLayer>
        </div>
      </section>
    </main>
  );
};
