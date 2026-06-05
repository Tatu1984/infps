import { PageLayout } from "@/components/common/PageLayout";
import { usePageMeta } from "@/hooks";

const lastUpdated = "May 9, 2026";

export const TermsAndConditionsPage = () => {
  usePageMeta({
    title: "Terms & Conditions | Infiniti Tech Partners",
    description: `The agreement governing your use of Infiniti Tech Partners' website and services. Last updated ${lastUpdated}.`,
    canonical: "/terms",
  });
  return (
    <PageLayout
      tag="Legal"
      title="Terms &"
      titleAccent="Conditions"
      description={`Last updated: ${lastUpdated}. The agreement governing your use of Infinititech Partners' website and services.`}
    >
      <div className="section-container">
        <article className="legal-page">
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Infinititech Partners website ("Site") or engaging us for
              any service or product, you ("Client" or "you") agree to be bound by these Terms
              and Conditions ("Terms"). If you do not agree, you must not use the Site or our
              services.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Services</h2>
            <p>
              Infinititech Partners provides software development, consulting, and related
              technology services. The specific scope, deliverables, timeline, and pricing of any
              engagement will be set out in a separate Statement of Work, proposal, or invoice
              ("Service Order"), which together with these Terms forms the full agreement between
              the parties.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Payment</h2>
            <ul>
              <li>
                Payment may be made via PayPal or, where available, by manual bank transfer /
                invoice ("Pay Now"). The availability of certain methods may depend on your
                location.
              </li>
              <li>
                Unless otherwise stated in a Service Order, fees are quoted in USD and are due
                upon receipt of invoice.
              </li>
              <li>
                Late payments may incur interest at the lower of 1.5% per month or the maximum
                rate permitted by applicable law.
              </li>
              <li>
                You are responsible for any taxes, duties, or transaction fees imposed by your
                jurisdiction, except for taxes based on our net income.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Intellectual Property</h2>
            <p>
              All content on the Site - including text, graphics, logos, code, and designs - is
              the property of Infinititech Partners or its licensors and is protected by
              applicable copyright and trademark laws. You may not copy, reproduce, or
              redistribute Site content without our prior written consent.
            </p>
            <p>
              For client engagements, intellectual property ownership of deliverables will be
              defined in the relevant Service Order. Unless otherwise specified, Infinititech
              Partners retains ownership of pre-existing tools, libraries, and methodologies used
              to create deliverables.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Confidentiality</h2>
            <p>
              Each party agrees to protect the other party's confidential information with the
              same degree of care it uses for its own confidential information, and not to
              disclose it to third parties except as necessary to perform its obligations or as
              required by law.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. User Conduct</h2>
            <p>While using the Site, you agree not to:</p>
            <ul>
              <li>Violate any applicable law or regulation.</li>
              <li>
                Attempt to gain unauthorized access to any part of the Site or related systems.
              </li>
              <li>Introduce viruses, malware, or any other harmful code.</li>
              <li>
                Use the Site to harass, defame, or harm any individual or organization.
              </li>
              <li>Scrape, reverse-engineer, or systematically extract content from the Site.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Disclaimer of Warranties</h2>
            <p>
              The Site and its content are provided "AS IS" and "AS AVAILABLE" without warranties
              of any kind, express or implied. We do not warrant that the Site will be
              uninterrupted, error-free, or free of harmful components. Service-specific
              warranties, where any apply, will be set out in the relevant Service Order.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Infinititech Partners' total liability for
              any claim arising out of or relating to these Terms, the Site, or any service shall
              not exceed the amount you paid us in the twelve months preceding the event giving
              rise to the claim. We will not be liable for any indirect, incidental, special,
              consequential, or punitive damages.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Infinititech Partners and its officers,
              employees, and agents from any claims, damages, or expenses (including reasonable
              attorneys' fees) arising from your breach of these Terms, your misuse of the Site,
              or your violation of any third-party rights.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Termination</h2>
            <p>
              We may suspend or terminate your access to the Site or services at any time, with
              or without notice, if we reasonably believe you have breached these Terms. Sections
              that by their nature should survive termination (including IP, confidentiality, and
              limitation of liability) will continue in force.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of [Jurisdiction], without regard to its
              conflict-of-law principles. Any disputes shall be resolved in the courts located in
              [Jurisdiction], and you consent to their exclusive jurisdiction.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The "Last updated" date at the top of
              this page indicates the most recent revision. Continued use of the Site or services
              after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Contact</h2>
            <p>Questions about these Terms can be sent to:</p>
            <p className="legal-contact">
              <strong>Infinititech Partners</strong>
              <br />
              Email:{" "}
              <a href="mailto:saddygrouppie@gmail.com">saddygrouppie@gmail.com</a>
              <br />
              Address: [Company Address]
            </p>
          </section>
        </article>
      </div>
    </PageLayout>
  );
};
