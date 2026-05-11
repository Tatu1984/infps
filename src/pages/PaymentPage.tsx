import { useMemo, useState } from "react";
import {
  PayPalButtons,
  PayPalScriptProvider,
  type ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";
import { PageLayout } from "@/components/common/PageLayout";
import {
  TiltCard,
  ParallaxLayer,
  Icon,
  CalendlyEmbed,
  type CalendlyBooking,
} from "@/components/ui";
import { useUserCountry } from "@/hooks";
import {
  CONSULTATION_DURATION_LABEL,
  CONSULTATION_FEE,
  contactInfo,
  products,
} from "@/data/data";

const DEFAULT_CURRENCY = "USD";
const CUSTOM_VALUE = "__custom__";
const FIXED_AMOUNT = CONSULTATION_FEE.toFixed(2);

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
  amount: string;
}

export const PaymentPage = () => {
  const [productSlug, setProductSlug] = useState<string>(products[0]?.slug ?? CUSTOM_VALUE);
  const [brief, setBrief] = useState("");
  const [booking, setBooking] = useState<CalendlyBooking | null>(null);
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "submitting"; message: string }
    | { kind: "success"; message: string }
    | { kind: "warning"; message: string }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  const { country, ip, status: geoStatus, isPayNowAllowed } = useUserCountry();

  const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID as string | undefined;
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL as string | undefined;

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

  const briefValid = isCustom ? brief.trim().length >= 10 : true;
  const stepOneComplete = briefValid;
  const stepTwoComplete = booking !== null;

  const consultationLabel = isCustom
    ? "Custom consultation"
    : `Consultation: ${selectedProduct?.name ?? ""}`;

  const buildDetails = (): ConsultationDetails => ({
    type: isCustom ? "custom" : "product",
    productSlug: isCustom ? undefined : selectedProduct?.slug,
    productName: isCustom ? undefined : selectedProduct?.name,
    brief: brief.trim(),
    amount: FIXED_AMOUNT,
  });

  const sendInvoice = async (orderID: string, paypalDetails: PayPalCaptureLike) => {
    setStatus({ kind: "submitting", message: "Payment received. Sending invoice..." });
    const payerEmail = paypalDetails?.payer?.email_address ?? "";
    const givenName = paypalDetails?.payer?.name?.given_name ?? "";
    const surname = paypalDetails?.payer?.name?.surname ?? "";
    const payerName = `${givenName} ${surname}`.trim();
    try {
      const res = await fetch("/api/send-invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderID,
          currency: DEFAULT_CURRENCY,
          paypalDetails,
          calendly: booking,
          consultation: {
            ...buildDetails(),
            payerEmail,
            payerName,
          },
        }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Server returned ${res.status}`);
      }
      const json = (await res.json()) as { invoiceNumber?: string };
      setStatus({
        kind: "success",
        message: `Payment received and invoice ${json.invoiceNumber ?? ""} emailed to ${payerEmail || "you"}.`.trim(),
      });
    } catch {
      setStatus({
        kind: "warning",
        message: `Payment captured (PayPal txn ${orderID}), but the invoice email failed to send. We'll follow up manually${payerEmail ? ` at ${payerEmail}` : ""}.`,
      });
    }
  };

  return (
    <PageLayout
      tag="Payment"
      title="Book a"
      titleAccent="Consultation"
      description={`${CONSULTATION_DURATION_LABEL} consultation, USD ${CONSULTATION_FEE}. Pick a topic, schedule a slot, then pay to confirm.`}
    >
      <div className="section-container">
        <div className="payment-grid">
          <ParallaxLayer speed={0.1}>
            <TiltCard className="payment-card">
              <Step number={1} title="Tell us what you'd like to discuss" done={stepOneComplete}>
                <div className="form-group">
                  <label htmlFor="consultation-type">Topic</label>
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
                  {isCustom && !briefValid && (
                    <span className="payment-hint payment-hint-error">
                      Please add at least 10 characters describing your requirement.
                    </span>
                  )}
                </div>
              </Step>

              <Step
                number={2}
                title="Pick a slot"
                done={stepTwoComplete}
                disabled={!stepOneComplete}
              >
                {!stepOneComplete && (
                  <p className="payment-hint">
                    Complete step 1 to schedule.
                  </p>
                )}
                {stepOneComplete && !calendlyUrl && (
                  <p className="payment-hint payment-hint-error">
                    Calendly URL is not configured. Set <code>VITE_CALENDLY_URL</code> in
                    your environment (e.g. <code>https://calendly.com/your-handle/consultation</code>)
                    to enable scheduling.
                  </p>
                )}
                {stepOneComplete && calendlyUrl && !booking && (
                  <CalendlyEmbed
                    url={calendlyUrl}
                    height={680}
                    onBooked={(b) => setBooking(b)}
                  />
                )}
                {booking && (
                  <div className="payment-status payment-status-success">
                    <Icon name="check" /> Slot reserved. You'll get a Calendly confirmation
                    email shortly. Now complete payment to confirm the booking.
                    <button
                      type="button"
                      className="copy-btn"
                      style={{ marginLeft: "auto" }}
                      onClick={() => setBooking(null)}
                    >
                      Reschedule
                    </button>
                  </div>
                )}
              </Step>

              <Step
                number={3}
                title={`Pay USD ${CONSULTATION_FEE} to confirm`}
                done={status.kind === "success"}
                disabled={!stepTwoComplete}
              >
                {!stepTwoComplete && (
                  <p className="payment-hint">
                    Schedule a slot in step 2 to enable payment.
                  </p>
                )}

                {stepTwoComplete && (
                  <>
                    <div className="payment-amount-display">
                      <span className="payment-amount-label">Amount due</span>
                      <span className="payment-amount-value">
                        USD {CONSULTATION_FEE.toFixed(2)}
                      </span>
                      <span className="payment-amount-meta">
                        {CONSULTATION_DURATION_LABEL} • {consultationLabel}
                      </span>
                    </div>

                    {!paypalClientId && (
                      <p className="payment-hint">
                        PayPal is running in sandbox/test mode. Set
                        <code> VITE_PAYPAL_CLIENT_ID </code>
                        in your <code>.env</code> to enable live payments.
                      </p>
                    )}

                    <div className="payment-methods">
                      <h3 className="payment-method-title">Pay with PayPal</h3>
                      <PayPalScriptProvider options={paypalOptions}>
                        <PayPalButtons
                          style={{ layout: "vertical", color: "blue", shape: "rect" }}
                          disabled={status.kind === "submitting"}
                          forceReRender={[productSlug, isCustom, booking?.eventUri ?? ""]}
                          createOrder={(_data, actions) =>
                            actions.order.create({
                              intent: "CAPTURE",
                              purchase_units: [
                                {
                                  amount: {
                                    value: FIXED_AMOUNT,
                                    currency_code: DEFAULT_CURRENCY,
                                  },
                                  description: consultationLabel.slice(0, 127),
                                  custom_id: isCustom ? "custom" : selectedProduct?.slug,
                                },
                              ],
                            })
                          }
                          onApprove={async (_data, actions) => {
                            const details = (await actions.order?.capture()) as
                              | PayPalCaptureLike
                              | undefined;
                            const txId = details?.id || "unknown";
                            await sendInvoice(txId, details ?? {});
                          }}
                          onError={() =>
                            setStatus({
                              kind: "error",
                              message:
                                "PayPal could not complete the payment. Please try again or contact us.",
                            })
                          }
                          onCancel={() => setStatus({ kind: "idle" })}
                        />
                      </PayPalScriptProvider>

                      {geoStatus === "ready" && isPayNowAllowed && (
                        <PayNowSection
                          consultation={consultationLabel}
                          eventUri={booking?.eventUri ?? ""}
                        />
                      )}
                      {geoStatus === "loading" && (
                        <p className="payment-hint">
                          Detecting region for additional options...
                        </p>
                      )}
                      {geoStatus === "error" && (
                        <p className="payment-hint">
                          Could not detect your region. If you are in the US or UK and would
                          like to pay by bank transfer, contact us at{" "}
                          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
                        </p>
                      )}
                    </div>
                  </>
                )}
              </Step>

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
                <li>A {CONSULTATION_DURATION_LABEL} discovery / scoping call with our team.</li>
                <li>A written summary and a recommended next-step proposal.</li>
                <li>The fee is credited toward the engagement if we proceed together.</li>
              </ul>

              <h3 className="payment-side-title" style={{ marginTop: 28 }}>
                Payment FAQ
              </h3>
              <div className="payment-faq">
                <div>
                  <h4>Why book before paying?</h4>
                  <p>
                    Scheduling first makes sure we have a time that works for you. Payment
                    confirms the booking — if we can't honor the slot, we refund in full.
                  </p>
                </div>
                <div>
                  <h4>What does the invoice look like?</h4>
                  <p>
                    A branded PDF invoice from Infinititech Partners is emailed to the address
                    PayPal has on file, immediately after payment.
                  </p>
                </div>
                <div>
                  <h4>Refund policy</h4>
                  <p>
                    Refunds are governed by our <a href="/refund-policy">Refund Policy</a>.
                  </p>
                </div>
              </div>
              {geoStatus === "ready" && (country || ip) && (
                <p className="payment-region-note">
                  Detected region: <strong>{country ?? "—"}</strong>
                  {ip && (
                    <>
                      {" • "}IP: <code>{ip}</code>
                    </>
                  )}
                </p>
              )}
            </TiltCard>
          </ParallaxLayer>
        </div>
      </div>
    </PageLayout>
  );
};

interface PayPalCaptureLike {
  id?: string;
  payer?: {
    email_address?: string;
    name?: { given_name?: string; surname?: string };
  };
}

interface StepProps {
  number: number;
  title: string;
  done?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Step = ({ number, title, done, disabled, children }: StepProps) => (
  <section className={`payment-step${done ? " payment-step-done" : ""}${disabled ? " payment-step-disabled" : ""}`}>
    <header className="payment-step-header">
      <span className="payment-step-num">{done ? "✓" : number}</span>
      <h2 className="payment-step-title">{title}</h2>
    </header>
    <div className="payment-step-body">{children}</div>
  </section>
);

interface PayNowSectionProps {
  consultation: string;
  eventUri: string;
}

const PayNowSection = ({ consultation, eventUri }: PayNowSectionProps) => {
  const [copied, setCopied] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

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

  const reference = `${consultation}${eventUri ? ` • ${eventUri.split("/").pop()}` : ""}`;

  return (
    <div className="paynow-block">
      <button
        type="button"
        className={`paynow-toggle-btn${expanded ? " paynow-toggle-btn-open" : ""}`}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <span className="paynow-toggle-label">
          <Icon name="wallet" />
          Pay Now — Bank Transfer (US / UK)
        </span>
        <span className="paynow-toggle-chevron">{expanded ? "−" : "+"}</span>
      </button>

      {!expanded ? null : (
        <>
          <p className="payment-hint" style={{ marginTop: 12 }}>
            Send USD {CONSULTATION_FEE.toFixed(2)} via your bank using the details below, then
            email us the remittance advice and we'll confirm the booking and email your invoice
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
            ["Payment Reference", reference],
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
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> with the reference
            and amount so we can match it to your booking and send the invoice.
          </p>
        </>
      )}
    </div>
  );
};
