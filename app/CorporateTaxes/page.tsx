"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Plus, Minus, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import HeroSection from "../components/Pages/Hero";
import WhatWeOffer from "../components/Pages/WhatWeOffer";
import WhyChooseUs from "../components/Pages/WhyChooseUs";
import ServiceAccordion from "../components/Pages/ServiceAccordian";
import ThreeStepProcess from "../components/Pages/ThreeStep";
import ResourcesSection from "../components/Pages/Resources";
import CallToAction from "../components/Pages/CallToAction";
import FAQSection from "../components/Pages/FAQ";

const heroImages = [
  "/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png",
  "/Web Assets/NEW/Hero Section/Business-Culture-in-Canada-Evolved-Metrics-1-1024x565.jpg",
  "/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp",
  "/Web Assets/NEW/Hero Section/f0065b10-07c3-47d4-bf72-adaf37d2c25a-scaled.jpeg-1.webp",
  "/Web Assets/NEW/Hero Section/gettyimages-1488522537-640x640.jpg",
  "/Web Assets/NEW/Hero Section/premium_photo-1661761077411-d50cba031848.jpeg",
  "/Web Assets/NEW/Hero Section/TPC-exterior-building-b.jpg",
];

const HomePage: React.FC = () => {
  const [slide, setSlide] = useState(0);
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Callback for Learn More button (same as personaltax)
  const handleLearnMore = (index: number) => {
    setOpenServiceIndex(index);
    // Scroll to the accordion section
    const el = document.getElementById("explore-services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (el instanceof HTMLElement) {
        el.tabIndex = -1;
        el.focus();
      }
    }
  };

  const offerCards = [
    {
      title: "Corporate Tax Filing",
      description:
        "T2 corporate returns (federal & provincial), annual compliance, and industry-specific adjustments.",
      link: "#explore-services",
    },
    {
      title: "Sales Tax Compliance",
      description:
        "GST/HST/PST/QST registration, filings, audits, and place-of-supply guidance across provinces.",
      link: "#explore-services",
    },
    {
      title: "Owner Compensation Planning",
      description:
        "Salary vs. dividend optimization, OpCo/HoldCo structuring, and shareholder tax efficiency.",
      link: "#explore-services",
    },
    {
      title: "CRA Audit & Risk Management",
      description:
        "Audit readiness, controversy support, documentation policies, and proactive CRA response strategies.",
      link: "#explore-services",
    },
    {
      title: "Intercompany & Transfer Pricing",
      description:
        "Intercompany allocations, provision-to-return alignment, and transfer pricing for larger enterprises.",
      link: "#explore-services",
    },
    {
      title: "Corporate Transactions & M&A",
      description:
        "Tax structuring for mergers, acquisitions, reorganizations, and succession/exit planning.",
      link: "#explore-services",
    },
    {
      title: "Tax Provisioning",
      description:
        "Audit readiness, controversy support, documentation policies, and proactive CRA response strategies.",
      link: "#explore-services",
    },
    {
      title: "Cross-Border Planning",
      description:
        "Audit readiness, controversy support, documentation policies, and proactive CRA response strategies.",
      link: "#explore-services",
    },
    {
      title: "SR&ED (Tax Credits)",
      description:
        "Intercompany allocations, provision-to-return alignment, and transfer pricing for larger enterprises.",
      link: "#explore-services",
    },
    {
      title: "Tax Process Optimization & Automation",
      description:
        "Streamlining tax workflows, implementing technology solutions, and enhancing data accuracy for efficient tax processes.",
      link: "#explore-services",
    },
  ];
  const faqs = [
    {
      question: "When should my corporation file a T2 return?",
      answer: `Every corporation in Canada must file a T2 return within six months of its fiscal year-end, even if no tax is owed. For example, if your corporation's year-end is December 31, the T2 return is due by June 30 of the following year.`,
    },
    {
      question: "Should I pay myself a salary or dividends?",
      answer: `
It depends on your specific situation. Paying yourself a salary can provide RRSP contribution room and a steady income stream, while dividends may offer tax advantages. We can help you analyze your options and develop a compensation strategy that aligns with your financial goals.`,
    },
    {
      question: "How does GST/HST registration work for my business?",
      answer: `All businesses in Canada must register for GST/HST if their taxable revenues exceed $30,000 in a single calendar quarter or over four consecutive quarters. Once registered, you’ll need to charge GST/HST on your sales, file regular returns, and remit any collected taxes to the CRA.

Our team can help you navigate the registration process, ensure compliance, and optimize your tax position.`,
    },
    {
      question: "What happens if the CRA audits my corporation?",
      answer: `If the CRA audits your corporation, they will review your financial records, tax returns, and supporting documentation to ensure compliance with tax laws. It’s important to stay organized and maintain accurate records throughout the year.`,
    },
  ];

  const heroImages = [
    "/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png",
    "/Web Assets/NEW/Hero Section/Business-Culture-in-Canada-Evolved-Metrics-1-1024x565.jpg",
    "/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp",
  ];
  const whyChooseData = {
    image:
      "/Web Assets/Images/NEW/Tax Services Page/Corporate Tax Page/corporate-tax-scaled.jpg",
    title: "Why Choose AALI Consulting",
    paragraphs: [
      `At AALI Consulting, we go beyond compliance — we design corporate tax strategies that strengthen your business foundation. Whether you’re managing your first year-end as a new corporation or overseeing multi-entity operations with intercompany transactions, our team ensures your filings are not only accurate but strategically aligned. From T2 returns and GST/HST to salary vs. dividend planning and OpCo/HoldCo structuring, we deliver clarity, efficiency, and tax positions that stand up to CRA scrutiny.`,
      `

      What sets us apart is our partnership mindset. We don’t just file — we forecast. Our advisors integrate tax planning with your cashflow, compensation, and growth objectives, ensuring every decision supports your long-term vision. With experience spanning SMEs, professional corporations, and larger enterprises, we build scalable systems that reduce risk, simplify audits, and give you the confidence to focus on what matters most — running and growing your business.
      `,
    ],
  };

  const servicesList = [
    {
      title: "Corporate Tax Filing",
      description: `Accurate, compliant, and strategic T2 filings that do more than meet CRA deadlines — they position your business for long-term financial strength.

Corporate taxes aren’t just about compliance — they’re a key part of your financial story. Whether you’re running an incorporated startup, a growing SME, or managing multiple entities, we handle your T2 corporate returns with precision, ensuring every credit, deduction, and expense is maximized while keeping your filings audit-ready and on time.


We manage every step of your filing with clarity and discipline:
T2 Corporate Returns (Federal & Provincial) – Full preparation and e-filing for all jurisdictions across Canada.
Year-End Adjustments – Record accruals, deferrals, and capital cost allowance (CCA) to ensure financial accuracy.
Expense & Deduction Optimization – Identify tax-deductible expenses, loss carryforwards, and capital gains deferrals.
Multi-Entity Coordination – Handle consolidated returns and intercompany transactions efficiently and transparently.
Industry-Specific Compliance – From professional corporations to trades, we align with your sector’s rules and reporting standards.



We also provide a strategic layer that goes beyond compliance:
Tax Planning Integration – Align your return with salary/dividend strategies and year-end financial goals.
Audit-Ready Documentation – Maintain organized digital records and schedules that withstand CRA scrutiny.
Tax Calendar & Reminders – Stay ahead of instalments, payroll remittances, and filing deadlines.
Post-Filing Review – Assess your return’s performance and identify planning opportunities for next year.



The Result:
A complete, compliant, and optimized corporate tax process that reduces risk, improves cash flow, and positions your company for smarter financial growth.`,
    },
    {
      title: "Sales Tax Compliance",
      description: `End-to-end GST/HST, PST, and QST management — ensuring every transaction, filing, and remittance stays accurate, compliant, and stress-free.

Sales tax compliance can quickly become complex as your business grows across provinces or expands into e-commerce. We take the confusion out of multi-jurisdictional tax rules by managing every step — from registration to reporting — so you stay aligned with CRA and provincial requirements while freeing up valuable time to focus on operations.


We handle every layer of your indirect tax obligations:
GST/HST Registration & Setup – We identify when registration is required, assist with applications, and configure your accounting system for accurate tracking.
PST & QST Compliance – Manage separate filings for provinces like BC, Manitoba, and Quebec with clear recordkeeping and filing reminders.
E-Commerce & Marketplace Rules – Ensure your Shopify, Amazon, or digital sales platform collects and remits the correct tax automatically.
Filing & Remittance – File monthly, quarterly, or annual returns and reconcile against your financial statements.
Cross-Border Transactions – Handle import/export sales tax issues, reverse charges, and zero-rated transactions with precision.



We also help you minimize risk and improve efficiency:
CRA Audit Readiness – Maintain digital filing trails and reports that simplify CRA reviews or audits.
Tax Code Automation – Implement tax codes in your accounting software (QBO/Xero) for automated calculations.
Refunds & Rebates – Claim ITCs (Input Tax Credits) and recover overpaid tax where applicable.
Training & Oversight – We train your internal staff or bookkeepers on proper classification and filing best practices.



The Result:
Clean, compliant sales tax processes that protect your margins, reduce audit stress, and keep your business operating smoothly — from local invoices to cross-border transactions.
`,
    },
    {
      title: "Owner Compensation Planning",
      description: `Smart, balanced strategies for paying yourself — combining salary, dividends, and benefits in a way that maximizes cash flow and minimizes tax.

How you pay yourself from your corporation can significantly affect your personal and business tax outcomes. We help you design a compensation structure that’s tax-efficient, compliant, and aligned with both your short-term income needs and long-term wealth goals. Whether you’re a solo owner, family-run business, or part of an OpCo/HoldCo setup, every dollar is planned with precision.


We help you structure your income the right way:
Salary vs. Dividends – Find the right blend to balance tax efficiency, CPP eligibility, and RRSP contribution room.
Bonus & Retained Earnings Strategies – Decide when to pay bonuses versus leaving funds in the company for reinvestment or tax deferral.
OpCo/HoldCo Optimization – Align income flows between entities to minimize double taxation and protect assets.
Shareholder Loan Management – Track and reconcile shareholder loans properly to avoid unexpected CRA assessments.
Family Income Splitting – Include spouses or adult children in your structure legally and effectively.



We also guide you through long-term planning decisions:
Retirement & Exit Preparation – Coordinate RRSP, CPP, and corporate retained earnings to ensure a smooth transition to retirement.
Health & Wellness Benefits – Use Private Health Services Plans (PHSP) or group benefits to support yourself and your family tax-efficiently.
Tax Instalments & Cash Flow – Build predictable payment schedules to keep cash available while staying compliant.
Annual Review – Adjust your compensation mix annually based on income, goals, and changes in tax law.



The Result:
A simple, defensible, and tax-smart plan for paying yourself — one that keeps more earnings in your pocket while ensuring your business stays financially strong and CRA-compliant.
`,
    },
    {
      title: "CRA Audit & Risk Management",
      description: `Proactive strategies and hands-on support that keep your business compliant, protected, and ready for anything the CRA sends your way.

CRA audits and reviews can be stressful — but with disciplined documentation, clear communication, and expert guidance, they don’t have to disrupt your operations. We help you identify potential risks early, organize your records properly, and respond confidently to CRA inquiries, ensuring your books, filings, and tax positions stand up to scrutiny.


We prepare your business to stay audit-ready year-round:
Proactive Risk Assessments – Identify red flags such as missing filings, expense misclassifications, or GST/HST errors before CRA does.
Documentation Discipline – Set up digital folders, naming conventions, and checklists for all financial and tax documentation.
Audit-Ready Workpapers – Create a complete trail for T2, GST/HST, and payroll filings that can be accessed within minutes.
CRA Correspondence Management – Handle all communication, requests, and follow-ups with CRA agents on your behalf.
Bookkeeping & Filing Alignment – Ensure your financial statements, returns, and reconciliations tie together perfectly to reduce audit triggers.



We also help you manage audits with clarity and control:
Review & Response Strategy – Evaluate CRA letters and prepare fact-based responses with supporting evidence.
Representation & Advocacy – Liaise directly with CRA auditors or appeals officers to protect your business interests.
Voluntary Disclosures – If errors or omissions are found, we guide you through CRA’s voluntary disclosure program safely.
Future Prevention – Implement policy updates, internal checks, and digital workflows to reduce audit risk going forward.



The Result:
A calm, organized, and well-prepared audit experience — backed by documentation discipline, professional representation, and long-term protection from unnecessary CRA risk.
`,
    },
    {
      title: "Intercompany & Transfer Pricing",
      description: `Clear, defensible structures for intercompany transactions, management fees, and cross-border pricing — built to satisfy CRA and global tax standards.

As your business grows across entities or borders, intercompany transactions can quickly become complex. Whether you manage multiple corporations, family-owned entities, or international affiliates, we help you design a pricing, documentation, and compliance framework that keeps cash flowing efficiently while meeting CRA, IRS, and OECD requirements.


We build clarity into your intercompany operations:
Management Fees & Service Charges – Define, document, and justify management fees between related companies to align with CRA expectations.
Intercompany Loans & Interest – Structure and track shareholder or affiliate loans in compliance with transfer pricing and thin-capitalization rules.
Cost-Sharing Arrangements – Allocate overhead, R&D, or administrative costs transparently across entities.
Profit Allocation Models – Implement fair value-based allocation of income, expenses, and margins between related parties.
Documentation & Reporting – Maintain robust transfer pricing files and intercompany agreements that withstand CRA or foreign review.



We also help you strengthen governance and reduce exposure:
Policy Development – Establish standardized intercompany pricing policies consistent with your industry benchmarks.
OECD/CRA Alignment – Ensure your pricing methodology aligns with OECD transfer pricing principles and Canadian tax law.
Cross-Border Compliance – Manage Canada ↔ US and global transactions with consistent reporting across jurisdictions.
Controversy Support – Represent you in CRA reviews or disputes, providing detailed documentation and economic justifications.



The Result:
Transparent, audit-ready intercompany structures that support cash flow, reduce tax risk, and prove your pricing strategy is fair, compliant, and globally consistent.


`,
    },
    {
      title: "Corporate Transactions & M&A",
      description: `
Tax-smart structuring for mergers, acquisitions, and reorganizations—so every deal builds value, minimizes risk, and strengthens your long-term position.

Mergers, acquisitions, and ownership changes come with complex financial, legal, and tax considerations. We guide you through every stage of the process—from due diligence to post-deal integration—ensuring your transaction is structured efficiently, compliant with CRA requirements, and aligned with your overall business strategy.


We help you plan and execute transactions with precision:
Tax-Efficient Deal Structuring – Choose between asset or share sales, rollovers, or amalgamations to minimize tax exposure.
Due Diligence Reviews – Identify tax liabilities, credits, or compliance risks before closing a deal.
Purchase & Sale Agreements – Structure representations, warranties, and covenants with clear tax clauses.
Corporate Reorganizations – Plan Section 85 rollovers, butterfly transactions, or estate freezes for growth or succession.
Post-Deal Integration – Align accounting, payroll, and tax systems after acquisition to ensure seamless continuity.



We also help protect value and reduce exposure:
Capital Gains & Loss Planning – Optimize use of losses, capital dividend accounts (CDA), and lifetime capital gains exemptions.
Intercompany Realignment – Reorganize subsidiaries and ownership to simplify reporting and protect key assets.
CRA Compliance & Elections – Prepare and file all required elections, disclosures, and compliance forms to avoid penalties.
Cross-Border Structuring – Navigate Canada ↔ U.S. and international entity setups with proper treaty and withholding tax planning.



The Result:
Transactions that create lasting value—not hidden tax headaches. With our guidance, you gain clarity, compliance, and confidence at every step of the deal.



`,
    },
    {
      title: "Tax Provisioning",
      description: `Accurate, compliant, and audit-ready tax provisions that give you financial clarity, reduce risk, and ensure your books always reflect reality.

Tax provisioning is where accounting meets tax compliance—ensuring your financial statements show the true tax impact of your business activities. We help your team calculate, document, and reconcile both current and deferred taxes so your corporate reports remain compliant, transparent, and ready for audit or investor review.


We build reliability and discipline into your reporting process:
Provision-to-Return Alignment – Ensure your tax provision accurately ties out to your filed T2 return, eliminating reconciliation errors.
Deferred Tax Calculations – Identify timing differences between accounting and tax income, with clear schedules for reversals.
Temporary vs. Permanent Differences – Categorize items properly (e.g., meals, CCA, reserves) for consistent year-end adjustments.
Automation & Workpapers – Implement structured templates and automated calculations for faster, error-free provision cycles.
Audit Support – Maintain organized documentation for CRA or external auditor review, with clear traceability from trial balance to filing.



We also help your finance function mature strategically:
Quarterly/Monthly Provisioning – Move from annual to periodic provisioning to stay current with changing tax positions.
Consolidated Reporting – Build accurate, multi-entity provisions for corporate groups or HoldCos.
Governance Integration – Embed tax provisioning controls into your close checklist and internal reporting cycle.
Training & Handover – Equip your finance or accounting staff with processes they can maintain confidently year after year.



The Result:
Tax provisions that are timely, consistent, and defensible—reducing risk, enhancing transparency, and giving management full confidence in their tax position.
`,
    },
    {
      title: "Cross-Border Planning",
      description: `Seamless, compliant tax strategies for businesses operating between Canada and the U.S.—so you stay efficient, protected, and audit-ready on both sides of the border.

Expanding across borders brings new opportunities—but also complex tax rules, treaty considerations, and reporting risks. We help you navigate these challenges with clear, compliant structures for cross-border operations, payroll, and ownership, ensuring you avoid double taxation and maintain the right residency and filing status for every entity and shareholder.


We simplify complex cross-border compliance:
Residency & Treaty Analysis – Determine corporate and shareholder residency status under the Canada–U.S. Tax Treaty to prevent double taxation.
Entity Structuring – Evaluate LLCs, S-corps, and Canadian corporations for optimal tax treatment and profit repatriation.
Withholding Tax Management – Ensure correct rates and documentation for dividends, interest, and royalties across borders.
Payroll & Social Security Coordination – Manage dual payroll obligations under Totalization Agreements for cross-border employees.
Foreign Filing & Disclosures – Prepare T1135, W-8BEN-E, and related forms to meet both CRA and IRS requirements.



We also help you plan for long-term growth and compliance:
Inbound & Outbound Planning – Structure expansion into the U.S. or Canada with clear transfer pricing and profit allocation policies.
Tax Equalization & Mobility Programs – Support globally mobile executives with tax equalization and payroll coordination.
Permanent Establishment (PE) Reviews – Identify and manage potential PEs to avoid unexpected taxation.
Cross-Border Cash Management – Align intercompany loans, dividends, and management fees for efficiency and compliance.



The Result:
A coordinated cross-border tax strategy that minimizes exposure, avoids costly mistakes, and keeps your business growth seamless—whether you’re entering the U.S. market or managing operations on both sides.
`,
    },
    {
      title: "SR&ED (Tax Credits)",
      description: `Turn your innovation into refundable tax credits—without the confusion, missed deadlines, or audit risk.

The Scientific Research & Experimental Development (SR&ED) program rewards Canadian businesses that innovate, experiment, or improve technology. We help you identify qualifying projects, document evidence properly, and prepare defensible claims that stand up to CRA review—so you can recover cash for the R&D you’re already doing.


We make SR&ED clear and compliant:
Eligibility Screening – Identify which projects qualify under CRA’s definitions of experimental development and technological uncertainty.
Documentation Framework – Build light, developer-friendly records—hypothesis, tests, results—that match CRA’s “systematic investigation” requirements.
Financial Mapping – Reconcile eligible wages, materials, subcontractors, and overhead with your general ledger for full audit traceability.
Filing & Forms – Prepare and submit T661 schedules, project narratives, and provincial SR&ED credits (e.g., OITC, ORDTC).
Review Support – Respond confidently to CRA RFIs and reviews with clear technical and financial documentation.



We also optimize the broader financial impact:
Grant & SR&ED Stacking – Combine IRAP, provincial, and SR&ED incentives strategically to maximize refunds.
Refund Timing & Cashflow Planning – Estimate when credits will arrive and align them with payroll or reinvestment needs.
Program Governance – Train teams to capture evidence during development, not after the fact.
Long-Term SR&ED Readiness – Implement ongoing documentation systems for repeatable annual claims.



The Result:
SR&ED claims that are accurate, defensible, and fully aligned with CRA’s expectations—so you can reclaim up to 35% of your R&D costs and reinvest in growth, confidently and ethically.
`,
    },
    {
      title: "Tax Process Optimization & Automation",
      description: `
Modernize your tax operations with smart workflows, integrated tools, and automation that save hours, reduce risk, and give leadership real-time visibility.

Tax management shouldn’t feel like a scramble at year-end. We help you streamline data flow between accounting, tax, and reporting systems—building structured, repeatable processes that improve accuracy, speed, and collaboration across your finance function. The result is a calm, predictable tax cycle instead of last-minute stress.


We optimize and automate your key tax processes:
Workflow Mapping – Review your current tax preparation, review, and filing cycles to pinpoint bottlenecks and risks.
Data Integration – Connect systems like QuickBooks, Xero, or ERP platforms to automate journal entries, reconciliations, and filing inputs.
Document Automation – Auto-generate and store key returns, memos, and working papers for consistent reporting and easier CRA reviews.
E-Filing & Compliance Dashboards – Centralize deadlines, submissions, and tax calendars for a real-time view of compliance status.
Error Reduction & Audit Trail – Introduce checks, balances, and version controls that protect accuracy and transparency.



We also help your finance team evolve strategically:
Tax Technology Enablement – Deploy tools like Power BI, Excel automation, or RPA (Robotic Process Automation) for smarter analysis.
SOP Development – Document and standardize tax processes to make your close and filing cycles consistent and repeatable.
Governance & Security – Set up role-based access, approvals, and encrypted file sharing to safeguard sensitive tax data.
Training & Change Management – Equip your staff to use automation tools confidently and maintain best practices year-round.



The Result:
A tax process that runs itself—accurate, documented, and audit-ready—freeing your team to focus on strategy instead of spreadsheets.
`,
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Assess & Plan",
      text: "We take a deep look at your company structure, financials, and future goals to uncover risks, opportunities, and craft the most effective tax strategy.",
    },
    {
      number: "2",
      title: "File & Comply",
      text: "We prepare and file T2 corporate returns, GST/HST/PST/QST, and ensure compliance with CRA deadlines and reporting standards.",
    },
    {
      number: "3",
      title: "Optimize & Protect",
      text: "We implement tax-efficient owner compensation, intercompany strategies, and audit-ready documentation to minimize liability and support future growth.",
    },
  ];

  const resourcesData = [
    {
      img: "/Web Assets/NEW/Resources/360_F_330941253_b3Dor4GncjCMVPvw8QM4CsyUymtgvvMM.jpg",
      title: "T4012 – T2 Corporation Income Tax Guide 2024",
      link: "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4012.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/Clearline-CPA-How-to-Sign-Up-for-CRA-My-Business-Account-scaled.jpg",
      title: "Corporation Income Tax Return",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/corporation-income-tax-return.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-1480239160-612x612.jpg",
      title: "Corporate Tax Rates",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/corporation-tax-rates.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-185066026-612x612.jpg",
      title: "Income Tax Information for Non-Resident Corporations",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/businesses-international-non-resident-taxes/income-tax-information-non-resident-corporations.html?utm_source=chatgpt.com",
    },
  ];

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      <HeroSection
        images={heroImages}
        title="Corporate Taxes Made Clear, Compliant, and Strategic"
        subtitle="From T2 returns to GST/HST, OpCo/HoldCo planning, and CRA audits—we simplify complexity so your business runs tax-smart."
        buttonText="Request a Consultation"
        buttonLink="/contactus"
      />

      {/* What We Do */}
      {/* What We Do Section */}
      <WhatWeOffer
        heading="What We Offer"
        cards={offerCards}
        onLearnMore={handleLearnMore}
      />
      <ThreeStepProcess heading="Our 3-Step Process" steps={processSteps} />
      <WhyChooseUs
        image={whyChooseData.image}
        title={whyChooseData.title}
        paragraphs={whyChooseData.paragraphs}
      />

      <div id="explore-services">
        <div id="explore-services">
          <ServiceAccordion
            heading="Explore Our Services in Detail"
            services={servicesList}
            openIndex={openServiceIndex}
            setOpenIndex={setOpenServiceIndex}
          />
        </div>
      </div>

      {/* Resources */}
      <ResourcesSection heading="Resources" resources={resourcesData} />
      <CallToAction
        heading="Smarter Corporate Taxes, Less Stress."
        subheading="Get expert planning, precise filings, and audit-ready compliance so your business stays efficient, tax-smart, and always one step ahead."
        buttonText="Book Now"
        buttonLink="/contactus"
      />

      {/* FAQs */}
      {/* ✅ FAQs — Updated Design */}
      <FAQSection heading="Frequently Asked Questions" faqs={faqs} />

      <Footer />
    </div>
  );
};

export default HomePage;
