import { ParallaxLayer, SplitText, MagneticButton } from "@/components/ui";
import { contactInfo } from "@/data/data";
import { Link } from "react-router-dom";

export const ContactSection = () => (
  <section id="contact" className="contact">
    <ParallaxLayer speed={0.3} className="contact-glow-wrapper">
      <div className="contact-glow glow-1" />
    </ParallaxLayer>
    <ParallaxLayer speed={-0.3} className="contact-glow-wrapper">
      <div className="contact-glow glow-2" />
    </ParallaxLayer>

    <div className="section-container">
      <ParallaxLayer speed={-0.15}>
        <div className="contact-content">
          <span className="section-tag">Let's Talk</span>
          <h2 className="contact-title">
            <SplitText text="Ready to Build" />
            <br />
            <SplitText text="Something Great?" className="accent" />
          </h2>
          <p className="contact-desc">
            Schedule a consultation with our team. Let's discuss your challenges
            and how we can help you ship production-ready systems.
          </p>

          <div className="contact-actions">
            <Link to="/contact">
              <MagneticButton
                href="/contact"
                className="btn-primary large"
              >
                Schedule Consultation
                <svg viewBox="0 0 24 24" className="btn-arrow">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </MagneticButton>
            </Link>
          </div>

          <div className="contact-info-links">
            <a href={`mailto:${contactInfo.email}`} className="contact-email">
              {contactInfo.email}
            </a>
            <span className="contact-divider">|</span>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="contact-phone">
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  </section>
);
