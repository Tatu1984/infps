import { ArrowRight, Users, Clock, TrendingUp, DollarSign, FileText, BarChart3, Shield, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "HRMS - Human Resource Management System | Infiniti Tech Partners",
  description: "Comprehensive HRMS solution for employee management, attendance tracking, payroll processing, and more. Manage your workforce efficiently.",
};

export default function HRMSProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
              HRMS Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Complete Human Resource Management System for modern businesses
            </p>
            <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
              Streamline employee management, attendance, payroll, projects, and more—all in one powerful platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://hrmsdemo-beta.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
              >
                Live Demo
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-3 bg-primary/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-primary/30 hover:border-white/50"
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
              Everything you need to manage your workforce effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Role-Based Access
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored experiences for every user in your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{role.title}</h3>
                <p className="text-muted-foreground mb-6">{role.description}</p>
                <ul className="text-left space-y-2">
                  {role.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Leveraging the latest web technologies for performance and reliability
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
      <section className="py-20 bg-gradient-to-r from-primary/40 to-secondary/40 relative">
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Experience the power of our HRMS platform today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://hrmsdemo-beta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
            >
              Access HRMS Now
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-primary/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-primary/30 hover:border-white/50"
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
    title: "Employee Management",
    description: "Complete employee profiles with KYC documents, department tracking, reporting hierarchy, and onboarding/offboarding workflows.",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Advanced Attendance",
    description: "Dual-heartbeat system with idle time detection, real-time activity monitoring, break tracking, and IP address logging.",
    icon: <Clock className="w-8 h-8 text-primary" />,
  },
  {
    title: "Suspicious Activity Detection",
    description: "Identifies bot/automation tools including mouse jigglers, auto-typers, and macros. Keystroke and mouse pattern analysis.",
    icon: <Shield className="w-8 h-8 text-primary" />,
  },
  {
    title: "Payroll Management",
    description: "Automated salary calculations with component-based structure (Basic, HRA, Medical), tax calculations, and printable payslips (3 per A4).",
    icon: <DollarSign className="w-8 h-8 text-primary" />,
  },
  {
    title: "Project & Task Management",
    description: "Project creation with milestones, task assignment, Azure DevOps & Asana integrations, and work item synchronization.",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
  },
  {
    title: "Sales CRM",
    description: "Lead management with pipeline stages, conversion tracking, sales target monitoring, and commission calculations.",
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Accounts & Invoicing",
    description: "Income and expense tracking, category-based accounting, invoice generation, multi-currency support, and financial reporting.",
    icon: <FileText className="w-8 h-8 text-primary" />,
  },
  {
    title: "Enterprise Security",
    description: "JWT with httpOnly cookies, bcrypt hashing, role-based access, granular permissions, CSRF/XSS protection, and complete audit logging.",
    icon: <Zap className="w-8 h-8 text-primary" />,
  },
];

const roles = [
  {
    title: "Admin Portal",
    description: "Complete control over the entire organization",
    features: [
      "Manage all employees and departments",
      "Process payroll and generate payslips",
      "Track attendance and approve leaves",
      "Manage projects and tasks",
      "Financial reporting and analytics",
      "System configuration and settings",
    ],
  },
  {
    title: "Manager Portal",
    description: "Oversee your team and projects effectively",
    features: [
      "View team attendance and performance",
      "Approve/reject leave requests",
      "Assign and track project tasks",
      "Monitor team productivity",
      "Access team reports",
    ],
  },
  {
    title: "Employee Portal",
    description: "Self-service portal for day-to-day tasks",
    features: [
      "Mark daily attendance",
      "Apply for leaves",
      "View payslips and salary details",
      "Track assigned tasks",
      "Update personal information",
    ],
  },
];

const techStack = [
  { name: "Next.js 15", icon: "⚡" },
  { name: "TypeScript", icon: "📘" },
  { name: "Prisma ORM", icon: "🔷" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Radix UI", icon: "🧩" },
  { name: "JWT Auth", icon: "🔐" },
  { name: "Vercel", icon: "▲" },
  { name: "React 19", icon: "⚛️" },
  { name: "Recharts", icon: "📊" },
];
