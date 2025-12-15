'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Store, Calculator, GraduationCap, Truck } from 'lucide-react';

export default function ProductsPreview() {
  const products = [
    {
      title: 'Marketplace',
      subtitle: 'B2B Commodity Trading',
      slug: 'marketplace',
      icon: Store,
      color: '#10b981',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070',
      description: 'Enterprise B2B marketplace with tokenization, escrow payments, and blockchain integration.',
    },
    {
      title: 'Accubooks',
      subtitle: 'Enterprise Accounting',
      slug: 'accubooks',
      icon: Calculator,
      color: '#3b82f6',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011',
      description: 'Multi-tenant accounting with double-entry bookkeeping, inventory, HR & payroll.',
    },
    {
      title: 'School ERP',
      subtitle: 'School Management',
      slug: 'school-erp',
      icon: GraduationCap,
      color: '#f59e0b',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2032',
      description: 'Complete school management covering admissions, academics, fees, and transport.',
    },
    {
      title: 'Fleet Management',
      subtitle: 'Enterprise Telematics',
      slug: 'fleet-management',
      icon: Truck,
      color: '#8b5cf6',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070',
      description: 'Real-time GPS tracking, ELD compliance, driver management, and analytics.',
    },
  ];

  return (
    <section className="py-32 bg-background relative z-10">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production-ready enterprise solutions built with modern technologies
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Link
                key={index}
                href={`/products/${product.slug}`}
                className="group rounded-2xl overflow-hidden bg-background border-2 border-muted hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Product Image */}
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 z-10 group-hover:from-black/30 group-hover:to-black/50 transition-all" />
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 z-20">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${product.color}, ${product.color}dd)` }}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-primary/80 font-semibold mb-2">
                    {product.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
          >
            View All Products
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
