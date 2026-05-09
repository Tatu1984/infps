import { useMemo, useState } from "react";
import {
  PayPalButtons,
  PayPalScriptProvider,
  type ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";
import { PageLayout } from "@/components/common/PageLayout";
import { TiltCard, ParallaxLayer, Icon } from "@/components/ui";
import { useUserCountry } from "@/hooks";
import { CONSULTATION_FEE, contactInfo, products } from "@/data/data";

const DEFAULT_CURRENCY = "USD";
const CUSTOM_VALUE = "__custom__";

const BANK_DETAILS = {
  beneficiary: "Infinititech Partners",
  bankName: "[Bank Name]",
  accountNumber: "[Account Number]",
  routingNumber: "[Routing / Sort Code]",
  swift: "[SWIFT / BIC]",
};

interface ConsultationDetails {
  type: "product" | "custom";
  productSlug?: string;
  productName?: string;
  brief: string;
  payerName: string;
  payerEmail: string;
  amount: string;
}

export const PaymentPage = () => {
  const [productSlug, setProductSlug] = useState<string>(products[0]?.slug ?? CUSTOM_VALUE);
  const [brief, setBrief] = useState("");
  const [payerName, setPayerName] = useState("");
  const [payerEmail, setPayerEmail] = useState("");
  const [amount, setAmount] = useState(CONSULTATION_FEE.toFixed(2));
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "submitting"; message: string }
    | { kind: "success"; message: string }
    | { kind: "warning"; message: string }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  const { country, status: geoStatus, isPayNowAllowed } = useUserCountry();

  const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID as string | undefined;

  const paypalOptions = useMemo<ReactPayPalScriptOptions>(
    () => ({
      clientId: paypalClientId || "test",
      currency: DEFAULT_CURRENCY,
      intent: "capture",
      components: "buttons",
    }),
    [paypalClientId]
  );

  const isCustom = productSlug === CUSTOM_VALUE;
  const selectedProduct = isCustom ? null : products.find((p) => p.slug === productSlug) ?? null;

  const validAmount = /^\d+(\.\d{1,2})?$/.test(amount) && Number(amount) > 0;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payerEmail);
  const validName = payerName.trim().length >= 2;
  const validBrief = isCustom ? brief.trim().length >= 10 : true;

  const formValid = validAmount && validEmail && validName && validBrief;

  const consultationLabel = isCustom
    ? "Custom consultation"
    : `Consultation: ${selectedProduct?.name ?? ""}`;

  const buildDetails = (): ConsultationDetails => ({
    type: isCustom ? "custom" : "product",
    productSlug: isCustom ? undefined : selectedProduct?.slug,
    productName: isCustom ? undefined : selectedProduct?.name,
    brief: brief.trim(),
    payerName: payerName.trim(),
    payerEmail: payerEmail.trim(),
    amount,
  });

  const sendInvoice = async (orderID: string, paypalDetails: unknown) => {
    setStatus({ kind: "submitting", message: "Payment received. Sending invoice..." });
    try {
      const res = await fetch("/api/send-invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderID,
          currency: DEFAULT_CURRENCY,
          paypalDetails,
          consultation: buildDetails(),
        }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Server returned ${res.status}`);
      }
      const json = (await res.json()) as { invoiceNumber?: string };
      setStatus({
        kind: "success",
        message: `Payment received and invoice ${json.invoiceNumber ?? ""} emailed to ${payerEmail}.`.trim(),
      });
    } catch (err) {
      setStatus({
        kind: "warning",
        message: `Payment captured (PayPal txn ${orderID}), but the invoice email failed to send. We'll follow up manually at ${payerEmail}.`,
      });
    }
  };

  return (
    <PageLayout
      tag="Payment"
      title="Book a"
      titleAccent="Consultation"
      description={`Pay the consultation fee (${DEFAULT_CURRENCY} ${CONSULTATION_FEE}) and we'll email you a branded invoice and follow up to schedule.`}
    >
      <div className="section-container">
        <div className="payment-grid">
          <ParallaxLayer speed={0.1}>
            <TiltCard className="payment-card">
              <h2 className="payment-card-title">Consultation details</h2>
              <p className="payment-card-desc">
                Tell us what you'd like to discuss. Pick a product to scope the consultation
                around an existing offering, or choose <em>Custom</em> and describe your needs.
              </p>

              <div className="form-group">
                <label htmlFor="consultation-type">What is this consultation about?</label>
                <select
                  id="consultation-type"
                  value={productSlug}
                  onChange={(e) => setProductSlug(e.target.value)}
                >
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name} — {p.tagline}
                    </option>
                  ))}
                  <option value={CUSTOM_VALUE}>Custom consultation</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="brief">
                  Brief {isCustom ? "(required, min 10 chars)" : "(optional)"}
                </label>
                <textarea
                  id="brief"
                  rows={4}
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder={
                    isCustom
                      ? "Describe what you'd like to build, current stack, timeline, budget, anything else useful."
                      : `Anything specific you'd like to cover about ${selectedProduct?.name ?? "this product"}? (optional)`
                  }
                />
                {isCustom && !validBrief && (
                  <span className="payment-hint payment-hint-error">
                    Please add at least 10 characters describing your requirement.
                  </span>
                )}
              </div>

              <div className="payment-form-row">
                <div className="form-group">
                  <label htmlFor="payer-name">Your name</label>
                  <input
                    id="payer-name"
                    type="text"
                    value={payerName}
                    onChange={(e) => setPayerName(e.target.value)}
                    placeholder="Jane Doe"
                  />
                  {!validName && payerName && (
                    <span className="payment-hint payment-hint-error">
                      Enter at least 2 characters.
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="payer-email">Your email (for invoice)</label>
                  <input
                    id="payer-email"
                    type="email"
                    value={payerEmail}
                    onChange={(e) => setPayerEmail(e.target.value)}
                    placeholder="you@company.com"
                  />
                  {payerEmail && !validEmail && (
                    <span className="payment-hint payment-hint-error">
                      Enter a valid email.
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="amount">Amount ({DEFAULT_CURRENCY})</label>
                <input
                  id="amount"
                  type="text"
                  inputMode="decimal"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder={CONSULTATION_FEE.toFixed(2)}
                />
                {!validAmount && (
                  <span className="payment-hint payment-hint-error">
                    Enter a positive amount with up to 2 decimals.
                  </span>
                )}
              </div>

              <div className="payment-methods">
                <h3 className="payment-method-title">Pay with PayPal</h3>
                {!paypalClientId && (
                  <p className="payment-hint">
                    PayPal is running in sandbox/test mode. Set
                    <code> VITE_PAYPAL_CLIENT_ID </code>
                    in your <code>.env</code> to enable live payments.
                  </p>
                )}
                {!formValid && (
                  <p className="payment-hint">
                    Fill in name, email, amount{isCustom ? " and brief" : ""} to enable PayPal.
                  </p>
                )}
                <div className={formValid ? "" : "paypal-disabled"}>
                  <PayPalScriptProvider options={paypalOptions}>
                    <PayPalButtons
                      style={{ layout: "vertical", color: "blue", shape: "rect" }}
                      disabled={!formValid || status.kind === "submitting"}
                      forceReRender={[amount, productSlug, isCustom, payerEmail, payerName]}
                      createOrder={(_data, actions) =>
                        actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [
                            {
                              amount: { value: amount, currency_code: DEFAULT_CURRENCY },
                              description: consultationLabel.slice(0, 127),
                              custom_id: isCustom ? "custom" : selectedProduct?.slug,
                            },
                          ],
                        })
                      }
                      onApprove={async (_data, actions) => {
                        const details = await actions.order?.capture();
                        const txId = details?.id || "unknown";
                        await sendInvoice(txId, details);
                      }}
                      onError={() =>
                        setStatus({
                          kind: "error",
                          message:
                            "PayPal could not complete the payment. Please try again or contact us.",
                        })
                      }
                      onCancel={() =>
                        setStatus({ kind: "idle" })
                      }
                    />
                  </PayPalScriptProvider>
                </div>

                {geoStatus === "ready" && isPayNowAllowed && (
                  <PayNowSection
                    amount={validAmount ? amount : CONSULTATION_FEE.toFixed(2)}
                    consultation={consultationLabel}
                    payerEmail={payerEmail}
                  />
                )}
                {geoStatus === "loading" && (
                  <p className="payment-hint">Detecting region for additional options...</p>
                )}
                {geoStatus === "error" && (
                  <p className="payment-hint">
                    Could not detect your region. If you are in the US or UK and would like to
                    pay by bank transfer, contact us at{" "}
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
                  </p>
                )}
              </div>

              {status.kind === "submitting" && (
                <div className="payment-status payment-status-info">
                  <Icon name="clock" /> {status.message}
                </div>
              )}
              {status.kind === "success" && (
                <div className="payment-status payment-status-success">
                  <Icon name="check" /> {status.message}
                </div>
              )}
              {status.kind === "warning" && (
                <div className="payment-status payment-status-warning">
                  <Icon name="alert-circle" /> {status.message}
                </div>
              )}
              {status.kind === "error" && (
                <div className="payment-status payment-status-error">
                  <Icon name="alert-circle" /> {status.message}
                </div>
              )}
            </TiltCard>
          </ParallaxLayer>

          <ParallaxLayer speed={0.15}>
            <TiltCard className="payment-side-card">
              <h3 className="payment-side-title">What you get</h3>
              <ul className="payment-bullets">
                <li>A 1-hour discovery / scoping call with our team.</li>
                <li>A written summary and a recommended next-step proposal.</li>
                <li>The fee is credited toward the engagement if we proceed together.</li>
              </ul>

              <h3 className="payment-side-title" style={{ marginTop: 28 }}>
                Payment FAQ
              </h3>
              <div className="payment-faq">
                <div>
                  <h4>Is my payment secure?</h4>
                  <p>
                    PayPal handles all card data on its own PCI-compliant infrastructure. We
                    never receive or store your full card number.
                  </p>
                </div>
                <div>
                  <h4>What does the invoice look like?</h4>
                  <p>
                    A branded PDF invoice from Infinititech Partners is emailed to the address
                    you enter, immediately after payment.
                  </p>
                </div>
                <div>
                  <h4>Refund policy</h4>
                  <p>
                    Refunds are governed by our <a href="/refund-policy">Refund Policy</a>.
                  </p>
                </div>
              </div>
              {country && geoStatus === "ready" && (
                <p className="payment-region-note">
                  Detected region: <strong>{country}</strong>
                </p>
              )}
            </TiltCard>
          </ParallaxLayer>
        </div>
      </div>
    </PageLayout>
  );
};

interface PayNowSectionProps {
  amount: string;
  consultation: string;
  payerEmail: string;
}

const PayNowSection = ({ amount, consultation, payerEmail }: PayNowSectionProps) => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (label: string, value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setCopied(label);
        window.setTimeout(() => setCopied(null), 1500);
      })
      .catch(() => {
        // clipboard may be unavailable; ignore
      });
  };

  return (
    <div className="paynow-block">
      <h3 className="payment-method-title">Pay Now (Bank Transfer)</h3>
      <p className="payment-hint">
        Available in the US and UK. Send {amount} USD via your bank using the details below,
        then email us the remittance advice and we'll confirm receipt and email your invoice
        within 1 business day.
      </p>
      <dl className="bank-details">
        {(
          [
            ["Beneficiary", BANK_DETAILS.beneficiary],
            ["Bank", BANK_DETAILS.bankName],
            ["Account Number", BANK_DETAILS.accountNumber],
            ["Routing / Sort Code", BANK_DETAILS.routingNumber],
            ["SWIFT / BIC", BANK_DETAILS.swift],
            ["Payment Reference", consultation],
          ] as const
        ).map(([label, value]) => (
          <div key={label} className="bank-detail-row">
            <dt>{label}</dt>
            <dd>
              <span>{value}</span>
              <button
                type="button"
                className="copy-btn"
                onClick={() => copy(label, value)}
                aria-label={`Copy ${label}`}
              >
                {copied === label ? "Copied" : "Copy"}
              </button>
            </dd>
          </div>
        ))}
      </dl>
      <p className="payment-hint">
        Once your transfer is initiated, email{" "}
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> from{" "}
        {payerEmail || "your email"} with the reference and amount so we can match it to your
        consultation and send the invoice.
      </p>
    </div>
  );
};
