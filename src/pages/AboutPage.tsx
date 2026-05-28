import { PageLayout } from "@/components/common/PageLayout";
import { FloatingConstellation } from "@/components/effects";
import {
  ParallaxLayer,
  TiltCard,
  MagneticButton,
  Icon,
  SplitText,
  AnimatedCounter,
} from "@/components/ui";
import {
  aboutFounderStory,
  aboutServicesExpanded,
  aboutOperatingPrinciples,
  aboutClientReasons,
  aboutMotto,
  aboutVision,
  aboutCommitment,
  aboutClosingStatement,
  stats,
} from "@/data/data";
import { usePageMeta } from "@/hooks";

const journeyMilestones = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "Started as a specialized engineering unit focused on modern data centers and cloud integrations.",
    icon: "rocket",
  },
  {
    year: "2022",
    title: "Expansion",
    description:
      "Expanded into DevOps, cybersecurity, and smart city solutions as client demands grew.",
    icon: "trending-up",
  },
  {
    year: "2024",
    title: "Full-Stack Firm",
    description:
      "Evolved into a full-stack technology engineering firm with AI/ML and blockchain capabilities.",
    icon: "zap",
  },
  {
    year: "Now",
    title: "Global Reach",
    description:
      "Supporting clients worldwide from startups to enterprises with scalable solutions.",
    icon: "globe",
  },
];

export const AboutPage = () => {
  usePageMeta({
    title: "About Infiniti Tech Partners | Engineering-Led Consultancy",
    description:
      "An engineering-led technology consultancy serving growth-stage US and UK companies. Custom software, cloud, security and AI — built by senior engineers, not pitch decks.",
    canonical: "/about",
    keywords:
      "engineering-led consultancy, enterprise technology consulting firm, senior engineering team, growth-stage technology partner, technology consultancy US UK",
  });

  return (
    <>
      <FloatingConstellation name="cassiopeia" />
      <PageLayout
        tag="About Us"
        title="Engineering the"
        titleAccent="Future"
        description="A Founder Who Built, Broke, and Rebuilt Technology Until It Made Sense"
      >
        <div className="section-container">
          {/* Founder Story - Hero Style */}
          <div className="page-section">
            <div className="about-story-container">
              <ParallaxLayer speed={0.1}>
                <div className="about-story-content">
                  <div className="about-story-badge">
                    <Icon name="zap" />
                    <span>Our Story</span>
                  </div>
                  {aboutFounderStory.map((paragraph, i) => (
                    <p
                      key={i}
                      className="about-story-text"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </ParallaxLayer>
              <ParallaxLayer speed={0.15}>
                <div className="about-story-visual">
                  <div className="about-story-icon-container">
                    <div className="about-story-icon-glow" />
                    <div className="about-story-icon">
                      <span>∞</span>
                    </div>
                  </div>
                </div>
              </ParallaxLayer>
            </div>
          </div>

          {/* Stats Row */}
          <div className="page-section">
            <div className="about-stats-row">
              {stats.map((stat, i) => (
                <ParallaxLayer key={i} speed={0.08 + i * 0.02}>
                  <div className="about-stat-card">
                    <span className="about-stat-value">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="about-stat-label">{stat.label}</span>
                  </div>
                </ParallaxLayer>
              ))}
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="page-section">
            <ParallaxLayer speed={-0.2}>
              <div className="section-header">
                <span className="section-tag">Our Journey</span>
                <h2 className="section-title">
                  <SplitText text="How We" />
                  <br />
                  <SplitText text="Evolved" className="accent" />
                </h2>
              </div>
            </ParallaxLayer>

            <div className="about-journey-timeline">
              {journeyMilestones.map((milestone, i) => (
                <div key={i} className="about-journey-item">
                  <div className="about-journey-marker">
                    <div className="about-journey-year">{milestone.year}</div>
                    <div className="about-journey-line" />
                  </div>
                  <TiltCard className="about-journey-card h-[35vh]">
                    <div className="about-journey-icon">
                      <Icon
                        name={
                          milestone.icon as
                            | "rocket"
                            | "trending-up"
                            | "zap"
                            | "globe"
                        }
                      />
                    </div>
                    <h3 className="about-journey-title">{milestone.title}</h3>
                    <p className="about-journey-desc">
                      {milestone.description}
                    </p>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>

          {/* What We Do - Services Expanded */}
          <div className="page-section">
            <ParallaxLayer speed={-0.2}>
              <div className="section-header">
                <span className="section-tag">Expertise</span>
                <h2 className="section-title">
                  <SplitText text="What We" />
                  <br />
                  <SplitText text="Excel At" className="accent" />
                </h2>
              </div>
            </ParallaxLayer>

            <div className="about-expertise-grid">
              {aboutServicesExpanded.map((service, i) => (
                <ParallaxLayer key={i} speed={0.1 + i * 0.02}>
                  <div className="about-expertise-item">
                    <div className="about-expertise-number">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="about-expertise-text">{service}</span>
                    <div className="about-expertise-line" />
                  </div>
                </ParallaxLayer>
              ))}
            </div>
          </div>

          {/* What Drives Us */}
          <div className="page-section">
            <ParallaxLayer speed={-0.2}>
              <div className="section-header">
                <span className="section-tag">Philosophy</span>
                <h2 className="section-title">
                  <SplitText text="What" />
                  <br />
                  <SplitText text="Drives Us" className="accent" />
                </h2>
              </div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.1}>
              <div className="about-motto-container">
                <div className="about-motto-quote">"</div>
                <p className="about-motto-text">{aboutMotto}</p>
                <div className="about-motto-quote end">"</div>
              </div>
            </ParallaxLayer>

            <div className="about-principles-container z-50">
              <p className="about-principles-label">Our teams operate with:</p>
              <div className="about-principles-list">
                {aboutOperatingPrinciples.map((principle, i) => (
                  <div key={i} className="about-principle-card h-full">
                    <div className="about-principle-indicator">
                      <Icon name="check" />
                    </div>
                    <span>{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Clients Work With Us */}
          <div className="page-section">
            <ParallaxLayer speed={-0.2}>
              <div className="section-header">
                <span className="section-tag">Why Us</span>
                <h2 className="section-title">
                  <SplitText text="Why Clients" />
                  <br />
                  <SplitText text="Choose Us" className="accent" />
                </h2>
                <p className="about-clients-subtitle">
                  Not because of geography. Not because of cost.
                  <br />
                  <span className="accent-text">
                    Because we deliver technology that performs.
                  </span>
                </p>
              </div>
            </ParallaxLayer>

            <div className="about-reasons-grid">
              {aboutClientReasons.map((reason, i) => (
                <TiltCard className="about-reason-item">
                  <div className="about-reason-number">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="about-reason-text">{reason.text}</p>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Vision & Commitment */}
          <div className="page-section">
            <div className="about-vc-grid">
              <ParallaxLayer speed={0.1}>
                <TiltCard className="about-vc-card vision">
                  <div className="about-vc-header">
                    <div className="about-vc-icon">
                      <Icon name="telescope" />
                    </div>
                    <h3 className="about-vc-title">Our Vision</h3>
                  </div>
                  <p className="about-vc-text">{aboutVision}</p>
                  <div className="about-vc-accent-line" />
                </TiltCard>
              </ParallaxLayer>

              <ParallaxLayer speed={0.12}>
                <TiltCard className="about-vc-card commitment">
                  <div className="about-vc-header">
                    <div className="about-vc-icon">
                      <Icon name="shield" />
                    </div>
                    <h3 className="about-vc-title">Our Commitment</h3>
                  </div>
                  <p className="about-vc-text">{aboutCommitment}</p>
                  <div className="about-vc-accent-line" />
                </TiltCard>
              </ParallaxLayer>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="page-section">
            <ParallaxLayer speed={0.1}>
              <div className="about-closing-container">
                <div className="about-closing-glow" />
                <p className="about-closing-statement">
                  {aboutClosingStatement.split("advantage").map((part, i) =>
                    i === 0 ? (
                      <span key={i}>
                        {part}
                        <span className="gradient-text">advantage</span>
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    ),
                  )}
                </p>
              </div>
            </ParallaxLayer>
          </div>

          {/* CTA */}
          <div className="page-section page-cta-section">
            <ParallaxLayer speed={0.1}>
              <div className="page-cta-content">
                <h2 className="page-cta-title">Ready to work with us?</h2>
                <p className="page-cta-desc">
                  Let's discuss how we can help transform your business.
                </p>
                <MagneticButton href="/contact" className="btn-primary large">
                  Get in Touch
                </MagneticButton>
              </div>
            </ParallaxLayer>
          </div>
        </div>
      </PageLayout>
    </>
  );
};
