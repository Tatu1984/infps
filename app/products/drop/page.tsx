import { ArrowRight, ShoppingBag, Users, MapPin, CreditCard, Bell, Utensils, Truck, BarChart3, Shield, Clock, Package } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Drop - Multi-Sided Delivery Platform | Infiniti Tech Partners",
  description: "Comprehensive hyperlocal delivery platform for food, groceries, and services. Complete with vendor management, rider logistics, party mode, and restaurant management system.",
};

export default function DropProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-orange-600/20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
              Drop Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Multi-Sided Delivery & Commerce Platform
            </p>
            <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
              Complete hyperlocal marketplace for food, groceries, alcohol, and services—with dedicated portals for customers, vendors, riders, and admins
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
              >
                Request Demo
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-3 bg-orange-500/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-orange-500/30 hover:border-white/50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a hyperlocal delivery marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="bg-orange-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Portals Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Four Dedicated Portals
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored experiences for every stakeholder in your marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portals.map((portal, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  {portal.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{portal.title}</h3>
                <p className="text-muted-foreground mb-6">{portal.description}</p>
                <ul className="space-y-2">
                  {portal.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Management System */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built-in Restaurant Management
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete RMS for dine-in operations, kitchen management, and inventory control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rmsFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all hover:scale-105"
              >
                <div className="bg-orange-500/10 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade stack for scalability and performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h4 className="font-bold text-sm">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/40 to-amber-500/40 relative">
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
            Ready to Launch Your Marketplace?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Experience the power of Drop platform today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://drop-three-dun.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
            >
              View Live Demo
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-orange-500/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-orange-500/30 hover:border-white/50"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Multi-Vendor Marketplace",
    description: "Support restaurants, grocery stores, pharmacies, wine shops, and more. Complete vendor onboarding, verification, and management.",
    icon: <ShoppingBag className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Real-Time Tracking",
    description: "Live GPS tracking for deliveries with Socket.io, rider location updates, and accurate ETA calculations for customers.",
    icon: <MapPin className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Party Mode",
    description: "Collaborative group ordering with split billing (equal, by item, by seat, custom), shared carts, and party event scheduling.",
    icon: <Users className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Advanced Payments",
    description: "Razorpay integration with cards, UPI, wallets, COD, and gift cards. Subscription plans and loyalty points system.",
    icon: <CreditCard className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Genie Service",
    description: "Multi-purpose pickup & drop service with multi-stop delivery, return orders, and distance-based pricing.",
    icon: <Package className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Rider Management",
    description: "Complete rider portal with earnings tracking, document verification, zone assignments, and performance analytics.",
    icon: <Truck className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Smart Notifications",
    description: "Push, email, and SMS notifications via Twilio and SendGrid. Real-time order updates and promotional campaigns.",
    icon: <Bell className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Zone & Surge Pricing",
    description: "Geographic zone management with GeoJSON polygons, zone-specific delivery fees, and automatic surge pricing.",
    icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Enterprise Security",
    description: "JWT authentication, bcrypt hashing, rate limiting, CORS, and complete audit logging for compliance.",
    icon: <Shield className="w-8 h-8 text-orange-500" />,
  },
];

const portals = [
  {
    title: "Customer Portal",
    description: "Complete shopping experience for end users",
    icon: <Users className="w-10 h-10 text-orange-500" />,
    features: [
      "Browse restaurants, grocery, pharmacy, and more",
      "Real-time order tracking with GPS",
      "Multiple payment methods and wallet",
      "Party mode for group orders",
      "Loyalty points and subscriptions",
      "Order history and re-ordering",
    ],
  },
  {
    title: "Vendor Portal",
    description: "Powerful tools for merchants and restaurants",
    icon: <Utensils className="w-10 h-10 text-orange-500" />,
    features: [
      "Order management and status updates",
      "Menu and product management",
      "Multi-outlet support",
      "Inventory and stock tracking",
      "Analytics and earnings reports",
      "Kitchen Display System (KDS)",
    ],
  },
  {
    title: "Rider Portal",
    description: "Efficient delivery management for drivers",
    icon: <Truck className="w-10 h-10 text-orange-500" />,
    features: [
      "Accept/reject delivery requests",
      "GPS navigation and route optimization",
      "Earnings and payout tracking",
      "Document upload and verification",
      "Performance metrics and ratings",
      "Online/offline availability toggle",
    ],
  },
  {
    title: "Admin Dashboard",
    description: "Complete platform control center",
    icon: <BarChart3 className="w-10 h-10 text-orange-500" />,
    features: [
      "Real-time platform metrics",
      "Vendor and rider approval workflows",
      "Zone and pricing configuration",
      "Marketing campaigns management",
      "Support ticket system",
      "Financial reports and payouts",
    ],
  },
];

const rmsFeatures = [
  {
    title: "Table Management",
    description: "Floor plans, table zones, and reservations",
    icon: <Utensils className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Kitchen Display",
    description: "KDS with cooking stations and tickets",
    icon: <Clock className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Inventory Control",
    description: "Stock tracking, batches, and procurement",
    icon: <Package className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Staff Management",
    description: "Shifts, scheduling, and time tracking",
    icon: <Users className="w-6 h-6 text-orange-500" />,
  },
];

const techStack = [
  { name: "Next.js 16", icon: "⚡" },
  { name: "React 19", icon: "⚛️" },
  { name: "Prisma ORM", icon: "🔷" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Socket.io", icon: "🔌" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Razorpay", icon: "💳" },
  { name: "Leaflet.js", icon: "🗺️" },
  { name: "Zustand", icon: "🐻" },
  { name: "Twilio", icon: "📱" },
];
