import { Link } from "react-router-dom";
import { PageLayout } from "@/components/common/PageLayout";
import { TiltCard, MagneticButton, ParallaxLayer } from "@/components/ui";
import { usePageMeta } from "@/hooks";
import { insights } from "@/data/insights";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const InsightsPage = () => {
  usePageMeta({
    title: "Insights | Infiniti Tech Partners",
    description:
      "Engineering-led perspectives on software, cloud, security and AI for growth-stage US and UK companies. Practical playbooks, not opinions.",
    canonical: "/insights",
    keywords:
      "engineering insights, technology consulting blog, software development best practices, cloud engineering playbooks, SOC 2 guide, fractional engineering team guide",
  });

  return (
    <PageLayout
      tag="Insights"
      title="Playbooks for"
      titleAccent="Growth-Stage Engineering"
      description="Practical writing on building production-grade software, cloud, security and AI systems. By engineers, for engineering leaders."
    >
      <div className="section-container">
        <div className="page-section">
          <div className="insights-list">
            {insights.map((insight) => (
              <TiltCard key={insight.slug} className="insight-card">
                <Link to={`/insights/${insight.slug}`} className="insight-card-link">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="insight-card-image"
                    loading="lazy"
                    width={1200}
                    height={630}
                  />
                  <div className="insight-card-meta">
                    <span className="insight-category">{insight.category}</span>
                    <span className="insight-read-time">{insight.readMinutes} min read</span>
                  </div>
                  <h2 className="insight-card-title">{insight.title}</h2>
                  <p className="insight-card-description">{insight.description}</p>
                  <div className="insight-card-footer">
                    <span className="insight-date">{formatDate(insight.publishedAt)}</span>
                    <span className="insight-cta">Read →</span>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>

        <div className="page-cta-section">
          <ParallaxLayer speed={0.1}>
            <h2>Working on something we should write about?</h2>
            <p>If your team is wrestling with a problem we have seen before, we usually have notes.</p>
            <MagneticButton href="/contact" className="btn-primary">
              Start a conversation
            </MagneticButton>
          </ParallaxLayer>
        </div>
      </div>
    </PageLayout>
  );
};
