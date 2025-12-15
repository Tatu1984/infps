import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, ArrowLeft, CheckCircle, MapPin, Clock, Shield, Users, AlertTriangle, BarChart3, Settings, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fleet Management - Enterprise Telematics Platform | Infiniti Tech Partners',
  description: 'Comprehensive fleet tracking solution with real-time GPS, ELD compliance, driver management, incident tracking, geofencing, and advanced analytics.',
  keywords: 'fleet management, telematics platform, GPS tracking, ELD compliance, driver management, geofencing, vehicle tracking, DOT compliance',
};

export default function FleetManagementPage() {
  const technologies = [
    'Next.js 16', 'TypeScript', 'Prisma ORM', 'PostgreSQL',
    'Leaflet.js', 'OpenStreetMap', 'Recharts', 'NextAuth v5', 'MQTT', 'Docker'
  ];

  const modules = [
    {
      icon: MapPin,
      title: 'Live GPS Tracking',
      description: 'Real-time vehicle positions on interactive maps with speed, heading, and driver assignment visibility.',
    },
    {
      icon: Clock,
      title: 'ELD Compliance',
      description: 'DOT-compliant Hours of Service tracking with 11-hour driving limit, break requirements, and violation alerts.',
    },
    {
      icon: Users,
      title: 'Driver Management',
      description: 'Complete driver profiles with CDL tracking, medical certification, safety scores, and trip statistics.',
    },
    {
      icon: AlertTriangle,
      title: 'Incident Management',
      description: 'Accident/breakdown reporting with severity classification, status workflow, and video evidence linking.',
    },
    {
      icon: Shield,
      title: 'Geofencing',
      description: 'Circle and polygon zone creation with entry/exit alerts, color-coded visualization, and alert history.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Trip statistics, fuel efficiency metrics, driver performance rankings, and fleet utilization reports.',
    },
  ];

  const userRoles = [
    { role: 'SaaS Admin', description: 'Full system access, manage all organizations' },
    { role: 'Subscriber Manager', description: 'Manage subscriptions and billing' },
    { role: 'SaaS Support', description: 'Customer support access' },
    { role: 'SaaS Developer', description: 'API and technical access' },
    { role: 'Company Admin', description: 'Full organization access' },
    { role: 'Fleet Manager', description: 'Manage vehicles, drivers, trips' },
    { role: 'Driver', description: 'View own data, ELD logs' },
    { role: 'Company Support', description: 'Read-only support access' },
  ];

  const eldFeatures = [
    '11-hour driving limit tracking',
    '14-hour on-duty limit monitoring',
    '30-minute break requirement alerts',
    '70-hour/8-day cycle tracking',
    'Log certification workflow',
    'Automatic violation detection',
    'Digital log export for audits',
    'DOT inspection mode',
  ];

  const completeFeatures = [
    'Vehicle Management & CRUD',
    'IoT Device Assignment',
    'Odometer & Engine Hours Tracking',
    'Service Scheduling',
    'Real-time GPS Positions',
    'Interactive Map Dashboard',
    'Geofence Zone Management',
    'Entry/Exit Alert System',
    'Driver Profile Management',
    'CDL Expiry Alerts',
    'Safety Score Calculation',
    'Trip & Mileage Statistics',
    'Incident Severity Classification',
    'Status Workflow Management',
    'Video Evidence Integration',
    'Trip Statistics & Trends',
    'Fuel Efficiency Metrics',
    'Driver Performance Rankings',
    'Fleet Utilization Reports',
    'Admin Panel for Organizations',
  ];

  const apiEndpoints = [
    { endpoint: '/api/vehicles', description: 'Vehicle CRUD operations' },
    { endpoint: '/api/drivers', description: 'Driver management' },
    { endpoint: '/api/incidents', description: 'Incident reporting' },
    { endpoint: '/api/eld', description: 'ELD log management' },
    { endpoint: '/api/geofences', description: 'Geofence management' },
    { endpoint: '/api/tracking', description: 'Real-time positions' },
    { endpoint: '/api/trips', description: 'Trip management' },
    { endpoint: '/api/analytics', description: 'Dashboard analytics' },
  ];

  const databaseModels = [
    'Organization', 'User', 'Session', 'AuditLog',
    'Vehicle', 'Driver', 'VehicleAssignment',
    'IOTDevice', 'VehicleLocation', 'VehicleTelemetry',
    'Trip', 'Route', 'ELDLog',
    'Incident', 'SafetyEvent', 'Video',
    'MaintenanceRecord', 'FuelRecord',
    'Geofence', 'Alert'
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
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}
                >
                  <Truck size={40} className="text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    IoT / Logistics / Telematics
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text">
                Fleet Management
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-primary/80 mb-6">
                Enterprise Telematics Platform
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Comprehensive, enterprise-grade telematics platform designed for fleet management companies. Features real-time vehicle tracking, DOT-compliant ELD, driver safety monitoring, incident management, geofencing, and advanced analytics—all production-ready.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-muted/30 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Database Models</p>
                  <p className="text-2xl font-bold text-foreground">20+</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">User Roles</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://telematics.infinititechpartners.com"
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
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070"
                alt="Fleet Management Platform"
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

      {/* Core Modules */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Core Modules
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div key={index} className="p-6 bg-background rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{module.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{module.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ELD Compliance */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
                DOT-Compliant ELD System
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Full Electronic Logging Device compliance with Hours of Service tracking. Automatically monitors driving time, on-duty limits, and break requirements to ensure your fleet stays DOT compliant.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {eldFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-primary flex-shrink-0" size={18} />
                    <span className="text-foreground/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl border border-primary/20">
              <h4 className="font-bold mb-4 text-foreground">HOS Regulations Tracked</h4>
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-xl">
                  <p className="text-primary font-bold">11-Hour Rule</p>
                  <p className="text-sm text-muted-foreground">Maximum driving time after 10 consecutive hours off duty</p>
                </div>
                <div className="p-4 bg-background rounded-xl">
                  <p className="text-primary font-bold">14-Hour Rule</p>
                  <p className="text-sm text-muted-foreground">Maximum on-duty window after coming on duty</p>
                </div>
                <div className="p-4 bg-background rounded-xl">
                  <p className="text-primary font-bold">30-Minute Break</p>
                  <p className="text-sm text-muted-foreground">Required break after 8 hours of driving</p>
                </div>
                <div className="p-4 bg-background rounded-xl">
                  <p className="text-primary font-bold">70-Hour Limit</p>
                  <p className="text-sm text-muted-foreground">Maximum duty hours in 8-day period</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Multi-Tenant User Roles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {userRoles.map((item, index) => (
              <div key={index} className="p-4 bg-background rounded-xl border border-primary/10">
                <h4 className="font-bold text-foreground mb-1">{item.role}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Features */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Complete Feature List
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {completeFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-muted/20 rounded-lg border border-primary/10">
                <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                <span className="text-foreground/90 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API & Database */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            API & Database Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* API Endpoints */}
            <div className="p-6 bg-background rounded-2xl border border-primary/20">
              <h3 className="text-xl font-bold mb-6 text-foreground">REST API Endpoints</h3>
              <div className="space-y-3">
                {apiEndpoints.map((api, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <code className="text-primary text-sm">{api.endpoint}</code>
                    <span className="text-xs text-muted-foreground">{api.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database Models */}
            <div className="p-6 bg-background rounded-2xl border border-primary/20">
              <h3 className="text-xl font-bold mb-6 text-foreground">Database Models (20+)</h3>
              <div className="flex flex-wrap gap-2">
                {databaseModels.map((model, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted/50 rounded-md text-sm text-foreground/80"
                  >
                    {model}
                  </span>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted/30 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Multi-Tenant Architecture:</strong> Organization-level data isolation with complete RBAC and audit logging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Security & Compliance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-muted/30 rounded-2xl border border-primary/20">
              <Settings size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Password Security</h3>
              <p className="text-sm text-muted-foreground">bcryptjs hashing with 12 rounds for maximum security</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl border border-primary/20">
              <Shield size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">JWT Authentication</h3>
              <p className="text-sm text-muted-foreground">24-hour session tokens with secure cookie handling</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl border border-primary/20">
              <Users size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Role-Based Access</h3>
              <p className="text-sm text-muted-foreground">Granular permissions with organization isolation</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl border border-primary/20">
              <AlertTriangle size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Input Validation</h3>
              <p className="text-sm text-muted-foreground">Zod schema validation on all API endpoints</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl border border-primary/20">
              <BarChart3 size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">SQL Injection Prevention</h3>
              <p className="text-sm text-muted-foreground">Prisma ORM with parameterized queries</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl border border-primary/20">
              <Clock size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">CSRF Protection</h3>
              <p className="text-sm text-muted-foreground">NextAuth built-in CSRF token handling</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Optimize Your Fleet?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Get a production-ready telematics platform with DOT compliance and enterprise-grade features
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://telematics.infinititechpartners.com"
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
