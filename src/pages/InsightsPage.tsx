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
    title: "News Letter | Infiniti Tech Partners",
    description:
      "The Infiniti Tech Partners newsletter — engineering-led writing on software, cloud, security and AI for growth-stage US and UK leaders. New editions added regularly.",
    canonical: "/insights",
    keywords:
      "Infiniti Tech Partners newsletter, engineering newsletter, technology consulting newsletter, software cloud security AI newsletter, CTO newsletter",
  });

  return (
    <PageLayout
      tag="News Letter"
      title="The Infiniti Tech"
      titleAccent="News Letter"
      description="Engineering-led writing on software, cloud, security and AI for growth-stage US and UK leaders. New editions added regularly — read the latest below."
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
