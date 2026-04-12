import { useInView } from "@/hooks";
import {
  ParallaxLayer,
  SplitText,
  TiltCard,
  AnimatedCounter,
  Icon,
  type IconName,
} from "@/components/ui";
import { values, stats } from "@/data/data";

export const AboutSection = () => {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      id="about"
      className="about"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section-container">
        <ParallaxLayer speed={-0.2}>
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">
              <SplitText text="Your Technology" />
              <br />
              <SplitText text="Should Be an Advantage" className="accent" />
            </h2>
          </div>
        </ParallaxLayer>

        <div className="about-content">
          <ParallaxLayer speed={0.1}>
            <div className="about-intro">
              <p className={`about-text ${inView ? "animate" : ""}`}>
                We help growth-stage companies ship enterprise-grade systems.
                Deep technical capability. Fast execution. Production-ready
                systems that scale with your business—without the overhead
                of building a large internal team.
              </p>
            </div>
          </ParallaxLayer>

          <div className="flex flex-wrap justify-center gap-6">
            {values.map((value, i) => (
              <TiltCard
                key={i}
                className="value-card lg:w-[32%] md:w-[47%] w-[90%]"
              >
                <span className="value-icon">
                  <Icon name={value.icon as IconName} />
                </span>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.desc}</p>
              </TiltCard>
            ))}
          </div>

          <ParallaxLayer speed={0.2}>
            <div className="about-stats">
              {stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-value">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  );
};
