import { PageLayout } from "@/components/common/PageLayout";
import { usePageMeta } from "@/hooks";

const lastUpdated = "May 9, 2026";

export const RefundPolicyPage = () => {
  usePageMeta({
    title: "Refund Policy | Infiniti Tech Partners",
    description: `How refunds are handled for Infiniti Tech Partners' services and products. Last updated ${lastUpdated}.`,
    canonical: "/refund-policy",
  });
  return (
    <PageLayout
      tag="Legal"
      title="Refund"
      titleAccent="Policy"
      description={`Last updated: ${lastUpdated}. How refunds are handled for Infinititech Partners' services and products.`}
    >
      <div className="section-container">
        <article className="legal-page">
          <section className="legal-section">
            <h2>1. Overview</h2>
            <p>
              We want every client to be satisfied with the work we deliver. This Refund Policy
              explains the circumstances under which Infinititech Partners offers refunds, and
              the process for requesting one.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Custom Services and Statements of Work</h2>
            <p>
              For custom development, consulting, or any service performed under a Statement of
              Work or proposal, payments are non-refundable once the corresponding work has been
              performed or the milestone delivered. If you wish to terminate an engagement before
              completion, you remain liable for fees corresponding to work performed up to the
              date of termination, and any non-cancellable third-party expenses already incurred
              on your behalf.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Digital Products and Subscriptions</h2>
            <p>
              For digital products or subscription services purchased directly through this
              website:
            </p>
            <ul>
              <li>
                You may request a refund within <strong>14 days</strong> of the original purchase
                if the product has not been substantially used or downloaded in full.
              </li>
              <li>
                Subscription renewals may be cancelled at any time and will not auto-renew for the
                next billing period; we generally do not pro-rate refunds for the current period.
              </li>
              <li>
                Refunds will not be issued for accounts found in violation of our Terms and
                Conditions.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. PayPal Transactions</h2>
            <p>
              Refunds for payments made via PayPal will normally be issued back to the original
              PayPal account. PayPal's own buyer-protection policies may also apply and run in
              parallel with this policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Bank Transfer / Invoice ("Pay Now")</h2>
            <p>
              Refunds for payments made by manual bank transfer will be returned to the original
              account from which payment was received. You are responsible for providing accurate
              bank details; we are not liable for losses caused by incorrect information.
              Bank-side processing fees, if any, may be deducted from the refunded amount.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. How to Request a Refund</h2>
            <p>
              To request a refund, send an email to{" "}
              <a href="mailto:saddygrouppie@gmail.com">saddygrouppie@gmail.com</a> with:
            </p>
            <ul>
              <li>The name on the order or engagement.</li>
              <li>The transaction ID, invoice number, or PayPal receipt.</li>
              <li>The reason for the refund request.</li>
            </ul>
            <p>
              We will acknowledge your request within 3 business days and aim to resolve eligible
              requests within 10 business days. Refunded amounts may take additional time to
              appear in your account depending on the payment provider and your bank.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Non-Refundable Items</h2>
            <ul>
              <li>Work already delivered or accepted by the client.</li>
              <li>Third-party fees (domain, hosting, licenses) paid on your behalf.</li>
              <li>Deposits explicitly marked as non-refundable in a Service Order.</li>
              <li>
                Discounted or promotional purchases, unless explicitly stated as refundable at
                the time of purchase.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Chargebacks</h2>
            <p>
              We encourage clients to contact us before initiating a chargeback so we can resolve
              any issue directly. Chargebacks raised without a prior good-faith attempt to
              resolve the issue may result in the suspension or termination of services, and we
              reserve the right to recover any associated fees.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Refund Policy from time to time. The "Last updated" date at the
              top of this page indicates the most recent change. Refund requests will be handled
              under the version of the policy in force at the time of the original purchase.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Contact</h2>
            <p>
              For any refund-related question, please reach out:
            </p>
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
