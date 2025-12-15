import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, ArrowLeft, CheckCircle, Users, Calendar, CreditCard, Bus, BookOpen, Bell, ClipboardList, BarChart, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'School ERP - Complete School Management System | Infiniti Tech Partners',
  description: 'End-to-end school management platform covering admissions, academics, attendance, fee management, transport, library, and parent communication.',
  keywords: 'school ERP, school management system, student information system, fee management, attendance tracking, academic management, parent portal',
};

export default function SchoolERPPage() {
  const technologies = [
    'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL',
    'Redis', 'Socket.io', 'AWS', 'React Native', 'PWA'
  ];

  const modules = [
    {
      icon: Users,
      title: 'Student Management',
      description: 'Complete student lifecycle from admission to alumni. Profiles, documents, academic history, and family information.',
    },
    {
      icon: BookOpen,
      title: 'Academic Management',
      description: 'Class scheduling, subject allocation, exam management, grading system, and report card generation.',
    },
    {
      icon: Calendar,
      title: 'Attendance System',
      description: 'Daily attendance tracking with biometric/RFID integration, leave management, and automated parent alerts.',
    },
    {
      icon: CreditCard,
      title: 'Fee Management',
      description: 'Fee structure setup, invoice generation, payment gateway integration, and receipt management.',
    },
    {
      icon: Bus,
      title: 'Transport Management',
      description: 'Route planning, vehicle tracking, driver management, and pickup/drop notifications.',
    },
    {
      icon: Bell,
      title: 'Communication Hub',
      description: 'SMS, email, and push notifications for parents. Announcements, circulars, and event updates.',
    },
  ];

  const userPortals = [
    {
      title: 'Admin Portal',
      features: ['Complete system configuration', 'User management', 'Reports & analytics', 'Fee structure management', 'Staff management'],
    },
    {
      title: 'Teacher Portal',
      features: ['Class management', 'Attendance marking', 'Grade entry', 'Assignment creation', 'Student progress tracking'],
    },
    {
      title: 'Parent Portal',
      features: ['Child\'s attendance & grades', 'Fee payment', 'Communication with teachers', 'Event calendar', 'Transport tracking'],
    },
    {
      title: 'Student Portal',
      features: ['Timetable view', 'Assignment submission', 'Exam results', 'Library access', 'Notifications'],
    },
  ];

  const completeFeatures = [
    'Multi-branch School Support',
    'Online Admission Portal',
    'Document Management System',
    'Timetable Scheduler',
    'Exam & Grade Management',
    'Report Card Generator',
    'Library Management',
    'Hostel Management',
    'Inventory & Assets',
    'HR & Payroll for Staff',
    'Online Fee Payment',
    'Financial Reports',
    'SMS & Email Integration',
    'Mobile Apps (iOS & Android)',
    'Parent-Teacher Communication',
    'Event & Calendar Management',
    'Homework & Assignments',
    'Online Classes Integration',
  ];

  const highlights = [
    { label: 'User Roles', value: '10+' },
    { label: 'Modules', value: '25+' },
    { label: 'Reports', value: '50+' },
    { label: 'API Endpoints', value: '100+' },
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
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
                >
                  <GraduationCap size={40} className="text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    Education / ERP / Management
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text">
                School ERP
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-primary/80 mb-6">
                Complete School Management System
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                End-to-end school management platform that streamlines every aspect of educational institution operations. From admissions to academics, attendance to fee collection, transport to parent communication—all unified in one powerful system.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://school.infinititechpartners.com"
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
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2032"
                alt="School ERP Platform"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="text-center p-6 bg-muted/30 rounded-2xl border border-primary/20">
                <p className="text-4xl font-extrabold text-primary mb-2">{item.value}</p>
                <p className="text-foreground font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center gradient-text">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg bg-background text-foreground font-medium border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Core Modules
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div key={index} className="p-6 bg-muted/20 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
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

      {/* User Portals */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Role-Based Portals
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userPortals.map((portal, index) => (
              <div key={index} className="p-6 bg-background rounded-2xl border-2 border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-primary">{portal.title}</h3>
                <ul className="space-y-2">
                  {portal.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Feature List */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Complete Feature List
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completeFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/20 rounded-xl border border-primary/10">
                <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={18} />
                <span className="text-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
                Mobile Apps Included
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Native mobile applications for parents, teachers, and students. Stay connected with real-time notifications, attendance updates, and instant communication.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-xl border border-primary/20">
                  <h4 className="font-bold text-foreground mb-2">Parent App</h4>
                  <p className="text-sm text-muted-foreground">Track attendance, view grades, pay fees, receive notifications, and communicate with teachers.</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-primary/20">
                  <h4 className="font-bold text-foreground mb-2">Teacher App</h4>
                  <p className="text-sm text-muted-foreground">Mark attendance, enter grades, manage assignments, and send announcements on the go.</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-primary/20">
                  <h4 className="font-bold text-foreground mb-2">Transport App</h4>
                  <p className="text-sm text-muted-foreground">Real-time bus tracking, route information, and pickup/drop notifications for parents.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-background rounded-2xl border border-primary/20 text-center">
                <ClipboardList size={48} className="text-primary mx-auto mb-4" />
                <p className="font-bold text-foreground">iOS App</p>
                <p className="text-sm text-muted-foreground">Available on App Store</p>
              </div>
              <div className="p-6 bg-background rounded-2xl border border-primary/20 text-center">
                <ClipboardList size={48} className="text-primary mx-auto mb-4" />
                <p className="font-bold text-foreground">Android App</p>
                <p className="text-sm text-muted-foreground">Available on Play Store</p>
              </div>
              <div className="col-span-2 p-6 bg-background rounded-2xl border border-primary/20 text-center">
                <BarChart size={48} className="text-primary mx-auto mb-4" />
                <p className="font-bold text-foreground">Progressive Web App</p>
                <p className="text-sm text-muted-foreground">Works on any device with a browser</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Integration Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-muted/30 rounded-2xl border border-primary/20 text-center">
              <p className="text-2xl font-bold text-primary mb-2">Payment Gateways</p>
              <p className="text-sm text-muted-foreground">Razorpay, Stripe, PayU, and more</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl border border-primary/20 text-center">
              <p className="text-2xl font-bold text-primary mb-2">SMS Providers</p>
              <p className="text-sm text-muted-foreground">Twilio, MSG91, and local providers</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl border border-primary/20 text-center">
              <p className="text-2xl font-bold text-primary mb-2">Biometric Systems</p>
              <p className="text-sm text-muted-foreground">Attendance hardware integration</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl border border-primary/20 text-center">
              <p className="text-2xl font-bold text-primary mb-2">Video Conferencing</p>
              <p className="text-sm text-muted-foreground">Zoom, Google Meet integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Modernize Your School Operations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Join hundreds of schools already using our platform to streamline their operations
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://school.infinititechpartners.com"
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
