import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, ArrowLeft, CheckCircle, Users, Shield, Search, Home, MapPin, CreditCard, Bell, Settings, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Real Estate - Property Listing & Management Platform | Infiniti Tech Partners',
  description: 'Advanced real estate platform with property listings, agent management, membership subscriptions, and comprehensive search similar to leading property portals.',
  keywords: 'real estate platform, property listing, property management, agent portal, membership subscription, property search',
};

export default function RealEstatePage() {
  const technologies = [
    'Next.js 16', 'TypeScript', 'Prisma ORM', 'PostgreSQL',
    'NextAuth', 'Stripe', 'Razorpay', 'Cloudinary', 'Tailwind CSS', 'Zod'
  ];

  const features = [
    {
      icon: Search,
      title: 'Advanced Search',
      description: 'Comprehensive search with locality, category, price range, and property type filters similar to MagicBricks.',
    },
    {
      icon: Home,
      title: 'Property Listings',
      description: 'Support for Sale, Rent, PG, and Roommates with featured, premium, and basic listing tiers.',
    },
    {
      icon: Users,
      title: 'Multi-User Roles',
      description: 'Property owners, developers/builders, consultants/brokers with dedicated dashboards and features.',
    },
    {
      icon: CreditCard,
      title: 'Membership Plans',
      description: 'Flexible subscription options for featured properties, agents, sellers, buyers, and builders.',
    },
    {
      icon: MapPin,
      title: 'Location Features',
      description: 'City listings, locality-wise property display, Google Maps integration, and zone-based advertisements.',
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Email and SMS integration for inquiries, alerts, reminders, and newsletter management.',
    },
  ];

  const userRoles = [
    { role: 'Admin', description: 'Full system access and configuration' },
    { role: 'Property Owner', description: 'List and manage own properties' },
    { role: 'Developer/Builder', description: 'Showcase projects and listings' },
    { role: 'Consultant/Broker', description: 'Manage client properties' },
    { role: 'Buyer', description: 'Search and inquire about properties' },
    { role: 'Visitor', description: 'Browse listings and search' },
  ];

  const frontendModules = [
    'City Listings in Menu',
    'Advanced Search (MagicBricks style)',
    'Property Gallery',
    'Developers Gallery',
    'Featured Projects',
    'Agents Gallery',
    'Popular Projects',
    'Featured Agents',
    'Registration (Individual/Member/Agents)',
    'Membership Subscription',
    'Locality-wise Property Display',
    'Post Requirement (Buy/Rent)',
  ];

  const searchFeatures = [
    'Search Listings (Basic/Featured/Premium)',
    'Locality and Category Filters',
    'Hot Zone Advertisements',
    'Prime Zone Advertisements',
    'Featured Zone Advertisements',
    'Featured Agents List',
  ];

  const propertyDetails = [
    'Property Type (Sell, Rent, PG, Roommates)',
    'Property Category',
    'Build-up Area & Carpet Area',
    'Plot/Land Area',
    'Price & Bedrooms/Bathrooms',
    'Property Images & Gallery',
    'Location Map Integration',
    'YouTube Video Embed',
    'Property Description & Amenities',
    'Visitor Statistics',
    'Contact Form (Email & SMS)',
    'Add to Favorites & Share',
  ];

  const adminModules = [
    'Content Management (Add/Edit/Delete)',
    'Member Management',
    'Property Management',
    'Inquiry Management',
    'News Management',
    'FAQ Management',
    'Newsletter Management',
    'SMS Gateway Management',
    'Banner Management',
    'Site Settings',
    'Dynamic Membership Options',
    'Advertisement Management',
    'Order Tracking',
    'SEO Settings (Dynamic Meta)',
    'Reminder & Alert Management',
    'User Override Settings',
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
                  style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}
                >
                  <Building2 size={40} className="text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    Real Estate / Property / Marketplace
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text">
                Real Estate
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-primary/80 mb-6">
                Property Listing & Management Platform
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Advanced real estate platform designed for property listings and management. Features comprehensive search functionality similar to MagicBricks, multi-role user management, membership subscriptions, and integrated payment gateways for a complete property marketplace solution.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://realestate-eight-kappa.vercel.app"
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
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073"
                alt="Real Estate Platform"
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
            User Roles & Access
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userRoles.map((item, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-xl border border-primary/10">
                <h4 className="font-bold text-foreground mb-1">{item.role}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frontend Modules */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Frontend Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {frontendModules.map((module, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-primary/10">
                <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                <span className="text-foreground/90">{module}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Listing Features */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Search Features */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-8 gradient-text">
                Search Page Features
              </h2>
              <div className="space-y-3">
                {searchFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-8 gradient-text">
                Property Details Page
              </h2>
              <div className="space-y-3">
                {propertyDetails.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-foreground/90">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Panel */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Admin Panel Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {adminModules.map((module, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-primary/10">
                <Settings className="text-primary mt-0.5 flex-shrink-0" size={18} />
                <span className="text-foreground/90 text-sm">{module}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
                Flexible Membership Plans
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Monetize your platform with dynamic membership options. Create and manage subscription tiers for different user types with full control over pricing and features.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground">Featured Property Listings</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground">Featured Agent Profiles</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground">Featured Seller/Buyer Badges</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground">Featured Builder Showcases</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground">Premium Property Placement</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl border border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-foreground">Membership Tiers</h3>
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-foreground">Basic</h4>
                  <p className="text-sm text-muted-foreground">Standard property listings with basic visibility</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-primary/30">
                  <h4 className="font-semibold text-primary">Featured</h4>
                  <p className="text-sm text-muted-foreground">Enhanced visibility in search results and galleries</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/40">
                  <h4 className="font-semibold text-primary">Premium</h4>
                  <p className="text-sm text-muted-foreground">Top placement, priority support, and all features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Integrations & APIs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-background rounded-2xl border border-primary/20 text-center">
              <CreditCard className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-bold text-foreground mb-2">Payment Gateways</h3>
              <p className="text-sm text-muted-foreground">Stripe & Razorpay integration</p>
            </div>
            <div className="p-6 bg-background rounded-2xl border border-primary/20 text-center">
              <MapPin className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-bold text-foreground mb-2">Google Maps</h3>
              <p className="text-sm text-muted-foreground">Location display & search</p>
            </div>
            <div className="p-6 bg-background rounded-2xl border border-primary/20 text-center">
              <Bell className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-bold text-foreground mb-2">SMS Gateway</h3>
              <p className="text-sm text-muted-foreground">Notifications & alerts</p>
            </div>
            <div className="p-6 bg-background rounded-2xl border border-primary/20 text-center">
              <Shield className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-bold text-foreground mb-2">Cloudinary</h3>
              <p className="text-sm text-muted-foreground">Image storage & optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Launch Your Property Platform?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Get a production-ready real estate marketplace customized for your business needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://realestate-eight-kappa.vercel.app"
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
