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
      title: "Disability Support (DTC & ODSP)",
      description:
        "Help with eligibility, applications, appeals, and safe budgeting strategies, including RDSP setup for long-term security.",
      link: "#services-detail",
    },
    {
      title: "Family Disability Planning",
      description:
        "Guidance for children, young adults, and families, including Henson Trusts and transitions at age 18.",
      link: "#services-detail",
    },
    {
      title: "Job Loss Strategy",
      description:
        "Support for severance, EI, cashflow, and your transition to re-employment, freelancing, or business ownership.",
      link: "#services-detail",
    },
    {
      title: "Separation & Divorce",
      description:
        "Financial clarity for property division, RRSP/TFSA transfers, CPP credits, and support tax planning.",
      link: "#services-detail",
    },
    {
      title: "Loss of a Loved One",
      description:
        "Estate tax returns, CPP survivor benefits, probate support, and CRA clearance so families don’t miss critical steps.",
      link: "#services-detail",
    },
    {
      title: "Accident Recovery",
      description:
        "Navigation of EI, WSIB, LTD, and insurer forms, plus return-to-work planning and disability tax credits.",
      link: "#services-detail",
    }
  ];
  const faqs = [
    {
      question:
        "What’s included in Disability & Life Planning?",
      answer: `Disability & Life Planning brings together the financial, tax, and benefit systems that support individuals and families with disabilities.
We help you:
Apply for or appeal the Disability Tax Credit (DTC) and ODSP.
Open and optimize Registered Disability Savings Plans (RDSPs).
Build ODSP-safe budgets and benefit strategies that protect eligibility.
Plan for transitions at 18, guardianship, trusts, and long-term care.


It’s a complete roadmap — from eligibility to financial independence, built with care and compliance.
`,
    },
    {
      question: "Can you help if our DTC or ODSP application was denied?",
      answer: `
Yes. We frequently assist clients after a DTC or ODSP denial.
Our team reviews your medical and financial documentation, identifies what was missing or unclear, and prepares a strong, compliant reapplication or appeal.
We also coordinate with medical professionals and CRA/ODSP offices directly — ensuring every form, letter, and statement supports your case.

The result: higher approval confidence and less stress for families navigating complex systems.
`,
    },
    {
      question: "How can families plan financially without losing benefits?",
      answer: `Many families worry that saving or inheriting money will disqualify them from ODSP or DTC — but it doesn’t have to.
We help design ODSP-safe strategies, including:
Henson trusts and exempt asset planning
RDSPs with matching grants and bonds
Cashflow and tax management that protect benefits while growing savings

Our plans keep benefits secure while helping families build sustainable, long-term financial health.`,
    },
    {
      question: "What makes AALI Consulting different from other disability planning services?",
      answer: `
Unlike agencies that only file forms, we combine tax expertise, financial planning, and compassionate guidance under one roof. We don’t just secure benefits — we help families:
Understand the full financial picture
Organize support systems and trusts
Build plans that last through every stage of life`,
    },
  ];

  const heroImages = [
    '/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png',
    '/Web Assets/NEW/Hero Section/Business-Culture-in-Canada-Evolved-Metrics-1-1024x565.jpg',
    '/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp',
  ];
  const whyChooseData = {
    image: "/Web Assets/Images/NEW/Disability & Life Planning/Canada-Disability-Laws.jpeg",
    title: "Why work with us",
    paragraphs: [
      `At AALI Consulting, we understand that life’s biggest challenges don’t come with an instruction manual. Navigating disability benefits, ODSP, DTC applications, or major family transitions can feel overwhelming — especially when every form, doctor’s letter, and deadline matters. That’s why our approach is built on calm, step-by-step guidance. We coordinate benefits, complete paperwork, and ensure your financial plan aligns with your medical, family, and personal needs — so you can focus on recovery, stability, and peace of mind.`,
      `

      What sets us apart is our deep integration of empathy and precision. We collaborate with clinicians, case managers, and legal advisors to ensure every piece of your support system connects smoothly. Whether it’s helping families secure RDSP grants, assisting with accident recovery, or developing ODSP-safe budgets, our goal is simple — to give you confidence, clarity, and lasting financial stability when life feels uncertain.
      `,
    ],
  };



  const servicesList = [
    {
      title: "Disability Support (DTC & ODSP)",
      description: `Compassionate, compliant guidance for individuals and families navigating the Disability Tax Credit and Ontario Disability Support Program.

Applying for disability benefits shouldn’t be overwhelming. Our Disability Support (DTC & ODSP) service helps you qualify, apply, and maximize every credit and program available — with clear communication, proper documentation, and respectful coordination with doctors, clinics, and agencies. We simplify the process, protect your eligibility, and turn approvals into lasting financial stability.


We guide you through every step with care and clarity:
Eligibility Screening – Quick, plain-language assessment to confirm if you or your family member may qualify for the DTC or ODSP.
Application Preparation – Complete form drafting, doctor coordination, and physician summaries written to reduce clinic workload.
CRA & ODSP Follow-Through – We track your applications, respond to questions, and keep you updated at every stage.
Post-Approval Planning – Once approved, we adjust prior tax filings, unlock related benefits, and ensure ODSP compliance.
Appeals & Reconsiderations – If a claim was denied, we analyze the reasons, strengthen documentation, and manage a well-positioned reapplication.



Beyond paperwork — we help build long-term financial stability:
Retroactive Refund Optimization – Turn DTC back-year refunds into a structured plan that prioritizes essentials, savings, and debt relief.
ODSP-Safe Budgeting – Create a spending plan that maintains eligibility while improving day-to-day stability.
RDSP Setup & Strategy – Design a contribution and grants plan for long-term security under the Registered Disability Savings Plan.
Tax & Benefit Coordination – Align medical expenses, disability transfers, and credits to maximize refunds year after year.
Family & Caregiver Guidance – Help parents and caregivers organize documents, claims, and renewals with minimal stress.



The Result:
Confidence, clarity, and dignity — with a benefits plan that’s approved, optimized, and fully aligned to your financial goals. Whether you’re applying for the first time or building on existing supports, we make the system work for you, not against you.`,
    },
    {
      title: "Family Disability Planning",
      description: `Coordinated tax, benefit, and savings strategies for families caring for children or adults with disabilities.

Supporting a loved one with a disability requires more than care — it takes organization, strategy, and long-term planning. Our Family Disability Planning service helps families integrate medical, financial, and government supports into one clear roadmap. We simplify complex systems, ensure full compliance with CRA and ODSP rules, and build a plan that balances stability today with security for tomorrow.


We help families unlock every available support — calmly and thoroughly:
Benefits & Credit Mapping – Identify all eligible programs: Disability Tax Credit (DTC), Child Disability Benefit (CDB), GST/HST credit, Ontario benefits, and more.
DTC Transfer & Tax Optimization – Ensure credits are properly transferred to a supporting parent or spouse when allowed — maximizing household refunds.
ODSP Coordination – Create an ODSP-safe plan that protects income and savings while maintaining program eligibility.
Medical & Care Expense Planning – Organize annual receipts, therapy costs, and travel logs for the best tax outcome.
Education & Youth Transition – Prepare for key milestones such as IEP reviews, post-secondary planning, and the age-18 transition from child to adult benefits.



We then help families plan beyond day-to-day needs — toward stability and legacy:
RDSP Strategy – Step-by-step setup, contribution planning, and grant/bond maximization under the Registered Disability Savings Plan.
Long-Term Care & Guardianship Planning – Work alongside your lawyer to explore Henson Trusts, wills, and substitute decision-making options.
Family Giving & Support Design – Structure financial help from relatives in ways that don’t compromise benefits or create reporting issues.
Renewal & Documentation Kits – Build simple systems to track paperwork, renew credits, and respond quickly to CRA or ODSP requests.
Holistic Coordination – Align your family’s financial plan, tax filings, and benefit renewals under one organized framework.



The Result:
A calmer, clearer path for your family — with stable benefits, coordinated tax relief, and a long-term plan that protects both financial and emotional well-being. Every decision is designed to give your loved one dignity, independence, and lifelong security.
`,
    },
    {
      title: "Accident Recovery",
      description: `Financial recovery that moves at your pace — from first claims to full stability.

An accident can instantly disrupt your income, benefits, and peace of mind. Our Accident Recovery & Financial Stability service helps individuals and families navigate the financial side of recovery — from insurance paperwork and benefit coordination to rebuilding budgets and long-term security. We simplify complex processes, ensure compliance, and make sure you’re supported at every step while you focus on healing.


We handle the coordination so you don’t have to:
EI, WSIB & LTD Claims – Guidance on what to apply for, how to apply, and how benefits interact with each other.
Insurer Documentation Support – Help completing forms, tracking deadlines, and maintaining organized records for healthcare providers and insurers.
Tax & Benefit Integration – Ensure you receive all available medical and disability-related tax credits, including DTC eligibility where applicable.
Income Replacement Planning – Assess and manage how benefits affect cashflow, budgeting, and debt management during recovery.
CRA Compliance & Reporting – Manage benefit-related tax slips, reimbursements, and deductions accurately to prevent reassessments.



We also help you transition from short-term recovery to long-term stability:
Return-to-Work Strategies – Plan your financial comeback with a gradual re-employment or modified-duty approach that maintains income continuity.
ODSP & EI Coordination – Align benefits when recovery takes longer than expected, ensuring eligibility and consistent support.
Savings & Emergency Planning – Build an emergency cushion and manage payouts or settlements responsibly.
Family Support Systems – Coordinate with caregivers or dependents to ensure all household obligations are met during your recovery.
Stress-Free Documentation Kits – Maintain all claim and tax records in one place for renewals, audits, or follow-ups.



The Result:
A recovery plan that restores more than just income — it restores confidence. You’ll know exactly what benefits you’re entitled to, how to claim them, and how to rebuild your financial footing step by step. We make sure that every form, deduction, and decision supports your full return to stability and independence.
`,
    },
    {
      title: "Job Loss Strategy",
      description: `Turn job loss into a structured opportunity — with calm, clear, and financially sound next steps.

Losing a job is never easy, but it doesn’t have to lead to financial chaos. Our Job Loss Strategy service helps you stabilize your finances, understand your benefits, and chart your next move — whether it’s returning to work, starting a business, or pursuing freelancing. We bring structure, clarity, and forward planning to one of life’s most uncertain moments.


We guide you through every step of financial transition with care and precision:
Severance & Final Pay Review – Ensure your severance, unused vacation, and final payroll are correct and optimized for tax efficiency.
EI Eligibility & Application Support – Walk you through the Employment Insurance process, timelines, and documentation to avoid delays.
Benefit Continuation & RRSP Transfers – Clarify what happens to your health plan, pension, and RRSP, and how to roll them over safely.
Tax Withholding Optimization – Prevent overpayment or underpayment during severance or temporary unemployment.
Debt & Expense Management – Create a short-term spending plan to stretch savings while you reorient your career.



When you’re ready to rebuild, we help you plan your next chapter:
Career & Reemployment Strategy – Explore traditional employment, consulting, or freelancing with clear financial projections.
Business & Self-Employment Readiness – Guidance for starting a small business, managing HST registration, and separating personal vs. business expenses.
Cashflow & Savings Rebalancing – Rebuild your monthly budget based on new income or self-employment earnings.
RRSP & TFSA Planning – Adjust contribution strategies to fit your new financial situation and minimize taxes.
Tax Filing After Job Loss – Ensure all deductions (moving, job search, professional fees) are properly claimed to maximize refunds.



The Result:
A clear, step-by-step roadmap for financial recovery and reinvention. You’ll know exactly where you stand, what to do next, and how to protect your finances while pursuing your next opportunity. We turn uncertainty into structure — and structure into stability.
`,
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
      title: "Separation & Divorce",
      description: `Compassionate, tax-smart guidance for navigating one of life’s hardest transitions with clarity and confidence.

Separation or divorce can bring overwhelming emotional and financial stress. Our Separation & Divorce service helps you bring order to the financial side — ensuring property division, support payments, and tax implications are handled clearly, fairly, and in compliance with CRA requirements. We make sure every step is organized, documented, and optimized for your long-term stability.


We simplify the complex tax and financial issues that arise during separation:
Asset & Property Division – Identify, value, and allocate assets (homes, RRSPs, TFSAs, pensions, investments) in a tax-efficient and compliant way.
RRSP/TFSA Transfers – Guide you through contribution and withdrawal rules to avoid unnecessary penalties during division.
Support Payment Tax Rules – Clarify the taxation of spousal and child support — what’s deductible, what’s not, and how to track payments properly.
Separation Date Recordkeeping – Help you establish and document your separation date — critical for CRA, legal, and financial reporting.
Joint Accounts & Debts – Assist with closing, transferring, or restructuring shared accounts and liabilities.



We then help you plan for life after separation — with confidence and foresight:
Cashflow & Housing Planning – Build a new financial framework around rent, mortgage, and daily expenses post-separation.
Tax Filing for Split Years – Ensure accurate filings for the year of separation, including adjusted marital status and eligible credits.
Childcare & Family Credits – Reassess eligibility for CCB, child care deductions, and shared-parenting tax implications.
Legal & Accounting Coordination – Work closely with your lawyer and financial advisor to ensure all settlements align with your tax plan.
Future Stability & Recovery – Prepare budgets, benefit applications, and savings strategies that support rebuilding your life long-term.



The Result:
A structured, supportive approach to financial recovery that minimizes stress and avoids costly mistakes. You’ll leave with clear documentation, efficient tax positioning, and a renewed sense of control — knowing your separation is handled with professionalism, empathy, and foresight.
`,
    },
    {
      title: "Loss of a Loved One",
      description: `
Guiding families through every financial and administrative step after loss — with compassion, clarity, and care.

Losing a loved one is one of life’s most difficult experiences — and managing the financial and tax responsibilities that follow can feel overwhelming. Our Loss of a Loved One & Estate Transition service helps you settle affairs, file final returns, and access benefits without confusion or added stress. We combine sensitivity with structure, ensuring every form, filing, and certificate is handled with precision.


We help you manage immediate obligations and organize the estate process:
Final & Estate Tax Returns – Prepare terminal and optional returns (T1, T3) to report income, capital gains, and estate distributions.
CPP Death & Survivor Benefits – File applications accurately and ensure benefits are coordinated with dependents or surviving spouses.
Probate Guidance & Clearance Certificates – Navigate probate requirements, CRA clearance, and timelines for estate settlement.
Asset Transfers & Valuation – Assist with transferring property, investments, or business shares while minimizing tax exposure.
Executor Support – Provide checklists, templates, and reporting tools to simplify executor duties and meet legal obligations.



Beyond compliance, we help you prepare for ongoing stability and legacy preservation:
Estate Distribution Planning – Structure how assets and funds are distributed to beneficiaries with transparency and documentation.
RRSP, TFSA, and Investment Rollovers – Guide surviving spouses or dependents through tax-deferred transfers and reporting.
Charitable Giving & Memorial Donations – Manage donation receipts and optimize credits for legacy gifts.
Trust Setup & Succession Coordination – Collaborate with legal advisors to establish trusts and future safeguards for minors or dependents.
Post-Transition Financial Planning – Support survivors with new budgets, benefit coordination, and long-term financial plans.



The Result:
A calm, guided path through the financial aftermath of loss. You’ll know what to file, when to file it, and how to close each chapter with dignity and accuracy. We ensure every step honors your loved one’s legacy — while protecting your peace of mind and financial future.
`,
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Share Your Situation",
      text: "Book a consult and upload relevant documents.",
    },
    {
      number: "2",
      title: "We Map Your Benefits & Taxes",
      text: "Clear plan with forms, credits, and obligations handled.",
    },
    {
      number: "3",
      title: "Confidently Move Forward",
      text: "We file, support, and stand by you if CRA asks questions.",
    },
  ];

  const resourcesData = [
    {
      img: "/Web Assets/NEW/Resources/360_F_330941253_b3Dor4GncjCMVPvw8QM4CsyUymtgvvMM.jpg",
      title: "Disability tax credit (DTC)",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities/disability-tax-credit.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/Clearline-CPA-How-to-Sign-Up-for-CRA-My-Business-Account-scaled.jpg",
      title: "T2201 Disability Tax Credit Certificate (form & instruction)",
      link: "https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t2201.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-1480239160-612x612.jpg",
      title: "Estate Planning for Disabled Beneficiaries",
      link: "https://ca.rbcwealthmanagement.com/documents/73602/1343743/Estate%2BPlanning%2Bfor%2BBenes%2Bwith%2BDisabilities.pdf/3233f6df-6c7f-4c9e-8b67-73b0e51c2260?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-185066026-612x612.jpg",
      title: "How Henson Trusts Can Help Canadians with Disabilities",
      link: "https://www.ig.ca/en/insights/how-henson-trusts-can-help-canadians-with-disabilities?utm_source=chatgpt.com",
    },
  ];



  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      <HeroSection
        images={heroImages}
        title="Guidance Through Life’s Toughest Transitions"
        subtitle="Compassionate, step-by-step support for disability, accidents, job loss, separation, and family loss—so you stay financially steady and secure."
        buttonText="Get Started"
        buttonLink="/ContactUs"
      />

      {/* What We Do */}
      {/* What We Do Section */}
      <WhatWeOffer heading="What We Offer" cards={offerCards} />
      <CallToAction
        heading="Difficult Transitions Don’t Have to Be Faced Alone."
        subheading="We simplify benefits, forms, and CRA compliance — so whether it’s disability, separation, or loss, you’ll have trusted guidance."
        buttonText="Book Now"
        buttonLink="/ContactUs"
        backgroundImage="/Web Assets/Images/NEW/Disability & Life Planning/7fc47ae7-db85-43f3-ab85-d8e3a54eaf39-640w.jpg.png"
      />
      <WhyChooseUs
        image={whyChooseData.image}
        title={whyChooseData.title}
        paragraphs={whyChooseData.paragraphs}
      />


      <ServiceAccordion
        id="explore-services"
        heading="Explore Our Services in Detail"
        services={servicesList}
      />
      <ThreeStepProcess heading="Our 3-Step Process" steps={processSteps} />
      {/* Resources */}
      <ResourcesSection heading="Resources" resources={resourcesData} />
      <CallToAction
        heading="Support When You Need It Most."
        subheading="Get clear, compassionate guidance through disability claims, job loss, family transitions, or estate matters."
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