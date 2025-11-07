"use client";
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Plus, Minus, ChevronDown } from "lucide-react";
import { useEffect, useState } from 'react';
import HeroSection from '../components/Pages/Hero';
import WhatWeOffer from '../components/Pages/WhatWeOffer';
import WhyChooseUs from '../components/Pages/WhyChooseUs';
import ServiceAccordion from '../components/Pages/ServiceAccordian';
import ThreeStepProcess from '../components/Pages/ThreeStep';
import ResourcesSection from '../components/Pages/Resources';
import CallToAction from '../components/Pages/CallToAction';
import FAQSection from '../components/Pages/FAQ';

const heroImages = [
  '/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png',
  '/Web Assets/NEW/Hero Section/Business-Culture-in-Canada-Evolved-Metrics-1-1024x565.jpg',
  '/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp',
  '/Web Assets/NEW/Hero Section/f0065b10-07c3-47d4-bf72-adaf37d2c25a-scaled.jpeg-1.webp',
  '/Web Assets/NEW/Hero Section/gettyimages-1488522537-640x640.jpg',
  '/Web Assets/NEW/Hero Section/premium_photo-1661761077411-d50cba031848.jpeg',
  '/Web Assets/NEW/Hero Section/TPC-exterior-building-b.jpg',
];



const HomePage: React.FC = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

const offerCards = [
  {
    title: "Owner & CEO Guidance",
    description:
      "Monthly close discipline, cashflow forecasting, FP&A, and OpCo/HoldCo planning aligned with growth and succession goals.",
    link: "/P&C",
  },
  {
    title: "Enterprise-Grade Support",
    description:
      "Transfer pricing, multi-entity consolidation, and controversy/audit playbooks to keep large organizations compliant and board-ready.",
    link: "/B&A",
  },
  {
    title: "Faith-Based & NFP Finance",
    description:
      "Charity registration support, compliant donation receipting systems, guidance on related business rules, and customized board reporting that keeps stakeholders confident.",
    link: "/SFP",
  },
  {
    title: "Cross-Border & International Planning",
    description:
      "Canada←>US residency, treaty rules, payroll/social security, LLC/S-corp pitfalls, and arrival/departure returns.",
    link: "/TS",
  },
  {
    title: "Succession & Estate Alignment",
    description:
      "Estate freezes/refreezes, family trusts, and tax-smart transition strategies (with your lawyer/counsel).",
    link: "#",
  },
  {
    title: "Governance & Reporting Packs",
    description:
      "Clear board/executive dashboards, risk tracking, and financial playbooks that simplify decision-making.",
    link: "/TS",
  }
];
 const faqs = [
    {
      question:
        "What does a CFO advisory service actually include?",
      answer: `CFO Advisory means providing strategic financial leadership without the full-time cost of an in-house CFO.
We oversee the full finance function — from monthly close discipline and FP&A reporting to cashflow forecasting, OpCo/HoldCo planning, and tax governance.
Our team acts as your financial backbone — ensuring every decision, from pricing to investment, aligns with your growth strategy and risk profile.

You get the insight and control of a CFO, scaled to your business size and goals.`,
    },
    {
      question: "Do you work with both small businesses and large organizations?",
      answer: `
Absolutely. Our CFO advisory framework is scalable — supporting both:
SMEs and family-owned businesses seeking control over cashflow, profitability, and structure.
Larger enterprises managing intercompany complexity, transfer pricing, or audit governance.


For faith-based or not-for-profit organizations, we also provide specialized governance and board compliance support, ensuring transparency and CRA readiness without administrative overload.`,
    },
    {
      question: "How is this different from standard accounting or bookkeeping?",
      answer: `Accounting records and reconciles the past — CFO advisory plans for the future.
Instead of simply reporting what happened, we:
Interpret the data to explain why it happened.
Forecast cashflow, margins, and capital needs before issues arise.
Design financial playbooks for leadership, lenders, or boards.


Our focus isn’t compliance — it’s clarity. We turn numbers into strategy, helping owners make confident, informed business decisions.`,
    },
    {
      question: "Can you help with board or investor reporting?",
      answer: `
Yes — we create board-ready reporting packs and dashboards tailored to your stakeholders.
This includes:
Key financial metrics, variance analysis, and strategic highlights
Forward-looking performance summaries (cash, margins, KPIs)
Governance documentation and compliance notes (for NFPs or corporate groups)


Whether you’re presenting to investors, donors, or your board, we help you communicate your financial story clearly and credibly.`,
    },
  ];

    const heroImages = [
  '/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png',
  '/Web Assets/NEW/Hero Section/Business-Culture-in-Canada-Evolved-Metrics-1-1024x565.jpg',
  '/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp',
  ];
    const whyChooseData = {
    image: "/Assets/financial-planning.jpg",
    title: "Why Choose AALI Consulting",
    paragraphs: [
      `At AALI Consulting, we bridge the gap between financial operations and strategic leadership. Our CFO Advisory services are built for owners, executives, and boards who want clarity, discipline, and data-driven decision-making without the overhead of a full-time CFO. From cashflow forecasting and OpCo/HoldCo planning to board reporting and transfer pricing, we bring enterprise-level governance to organizations of every size — ensuring your numbers tell the right story, not just add up.`,
      `

      What makes us different is our balance of strategy and practicality. We don’t deliver abstract advice — we embed ourselves in your systems, workflows, and leadership cadence to create a sustainable financial infrastructure. Whether guiding you through complex audits, scaling multi-entity operations, or aligning finance with mission and impact, AALI Consulting helps you lead with confidence, transparency, and long-term vision.
      `,
    ],
  };

  

const servicesList = [
  {
    title: "Owner & CEO Guidance",
    description: `Turn your numbers into clarity, confidence, and control — with financial insight built for decision-makers, not just accountants.

As a business owner or CEO, your role isn’t to chase spreadsheets — it’s to make informed decisions that drive growth, stability, and legacy. Our Owner & CEO Guidance service transforms your financial data into clear, actionable intelligence through disciplined monthly closes, forecasting, and planning frameworks tailored to your goals.


Our approach blends strategy, governance, and hands-on execution:
Monthly Close Discipline – Establish a repeatable month-end cadence for financials that are accurate, reconciled, and decision-ready within days.
FP&A (Financial Planning & Analysis) – Move beyond historical reports — forecast cashflow, model scenarios, and set KPIs that align with strategy.
Cashflow Forecasting & Stress Testing – Anticipate upcoming pressures and opportunities by simulating real-world business conditions.
Owner Compensation & Draw Strategy – Optimize your salary, dividends, and distributions to balance personal income, taxes, and reinvestment.
Succession & Estate Freeze Coordination – Plan ownership transitions tax-efficiently, protecting business continuity and family wealth.



We don’t just deliver reports — we guide leadership decisions with context:
Visual dashboards that summarize your company’s financial health at a glance.
Plain-language financial briefings every month to explain what the numbers mean — and what to do next.
Quarterly strategy reviews to align budgets, hiring, and capital plans with real-time performance.
Governance-ready documentation for investors, lenders, and boards.



The Result:
Confident leadership backed by transparent numbers, clear direction, and a financial system that runs like clockwork — giving you more time to lead.`,
  },
  {
    title: "Enterprise-Grade Support",
    description: `Turn your numbers into clarity, confidence, and control — with financial insight built for decision-makers, not just accountants.

As a business owner or CEO, your role isn’t to chase spreadsheets — it’s to make informed decisions that drive growth, stability, and legacy. Our Owner & CEO Guidance service transforms your financial data into clear, actionable intelligence through disciplined monthly closes, forecasting, and planning frameworks tailored to your goals.


Our approach blends strategy, governance, and hands-on execution:
Monthly Close Discipline – Establish a repeatable month-end cadence for financials that are accurate, reconciled, and decision-ready within days.
FP&A (Financial Planning & Analysis) – Move beyond historical reports — forecast cashflow, model scenarios, and set KPIs that align with strategy.
Cashflow Forecasting & Stress Testing – Anticipate upcoming pressures and opportunities by simulating real-world business conditions.
Owner Compensation & Draw Strategy – Optimize your salary, dividends, and distributions to balance personal income, taxes, and reinvestment.
Succession & Estate Freeze Coordination – Plan ownership transitions tax-efficiently, protecting business continuity and family wealth.



We don’t just deliver reports — we guide leadership decisions with context:
Visual dashboards that summarize your company’s financial health at a glance.
Plain-language financial briefings every month to explain what the numbers mean — and what to do next.
Quarterly strategy reviews to align budgets, hiring, and capital plans with real-time performance.
Governance-ready documentation for investors, lenders, and boards.



The Result:
Confident leadership backed by transparent numbers, clear direction, and a financial system that runs like clockwork — giving you more time to lead.
`,
  },
  {
    title: "Faith-Based & NFP Finance",
    description: `Transparent, values-driven financial management for charities, mosques, churches, and nonprofit organizations.

Faith-based and nonprofit organizations carry a unique responsibility — to uphold accountability, transparency, and impact while staying true to their mission. Our Faith-Based & NFP Finance service provides governance, compliance, and reporting frameworks that help boards, donors, and regulators trust every number. We combine practical accounting expertise with a deep understanding of CRA charity requirements and faith-aligned financial ethics.


Our approach ensures every dollar is tracked, reported, and used effectively:
Charity Registration & Compliance – Guide you through CRA registration, charitable status maintenance, and annual T3010 filing.
Donation & Zakat Receipting – Set up compliant receipting workflows (manual or digital) and donation tracking aligned with zakat, sadaqah, or faith-based giving principles.
Fund Accounting – Implement restricted/unrestricted fund tracking, project-based budgets, and transparent financial statements for boards and donors.
Board & Governance Reporting – Prepare clear, concise board packs with key metrics, variances, and financial health summaries.
CRA Audit & Policy Readiness – Maintain robust documentation and internal controls to meet audit standards and protect charitable status.



We tailor systems and structures for long-term sustainability:
Faith-aligned finance practices — integration of ethical investing, zakat calculations, and transparent stewardship.
Automation & Systems Setup — migrate to cloud tools for donation tracking, reporting, and digital compliance.
Volunteer & Staff Training — empower team members with clear processes and internal controls.
Community Trust Framework — policies and dashboards that communicate transparency to members and donors.



The Result:
Confident, compliant, and transparent financial operations — giving your faith-based or nonprofit organization the stability to serve more people, sustain growth, and fulfill its mission with integrity.


`,
  },
  {
    title: "Cross-Border & International Planning",
    description: `Cross-Border & International Planning`,
  },
  {
    title: "Automation & Data Workflows",
    description: `Free your team from repetitive tasks and manual data entry — with smart automations that connect your apps, accounting, and reporting in real time.

Every business runs on data — but too often, that data is stuck in silos: spreadsheets, emails, or disconnected tools. We help you automate how information moves between your systems, so invoices post automatically, reports update in real time, and tasks trigger on their own — saving hours every week while improving accuracy and insight.


Our automation framework focuses on precision, security, and scalability:
Workflow Mapping – Identify recurring processes (invoicing, reporting, approvals, client onboarding) and design smart automation rules to streamline them.
Integration Setup – Use APIs and tools like Zapier, Make (Integromat), and native app connections to link your software stack (SuiteDash, QuickBooks, Xero, Excel, etc.).
Data Synchronization – Sync records across platforms — clients, invoices, transactions, or projects — ensuring consistency everywhere.
Reporting Automation – Auto-generate financial summaries, dashboards, and notifications so decision-makers always have up-to-date insights.
Error & Exception Handling – Build logic that flags discrepancies or failed tasks, so you can fix issues before they cascade.



Beyond speed, we prioritize transparency and reliability:
Audit-friendly tracking of every automated action.
Secure API connections to protect sensitive client and financial data.
Versioned documentation so your team knows exactly how each workflow operates.
Continuous improvement loop to review, optimize, and expand automations as your needs evolve.



The Result:
A connected ecosystem where data flows automatically, work happens faster, and your team focuses on strategy — not spreadsheets.`,
  },
  {
    title: "Succession & Estate Alignment",
    description: `
Protect what you’ve built — and ensure a smooth, tax-efficient transition for the next generation.

Succession isn’t just a financial event — it’s a legacy decision. Our Succession & Estate Alignment service helps owners, families, and executives plan structured transitions that balance business continuity, tax efficiency, and family harmony. We work alongside your legal and insurance advisors to design a roadmap that preserves both wealth and relationships.


Our process connects today’s operations to tomorrow’s ownership:
Estate Freeze & Refreeze Planning – Shift future business growth to the next generation or a family trust while protecting parental value and income.
Family Trust Coordination – Design trust structures that support tax efficiency, control, and long-term governance (with your lawyer).
Capital Gains Exemption Readiness (LCGE) – Prepare qualifying shares and documentation to leverage the Lifetime Capital Gains Exemption on sale or transition.
Buy–Sell Agreements & Funding – Clarify valuation methods, roles, and insurance funding for shareholder and family buyouts.
Owner Compensation & Retirement Transition – Map salary/dividend mix, RRSP/IPP/RCA strategies, and retirement cashflow during the handover period.



We bring structure, transparency, and compassion to every stage:
Governance & Decision Rights – Define who decides what, how often meetings occur, and how conflicts are resolved.
Family Charter & Legacy Planning – Capture the family’s values, goals, and principles to guide future generations.
Coordinated Teamwork – Work seamlessly with your lawyer, accountant, and financial advisor to align tax, legal, and insurance elements.
Communication & Continuity – Facilitate clear documentation and meeting rhythms to ensure successors and spouses understand the plan.



The Result:
A tax-efficient, conflict-free transition that protects your wealth, your family, and your business — so your legacy continues with clarity and confidence.
`,
  },
    {
    title: "Governance & Reporting Packs",
    description: `
Clarity, accountability, and insight — all in one board-ready package.

Strong governance starts with clear reporting. Our Governance & Reporting Packs service transforms raw financial data into structured, actionable insights for boards, owners, and leadership teams. We go beyond spreadsheets — delivering concise dashboards, financial statements, and variance narratives that align with your goals, lenders, and governance obligations.


We design reporting that informs decisions, not confusion:
Board & Owner Dashboards – Monthly and quarterly one-pagers highlighting cashflow, profitability, KPIs, and key risks.
Variance & Trend Analysis – Clear narratives that explain why numbers moved, not just how much.
Custom Board Packages – Integrated statements (income, balance sheet, cashflow) with commentary tailored for non-financial readers.
Meeting-Ready Templates – Pre-built slide decks and summary pages that make leadership discussions efficient and data-driven.
Policy-Linked Reporting – Tie reports directly to financial policies, covenants, and governance rules — ensuring alignment with lenders, boards, or regulators.



We also strengthen the governance process behind the numbers:
Cadence & Rhythm – Establish consistent monthly, quarterly, and annual review cycles for management and board meetings.
Roles & Responsibilities – Clarify who prepares, reviews, and signs off — ensuring internal control and accountability.
Audit & Compliance Integration – Align reporting with audit-ready workpapers and CRA, lender, or compliance documentation.
Strategic Insights Layer – Include trend lines, key ratios, and rolling forecasts to shift from reactive to proactive governance.



The Result:
Reports that speak the language of leadership — concise, visual, and transparent. Your board and owners gain confidence, alignment, and the clarity needed to make informed, timely decisions.
`,
  },
];

const processSteps = [
  {
    number: "1",
    title: "Upload Your Documents",
    text: "The interaction of multiple elements in a system to produce an effect greater than the sum of their individual effects.",
  },
  {
    number: "2",
    title: "We Prepare & Optimize",
    text: "A fundamental change in approach or underlying assumptions that leads to a new way of thinking or operating.",
  },
  {
    number: "3",
    title: "You Review & File Confidently",
    text: "A new technology, product, or service that emerges into the existing market and creates a new one.",
  },
];

const resourcesData = [
  {
    img: "/Web Assets/NEW/Resources/360_F_330941253_b3Dor4GncjCMVPvw8QM4CsyUymtgvvMM.jpg",
    title: "The Modern CFO’s Guide To Navigating Volatility",
    link: "https://www.cbh.com/insights/articles/cfo-change-management-5-strategies-for-financial-resilience/?utm_source=chatgpt.com",
  },
  {
    img: "/Web Assets/NEW/Resources/Clearline-CPA-How-to-Sign-Up-for-CRA-My-Business-Account-scaled.jpg",
    title: "How to Rethink the Finance & Reporting Operating Model",
    link: "https://www.ey.com/en_ca/insights/assurance/how-to-rethink-the-finance-and-reporting-operating-model-for-the-future?utm_source=chatgpt.com",
  },
  {
    img: "/Web Assets/NEW/Resources/istockphoto-1480239160-612x612.jpg",
    title: "The Ever-Changing Role of the CFO",
    link: "https://www.bdo.ca/insights/the-ever-changing-role-of-the-cfo?utm_source=chatgpt.com",
  },
  {
    img: "/Web Assets/NEW/Resources/istockphoto-185066026-612x612.jpg",
    title: "Corporate Governance in Canada",
    link: "https://www.ecgi.global/publications/codes/countries/corporate-governance-in-canada?utm_source=chatgpt.com",
  },
];



  return (
    <div className="font-sans text-gray-800 bg-white">
      <Header />

      <HeroSection
        images={heroImages}
        title="Clarity and Control for Leaders Who Can’t Afford Guesswork."
        subtitle="Turning Numbers Into Clear, Confident Decisions."
        buttonText="Get Started"
        buttonLink="/ContactUs"
      />

      {/* What We Do */}
      {/* What We Do Section */}
<WhatWeOffer heading="What We Offer" cards={offerCards} />
<WhyChooseUs
        image={whyChooseData.image}
        title={whyChooseData.title}
        paragraphs={whyChooseData.paragraphs}
      />

 <ServiceAccordion
        heading="Explore Our Services in Detail"
        services={servicesList}
      />
<ThreeStepProcess heading="Our 3-Step Process" steps={processSteps} />
          {/* Resources */}
<ResourcesSection heading="Resources" resources={resourcesData} />
 <CallToAction
        heading="Lead With Confidence, Govern With Clarity."
        subheading="Partner with us to strengthen controls, streamline reporting, and align tax, cashflow, and governance with your long-term vision."
        buttonText="Book Now"
        buttonLink="/ContactUs"
      />




{/* FAQs */}
    {/* ✅ FAQs — Updated Design */}
      <FAQSection heading="Frequently Asked Questions" faqs={faqs} />


      <Footer />
    </div>
  );
};


export default HomePage;