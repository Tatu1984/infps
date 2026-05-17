import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, CheckCircle2, Loader2 } from "lucide-react";

interface DemoAccessModalProps {
  open: boolean;
  onClose: () => void;
  productName: string;
  productSlug: string;
  demoUrl?: string;
}

interface FormState {
  name: string;
  email: string;
  company: string;
  mobile: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  mobile?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_RE = /^\+?[0-9\s\-()]{7,20}$/;

const initialForm: FormState = { name: "", email: "", company: "", mobile: "" };

export const DemoAccessModal = ({
  open,
  onClose,
  productName,
  productSlug,
  demoUrl,
}: DemoAccessModalProps) => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setForm(initialForm);
      setErrors({});
      setSubmitError(null);
      setSubmitted(false);
      setSubmitting(false);
    }
  }, [open]);

  if (!open) return null;
  if (typeof document === "undefined") return null;

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name";
    if (!EMAIL_RE.test(form.email.trim())) next.email = "Please enter a valid email";
    if (!MOBILE_RE.test(form.mobile.trim()))
      next.mobile = "Please enter a valid mobile number";
    return next;
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field as keyof FieldErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/demo-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim() || null,
          mobile: form.mobile.trim(),
          productName,
          productSlug,
          demoUrl: demoUrl || null,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return createPortal(
    <div
      className="demo-access-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-access-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="demo-access-scroll"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="demo-access-modal">
        <button
          type="button"
          className="demo-access-close"
          aria-label="Close"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="demo-access-header">
              <span className="demo-access-tag">Demo Access</span>
              <h2 id="demo-access-title" className="demo-access-title">
                Request access to <span className="accent">{productName}</span>
              </h2>
              <p className="demo-access-desc">
                Share a few details and our team will email you a private demo
                link shortly.
              </p>
            </div>

            <form className="demo-access-form" onSubmit={handleSubmit} noValidate>
              <div className="demo-access-field">
                <label htmlFor="da-name">
                  Full name <span className="req">*</span>
                </label>
                <input
                  id="da-name"
                  ref={firstFieldRef}
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <span className="demo-access-error">{errors.name}</span>
                )}
              </div>

              <div className="demo-access-field">
                <label htmlFor="da-email">
                  Email <span className="req">*</span>
                </label>
                <input
                  id="da-email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="you@company.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span className="demo-access-error">{errors.email}</span>
                )}
              </div>

              <div className="demo-access-field">
                <label htmlFor="da-company">
                  Company <span className="opt">(optional)</span>
                </label>
                <input
                  id="da-company"
                  type="text"
                  value={form.company}
                  onChange={handleChange("company")}
                  placeholder="Acme Inc."
                  autoComplete="organization"
                />
              </div>

              <div className="demo-access-field">
                <label htmlFor="da-mobile">
                  Mobile number <span className="req">*</span>
                </label>
                <input
                  id="da-mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={handleChange("mobile")}
                  placeholder="+1 555 123 4567"
                  autoComplete="tel"
                  aria-invalid={!!errors.mobile}
                />
                {errors.mobile && (
                  <span className="demo-access-error">{errors.mobile}</span>
                )}
              </div>

              {submitError && (
                <div className="demo-access-submit-error">{submitError}</div>
              )}

              <button
                type="submit"
                className="demo-access-submit"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="spin" />
                    Submitting…
                  </>
                ) : (
                  "Request Demo Access"
                )}
              </button>

              <p className="demo-access-note">
                We respect your privacy. Your details are only used to grant
                demo access.
              </p>
            </form>
          </>
        ) : (
          <div className="demo-access-success">
            <CheckCircle2 size={48} className="demo-access-success-icon" />
            <h2 className="demo-access-title">Request received</h2>
            <p className="demo-access-desc">
              Thanks, <strong>{form.name.split(" ")[0]}</strong>. We'll email
              demo access for <strong>{productName}</strong> to{" "}
              <strong>{form.email}</strong> shortly.
            </p>
            <button
              type="button"
              className="demo-access-submit"
              onClick={onClose}
            >
              Done
            </button>
          </div>
        )}
        </div>
      </div>
    </div>,
    document.body
  );
};
