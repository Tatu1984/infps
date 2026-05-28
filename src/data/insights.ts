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
];

export const getInsight = (slug: string): Insight | undefined =>
  insights.find((i) => i.slug === slug);
