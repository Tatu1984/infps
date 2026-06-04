export interface InsightSection {
  /** Optional sub-heading rendered as <h2>. Omit for the lead paragraph. */
  heading?: string;
  /** Either a paragraph (string) or a bullet list (array of strings). */
  body: string | string[];
}

export interface Insight {
  slug: string;
  title: string;
  /**
   * REQUIRED supporting hero image (path under /public, e.g.
   * "/insights/my-post.svg"). Every post must ship with an image — the build
   * fails without one. Shown on the listing card and at the top of the article.
   */
  image: string;
  /** ≤155 chars — used as the meta description and OG description. */
  description: string;
  /** Author display name. Schema uses `Organization` as publisher. */
  author: string;
  /** ISO 8601 date. */
  publishedAt: string;
  /** Categorical label shown on the card. */
  category: "Engineering" | "Cloud" | "Security" | "AI" | "Hiring";
  /** Approximate read time in minutes (rounded). */
  readMinutes: number;
  /** Comma-separated keywords for usePageMeta. */
  keywords: string;
  /** Article body. Renderer treats the first section's `body` as the lead. */
  sections: InsightSection[];
}

export const insights: Insight[] = [
  {
    slug: "fractional-engineering-teams-2026",
    title: "Fractional Engineering Teams: A CTO's Guide for 2026",
    image: "/insights/fractional-engineering-teams-2026.svg",
    description:
      "When growth-stage CTOs in the US and UK choose a fractional engineering team over hiring, what they actually gain — and what tradeoffs to negotiate up front.",
    author: "Infiniti Tech Partners",
    publishedAt: "2026-05-20",
    category: "Hiring",
    readMinutes: 8,
    keywords:
      "fractional engineering team, fractional CTO services, engineering as a service, alternatives to hiring engineers, offshore vs fractional engineering, growth-stage engineering partner",
    sections: [
      {
        body: "Hiring a 20-person engineering team is no longer the default answer for a Series B SaaS company. It is the most expensive, slowest, riskiest way to ship a roadmap — and increasingly the path of last resort. Fractional engineering teams have moved from 'agency arrangement' to a first-class operating model, especially for growth-stage US and UK companies that need to ship enterprise-grade systems without absorbing 18 months of headcount overhead.",
      },
      {
        heading: "Why the math has changed",
        body: "A senior full-stack engineer in New York costs roughly $220–280K fully loaded. In London it is £130–170K. Multiply by ten and you are spending $2.4M–3.6M annually before benefits, equipment, recruiting fees, and the manager overhead each cluster of five engineers requires. A fractional team — typically four to seven senior engineers shared across two or three engagements — delivers the same throughput at 40–60% of that cost, with no recruiting cycle and no exit risk.",
      },
      {
        heading: "What 'fractional' actually means in 2026",
        body: [
          "A dedicated pod of senior engineers (no juniors), assigned to your codebase, not pulled across five clients per day.",
          "A single tech lead acting as your fractional VP of Engineering — running standups, owning estimates, and reporting to you.",
          "Production responsibility, not just 'feature delivery' — the same team is on-call for what they ship.",
          "Contract terms that scale up or down on 30–60 day notice, not annual commits.",
        ],
      },
      {
        heading: "When fractional is the wrong call",
        body: "If your codebase is your strategic moat and you need engineers who will be there in five years, hire. If you have a regulated workload that requires single-tenant staff (some defence, some federal healthcare), hire. If your CTO does not want to manage a vendor relationship and prefers to manage employees, hire. Fractional teams shine when the bottleneck is throughput, not retention.",
      },
      {
        heading: "Terms to negotiate up front",
        body: [
          "IP assignment on all delivered code — including configuration, infrastructure-as-code, and prompts.",
          "Source-code escrow or active repo access — never accept a delivery-only model.",
          "Defined handover criteria for when you do hire in-house.",
          "On-call expectations and incident-response SLAs in writing.",
          "Right to interview replacement engineers if the lead rolls off.",
        ],
      },
      {
        heading: "What good looks like at month three",
        body: "By the end of the third month, a healthy fractional engagement has shipped at least one production system, established CI/CD with your team's deploy cadence, and documented architecture decisions in your repo — not in a Google Doc on the vendor's drive. If your team cannot describe the system without the vendor in the room, the engagement is structured wrong. Fix it or change vendors.",
      },
      {
        heading: "How Infiniti Tech Partners runs this",
        body: "We operate as a fractional engineering partner for growth-stage US and UK companies. Pods are four to six senior engineers, a single tech lead, and an architect on call. We work in your repo, deploy to your accounts, are on-call for production, and our contracts assume you will eventually want to hire some of us — we make the handover cheap by design. If that sounds like the shape of partner you are evaluating, the contact page is the next click.",
      },
    ],
  },
  {
    slug: "soc-2-in-90-days",
    title: "SOC 2 in 90 Days: The Engineering-Led Playbook",
    image: "/insights/soc-2-in-90-days.svg",
    description:
      "How a senior engineering team can take a growth-stage SaaS company from zero SOC 2 controls to a Type I attestation in 90 days — without buying a compliance platform.",
    author: "Infiniti Tech Partners",
    publishedAt: "2026-05-25",
    category: "Security",
    readMinutes: 10,
    keywords:
      "SOC 2 compliance consulting, SOC 2 readiness timeline, SOC 2 Type I 90 days, SOC 2 for SaaS, engineering led SOC 2, compliance as code",
    sections: [
      {
        body: "SOC 2 has become table stakes for selling B2B SaaS to mid-market and enterprise buyers in both the US and UK. The traditional path — buy a compliance automation platform, hire a vCISO, run a six-month readiness program — works, but it is slower and more expensive than it has to be. Engineering-led teams can reach a SOC 2 Type I attestation in 90 days by treating controls as code, not policies.",
      },
      {
        heading: "What you actually need for Type I",
        body: "Type I is a point-in-time attestation — an auditor confirms your controls exist and are designed correctly on the audit date. Type II proves they ran continuously for 3–12 months. Most enterprise buyers will accept a Type I plus a credible Type II timeline. Optimizing for Type I in 90 days gets you through procurement; the next 9 months earn the Type II evidence in the background.",
      },
      {
        heading: "The 90-day shape",
        body: [
          "Days 1–15: scoping. Identify the systems in scope (production, build, deploy, observability), the data classifications, and which Trust Service Criteria you are claiming (Security at minimum; Confidentiality and Availability if buyers ask).",
          "Days 16–45: controls implementation. SSO with MFA, centralized logging, vulnerability scanning, secrets management, change-management workflow, employee onboarding/offboarding automation. All of this should be in your IaC repo, not a binder.",
          "Days 46–75: policies and evidence. Policies are easy and last. Evidence collection is the actual work — automated screenshots, ticket trails, log retention proof, access reviews on a defined cadence.",
          "Days 76–90: pre-audit and remediation. Run a dry-run audit against your own controls. Fix the gaps. Schedule the auditor.",
        ],
      },
      {
        heading: "Compliance as code, not policy theatre",
        body: "A policy that says 'access reviews are performed quarterly' is auditor bait if you do not have a script that pulls IAM principals, files a ticket, requires sign-off, and writes the result to immutable storage. Build the script. The auditor will ask for evidence; produce it from the script. The same applies to vulnerability scans, secrets rotation, backup restore tests, and offboarding. If a control cannot be triggered by a cron job or a CI step, it will fail in year two.",
      },
      {
        heading: "Where teams get stuck",
        body: [
          "Trying to cover too many Trust Service Criteria. Start with Security. Add Confidentiality only if a buyer demands it.",
          "Buying a compliance platform before defining controls. The platform encodes your decisions; make the decisions first.",
          "Ignoring the build and deploy pipeline. Auditors care more about who can push to production than who can SSH to the database.",
          "Treating vendors as out-of-scope. Sub-processor management is in scope. Get your DPA template ready and your vendor inventory current.",
        ],
      },
      {
        heading: "Cost expectations",
        body: "An engineering-led SOC 2 Type I, done in 90 days with a senior team and an external auditor, lands at roughly $40–80K in audit and consulting fees for a typical growth-stage SaaS. Type II adds the audit period plus another $25–45K depending on scope. Adding a compliance platform on top of that adds $10–30K annually; useful at year two when the evidence volume explodes, premature in year one.",
      },
      {
        heading: "How Infiniti Tech Partners runs this",
        body: "We have walked growth-stage SaaS companies through SOC 2 Type I as a 90-day engagement: scope, build controls in IaC, automate evidence collection, run the dry-run audit, and hand off to the auditor. The deliverable is a working system, not a binder. If you are staring at an enterprise deal with a SOC 2 prerequisite and a Q3 close date, this is the shape of engagement to start now.",
      },
    ],
  },
  {
    slug: "cost-of-in-house-engineering-team-us-uk",
    title: "The Real Cost of an In-House Engineering Team: US vs UK",
    image: "/insights/cost-of-in-house-engineering-team-us-uk.svg",
    description:
      "What a 6-person engineering team actually costs in New York and London once you add recruiting, ramp-up, management and attrition — and when that spend is worth it.",
    author: "Infiniti Tech Partners",
    publishedAt: "2026-06-02",
    category: "Hiring",
    readMinutes: 9,
    keywords:
      "cost to build engineering team, in-house vs outsourced engineering cost, software engineer salary US vs UK, true cost of hiring engineers, engineering team budget, build vs buy engineering",
    sections: [
      {
        body: "The salary figure a recruiter quotes you is the smallest number in the whole calculation. When a growth-stage CTO budgets for an in-house engineering team, the base-salary line is usually 55–65% of what the team actually costs in year one. The rest — recruiting fees, payroll taxes, benefits, equipment, software, office or remote stipends, management overhead, and the months each hire spends ramping before they ship anything useful — is the part that quietly doubles the bill. Here is what a six-engineer team really costs in the US and UK, line by line.",
      },
      {
        heading: "Start with fully-loaded salary, not base",
        body: "A senior full-stack engineer's base in New York is roughly $200–260K; in San Francisco add 10–15%; in Austin subtract 15–20%. In London the equivalent base is £120–160K, Manchester or Edinburgh 20–30% less. But 'fully loaded' — employer payroll taxes, healthcare, pension/401k match, equipment, SaaS seats, and a share of facilities — adds 25–35% in the US and 20–30% in the UK on top of base. So one senior engineer is closer to $270–340K in New York and £150–200K in London before they have written a line of code that ships.",
      },
      {
        heading: "The six-person team, year one",
        body: [
          "New York: 6 senior engineers fully loaded ≈ $1.7M–2.0M. Add a $200–260K engineering manager and you are at roughly $1.9M–2.3M.",
          "London: 6 senior engineers fully loaded ≈ £950K–1.2M. Add a £150–190K manager and you are near £1.1M–1.4M (about $1.4M–1.8M).",
          "These figures assume you can fill all six seats. In practice, hiring six senior engineers takes most teams 6–11 months.",
        ],
      },
      {
        heading: "The costs that never make the budget deck",
        body: [
          "Recruiting: 20–25% of first-year salary per agency hire, or a $120–180K in-house recruiter plus tooling. For six hires, $250–400K is realistic in the US.",
          "Time-to-productivity: a senior engineer takes 2–4 months to reach full output in an unfamiliar codebase. Six hires staggered over the year means you pay for far more chair-time than shipped work in months 1–12.",
          "Management overhead: every five engineers needs roughly one manager's worth of coordination. That is salary you spend on throughput you do not directly get.",
          "Attrition: average tech tenure is under two years. One departure mid-year means a backfill cycle, lost context, and a 2–4 month productivity dip on top of new recruiting fees.",
        ],
      },
      {
        heading: "The 18-month reality",
        body: "The number that matters is not annual cost — it is cost-to-first-meaningful-delivery. A from-scratch in-house team typically needs 6–11 months to assemble and another 2–4 months to ramp, so you are often 9–15 months and $1.5M+ in before the team is shipping at the velocity you budgeted for. For a Series B company with a board-committed roadmap, that lag is frequently the real constraint — not the money.",
      },
      {
        heading: "When in-house is clearly worth it",
        body: "If engineering is your strategic moat, if you are building IP you must own and staff for five years, or if you have regulated workloads requiring single-tenant employees, hire — the long-run economics favor it and the institutional knowledge compounds. The cost is high but the asset is real. In-house is the right answer when retention and ownership matter more than time-to-market.",
      },
      {
        heading: "When the math favors a fractional team instead",
        body: "When the bottleneck is throughput on a defined roadmap — not building a permanent org — a senior fractional team delivers comparable output at 40–60% of fully-loaded in-house cost, with no recruiting cycle, no ramp lag, and contract terms that flex on 30–60 day notice. We break that operating model down in our guide to fractional engineering teams. The honest decision is rarely 'in-house vs outsourced' in the abstract; it is 'do I need a permanent asset, or do I need this roadmap shipped this year?'",
      },
      {
        heading: "How Infiniti Tech Partners helps you decide",
        body: "We will model your specific build-vs-partner numbers with you — your stack, your roadmap, your US or UK hiring market — and tell you honestly when hiring is the better call. If the answer is a fractional pod, we can have senior engineers in your codebase in weeks, not the better part of a year. If the answer is hire, we will tell you that too. Start a conversation and we will run the numbers for your situation.",
      },
    ],
  },
  {
    slug: "build-vs-buy-software-2026",
    title: "The 2026 Build vs Buy Decision Framework for Growth-Stage CTOs",
    image: "/insights/build-vs-buy-software-2026.svg",
    description:
      "A practical framework for deciding when to build custom software, when to buy off-the-shelf, and when to do both — with the hidden costs most teams miss on each side.",
    author: "Infiniti Tech Partners",
    publishedAt: "2026-06-02",
    category: "Engineering",
    readMinutes: 9,
    keywords:
      "build vs buy software, build vs buy decision framework, custom software vs off the shelf, when to build custom software, software build vs buy 2026, build buy partner",
    sections: [
      {
        body: "\"Build or buy?\" is the wrong question in 2026. The real question is a three-way split — build, buy, or partner — and the right answer is usually different for each component of your stack on the same day. The teams that get this wrong either rebuild commodity infrastructure that a $40/month SaaS would have solved, or they buy a rigid platform for the one workflow that is actually their competitive edge. Here is the framework we use with growth-stage CTOs to decide, component by component.",
      },
      {
        heading: "The one question that settles most of it",
        body: "For any given capability, ask: is this a source of competitive differentiation, or is it table stakes? Differentiators are the things customers choose you for — your matching algorithm, your underwriting model, your clinical workflow. Table stakes are everything customers expect but never praise — auth, billing, email, logging, CRM. Build your differentiators. Buy your table stakes. The expensive mistakes almost always come from inverting this: custom-building a billing system, or buying a generic platform for the workflow that is your moat.",
      },
      {
        heading: "The four-factor scoring rubric",
        body: [
          "Differentiation: does owning this change why customers pick you? High → lean build.",
          "Fit: does an off-the-shelf option cover 80%+ of your need without contortion? High → lean buy.",
          "Time-to-value: how badly do you need this live this quarter? Urgent → lean buy or partner.",
          "Total cost of ownership: include not just license or build cost but maintenance, integration, and the opportunity cost of your engineers' attention over 3 years.",
        ],
      },
      {
        heading: "The hidden costs of 'buy'",
        body: "Buying looks cheaper because the price is on the pricing page. The costs that are not on the page: integration engineering (often 2–5x the first-year license), data lock-in, per-seat pricing that scales against you, feature gaps you discover in month four, and the slow tax of bending your process to fit someone else's product. Buy is still usually right for table stakes — just budget for integration, not just licenses.",
      },
      {
        heading: "The hidden costs of 'build'",
        body: "Building looks more controllable because you own it. The costs that surface later: you now maintain it forever, you carry the on-call burden, every adjacent feature becomes your job, and the engineers maintaining commodity infrastructure are not building your differentiators. Build is right for your moat — and a trap for everything else. A good test: if a capable competitor could buy the same outcome off the shelf, you probably should too.",
      },
      {
        heading: "When 'partner' beats both",
        body: "There is a third option growth-stage teams underuse: partner. When a capability is differentiating enough to need custom work, but you do not want to hire a permanent team to build and own it, a senior engineering partner builds it to your spec and hands it over — or runs it as a fractional pod. This is the right call when the work is too strategic to buy generic, but the timeline or hiring cost of doing it fully in-house does not pencil out. We break the economics of that model down in our guide to fractional engineering teams.",
      },
      {
        heading: "A worked example",
        body: "A Series B fintech we advised wanted to 'build everything' for control. Applying the rubric: auth → buy (Auth0), billing → buy (Stripe), logging/observability → buy, internal admin tooling → buy a low-code option, and the risk-scoring engine → build, because that was the actual product. They cut their roadmap by an estimated five months by refusing to build the four table-stakes systems, and put their senior engineers entirely on the one thing customers were paying for.",
      },
      {
        heading: "How Infiniti Tech Partners helps",
        body: "We will run this rubric across your stack with you in a single working session — flag what to buy, what to build, and the one or two components worth a custom partner build — then scope only the parts that genuinely need engineering. The goal is fewer things built, better. Start a conversation and we will map your build-buy-partner split.",
      },
    ],
  },
  {
    slug: "how-to-hire-ai-consulting-partner",
    title: "How to Hire an AI Consulting Partner: A Buyer's Guide for 2026",
    image: "/insights/how-to-hire-ai-consulting-partner.svg",
    description:
      "What to look for, what to ask, and the red flags to avoid when choosing an enterprise AI consulting partner — from a team that ships LLM and agent systems to production.",
    author: "Infiniti Tech Partners",
    publishedAt: "2026-06-02",
    category: "AI",
    readMinutes: 8,
    keywords:
      "how to hire AI consulting firm, AI consulting partner, enterprise AI consultant, choosing AI development company, AI consulting RFP, LLM development partner",
    sections: [
      {
        body: "The market is flooded with firms that rebranded as 'AI consultancies' in the last 18 months. Some ship production systems; many ship slide decks and a thin wrapper around an API. For an enterprise buyer, the cost of choosing wrong is not just wasted budget — it is a stalled initiative, a security incident, or a proof-of-concept that never survives contact with real users. Here is how to tell the builders from the storytellers.",
      },
      {
        heading: "Why most enterprise AI engagements stall",
        body: "It is rarely the model. Engagements stall on the unglamorous parts: data that is messier than the demo assumed, no evaluation harness so nobody can tell if the system is getting better or worse, latency and cost that are fine in a demo and ruinous at scale, and no plan for the day the model is wrong in front of a customer. A good partner spends most of its time on these problems, not on prompt-tuning.",
      },
      {
        heading: "What to look for",
        body: [
          "Production references, not demos. Ask to see something live, with real users, that has been running for months.",
          "An evaluation-first mindset. They should talk about how they will measure quality before they talk about which model.",
          "Engineering depth, not just prompting. RAG, agents, and fine-tuning are software systems — they need real engineering around them.",
          "Security and data handling answers that are specific: where your data goes, what is logged, how PII is handled, whether your data trains anyone's model.",
          "A bias toward the smallest thing that works — not the most impressive architecture.",
        ],
      },
      {
        heading: "Questions to put in your RFP",
        body: [
          "How will you measure whether this system is good enough to ship — and who decides?",
          "What happens when the model is confidently wrong? Show me the fallback.",
          "What is the expected per-request cost and latency at our real volume, not the demo's?",
          "Which parts will be RAG, which fine-tuning, which a deterministic system — and why?",
          "What does handover look like? Can our team run and improve this without you?",
        ],
      },
      {
        heading: "Red flags",
        body: [
          "They lead with the model (\"we use the latest frontier model\") instead of your problem.",
          "No evaluation strategy, or they treat 'it looks good in testing' as a metric.",
          "Vague data-handling answers, or reluctance to put data terms in writing.",
          "A proposal that is all proof-of-concept and no path to production.",
          "Pricing that rewards complexity — more agents, more infrastructure — rather than outcomes.",
        ],
      },
      {
        heading: "Pricing models, and which to prefer",
        body: "Fixed-scope POCs are fine for de-risking a single question, but insist on a defined success metric up front or you will pay for a demo. Time-and-materials suits genuinely exploratory work with a trusted partner. Be wary of pure outcome-based pricing in AI — outcomes depend heavily on your data, which the partner does not control, so it tends to get priced defensively. The healthiest structure is usually a short paid discovery to scope honestly, then a milestone-based build with a clear production definition.",
      },
      {
        heading: "How Infiniti Tech Partners approaches AI work",
        body: "We start with the metric, not the model: define what 'good enough to ship' means, build the evaluation harness first, then choose the simplest architecture — RAG, agent, fine-tune, or plain software — that clears the bar at acceptable cost and latency. We hand over systems your team can run, with the data and security terms in writing. If you are scoping an AI initiative and want a partner who will tell you when the answer is 'you do not need AI for this,' start a conversation.",
      },
    ],
  },
  {
    slug: "aws-cost-optimization-saas",
    title: "AWS Cost Optimization: 12 Levers for SaaS at $5M–$50M ARR",
    image: "/insights/aws-cost-optimization-saas.svg",
    description:
      "The 12 levers that cut a growth-stage SaaS company's AWS bill by 30–50% — from rightsizing and savings plans to data-transfer and architecture fixes — without slowing the team down.",
    author: "Infiniti Tech Partners",
    publishedAt: "2026-06-03",
    category: "Cloud",
    readMinutes: 10,
    keywords:
      "AWS cost optimization, reduce AWS bill, SaaS cloud cost optimization, AWS savings plans, EC2 rightsizing, data transfer costs, FinOps for SaaS, cloud cost reduction",
    sections: [
      {
        body: "Somewhere between $5M and $50M ARR, the AWS bill stops being a rounding error and becomes one of your largest line items after payroll — often 8–15% of revenue. The good news: most growth-stage SaaS infrastructure carries 30–50% of waste that can be removed without re-architecting anything or slowing the team down. Here are the 12 levers we pull, roughly in order of return-on-effort.",
      },
      {
        heading: "Start with visibility — you can't cut what you can't see",
        body: [
          "Turn on Cost Explorer and tag everything by team, service and environment. Untagged spend is unmanaged spend.",
          "Set a monthly budget with alerts. The goal is to be surprised in week one, not at the invoice.",
          "Find your top 5 cost drivers. In most SaaS the bill is 80% compute + storage + data transfer; optimize those before anything exotic.",
        ],
      },
      {
        heading: "Compute — usually the biggest win",
        body: [
          "1. Rightsize. Most instances run at 10–30% utilization. Drop over-provisioned EC2/RDS down a size (or two) using real CloudWatch data — often a 20–40% compute cut on its own.",
          "2. Buy Savings Plans / Reserved Instances for your steady-state baseline. A 1-year Compute Savings Plan is ~30% off on-demand for workloads you know you'll run. Cover the floor, leave the spikes on-demand.",
          "3. Use Spot for fault-tolerant work — batch jobs, CI runners, async workers, stateless background processing. Up to 70–90% off, as long as the workload tolerates interruption.",
          "4. Schedule non-production. Dev, staging and QA do not need to run nights and weekends. An automated stop/start schedule cuts those environments ~65%.",
        ],
      },
      {
        heading: "Storage and data — the quiet bleed",
        body: [
          "5. Apply S3 lifecycle policies. Move infrequently accessed objects to Infrequent Access or Glacier, and expire what you don't need. Most buckets have years of logs and backups paying hot-storage prices.",
          "6. Clean up orphaned resources: unattached EBS volumes, old snapshots, idle load balancers, unused elastic IPs. They bill quietly forever.",
          "7. Right-tier EBS. gp3 is cheaper and faster than gp2 for most workloads — and you can tune IOPS independently.",
        ],
      },
      {
        heading: "Data transfer — the line nobody reads",
        body: [
          "8. Kill cross-AZ chatter. Inter-AZ traffic is billed both ways and adds up fast in chatty microservices. Co-locate services that talk constantly, and keep databases in the same AZ as their primary consumers where HA allows.",
          "9. Put CloudFront in front of egress. Serving assets and API responses through the CDN is cheaper than raw data-out from EC2/S3 — and faster for users.",
          "10. Use VPC endpoints for AWS-service traffic (S3, DynamoDB) so it doesn't route through a NAT gateway, which charges per-GB on top of hourly.",
        ],
      },
      {
        heading: "Architecture and managed services",
        body: [
          "11. Question always-on for spiky workloads. If traffic is bursty, serverless (Lambda, Fargate) or autoscaling can beat a fleet sized for peak that idles the rest of the day.",
          "12. Audit managed-service tiers. Over-provisioned RDS, idle Elasticsearch/OpenSearch domains, and forgotten dev databases are common five-figure-a-year leaks.",
        ],
      },
      {
        heading: "Where to start (the 80/20)",
        body: "If you only do three things this quarter: rightsize compute, buy a Savings Plan for your baseline, and schedule non-production environments to shut off out of hours. Those three alone typically recover 25–35% with low risk and no architectural change. The data-transfer and architecture levers come next, once you have visibility and the easy wins banked.",
      },
      {
        heading: "How Infiniti Tech Partners helps",
        body: "We run a fixed-scope cloud cost audit: we instrument your account, find the waste, and hand you a prioritized plan with the dollar impact and risk of each lever — then implement the ones you want, from rightsizing to architecture changes. Most engagements pay for themselves inside the first month's savings. If your AWS bill is growing faster than your revenue, start a conversation and we'll find out why.",
      },
    ],
  },
  {
    slug: "rag-vs-fine-tuning-vs-agents-2026",
    title: "RAG vs Fine-Tuning vs Agents: Choosing the Right LLM Pattern in 2026",
    image: "/insights/rag-vs-fine-tuning-vs-agents-2026.svg",
    description:
      "How to choose between RAG, fine-tuning, and agents for an enterprise AI system — with a decision tree, cost benchmarks, and the mistakes that cost teams 3–6 months.",
    author: "Infiniti Tech Partners",
    publishedAt: "2026-06-04",
    category: "AI",
    readMinutes: 9,
    keywords:
      "RAG vs fine tuning 2026, RAG vs agents, LLM patterns enterprise, when to use RAG, fine tuning vs RAG, enterprise AI architecture, LLM application development services",
    sections: [
      {
        body: "The three patterns — RAG, fine-tuning, and agents — are now the default vocabulary of enterprise AI conversations. Most buyers recognise the terms; most vendors are content to let confusion persist, because complexity inflates proposals. The honest answer for the majority of enterprise use cases in 2026: start with RAG, because it is the only pattern that surfaces fresh data, delivers traceable answers, and lets you fix errors by updating content rather than retraining a model. But 'majority' is not 'all.' Picking the wrong pattern costs three to six months of rework and $40–120K in engineering time. Here is how to tell them apart — and choose correctly before any code is written.",
      },
      {
        heading: "What each pattern actually does",
        body: [
          "RAG (Retrieval-Augmented Generation): at query time, retrieve relevant documents from a vector store or search index, inject them into the model's context window, generate a grounded answer. The model weights are unchanged — your documents are the knowledge layer. Errors are fixed by updating the corpus.",
          "Fine-tuning: update the model's weights on your own dataset. The model learns your style, task format, or domain vocabulary — but not your current data, because training is a point-in-time operation. It cannot update what it knows by reading new documents after training.",
          "Agents: an orchestration pattern where the model calls tools (APIs, search, calculators, code runners) and makes multi-step decisions across multiple LLM calls. Agents are built on top of a base model or a RAG pipeline — they are not a third knowledge layer, and they are the answer to 'the task requires actions and intermediate reasoning, not just a single answer.'",
        ],
      },
      {
        heading: "RAG: the right default for most enterprise use cases",
        body: "RAG is the correct starting point when your knowledge base changes at least weekly — documents, policies, product specs, case history, pricing — and when you need traceable answers that point to a source. It is also the most debuggable pattern: if the model says something wrong, the cause is usually a retrieval miss or a poorly chunked document, both of which are fixable without touching the model. At 10,000 queries per day using Claude Sonnet or GPT-4o, a well-built RAG pipeline costs roughly $400–900 per month in inference plus $50–200 per month for a vector database — a manageable operating expense. The failure mode to watch: retrieval quality. If your retrieval recall at K=10 is below 80%, generation quality will follow. Budget as much engineering attention for the retrieval layer as for the prompt.",
      },
      {
        heading: "Fine-tuning: when it actually earns its cost",
        body: [
          "Style and format conformance: you need every output in a specific JSON schema, tone, or language register, and prompt engineering cannot reliably enforce it across thousands of daily queries.",
          "Narrow, high-volume structured tasks: classification, named-entity extraction, code completion in a proprietary syntax — tasks with labeled training data and a measurable label to optimize against.",
          "Cost reduction at extreme scale: fine-tuning a smaller open-weights model (Llama 3.1 8B, Mistral 7B) on a task a frontier model handles well can cut per-query cost by 60–80% at throughputs above 500,000 queries per day. Below that volume, the training-pipeline overhead rarely amortises.",
          "What fine-tuning is not: a knowledge-update mechanism. A fine-tuned model does not learn about events after its training cutoff. Teams that fine-tune to 'teach the model about our company' and then ask it real-time questions about current inventory or recent tickets are using the wrong tool.",
        ],
      },
      {
        heading: "Agents: orchestration, not a knowledge layer",
        body: "Agents are the right pattern when a task cannot be answered from a single context window — it requires calling an API, running code, retrieving information from multiple sources, or making decisions based on intermediate results. Common production use cases: a customer-service resolver that looks up account status, reads policy documents, and drafts a resolution; a security triage agent that fetches alert context, queries threat intelligence, and files a ticket; a research assistant that searches, summarises, and drafts a briefing. The production risks are underappreciated: agents introduce latency (each tool call is an LLM round-trip), cost (each step is billed separately), and compounding failure modes (a wrong tool path can cascade). Production agents need a tight task scope, deterministic fallbacks, and human-in-the-loop checkpoints for any action with financial or reputational consequence.",
      },
      {
        heading: "The decision tree — four questions",
        body: [
          "Does the task require fresh, proprietary, or frequently changing knowledge (documents, records, policies)? → RAG.",
          "Is the task narrow and structured, with thousands of labeled examples, and is prompt engineering failing to enforce accuracy or output format reliably at scale? → Fine-tuning.",
          "Does the task require multi-step reasoning, tool calls, or actions that depend on intermediate results? → Agents (usually built on top of RAG or a base model).",
          "Unsure? → RAG first. It is the fastest to ship, the easiest to debug, the cheapest to update, and the pattern most enterprise applications actually need most of the time.",
        ],
      },
      {
        heading: "The hybrid most production systems end up at",
        body: "The realistic architecture at 12 months for a production enterprise AI system: RAG for knowledge grounding, fine-tuning (optional, on a smaller open-weights model) for cost reduction at high throughput, and agents where multi-step orchestration is genuinely required. The order matters. Build RAG first, measure retrieval quality and end-to-end accuracy, then fine-tune if cost or format conformance is the specific bottleneck, then add agents if the task is genuinely multi-step. Building all three simultaneously — before you have measured anything — is the fastest path to an unmaintainable system that serves no one well.",
      },
      {
        heading: "Cost benchmarks for each pattern",
        body: [
          "RAG pipeline: $15–40K in engineering time to build and evaluate properly; $500–1,500 per month in infrastructure at moderate query volume.",
          "Fine-tuning pipeline: $20–60K in data preparation, training runs, and evaluation harness; plus $5–15K per retraining cycle, which for most production systems runs quarterly.",
          "Agent system: $30–80K in engineering time for a production-grade implementation with proper guardrails, observability, and fallbacks; higher marginal per-query cost than pure RAG due to multi-step LLM calls.",
          "The most expensive outcome: building a fine-tuning pipeline or a multi-agent system for a task that a well-built RAG pipeline would have solved at a fraction of the cost — a mistake visible in roughly one in three enterprise AI RFPs we review.",
        ],
      },
      {
        heading: "How Infiniti Tech Partners helps",
        body: "We build and ship RAG pipelines, fine-tuned task models, and production agent systems. Every engagement starts by picking the pattern that fits the task before writing code — and ends with a system your team can operate and improve without us in the room. If you are scoping an enterprise AI initiative and want a team that will tell you the cheapest pattern that works, not the most impressive architecture, that is the conversation to start.",
      },
    ],
  },
];

export const getInsight = (slug: string): Insight | undefined =>
  insights.find((i) => i.slug === slug);
