import { Link } from "react-router-dom";
import { footerLinks, contactInfo } from "@/data/data";
import { MapPin, Phone } from "lucide-react";

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
            <div className="footer-col footer-offices">
              <h4>Our Offices</h4>
              <ul>
                <li className="office-item">
                  <MapPin size={16} className="office-icon" />
                  <div>
                    <span className="office-label">Head Office</span>
                    <span className="office-location">Atlanta, Georgia</span>
                  </div>
                </li>
                <li className="office-item">
                  <MapPin size={16} className="office-icon" />
                  <div>
                    <span className="office-label">India Office</span>
                    <span className="office-location">Kolkata, West Bengal</span>
                  </div>
                </li>
                <li className="office-item">
                  <Phone size={16} className="office-icon" />
                  <div>
                    <span className="office-label">Call Us</span>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="office-location office-phone">
                      {contactInfo.phone}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Infinititech Partners. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
