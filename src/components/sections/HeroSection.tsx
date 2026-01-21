import { AuroraBackground } from "@/components/effects";
import {
  ParallaxLayer,
  SplitText,
  BlurText,
  MagneticButton,
} from "@/components/ui";
import proxmoxLogo from "@/assets/proxmox.webp";

export const HeroSection = () => (
  <section id="home" className="hero">
    <AuroraBackground />

    <ParallaxLayer speed={-0.3} className="hero-content-parallax">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>Leading Technology Partner</span>
        </div>

        <h1 className="hero-title">
          <SplitText text="Transform" className="hero-line" />
          <SplitText text="Innovate &" className="hero-line accent" />
          <SplitText text="Scale" className="hero-line" />
        </h1>

        <p className="hero-subtitle">
          <BlurText
            text="Data Center Management • Custom Software • Smart City Solutions • Digital Services"
            delay={1}
          />
        </p>

        <div className="proxmox-badge">
          <span>AUTHORIZED</span>
          <img src={proxmoxLogo} alt="Proxmox" className="proxmox-logo" />
          <span>PROXMOX RESELLER</span>
        </div>

        <div className="hero-ctas">
          <MagneticButton href="#contact" className="btn-primary">
            Start Your Project
            <svg viewBox="0 0 24 24" className="btn-arrow">
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </MagneticButton>
          <MagneticButton href="#services" className="btn-secondary">
            Explore Services
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
