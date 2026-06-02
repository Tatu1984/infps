export interface InsightSection {
  /** Optional sub-heading rendered as <h2>. Omit for the lead paragraph. */
  heading?: string;
  /** Either a paragraph (string) or a bullet list (array of strings). */
  body: string | string[];
}

export interface Insight {
  slug: string;
  title: string;
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
];

export const getInsight = (slug: string): Insight | undefined =>
  insights.find((i) => i.slug === slug);
