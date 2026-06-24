import { Link } from "react-router-dom";
import { footerLinks, contactInfo } from "@/data/data";
import { locations } from "@/data/locations";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-symbol">∞</span>
              <span className="logo-text">Infinititech Partners</span>
            </Link>
            <p className="footer-tagline">
              Transform your digital vision into reality with cutting-edge
              technology solutions.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                {footerLinks.main.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>More</h4>
              <ul>
                {footerLinks.secondary.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Where we work</h4>
              <ul>
                {locations.map((l) => (
                  <li key={l.slug}>
                    <Link to={`/locations/${l.slug}`}>
                      {l.city}, {l.country}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col footer-offices">
              <h4>Our Offices</h4>
              <ul>
                <li className="office-item">
                  <MapPin size={16} className="office-icon" />
                  <div>
                    <span className="office-label">Head Office</span>
                    <span className="office-location">459 Hamilton St SE, Atlanta, GA 30316</span>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="office-contact">
                      <Phone size={14} /> {contactInfo.phone}
                    </a>
                  </div>
                </li>
                <li className="office-item">
                  <MapPin size={16} className="office-icon" />
                  <div>
                    <span className="office-label">India Office</span>
                    <span className="office-location">Kolkata, West Bengal</span>
                    <a href={`mailto:${contactInfo.email}`} className="office-contact">
                      <Mail size={14} /> {contactInfo.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-credentials">
          <span className="credential-badge">Registered MSME</span>
          <span className="credential-item">
            Udyam:{" "}
            <a
              href="https://udyamregistration.gov.in/Udyam_Verify.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              UDYAM-WB-10-0173118
            </a>
          </span>
          <span className="credential-sep">·</span>
          <span className="credential-item">GSTIN: 19AALFI6029A1ZH</span>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Infinititech Partners. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/payment">Payment</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
