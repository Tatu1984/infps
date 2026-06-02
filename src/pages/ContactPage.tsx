import { useState, FormEvent } from "react";
import { PageLayout } from "@/components/common/PageLayout";
import { ParallaxLayer, TiltCard, Icon } from "@/components/ui";
import { contactInfo, socialLinks } from "@/data/data";
import { usePageMeta } from "@/hooks";

// Web3Forms access key — free, no backend. Get yours at https://web3forms.com
// (enter the email you want leads delivered to, copy the key, drop it in .env).
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

// Where "Book a call" sends people — reuses the existing Calendly link.
const BOOKING_URL =
  (import.meta.env.VITE_CALENDLY_URL as string | undefined) ||
  "https://calendly.com/sudipto-mitra-infinititechpartners/30min";

type Status = "idle" | "submitting" | "success" | "error";

export const ContactPage = () => {
  usePageMeta({
    title: "Contact Infiniti Tech Partners | US & UK Technology Consulting",
    description:
      "Talk to an enterprise technology consultant about software, cloud, security or AI engineering. Response within one business day, US and UK time zones.",
    canonical: "/contact",
    keywords:
      "contact IT consulting firm, enterprise technology consultant, hire software development partner, custom software development quote, AI consulting contact",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field; bots do.
    if (data.get("botcheck")) return;

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setErrorMsg(
        "Form isn't configured yet. Set VITE_WEB3FORMS_KEY in your environment."
      );
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", `New enquiry: ${data.get("subject") || "Contact form"}`);
    data.append("from_name", "Infiniti Tech Partners Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        form.reset();
        // Fire conversion events if analytics are present.
        if (typeof window !== "undefined") {
          // GA4
          (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.(
            "event",
            "generate_lead",
            { event_category: "contact", event_label: "contact_form" }
          );
        }
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please email us directly.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please email us directly at " + contactInfo.email);
    }
  };

  return (
    <PageLayout
      tag="Contact Us"
      title="Let's Build"
      titleAccent="Something Great"
      description="Ready to transform your business? Get in touch with us today."
    >
      <div className="section-container">
        <div className="page-section">
          <div className="contact-grid">
            <ParallaxLayer speed={0.1}>
              <TiltCard className="contact-info-card">
                <h3 className="contact-info-title">Get in Touch</h3>

                {/* Primary CTA for B2B: booking a call converts better than a form. */}
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary contact-book-call"
                  onClick={() =>
                    (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.(
                      "event",
                      "book_call_click",
                      { event_category: "contact" }
                    )
                  }
                >
                  Book a 30-min strategy call
                </a>

                <div className="contact-info-items">
                  <div className="contact-info-item">
                    <span className="contact-icon"><Icon name="mail" /></span>
                    <div>
                      <h4>Email</h4>
                      <a href={`mailto:${contactInfo.email}`}>
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-icon"><Icon name="map-pin" /></span>
                    <div>
                      <h4>Location</h4>
                      <p>{contactInfo.location}</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-icon"><Icon name="clock" /></span>
                    <div>
                      <h4>Working Hours</h4>
                      <p>{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
                <div className="contact-social">
                  <h4>Follow Us</h4>
                  <div className="social-links">
                    {socialLinks.map((link) => (
                      <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="social-link">
                        {link.icon === "linkedin" && (
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        )}
                        {link.icon === "github" && (
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        )}
                        {link.icon === "twitter" && (
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </ParallaxLayer>

            <ParallaxLayer speed={0.15}>
              <TiltCard className="contact-form-card">
                <h3 className="contact-form-title">Send us a Message</h3>

                {status === "success" ? (
                  <div className="contact-form-success" role="status">
                    <span className="contact-icon"><Icon name="check" /></span>
                    <h4>Thanks — we've got your message.</h4>
                    <p>
                      A consultant will reply within one business day. Prefer to
                      talk sooner?{" "}
                      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                        Book a call here.
                      </a>
                    </p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    {/* Honeypot — hidden from humans, catches bots. */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      style={{ display: "none" }}
                      aria-hidden="true"
                    />
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Work email</label>
                      <input type="email" id="email" name="email" placeholder="you@company.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input type="text" id="company" name="company" placeholder="Company name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input type="text" id="subject" name="subject" placeholder="How can we help?" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>

                    {status === "error" && (
                      <p className="contact-form-error" role="alert">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      className="btn-primary submit-btn"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
                      <svg viewBox="0 0 24 24" className="btn-arrow">
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </button>
                  </form>
                )}
              </TiltCard>
            </ParallaxLayer>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
