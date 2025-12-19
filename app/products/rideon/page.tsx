import { ArrowRight, Car, Users, MapPin, CreditCard, Bell, Smartphone, Shield, BarChart3, Navigation, Clock, Wallet } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "RideOn - Complete Ride-Hailing Platform | Infiniti Tech Partners",
  description: "Full-featured Uber-like ride-hailing solution with rider/driver mobile apps, admin dashboard, real-time GPS tracking, payments, and driver management.",
};

export default function RideOnProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-teal-500/20 via-emerald-500/20 to-teal-600/20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
              RideOn Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Complete Ride-Hailing Solution
            </p>
            <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
              Launch your own Uber-like service with mobile apps for riders and drivers, real-time tracking, payments, and a powerful admin dashboard
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://rideon-admin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
              >
                Live Demo
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-3 bg-teal-500/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-teal-500/30 hover:border-white/50"
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
              Everything you need to run a ride-hailing service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="bg-teal-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Components */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Complete Platform Stack
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Five integrated applications for your ride-hailing business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{platform.title}</h3>
                <p className="text-sm text-teal-600 font-medium mb-4">{platform.type}</p>
                <p className="text-muted-foreground mb-6">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Time Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Real-Time Capabilities
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Powered by WebSocket for instant communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realTimeFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all hover:scale-105"
              >
                <div className="bg-teal-500/10 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
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
              Enterprise-grade stack for web and mobile
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
      <section className="py-20 bg-gradient-to-r from-teal-500/40 to-emerald-500/40 relative">
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
            Ready to Launch Your Ride-Hailing Service?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Experience the power of RideOn platform today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://rideon-admin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-teal-600 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
            >
              View Admin Demo
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-teal-500/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-teal-500/30 hover:border-white/50"
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
    title: "Real-Time GPS Tracking",
    description: "Live driver location streaming with accurate ETAs, route visualization, and geospatial queries powered by PostGIS.",
    icon: <MapPin className="w-8 h-8 text-teal-500" />,
  },
  {
    title: "Native Mobile Apps",
    description: "React Native apps for both riders and drivers with Expo, supporting iOS and Android with push notifications.",
    icon: <Smartphone className="w-8 h-8 text-teal-500" />,
  },
  {
    title: "Stripe Payments",
    description: "Secure payment processing with card tokenization, 3D Secure, multiple payment methods, and automatic refunds.",
    icon: <CreditCard className="w-8 h-8 text-teal-500" />,
  },
  {
    title: "Driver Management",
    description: "Complete driver lifecycle from onboarding to payouts. Document verification, performance tracking, and earnings management.",
    icon: <Users className="w-8 h-8 text-teal-500" />,
  },
  {
    title: "Smart Notifications",
    description: "Push notifications for mobile apps, email via SendGrid, and SMS via Twilio. Real-time ride status updates.",
    icon: <Bell className="w-8 h-8 text-teal-500" />,
  },
  {
    title: "Surge Pricing",
    description: "Dynamic pricing based on demand with manual and automatic surge controls. Zone-based pricing configuration.",
    icon: <BarChart3 className="w-8 h-8 text-teal-500" />,
  },
  {
    title: "Enterprise Security",
    description: "JWT authentication with refresh tokens, bcrypt hashing, rate limiting, and brute force protection.",
    icon: <Shield className="w-8 h-8 text-teal-500" />,
  },
  {
    title: "Promo Codes",
    description: "Create and manage discount codes with usage limits, expiry dates, and targeted promotions.",
    icon: <Wallet className="w-8 h-8 text-teal-500" />,
  },
  {
    title: "Support System",
    description: "Built-in ticket system for customer support with assignment, chat responses, and issue tracking.",
    icon: <Clock className="w-8 h-8 text-teal-500" />,
  },
];

const platforms = [
  {
    title: "Rider Mobile App",
    type: "React Native / Expo",
    description: "Full-featured app for passengers to book rides",
    icon: <Smartphone className="w-10 h-10 text-teal-500" />,
    features: [
      "One-tap ride booking",
      "Real-time driver tracking",
      "Fare estimation",
      "Multiple payment methods",
      "Trip history and receipts",
      "Emergency SOS button",
    ],
  },
  {
    title: "Driver Mobile App",
    type: "React Native / Expo",
    description: "Powerful app for drivers to manage rides",
    icon: <Car className="w-10 h-10 text-teal-500" />,
    features: [
      "Accept/decline ride requests",
      "Turn-by-turn navigation",
      "Earnings and payout tracking",
      "Online/offline toggle",
      "Document management",
      "Performance analytics",
    ],
  },
  {
    title: "Rider Web App",
    type: "Next.js",
    description: "Web booking interface for desktop users",
    icon: <Navigation className="w-10 h-10 text-teal-500" />,
    features: [
      "Map-based ride booking",
      "Account management",
      "Trip history",
      "Payment methods",
      "Profile settings",
    ],
  },
  {
    title: "Admin Dashboard",
    type: "Next.js",
    description: "Complete platform management interface",
    icon: <BarChart3 className="w-10 h-10 text-teal-500" />,
    features: [
      "Real-time metrics dashboard",
      "Driver verification workflow",
      "Trip monitoring",
      "Pricing and surge config",
      "Analytics and reports",
      "Support ticket management",
    ],
  },
  {
    title: "Backend API",
    type: "Node.js / Express",
    description: "Scalable REST API powering all applications",
    icon: <Shield className="w-10 h-10 text-teal-500" />,
    features: [
      "22 database models",
      "Socket.io real-time",
      "Stripe integration",
      "PostGIS geospatial",
      "Redis caching",
      "Bull job queues",
    ],
  },
];

const realTimeFeatures = [
  {
    title: "Live Location",
    description: "Stream driver GPS coordinates in real-time",
    icon: <MapPin className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "Ride Updates",
    description: "Instant status changes for all parties",
    icon: <Bell className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "New Requests",
    description: "Push ride requests to nearby drivers",
    icon: <Car className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "Auto Reconnect",
    description: "Reliable connection with automatic recovery",
    icon: <Navigation className="w-6 h-6 text-teal-500" />,
  },
];

const techStack = [
  { name: "Next.js", icon: "⚡" },
  { name: "React Native", icon: "📱" },
  { name: "Expo", icon: "🚀" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "PostGIS", icon: "🗺️" },
  { name: "Socket.io", icon: "🔌" },
  { name: "Stripe", icon: "💳" },
  { name: "Redis", icon: "🔴" },
  { name: "Leaflet.js", icon: "🌍" },
];
