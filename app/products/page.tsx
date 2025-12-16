'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Store, Calculator, GraduationCap, Truck, Building2 } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      title: 'Marketplace',
      subtitle: 'B2B Commodity Trading Platform',
      category: 'E-Commerce / Trading / Blockchain',
      slug: 'marketplace',
      icon: Store,
      color: '#10b981',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070',
      description: 'Enterprise-grade B2B marketplace for commodity trading with producer management, tokenization, escrow payments, and blockchain integration.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Blockchain', 'AWS', 'Stripe'],
      highlights: 'Multi-role access, tokenization, insurance & hedging modules',
    },
    {
      title: 'Accubooks',
      subtitle: 'Enterprise Accounting Platform',
      category: 'Finance / ERP / Accounting',
      slug: 'accubooks',
      icon: Calculator,
      color: '#3b82f6',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011',
      description: 'Comprehensive multi-tenant accounting solution with double-entry bookkeeping, inventory management, HR & payroll, GST compliance, and financial reporting.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Zustand', 'Recharts', 'Zod'],
      highlights: '57 database models, 70+ permissions, full audit trail',
    },
    {
      title: 'School ERP',
      subtitle: 'Complete School Management System',
      category: 'Education / ERP / Management',
      slug: 'school-erp',
      icon: GraduationCap,
      color: '#f59e0b',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2032',
      description: 'End-to-end school management platform covering admissions, academics, attendance, fee management, transport, library, and parent communication.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io', 'AWS'],
      highlights: 'Multi-branch support, real-time notifications, mobile apps',
    },
    {
      title: 'Fleet Management',
      subtitle: 'Enterprise Telematics Platform',
      category: 'IoT / Logistics / Telematics',
      slug: 'fleet-management',
      icon: Truck,
      color: '#8b5cf6',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070',
      description: 'Comprehensive fleet tracking solution with real-time GPS, ELD compliance, driver management, incident tracking, geofencing, and advanced analytics.',
      technologies: ['Next.js', 'Prisma', 'Leaflet.js', 'Recharts', 'NextAuth', 'PostgreSQL'],
      highlights: 'DOT compliance, 8 user roles, live GPS tracking',
    },
    {
      title: 'Real Estate',
      subtitle: 'Property Listing & Management Platform',
      category: 'Real Estate / Property / Marketplace',
      slug: 'realestate',
      icon: Building2,
      color: '#ec4899',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073',
      description: 'Advanced real estate platform with property listings, agent management, membership subscriptions, and comprehensive search similar to leading property portals.',
      technologies: ['Next.js 16', 'Prisma', 'PostgreSQL', 'NextAuth', 'Stripe', 'Cloudinary'],
      highlights: 'Multi-role access, membership plans, SMS & email integration',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-secondary/5 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 gradient-text fade-in-up">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
            Production-ready enterprise solutions built with modern technologies—<span className="font-semibold text-foreground">ready to deploy and scale</span>.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Link
                  key={index}
                  href={`/products/${product.slug}`}
                  className="group rounded-3xl overflow-hidden bg-background border-2 border-muted hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10"
                >
                  {/* Product Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 z-10 group-hover:from-black/30 group-hover:to-black/50 transition-all" />
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Icon Overlay */}
                    <div className="absolute top-6 left-6 z-20">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${product.color}, ${product.color}dd)` }}
                      >
                        <Icon size={32} className="text-white" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-6 right-6 z-20">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-black text-xs font-semibold">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-lg text-primary/80 font-semibold mb-4">
                      {product.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-3 py-1 rounded-md bg-muted/50 text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                      <p className="text-sm font-semibold text-primary mb-1">Highlights</p>
                      <p className="text-sm text-foreground/90">{product.highlights}</p>
                    </div>

                    {/* View Details Link */}
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      View Product Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Our products are production-ready and can be customized to fit your specific needs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
