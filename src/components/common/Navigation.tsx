import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { MagneticButton } from "@/components/ui";
import { navItems } from "@/data/data";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let rafId: number | null = null;
    const update = () => {
      rafId = null;
      setScrolled((prev) => {
        const next = window.scrollY > 50;
        return next === prev ? prev : next;
      });
    };
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    update();
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const mobileMenu = mobileOpen
    ? createPortal(
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                className={`mobile-menu-link ${location.pathname === item.href ? "active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/payment"
              className="nav-cta-secondary-mobile"
              onClick={() => setMobileOpen(false)}
            >
              Pay Now
            </Link>
            <Link
              to="/contact"
              className="nav-cta-mobile"
              onClick={() => setMobileOpen(false)}
            >
              Let's Talk
            </Link>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""} ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <span className="logo-symbol">∞</span>
            <span className="logo-text">Infinititech</span>
          </Link>

          <div className="nav-links">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-cta-group">
            <Link to="/payment" className="nav-cta-secondary">
              Pay Now
            </Link>
            <MagneticButton href="/contact" className="nav-cta">
              Let's Talk
            </MagneticButton>
          </div>

          <button
            className={`nav-mobile-toggle ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      {mobileMenu}
    </>
  );
};
