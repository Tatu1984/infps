import type {
  NavItem,
  Value,
  Stat,
  Service,
  ServiceDetail,
  Product,
  ProductDetail,
  Project,
  ProjectDetail,
  ProcessStep,
  TeamMember,
  ContactInfo,
  SocialLink,
  Feature,
  AboutClientReason,
  Version,
} from "@/types/data";

// Navigation items (relative paths for React Router)
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Previous Versions", href: "/previous-versions" },
];

// Footer links
export const footerLinks = {
  main: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
  ] as NavItem[],
  secondary: [
    { label: "Products", href: "/products" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
};

// Contact info
export const contactInfo: ContactInfo = {
  email: "hello@infinititechpartners.com",
  location: "Available Worldwide",
  hours: "Mon - Fri: 9AM - 6PM IST",
};

// Social links
export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/infinititech-partners",
    icon: "linkedin",
  },
  { name: "GitHub", href: "https://github.com/infps", icon: "github" },
];

// Why Choose Us features
export const whyChooseUs: Feature[] = [
  {
    icon: "rocket",
    title: "Fast Delivery",
    desc: "We deliver projects on time without compromising quality.",
  },
  {
    icon: "shield",
    title: "Secure Solutions",
    desc: "Security-first approach in all our implementations.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    desc: "Cutting-edge technologies and modern approaches.",
  },
  {
    icon: "handshake",
    title: "Partnership",
    desc: "We work as an extension of your team.",
  },
];

// Core values
export const values: Value[] = [
  {
    icon: "zap",
    title: "Our Mission",
    desc: "Empower businesses with cutting-edge technology solutions that drive growth and digital transformation.",
  },
  {
    icon: "telescope",
    title: "Our Vision",
    desc: "Be the most trusted technology partner globally, known for excellence and innovation.",
  },
  {
    icon: "gem",
    title: "Our Values",
    desc: "Integrity, Innovation, Excellence, and Customer-Centricity guide everything we do.",
  },
];

// Company stats
export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 7, suffix: "", label: "Team Members" },
  { value: 10, suffix: "", label: "Services Offered" },
];

// Services
export const services: Service[] = [
  {
    slug: "mdc-engineering",
    icon: "server",
    title: "Modern Data Center (MDC) Engineering",
    desc: "Resilient, scalable MDC architectures that support mission-critical workloads with zero tolerance for failure.",
    features: [
      "Infrastructure Design",
      "Power Management",
      "Cooling Systems",
      "High Availability",
    ],
  },
  {
    slug: "devops-engineering",
    icon: "git-branch",
    title: "DevOps Engineering",
    desc: "Automated, fast, stable delivery pipelines that ensure teams can develop, deploy, and iterate without friction.",
    features: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Container Orchestration",
      "Monitoring",
    ],
  },
  {
    slug: "devsecops",
    icon: "shield",
    title: "DevSecOps & Security Automation",
    desc: "Security embedded into every stage of development, testing, and deployment.",
    features: [
      "Security Scanning",
      "Compliance Automation",
      "Vulnerability Management",
      "Policy as Code",
    ],
  },
  {
    slug: "cybersecurity",
    icon: "lock",
    title: "Cybersecurity & Threat Management",
    desc: "Defend against modern threats using a layered, intelligence-driven approach.",
    features: [
      "Threat Detection",
      "Incident Response",
      "Penetration Testing",
      "Security Audits",
    ],
  },
  {
    slug: "network-architecture",
    icon: "network",
    title: "Network Architecture & Infrastructure",
    desc: "Fast, reliable, and secure networks capable of supporting heavy loads and distributed operations.",
    features: [
      "Network Design",
      "Load Balancing",
      "SD-WAN",
      "Network Security",
    ],
  },
  {
    slug: "edge-computing",
    icon: "cpu",
    title: "Edge Computing",
    desc: "Low-latency processing and real-time intelligence at the edge, integrated with MDC and AI/ML platforms.",
    features: [
      "Edge Architecture Design",
      "AI/ML Inference at Edge",
      "MDC Integration",
      "Secure Edge Systems",
    ],
  },
  {
    slug: "ai-ml-engineering",
    icon: "brain",
    title: "AI / Machine Learning Engineering",
    desc: "Intelligent systems that automate decisions, optimize operations, and open new capabilities.",
    features: [
      "ML Model Development",
      "Data Pipelines",
      "Predictive Analytics",
      "NLP Solutions",
    ],
  },
  {
    slug: "blockchain",
    icon: "blocks",
    title: "Blockchain & Distributed Systems",
    desc: "Secure, high-performance blockchain applications tailored to business use-cases.",
    features: [
      "Smart Contracts",
      "DeFi Solutions",
      "NFT Platforms",
      "Enterprise Blockchain",
    ],
  },
  {
    slug: "website-development",
    icon: "globe",
    title: "Website Development",
    desc: "Fast, secure, and responsive websites designed for performance, branding, and conversion.",
    features: [
      "React/Next.js",
      "Performance Optimization",
      "SEO",
      "CMS Integration",
    ],
  },
  {
    slug: "mobile-app-development",
    icon: "smartphone",
    title: "Mobile App Development",
    desc: "High-performance mobile applications engineered for usability, security, and scale.",
    features: [
      "React Native",
      "iOS & Android",
      "App Store Optimization",
      "Push Notifications",
    ],
  },
];

// Service Details
export const serviceDetails: ServiceDetail[] = [
  {
    slug: "mdc-engineering",
    heroTitle: "Modern Data Center Engineering",
    heroDescription:
      "A modern data center serves as the core infrastructure for ambitious enterprises. As organizations expand, adopt hybrid setups, manage data-intensive workloads, and embrace automation, their infrastructure must evolve accordingly. We engineer Modern Data Centers built for both current computing demands and unpredictable high-growth scenarios.",
    heroDescription2:
      "Our MDC engineering team combines expertise in physical infrastructure, virtualization, cybersecurity, and cloud integrations to create resilient, cost-efficient data centers prepared for dynamic scaling. Whether modernizing legacy systems, building hybrid data centers, implementing high-availability architecture, or optimizing workload distribution, we ensure digital backbone precision.",
    whyMattersTitle: "Why Modern Data Centers Matter for Business Growth",
    whyMattersIntro:
      "Your data center directly contributes to business revenue, though many organizations overlook this. Slow, unstable, or outdated infrastructure restricts performance, causes downtime, increases operational costs, and creates security vulnerabilities. Every second of downtime results in lost revenue, customer trust, and opportunities.",
    whyMattersClosing:
      "When the core is strong, the entire digital ecosystem becomes faster, safer, and more adaptable.",
    capabilitiesIntro:
      "We approach MDC engineering holistically—from physical layout planning through virtualization, network design, security layers, cloud cooperation, and automation frameworks. The objective: build a data center that performs flawlessly during peak demand.",
    capabilities: [
      "Complete data center design and modernization",
      "Hybrid DC plus cloud architecture",
      "Virtualization and hyperconverged infrastructure (HCI)",
      "High-availability and disaster recovery engineering",
      "Compute, network, and storage optimization",
      "Security-first DC architecture",
      "Energy optimization and sustainability",
      "Monitoring and automation frameworks",
    ],
    benefits: [
      {
        title: "Near-Zero Downtime",
        desc: "Protects revenue and customer trust with redundant systems",
      },
      {
        title: "Optimized Utilization",
        desc: "Reduces infrastructure cost through intelligent resource allocation",
      },
      {
        title: "High-Speed Workloads",
        desc: "Improves customer experience with performance-optimized systems",
      },
      {
        title: "Better Security Posture",
        desc: "Lowers breach risk with multi-layer protection",
      },
      {
        title: "Scalable Design",
        desc: "Future growth without massive reinvestments",
      },
      {
        title: "Energy Efficiency",
        desc: "Reduces operational costs drastically with green practices",
      },
    ],
    revenueImpact: [
      "Faster applications → higher customer satisfaction → higher retention",
      "More uptime → more transactions and uninterrupted operations",
      "Optimized hardware → reduced CapEx and OpEx",
      "Automated failover → lowered risk cost",
      "Scalable architecture → more digital products launched faster",
    ],
    revenueClosing:
      "Your data center becomes an asset that actively pushes business growth.",
    highlightCTA:
      "Our data center solutions form the foundation for next-generation digital operations.",
    technologies: [
      "VMware",
      "Hyper-V",
      "Kubernetes",
      "OpenStack",
      "Terraform",
      "Ansible",
    ],
  },
  {
    slug: "devops-engineering",
    heroTitle: "DevOps Engineering",
    heroDescription:
      "DevOps is not just a set of tools - it is a strategic advantage. In a marketplace where speed, reliability, and constant improvement determine survival, DevOps becomes the engine that drives innovation.",
    heroDescription2:
      "We build DevOps ecosystems that transform the way businesses build, deploy, and scale their digital products. Our frameworks emphasize automation, predictability, and operational intelligence through CI/CD pipelines, containerized environments, infrastructure automation, and cloud-native architectures.",
    whyMattersTitle: "Why DevOps Drives Business Results",
    whyMattersIntro:
      "The financial impact of DevOps is significant. Organizations that embrace DevOps deliver value faster, with fewer errors, and at lower cost. Every improvement in your delivery pipeline translates directly to business outcomes.",
    whyMattersClosing:
      "When the pipeline is automated, your engineering team can finally focus on building features that generate value - not fixing broken deployments.",
    capabilitiesIntro:
      "Our approach is built on five pillars: automation, standardization, observability, scalability, and security. We design systems that scale with your business.",
    capabilities: [
      "CI/CD pipeline design and automation",
      "Infrastructure as Code (Terraform, Ansible, CloudFormation)",
      "Docker, Kubernetes & container orchestration",
      "Cloud-native architecture optimization",
      "Monitoring, logging & observability tooling",
      "Environment hardening & pipeline security",
      "GitOps workflows and release automation",
      "Automated testing integration",
    ],
    benefits: [
      {
        title: "Faster Release Cycles",
        desc: "Deploy multiple times per day with confidence and speed",
      },
      {
        title: "Fewer Failures",
        desc: "Automated deployments eliminate manual errors and inconsistencies",
      },
      {
        title: "Lower Operational Costs",
        desc: "Reduced manual effort means smaller operations overhead",
      },
      {
        title: "Better Customer Experience",
        desc: "Stable environments lead to reliable user experiences",
      },
      {
        title: "Predictable Scaling",
        desc: "Consistent pipelines enable smooth expansion and growth",
      },
      {
        title: "Team Productivity",
        desc: "Engineers focus on features, not deployment firefighting",
      },
    ],
    revenueImpact: [
      "Less manual testing → fewer human hours → reduced labor costs",
      "Automated deployments → less downtime → more revenue uptime",
      "Standardized environments → fewer production errors → better reliability",
      "Better resource scaling → optimized cloud spending → cost efficiency",
      "Faster releases → quicker time-to-market → competitive advantage",
    ],
    revenueClosing:
      "Your delivery pipeline becomes a competitive advantage that accelerates growth.",
    highlightCTA:
      "DevOps transforms your engineering team into a high-velocity delivery machine.",
    technologies: [
      "Jenkins",
      "GitLab CI",
      "GitHub Actions",
      "ArgoCD",
      "Terraform",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    slug: "devsecops",
    heroTitle: "DevSecOps & Security Automation",
    heroDescription:
      "Security must operate at pipeline speed. Our DevSecOps services embed security checks, policy enforcement, automated scanning, and real-time monitoring directly into your CI/CD workflows.",
    heroDescription2:
      "We transform development and deployment into a secure, compliant, and continuous process. Security is not a gate at the end - it's woven into every stage of your software delivery lifecycle.",
    whyMattersTitle: "Why Security Must Be Built-In",
    whyMattersIntro:
      "Security as an afterthought creates vulnerabilities. When security is treated as a separate phase, issues are discovered too late and cost significantly more to fix. DevSecOps changes this paradigm.",
    whyMattersClosing:
      "Your pipeline becomes a defense layer - not an attack surface.",
    capabilitiesIntro:
      "We build a hardened delivery process that minimizes attack surfaces without slowing delivery. Security becomes invisible to developers while remaining rigorous.",
    capabilities: [
      "Secure CI/CD workflows",
      "Automated code scanning & vulnerability detection",
      "Secrets & identity management",
      "Policy-as-code enforcement",
      "Container & Kubernetes security",
      "Shift-left security practices",
      "Continuous threat detection",
      "Compliance automation",
    ],
    benefits: [
      {
        title: "Early Detection",
        desc: "Find vulnerabilities in development, not production",
      },
      {
        title: "Continuous Compliance",
        desc: "Automated checks ensure ongoing regulatory adherence",
      },
      {
        title: "Reduced Attack Surface",
        desc: "Hardened pipelines minimize security exposure",
      },
      {
        title: "Developer-Friendly",
        desc: "Security tools integrated into existing workflows",
      },
      {
        title: "Faster Remediation",
        desc: "Immediate feedback loops for quick fixes",
      },
      {
        title: "Audit-Ready",
        desc: "Complete security trail for compliance audits",
      },
    ],
    revenueImpact: [
      "Automated scanning → fewer vulnerabilities → reduced breach risk",
      "Shift-left security → earlier detection → lower remediation costs",
      "Compliance automation → faster audits → reduced compliance overhead",
      "Secure pipelines → protected deployments → maintained customer trust",
      "Policy enforcement → consistent security → predictable risk profile",
    ],
    revenueClosing: "Security becomes an accelerator, not a bottleneck.",
    highlightCTA:
      "Integrate security into every stage of your development and deployment process.",
    technologies: [
      "SonarQube",
      "Snyk",
      "Trivy",
      "HashiCorp Vault",
      "OPA",
      "Falco",
    ],
  },
  {
    slug: "cybersecurity",
    heroTitle: "Cybersecurity & Threat Management",
    heroDescription:
      "Cybersecurity is no longer a technical add-on - it is a core business function that protects revenue, customer trust, operational continuity, and long-term reputation.",
    heroDescription2:
      "Modern companies operate in an environment where threats evolve daily: ransomware, data theft, phishing attacks, supply-chain vulnerabilities, insider risks, and AI-driven exploitation. We build cybersecurity frameworks that help organizations operate fearlessly with advanced threat intelligence, real-time monitoring, Zero Trust methodology, automated defense systems, and incident response capabilities engineered for resilience.",
    whyMattersTitle: "Why Cybersecurity is a Business Priority",
    whyMattersIntro:
      "A strong cybersecurity program does more than protect servers - it protects revenue streams and accelerates growth. Every breach avoided is revenue protected, trust maintained, and reputation preserved.",
    whyMattersClosing:
      "Cybersecurity is not a cost center - it is a business safeguard that keeps operations stable and profitable.",
    capabilitiesIntro:
      "We take a layered approach, securing every part of your environment: endpoints, users, networks, cloud resources, applications, APIs, IoT devices, and data flows. Our systems detect threats early, isolate them quickly, and neutralize them before they disrupt business operations.",
    capabilities: [
      "Security Audits & Vulnerability Assessments",
      "SOC Setup & Threat Monitoring (24/7)",
      "Network, Cloud & Endpoint Security",
      "Zero Trust Security Framework",
      "Identity & Access Management (IAM)",
      "Ransomware Defense & Recovery",
      "Incident Response & Digital Forensics",
      "Compliance audits (ISO 27001, SOC 2)",
    ],
    benefits: [
      {
        title: "Prevent Financial Losses",
        desc: "Protection against breaches, downtime, and ransomware attacks",
      },
      {
        title: "Strengthen Customer Trust",
        desc: "Improved retention and brand reputation through data security",
      },
      {
        title: "Business Continuity",
        desc: "Operations continue even during attempted attacks",
      },
      {
        title: "Enable Partnerships",
        desc: "Meet compliance requirements for enterprise deals",
      },
      {
        title: "Reduce Long-term Costs",
        desc: "Automation of repetitive security tasks",
      },
      {
        title: "Protect IP",
        desc: "Safeguard intellectual property and future product lines",
      },
    ],
    revenueImpact: [
      "Less downtime → more transactions, more productivity",
      "Better compliance → access to bigger markets (healthcare, finance, government)",
      "Faster detection → less damage and lower recovery cost",
      "Automated protection → smaller security teams needed",
      "Secure infrastructure → safe cloud migration & digital transformation",
      "Risk prevention → stronger investor and customer confidence",
    ],
    revenueClosing: "Your environment becomes a fortress - not a liability.",
    highlightCTA:
      "Cybersecurity should never slow growth; it should enable it.",
    technologies: [
      "SIEM",
      "EDR",
      "SOAR",
      "Firewall",
      "IDS/IPS",
      "WAF",
      "Zero Trust",
    ],
  },
  {
    slug: "network-architecture",
    heroTitle: "Network Architecture & Infrastructure",
    heroDescription:
      "A modern business runs on its network. Every application, every device, every cloud dependency, every remote employee - all rely on a stable, fast, and secure network backbone.",
    heroDescription2:
      "At Infiniti Tech Partners, we engineer network architectures built for scale, resilience, and high performance. Your network is the invisible foundation of your digital operations - we make sure it never becomes a bottleneck.",
    whyMattersTitle: "Why Networks Drive Business Performance",
    whyMattersIntro:
      "A high-performance network directly fuels business efficiency and profitability. Poor network design silently destroys revenue through latency, outages, and security gaps. Every millisecond of delay affects user experience.",
    whyMattersClosing:
      "A poorly designed network silently destroys revenue. A well-designed network silently increases it.",
    capabilitiesIntro:
      "We focus on intelligent routing, high availability, secure perimeter defenses, and cloud-aware connectivity. Every design decision is made with performance, security, and scalability in mind.",
    capabilities: [
      "Enterprise network design and restructuring",
      "SD-WAN architecture and implementation",
      "Firewall, IDS/IPS & perimeter protection",
      "Multi-site connectivity & VPN frameworks",
      "Wireless network engineering",
      "Load balancing & traffic optimization",
      "Network monitoring & health analytics",
      "Multi-cloud networking",
    ],
    benefits: [
      {
        title: "Fast Operations",
        desc: "Fast networks lead to faster customer service and response",
      },
      {
        title: "Reduced Latency",
        desc: "Smoother digital experiences drive higher conversions",
      },
      {
        title: "Strong Security",
        desc: "Protect customer data and brand integrity",
      },
      {
        title: "Stable Connectivity",
        desc: "Fewer outages mean more productivity",
      },
      {
        title: "Scalable Architecture",
        desc: "Support growth without major reinvestment",
      },
      {
        title: "Complete Visibility",
        desc: "Full insight into network traffic and performance",
      },
    ],
    revenueImpact: [
      "Reduced downtime → more transactions, more productivity",
      "Optimized routing → lower bandwidth and cloud cost",
      "Better security → fewer breaches, lower risk",
      "Faster internal tools → faster teams → faster delivery",
      "Scalable design → future expansion without expensive rebuilds",
    ],
    revenueClosing:
      "Your network becomes an invisible engine that powers every transaction.",
    highlightCTA: "We engineer networks that power business growth.",
    technologies: ["Cisco", "Juniper", "Palo Alto", "F5", "Arista", "SD-WAN"],
  },
  {
    slug: "edge-computing",
    heroTitle: "Edge Computing",
    heroDescription:
      "Edge computing is the natural evolution of modern digital infrastructure. As enterprises adopt Modern Data Centers (MDC), AI/ML-driven intelligence, and smart infrastructure systems, the need to process data closer to where it is generated becomes critical. Centralized cloud and data centers alone cannot meet the latency, reliability, and real-time decision requirements of today's distributed systems.",
    heroDescription2:
      "Infiniti Tech Partners designs and deploys edge computing architectures that extend MDC capabilities to the edge, enabling real-time processing, intelligent automation, and resilient operations across geographically distributed environments. Our edge solutions operate as a seamless layer between devices, sensors, smart infrastructure, AI models, and core data centers, forming a unified, high-performance computing fabric.",
    whyMattersTitle: "Why Edge Computing Matters for Business Growth",
    whyMattersIntro:
      "In modern enterprises, data velocity directly impacts revenue. Delays in processing, dependence on round-trip cloud communication, or centralized bottlenecks reduce responsiveness and limit scalability. Edge computing removes these constraints by bringing intelligence closer to operations.",
    whyMattersClosing:
      "For businesses running smart infrastructure, industrial systems, retail networks, or AI-driven platforms, edge computing becomes a foundational growth enabler.",
    capabilitiesIntro:
      "Infiniti Tech Partners takes a system-engineering approach to edge computing, ensuring performance, security, and manageability at scale. We design edge architectures that integrate seamlessly with Modern Data Centers, hybrid and multi-cloud environments, AI/ML pipelines, DevOps workflows, and Zero Trust security models.",
    capabilities: [
      "Edge architecture design & deployment",
      "MDC + Edge workload orchestration",
      "AI/ML inference at the edge",
      "Industrial & enterprise edge systems",
      "Secure edge infrastructure",
      "Edge lifecycle & fleet management",
      "Low-latency networking & gateways",
      "Offline-capable autonomous systems",
    ],
    benefits: [
      {
        title: "Ultra-low Latency",
        desc: "Ultra-low latency processing for time-critical applications",
      },
      {
        title: "Real-time Decisions",
        desc: "Real-time decision-making without cloud dependency",
      },
      {
        title: "System Resilience",
        desc: "Higher system resilience, even during network disruptions",
      },
      {
        title: "Cost Reduction",
        desc: "Reduced cloud compute and bandwidth costs",
      },
      {
        title: "Scalable Operations",
        desc: "Scalable distributed operations aligned with business expansion",
      },
      {
        title: "AI/ML at Edge",
        desc: "Support for AI/ML inference at the edge, enabling instant insights",
      },
    ],
    revenueImpact: [
      "Faster customer interactions → higher satisfaction and retention",
      "Real-time automation → reduced operational cost",
      "Lower cloud spend at scale",
      "Higher uptime → uninterrupted revenue streams",
      "New digital products enabled by low-latency intelligence",
    ],
    revenueClosing:
      "Edge computing transforms distributed infrastructure into a responsive, intelligent, revenue-generating system.",
    highlightCTA:
      "We engineer edge ecosystems tightly integrated with data centers, cloud platforms, AI/ML workloads, and enterprise security frameworks.",
    technologies: [
      "Kubernetes",
      "AWS Outposts",
      "Azure Stack Edge",
      "NVIDIA Jetson",
      "Intel OpenVINO",
      "5G MEC",
    ],
  },
  {
    slug: "ai-ml-engineering",
    heroTitle: "AI / Machine Learning Engineering",
    heroDescription:
      "AI is no longer optional - it is a competitive necessity. We build AI and ML solutions that help businesses automate decisions, uncover insights, and optimize performance.",
    heroDescription2:
      "Our engineers focus on real-world AI that drives measurable outcomes - not experimentation for its own sake. From predictive analytics to computer vision, we transform data into intelligence and intelligence into impact.",
    whyMattersTitle: "Why AI Delivers Business Value",
    whyMattersIntro:
      "We create intelligent systems that automate decisions, optimize operations, and open new capabilities. Every AI solution we build is designed to deliver measurable ROI and practical business outcomes.",
    whyMattersClosing:
      "We transform data into intelligence and intelligence into impact.",
    capabilitiesIntro:
      "Our AI/ML practice focuses on practical applications that solve real business problems. We build systems that learn, adapt, and continuously improve with your data.",
    capabilities: [
      "Machine learning model development",
      "AI automation systems",
      "NLP & computer vision",
      "Predictive analytics",
      "MLOps & model deployment",
      "Data pipelines & feature engineering",
      "Recommendation systems",
      "AI-powered process automation",
    ],
    benefits: [
      {
        title: "Intelligent Automation",
        desc: "Reduce manual work with AI-powered workflows",
      },
      {
        title: "Better Predictions",
        desc: "Data-driven forecasting improves planning accuracy",
      },
      {
        title: "New Capabilities",
        desc: "Enable features impossible with traditional software",
      },
      {
        title: "Operational Efficiency",
        desc: "Optimize processes with machine learning insights",
      },
      {
        title: "Competitive Advantage",
        desc: "Stay ahead with cutting-edge AI applications",
      },
      {
        title: "Scalable Intelligence",
        desc: "ML models that grow with your data and needs",
      },
    ],
    revenueImpact: [
      "Automated decisions → faster response times → better customer experience",
      "Predictive analytics → optimized inventory → reduced waste",
      "Personalization → higher engagement → increased conversions",
      "Process automation → reduced labor costs → better margins",
      "Anomaly detection → early problem identification → prevented losses",
    ],
    revenueClosing:
      "AI becomes your silent partner that continuously optimizes operations.",
    highlightCTA:
      "Let's create AI and ML solutions that drive measurable business outcomes.",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "MLflow",
      "Kubeflow",
    ],
  },
  {
    slug: "blockchain",
    heroTitle: "Blockchain & Distributed Systems",
    heroDescription:
      "Blockchain is not hype - it is infrastructure. We engineer secure, scalable blockchain and distributed systems for enterprises that need transparent, tamper-proof, and high-performance digital solutions.",
    heroDescription2:
      "We develop secure, high-performance blockchain applications tailored to business use-cases - not hype. From smart contracts to private networks, we build solutions that solve real problems with measurable outcomes.",
    whyMattersTitle: "Why Blockchain Creates Business Value",
    whyMattersIntro:
      "We focus on security, scalability, and business-driven blockchain outcomes. Blockchain technology enables new forms of trust, transparency, and automation that were previously impossible.",
    whyMattersClosing:
      "Our blockchain engineering focuses on security, scalability, and real business value.",
    capabilitiesIntro:
      "We build blockchain solutions that integrate with your existing systems while opening new possibilities. Every implementation is designed for security, performance, and long-term maintainability.",
    capabilities: [
      "Smart contract development",
      "Private blockchain networks",
      "dApp architecture",
      "Tokenization frameworks",
      "Identity & integrity systems",
      "Blockchain + legacy integration",
      "Security audits",
      "Web3 application development",
    ],
    benefits: [
      {
        title: "Transparency",
        desc: "Immutable records create trust between parties",
      },
      {
        title: "Automation",
        desc: "Smart contracts execute automatically when conditions are met",
      },
      {
        title: "Security",
        desc: "Cryptographic protection for sensitive transactions",
      },
      {
        title: "Efficiency",
        desc: "Remove intermediaries and reduce transaction costs",
      },
      {
        title: "Traceability",
        desc: "Complete audit trail for regulatory compliance",
      },
      {
        title: "Trust",
        desc: "Decentralized verification eliminates single points of failure",
      },
    ],
    revenueImpact: [
      "Automated contracts → reduced legal and administrative overhead",
      "Transparent transactions → increased stakeholder confidence",
      "Tokenization → new revenue streams and business models",
      "Immutable records → simplified compliance and auditing",
      "Decentralized trust → reduced intermediary costs",
    ],
    revenueClosing:
      "Blockchain becomes infrastructure that creates new business possibilities.",
    highlightCTA:
      "Let's create secure, scalable blockchain solutions for your enterprise.",
    technologies: [
      "Ethereum",
      "Solidity",
      "Hardhat",
      "IPFS",
      "Polygon",
      "Hyperledger",
    ],
  },
  {
    slug: "website-development",
    heroTitle: "Website Development",
    heroDescription:
      "A website is often your business's first handshake - so it must be fast, secure, and engineered with purpose. We build fast, secure, and responsive websites designed for performance, branding, and conversion.",
    heroDescription2:
      "We create websites that do not just look good - they perform. From corporate sites to e-commerce platforms, every website is engineered for speed, security, and conversion. Your website should work as hard as your sales team.",
    whyMattersTitle: "Why Website Performance Matters",
    whyMattersIntro:
      "Your website is often the first interaction customers have with your brand. Every second of load time, every confusing navigation, every security concern costs you conversions and trust.",
    whyMattersClosing:
      "We create websites that do not just look good - they perform.",
    capabilitiesIntro:
      "Every website we build is optimized for speed, search engines, and user experience from day one. We focus on the metrics that matter: load time, conversion rate, and user engagement.",
    capabilities: [
      "Corporate websites & landing pages",
      "High-speed, SEO-ready builds",
      "Custom CMS development",
      "E-commerce solutions",
      "Brand-aligned UI/UX design",
      "Security hardening & optimization",
      "Performance optimization",
      "Analytics integration",
    ],
    benefits: [
      {
        title: "Fast Loading",
        desc: "Sub-second load times improve user experience and SEO",
      },
      {
        title: "Mobile First",
        desc: "Responsive designs that work perfectly on all devices",
      },
      {
        title: "SEO Ready",
        desc: "Built-in optimization for search engine visibility",
      },
      {
        title: "Secure by Default",
        desc: "Hardened against common web vulnerabilities",
      },
      {
        title: "Easy Updates",
        desc: "Content management systems for non-technical users",
      },
      {
        title: "Conversion Focused",
        desc: "Designed to turn visitors into customers",
      },
    ],
    revenueImpact: [
      "Faster load times → lower bounce rates → more conversions",
      "SEO optimization → higher rankings → more organic traffic",
      "Mobile-friendly → capture mobile audience → expanded reach",
      "Security → customer trust → repeat business",
      "Great UX → longer sessions → higher engagement",
    ],
    revenueClosing: "Your website becomes a 24/7 sales and marketing asset.",
    highlightCTA:
      "Let's create a high-performance website that drives results for your business.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    slug: "mobile-app-development",
    heroTitle: "Mobile App Development",
    heroDescription:
      "Mobile apps must be fast, intuitive, secure, and built for scale. We develop native and cross-platform apps designed for seamless performance and long-term maintainability.",
    heroDescription2:
      "We develop high-performance mobile applications engineered for usability, security, and scale. From native iOS and Android to cross-platform solutions with React Native and Flutter, we build apps that users love and businesses rely on.",
    whyMattersTitle: "Why Mobile Experience Matters",
    whyMattersIntro:
      "We build mobile experiences users trust. Your app is often the primary touchpoint with customers - it must be fast, intuitive, and reliable to drive engagement and loyalty.",
    whyMattersClosing: "We build mobile experiences users trust.",
    capabilitiesIntro:
      "Every app we build is optimized for performance, designed for usability, and engineered for scale. We focus on the full lifecycle from development through deployment and ongoing updates.",
    capabilities: [
      "Native iOS & Android apps",
      "Cross-platform apps (Flutter, React Native)",
      "Backend API engineering",
      "Authentication & app security",
      "Performance optimization",
      "Store deployment & release management",
      "Push notification systems",
      "Offline-first architecture",
    ],
    benefits: [
      {
        title: "Cross-Platform Efficiency",
        desc: "Single codebase for iOS and Android reduces cost and time",
      },
      {
        title: "Native Performance",
        desc: "Smooth animations and responsive interactions",
      },
      {
        title: "Offline Support",
        desc: "Apps work even without internet connectivity",
      },
      {
        title: "Secure by Design",
        desc: "Built-in authentication and data protection",
      },
      {
        title: "Easy Updates",
        desc: "Over-the-air updates without app store delays",
      },
      { title: "User Delight", desc: "Intuitive UX that keeps users engaged" },
    ],
    revenueImpact: [
      "Great UX → higher app store ratings → more downloads",
      "Push notifications → increased engagement → better retention",
      "Offline support → uninterrupted usage → satisfied users",
      "Cross-platform → faster launch → earlier market entry",
      "Performance optimization → smooth experience → loyal users",
    ],
    revenueClosing:
      "Your app becomes a direct channel to customers that drives engagement and loyalty.",
    highlightCTA:
      "Let's create a high-performance mobile app that delights your users.",
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Node.js",
      "Firebase",
    ],
  },
];

// Products
export const products: Product[] = [
  {
    slug: "hrms",
    name: "HRMS",
    tagline: "Human Resource Management System",
    category: "HR / Workforce / Enterprise",
    icon: "users",
    desc: "Comprehensive HRMS with advanced attendance tracking, idle detection, suspicious activity monitoring, payroll processing, and project management.",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    features: [
      "Attendance Tracking",
      "Payroll",
      "Project Management",
      "Role-based Access",
    ],
    technologies: [
      "Next.js 15",
      "Prisma",
      "PostgreSQL",
      "JWT Auth",
      "Tailwind CSS",
      "Radix UI",
    ],
    highlights:
      "Dual-heartbeat attendance, bot detection, printable payslips, role-based access",
    demoUrl: "https://hrmsdemo-beta.vercel.app",
  },
  {
    slug: "marketplace",
    name: "Marketplace",
    tagline: "B2B Commodity Trading Platform",
    category: "E-Commerce / Trading / Blockchain",
    icon: "store",
    desc: "Enterprise-grade B2B marketplace for commodity trading with producer management, tokenization, escrow payments, and blockchain integration.",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    features: [
      "Tokenization",
      "Escrow Payments",
      "Blockchain",
      "Multi-currency",
    ],
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Blockchain",
      "AWS",
      "Stripe",
    ],
    highlights: "Multi-role access, tokenization, insurance & hedging modules",
    demoUrl: "https://mplc.infinititechpartners.com",
  },
  {
    slug: "accubooks",
    name: "Accubooks",
    tagline: "Enterprise Accounting Platform",
    category: "Finance / ERP / Accounting",
    icon: "calculator",
    desc: "Comprehensive multi-tenant accounting solution with double-entry bookkeeping, inventory management, HR & payroll, GST compliance, and financial reporting.",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    features: ["Double-entry", "Multi-tenant", "Payroll", "Inventory"],
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Zustand",
      "Recharts",
      "Zod",
    ],
    highlights: "57 database models, 70+ permissions, full audit trail",
    demoUrl: "https://accubook.infinititechpartners.com",
  },
  {
    slug: "school-erp",
    name: "School ERP",
    tagline: "Complete School Management System",
    category: "Education / ERP / Management",
    icon: "graduation-cap",
    desc: "End-to-end school management platform covering admissions, academics, attendance, fee management, transport, library, and parent communication.",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    features: ["Admissions", "Academics", "Fees", "Transport"],
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "AWS",
    ],
    highlights: "Multi-branch support, real-time notifications, mobile apps",
    demoUrl: "https://school.infinititechpartners.com",
  },
  {
    slug: "fleet-management",
    name: "Fleet Management",
    tagline: "Enterprise Telematics Platform",
    category: "IoT / Logistics / Telematics",
    icon: "truck",
    desc: "Comprehensive fleet tracking solution with real-time GPS, ELD compliance, driver management, incident tracking, geofencing, and advanced analytics.",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    features: ["GPS Tracking", "ELD Compliance", "Driver Mgmt", "Analytics"],
    technologies: [
      "Next.js",
      "Prisma",
      "Leaflet.js",
      "Recharts",
      "NextAuth",
      "PostgreSQL",
    ],
    highlights: "DOT compliance, 8 user roles, live GPS tracking",
    demoUrl: "https://telematics.infinititechpartners.com",
  },
  {
    slug: "realestate",
    name: "Real Estate",
    tagline: "Property Listing & Management Platform",
    category: "Real Estate / Property / Marketplace",
    icon: "building-2",
    desc: "Advanced real estate platform with property listings, agent management, membership subscriptions, and comprehensive search similar to leading property portals.",
    gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    features: [
      "Property Listings",
      "Agent Management",
      "Memberships",
      "Advanced Search",
    ],
    technologies: [
      "Next.js 16",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
      "Cloudinary",
    ],
    highlights: "Multi-role access, membership plans, SMS & email integration",
    demoUrl: "https://realestate.infinititechpartners.com",
  },
  {
    slug: "drop",
    name: "Drop",
    tagline: "Multi-Sided Delivery & Commerce Platform",
    category: "Food Delivery / Marketplace / Logistics",
    icon: "utensils-crossed",
    desc: "Comprehensive hyperlocal delivery platform for food, groceries, and services with vendor management, rider logistics, party mode, and restaurant management system.",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    features: [
      "Vendor Management",
      "Rider Logistics",
      "Real-time Tracking",
      "RMS",
    ],
    technologies: [
      "Next.js 16",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "Razorpay",
      "Leaflet.js",
    ],
    highlights:
      "100+ database models, 4 user portals, real-time tracking, RMS built-in",
    demoUrl: "https://drop-three-dun.vercel.app",
  },
  {
    slug: "rideon",
    name: "RideOn",
    tagline: "Complete Ride-Hailing Platform",
    category: "Transportation / Logistics / Mobility",
    icon: "car",
    desc: "Full-featured Uber-like ride-hailing solution with rider/driver mobile apps, admin dashboard, real-time GPS tracking, payments, and driver management.",
    gradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
    features: ["Mobile Apps", "GPS Tracking", "Payments", "Driver Management"],
    technologies: [
      "Next.js",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
      "Stripe",
    ],
    highlights:
      "Mobile apps for iOS/Android, real-time tracking, 22 database models",
    demoUrl: "https://rideon-admin.vercel.app",
  },
  {
    slug: "netwatch",
    name: "NetWatch",
    tagline: "Employee Monitoring Platform",
    category: "Enterprise / Security / Monitoring",
    icon: "monitor",
    desc: "Comprehensive employee monitoring solution with real-time screen monitoring, activity tracking, remote management, website/app blocking, and detailed productivity analytics.",
    gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    features: [
      "Screen Monitoring",
      "Activity Tracking",
      "Remote Mgmt",
      "Analytics",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "Electron",
    ],
    highlights:
      "Cross-platform agent, real-time screenshots, encrypted keylogging, remote desktop",
    demoUrl: "https://netwatch-nu.vercel.app",
  },
  {
    slug: "xfer",
    name: "Xfer",
    tagline: "Digital Payment Platform",
    category: "Fintech / Payments / Banking",
    icon: "credit-card",
    desc: "PayPal-like payment platform with multi-currency wallets, P2P transfers, KYC verification, fraud detection, vendor payments, and comprehensive admin controls.",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    features: ["Multi-currency", "P2P Transfers", "KYC/AML", "Fraud Detection"],
    technologies: [
      "Next.js 16",
      "Prisma 7",
      "PostgreSQL",
      "Stripe",
      "Plaid",
      "Resend",
    ],
    highlights:
      "100+ database models, 4 user roles, KYC/AML compliance, fraud detection",
    demoUrl: "https://xfer.vercel.app",
  },
  {
    slug: "sparking",
    name: "Sparking",
    tagline: "AI-Powered Smart Parking",
    category: "IoT / AI / Smart City",
    icon: "parking-circle",
    desc: "AI-powered parking management system with real-time vehicle detection, automatic license plate recognition, digital payments, and hardware integration for gates and displays.",
    gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    features: [
      "ANPR",
      "Real-time Detection",
      "Digital Payments",
      "Hardware Control",
    ],
    technologies: [
      "Next.js 16",
      "Prisma",
      "PostgreSQL",
      "Python",
      "YOLOv8",
      "Stripe",
    ],
    highlights:
      "ANPR with <100ms latency, hardware control, predictive analytics, multi-tenant",
    demoUrl: "https://smart-parking-xi-pearl.vercel.app",
  },
  {
    slug: "hospital-erp",
    name: "Hospital ERP",
    tagline: "Complete Hospital Management System",
    category: "Healthcare / ERP / Medical",
    icon: "hospital",
    desc: "Enterprise-grade HMS with EMR/EHR, patient management, diagnostics, pharmacy, billing, and multi-branch support—designed for NABH/JCI compliance.",
    gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    features: ["EMR/EHR", "OPD/IPD", "Diagnostics", "Pharmacy"],
    technologies: [
      "React 18",
      "Express.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Ant Design",
    ],
    highlights: "NABH/JCI compliance, multi-branch, complete EMR, 15+ modules",
    demoUrl: "https://hospital-vnyb.vercel.app/",
  },
];

// Product Details
export const productDetails: ProductDetail[] = [
  {
    slug: "hrms",
    heroTitle: "HRMS Platform",
    heroSubtitle:
      "Complete Human Resource Management System for modern businesses",
    heroDescription:
      "Streamline employee management, attendance, payroll, projects, and more—all in one powerful platform",
    modules: [
      {
        icon: "users",
        title: "Employee Management",
        description:
          "Complete employee profiles with KYC documents, department tracking, reporting hierarchy, and onboarding/offboarding workflows.",
      },
      {
        icon: "clock",
        title: "Advanced Attendance",
        description:
          "Dual-heartbeat system with idle time detection, real-time activity monitoring, break tracking, and IP address logging.",
      },
      {
        icon: "shield",
        title: "Suspicious Activity Detection",
        description:
          "Identifies bot/automation tools including mouse jigglers, auto-typers, and macros. Keystroke and mouse pattern analysis.",
      },
      {
        icon: "trending-up",
        title: "Payroll Management",
        description:
          "Automated salary calculations with component-based structure (Basic, HRA, Medical), tax calculations, and printable payslips.",
      },
      {
        icon: "briefcase",
        title: "Project & Task Management",
        description:
          "Project creation with milestones, task assignment, Azure DevOps & Asana integrations, and work item synchronization.",
      },
      {
        icon: "check",
        title: "Sales CRM",
        description:
          "Lead management with pipeline stages, conversion tracking, sales target monitoring, and commission calculations.",
      },
    ],
    portals: [
      {
        title: "Admin Portal",
        description: "Complete control over the entire organization",
        features: [
          "Manage all employees and departments",
          "Process payroll and generate payslips",
          "Track attendance and approve leaves",
          "Manage projects and tasks",
          "Financial reporting and analytics",
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
    ],
    completeFeatures: [
      "Employee Onboarding",
      "Attendance Tracking",
      "Leave Management",
      "Payroll Processing",
      "Project Management",
      "Task Assignment",
      "Sales CRM",
      "Expense Tracking",
      "Document Management",
      "Role-based Access",
      "Audit Logging",
      "Report Generation",
    ],
  },
  {
    slug: "accubooks",
    heroTitle: "Accubooks",
    heroSubtitle: "Enterprise Accounting Platform",
    heroDescription:
      "A comprehensive multi-tenant accounting solution built for modern businesses with double-entry bookkeeping, inventory, HR & payroll, and GST compliance",
    modules: [
      {
        icon: "briefcase",
        title: "Chart of Accounts",
        description:
          "Complete ledger management with hierarchical groups, opening balances, and multi-level account structure.",
      },
      {
        icon: "check",
        title: "Voucher Management",
        description:
          "Double-entry journal system with payment, receipt, contra, and journal vouchers with auto-numbering.",
      },
      {
        icon: "trending-up",
        title: "Financial Reports",
        description:
          "Profit & Loss, Balance Sheet, Cash Flow, Trial Balance, and Aging reports with drill-down.",
      },
      {
        icon: "building-2",
        title: "Inventory Control",
        description:
          "Multi-warehouse stock management with batch tracking, FIFO/LIFO/Weighted Average valuation.",
      },
      {
        icon: "users",
        title: "HR & Payroll",
        description:
          "Employee management, attendance tracking, leave management, salary structures, and payslip generation.",
      },
      {
        icon: "shield",
        title: "GST & Taxation",
        description:
          "Indian GST compliance with GSTR-1, GSTR-3B filing, TDS/TCS management, and tax reports.",
      },
    ],
    completeFeatures: [
      "Double-entry Bookkeeping",
      "Multi-tenant Architecture",
      "Chart of Accounts",
      "Voucher Management",
      "Sales & Purchase Invoices",
      "Inventory Management",
      "HR & Payroll",
      "GST Compliance",
      "Financial Reports",
      "Bank Reconciliation",
      "Audit Trail",
      "Role-based Access",
    ],
    stats: [
      { label: "Database Models", value: "57" },
      { label: "API Endpoints", value: "50+" },
      { label: "Permissions", value: "70+" },
      { label: "Report Types", value: "15+" },
    ],
  },
  {
    slug: "school-erp",
    heroTitle: "School ERP",
    heroSubtitle: "Complete School Management System",
    heroDescription:
      "End-to-end school management platform that streamlines every aspect of educational institution operations",
    modules: [
      {
        icon: "users",
        title: "Student Management",
        description:
          "Complete student lifecycle from admission to alumni. Profiles, documents, academic history, and family information.",
      },
      {
        icon: "briefcase",
        title: "Academic Management",
        description:
          "Class scheduling, subject allocation, exam management, grading system, and report card generation.",
      },
      {
        icon: "clock",
        title: "Attendance System",
        description:
          "Daily attendance tracking with biometric/RFID integration, leave management, and automated parent alerts.",
      },
      {
        icon: "check",
        title: "Fee Management",
        description:
          "Fee structure setup, invoice generation, payment gateway integration, and receipt management.",
      },
      {
        icon: "truck",
        title: "Transport Management",
        description:
          "Route planning, vehicle tracking, driver management, and pickup/drop notifications.",
      },
      {
        icon: "zap",
        title: "Communication Hub",
        description:
          "SMS, email, and push notifications for parents. Announcements, circulars, and event updates.",
      },
    ],
    portals: [
      {
        title: "Admin Portal",
        features: [
          "Complete system configuration",
          "User management",
          "Reports & analytics",
          "Fee structure management",
          "Staff management",
        ],
      },
      {
        title: "Teacher Portal",
        features: [
          "Class management",
          "Attendance marking",
          "Grade entry",
          "Assignment creation",
          "Student progress tracking",
        ],
      },
      {
        title: "Parent Portal",
        features: [
          "Child's attendance & grades",
          "Fee payment",
          "Communication with teachers",
          "Event calendar",
          "Transport tracking",
        ],
      },
      {
        title: "Student Portal",
        features: [
          "Timetable view",
          "Assignment submission",
          "Exam results",
          "Library access",
          "Notifications",
        ],
      },
    ],
    completeFeatures: [
      "Multi-branch Support",
      "Online Admission Portal",
      "Document Management",
      "Timetable Scheduler",
      "Exam & Grade Management",
      "Report Card Generator",
      "Library Management",
      "Hostel Management",
      "Inventory & Assets",
      "HR & Payroll for Staff",
      "Online Fee Payment",
      "Mobile Apps (iOS & Android)",
    ],
    stats: [
      { label: "User Roles", value: "10+" },
      { label: "Modules", value: "25+" },
      { label: "Reports", value: "50+" },
      { label: "API Endpoints", value: "100+" },
    ],
  },
  {
    slug: "fleet-management",
    heroTitle: "Fleet Management",
    heroSubtitle: "Enterprise Telematics Platform",
    heroDescription:
      "Comprehensive, enterprise-grade telematics platform designed for fleet management companies with DOT-compliant ELD",
    modules: [
      {
        icon: "map-pin",
        title: "Live GPS Tracking",
        description:
          "Real-time vehicle positions on interactive maps with speed, heading, and driver assignment visibility.",
      },
      {
        icon: "clock",
        title: "ELD Compliance",
        description:
          "DOT-compliant Hours of Service tracking with 11-hour driving limit, break requirements, and violation alerts.",
      },
      {
        icon: "users",
        title: "Driver Management",
        description:
          "Complete driver profiles with CDL tracking, medical certification, safety scores, and trip statistics.",
      },
      {
        icon: "zap",
        title: "Incident Management",
        description:
          "Accident/breakdown reporting with severity classification, status workflow, and video evidence linking.",
      },
      {
        icon: "shield",
        title: "Geofencing",
        description:
          "Circle and polygon zone creation with entry/exit alerts, color-coded visualization, and alert history.",
      },
      {
        icon: "trending-up",
        title: "Analytics Dashboard",
        description:
          "Trip statistics, fuel efficiency metrics, driver performance rankings, and fleet utilization reports.",
      },
    ],
    completeFeatures: [
      "Vehicle Management",
      "IoT Device Assignment",
      "Odometer Tracking",
      "Service Scheduling",
      "Real-time GPS",
      "Interactive Map Dashboard",
      "Geofence Management",
      "Entry/Exit Alerts",
      "Driver Profiles",
      "CDL Expiry Alerts",
      "Safety Score Calculation",
      "Trip Statistics",
      "Incident Reporting",
      "Fuel Efficiency Metrics",
      "Fleet Utilization Reports",
    ],
    stats: [
      { label: "Database Models", value: "20+" },
      { label: "User Roles", value: "8" },
      { label: "API Endpoints", value: "30+" },
      { label: "ELD Rules", value: "4" },
    ],
  },
  {
    slug: "drop",
    heroTitle: "Drop Platform",
    heroSubtitle: "Multi-Sided Delivery & Commerce Platform",
    heroDescription:
      "Complete hyperlocal marketplace for food, groceries, alcohol, and services—with dedicated portals for customers, vendors, riders, and admins",
    modules: [
      {
        icon: "store",
        title: "Multi-Vendor Marketplace",
        description:
          "Support restaurants, grocery stores, pharmacies, wine shops, and more. Complete vendor onboarding and management.",
      },
      {
        icon: "map-pin",
        title: "Real-Time Tracking",
        description:
          "Live GPS tracking for deliveries with Socket.io, rider location updates, and accurate ETA calculations.",
      },
      {
        icon: "users",
        title: "Party Mode",
        description:
          "Collaborative group ordering with split billing (equal, by item, by seat, custom), shared carts, and party scheduling.",
      },
      {
        icon: "check",
        title: "Advanced Payments",
        description:
          "Razorpay integration with cards, UPI, wallets, COD, and gift cards. Subscription plans and loyalty points.",
      },
      {
        icon: "truck",
        title: "Rider Management",
        description:
          "Complete rider portal with earnings tracking, document verification, zone assignments, and performance analytics.",
      },
      {
        icon: "zap",
        title: "Smart Notifications",
        description:
          "Push, email, and SMS notifications via Twilio and SendGrid. Real-time order updates and promotional campaigns.",
      },
    ],
    portals: [
      {
        title: "Customer Portal",
        description: "Complete shopping experience for end users",
        features: [
          "Browse restaurants, grocery, pharmacy",
          "Real-time order tracking with GPS",
          "Multiple payment methods and wallet",
          "Party mode for group orders",
          "Loyalty points and subscriptions",
        ],
      },
      {
        title: "Vendor Portal",
        description: "Powerful tools for merchants",
        features: [
          "Order management",
          "Menu and product management",
          "Multi-outlet support",
          "Inventory tracking",
          "Kitchen Display System (KDS)",
        ],
      },
      {
        title: "Rider Portal",
        description: "Efficient delivery management",
        features: [
          "Accept/reject deliveries",
          "GPS navigation",
          "Earnings tracking",
          "Document verification",
          "Performance metrics",
        ],
      },
      {
        title: "Admin Dashboard",
        description: "Complete platform control",
        features: [
          "Real-time metrics",
          "Vendor/rider approval",
          "Zone and pricing config",
          "Marketing campaigns",
          "Financial reports",
        ],
      },
    ],
    completeFeatures: [
      "Multi-Vendor Support",
      "Real-time Tracking",
      "Party Mode",
      "Split Billing",
      "Razorpay Integration",
      "Wallet System",
      "Loyalty Points",
      "Genie Service",
      "Zone Pricing",
      "Surge Pricing",
      "Kitchen Display",
      "Inventory Control",
      "Staff Management",
      "Push Notifications",
      "SMS & Email Alerts",
    ],
    stats: [
      { label: "Database Models", value: "100+" },
      { label: "User Portals", value: "4" },
      { label: "Payment Methods", value: "5+" },
      { label: "Notification Types", value: "3" },
    ],
  },
  {
    slug: "rideon",
    heroTitle: "RideOn Platform",
    heroSubtitle: "Complete Ride-Hailing Solution",
    heroDescription:
      "Launch your own Uber-like service with mobile apps for riders and drivers, real-time tracking, payments, and a powerful admin dashboard",
    modules: [
      {
        icon: "map-pin",
        title: "Real-Time GPS Tracking",
        description:
          "Live driver location streaming with accurate ETAs, route visualization, and geospatial queries powered by PostGIS.",
      },
      {
        icon: "smartphone",
        title: "Native Mobile Apps",
        description:
          "React Native apps for both riders and drivers with Expo, supporting iOS and Android with push notifications.",
      },
      {
        icon: "check",
        title: "Stripe Payments",
        description:
          "Secure payment processing with card tokenization, 3D Secure, multiple payment methods, and automatic refunds.",
      },
      {
        icon: "users",
        title: "Driver Management",
        description:
          "Complete driver lifecycle from onboarding to payouts. Document verification, performance tracking, and earnings management.",
      },
      {
        icon: "zap",
        title: "Smart Notifications",
        description:
          "Push notifications for mobile apps, email via SendGrid, and SMS via Twilio. Real-time ride status updates.",
      },
      {
        icon: "trending-up",
        title: "Surge Pricing",
        description:
          "Dynamic pricing based on demand with manual and automatic surge controls. Zone-based pricing configuration.",
      },
    ],
    portals: [
      {
        title: "Rider Mobile App",
        description: "React Native / Expo",
        features: [
          "One-tap ride booking",
          "Real-time driver tracking",
          "Fare estimation",
          "Multiple payment methods",
          "Trip history and receipts",
        ],
      },
      {
        title: "Driver Mobile App",
        description: "React Native / Expo",
        features: [
          "Accept/decline requests",
          "Turn-by-turn navigation",
          "Earnings tracking",
          "Online/offline toggle",
          "Document management",
        ],
      },
      {
        title: "Admin Dashboard",
        description: "Next.js",
        features: [
          "Real-time metrics",
          "Driver verification",
          "Trip monitoring",
          "Pricing config",
          "Support tickets",
        ],
      },
      {
        title: "Backend API",
        description: "Node.js / Express",
        features: [
          "22 database models",
          "Socket.io real-time",
          "Stripe integration",
          "PostGIS geospatial",
          "Redis caching",
        ],
      },
    ],
    completeFeatures: [
      "Rider Mobile App",
      "Driver Mobile App",
      "Web Booking",
      "Admin Dashboard",
      "Real-time Tracking",
      "Stripe Payments",
      "Driver Verification",
      "Surge Pricing",
      "Promo Codes",
      "Support System",
      "Push Notifications",
      "Email & SMS Alerts",
    ],
    stats: [
      { label: "Database Models", value: "22" },
      { label: "Mobile Apps", value: "2" },
      { label: "Web Apps", value: "3" },
      { label: "Real-time Events", value: "10+" },
    ],
  },
  {
    slug: "marketplace",
    heroTitle: "B2B Marketplace",
    heroSubtitle: "Enterprise Commodity Trading Platform",
    heroDescription:
      "A comprehensive B2B marketplace for commodity trading with producer management, tokenization, escrow payments, and blockchain integration for secure, transparent transactions",
    modules: [
      {
        icon: "store",
        title: "Producer Management",
        description:
          "Complete producer onboarding, verification, and management with KYC compliance and document tracking.",
      },
      {
        icon: "coins",
        title: "Tokenization Engine",
        description:
          "Commodity tokenization for fractional ownership, enabling smaller investors to participate in commodity trading.",
      },
      {
        icon: "shield",
        title: "Escrow Payments",
        description:
          "Secure escrow system ensuring safe transactions between buyers and sellers with dispute resolution.",
      },
      {
        icon: "blocks",
        title: "Blockchain Integration",
        description:
          "Immutable transaction records and smart contracts for automated compliance and transparent trading.",
      },
      {
        icon: "globe",
        title: "Multi-Currency Support",
        description:
          "Support for multiple currencies and payment methods including wire transfers, crypto, and trade finance.",
      },
      {
        icon: "trending-up",
        title: "Insurance & Hedging",
        description:
          "Integrated insurance products and hedging instruments to manage commodity price risks.",
      },
    ],
    portals: [
      {
        title: "Producer Portal",
        description: "For commodity producers and suppliers",
        features: [
          "Product listing management",
          "Order fulfillment tracking",
          "Payment reconciliation",
          "Analytics dashboard",
          "Document management",
        ],
      },
      {
        title: "Buyer Portal",
        description: "For commodity buyers and traders",
        features: [
          "Browse and search commodities",
          "Place orders and negotiate",
          "Track shipments",
          "Payment management",
          "Contract management",
        ],
      },
      {
        title: "Admin Dashboard",
        description: "Platform administration",
        features: [
          "User verification",
          "Transaction monitoring",
          "Dispute resolution",
          "Platform analytics",
          "Compliance reporting",
        ],
      },
    ],
    completeFeatures: [
      "Multi-role Access",
      "Commodity Tokenization",
      "Escrow Payments",
      "Blockchain Ledger",
      "Smart Contracts",
      "KYC/AML Compliance",
      "Insurance Integration",
      "Hedging Tools",
      "Multi-currency",
      "Trade Finance",
      "Shipment Tracking",
      "Document Management",
    ],
    stats: [
      { label: "Database Models", value: "45+" },
      { label: "User Roles", value: "5" },
      { label: "Payment Methods", value: "6+" },
      { label: "API Endpoints", value: "60+" },
    ],
  },
  {
    slug: "realestate",
    heroTitle: "Real Estate Platform",
    heroSubtitle: "Property Listing & Management Solution",
    heroDescription:
      "An advanced real estate platform with comprehensive property listings, agent management, membership subscriptions, and powerful search capabilities similar to leading property portals",
    modules: [
      {
        icon: "building-2",
        title: "Property Listings",
        description:
          "Rich property listings with multiple images, virtual tours, floor plans, and detailed specifications.",
      },
      {
        icon: "users",
        title: "Agent Management",
        description:
          "Complete agent onboarding, verification, commission tracking, and performance analytics.",
      },
      {
        icon: "shield",
        title: "Membership Plans",
        description:
          "Flexible subscription plans for agents and builders with featured listings and premium placement.",
      },
      {
        icon: "search",
        title: "Advanced Search",
        description:
          "Powerful search with filters for location, price, amenities, property type, and proximity to landmarks.",
      },
      {
        icon: "mail",
        title: "Lead Management",
        description:
          "Integrated CRM for lead capture, follow-up automation, and conversion tracking.",
      },
      {
        icon: "trending-up",
        title: "Analytics Dashboard",
        description:
          "Property performance metrics, market trends, and agent productivity reports.",
      },
    ],
    portals: [
      {
        title: "Public Portal",
        description: "Property search for buyers and renters",
        features: [
          "Browse all listings",
          "Advanced search filters",
          "Save favorites",
          "Contact agents",
          "Schedule viewings",
        ],
      },
      {
        title: "Agent Portal",
        description: "Tools for real estate agents",
        features: [
          "Manage listings",
          "Lead management",
          "Commission tracking",
          "Performance analytics",
          "Client communication",
        ],
      },
      {
        title: "Builder Portal",
        description: "For property developers",
        features: [
          "Project management",
          "Bulk listings",
          "Inventory tracking",
          "Sales analytics",
          "Marketing tools",
        ],
      },
      {
        title: "Admin Dashboard",
        description: "Platform management",
        features: [
          "User management",
          "Listing moderation",
          "Subscription management",
          "Revenue analytics",
          "Support tickets",
        ],
      },
    ],
    completeFeatures: [
      "Property Listings",
      "Virtual Tours",
      "Agent Verification",
      "Membership Plans",
      "Featured Listings",
      "Advanced Search",
      "Map Integration",
      "Lead Capture",
      "SMS & Email Alerts",
      "Commission Management",
      "Analytics Reports",
      "Mobile Responsive",
    ],
    stats: [
      { label: "Database Models", value: "35+" },
      { label: "User Roles", value: "6" },
      { label: "Search Filters", value: "20+" },
      { label: "API Endpoints", value: "50+" },
    ],
  },
  {
    slug: "netwatch",
    heroTitle: "NetWatch Pro",
    heroSubtitle: "Enterprise Employee Monitoring Platform",
    heroDescription:
      "Monitor employee productivity with real-time screen capture, activity tracking, remote management, and comprehensive reporting—all with enterprise-grade security",
    modules: [
      {
        icon: "monitor",
        title: "Real-Time Screen Monitoring",
        description:
          "Live view of all connected computers with automatic and on-demand screenshot capture. Full-screen viewer with zoom capabilities.",
      },
      {
        icon: "camera",
        title: "Screen Recording",
        description:
          "Record screen activity with playback support. Store recordings with configurable retention periods for compliance.",
      },
      {
        icon: "trending-up",
        title: "Activity Tracking",
        description:
          "Track application usage, websites visited, and idle time. Detailed productivity analytics with categorization.",
      },
      {
        icon: "shield",
        title: "Keystroke Logging",
        description:
          "Encrypted keystroke logging with search and export capabilities. AES-256-GCM encryption for data at rest.",
      },
      {
        icon: "briefcase",
        title: "Remote Desktop",
        description:
          "View and control remote computers in real-time. SSH-like terminal access for advanced management.",
      },
      {
        icon: "globe",
        title: "Website & App Blocking",
        description:
          "Block access to websites by URL patterns. Prevent specific applications from running with quick rules.",
      },
    ],
    portals: [
      {
        title: "Admin Dashboard",
        description: "Next.js 16 / React 19",
        features: [
          "Real-time computer monitoring",
          "Screenshot and recording viewer",
          "Activity reports and analytics",
          "Policy configuration",
          "User and role management",
          "Audit logging",
        ],
      },
      {
        title: "Desktop Agent",
        description: "Electron 28",
        features: [
          "Auto-start on boot",
          "Stealth mode operation",
          "Screenshot capture",
          "Activity logging",
          "Keystroke recording",
          "Remote command execution",
        ],
      },
      {
        title: "Socket.io Server",
        description: "Node.js",
        features: [
          "WebSocket connections",
          "Real-time data streaming",
          "Scalable architecture",
          "Auto-reconnection",
          "Event broadcasting",
          "Connection management",
        ],
      },
    ],
    completeFeatures: [
      "Real-Time Screen Monitoring",
      "Screen Recording",
      "Activity Tracking",
      "Keystroke Logging",
      "Clipboard Monitoring",
      "Remote Desktop",
      "File Transfer",
      "Website & App Blocking",
      "Real-Time Alerts",
      "AES-256 Encryption",
      "PBKDF2 Password Hashing",
      "Role-Based Access Control",
    ],
    stats: [
      { label: "Components", value: "3" },
      { label: "User Roles", value: "3" },
      { label: "Security Features", value: "6" },
      { label: "Monitoring Capabilities", value: "9" },
    ],
  },
  {
    slug: "xfer",
    heroTitle: "Xfer Payment Platform",
    heroSubtitle: "Complete Digital Payment Solution",
    heroDescription:
      "Launch your own PayPal-like payment service with multi-currency wallets, P2P transfers, KYC/AML compliance, fraud detection, and comprehensive merchant tools",
    modules: [
      {
        icon: "wallet",
        title: "Multi-Currency Wallets",
        description:
          "Create and manage wallets in multiple currencies including USD, EUR, GBP, and more. Real-time balance tracking with ledger entries.",
      },
      {
        icon: "send",
        title: "P2P Transfers",
        description:
          "Send money instantly to other users via email or phone. Low fees, real-time delivery, and complete transaction history.",
      },
      {
        icon: "credit-card",
        title: "Stripe Payments",
        description:
          "Seamless card payments with 3D Secure, saved cards, and automatic retry logic. PCI DSS compliant infrastructure.",
      },
      {
        icon: "shield",
        title: "KYC Verification",
        description:
          "Complete identity verification workflow with document upload, liveness detection, and sanctions screening.",
      },
      {
        icon: "shield",
        title: "Fraud Detection",
        description:
          "AI-powered fraud scoring based on velocity, device fingerprint, geolocation, and behavioral patterns.",
      },
      {
        icon: "building-2",
        title: "Vendor Payments",
        description:
          "Complete merchant solution with invoicing, checkout flows, and automatic payouts to vendor accounts.",
      },
    ],
    portals: [
      {
        title: "User Dashboard",
        description: "Standard user features for managing personal finances",
        features: [
          "Wallet management",
          "Send and receive money",
          "Transaction history",
          "Payment methods",
          "Profile settings",
          "KYC submission",
        ],
      },
      {
        title: "Vendor Portal",
        description: "Merchant features for business accounts",
        features: [
          "Product catalog",
          "Order management",
          "Invoice generation",
          "Payout settings",
          "API integration",
          "Business analytics",
        ],
      },
      {
        title: "Admin Dashboard",
        description: "User, KYC, and dispute management",
        features: [
          "User management",
          "KYC review queue",
          "Dispute resolution",
          "Transaction monitoring",
          "Risk assessment",
          "Activity logs",
        ],
      },
      {
        title: "Super Admin",
        description: "Full system configuration and control",
        features: [
          "System configuration",
          "Fee structures",
          "User role management",
          "Platform analytics",
          "API management",
          "Audit logs",
        ],
      },
    ],
    completeFeatures: [
      "Multi-Currency Wallets",
      "P2P Transfers",
      "Stripe Payments",
      "KYC Verification",
      "Fraud Detection",
      "Vendor Payments",
      "Dispute Management",
      "Real-Time Notifications",
      "Analytics Dashboard",
      "Double-Entry Ledger",
      "Bank Connectivity (Plaid)",
      "Auto Withdrawals",
    ],
    stats: [
      { label: "Database Models", value: "100+" },
      { label: "User Roles", value: "4" },
      { label: "Payment Methods", value: "5+" },
      { label: "Integrations", value: "3" },
    ],
  },
  {
    slug: "sparking",
    heroTitle: "Sparking Platform",
    heroSubtitle: "AI-Powered Smart Parking Management",
    heroDescription:
      "Transform your parking operations with real-time vehicle detection, automatic license plate recognition, digital payments, and intelligent hardware control",
    modules: [
      {
        icon: "car",
        title: "Vehicle Detection",
        description:
          "YOLOv8-based real-time vehicle detection with less than 100ms latency. Automatic entry/exit tracking without human intervention.",
      },
      {
        icon: "camera",
        title: "License Plate Recognition",
        description:
          "Automatic Number Plate Recognition (ANPR) using Intel OpenVINO for high-accuracy plate reading in all conditions.",
      },
      {
        icon: "wallet",
        title: "Digital Wallet",
        description:
          "Built-in wallet system for contactless payments. Top-up via cards, auto-deduct parking fees, and transfer between users.",
      },
      {
        icon: "parking-circle",
        title: "Gate Control",
        description:
          "Automatic gate operation based on vehicle detection. Support for HTTP, RS485, and Modbus protocols.",
      },
      {
        icon: "trending-up",
        title: "Predictive Analytics",
        description:
          "AI-powered occupancy prediction, revenue forecasting, and peak hour analysis for better planning.",
      },
      {
        icon: "map-pin",
        title: "Multi-Tenant Support",
        description:
          "Manage multiple parking lots from a single dashboard. Zone and slot management with custom pricing.",
      },
    ],
    portals: [
      {
        title: "Admin Dashboard",
        description: "Next.js 16",
        features: [
          "Real-time occupancy monitoring",
          "Camera stream management",
          "Token and slot tracking",
          "Payment and wallet management",
          "Analytics and reporting",
          "Hardware configuration",
        ],
      },
      {
        title: "AI Pipeline",
        description: "Python / YOLOv8",
        features: [
          "RTSP stream processing",
          "Real-time vehicle detection",
          "License plate recognition",
          "Multi-camera support",
          "Mock mode for testing",
          "Event publishing to API",
        ],
      },
      {
        title: "Self-Service Kiosk",
        description: "Next.js PWA",
        features: [
          "QR code scanning",
          "Payment processing",
          "Receipt printing",
          "Slot reservation",
          "Find My Car feature",
          "Wallet top-up",
        ],
      },
    ],
    completeFeatures: [
      "Vehicle Detection",
      "License Plate Recognition",
      "Digital Wallet",
      "Gate Control",
      "Predictive Analytics",
      "Multi-Tenant Support",
      "Stripe Payments",
      "Real-Time Notifications",
      "PDF Reports",
      "LED Display Control",
      "Ticket Printers",
      "Find My Car",
    ],
    stats: [
      { label: "Detection Latency", value: "<100ms" },
      { label: "User Portals", value: "3" },
      { label: "Hardware Protocols", value: "3" },
      { label: "AI Models", value: "2" },
    ],
  },
  {
    slug: "hospital-erp",
    heroTitle: "Hospital ERP",
    heroSubtitle: "Complete Hospital Management System",
    heroDescription:
      "Enterprise-grade HMS with EMR/EHR, patient management, diagnostics, pharmacy, billing, and multi-branch support—designed for NABH/JCI compliance",
    modules: [
      {
        icon: "users",
        title: "Patient Registration",
        description:
          "Unique MRN generation, multi-ID support (govt ID, insurance, corporate), biometric identification, family linking, and document management.",
      },
      {
        icon: "calendar",
        title: "Appointment & Scheduling",
        description:
          "Doctor and department-wise slots, teleconsultation support, online booking ready, no-show tracking, and automated SMS/WhatsApp reminders.",
      },
      {
        icon: "clipboard-list",
        title: "Queue Management",
        description:
          "Token generation, real-time display boards, priority tagging for emergency/VIP patients, and department-wise queue tracking.",
      },
      {
        icon: "stethoscope",
        title: "OPD/IPD Management",
        description:
          "Complete outpatient and inpatient workflows with admission, transfer, discharge, bed management, and ward-based tariffs.",
      },
      {
        icon: "file-text",
        title: "EMR/EHR",
        description:
          "SOAP notes, clinical templates by specialty, e-prescriptions, vitals charting, allergies, and complete medical history.",
      },
      {
        icon: "building-2",
        title: "Multi-Branch Support",
        description:
          "Manage multiple hospitals, clinics, and diagnostic centers with centralized or branch-specific configurations.",
      },
    ],
    portals: [
      {
        title: "Clinical Modules",
        description: "OPD EMR, IPD, OT, ICU, Emergency, Nursing",
        features: [
          "OPD EMR with SOAP notes",
          "IPD admission/transfer/discharge",
          "OT scheduling & management",
          "ICU specialized workflows",
          "Emergency/casualty triage",
          "Nursing station care plans",
        ],
      },
      {
        title: "Diagnostics & Support",
        description: "Lab, Radiology, Pharmacy, Blood Bank",
        features: [
          "Laboratory (LIS) with machine integration",
          "Radiology (RIS/PACS) integration",
          "Pharmacy with stock management",
          "Blood bank donor management",
          "Inventory & asset management",
          "Transport & ambulance booking",
        ],
      },
      {
        title: "Finance & Operations",
        description: "Billing, Insurance, HR, Analytics",
        features: [
          "OP/IP billing with split payments",
          "TPA & insurance claims",
          "Multiple payment modes",
          "HR & biometric attendance",
          "Accounting interface (Tally/ERP)",
          "Reports & analytics dashboards",
        ],
      },
    ],
    completeFeatures: [
      "Patient Registration & MRN",
      "Appointment Scheduling",
      "Queue Management",
      "OPD/IPD Management",
      "EMR/EHR",
      "OT Management",
      "ICU Module",
      "Emergency/Casualty",
      "Laboratory (LIS)",
      "Radiology (RIS/PACS)",
      "Pharmacy Management",
      "Blood Bank",
      "Billing & Tariffs",
      "TPA & Insurance",
      "Multi-Branch Support",
      "Biometric Integration",
      "Analytics & Dashboards",
      "NABH/JCI Compliance",
    ],
    stats: [
      { label: "Clinical Modules", value: "6" },
      { label: "Support Services", value: "8" },
      { label: "User Roles", value: "15+" },
      { label: "Standards", value: "HL7/FHIR/DICOM" },
    ],
  },
];

// Portfolio projects
export const projects: Project[] = [
  {
    slug: "pigeon-pulse",
    category: "IoT / Animal Health / AgriTech",
    title: "Pigeon Pulse",
    desc: "Intelligent Avian Health Monitoring System using lightweight IoT devices to track vitals, detect early symptoms, and enable real-time care for pigeons and poultry.",
    tech: [
      "IoT Sensors",
      "MQTT",
      "AWS IoT Core",
      "React Native",
      "Python",
      "DynamoDB",
    ],
    gradient: "linear-gradient(135deg, #00ffcc 0%, #00ccff 100%)",
  },
  {
    slug: "paravet",
    category: "Telemedicine / Rural Healthcare",
    title: "Paravet",
    desc: "Rural Veterinary Telemedicine Network connecting livestock owners to para-vets and veterinary doctors, enabling remote triage and care for animals in underserved areas.",
    tech: ["Android", "Node.js", "Firebase", "Google Maps API", "Python"],
    gradient: "linear-gradient(135deg, #ff6b35 0%, #ff9f1c 100%)",
  },
  {
    slug: "smart-city",
    category: "Urban Tech / IoT / Public Infrastructure",
    title: "SmartCity Platform",
    desc: "Unified command dashboard consolidating surveillance, traffic flow, emergency response, and environmental monitoring—enabling real-time decision-making for city operations.",
    tech: [
      "Microservices",
      "Kubernetes",
      "Kafka",
      "AI/ML",
      "React",
      "PostgreSQL",
    ],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    slug: "mdc-system",
    category: "Data Centers / IT Infrastructure",
    title: "MDC System",
    desc: "Modular Data Center Automation platform tracking power, cooling, rack health, and predictive maintenance for enterprise data center operations.",
    tech: ["Python", "SNMP", "InfluxDB", "Grafana", "Docker", "MQTT"],
    gradient: "linear-gradient(135deg, #00ccff 0%, #667eea 100%)",
  },
];

// Portfolio Project Details (Case Studies)
export const projectDetails: ProjectDetail[] = [
  {
    slug: "pigeon-pulse",
    title: "Pigeon Pulse",
    subtitle: "Intelligent Avian Health Monitoring System",
    category: "IoT / Animal Health / AgriTech",
    timeline: "6-8 Months",
    teamSize: "4-6 Engineers",
    heroDescription:
      "Smart health-monitoring ecosystem for pigeons using lightweight IoT devices to track vitals, detect early symptoms of illness, and enable real-time care decisions in large aviaries.",
    challenge:
      "Aviary caretakers lacked systematic methods for early disease detection. The operation relied entirely on manual observation—inconsistent and often too late to prevent flock-wide spread. No digital infrastructure existed; everything was logged manually with spotty documentation.",
    mission:
      "The team aimed to automate health tracking, identify anomalies early, and provide real-time visibility into individual bird status.",
    missionPoints: [
      "Reduce mortality rates through early detection",
      "Improve early diagnosis capabilities",
      "Create a data-driven care model",
    ],
    technologies: [
      "IoT Sensors",
      "MQTT",
      "Python",
      "Node.js",
      "AWS IoT Core",
      "DynamoDB",
      "React Native",
      "Flutter",
      "Grafana",
      "BLE Modules",
    ],
    deliverables: [
      "Wearable IoT sensors for pigeons",
      "Gateway-based data collection system",
      "Cloud backend for analytics (AWS IoT Core)",
      "Mobile and web dashboards (React Native)",
      "Temperature & heart-rate detection",
      "Motion analysis algorithms",
      "Real-time alert system",
      "Historical trend analysis",
      "Caretaker assignment workflows",
    ],
    painPoints: [
      {
        challenge: "Tiny Sensors for Tiny Birds",
        solution: "Designed ultra-lightweight, non-invasive wearable sensors",
      },
      {
        challenge: "Erratic Connectivity",
        solution: "Strategic RF repeater placement and antenna optimization",
      },
      {
        challenge: "Battery Life Issues",
        solution:
          "Custom firmware with advanced sleep modes—300% battery extension",
      },
      {
        challenge: "No Historical Datasets",
        solution:
          "Crowdsourced baseline model using aggregated multi-aviary data",
      },
    ],
    results: [
      "40-60% improvement in disease detection time",
      "70% reduction in manual monitoring workload",
      "Higher survival rates through early intervention",
      "Predictable care cycles and resource allocation",
      "Real-time visibility across multiple locations",
    ],
    testimonial: {
      quote:
        "The client reported higher survival rates and more predictable care cycles, transforming how they manage aviary health.",
      author: "Aviary Operations Manager",
      role: "Client",
    },
  },
  {
    slug: "paravet",
    title: "Paravet",
    subtitle: "Rural Veterinary Telemedicine Network",
    category: "Telemedicine / Rural Healthcare",
    timeline: "4-6 Months",
    teamSize: "5-7 Engineers",
    heroDescription:
      "Digital network connecting livestock owners to trained para-vets and veterinary doctors, enabling remote triage, location-aware case assignment, and transparent field-to-cloud healthcare delivery.",
    challenge:
      "The livestock healthcare sector lacked unified systems. Bookings, case logs, and field reports were scattered across WhatsApp groups and handwritten notebooks, creating chaotic service delivery with no tracking capability and minimal accountability.",
    mission:
      "Digitize the field-veterinary ecosystem through a structured platform enabling remote triage and consultation, location-aware vet assignment, transparent pricing and service records, and improved service availability in rural areas.",
    missionPoints: [
      "Remote triage and consultation",
      "Location-aware vet assignment",
      "Transparent pricing and service records",
      "Improved service availability in rural areas",
    ],
    technologies: [
      "Android (Java/Kotlin)",
      "Node.js",
      "Python",
      "Firebase",
      "AWS",
      "Google Maps API",
      "SMS Gateway",
    ],
    deliverables: [
      "Mobile app with registration & vet discovery",
      "Case logging & documentation system",
      "GPS-based routing & location services",
      "In-field digital form collection",
      "Medicine recommendation engine",
      "Digital treatment receipts",
      "Vet performance tracking backend",
      "SMS/WhatsApp notification integration",
      "Offline-first architecture with smart syncing",
    ],
    painPoints: [
      {
        challenge:
          "Low Network Bandwidth - Rural areas had extremely limited connectivity",
        solution:
          "Offline-First Architecture - Smart local storage with intelligent background syncing",
      },
      {
        challenge: "Tech-Unfamiliar User Base - Minimal smartphone experience",
        solution:
          "Icon-Based Workflows - Simplified UI with large icons, minimal text, and guided flows",
      },
      {
        challenge:
          "Inconsistent Documentation - Vets documented cases differently",
        solution:
          "Standardized Digital Forms - Structured forms with pre-filled options and mandatory fields",
      },
      {
        challenge:
          "Language Barriers - Multiple local languages needed support",
        solution:
          "Multilingual UI Layers - Comprehensive language support with region-specific translations",
      },
    ],
    results: [
      "Cut case turnaround time by almost 50%",
      "Increased vet assignment efficiency in remote villages",
      "Drastically improved documentation accuracy",
      "Enabled seamless audit trails for health authorities",
      "Smoother operations and resource allocation",
    ],
    testimonial: {
      quote:
        "Client feedback highlighted smoother operations, easier audit trails, and a dramatic improvement in service delivery to remote areas.",
      author: "Healthcare Administrator",
      role: "Client",
    },
  },
  {
    slug: "smart-city",
    title: "SmartCity Platform",
    subtitle: "Integrated Operations & Monitoring Suite",
    category: "Urban Tech / IoT / Public Infrastructure",
    timeline: "10-12 Months",
    teamSize: "8-12 Engineers",
    heroDescription:
      "Unified command dashboard consolidating surveillance, traffic flow, emergency response, and environmental monitoring—enabling real-time decision-making for city operations.",
    challenge:
      "Before implementation, city departments operated in silos. Traffic control, surveillance, and emergency services each used separate systems. Data was fragmented, response coordination was slow, and real-time decision-making was nearly impossible.",
    mission:
      "Create a unified command center consolidating all monitoring and analytics systems while enabling real-time decision-making through analytics.",
    missionPoints: [
      "Enable real-time decision-making through analytics",
      "Enhance public safety and traffic efficiency",
      "Improve emergency response times",
      "Centralize previously siloed departmental operations",
    ],
    technologies: [
      "Microservices (Node.js/Go)",
      "Kubernetes",
      "Docker",
      "Kafka Streams",
      "CCTV/RTSP Integration",
      "GIS Dashboards",
      "AI/ML Anomaly Detection",
      "React",
      "PostgreSQL",
      "Redis",
    ],
    deliverables: [
      "Multi-module command center platform",
      "CCTV ingestion & RTSP video wall",
      "Real-time traffic analytics",
      "Incident management workflows",
      "Pollution & environmental sensor dashboards",
      "Emergency dispatch coordination",
      "Microservices pipeline with Kafka",
      "ANPR camera integration",
      "GPS device & IoT sensor integration",
      "Weather station connectivity",
      "Protocol adapters for vendor neutrality",
    ],
    painPoints: [
      {
        challenge: "Huge data volume from hundreds of CCTV feeds",
        solution: "Deployed GPU clusters for parallel processing",
      },
      {
        challenge: "Latency-sensitive analytics requiring millisecond response",
        solution: "Implemented Kafka message streams for buffering",
      },
      {
        challenge: "Multiple mismatched vendor systems",
        solution: "Created universal protocol adapters normalizing data",
      },
      {
        challenge: "24/7 reliability requirement for public safety",
        solution: "Built active-active failover with auto health monitoring",
      },
    ],
    results: [
      "Significantly reduced incident detection time",
      "Improved traffic flow reporting accuracy",
      "Faster emergency coordination and response",
      "Centralized previously siloed departmental operations",
      "Achieved single pane of glass for city-wide monitoring",
    ],
    testimonial: {
      quote:
        "The client praised the system for centralizing what used to be chaotic siloed operations into a unified, intelligent command center.",
      author: "City Administrator",
      role: "Municipal Government",
    },
  },
  {
    slug: "mdc-system",
    title: "MDC System",
    subtitle: "Modular Data Center Automation & Monitoring",
    category: "Data Centers / IT Infrastructure",
    timeline: "8-10 Months",
    teamSize: "6-8 Engineers",
    heroDescription:
      "Full-stack monitoring and automation platform for modular data centers—tracking power, cooling, rack health, security access, and predictive maintenance with real-time visibility.",
    challenge:
      "The client's data center operations were fragmented across multiple disconnected tools—each system (power, cooling, security) operated independently. This separation prevented unified visibility, delayed fault detection, and required excessive manual intervention with no predictive maintenance capabilities.",
    mission:
      "Consolidate all sensors and equipment controllers into a single dashboard while enabling intelligent automation.",
    missionPoints: [
      "Improve system uptime through proactive monitoring",
      "Enable automated alerting and rapid response",
      "Reduce dependency on manual operations",
      "Enable predictive failure detection",
    ],
    technologies: [
      "Python",
      "Node.js",
      "SNMP",
      "Modbus/TCP",
      "InfluxDB",
      "Grafana",
      "Docker",
      "MQTT",
      "Power/Energy APIs",
    ],
    deliverables: [
      "Hardware integration layer (SNMP/Modbus protocols)",
      "Backend for time-series data processing",
      "Real-time monitoring dashboards",
      "Threshold-based alerting system",
      "Automated alert rules engine",
      "Maintenance log management",
      "Role-based access control",
      "Energy meter integration",
      "UPS system monitoring",
      "PAC unit integration",
      "Physical security sensor connectivity",
    ],
    painPoints: [
      {
        challenge: "Protocol Inconsistency",
        solution:
          "Built a universal adapter framework normalizing SNMP, Modbus, and custom protocols into standard formats",
      },
      {
        challenge: "Time-Series Load Spikes",
        solution:
          "Implemented InfluxDB with buffered collectors to gracefully handle massive ingestion spikes",
      },
      {
        challenge: "Corrupted Edge Packets",
        solution:
          "Created intelligent packet validation with automatic retry mechanisms and error logging",
      },
      {
        challenge: "Mission-Critical Sensitivity",
        solution:
          "Deployed redundant monitoring nodes with health-check heartbeats and automatic failover",
      },
    ],
    results: [
      "Boosted visibility across all racks and equipment",
      "Reduced downtime through proactive alerting",
      "Enabled predictive maintenance scheduling",
      "Scaled operations without proportional manpower increase",
      "Became a core operational asset for the client",
    ],
    testimonial: {
      quote:
        "The MDC System became a core operational asset, enabling the client to scale their data center operations without scaling manpower proportionally.",
      author: "Data Center Operations Manager",
      role: "Enterprise Client",
    },
  },
];

// Development process
export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery",
    desc: "We get on a Teams call to understand your business module, end users, user personas, and your unique value proposition.",
    points: [
      "Business Analysis",
      "User Research",
      "Problem Definition",
      "USP Identification",
    ],
  },
  {
    num: "02",
    title: "Scope of Work",
    desc: "Comprehensive project planning with clear timelines, milestones, and success criteria.",
    points: [
      "Timeline Planning",
      "Milestone Definition",
      "Acceptance Criteria",
      "Tech Stack",
    ],
  },
  {
    num: "03",
    title: "Design",
    desc: "Iterative design process ensuring your vision comes to life perfectly.",
    points: [
      "UI/UX Design",
      "Prototype Creation",
      "Design Reviews",
      "Final Approval",
    ],
  },
  {
    num: "04",
    title: "Development",
    desc: "Agile development with regular updates and quality assurance at every step.",
    points: ["Sprint Planning", "CI/CD", "Code Reviews", "Testing"],
  },
  {
    num: "05",
    title: "Deployment",
    desc: "Smooth launch and ongoing support to ensure your success.",
    points: ["Production Deploy", "Monitoring", "Training", "Maintenance"],
  },
];

// Team members
export const team: TeamMember[] = [
  {
    name: "Sudipto Mitra",
    role: "Founder & CEO",
    avatar: "SM",
    bio: "Visionary leader with 10+ years in technology innovation",
    linkedin: "https://linkedin.com/in/sudipto-mitra",
  },
  {
    name: "Pallabi Datta",
    role: "Human Resources",
    avatar: "PD",
    bio: "Building strong teams and fostering workplace excellence",
    linkedin: "https://linkedin.com/in/pallabi-datta",
  },
  {
    name: "Snehendu Roy",
    role: "Full Stack MERN Developer",
    avatar: "SR",
    bio: "Expert in building scalable web applications",
    linkedin: "https://linkedin.com/in/snehendu-roy",
  },
  {
    name: "Mitali Giri",
    role: "AI/ML Developer",
    avatar: "MG",
    bio: "Pioneering intelligent solutions with machine learning",
    linkedin: "https://linkedin.com/in/mitali-giri",
  },
  {
    name: "Achyut Pal",
    role: "Sr Developer",
    avatar: "AP",
    bio: "Senior developer specializing in scalable enterprise solutions",
    linkedin: "https://linkedin.com/in/achyut-pal",
  },
  {
    name: "Tushar Daiya",
    role: "Full Stack MERN Developer",
    avatar: "TD",
    bio: "Building robust and scalable web applications",
    linkedin: "https://linkedin.com/in/tushar-daiya",
  },
  {
    name: "Balaji Yadav",
    role: "Full Stack MERN Developer",
    avatar: "BY",
    bio: "Crafting modern web solutions with expertise in MERN stack",
    linkedin: "https://linkedin.com/in/balaji-yadav",
  },
];

// About page content
export const aboutFounderStory = [
  `Infiniti Tech Partners was founded by <span class="text-primary font-semibold">Sudipto</span>, a technologist who has spent his career inside the engine rooms of enterprise systems — building architectures, securing environments, scaling platforms, and leading high-impact technology transformations. Over the years, he worked across modernization, cloud engineering, cybersecurity, networking, and automation, eventually developing a reputation for solving problems that other teams labeled <span class="text-primary font-semibold">"too complex."</span>`,
  `Infiniti Tech Partners grew from that mindset: <span class="font-semibold text-white">engineering-first, execution-driven</span>, and built for organizations that expect reliability, speed, and long-term scalability.`,
];

export const aboutServicesExpanded: string[] = [
  "DevOps & DevSecOps engineering",
  "Cybersecurity operations and security automation",
  "Advanced networking & infrastructure architecture",
  "Smart city systems and IoT-driven deployments",
  "AI/ML-powered automation and intelligent decisioning",
  "Blockchain development & secure distributed systems",
  "High-performance websites and mobile applications",
  "Low Latecy, high throughput systems",
];

export const aboutOperatingPrinciples: string[] = [
  "An engineering-heavy delivery model",
  "Strong security discipline",
  "Rapid deployment frameworks",
  "Vendor-agnostic solutions",
  "Rigorous testing and optimization cycles",
  "Fast paced high quality delivery",
];

export const aboutClientReasons: AboutClientReason[] = [
  {
    text: "Deep technical capability across modern, emerging, and enterprise tech",
  },
  {
    text: "Architecture frameworks built for security, automation, and uptime",
  },
  {
    text: "Ability to take end-to-end ownership — from design to deployment to maintenance",
  },
  {
    text: "Experience across cloud providers, complex networks, and multi-vendor infrastructure",
  },
  {
    text: "A team that responds fast, executes cleanly, and understands real operational constraints",
  },
  {
    text: "A team that ships fast and delivers measurable business impact",
  },
];

export const aboutMotto =
  "Build systems that last, secure them by design, automate everything possible, and keep scaling forward.";

export const aboutVision =
  "To engineer the systems that power the next generation of digital infrastructure—secure, automated, intelligent, and built for scale.";

export const aboutCommitment =
  "We don't sell shortcuts. We deliver systems engineered with precision, built to perform, and designed to evolve as your business grows.";

export const aboutClosingStatement =
  "Infiniti Tech Partners exists for companies that want their technology to be an advantage, not a liability.";

// Previous Versions
export const versions: Version[] = [
  {
    version: "v2.0",
    header: "Current Version - Enhanced Performance & New Features",
    description:
      "Major redesign with improved animations, enhanced user experience, new constellation effects, and optimized performance. Added custom cursor, parallax effects, and modernized component architecture.",
    link: "/", // Current version - redirects to home
    isLatest: true,
  },
  {
    version: "v1.0",
    header: "Initial Release - Foundation Build",
    description:
      "Initial launch featuring core sections including home, services, products, portfolio, team, and contact. Implemented particle effects, aurora background, and basic navigation system.",
    link: "https://v1.infinititechpartners.com", // Update with actual v1.0 URL
  },
];
