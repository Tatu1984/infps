import { PageLayout } from "@/components/common/PageLayout";
import { FloatingConstellation } from "@/components/effects";
import { ParallaxLayer, TiltCard, MagneticButton } from "@/components/ui";
import { team } from "@/data/data";
import { usePageMeta } from "@/hooks";

export const TeamPage = () => {
  usePageMeta({
    title: "Our Team | Senior Engineers Behind Infiniti Tech Partners",
    description:
      "Meet the senior engineers and architects building cloud, security and AI systems for growth-stage US and UK companies at Infiniti Tech Partners.",
    canonical: "/team",
    keywords:
      "engineering consultancy team, senior software engineers, cloud architects, AI engineers, technology consulting team",
  });

  return (
    <>
      <FloatingConstellation name="gemini" />
      <PageLayout
        tag="Our Team"
        title="Meet The"
        titleAccent="Experts"
        description="A talented team of professionals dedicated to delivering excellence."
      >
        <div className="section-container">
          <div className="page-section">
            <div className="flex flex-wrap justify-center gap-6">
              {team.map((member, i) => (
                <TiltCard
                  key={i}
                  className="team-card-full lg:w-[23%] md:w-[30%] w-[80%] "
                >
                  <div className="team-avatar-full">
                    <span>{member.avatar}</span>
                    <div className="avatar-glow" />
                  </div>
                  <h3 className="team-name-large">{member.name}</h3>
                  <p className="team-role-full">{member.role}</p>
                  <div className="team-bio">
                    <p>{member.bio}</p>
                  </div>
                  {member.linkedin && (
                    <div className="team-socials-full">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </TiltCard>
              ))}
            </div>
          </div>

          <div className="page-section page-cta-section">
            <ParallaxLayer speed={0.1}>
              <div className="page-cta-content">
                <h2 className="page-cta-title">Want to join our team?</h2>
                <p className="page-cta-desc">
                  We're always looking for talented individuals to join our
                  growing team.
                </p>
                <MagneticButton href="/contact" className="btn-primary large">
                  Get in Touch
                </MagneticButton>
              </div>
            </ParallaxLayer>
          </div>
        </div>
      </PageLayout>
    </>
  );
};
