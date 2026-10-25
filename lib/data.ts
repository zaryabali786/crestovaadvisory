export const site = {
  name: "Crestova Advisory",
  legal: "Crestova Consulting (Pvt.) Limited",
  tagline: "Insight. Integrity. Impact.",
  email: "ali@crestovaadvisory.com",
  phone: "+92 312 746 5649",
  phoneHref: "+923127465649",
  linkedin: "https://www.linkedin.com/company/crestova-advisory",
  offices: [
    { city: "Lahore", line: "House No. 35, G Block, Model Town" },
    { city: "Rawalpindi", line: "Office S206, 2nd Floor, Noor Mall Plaza, Satellite Town" },
  ],
  hours: "Mon–Fri, 09:00–18:00 GMT",
};

export const markets = [
  { code: "US", name: "United States", lat: 40.7, lon: -74 },
  { code: "UK", name: "United Kingdom", lat: 51.5, lon: -0.1 },
  { code: "CA", name: "Canada", lat: 43.7, lon: -79.4 },
  { code: "AE", name: "UAE", lat: 25.2, lon: 55.3 },
  { code: "SA", name: "Saudi Arabia", lat: 24.7, lon: 46.7 },
  { code: "AU", name: "Australia", lat: -33.9, lon: 151.2 },
  { code: "PK", name: "Pakistan", lat: 31.5, lon: 74.3 },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  group: "Accounting & Reporting" | "Tax & Compliance" | "Assurance & Risk" | "Growth & Advisory";
  summary: string;
  points: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    short: "Books closed in five days, every month.",
    group: "Accounting & Reporting",
    summary:
      "Monthly bookkeeping, reconciliations and management accounts delivered to an audit-ready standard and reviewed by a senior CA before they reach you.",
    points: ["Monthly close within 5 business days", "Bank, card and ledger reconciliations", "AP / AR management", "Management accounts and KPI packs"],
    outcome: "Numbers you can trust, on a calendar you can plan around.",
  },
  {
    slug: "ifrs-financial-reporting",
    title: "IFRS & Financial Reporting",
    short: "Statements that satisfy banks, investors and auditors.",
    group: "Accounting & Reporting",
    summary:
      "IFRS and local-GAAP financial statements, group consolidations and multi-currency reporting prepared with full disclosures, ready for any audience.",
    points: ["IFRS, US GAAP, FRS 102 reporting", "Group consolidation schedules", "Disclosure checklists and policies", "First-time IFRS adoption support"],
    outcome: "Financials that pass first submission, not third.",
  },
  {
    slug: "virtual-cfo",
    title: "Virtual CFO & Strategy",
    short: "CFO-level leadership without the full-time hire.",
    group: "Growth & Advisory",
    summary:
      "Senior financial leadership on a flexible engagement: cash-flow planning, investor reporting, board packs and the strategic questions that shape growth.",
    points: ["Cash-flow and runway planning", "Board and investor reporting", "Budgeting and forecasting", "Fundraising financial preparation"],
    outcome: "Boardroom-grade finance at a fraction of the cost.",
  },
  {
    slug: "corporate-tax-advisory",
    title: "Corporate Tax Advisory",
    short: "Every deadline, every jurisdiction, never missed.",
    group: "Tax & Compliance",
    summary:
      "Corporate tax planning, computation and filing across our seven markets, with a compliance calendar we manage before deadlines arrive.",
    points: ["Corporate and income tax returns", "Tax planning and structuring", "Notices, assessments and litigation support", "Cross-border tax positions"],
    outcome: "A defensible tax position and zero surprises.",
  },
  {
    slug: "vat-indirect-tax",
    title: "VAT & Indirect Tax",
    short: "VAT, GST and sales tax handled end to end.",
    group: "Tax & Compliance",
    summary:
      "Registration, return preparation and reconciliation for VAT, GST, HST and sales tax, including cross-border and e-commerce nexus questions.",
    points: ["Registration and deregistration", "Periodic returns and reconciliations", "Cross-border and import VAT", "Health checks and refund claims"],
    outcome: "Clean returns and fewer penalties.",
  },
  {
    slug: "payroll-employment-tax",
    title: "Payroll & Employment Tax",
    short: "Accurate payroll, compliant in every market.",
    group: "Tax & Compliance",
    summary:
      "Payroll processing, withholding and social-contribution compliance for teams in one or several jurisdictions.",
    points: ["Monthly payroll processing", "Withholding and statutory filings", "Social contributions and benefits", "Employee tax reporting"],
    outcome: "Your people paid correctly and on time.",
  },
  {
    slug: "audit-readiness",
    title: "Audit Readiness & Support",
    short: "Arrive at your audit with everything already done.",
    group: "Assurance & Risk",
    summary:
      "Pre-audit preparation, working-paper compilation and auditor liaison so audits run faster and with fewer management-letter points.",
    points: ["Audit file and schedule preparation", "Auditor liaison and queries", "Prior-year finding remediation", "Year-end close support"],
    outcome: "Shorter audits and cleaner opinions.",
  },
  {
    slug: "internal-controls-risk",
    title: "Internal Controls & Risk",
    short: "Controls that stop small gaps becoming costly ones.",
    group: "Assurance & Risk",
    summary:
      "Design and review of internal-control frameworks, segregation of duties and risk assessments, plus outsourced internal audit.",
    points: ["Control framework design", "Risk and fraud assessments", "Policies and procedures", "Internal audit reviews"],
    outcome: "Protection from misstatement, fraud and regulatory exposure.",
  },
  {
    slug: "corporate-secretarial",
    title: "Corporate Secretarial",
    short: "Company compliance, kept current.",
    group: "Tax & Compliance",
    summary:
      "Incorporation, statutory registers, annual filings and regulatory returns, so your company stays in good standing.",
    points: ["Incorporation and registration", "Annual returns and filings", "Statutory registers and minutes", "SECP and regulator liaison"],
    outcome: "A company record that is always audit-ready.",
  },
  {
    slug: "aml-cft-compliance",
    title: "AML/CFT Compliance",
    short: "Regulatory readiness for regulated businesses.",
    group: "Assurance & Risk",
    summary:
      "Anti-money-laundering and counter-terrorist-financing programme design, risk assessments, policies and staff training.",
    points: ["Business-wide risk assessment", "AML policies and procedures", "KYC and onboarding frameworks", "Training and gap reviews"],
    outcome: "A programme regulators recognise.",
  },
  {
    slug: "technology-risk-cyber",
    title: "Technology Risk & Cyber",
    short: "IT controls and cyber readiness.",
    group: "Assurance & Risk",
    summary:
      "ITGC testing, ISO 27001 and NIST readiness, and cyber-risk assessment aligned with regional regulations.",
    points: ["ITGC and application-control testing", "ISO 27001 / NIST readiness", "Cyber-risk assessment", "Policy development"],
    outcome: "Technology risk you can see, measure and manage.",
  },
  {
    slug: "finance-outsourcing",
    title: "Finance Outsourcing (BPO)",
    short: "A complete finance department, without building one.",
    group: "Accounting & Reporting",
    summary:
      "Full-function outsourced finance: bookkeeping, AP/AR, payroll, reporting and controller-level oversight under one fixed monthly fee.",
    points: ["Bookkeeping, AP and AR", "Payroll and compliance", "Monthly reporting", "Controller-level oversight"],
    outcome: "In-house quality for far less than an in-house team.",
  },
  {
    slug: "fpa",
    title: "FP&A",
    short: "Decisions made with financial intelligence.",
    group: "Growth & Advisory",
    summary:
      "Three-statement models, rolling cash-flow forecasts, KPI dashboards and variance analysis that help you see problems before they arrive.",
    points: ["Three-statement financial models", "13-week rolling cash flow", "KPI dashboards", "Variance and scenario analysis"],
    outcome: "Forward-looking numbers, not just history.",
  },
  {
    slug: "startup-finance",
    title: "Startup Finance",
    short: "Finance foundations for fast-growing companies.",
    group: "Growth & Advisory",
    summary:
      "Investor-ready financial models, cap-table support, due-diligence preparation and the controls a growing company needs.",
    points: ["Fundraising models and data rooms", "Burn and runway tracking", "Due-diligence preparation", "Scalable finance processes"],
    outcome: "Be ready when the investor asks.",
  },
  {
    slug: "transfer-pricing",
    title: "Transfer Pricing",
    short: "Documentation that stands up to scrutiny.",
    group: "Tax & Compliance",
    summary:
      "Transfer-pricing policies, local files and benchmarking for groups with related-party transactions across borders.",
    points: ["Policy design", "Local file and master file", "Benchmarking studies", "Related-party disclosures"],
    outcome: "Defensible intercompany pricing.",
  },
  {
    slug: "finance-transformation",
    title: "Finance Transformation",
    short: "Faster, cleaner, more automated finance.",
    group: "Growth & Advisory",
    summary:
      "Process redesign, ERP and cloud-accounting migration, and automation that shortens the close and improves data quality.",
    points: ["Process mapping and redesign", "Cloud accounting migration", "Close and reporting automation", "Chart-of-accounts clean-up"],
    outcome: "Less manual work, better information.",
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    short: "Practical strategic finance support.",
    group: "Growth & Advisory",
    summary:
      "Feasibility studies, market-entry finance, restructuring and valuation support for owners making significant decisions.",
    points: ["Feasibility and market entry", "Restructuring and succession", "Valuation support", "Investment appraisal"],
    outcome: "Confident decisions on big questions.",
  },
];

export const serviceGroups = ["Accounting & Reporting", "Tax & Compliance", "Assurance & Risk", "Growth & Advisory"] as const;

export type Industry = { slug: string; title: string; blurb: string; challenges: string[]; support: string[] };

export const industries: Industry[] = [
  {
    slug: "manufacturing-textiles",
    title: "Manufacturing & Textiles",
    blurb: "Cost accuracy, inventory valuation and export-ready financials for producers.",
    challenges: ["Cost accounting and overhead absorption", "Inventory valuation at raw, WIP and finished stages", "IFRS statements for lenders and buyers", "Transfer pricing for multi-entity groups"],
    support: ["Monthly costing and margin reporting", "Export and incentive compliance", "Audit-ready fixed-asset registers"],
  },
  {
    slug: "trading-distribution",
    title: "Trading & Distribution",
    blurb: "Multi-currency books and landed-cost clarity for importers and wholesalers.",
    challenges: ["Multi-currency inventory accounting", "Import duty and landed-cost tracking", "Cross-border VAT / GST", "Working-capital visibility"],
    support: ["Inventory and margin analysis", "Indirect-tax compliance", "Cash-flow forecasting"],
  },
  {
    slug: "real-estate-construction",
    title: "Real Estate & Construction",
    blurb: "Project accounting, revenue recognition and tax on property transactions.",
    challenges: ["Revenue recognition on long-term contracts", "VAT and stamp duty on property deals", "Investment property vs. development asset treatment", "Project-level profitability"],
    support: ["Job-costing and WIP schedules", "Lender and investor reporting", "Tax structuring"],
  },
  {
    slug: "ecommerce-retail",
    title: "E-Commerce & Online Retail",
    blurb: "Accurate multi-channel revenue, COGS and sales-tax compliance.",
    challenges: ["Multi-channel revenue reconciliation", "Landed cost and COGS accuracy", "Sales-tax / VAT nexus", "Marketplace fee and payout reconciliation"],
    support: ["Platform integrations (Shopify, Amazon)", "Monthly P&L by channel", "Indirect-tax filings"],
  },
  {
    slug: "technology-saas",
    title: "Technology, SaaS & IT Exports",
    blurb: "Revenue recognition, runway tracking and export-incentive compliance.",
    challenges: ["Revenue recognition (IFRS 15 / ASC 606)", "Burn rate and runway monitoring", "Export incentives and remittance compliance", "Investor reporting"],
    support: ["SaaS metrics dashboards", "Fundraising financial models", "Multi-entity consolidation"],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Medical Practices",
    blurb: "Billing reconciliation and practitioner-level profitability.",
    challenges: ["Insurance billing reconciliation", "Practitioner-level profitability", "Payroll across jurisdictions", "Equipment and lease accounting"],
    support: ["Monthly practice reporting", "Payroll and compliance", "Budgeting and forecasting"],
  },
  {
    slug: "logistics-transport",
    title: "Logistics & Transport",
    blurb: "Route, fleet and fuel economics with compliant, clean books.",
    challenges: ["Fleet cost and depreciation", "Fuel and route profitability", "Cross-border billing", "Driver payroll and withholding"],
    support: ["Cost-per-trip reporting", "Asset-register management", "Tax and permit compliance"],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    blurb: "Utilisation, billing and partner-level reporting for service firms.",
    challenges: ["Work-in-progress and billing", "Utilisation and realisation reporting", "Partner and staff remuneration", "Multi-jurisdiction tax"],
    support: ["Project and client profitability", "Management accounts", "Payroll and tax"],
  },
  {
    slug: "fintech-financial-services",
    title: "Financial Services & Fintech",
    blurb: "Regulatory reporting, AML readiness and technology-risk assurance.",
    challenges: ["Regulatory reporting", "AML/CFT frameworks", "Technology and cyber controls", "Safeguarding and client-money accounting"],
    support: ["Compliance programme design", "ITGC and cyber readiness", "Audit support"],
  },
  {
    slug: "startups-venture",
    title: "Startups & Venture-Backed",
    blurb: "Investor-ready finance from seed to growth rounds.",
    challenges: ["Fundraising models and data rooms", "Investor reporting cadence", "Cap-table and ESOP accounting", "Controls that scale"],
    support: ["Virtual CFO and FP&A", "Due-diligence preparation", "Board reporting"],
  },
];

export const faqs = [
  {
    q: "Who is Crestova Advisory?",
    a: "A SECP-registered, Chartered Accountant-led firm with offices in Lahore and Rawalpindi. Our team brings experience from EY, KPMG, Grant Thornton and Deloitte, applied to growing businesses in seven markets.",
  },
  {
    q: "Which countries do you serve?",
    a: "The United States, United Kingdom, Canada, UAE, Saudi Arabia, Australia and Pakistan. We work remotely on cloud accounting platforms, so you do not need to be near an office.",
  },
  {
    q: "How does the first conversation work?",
    a: "A free 30-minute call with a senior adviser. We ask about your business, your current finance set-up and your goals. If we are not the right fit, we will tell you plainly.",
  },
  {
    q: "How are your fees structured?",
    a: "Fixed monthly or project fees, agreed in writing before work starts. You receive an itemised proposal within 48 hours of the discovery call, so there are no billing surprises.",
  },
  {
    q: "How fast do you close the books each month?",
    a: "Within five business days of month-end for clients on our monthly accounting service. The deadline is written into your engagement agreement.",
  },
  {
    q: "Which accounting platforms do you work with?",
    a: "Xero, QuickBooks Online, NetSuite, Zoho Books, Sage and MYOB. If you already use one of them we can start straight away; if not, we help you choose and migrate.",
  },
  {
    q: "Can you take over from my current accountant?",
    a: "Yes. We manage the transition, including data migration, reconciliation and platform set-up, so your operations are not disrupted.",
  },
  {
    q: "Is my financial information kept confidential?",
    a: "Always. Professional ethical obligations apply to every enquiry and engagement, and access to your data is limited to the people working on it.",
  },
  {
    q: "Do you handle audits?",
    a: "We prepare you for audits and support you through them: working papers, auditor queries and remediation of prior findings. Statutory audit opinions are issued by independent licensed auditors.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "Our engagements are agreed in writing with clear scope and notice terms. We would rather earn your continued work than lock you in.",
  },
];

export const processSteps = [
  { n: "01", title: "Discovery call", text: "Thirty minutes with a senior adviser to understand your business, your position and your goals." },
  { n: "02", title: "Fixed-fee proposal", text: "An itemised proposal within 48 hours: scope, deliverables, timeline and price in plain language." },
  { n: "03", title: "Seamless onboarding", text: "We migrate data, reconcile balances and set up platforms without disrupting day-to-day operations." },
  { n: "04", title: "Ongoing partnership", text: "Monthly close, proactive compliance and regular reviews, led by the same senior professional." },
];
