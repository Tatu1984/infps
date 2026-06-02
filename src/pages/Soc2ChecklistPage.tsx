import { useState, FormEvent } from "react";
import { PageLayout } from "@/components/common/PageLayout";
import { ParallaxLayer, TiltCard, MagneticButton, Icon } from "@/components/ui";
import { usePageMeta } from "@/hooks";

// Reuses the same Web3Forms inbox as the contact form; submissions are tagged
// with lead_source so you can tell magnet leads from contact-form leads.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
const BOOKING_URL =
  (import.meta.env.VITE_CALENDLY_URL as string | undefined) ||
  "https://calendly.com/sudipto-mitra-infinititechpartners/30min";

type Status = "idle" | "submitting" | "success" | "error";

// The actual deliverable. Kept here so the page is the single source of truth
// and can later be exported to a PDF without a second copy drifting.
const CHECKLIST: { heading: string; items: string[] }[] = [
  {
    heading: "1. Scope & Trust Service Criteria",
    items: [
      "Confirm which systems are in scope: production, build/CI, deploy, observability, and the data they touch.",
      "Classify your data (public / internal / confidential / customer PII) and document where each lives.",
      "Claim Security (Common Criteria) at minimum; add Confidentiality and Availability only if buyers demand them.",
      "Write a one-page system description — auditors need it and most teams underestimate it.",
    ],
  },
  {
    heading: "2. Access & Identity",
    items: [
      "Enforce SSO with MFA across every production and admin system — no shared logins.",
      "Implement role-based access; document who can reach production and why.",
      "Automate onboarding/offboarding so access is granted and revoked from one source of truth.",
      "Run access reviews on a defined cadence (quarterly minimum) with sign-off captured as evidence.",
    ],
  },
  {
    heading: "3. Change Management",
    items: [
      "Require pull-request review before merge to main; no direct pushes to production branches.",
      "Gate deploys behind CI checks (tests, lint, security scan).",
      "Keep an auditable trail linking each production change to a ticket and an approver.",
    ],
  },
  {
    heading: "4. Infrastructure & Data Protection",
    items: [
      "Manage secrets in a vault (not env files in the repo); rotate on a schedule.",
      "Encrypt data at rest and in transit; document the cipher suites and key management.",
      "Centralize logs with tamper-evident retention (typically 12 months).",
      "Run vulnerability scanning on dependencies and infrastructure; track remediation SLAs.",
      "Test backup restores — a backup you have never restored is not a control.",
    ],
  },
  {
    heading: "5. Vendor & Risk Management",
    items: [
      "Maintain a current sub-processor inventory with a DPA on file for each.",
      "Run an annual risk assessment and document the treatment decisions.",
      "Define an incident response plan and actually run a tabletop exercise against it.",
    ],
  },
  {
    heading: "6. Policies & Evidence",
    items: [
      "Write the policy set last — after the controls exist — so policies describe reality.",
      "Automate evidence collection (access reviews, scans, restore tests) into immutable storage.",
      "Run a dry-run audit against your own controls and remediate gaps before the auditor arrives.",
      "Optimize for Type I first (point-in-time) to clear procurement; earn Type II evidence over the following 3–12 months.",
    ],
  },
];

export const Soc2ChecklistPage = () => {
  usePageMeta({
    title: "Free SOC 2 Readiness Checklist (2026) | Infiniti Tech Partners",
    description:
      "A 30-point, engineering-led SOC 2 readiness checklist for growth-stage SaaS. Scope, access, change management, evidence — the controls auditors actually test.",
    canonical: "/resources/soc-2-readiness-checklist",
    keywords:
      "SOC 2 readiness checklist, SOC 2 checklist, SOC 2 controls list, SOC 2 for SaaS, SOC 2 Type I requirements, SOC 2 compliance checklist 2026",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [unlocked, setUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
    data.append("subject", "New lead: SOC 2 Readiness Checklist download");
    data.append("from_name", "Infiniti Tech Partners Website");
    data.append("lead_source", "Lead magnet — SOC 2 Readiness Checklist");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setUnlocked(true);
        (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.(
          "event",
          "generate_lead",
          { event_category: "lead_magnet", event_label: "soc2_checklist" }
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
      tag="Free Resource"
      title="SOC 2 Readiness"
      titleAccent="Checklist"
      description="The 30-point checklist our engineers use to take growth-stage SaaS companies from zero controls to a SOC 2 Type I attestation — without buying a compliance platform first."
    >
      <div className="section-container">
        <div className="page-section">
          {!unlocked ? (
            <div className="contact-grid">
              <ParallaxLayer speed={0.1}>
                <div className="resource-intro">
                  <h2 className="insight-section-heading">What's inside</h2>
                  <ul className="insight-section-list">
                    <li>Every control auditors actually test, grouped into 6 work areas.</li>
                    <li>The Type I vs Type II decision — and which one clears procurement fastest.</li>
                    <li>The mistakes that stall most teams (and how to avoid buying tooling too early).</li>
                    <li>A format you can print or save as a PDF and work through with your team.</li>
                  </ul>
                  <p className="insight-section-paragraph">
                    Built by engineers who run SOC 2 as a 90-day engagement. Drop your
                    email and the full checklist unlocks instantly on this page.
                  </p>
                </div>
              </ParallaxLayer>

              <ParallaxLayer speed={0.15}>
                <TiltCard className="contact-form-card">
                  <h3 className="contact-form-title">Get the checklist</h3>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                      type="checkbox"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      style={{ display: "none" }}
                      aria-hidden="true"
                    />
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
                    {status === "error" && (
                      <p className="contact-form-error" role="alert">{errorMsg}</p>
                    )}
                    <button
                      type="submit"
                      className="btn-primary submit-btn"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Unlocking..." : "Unlock the checklist"}
                      <svg viewBox="0 0 24 24" className="btn-arrow">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </button>
                    <p className="resource-privacy">
                      No spam. We'll email you the checklist and occasionally share
                      engineering playbooks. Unsubscribe anytime.
                    </p>
                  </form>
                </TiltCard>
              </ParallaxLayer>
            </div>
          ) : (
            <ParallaxLayer speed={0.1}>
              <div className="resource-unlocked">
                <div className="contact-form-success" role="status">
                  <span className="contact-icon"><Icon name="check" /></span>
                  <h4>Unlocked — here's your checklist.</h4>
                  <p>We've also noted your details. Use the button below to print or save it as a PDF.</p>
                </div>

                <button className="btn-secondary" onClick={() => window.print()}>
                  Print / Save as PDF
                </button>

                <article className="insight-article resource-checklist">
                  {CHECKLIST.map((group) => (
                    <section key={group.heading} className="insight-section">
                      <h2 className="insight-section-heading">{group.heading}</h2>
                      <ul className="insight-section-list">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </article>
              </div>
            </ParallaxLayer>
          )}
        </div>

        <div className="page-cta-section">
          <ParallaxLayer speed={0.1}>
            <h2>Want this done, not just documented?</h2>
            <p>We run SOC 2 Type I as a 90-day engineering engagement. Talk to a senior engineer.</p>
            <MagneticButton href={BOOKING_URL} className="btn-primary">
              Book a 30-min call
            </MagneticButton>
          </ParallaxLayer>
        </div>
      </div>
    </PageLayout>
  );
};
