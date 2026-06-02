import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { PageLayout } from "@/components/common/PageLayout";
import { MagneticButton, ParallaxLayer } from "@/components/ui";
import { usePageMeta, useBreadcrumb } from "@/hooks";
import { getInsight, insights } from "@/data/insights";

const SCHEMA_NODE_ID = "insight-jsonld";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const InsightDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const insight = slug ? getInsight(slug) : undefined;

  usePageMeta(
    insight
      ? {
          title: `${insight.title} | Infiniti Tech Partners`,
          description: insight.description,
          canonical: `/insights/${insight.slug}`,
          keywords: insight.keywords,
        }
      : {
          title: "Insight not found | Infiniti Tech Partners",
          description: "We couldn't find that article.",
          canonical: "/insights",
        }
  );

  useBreadcrumb(
    insight
      ? [
          { name: "Home", href: "/" },
          { name: "News Letter", href: "/insights" },
          { name: insight.title, href: `/insights/${insight.slug}` },
        ]
      : []
  );

  useEffect(() => {
    if (!insight) return;
    const url = `https://www.infinititechpartners.com/insights/${insight.slug}`;
    const articleBody = insight.sections
      .map((s) => (Array.isArray(s.body) ? s.body.join(" ") : s.body))
      .join("\n\n");

    const node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = SCHEMA_NODE_ID;
    node.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": insight.title,
      "description": insight.description,
      "datePublished": insight.publishedAt,
      "dateModified": insight.publishedAt,
      "author": { "@type": "Organization", "name": insight.author },
      "publisher": { "@id": "https://www.infinititechpartners.com/#organization" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": url },
      "articleSection": insight.category,
      "wordCount": articleBody.split(/\s+/).length,
      "keywords": insight.keywords,
    });
    document.head.appendChild(node);
    return () => {
      document.getElementById(SCHEMA_NODE_ID)?.remove();
    };
  }, [insight]);

  if (!insight) {
    return <Navigate to="/insights" replace />;
  }

  const otherInsights = insights.filter((i) => i.slug !== insight.slug).slice(0, 2);

  return (
    <PageLayout
      tag={insight.category}
      title={insight.title.split(":")[0]}
      titleAccent={insight.title.split(":")[1]?.trim() || ""}
      description={insight.description}
    >
      <div className="section-container">
        <div className="page-section">
          <ParallaxLayer speed={0.1}>
            <div className="insight-detail-meta">
              <span>{formatDate(insight.publishedAt)}</span>
              <span aria-hidden="true">•</span>
              <span>{insight.readMinutes} min read</span>
              <span aria-hidden="true">•</span>
              <span>By {insight.author}</span>
            </div>

            <img
              src={insight.image}
              alt={insight.title}
              className="insight-detail-image"
              width={1200}
              height={630}
            />

            <article className="insight-article">
              {insight.sections.map((section, i) => (
                <section key={i} className="insight-section">
                  {section.heading && (
                    <h2 className="insight-section-heading">{section.heading}</h2>
                  )}
                  {Array.isArray(section.body) ? (
                    <ul className="insight-section-list">
                      {section.body.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="insight-section-paragraph">{section.body}</p>
                  )}
                </section>
              ))}
            </article>
          </ParallaxLayer>
        </div>

        {otherInsights.length > 0 && (
          <div className="page-section">
            <h2 className="section-title">More reading</h2>
            <div className="insights-list insights-list-compact">
              {otherInsights.map((other) => (
                <Link
                  key={other.slug}
                  to={`/insights/${other.slug}`}
                  className="insight-card-link insight-card-compact"
                >
                  <span className="insight-category">{other.category}</span>
                  <h3>{other.title}</h3>
                  <p>{other.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="page-cta-section">
          <ParallaxLayer speed={0.1}>
            <h2>Have a related problem you're working on?</h2>
            <p>Talk to a senior engineer — usually within one business day.</p>
            <MagneticButton href="/contact" className="btn-primary">
              Start a conversation
            </MagneticButton>
          </ParallaxLayer>
        </div>
      </div>
    </PageLayout>
  );
};
