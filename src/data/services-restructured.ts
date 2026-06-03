// Restructured Services Data - 4 Strategic Solution Buckets
// This file contains the new service structure optimized for B2B conversion

import type { ServiceDetail } from "@/types/data";

export interface ServiceBucket {
  slug: string;
  icon: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  businessOutcomes: string[];
  targetCustomer: string;
  problemsSolved: string[];
  capabilities: string[];
  technologies: string[];
  metrics: {
    value: string;
    label: string;
  }[];
  caseStudySlug?: string;
  gradient: string;
}

export const serviceBuckets: ServiceBucket[] = [
  {
    slug: "enterprise-platforms",
    icon: "layers",
    title: "Enterprise Platform Engineering",
    shortTitle: "Platforms",
    tagline: "Build mission-critical applications that run your business",
    description:
      "From custom ERPs to customer-facing platforms, we architect, develop, and deploy applications that integrate with your operations and scale as you grow. No more legacy constraints. No more fragmented systems.",
    targetCustomer:
      "Companies building or modernizing core business applications",
    problemsSolved: [
      "Outdated legacy systems slowing operations",
      "Fragmented data across multiple tools",
      "Poor user experience hurting adoption",
      "Development taking too long with unclear outcomes",
      "In-house teams lacking specialized expertise",
    ],
    businessOutcomes: [
      "Launch production systems 2x faster",
      "Reduce development costs by 40%",
      "Unify operations on a single platform",
      "Scale without re-architecting",
    ],
    capabilities: [
      "Custom ERP, CRM & POS systems",
      "Web application development (React, Next.js)",
      "Mobile applications (React Native, Flutter)",
      "API design and integration",
      "Database architecture and optimization",
      "Legacy system modernization",
      "E-commerce and marketplace platforms",
      "Multi-tenant SaaS architectures",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "React Native",
      "Flutter",
      "AWS",
      "Prisma",
    ],
    metrics: [
      { value: "13", label: "Production-Ready Products" },
      { value: "50+", label: "Platforms Delivered" },
      { value: "100+", label: "Database Models (Avg)" },
    ],
    caseStudySlug: "logistics-platform",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  },
  {
    slug: "infrastructure-cloud",
    icon: "server",
    title: "Infrastructure & Cloud Engineering",
    shortTitle: "Infrastructure",
    tagline: "Design infrastructure that never becomes the bottleneck",
    description:
      "We engineer data centers, cloud environments, and hybrid systems built for performance, security, and operational simplicity. Your infrastructure should accelerate your business, not slow it down.",
    targetCustomer:
      "Companies with growing infrastructure needs or cloud migration requirements",
    problemsSolved: [
      "Frequent downtime affecting revenue",
      "Slow deployments blocking product releases",
      "Infrastructure sprawl and complexity",
      "Rising cloud costs with unclear ROI",
      "Manual operations consuming engineering time",
    ],
    businessOutcomes: [
      "Achieve 99.9%+ system uptime",
      "Deploy 5x faster with automation",
      "Reduce infrastructure costs by 30%",
      "Scale without adding headcount",
    ],
    capabilities: [
      "Modern Data Center (MDC) design & modernization",
      "Hybrid cloud & multi-cloud architecture",
      "DevOps pipeline engineering (CI/CD)",
      "Container orchestration (Kubernetes, Docker)",
      "Infrastructure as Code (Terraform, Ansible)",
      "Network architecture & SD-WAN",
      "Edge computing deployment",
      "24/7 monitoring & incident response",
    ],
    technologies: [
      "Kubernetes",
      "Docker",
      "Terraform",
      "Ansible",
      "AWS",
      "Azure",
      "VMware",
      "Proxmox",
      "Jenkins",
      "GitLab CI",
    ],
    metrics: [
      { value: "99.9%", label: "Uptime Achieved" },
      { value: "5x", label: "Faster Deployments" },
      { value: "30%", label: "Cost Reduction" },
    ],
    caseStudySlug: "healthcare-infrastructure",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  },
  {
    slug: "security-compliance",
    icon: "shield",
    title: "Security & Compliance Engineering",
    shortTitle: "Security",
    tagline: "Secure your systems by design, not afterthought",
    description:
      "We embed security into your infrastructure and development pipelines, automate compliance, and prepare your organization for the threats that matter. Security should enable growth, not slow it down.",
    targetCustomer:
      "Companies handling sensitive data, pursuing compliance, or recovering from security incidents",
    problemsSolved: [
      "Security gaps creating business risk",
      "Failed compliance audits blocking deals",
      "Breach anxiety affecting decision-making",
      "Manual security processes not scaling",
      "No visibility into threats and vulnerabilities",
    ],
    businessOutcomes: [
      "Pass SOC 2, ISO 27001, HIPAA audits",
      "Prevent breaches before they happen",
      "Protect customer trust and brand",
      "Unlock enterprise deals requiring compliance",
    ],
    capabilities: [
      "Security audits & vulnerability assessments",
      "DevSecOps pipeline integration",
      "SOC setup & 24/7 threat monitoring",
      "Zero Trust security implementation",
      "Identity & Access Management (IAM)",
      "Compliance automation (SOC 2, ISO 27001, HIPAA)",
      "Incident response & forensics",
      "Penetration testing & red team exercises",
    ],
    technologies: [
      "SIEM",
      "EDR",
      "SOAR",
      "SonarQube",
      "Snyk",
      "HashiCorp Vault",
      "OPA",
      "Falco",
      "Zero Trust",
    ],
    metrics: [
      { value: "100%", label: "Audit Pass Rate" },
      { value: "0", label: "Breaches (Client Record)" },
      { value: "24/7", label: "Threat Monitoring" },
    ],
    caseStudySlug: "healthcare-infrastructure",
    gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
  },
  {
    slug: "ai-automation",
    icon: "brain",
    title: "AI & Intelligent Automation",
    shortTitle: "AI",
    tagline: "Transform data into decisions and manual work into automation",
    description:
      "We build AI systems, predictive models, and automation pipelines that deliver measurable operational improvements. Not experimental AI—production AI that works.",
    targetCustomer:
      "Companies seeking operational efficiency or competitive advantage through intelligent systems",
    problemsSolved: [
      "Manual processes consuming staff time",
      "Data sitting unused in silos",
      "Missed optimization opportunities",
      "Reactive instead of predictive operations",
      "Competitors moving faster with automation",
    ],
    businessOutcomes: [
      "Automate 60% of manual workflows",
      "Reduce operational costs significantly",
      "Unlock insights from existing data",
      "Make predictions, not just reports",
    ],
    capabilities: [
      "Machine learning model development",
      "AI-powered process automation",
      "Predictive analytics & forecasting",
      "Natural Language Processing (NLP)",
      "Computer vision & image recognition",
      "MLOps & model deployment",
      "Smart contracts & blockchain",
      "Recommendation systems",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "MLflow",
      "Kubeflow",
      "OpenAI",
      "FAISS",
      "YOLOv8",
    ],
    metrics: [
      { value: "60%", label: "Process Automation" },
      { value: "<100ms", label: "AI Inference Latency" },
      { value: "3+", label: "AI Models in Production" },
    ],
    caseStudySlug: "smart-city",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
  },
];

// Case Studies Data
export interface CaseStudy {
  slug: string;
  industry: string;
  title: string;
  subtitle: string;
  clientType: string;
  challenge: string;
  solution: string;
  outcomes: {
    metric: string;
    description: string;
  }[];
  technologies: string[];
  timeline: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  relatedServices: string[];
  gradient: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "healthcare-infrastructure",
    industry: "Healthcare",
    title: "Healthcare Data Center Modernization",
    subtitle: "Transforming infrastructure for a regional healthcare network",
    clientType: "Regional Healthcare Network (250+ beds, multi-location)",
    challenge:
      "Legacy infrastructure causing frequent downtime, failed compliance audits, and slow EMR access. Clinical staff spending time on IT workarounds instead of patient care. The network faced potential HIPAA violations and was losing time and money to system failures.",
    solution:
      "Designed and deployed a modern data center architecture with virtualization, high-availability clustering, 24/7 monitoring, and HIPAA-compliant security controls. Implemented automated backup and disaster recovery. Migrated critical applications with zero downtime.",
    outcomes: [
      {
        metric: "99.95% → from 97%",
        description: "System uptime improvement",
      },
      { metric: "40%", description: "Reduction in infrastructure costs" },
      {
        metric: "100%",
        description: "Compliance audit pass rate (HIPAA, SOC 2)",
      },
      { metric: "3x", description: "Faster EMR access times" },
    ],
    technologies: [
      "VMware",
      "Kubernetes",
      "Terraform",
      "InfluxDB",
      "Grafana",
      "SNMP",
      "Modbus",
    ],
    timeline: "8 months",
    testimonial: {
      quote:
        "The new infrastructure became invisible—exactly what we needed. Our clinical staff focuses on patients, not IT problems. We passed our compliance audits for the first time in three years.",
      author: "Chief Information Officer",
      role: "Regional Healthcare Network",
    },
    relatedServices: ["infrastructure-cloud", "security-compliance"],
    gradient: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
  },
  {
    slug: "logistics-platform",
    industry: "Logistics",
    title: "Logistics Platform Scaling",
    subtitle: "Unified fleet management for a growing transportation company",
    clientType: "Regional Logistics Company (200+ vehicles, $30M revenue)",
    challenge:
      "Fragmented tracking systems with data in spreadsheets, WhatsApp groups, and disconnected software. Manual dispatch consuming hours daily. No real-time visibility into fleet operations. DOT compliance at risk due to poor documentation.",
    solution:
      "Built a unified fleet management platform integrating GPS tracking, ELD compliance, driver management, route optimization, and analytics. Mobile apps for drivers, dispatch dashboard for operations, executive reporting for leadership.",
    outcomes: [
      { metric: "35%", description: "Reduction in dispatch time" },
      { metric: "100%", description: "DOT ELD compliance achieved" },
      { metric: "20%", description: "Fuel cost savings through optimization" },
      { metric: "Real-time", description: "Fleet visibility across all vehicles" },
    ],
    technologies: [
      "Next.js",
      "React Native",
      "PostgreSQL",
      "Leaflet.js",
      "Socket.io",
      "AWS",
    ],
    timeline: "6 months",
    testimonial: {
      quote:
        "We went from managing spreadsheets to managing our fleet. The visibility alone paid for the project in 6 months. Our drivers love the mobile app, and dispatch finally has control.",
      author: "VP Operations",
      role: "Regional Logistics Company",
    },
    relatedServices: ["enterprise-platforms", "ai-automation"],
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
  },
  {
    slug: "smart-city",
    industry: "Government",
    title: "Smart City Command Center",
    subtitle: "Unified operations platform for municipal government",
    clientType: "Municipal Government (250K population)",
    challenge:
      "City departments operated in complete silos. Traffic control, surveillance, emergency services, and public works each used separate systems with no integration. Response coordination was slow, data was fragmented, and real-time decision-making was impossible.",
    solution:
      "Developed an integrated command center consolidating CCTV feeds, traffic analytics, emergency dispatch, environmental sensors, and public infrastructure monitoring. AI-powered anomaly detection for proactive incident identification.",
    outcomes: [
      { metric: "60%", description: "Faster incident response time" },
      { metric: "5", description: "Departments unified on single platform" },
      { metric: "Real-time", description: "City-wide operational visibility" },
      { metric: "24/7", description: "Automated monitoring and alerting" },
    ],
    technologies: [
      "Kubernetes",
      "Kafka",
      "Go",
      "React",
      "PostgreSQL",
      "AI/ML",
      "RTSP",
      "GIS",
    ],
    timeline: "12 months",
    testimonial: {
      quote:
        "For the first time, our city operates as one system. Coordination that used to take hours now takes minutes. The command center has become the nerve center of our operations.",
      author: "City Administrator",
      role: "Municipal Government",
    },
    relatedServices: ["enterprise-platforms", "ai-automation", "infrastructure-cloud"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    slug: "ten-sparrows-edge-computing",
    industry: "Manufacturing",
    title: "Ten Sparrows: Edge Computing for Critical Operations",
    subtitle:
      "On-site micro data centers with embedded AI for operations that can't tolerate latency or downtime",
    clientType: "Multi-site industrial operator",
    challenge:
      "The client ran latency-sensitive, safety-critical processes across multiple facilities where cloud round-trips added unacceptable delay, and any loss of connectivity halted production. They needed real-time inference and control at the source — without shipping sensitive operational data to a distant cloud.",
    solution:
      "We designed and deployed Ten Sparrows: ruggedized on-site micro data centers that run AI models and control logic locally, integrated into the client's existing infrastructure and security constraints. Each node processes sensor data and runs inference at the edge, syncing to the cloud only for aggregate analytics. High-availability clustering and local failover keep operations running even when the uplink drops.",
    outcomes: [
      { metric: "<10 ms", description: "Local inference latency, down from ~400 ms via cloud" },
      { metric: "Zero", description: "Production stoppages from connectivity loss" },
      { metric: "70%", description: "Reduction in data egress to the cloud" },
      { metric: "24/7", description: "Autonomous operation during network outages" },
    ],
    technologies: [
      "Edge Kubernetes",
      "NVIDIA Jetson",
      "Docker",
      "Go",
      "MQTT",
      "TensorRT",
      "Prometheus",
      "Grafana",
    ],
    timeline: "6 months",
    testimonial: {
      quote:
        "Putting compute and AI on-site changed everything. Our lines keep running whether the internet is up or not, and decisions happen in milliseconds instead of seconds.",
      author: "Director of Operations",
      role: "Multi-site industrial operator",
    },
    relatedServices: ["infrastructure-cloud", "ai-automation"],
    gradient: "linear-gradient(135deg, #00c2a8 0%, #0891b2 100%)",
  },
  {
    slug: "ts-edge-nest-cloud-platform",
    industry: "SaaS",
    title: "TS Edge Nest: AI & VM Cloud Platform",
    subtitle:
      "A self-service control plane to provision VMs, Kubernetes and AI model deployments in seconds",
    clientType: "Enterprise cloud platform provider",
    challenge:
      "Teams needed to spin up compute, networking and AI inference environments fast, but were blocked by slow manual provisioning, inconsistent environments, and no single control plane spanning virtual machines, containers and model deployment.",
    solution:
      "We built TS Edge Nest, an enterprise cloud infrastructure platform with one control plane for virtual machines, Kubernetes clusters, storage, networking and managed databases — plus one-click AI model deployment. Sub-30-second VM provisioning, auto-scaling, role-based access via Microsoft Entra ID, and 256-bit end-to-end encryption, multi-tenant by design.",
    outcomes: [
      { metric: "<30 sec", description: "VM provisioning time" },
      { metric: "99.9%", description: "Platform uptime SLA" },
      { metric: "8x", description: "Faster environment setup vs the prior workflow" },
      { metric: "Multi-tenant", description: "Isolated, secure tenancy at scale" },
    ],
    technologies: [
      "Next.js",
      "Go",
      "Kubernetes",
      "KVM/QEMU",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Microsoft Entra ID",
    ],
    timeline: "9 months",
    testimonial: {
      quote:
        "We went from filing tickets and waiting hours to provisioning a full environment in under a minute. It's the control plane our engineers always wanted.",
      author: "VP of Platform Engineering",
      role: "Enterprise cloud provider",
    },
    relatedServices: ["infrastructure-cloud", "ai-automation"],
    gradient: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
  },
  {
    slug: "microdatacluster-sandbox-platform",
    industry: "Developer Tools",
    title: "MicroDataCluster: On-Demand Sandbox Environments",
    subtitle:
      "Disposable, production-like sandboxes so users can safely test products before they buy",
    clientType: "B2B software vendor",
    challenge:
      "Prospects and users wanted to try the client's software hands-on, but spinning up safe, isolated, production-like environments was slow and costly — creating friction in the sales funnel and forcing risky shared demo environments.",
    solution:
      "We built MicroDataCluster: a platform that provisions disposable, fully isolated sandbox clusters on demand. Each user gets a clean, production-like environment seeded with sample data to test products, then it tears down automatically. Per-tenant resource quotas and network isolation keep users safe, while orchestration keeps the cost per sandbox low.",
    outcomes: [
      { metric: "Minutes", description: "To a ready, isolated sandbox (was hours)" },
      { metric: "100%", description: "Tenant isolation between sandbox users" },
      { metric: "35%", description: "Lift in trial-to-paid conversion from hands-on testing" },
      { metric: "Auto", description: "Teardown — no idle environments draining cost" },
    ],
    technologies: [
      "Kubernetes",
      "Docker",
      "Go",
      "Next.js",
      "Terraform",
      "PostgreSQL",
      "Cilium",
    ],
    timeline: "5 months",
    testimonial: {
      quote:
        "Letting prospects actually test in a real, isolated environment — in minutes — turned our demos into closes.",
      author: "Head of Product",
      role: "B2B software vendor",
    },
    relatedServices: ["infrastructure-cloud", "enterprise-platforms"],
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
  },
];

// Homepage content
export const heroContent = {
  badge: "Trusted by 30+ Companies Across Healthcare, Logistics & Government",
  headline: ["Enterprise Technology", "Consulting for", "Growth-Stage Companies"],
  subheadline:
    "We help companies ship production-ready systems—from custom platforms to secure infrastructure—without building a 20-person engineering team.",
  primaryCTA: "Schedule Consultation",
  secondaryCTA: "View Case Studies",
};

export const problemSolutionContent = {
  title: "Growing companies hit a wall when...",
  problems: [
    {
      icon: "users",
      text: "They can't hire specialized engineers fast enough",
    },
    {
      icon: "alert-triangle",
      text: "Internal projects keep failing or missing deadlines",
    },
    {
      icon: "trending-down",
      text: "Systems become liabilities instead of competitive advantages",
    },
  ],
  solutionTitle: "We solve this by becoming your technology partner",
  solutionText:
    "Deep technical capability. Fast execution. Production-ready systems. We take end-to-end ownership so you can focus on growing your business.",
};

export const trustMetrics = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Clients Served" },
  { value: "99.9%", label: "Uptime Achieved" },
  { value: "4", label: "Continents Served" },
];

export const industries = [
  "Healthcare",
  "Logistics",
  "Government",
  "Education",
  "Real Estate",
  "Manufacturing",
];
