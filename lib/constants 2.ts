import { Server, Code, Globe, TrendingUp, Smartphone, Zap, Search, FileCheck, Palette, Rocket } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Infinititech Partners",
  tagline: "Infinite Possibilities, One Partner",
  email: "hello@infinititechpartners.com",
  description: "Transform your digital vision into reality with cutting-edge technology solutions",
};

export const SERVICES = [
  {
    icon: Server,
    title: 'Data Center Management',
    short: 'Enterprise-grade data center solutions',
    description: 'Comprehensive deployment and management solutions for modern data centers',
    features: ['24/7 Monitoring', 'Custom Deployment', 'Scalable Infrastructure', 'Disaster Recovery'],
    color: '#FF9966'
  },
  {
    icon: Code,
    title: 'Custom MDC Software',
    short: 'Tailored modular data center software',
    description: 'Tailored software development for modular data center operations',
    features: ['Custom Solutions', 'Real-time Analytics', 'Automation Tools', 'Integration APIs'],
    color: '#a855f7'
  },
  {
    icon: Globe,
    title: 'Smart City Solutions',
    short: 'IoT-powered urban infrastructure',
    description: 'Innovative technology for connected urban environments',
    features: ['IoT Integration', 'Data Analytics', 'Urban Planning Tools', 'Citizen Apps'],
    color: '#14b8a6'
  },
  {
    icon: TrendingUp,
    title: 'CRM, ERP & POS',
    short: 'Complete enterprise software suite',
    description: 'CRM, ERP, and POS systems designed for your business needs',
    features: ['Custom CRM', 'ERP Solutions', 'POS Systems', 'Business Intelligence'],
    color: '#f59e0b'
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Development',
    short: 'Cross-platform digital experiences',
    description: 'Beautiful, functional websites and mobile applications',
    features: ['Responsive Design', 'Native Apps', 'Progressive Web Apps', 'Cross-platform'],
    color: '#ec4899'
  },
  {
    icon: Zap,
    title: 'Digital Marketing',
    short: 'Data-driven growth strategies',
    description: 'Strategic digital marketing to grow your online presence',
    features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'Analytics'],
    color: '#8b5cf6'
  }
];

export const WORK_PROCESS = [
  {
    number: '01',
    title: 'Discovery',
    icon: Search,
    description: 'We get on a Teams call to understand your business module, end users, user personas, and your unique value proposition.',
    points: ['Business Analysis', 'User Research', 'Problem Definition', 'USP Identification']
  },
  {
    number: '02',
    title: 'Scope of Work Creation',
    icon: FileCheck,
    description: 'Comprehensive project planning with clear timelines, milestones, and success criteria.',
    points: ['Timeline Planning', 'Milestone Definition', 'Acceptance Criteria', 'Tech Stack Confirmation']
  },
  {
    number: '03',
    title: 'Design Confirmation',
    icon: Palette,
    description: 'Iterative design process ensuring your vision comes to life perfectly.',
    points: ['UI/UX Design', 'Prototype Creation', 'Design Reviews', 'Final Approval']
  },
  {
    number: '04',
    title: 'Development',
    icon: Code,
    description: 'Agile development with regular updates and quality assurance at every step.',
    points: ['Sprint Planning', 'Continuous Integration', 'Code Reviews', 'Testing']
  },
  {
    number: '05',
    title: 'Deployment',
    icon: Rocket,
    description: 'Smooth launch and ongoing support to ensure your success.',
    points: ['Production Deploy', 'Performance Monitoring', 'Training & Support', 'Maintenance']
  }
];

export const TEAM = [
  {
    name: 'Sudipto Mitra',
    role: 'Founder & CEO',
    initial: 'SM',
    color: '#FF9966',
    bio: 'Visionary leader with 10+ years in technology innovation',
    linkedin: 'https://www.linkedin.com/in/sudipto-mtr'
  },
  {
    name: 'Pallabi Datta',
    role: 'Human Resources',
    initial: 'PD',
    color: '#a855f7',
    bio: 'Building strong teams and fostering workplace excellence'
  },
  {
    name: 'Snehendu Roy',
    role: 'Full Stack MERN Developer',
    initial: 'SR',
    color: '#14b8a6',
    bio: 'Expert in building scalable web applications'
  },
  {
    name: 'Soumyadip Chanda',
    role: 'AI/ML Developer',
    initial: 'SC',
    color: '#f59e0b',
    bio: 'Pioneering intelligent solutions with machine learning'
  },
  {
    name: 'Achyut Pal',
    role: 'Sr Developer',
    initial: 'AP',
    color: '#ec4899',
    bio: 'Senior developer specializing in scalable enterprise solutions',
    linkedin: 'https://www.linkedin.com/in/achyutpal21'
  }
];

export const PORTFOLIO_ITEMS = [
  {
    title: 'Smart City Dashboard',
    category: 'Smart City',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: 'Real-time urban monitoring system for efficient city management',
    technologies: ['React', 'Node.js', 'IoT', 'MongoDB']
  },
  {
    title: 'Enterprise CRM Platform',
    category: 'Enterprise Software',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    description: 'Custom CRM solution for manufacturing industry',
    technologies: ['Next.js', 'PostgreSQL', 'Redis', 'AWS']
  },
  {
    title: 'Data Center Monitor',
    category: 'Data Center',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    description: 'Comprehensive MDC management dashboard',
    technologies: ['Vue.js', 'Python', 'Docker', 'Kubernetes']
  },
  {
    title: 'E-commerce Mobile App',
    category: 'Mobile Development',
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    description: 'Native shopping experience for iOS and Android',
    technologies: ['React Native', 'Firebase', 'Stripe', 'GraphQL']
  },
  {
    title: 'Restaurant POS System',
    category: 'POS',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    description: 'Cloud-based point of sale for restaurants',
    technologies: ['Angular', 'Node.js', 'MySQL', 'Socket.io']
  },
  {
    title: 'Marketing Analytics',
    category: 'Digital Marketing',
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    description: 'Multi-channel campaign tracking and analytics',
    technologies: ['React', 'Python', 'TensorFlow', 'BigQuery']
  }
];

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Products', href: '/products/hrms' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = [
  { name: 'Company LinkedIn', url: 'https://www.linkedin.com/company/infinititech-partners', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/infps', icon: 'github' },
  { name: 'Sudipto LinkedIn', url: 'https://www.linkedin.com/in/sudipto-mtr', icon: 'linkedin' },
];