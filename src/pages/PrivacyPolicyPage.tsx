import { PageLayout } from "@/components/common/PageLayout";
import { usePageMeta } from "@/hooks";

const lastUpdated = "May 9, 2026";

export const PrivacyPolicyPage = () => {
  usePageMeta({
    title: "Privacy Policy | Infiniti Tech Partners",
    description: `How Infiniti Tech Partners collects, uses, and protects your personal data. Last updated ${lastUpdated}.`,
    canonical: "/privacy-policy",
  });
  return (
    <PageLayout
      tag="Legal"
      title="Privacy"
      titleAccent="Policy"
      description={`Last updated: ${lastUpdated}. How Infinititech Partners collects, uses, and protects your information.`}
    >
      <div className="section-container">
        <article className="legal-page">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Infinititech Partners ("we", "us", or "our") respects your privacy and is committed
              to protecting the personal data we collect from visitors to our website and clients
              who engage our services. This Privacy Policy explains what information we collect,
              how we use it, and the rights you have over that information.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <ul>
              <li>
                <strong>Contact information</strong> you provide via forms, including name, email
                address, phone number, and company name.
              </li>
              <li>
                <strong>Payment information</strong> processed through our third-party payment
                providers (PayPal). We do not store complete card numbers on our servers.
              </li>
              <li>
                <strong>Usage data</strong> such as IP address, approximate geographic location
                (country level), browser type, pages visited, and timestamps.
              </li>
              <li>
                <strong>Communications</strong> you send us, including emails, support tickets,
                and project documentation.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To deliver the services or products you have requested.</li>
              <li>To process payments and send invoices.</li>
              <li>To respond to inquiries and provide customer support.</li>
              <li>
                To determine your country for legal and operational purposes (e.g. showing
                region-specific payment options).
              </li>
              <li>To improve our website, services, and security.</li>
              <li>
                To comply with legal obligations and enforce our Terms and Conditions.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar technologies to remember your preferences,
              keep your session active, and understand how visitors use the site. You can disable
              cookies in your browser settings, but some parts of the site may not function
              correctly without them.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Third-Party Services</h2>
            <p>
              We share information with trusted third parties only to the extent necessary to
              operate our services. These include:
            </p>
            <ul>
              <li>
                <strong>PayPal</strong> for payment processing. PayPal's privacy practices are
                governed by their own privacy policy.
              </li>
              <li>
                <strong>IP geolocation services</strong> (e.g. ipapi.co) used to determine your
                country in order to show appropriate payment options.
              </li>
              <li>
                <strong>Hosting and analytics providers</strong> that store data on our behalf
                under contractual confidentiality.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfil the purposes
              for which it was collected, including legal, accounting, and reporting requirements.
              Project records are typically retained for the duration of the engagement plus seven
              years thereafter.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, delete,
              or restrict our use of your personal data, and to data portability. To exercise any
              of these rights, contact us at the email address below. We will respond within the
              timeframe required by applicable law.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. International Transfers</h2>
            <p>
              Infinititech Partners operates globally. Your information may be transferred to and
              processed in countries other than your own, including the United States and India.
              Where required, we put appropriate safeguards in place to protect your data during
              such transfers.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Security</h2>
            <p>
              We implement industry-standard administrative, technical, and physical safeguards
              designed to protect personal data against unauthorized access, loss, misuse, and
              alteration. No system is perfectly secure, however, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Children's Privacy</h2>
            <p>
              Our services are intended for businesses and individuals over the age of 18. We do
              not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The "Last updated" date at the
              top of this page indicates when the most recent changes were made. Material changes
              will be communicated via the website or by email where appropriate.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data,
              please reach out:
            </p>
            <p className="legal-contact">
              <strong>Infinititech Partners</strong>
              <br />
              Email:{" "}
              <a href="mailto:saddygrouppie@gmail.com">saddygrouppie@gmail.com</a>
              <br />
              Address: [Company Address]
              <br />
              Governing jurisdiction: [Jurisdiction]
            </p>
          </section>
        </article>
      </div>
    </PageLayout>
  );
};
