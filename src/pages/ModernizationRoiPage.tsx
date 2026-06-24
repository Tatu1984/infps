import { useMemo, useState, FormEvent } from "react";
import { PageLayout } from "@/components/common/PageLayout";
import { ParallaxLayer, TiltCard, MagneticButton, Icon } from "@/components/ui";
import { usePageMeta, useBreadcrumb, useJsonLd } from "@/hooks";

// Same Web3Forms inbox as the contact form; tagged with lead_source so you can
// tell calculator leads apart. The calculator itself is NOT gated — it's a
// linkable/shareable asset; the email step is optional and only sends a report.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
const BOOKING_URL =
  (import.meta.env.VITE_CALENDLY_URL as string | undefined) ||
  "https://calendly.com/sudipto-mitra-infinititechpartners/30min";

type Status = "idle" | "submitting" | "success" | "error";

type Inputs = {
  engineers: number;
  loadedCost: number;
  maintenancePct: number;
  reductionPct: number;
  cloudSpend: number;
  cloudSavingsPct: number;
  investment: number;
};

const DEFAULTS: Inputs = {
  engineers: 8,
  loadedCost: 180000,
  maintenancePct: 40,
  reductionPct: 50,
  cloudSpend: 240000,
  cloudSavingsPct: 25,
  investment: 250000,
};

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

const FIELDS: {
  key: keyof Inputs;
  label: string;
  hint: string;
  min: number;
  max: number;
  step: number;
  kind: "money" | "percent" | "count";
}[] = [
  { key: "engineers", label: "Engineers on the legacy system", hint: "People maintaining or building around it", min: 1, max: 60, step: 1, kind: "count" },
  { key: "loadedCost", label: "Fully-loaded cost per engineer / yr", hint: "Salary + tax + benefits + overhead", min: 60000, max: 350000, step: 5000, kind: "money" },
  { key: "maintenancePct", label: "Time lost to maintenance & firefighting", hint: "Share of the team's time the legacy system eats", min: 0, max: 100, step: 5, kind: "percent" },
  { key: "reductionPct", label: "Expected reduction after modernizing", hint: "How much of that drag modernization removes", min: 0, max: 100, step: 5, kind: "percent" },
  { key: "cloudSpend", label: "Current annual cloud / infra spend", hint: "What the legacy stack costs to run", min: 0, max: 5000000, step: 10000, kind: "money" },
  { key: "cloudSavingsPct", label: "Expected infra savings", hint: "Right-sizing, autoscaling, fewer idle resources", min: 0, max: 80, step: 5, kind: "percent" },
  { key: "investment", label: "Estimated modernization investment", hint: "One-time cost of the project", min: 0, max: 3000000, step: 25000, kind: "money" },
];

const fmtField = (kind: string, v: number) =>
  kind === "money" ? usd(v) : kind === "percent" ? `${v}%` : `${v}`;

export const ModernizationRoiPage = () => {
  usePageMeta({
    title: "Application Modernization ROI Calculator (2026) | Infiniti Tech Partners",
    description:
      "Free application modernization ROI calculator. Estimate annual savings, payback period and 3-year ROI of modernizing a legacy system — in seconds, no signup.",
    canonical: "/resources/application-modernization-roi-calculator",
    keywords:
      "application modernization ROI, modernization ROI calculator, legacy modernization cost, technical debt cost calculator, software modernization payback period",
  });

  useBreadcrumb([
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources/application-modernization-roi-calculator" },
    { name: "Modernization ROI Calculator", href: "/resources/application-modernization-roi-calculator" },
  ]);

  // WebApplication schema — calculators earn rich results and are linkable assets.
  useJsonLd("roi-calculator-jsonld", {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Application Modernization ROI Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": "https://www.infinititechpartners.com/#organization" },
    url: "https://www.infinititechpartners.com/resources/application-modernization-roi-calculator",
  });

  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (key: keyof Inputs, value: number) =>
    setInputs((prev) => ({ ...prev, [key]: Number.isFinite(value) ? value : 0 }));

  const r = useMemo(() => {
    const maintenanceCostNow = inputs.engineers * inputs.loadedCost * (inputs.maintenancePct / 100);
    const annualLaborSavings = maintenanceCostNow * (inputs.reductionPct / 100);
    const annualCloudSavings = inputs.cloudSpend * (inputs.cloudSavingsPct / 100);
    const annualSavings = annualLaborSavings + annualCloudSavings;
    const paybackMonths = annualSavings > 0 ? inputs.investment / (annualSavings / 12) : Infinity;
    const threeYearSavings = annualSavings * 3;
    const threeYearNet = threeYearSavings - inputs.investment;
    const roiPct = inputs.investment > 0 ? (threeYearNet / inputs.investment) * 100 : 0;
    return {
      maintenanceCostNow,
      annualLaborSavings,
      annualCloudSavings,
      annualSavings,
      paybackMonths,
      threeYearSavings,
      threeYearNet,
      roiPct,
    };
  }, [inputs]);

  const paybackLabel =
    r.paybackMonths === Infinity
      ? "—"
      : r.paybackMonths < 1
        ? "< 1 mo"
        : `${r.paybackMonths.toFixed(1)} mo`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setErrorMsg("Form isn't configured yet. Set VITE_WEB3FORMS_KEY in your environment.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", "New lead: Modernization ROI Calculator");
    data.append("from_name", "Infiniti Tech Partners Website");
    data.append("lead_source", "Lead magnet — Modernization ROI Calculator");
    // Attach the scenario so the lead arrives with full context.
    data.append(
      "roi_scenario",
      [
        `Engineers: ${inputs.engineers}`,
        `Loaded cost/eng: ${usd(inputs.loadedCost)}`,
        `Maintenance time: ${inputs.maintenancePct}%`,
        `Expected reduction: ${inputs.reductionPct}%`,
        `Cloud spend: ${usd(inputs.cloudSpend)}`,
        `Cloud savings: ${inputs.cloudSavingsPct}%`,
        `Investment: ${usd(inputs.investment)}`,
        `→ Annual savings: ${usd(r.annualSavings)}`,
        `→ Payback: ${paybackLabel}`,
        `→ 3-yr ROI: ${Math.round(r.roiPct)}%`,
      ].join(" | ")
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.(
          "event",
          "generate_lead",
          { event_category: "lead_magnet", event_label: "modernization_roi" }
        );
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <PageLayout
      tag="Free Tool"
      title="Application Modernization"
      titleAccent="ROI Calculator"
      description="Estimate the annual savings, payback period and 3-year ROI of modernizing a legacy system. Move the sliders — the numbers update instantly. No signup."
    >
      <div className="section-container">
        <div className="page-section">
          <div className="roi-grid">
            {/* Inputs */}
            <ParallaxLayer speed={0.1}>
              <TiltCard className="roi-card">
                <h2 className="contact-form-title">Your scenario</h2>
                <div className="roi-fields">
                  {FIELDS.map((f) => (
                    <div key={f.key} className="roi-field">
                      <div className="roi-field-head">
                        <label htmlFor={f.key}>{f.label}</label>
                        <span className="roi-field-value">{fmtField(f.kind, inputs[f.key])}</span>
                      </div>
                      <input
                        id={f.key}
                        type="range"
                        min={f.min}
                        max={f.max}
                        step={f.step}
                        value={inputs[f.key]}
                        onChange={(e) => set(f.key, e.currentTarget.valueAsNumber)}
                        className="roi-slider"
                      />
                      <span className="roi-field-hint">{f.hint}</span>
                    </div>
                  ))}
                </div>
                <button type="button" className="btn-secondary roi-reset" onClick={() => setInputs(DEFAULTS)}>
                  Reset to defaults
                </button>
              </TiltCard>
            </ParallaxLayer>

            {/* Results */}
            <ParallaxLayer speed={0.15}>
              <div className="roi-results">
                <div className="roi-headline">
                  <span className="roi-headline-label">Estimated annual savings</span>
                  <span className="roi-headline-value">{usd(r.annualSavings)}</span>
                </div>
                <div className="roi-stats">
                  <div className="roi-stat">
                    <span className="roi-stat-value">{paybackLabel}</span>
                    <span className="roi-stat-label">Payback period</span>
                  </div>
                  <div className="roi-stat">
                    <span className="roi-stat-value">{Math.round(r.roiPct)}%</span>
                    <span className="roi-stat-label">3-year ROI</span>
                  </div>
                  <div className="roi-stat">
                    <span className="roi-stat-value">{usd(r.threeYearNet)}</span>
                    <span className="roi-stat-label">3-year net gain</span>
                  </div>
                </div>
                <ul className="roi-breakdown">
                  <li><span>Maintenance drag today</span><span>{usd(r.maintenanceCostNow)}/yr</span></li>
                  <li><span>Engineering time reclaimed</span><span>{usd(r.annualLaborSavings)}/yr</span></li>
                  <li><span>Infrastructure savings</span><span>{usd(r.annualCloudSavings)}/yr</span></li>
                  <li><span>3-year cumulative savings</span><span>{usd(r.threeYearSavings)}</span></li>
                </ul>
                <p className="roi-disclaimer">
                  Directional estimate based on your inputs — not a quote. The biggest
                  variable is how much maintenance drag the modernization actually removes;
                  we pressure-test that with you before any number goes in a business case.
                </p>
              </div>
            </ParallaxLayer>
          </div>
        </div>

        {/* Optional lead capture — emails the breakdown, never blocks the tool */}
        <div className="page-section">
          <div className="roi-grid">
            <ParallaxLayer speed={0.1}>
              <div className="resource-intro">
                <h2 className="insight-section-heading">What actually drives modernization ROI</h2>
                <ul className="insight-section-list">
                  <li>Reclaimed engineering time is usually the biggest lever — far bigger than infra savings. Most legacy drag is people, not servers.</li>
                  <li>Modernization rarely needs a big-bang rewrite. The lower-risk path is incremental — see our guide to the <a className="insight-inline-link" href="/insights/monolith-to-microservices-migration">strangler-pattern migration</a>.</li>
                  <li>Infra savings compound when you right-size as you go — the levers in our <a className="insight-inline-link" href="/insights/aws-cost-optimization-saas">AWS cost optimization</a> playbook.</li>
                  <li>Payback under ~18 months usually clears a CFO's bar; this tool shows where your scenario lands.</li>
                </ul>
              </div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.15}>
              <TiltCard className="contact-form-card">
                {status === "success" ? (
                  <div className="contact-form-success" role="status">
                    <span className="contact-icon"><Icon name="check" /></span>
                    <h4>On its way.</h4>
                    <p>We've got your scenario and will send a detailed breakdown — usually within one business day.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="contact-form-title">Email me the full breakdown</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Work email</label>
                        <input type="email" id="email" name="email" placeholder="you@company.com" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" name="company" placeholder="Company name" />
                      </div>
                      {status === "error" && <p className="contact-form-error" role="alert">{errorMsg}</p>}
                      <button type="submit" className="btn-primary submit-btn" disabled={status === "submitting"}>
                        {status === "submitting" ? "Sending..." : "Send me the breakdown"}
                        <svg viewBox="0 0 24 24" className="btn-arrow">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                      </button>
                      <p className="resource-privacy">
                        We'll send your scenario plus a short, engineer-written breakdown. No spam; unsubscribe anytime.
                      </p>
                    </form>
                  </>
                )}
              </TiltCard>
            </ParallaxLayer>
          </div>
        </div>

        <div className="page-cta-section">
          <ParallaxLayer speed={0.1}>
            <h2>Want a real number for your system?</h2>
            <p>We'll assess your legacy stack and put a defensible business case behind it. Talk to a senior engineer.</p>
            <MagneticButton href={BOOKING_URL} className="btn-primary">
              Book a 30-min call
            </MagneticButton>
          </ParallaxLayer>
        </div>
      </div>
    </PageLayout>
  );
};
