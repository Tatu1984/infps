import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calculator, ArrowLeft, CheckCircle, BookOpen, Users, FileText, TrendingUp, Shield, Building, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accubooks - Enterprise Accounting Platform | Infiniti Tech Partners',
  description: 'Comprehensive multi-tenant accounting solution with double-entry bookkeeping, inventory management, HR & payroll, GST compliance, and financial reporting.',
  keywords: 'accounting software, enterprise ERP, double-entry bookkeeping, GST compliance, inventory management, HR payroll, financial reporting',
};

export default function AccubooksPage() {
  const technologies = [
    'Next.js 16', 'TypeScript', 'Prisma ORM', 'PostgreSQL',
    'Zustand', 'TanStack Query', 'Recharts', 'Radix UI', 'Zod', 'NextAuth'
  ];

  const modules = [
    {
      icon: BookOpen,
      title: 'Chart of Accounts',
      description: 'Complete ledger management with hierarchical groups, opening balances, and multi-level account structure.',
    },
    {
      icon: FileText,
      title: 'Voucher Management',
      description: 'Double-entry journal system with payment, receipt, contra, and journal vouchers with auto-numbering.',
    },
    {
      icon: TrendingUp,
      title: 'Financial Reports',
      description: 'Profit & Loss, Balance Sheet, Cash Flow, Trial Balance, and Aging reports with drill-down.',
    },
    {
      icon: Building,
      title: 'Inventory Control',
      description: 'Multi-warehouse stock management with batch tracking, FIFO/LIFO/Weighted Average valuation.',
    },
    {
      icon: Users,
      title: 'HR & Payroll',
      description: 'Employee management, attendance tracking, leave management, salary structures, and payslip generation.',
    },
    {
      icon: Shield,
      title: 'GST & Taxation',
      description: 'Indian GST compliance with GSTR-1, GSTR-3B filing, TDS/TCS management, and tax reports.',
    },
  ];

  const dashboardPages = [
    'Main Dashboard with KPIs',
    'Chart of Accounts',
    'Ledger Management',
    'Voucher Entry & Listing',
    'Sales Invoices & Orders',
    'Purchase Bills & Orders',
    'Quotation Management',
    'Receipt & Payment Tracking',
    'Inventory Items & Stock',
    'Warehouse Management',
    'Employee Directory',
    'Attendance & Leave Tracking',
    'Payroll Processing',
    'Expense Claims',
    'Bank Reconciliation',
    'GST Returns',
    'User & Role Management',
    'Audit Logs',
  ];

  const apiEndpoints = [
    { category: 'Masters', count: '15+', examples: 'Ledgers, Parties, Items, Warehouses' },
    { category: 'Transactions', count: '20+', examples: 'Vouchers, Invoices, Bills, Orders' },
    { category: 'HR & Payroll', count: '10+', examples: 'Employees, Attendance, Payroll' },
    { category: 'Reports', count: '8+', examples: 'P&L, Balance Sheet, Aging, Cash Flow' },
  ];

  const highlights = [
    '57 Database Models',
    '50+ API Endpoints',
    '70+ Permissions',
    'Multi-Branch Support',
    'Multi-Currency',
    'Fiscal Year Management',
    'Budget Tracking',
    'Cost Centers & Projects',
    'Approval Workflows',
    'Complete Audit Trail',
    'Role-Based Access',
    'Organization Isolation',
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
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
                >
                  <Calculator size={40} className="text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    Finance / ERP / Accounting
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text">
                Accubooks
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-primary/80 mb-6">
                Enterprise Accounting Platform
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A comprehensive multi-tenant accounting solution built for modern businesses. Features double-entry bookkeeping, complete inventory management, HR & payroll processing, Indian GST compliance, and powerful financial reporting—all in one unified platform.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://accubook.infinititechpartners.com"
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
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011"
                alt="Accubooks Platform"
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

      {/* Platform Highlights */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Platform Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-primary/10">
                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Pages */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Complete Dashboard Pages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dashboardPages.map((page, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-primary/10">
                <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={18} />
                <span className="text-foreground/90">{page}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            API Architecture
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiEndpoints.map((api, index) => (
              <div key={index} className="p-6 bg-muted/30 rounded-2xl border border-primary/20 text-center">
                <p className="text-4xl font-extrabold text-primary mb-2">{api.count}</p>
                <p className="text-lg font-bold text-foreground mb-2">{api.category}</p>
                <p className="text-sm text-muted-foreground">{api.examples}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-muted/30 rounded-2xl border border-primary/20">
            <h3 className="text-xl font-bold mb-4 text-foreground">API Route Pattern</h3>
            <pre className="text-sm text-foreground/80 overflow-x-auto bg-background p-4 rounded-xl">
{`// Organization-scoped endpoints
/api/organizations/[orgId]/ledgers
/api/organizations/[orgId]/vouchers
/api/organizations/[orgId]/invoices
/api/organizations/[orgId]/employees
/api/organizations/[orgId]/reports/profit-loss
/api/organizations/[orgId]/reports/balance-sheet`}
            </pre>
          </div>
        </div>
      </section>

      {/* Double-Entry System */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
                True Double-Entry Bookkeeping
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Built on fundamental accounting principles with automatic debit-credit balancing, multi-line voucher entries, and real-time ledger updates. Every transaction maintains the accounting equation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground">Automatic Debit = Credit Validation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground">Multi-line Voucher Entries</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground">Real-time Ledger Balance Updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-foreground">Auto-generated Voucher Numbers</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-background rounded-2xl border border-primary/20">
              <h4 className="font-bold mb-4 text-foreground">Voucher Creation Flow</h4>
              <pre className="text-sm text-muted-foreground overflow-x-auto">
{`1. Validate: totalDebit === totalCredit
2. Generate: voucherNumber (auto-increment)
3. Create: Voucher record
4. Create: VoucherEntry records
5. Update: Ledger.currentBalance
6. Return: Created voucher`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Transform Your Accounting Operations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Get a production-ready accounting platform with all the features modern businesses need
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://accubook.infinititechpartners.com"
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
