import { more } from "./posts-more";
export type Post = {
  slug: string;
  title: string;
  category: "Tax" | "Audit" | "Reporting" | "Construction" | "Agriculture" | "Real Estate" | "Business";
  date: string;
  read: string;
  excerpt: string;
  body: { h?: string; p: string[]; list?: string[] }[];
};

const base: Post[] = [
  {
    slug: "year-end-tax-planning-for-business-owners",
    title: "Year-end tax planning: what to settle before the books close",
    category: "Tax",
    date: "2026-09-18",
    read: "5 min",
    excerpt: "The weeks before year-end are your last chance to shape this year's tax bill. A short list of decisions worth making early.",
    body: [
      {
        p: [
          "Most tax savings are decided before the financial year ends, not when the return is prepared. By the time your accountant sees the numbers, the useful choices have usually passed.",
          "A short planning conversation four to six weeks before year-end is often the most valuable hour of the year.",
        ],
      },
      {
        h: "Start with a forecast, not a hope",
        p: ["Ask for a projected profit and tax estimate based on year-to-date results. It tells you whether you are heading for an unexpectedly large liability, or whether timing decisions are even worth making."],
      },
      {
        h: "Decisions worth reviewing",
        p: ["These are the items we most often revisit with clients before year-end:"],
        list: [
          "Timing of large purchases and whether they qualify for accelerated deductions",
          "Overdue receivables that should be written off or provided for",
          "Bonuses, owner remuneration and retirement contributions",
          "Stock counts and obsolete-inventory write-downs",
          "Missing documentation for expenses already incurred",
        ],
      },
      {
        h: "Keep it defensible",
        p: [
          "Every adjustment should be supported by documents and a commercial reason. Planning that cannot survive a query from the tax authority is not planning, it is exposure.",
          "Rules differ by country, so confirm each point against your own jurisdiction before acting.",
        ],
      },
    ],
  },
  {
    slug: "what-a-qualified-audit-opinion-means",
    title: "What a qualified audit opinion means, and how to avoid one",
    category: "Audit",
    date: "2026-09-04",
    read: "4 min",
    excerpt: "A qualified opinion tells lenders and investors that something in your accounts could not be relied on. Here is what triggers one.",
    body: [
      {
        p: [
          "An auditor's opinion is the headline of your annual report. Most companies receive an unmodified (clean) opinion, which says the financial statements give a true and fair view.",
          "A qualified opinion says the statements are fair except for a specific matter. Banks, investors and regulators read that exception carefully.",
        ],
      },
      {
        h: "Common causes",
        p: ["Qualifications are rarely a surprise to the auditor. They usually arise from a handful of recurring issues:"],
        list: [
          "Records that are incomplete, so the auditor cannot verify a balance",
          "Disagreement over an accounting treatment that the company will not change",
          "Inventory that was not counted or cannot be supported",
          "Related-party balances without adequate documentation",
        ],
      },
      {
        h: "How to prevent it",
        p: [
          "Reconcile key balances monthly, keep supporting documents organised, and agree contentious accounting treatments with the auditor early, before year-end rather than during fieldwork.",
          "A pre-audit readiness review is usually far cheaper than the cost of a qualified opinion on your next loan application.",
        ],
      },
    ],
  },
  {
    slug: "related-party-transactions-what-to-disclose",
    title: "Related-party transactions: what to record and what to disclose",
    category: "Reporting",
    date: "2026-08-21",
    read: "4 min",
    excerpt: "Dealings with owners, directors and group companies attract extra scrutiny. Clear records keep them uneventful.",
    body: [
      {
        p: [
          "A related-party transaction is any dealing between your company and someone connected to it: owners, directors, close family, or other companies under common control.",
          "These transactions are legitimate and common. The issue is transparency, because terms may differ from those agreed between strangers.",
        ],
      },
      {
        h: "What good records look like",
        p: ["For each related-party arrangement keep a written agreement, evidence of the pricing basis, and approval from the board or appropriate authority."],
      },
      {
        h: "Disclosure basics",
        p: [
          "Financial reporting standards generally require you to disclose the nature of the relationship, the amounts involved, balances outstanding at year-end and any terms or guarantees.",
          "For groups operating across borders, transfer-pricing documentation often applies as well. Treat the two exercises as one process to avoid inconsistency.",
        ],
      },
    ],
  },
  {
    slug: "get-your-construction-financials-in-shape",
    title: "Construction companies: get your financials in shape before the bank asks",
    category: "Construction",
    date: "2026-08-07",
    read: "5 min",
    excerpt: "Bonding companies and lenders want to see reliable job-level numbers. Here is where contractors' books usually fall short.",
    body: [
      {
        p: [
          "Construction accounting is different from other industries. Revenue arrives over months, costs run ahead of billings, and a profitable job on paper can still drain cash.",
          "Lenders and sureties know this, which is why they look past the headline profit to the quality of your job costing.",
        ],
      },
      {
        h: "What stronger financials include",
        p: [],
        list: [
          "Work-in-progress schedule reconciled to the ledger each month",
          "Revenue recognised by percentage of completion, with cost-to-complete estimates reviewed",
          "Over- and under-billings tracked per project",
          "Retention receivable and payable recorded separately",
          "Backlog and margin fade analysed, not just reported",
        ],
      },
      {
        h: "Start early",
        p: ["Cleaning up a messy WIP schedule the week before a loan application rarely works. A quarterly review keeps the numbers credible and surfaces problem jobs while they can still be fixed."],
      },
    ],
  },
  {
    slug: "do-you-know-your-farms-numbers",
    title: "Agribusiness: do you know your numbers per acre, per animal, per litre?",
    category: "Agriculture",
    date: "2026-07-24",
    read: "4 min",
    excerpt: "Weather and commodity prices are out of your hands. Your cost structure is not, but only if you measure it.",
    body: [
      {
        p: [
          "Farms and dairies operate on narrow margins in volatile markets. The producers who stay profitable tend to be the ones who know their cost of production precisely.",
        ],
      },
      {
        h: "Measure the right unit",
        p: ["Aggregate profit hides problems. Break costs down by the unit that matters in your operation:"],
        list: ["Cost per acre or hectare by crop", "Cost per litre of milk or per head of livestock", "Feed, labour and energy as a share of revenue", "Breakeven price against current market price"],
      },
      {
        h: "Use the numbers",
        p: [
          "Once you know breakeven, forward-selling decisions, equipment purchases and lender conversations become much simpler. A monthly management report and a simple cash forecast are usually enough to begin.",
        ],
      },
    ],
  },
  {
    slug: "buy-sell-agreements-protect-your-business",
    title: "Buy-sell agreements: protecting a business when an owner leaves",
    category: "Business",
    date: "2026-07-10",
    read: "4 min",
    excerpt: "Death, disability, divorce or a dispute can leave a business with an unwanted co-owner. A written plan avoids that.",
    body: [
      {
        p: [
          "If one of two partners dies tomorrow, who owns the business the day after? Without an agreement, the answer may be a family member with no wish, or ability, to run it.",
        ],
      },
      {
        h: "What the agreement settles",
        p: [],
        list: [
          "Which events trigger a buy-out: death, disability, retirement, dispute or exit",
          "How the shares are valued, and who decides",
          "Who may buy: remaining owners, the company, or both",
          "How the purchase is funded, including insurance",
        ],
      },
      {
        h: "Review it",
        p: ["A valuation formula that suited you five years ago may no longer be fair. Review the agreement whenever ownership, profitability or tax rules change significantly, and take legal advice on drafting."],
      },
    ],
  },
  {
    slug: "is-your-business-ready-for-an-audit",
    title: "Is your business ready for its audit? A practical checklist",
    category: "Audit",
    date: "2026-06-26",
    read: "3 min",
    excerpt: "Audit fees rise with every hour the auditor spends chasing documents. Eight things to have ready first.",
    body: [
      {
        p: ["A well-prepared client gets a shorter, cheaper and calmer audit. Before fieldwork starts, check the following:"],
        list: [
          "Trial balance agreed to the general ledger",
          "Bank reconciliations completed for every account, including year-end",
          "Debtor and creditor listings that reconcile to control accounts",
          "Fixed-asset register with additions and disposals supported",
          "Inventory count sheets and valuation workings",
          "Payroll summaries reconciled to statutory filings",
          "Loan statements and confirmations of balances",
          "Minutes, contracts and related-party details",
        ],
      },
      {
        p: [
          "If several of these are missing, it is worth bringing in support early. Remediating gaps before the auditor arrives usually costs less than explaining them afterwards.",
        ],
      },
    ],
  },
  {
    slug: "bookkeeper-accountant-or-virtual-cfo",
    title: "Bookkeeper, accountant or virtual CFO: which do you actually need?",
    category: "Business",
    date: "2026-06-12",
    read: "4 min",
    excerpt: "Each role answers a different question. Knowing which one you need saves money and prevents gaps.",
    body: [
      {
        p: ["Growing businesses often hire the wrong level of finance support. Each role does a different job."],
      },
      {
        h: "Bookkeeper: what happened?",
        p: ["Records transactions accurately and reconciles accounts. Essential from day one, but the output is historical."],
      },
      {
        h: "Accountant: is it correct and compliant?",
        p: ["Prepares financial statements and tax filings, ensures standards are followed and deadlines are met."],
      },
      {
        h: "Virtual CFO: what should we do next?",
        p: [
          "Uses the numbers to plan: cash-flow forecasts, pricing, fundraising and board reporting. It suits businesses that have outgrown basic reporting but cannot yet justify a full-time finance director.",
          "Most growing companies need all three. The efficient answer is usually a single firm that provides them in one engagement.",
        ],
      },
    ],
  },
];

export const posts: Post[] = [...base, ...more].sort((a, b) => b.date.localeCompare(a.date));

export const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
