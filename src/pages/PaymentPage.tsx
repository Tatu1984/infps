import { useMemo, useState } from "react";
import {
  PayPalButtons,
  PayPalScriptProvider,
  type ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";
import { PageLayout } from "@/components/common/PageLayout";
import { TiltCard, ParallaxLayer, Icon } from "@/components/ui";
import { useUserCountry } from "@/hooks";
import { contactInfo } from "@/data/data";

const DEFAULT_AMOUNT = "100.00";
const DEFAULT_CURRENCY = "USD";

const BANK_DETAILS = {
  beneficiary: "Infinititech Partners",
  bankName: "[Bank Name]",
  accountNumber: "[Account Number]",
  routingNumber: "[Routing / Sort Code]",
  swift: "[SWIFT / BIC]",
  reference: "Quote your invoice number as the payment reference",
};

export const PaymentPage = () => {
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [reference, setReference] = useState("");
  const [status, setStatus] = useState<{ kind: "idle" | "success" | "error"; message?: string }>(
    { kind: "idle" }
  );

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

  const validAmount = /^\d+(\.\d{1,2})?$/.test(amount) && Number(amount) > 0;

  return (
    <PageLayout
      tag="Payment"
      title="Secure"
      titleAccent="Checkout"
      description="Pay your invoice or retainer securely. Choose the method that works best for you."
    >
      <div className="section-container">
        <div className="payment-grid">
          <ParallaxLayer speed={0.1}>
            <TiltCard className="payment-card">
              <h2 className="payment-card-title">Payment details</h2>
              <p className="payment-card-desc">
                Enter the amount from your invoice and an optional reference. The same details
                apply to both payment methods.
              </p>

              <div className="form-group">
                <label htmlFor="amount">Amount ({DEFAULT_CURRENCY})</label>
                <input
                  id="amount"
                  type="text"
                  inputMode="decimal"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="100.00"
                />
                {!validAmount && (
                  <span className="payment-hint payment-hint-error">
                    Enter a positive amount with up to 2 decimals.
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="reference">Reference (optional)</label>
                <input
                  id="reference"
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  placeholder="Invoice #INV-1234"
                />
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
                <div className={validAmount ? "" : "paypal-disabled"}>
                  <PayPalScriptProvider options={paypalOptions}>
                    <PayPalButtons
                      style={{ layout: "vertical", color: "blue", shape: "rect" }}
                      disabled={!validAmount}
                      forceReRender={[amount, reference, DEFAULT_CURRENCY]}
                      createOrder={(_data, actions) =>
                        actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [
                            {
                              amount: { value: amount, currency_code: DEFAULT_CURRENCY },
                              description: reference || "Infinititech Partners services",
                            },
                          ],
                        })
                      }
                      onApprove={async (_data, actions) => {
                        const details = await actions.order?.capture();
                        const txId = details?.id || "unknown";
                        setStatus({
                          kind: "success",
                          message: `Payment received. Transaction ID: ${txId}`,
                        });
                      }}
                      onError={() =>
                        setStatus({
                          kind: "error",
                          message:
                            "PayPal could not complete the payment. Please try again or contact us.",
                        })
                      }
                      onCancel={() =>
                        setStatus({ kind: "idle", message: "Payment cancelled." })
                      }
                    />
                  </PayPalScriptProvider>
                </div>

                {geoStatus === "ready" && isPayNowAllowed && (
                  <PayNowSection
                    amount={validAmount ? amount : DEFAULT_AMOUNT}
                    reference={reference}
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

              {status.kind === "success" && (
                <div className="payment-status payment-status-success">
                  <Icon name="check" /> {status.message}
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
              <h3 className="payment-side-title">Payment FAQ</h3>
              <div className="payment-faq">
                <div>
                  <h4>Is my payment secure?</h4>
                  <p>
                    PayPal handles all card data on its own PCI-compliant infrastructure. We never
                    receive or store your full card number.
                  </p>
                </div>
                <div>
                  <h4>What currencies are supported?</h4>
                  <p>
                    Payments on this page are processed in USD. For other currencies, contact us
                    and we'll issue a custom invoice.
                  </p>
                </div>
                <div>
                  <h4>Need a receipt?</h4>
                  <p>
                    PayPal sends an automatic receipt to your email. For VAT-compliant invoices
                    or remittance advice, email{" "}
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
                  </p>
                </div>
                <div>
                  <h4>Refund policy</h4>
                  <p>
                    Refunds are governed by our{" "}
                    <a href="/refund-policy">Refund Policy</a>.
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
  reference: string;
}

const PayNowSection = ({ amount, reference }: PayNowSectionProps) => {
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
        Available in the US and UK. Send {amount} USD via your bank using the details below, then
        email us the remittance advice and we'll confirm receipt within 1 business day.
      </p>
      <dl className="bank-details">
        {(
          [
            ["Beneficiary", BANK_DETAILS.beneficiary],
            ["Bank", BANK_DETAILS.bankName],
            ["Account Number", BANK_DETAILS.accountNumber],
            ["Routing / Sort Code", BANK_DETAILS.routingNumber],
            ["SWIFT / BIC", BANK_DETAILS.swift],
            [
              "Payment Reference",
              reference ? reference : BANK_DETAILS.reference,
            ],
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
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> with the reference and
        amount so we can match it to your invoice.
      </p>
    </div>
  );
};
