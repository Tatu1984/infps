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
  countryCode?: string;
  productName: string;
  productSlug: string;
  demoUrl?: string | null;
}

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

  const sheetWebhook = process.env.DEMO_ACCESS_SHEET_WEBHOOK_URL;
  if (!sheetWebhook) {
    console.error(
      "DEMO_ACCESS_SHEET_WEBHOOK_URL not configured — refusing to accept lead"
    );
    res
      .status(500)
      .json({ error: "Lead capture not configured on the server" });
    return;
  }

  const submittedAt = new Date();
  const mobileTrimmed = body.mobile.trim();
  const payload = {
    submittedAt: submittedAt.toISOString(),
    name: body.name.trim(),
    email: body.email.trim(),
    company: body.company?.trim() || "",
    // Wrap mobile in double quotes so the sheet preserves the leading "+"
    // and renders the value verbatim instead of treating it as a number.
    mobile: `"${mobileTrimmed}"`,
    countryCode: body.countryCode?.trim() || "",
    productName: body.productName.trim(),
    productSlug: body.productSlug.trim(),
    demoUrl: body.demoUrl?.trim() || "",
  };

  try {
    const sheetRes = await fetch(sheetWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });
    if (!sheetRes.ok) {
      throw new Error(`Sheet webhook responded ${sheetRes.status}`);
    }
  } catch (err) {
    console.error("Google Sheet append failed", err);
    res
      .status(502)
      .json({ error: "Could not save your request. Please try again." });
    return;
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
