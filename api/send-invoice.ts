import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { Resend } from "resend";

interface VercelRequest {
  method?: string;
  body: unknown;
  headers: Record<string, string | string[] | undefined>;
}

interface VercelResponse {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
  send: (body: string) => void;
  setHeader: (name: string, value: string) => void;
}

interface ConsultationPayload {
  type: "product" | "custom";
  productSlug?: string;
  productName?: string;
  brief: string;
  payerName: string;
  payerEmail: string;
  amount: string;
}

interface RequestBody {
  orderID: string;
  currency: string;
  paypalDetails?: unknown;
  consultation: ConsultationPayload;
}

const PAYPAL_ENV = process.env.PAYPAL_ENV === "sandbox" ? "sandbox" : "live";
const PAYPAL_API_BASE =
  PAYPAL_ENV === "sandbox"
    ? "https://api-m.sandbox.paypal.com"
    : "https://api-m.paypal.com";

const FROM_EMAIL = process.env.INVOICE_FROM_EMAIL || "Infinititech Partners <onboarding@resend.dev>";
const BCC_EMAIL = process.env.INVOICE_BCC_EMAIL || "saddygrouppie@gmail.com";

const COMPANY = {
  name: "Infinititech Partners",
  email: BCC_EMAIL,
  address: "459 Hamilton St SE, Atlanta, GA 30316",
  website: "infinititechpartners.com",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  let body: RequestBody;
  try {
    body =
      typeof req.body === "string"
        ? (JSON.parse(req.body) as RequestBody)
        : (req.body as RequestBody);
  } catch {
    res.status(400).json({ error: "Invalid JSON body" });
    return;
  }

  const validation = validate(body);
  if (validation) {
    res.status(400).json({ error: validation });
    return;
  }

  const { orderID, currency, consultation } = body;

  const verification = await verifyOrderWithPayPal(orderID, consultation.amount, currency);
  if (verification.kind === "error") {
    res.status(verification.status).json({ error: verification.message });
    return;
  }

  const invoiceNumber = makeInvoiceNumber();
  const issuedAt = new Date();

  let pdfBytes: Uint8Array;
  try {
    pdfBytes = await buildInvoicePdf({
      invoiceNumber,
      issuedAt,
      orderID,
      currency,
      consultation,
    });
  } catch (err) {
    console.error("PDF generation failed", err);
    res.status(500).json({ error: "Failed to generate invoice PDF" });
    return;
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    res.status(500).json({ error: "RESEND_API_KEY not configured on the server" });
    return;
  }

  const resend = new Resend(resendKey);

  const subject = `Invoice ${invoiceNumber} from ${COMPANY.name}`;
  const summary = consultation.type === "custom"
    ? "Custom consultation"
    : `Consultation: ${consultation.productName ?? consultation.productSlug ?? "—"}`;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: consultation.payerEmail,
      bcc: BCC_EMAIL,
      subject,
      html: htmlBody({ consultation, invoiceNumber, issuedAt, summary, currency }),
      attachments: [
        {
          filename: `${invoiceNumber}.pdf`,
          content: Buffer.from(pdfBytes).toString("base64"),
        },
      ],
    });
  } catch (err) {
    console.error("Resend send failed", err);
    res.status(502).json({ error: "Failed to send invoice email" });
    return;
  }

  res.status(200).json({ ok: true, invoiceNumber });
}

function validate(body: RequestBody): string | null {
  if (!body || typeof body !== "object") return "Missing body";
  if (!body.orderID || typeof body.orderID !== "string") return "Missing orderID";
  if (!body.currency || typeof body.currency !== "string") return "Missing currency";
  const c = body.consultation;
  if (!c || typeof c !== "object") return "Missing consultation";
  if (c.type !== "product" && c.type !== "custom") return "Invalid consultation.type";
  if (!c.payerName || c.payerName.trim().length < 2) return "Invalid payerName";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.payerEmail || "")) return "Invalid payerEmail";
  if (!/^\d+(\.\d{1,2})?$/.test(c.amount || "")) return "Invalid amount";
  if (Number(c.amount) <= 0) return "Amount must be positive";
  if (c.type === "custom" && (!c.brief || c.brief.trim().length < 10)) {
    return "Custom consultation requires a brief (min 10 chars)";
  }
  return null;
}

type VerifyResult =
  | { kind: "ok" }
  | { kind: "error"; status: number; message: string };

async function verifyOrderWithPayPal(
  orderID: string,
  expectedAmount: string,
  expectedCurrency: string
): Promise<VerifyResult> {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    // Verification disabled — fall through. Frontend already captured.
    return { kind: "ok" };
  }

  try {
    const tokenRes = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });
    if (!tokenRes.ok) {
      return { kind: "error", status: 502, message: "PayPal auth failed" };
    }
    const token = (await tokenRes.json()) as { access_token?: string };
    if (!token.access_token) {
      return { kind: "error", status: 502, message: "PayPal token missing" };
    }

    const orderRes = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderID}`, {
      headers: { Authorization: `Bearer ${token.access_token}` },
    });
    if (!orderRes.ok) {
      return { kind: "error", status: 404, message: "PayPal order not found" };
    }
    const order = (await orderRes.json()) as {
      status?: string;
      purchase_units?: Array<{
        amount?: { value?: string; currency_code?: string };
        payments?: { captures?: Array<{ status?: string }> };
      }>;
    };

    if (order.status !== "COMPLETED" && order.status !== "APPROVED") {
      return {
        kind: "error",
        status: 400,
        message: `PayPal order status is ${order.status ?? "unknown"}, not COMPLETED`,
      };
    }
    const unit = order.purchase_units?.[0];
    if (
      unit?.amount?.value !== expectedAmount ||
      unit?.amount?.currency_code !== expectedCurrency
    ) {
      return {
        kind: "error",
        status: 400,
        message: "Amount/currency mismatch with PayPal record",
      };
    }
    return { kind: "ok" };
  } catch (err) {
    console.error("PayPal verification error", err);
    return { kind: "error", status: 502, message: "PayPal verification failed" };
  }
}

function makeInvoiceNumber(): string {
  const d = new Date();
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `INF-${y}${m}${day}-${rand}`;
}

interface BuildPdfArgs {
  invoiceNumber: string;
  issuedAt: Date;
  orderID: string;
  currency: string;
  consultation: ConsultationPayload;
}

async function buildInvoicePdf(args: BuildPdfArgs): Promise<Uint8Array> {
  const { invoiceNumber, issuedAt, orderID, currency, consultation } = args;

  const doc = await PDFDocument.create();
  const page = doc.addPage([595, 842]); // A4 portrait, points
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);

  const margin = 50;
  const contentWidth = 595 - margin * 2;
  const accent = rgb(0, 0.8, 0.6); // Infinititech primary teal-ish
  const dark = rgb(0.1, 0.12, 0.18);
  const muted = rgb(0.4, 0.4, 0.45);

  let y = 792;

  // Header bar
  page.drawRectangle({ x: 0, y: y - 10, width: 595, height: 60, color: accent });
  page.drawText(COMPANY.name, {
    x: margin,
    y: y + 10,
    size: 18,
    font: bold,
    color: rgb(0, 0, 0),
  });
  page.drawText("INVOICE", {
    x: margin + contentWidth - 95,
    y: y + 10,
    size: 22,
    font: bold,
    color: rgb(0, 0, 0),
  });

  y -= 60;

  // Company info
  page.drawText(COMPANY.address, { x: margin, y, size: 10, font, color: muted });
  y -= 14;
  page.drawText(`${COMPANY.email}  •  ${COMPANY.website}`, {
    x: margin,
    y,
    size: 10,
    font,
    color: muted,
  });

  y -= 32;

  // Invoice meta box
  drawKeyValue(page, font, bold, dark, muted, margin, y, "Invoice #", invoiceNumber);
  drawKeyValue(page, font, bold, dark, muted, margin + 200, y, "Issued", issuedAt.toISOString().slice(0, 10));
  drawKeyValue(page, font, bold, dark, muted, margin + 380, y, "PayPal Txn", orderID);

  y -= 38;

  // Bill to
  page.drawText("Bill to", { x: margin, y, size: 11, font: bold, color: dark });
  y -= 16;
  page.drawText(consultation.payerName, { x: margin, y, size: 12, font, color: dark });
  y -= 14;
  page.drawText(consultation.payerEmail, { x: margin, y, size: 11, font, color: muted });

  y -= 36;

  // Items table header
  page.drawRectangle({
    x: margin,
    y: y - 4,
    width: contentWidth,
    height: 24,
    color: rgb(0.93, 0.95, 0.97),
  });
  page.drawText("Description", { x: margin + 10, y: y + 4, size: 11, font: bold, color: dark });
  page.drawText("Amount", {
    x: margin + contentWidth - 80,
    y: y + 4,
    size: 11,
    font: bold,
    color: dark,
  });

  y -= 30;

  // Item row
  const itemLabel =
    consultation.type === "custom"
      ? "Custom consultation"
      : `Consultation — ${consultation.productName ?? consultation.productSlug ?? "Product"}`;
  page.drawText(itemLabel, { x: margin + 10, y, size: 12, font, color: dark });
  page.drawText(`${currency} ${consultation.amount}`, {
    x: margin + contentWidth - 80,
    y,
    size: 12,
    font,
    color: dark,
  });

  y -= 18;

  if (consultation.brief) {
    const wrapped = wrapText(consultation.brief, 75);
    for (const line of wrapped.slice(0, 8)) {
      page.drawText(line, { x: margin + 10, y, size: 9.5, font, color: muted });
      y -= 12;
    }
    if (wrapped.length > 8) {
      page.drawText("…", { x: margin + 10, y, size: 9.5, font, color: muted });
      y -= 12;
    }
  }

  y -= 20;

  // Total bar
  page.drawLine({
    start: { x: margin, y },
    end: { x: margin + contentWidth, y },
    thickness: 1,
    color: rgb(0.85, 0.85, 0.88),
  });
  y -= 22;
  page.drawText("Total paid", {
    x: margin + contentWidth - 220,
    y,
    size: 12,
    font: bold,
    color: dark,
  });
  page.drawText(`${currency} ${consultation.amount}`, {
    x: margin + contentWidth - 80,
    y,
    size: 12,
    font: bold,
    color: dark,
  });

  // Footer
  page.drawText(
    "Thank you for your business. Questions? Reply to the email this invoice came from.",
    { x: margin, y: 60, size: 9, font, color: muted }
  );
  page.drawText(`Status: PAID via PayPal • Order ${orderID}`, {
    x: margin,
    y: 46,
    size: 9,
    font,
    color: muted,
  });

  return doc.save();
}

function drawKeyValue(
  page: ReturnType<PDFDocument["addPage"]>,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>,
  bold: Awaited<ReturnType<PDFDocument["embedFont"]>>,
  dark: ReturnType<typeof rgb>,
  muted: ReturnType<typeof rgb>,
  x: number,
  y: number,
  label: string,
  value: string
) {
  page.drawText(label, { x, y, size: 9, font, color: muted });
  page.drawText(value, { x, y: y - 14, size: 11, font: bold, color: dark });
}

function wrapText(s: string, maxChars: number): string[] {
  const words = s.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    if ((current + " " + w).trim().length > maxChars) {
      if (current) lines.push(current);
      current = w;
    } else {
      current = current ? `${current} ${w}` : w;
    }
  }
  if (current) lines.push(current);
  return lines;
}

interface HtmlArgs {
  consultation: ConsultationPayload;
  invoiceNumber: string;
  issuedAt: Date;
  summary: string;
  currency: string;
}

function htmlBody({ consultation, invoiceNumber, issuedAt, summary, currency }: HtmlArgs): string {
  const safeBrief = consultation.brief ? escapeHtml(consultation.brief) : "";
  return `
  <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1f2e;">
    <h2 style="color:#00b894;margin:0 0 8px;">Thank you, ${escapeHtml(consultation.payerName)}</h2>
    <p style="margin:0 0 16px; line-height:1.6;">
      We've received your payment for <strong>${escapeHtml(summary)}</strong>.
      Your invoice (#${invoiceNumber}, ${issuedAt.toISOString().slice(0, 10)}) is attached as a PDF.
    </p>
    <table style="width:100%; border-collapse: collapse; margin-bottom:16px;">
      <tr><td style="padding:6px 0; color:#6b7280;">Amount</td><td style="padding:6px 0; text-align:right;"><strong>${currency} ${escapeHtml(consultation.amount)}</strong></td></tr>
      <tr><td style="padding:6px 0; color:#6b7280;">Type</td><td style="padding:6px 0; text-align:right;">${consultation.type === "custom" ? "Custom consultation" : "Product consultation"}</td></tr>
    </table>
    ${safeBrief ? `<h3 style="margin:16px 0 6px; font-size:14px;">Your brief</h3><p style="white-space:pre-wrap; background:#f7f8fa; padding:12px 14px; border-radius:8px; font-size:13px; line-height:1.5;">${safeBrief}</p>` : ""}
    <p style="margin-top:24px; line-height:1.6;">
      We'll be in touch shortly to schedule your call. If you need anything in the meantime,
      reply to this email.
    </p>
    <p style="color:#6b7280; font-size:12px; margin-top:24px;">— ${COMPANY.name}<br>${COMPANY.address}</p>
  </div>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
