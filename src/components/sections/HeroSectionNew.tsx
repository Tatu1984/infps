import { AuroraBackground } from "@/components/effects";
import { ParallaxLayer, SplitText, BlurText, MagneticButton } from "@/components/ui";
import proxmoxLogo from "@/assets/proxmox.webp";
import { heroContent } from "@/data/services-restructured";

export const HeroSectionNew = () => (
  <section id="home" className="hero">
    <AuroraBackground />

    <ParallaxLayer speed={-0.3} className="hero-content-parallax">
      <div className="hero-content">
        {/* Trust Badge */}
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>{heroContent.badge}</span>
        </div>

        {/* Main Headline - Outcome Driven */}
        <h1 className="hero-title">
          <SplitText text={heroContent.headline[0]} className="hero-line" />
          <SplitText text={heroContent.headline[1]} className="hero-line accent" />
          <SplitText text={heroContent.headline[2]} className="hero-line" />
        </h1>

        {/* Value Proposition */}
        <p className="hero-subtitle">
          <BlurText text={heroContent.subheadline} delay={1} />
        </p>

        {/* Proxmox Partnership */}
        <div className="proxmox-badge">
          <span>AUTHORIZED</span>
          <img src={proxmoxLogo} alt="Proxmox" className="proxmox-logo" />
          <span>PROXMOX RESELLER</span>
        </div>

        {/* CTAs - Primary leads to consultation, Secondary to social proof */}
        <div className="hero-ctas">
          <MagneticButton href="/contact" className="btn-primary">
            {heroContent.primaryCTA}
            <svg viewBox="0 0 24 24" className="btn-arrow">
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </MagneticButton>
          <MagneticButton href="/case-studies" className="btn-secondary">
            {heroContent.secondaryCTA}
          </MagneticButton>
        </div>
      </div>
    </ParallaxLayer>

    <ParallaxLayer speed={0.5} className="hero-visual-parallax">
      <div className="hero-visual">
        <div className="hero-sphere" />
        <div className="hero-ring ring-1" />
        <div className="hero-ring ring-2" />
        <div className="hero-ring ring-3" />
      </div>
    </ParallaxLayer>
  </section>
);
