import { PORTFOLIO_ITEMS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPreview() {
  // Show only first 3 items
  const featuredProjects = PORTFOLIO_ITEMS.slice(0, 3);

  return (
    <section className="py-32 bg-background/30 relative z-10">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse range of successful projects across industries
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl overflow-hidden bg-muted/20 border border-primary/20 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 card-hover"
            >
              {/* Project Image/Gradient */}
              <div
                className="h-48 flex items-center justify-center text-5xl relative overflow-hidden"
                style={{ background: item.image }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                <span className="relative z-10 transform group-hover:scale-110 transition-transform">
                  💼
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-3">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
