import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Store, ArrowLeft, CheckCircle, Users, Shield, Coins, Globe, Package, FileText, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Marketplace - B2B Commodity Trading Platform | Infiniti Tech Partners',
  description: 'Enterprise-grade B2B marketplace for commodity trading with producer management, tokenization, escrow payments, and blockchain integration.',
  keywords: 'B2B marketplace, commodity trading platform, blockchain marketplace, producer management, tokenization, escrow payments',
};

export default function MarketplacePage() {
  const technologies = [
    'Next.js 16', 'TypeScript', 'Prisma ORM', 'PostgreSQL',
    'Blockchain', 'JWT Auth', 'Stripe', 'AWS', 'Docker'
  ];

  const features = [
    {
      icon: Users,
      title: 'Producer Management',
      description: 'Complete producer onboarding with verification, KYC, parcel registration, and commodity tracking.',
    },
    {
      icon: Package,
      title: 'Listing & Orders',
      description: 'Full lifecycle management from draft listings to order fulfillment with status tracking.',
    },
    {
      icon: Coins,
      title: 'Tokenization',
      description: 'NFT and fungible token support for commodity assets with blockchain integration.',
    },
    {
      icon: Shield,
      title: 'Insurance & Hedging',
      description: 'Comprehensive risk management with crop, livestock, shipping, and carbon credit insurance.',
    },
    {
      icon: Globe,
      title: 'Multi-Currency Payments',
      description: 'Support for cards, bank transfers, mobile money, crypto, and escrow payments.',
    },
    {
      icon: FileText,
      title: 'Analytics Dashboard',
      description: 'Real-time statistics for producers, listings, orders, tokens, and revenue tracking.',
    },
  ];

  const userRoles = [
    { role: 'Super Admin', description: 'Full system access and configuration' },
    { role: 'Tenant Admin', description: 'Tenant-level administration' },
    { role: 'Producer', description: 'Create listings and manage profile' },
    { role: 'Buyer', description: 'Browse listings and create orders' },
    { role: 'Broker', description: 'Manage listings and orders' },
    { role: 'Validator', description: 'Verify producers and certificates' },
    { role: 'Finance', description: 'Manage payments and finances' },
    { role: 'Auditor', description: 'Read-only audit access' },
  ];

  const modules = [
    'Producer Registration & Verification',
    'Commodity Listing Management',
    'Order Processing & Tracking',
    'Payment Gateway Integration',
    'Tokenization Engine',
    'Insurance Policy Management',
    'Hedging & Futures Contracts',
    'Multi-tenant Architecture',
    'RESTful API with Documentation',
    'Admin Dashboard & Analytics',
    'Notification System',
    'Audit Logging',
  ];

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <section className="py-8 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-secondary/5 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                >
                  <Store size={40} className="text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    E-Commerce / Trading / Blockchain
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text">
                Marketplace
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-primary/80 mb-6">
                B2B Commodity Trading Platform
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Enterprise-grade B2B marketplace designed for commodity trading. Features complete producer management, multi-currency payments, tokenization, insurance modules, and blockchain integration for transparent, secure transactions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://mplc.infinititechpartners.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-bold transition-all hover:bg-primary hover:text-white"
                >
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070"
                alt="Marketplace Platform"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center gradient-text">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg bg-muted/50 text-foreground font-medium border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-6 bg-background rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            User Roles & Permissions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {userRoles.map((item, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-xl border border-primary/10">
                <h4 className="font-bold text-foreground mb-1">{item.role}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Modules */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Complete Module List
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((module, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-primary/10">
                <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                <span className="text-foreground/90">{module}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API & Integration */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
                API-First Architecture
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Built with a comprehensive RESTful API that supports all platform operations. Complete API documentation included with endpoints for authentication, producers, listings, orders, payments, and more.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground">50+ API Endpoints</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground">JWT Authentication</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground">Rate Limiting & Security</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground">Webhook Support</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl border border-primary/20">
              <pre className="text-sm text-foreground/80 overflow-x-auto">
{`// Example API Response
{
  "success": true,
  "data": {
    "producers": { "total": 150, "verified": 120 },
    "listings": { "total": 450, "active": 380 },
    "orders": { "total": 1200, "revenue": 1800000 },
    "tokens": { "total": 300, "minted": 280 }
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Launch Your Marketplace?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Get a production-ready commodity trading platform customized for your business needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://mplc.infinititechpartners.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
            >
              <ExternalLink size={20} />
              Try Live Demo
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-primary hover:text-white"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
