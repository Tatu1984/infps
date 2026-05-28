import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PageLayout } from "@/components/common/PageLayout";
import { TiltCard, MagneticButton, ParallaxLayer } from "@/components/ui";
import { usePageMeta } from "@/hooks";
import { getLocation } from "@/data/locations";

const SCHEMA_NODE_ID = "location-jsonld";

/**
 * Single-component geo landing page. Driven by data in src/data/locations.ts —
 * adding a new city is just a data-file entry, no new route, no new component.
 */
export const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocation(slug) : undefined;

  usePageMeta(
    location
      ? {
          title: `${location.headline} | Infiniti Tech Partners`,
          description: location.metaTeaser,
          canonical: `/locations/${location.slug}`,
          keywords: location.keywords,
        }
      : {
          title: "Locations | Infiniti Tech Partners",
          description: "Enterprise technology consulting in the US and UK.",
          canonical: "/locations",
        }
  );

  // Inject a Service + ProfessionalService node scoped to this geo so search
  // engines can associate the location with the offered services.
  useEffect(() => {
    if (!location) return;
    const countryName = location.country === "UK" ? "United Kingdom" : "United States";
    const node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = SCHEMA_NODE_ID;
    node.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": `Infiniti Tech Partners — ${location.city}`,
      "url": `https://www.infinititechpartners.com/locations/${location.slug}`,
      "areaServed": {
        "@type": "City",
        "name": location.city,
        "containedInPlace": { "@type": "Country", "name": countryName },
      },
      "serviceType": location.servicePillars.map((p) => p.title),
      "provider": { "@id": "https://www.infinititechpartners.com/#organization" },
    });
    document.head.appendChild(node);
    return () => {
      document.getElementById(SCHEMA_NODE_ID)?.remove();
    };
  }, [location]);

  if (!location) {
    return (
      <PageLayout
        tag="Locations"
        title="Location"
        titleAccent="Not Found"
        description="We couldn't find that location. Try London or New York."
      >
        <div className="section-container">
          <div className="page-section text-center">
            <MagneticButton href="/contact" className="btn-primary">
              Talk to us anyway
            </MagneticButton>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      tag={`${location.city}, ${location.country}`}
      title={location.headline.split(" in ")[0]}
      titleAccent={`in ${location.city}`}
      description={location.metaTeaser}
    >
      <div className="section-container">
        <div className="page-section">
          <ParallaxLayer speed={0.1}>
            <div className="location-intro">
              {location.intro.map((paragraph, i) => (
                <p key={i} className="location-intro-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </ParallaxLayer>
        </div>

        <div className="page-section">
          <ParallaxLayer speed={0.1}>
            <h2 className="section-title">Industries we serve in {location.city}</h2>
            <div className="location-industries">
              {location.industries.map((industry) => (
                <span key={industry} className="location-industry-pill">
                  {industry}
                </span>
              ))}
            </div>
          </ParallaxLayer>
        </div>

        <div className="page-section">
          <ParallaxLayer speed={0.1}>
            <h2 className="section-title">What we deliver</h2>
            <div className="location-pillars">
              {location.servicePillars.map((pillar) => (
                <TiltCard key={pillar.title} className="location-pillar-card">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <Link to={pillar.href} className="location-pillar-link">
                    Explore services →
                  </Link>
                </TiltCard>
              ))}
            </div>
          </ParallaxLayer>
        </div>

        <div className="page-cta-section">
          <ParallaxLayer speed={0.1}>
            <h2>Have a project in {location.city}?</h2>
            <p>
              Talk to a senior engineer about your roadmap — typically within one business day.
            </p>
            <MagneticButton href="/contact" className="btn-primary">
              Start a conversation
            </MagneticButton>
          </ParallaxLayer>
        </div>
      </div>
    </PageLayout>
  );
};
