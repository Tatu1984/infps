import {
  ParallaxLayer,
  SplitText,
  TiltCard,
  MagneticButton,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui";
import { projects } from "@/data/data";
import { Link } from "react-router-dom";

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="section-container">
        <ParallaxLayer speed={-0.2}>
          <div className="section-header">
            <span className="section-tag">Proven Results</span>
            <h2 className="section-title">
              <SplitText text="Client Success" />
              <br />
              <SplitText text="Stories" className="accent" />
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '1rem auto 0', opacity: 0.7 }}>
              Real projects with measurable outcomes across industries.
            </p>
          </div>
        </ParallaxLayer>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mx-auto mb-10"
        >
          <CarouselContent>
            {projects.map((project, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 gap-6">
                <div className="mx-4">
                  <TiltCard className="portfolio-card m-2">
                    <Link to={`/portfolio/${project.slug}`}>
                      <>
                        <div
                          className="portfolio-image"
                          style={{ background: project.gradient }}
                        >
                          <div className="portfolio-overlay">
                            <span className="portfolio-category">
                              {project.category}
                            </span>
                          </div>
                        </div>
                        <div className="portfolio-content">
                          <h3 className="portfolio-title">{project.title}</h3>
                          <p className="portfolio-desc">{project.desc}</p>
                          <div className="portfolio-tech"></div>
                        </div>
                      </>
                    </Link>
                  </TiltCard>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent" />
          <CarouselNext className="bg-transparent" />
        </Carousel>

        <div className="portfolio-cta mt-20">
          <MagneticButton href="/portfolio" className="btn-primary">
            View All Case Studies
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
