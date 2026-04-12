import {
  ParallaxLayer,
  SplitText,
  TiltCard,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui";
import { products } from "@/data/data";
import { Link } from "react-router-dom";

export const ProductsSection = () => {
  return (
    <section id="products" className="products">
      <div className="section-container">
        <ParallaxLayer speed={-0.2}>
          <div className="section-header">
            <span className="section-tag">Ready to Deploy</span>
            <h2 className="section-title">
              <SplitText text="Production-Ready" />
              <br />
              <SplitText text="Enterprise Platforms" className="accent" />
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '1rem auto 0', opacity: 0.7 }}>
              Deploy in weeks, not months. Battle-tested platforms with live demos.
            </p>
          </div>
        </ParallaxLayer>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mx-auto"
        >
          <CarouselContent>
            {products.map((product, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 gap-6">
                <div className="mx-4">
                  <TiltCard className="product-card m-2">
                    <Link to={`/products/${product.slug}`}>
                      <>
                        <div
                          className="product-visual"
                          style={{ background: product.gradient }}
                        >
                          <div className="product-icon-3d">
                            <div className="cube">
                              <div className="cube-face front" />
                              <div className="cube-face back" />
                              <div className="cube-face right" />
                              <div className="cube-face left" />
                              <div className="cube-face top" />
                              <div className="cube-face bottom" />
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <span className="product-tagline">
                            {product.tagline}
                          </span>
                          <h3 className="product-name">{product.name}</h3>
                          <p className="product-desc">{product.desc}</p>
                          <div className="product-features">
                            {product.features.map((f, j) => (
                              <span key={j} className="feature-tag">
                                {f}
                              </span>
                            ))}
                          </div>
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
      </div>
    </section>
  );
};
