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

interface RequestBody {
  name: string;
  email: string;
  company?: string | null;
  mobile: string;
  productName: string;
  productSlug: string;
  demoUrl?: string | null;
}

const FROM_EMAIL =
  process.env.DEMO_ACCESS_FROM_EMAIL ||
  process.env.INVOICE_FROM_EMAIL ||
  "Infinititech Partners <onboarding@resend.dev>";

const LEAD_TO_EMAIL =
  process.env.DEMO_ACCESS_TO_EMAIL ||
  "sudipto.mitra@infinititechpartners.com";

const LEAD_BCC_EMAIL =
  process.env.DEMO_ACCESS_BCC_EMAIL ||
  process.env.INVOICE_BCC_EMAIL ||
  "saddygrouppie@gmail.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_RE = /^\+?[0-9\s\-()]{7,20}$/;

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

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    res.status(500).json({ error: "RESEND_API_KEY not configured on the server" });
    return;
  }

  const resend = new Resend(resendKey);

  const name = body.name.trim();
  const email = body.email.trim();
  const company = body.company?.trim() || "";
  const mobile = body.mobile.trim();
  const productName = body.productName.trim();
  const productSlug = body.productSlug.trim();
  const demoUrl = body.demoUrl?.trim() || "";

  const submittedAt = new Date();
  const subject = `Demo access request — ${productName} — ${name}`;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: LEAD_TO_EMAIL,
      bcc: LEAD_BCC_EMAIL,
      replyTo: email,
      subject,
      html: leadHtml({
        name,
        email,
        company,
        mobile,
        productName,
        productSlug,
        demoUrl,
        submittedAt,
      }),
    });
  } catch (err) {
    console.error("Resend send failed (demo-access lead)", err);
    res.status(502).json({ error: "Failed to send lead notification" });
    return;
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `We received your demo request for ${productName}`,
      html: confirmationHtml({ name, productName }),
    });
  } catch (err) {
    console.error("Resend send failed (demo-access confirmation)", err);
  }

  // Append to Google Sheet (non-blocking). Configure via DEMO_ACCESS_SHEET_WEBHOOK_URL.
  const sheetWebhook = process.env.DEMO_ACCESS_SHEET_WEBHOOK_URL;
  if (sheetWebhook) {
    try {
      await fetch(sheetWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submittedAt: submittedAt.toISOString(),
          name,
          email,
          company,
          mobile,
          productName,
          productSlug,
          demoUrl,
        }),
      });
    } catch (err) {
      console.error("Google Sheet append failed", err);
    }
  }

  res.status(200).json({ ok: true });
}

function validate(body: RequestBody): string | null {
  if (!body || typeof body !== "object") return "Missing body";
  if (!body.name || body.name.trim().length < 2) return "Invalid name";
  if (!EMAIL_RE.test((body.email || "").trim())) return "Invalid email";
  if (!MOBILE_RE.test((body.mobile || "").trim())) return "Invalid mobile";
  if (!body.productName || typeof body.productName !== "string")
    return "Missing productName";
  if (!body.productSlug || typeof body.productSlug !== "string")
    return "Missing productSlug";
  return null;
}

interface LeadHtmlArgs {
  name: string;
  email: string;
  company: string;
  mobile: string;
  productName: string;
  productSlug: string;
  demoUrl: string;
  submittedAt: Date;
}

function leadHtml(a: LeadHtmlArgs): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 0;color:#6b7280;width:140px;">${escapeHtml(
          label
        )}</td><td style="padding:8px 0;color:#1a1f2e;"><strong>${escapeHtml(
          value
        )}</strong></td></tr>`
      : "";

  return `
  <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1f2e;">
    <h2 style="color:#00b894;margin:0 0 6px;">New demo access request</h2>
    <p style="margin:0 0 14px;color:#374151;">
      A prospect has requested access to <strong>${escapeHtml(
        a.productName
      )}</strong>.
    </p>
    <table style="width:100%; border-collapse: collapse; font-size:14px;">
      ${row("Name", a.name)}
      ${row("Email", a.email)}
      ${row("Mobile", a.mobile)}
      ${row("Company", a.company || "—")}
      ${row("Product", a.productName)}
      ${row("Product slug", a.productSlug)}
      ${row("Demo URL", a.demoUrl || "—")}
      ${row("Submitted at", a.submittedAt.toISOString())}
    </table>
    <p style="margin-top:22px;color:#6b7280;font-size:12px;">
      Reply directly to this email to reach the requester.
    </p>
  </div>`;
}

function confirmationHtml({
  name,
  productName,
}: {
  name: string;
  productName: string;
}): string {
  return `
  <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1f2e;">
    <h2 style="color:#00b894;margin:0 0 8px;">Thanks, ${escapeHtml(
      name.split(" ")[0]
    )}</h2>
    <p style="margin:0 0 14px; line-height:1.6;">
      We've received your request for a live demo of
      <strong>${escapeHtml(productName)}</strong>.
      Our team will email you a private access link shortly — typically within
      one business day.
    </p>
    <p style="margin:0 0 14px; line-height:1.6;">
      If you'd like to share more context in the meantime, just reply to this email.
    </p>
    <p style="color:#6b7280; font-size:12px; margin-top:24px;">— Infinititech Partners</p>
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
