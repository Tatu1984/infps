import { AnimatedCounter } from "@/components/ui";
import { trustMetrics, industries } from "@/data/services-restructured";

export const TrustBarSection = () => (
  <section className="trust-bar">
    <div className="trust-bar-container">
      {/* Metrics */}
      <div className="trust-metrics">
        {trustMetrics.map((metric, index) => (
          <div key={index} className="trust-metric">
            <span className="trust-metric-value">
              <AnimatedCounter end={parseInt(metric.value) || 0} />
              {metric.value.includes("+") && "+"}
              {metric.value.includes("%") && "%"}
            </span>
            <span className="trust-metric-label">{metric.label}</span>
          </div>
        ))}
      </div>

      {/* Industries Served */}
      <div className="trust-industries">
        <span className="trust-industries-label">Serving:</span>
        <div className="trust-industries-list">
          {industries.map((industry, index) => (
            <span key={index} className="trust-industry-tag">
              {industry}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
