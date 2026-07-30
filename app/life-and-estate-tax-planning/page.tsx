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

  // Callback for Learn More button (same as Corporate/Personal Tax)
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
      title: "Disability & Family Support",
      description:
        "DTC & ODSP eligibility, applications, appeals, RDSP setup, ODSP-safe budgets, and disability planning for children and families.",
      link: "#explore-services",
    },
    {
      title: "Accident & Health Recovery",
      description:
        "EI/WSIB/LTD claims, insurer forms, treatment/therapy expense tracking, DTC/ODSP integration, and return-to-work coordination.",
      link: "#explore-services",
    },
    {
      title: "Job Loss & Transition",
      description:
        "Severance review, EI setup, survival budgeting, RRSP rollover strategies, and guided pathways back into employment, freelancing, or starting an e-commerce business.",
      link: "#explore-services",
    },
    {
      title: "Separation & Divorce Tax Planning",
      description:
        "Comprehensive support with property division, RRSP/TFSA transfers, CPP credit splits, support tax optimization, and creating a clear roadmap for financial stability post-divorce.",
      link: "#explore-services",
    },
    {
      title: "Estate & Bereavement",
      description:
        "Estate tax returns, CPP survivor benefits, probate, CRA clearance, and step-by-step distribution guidance for families after loss.",
      link: "#explore-services",
    },
    {
      title: "Complex Life Events",
      description:
        "Specialized tax roadmaps for unique situations like relocation, cross-border life changes, or multi-factor cases requiring integrated financial and legal alignment.",
      link: "#explore-services",
    },
  ];
  const faqs = [
    {
      question: "What tax help can I get if I lose my job?",
      answer: `Losing your job can impact your taxes in several ways. You may be eligible for Employment Insurance (EI) benefits, which can provide temporary income support. Additionally, severance pay and any unused vacation pay are considered taxable income. We can help you navigate these changes, optimize your tax situation, and ensure you claim all eligible credits and deductions during this transition.`,
    },
    {
      question:
        "How does the Disability Tax Credit (DTC) or ODSP affect my taxes?",
      answer: `
The DTC can provide significant tax relief by reducing your taxable income and allowing access to additional credits. If you’re receiving ODSP, it’s crucial to understand how these benefits interact with your overall tax situation. We can help you navigate these complexities, ensuring you maximize your benefits while remaining compliant with tax regulations.`,
    },
    {
      question: "Do you help with separation, divorce, or death in the family?",
      answer: `Yes. We provide comprehensive support for individuals navigating separation, divorce, or the loss of a loved one. This includes assistance with tax implications, benefit claims, and financial planning to ensure a smooth transition during these challenging times.`,
    },
    {
      question:
        "Can you work alongside my lawyer, insurer, or financial advisor?",
      answer: `Absolutely. We believe in a collaborative approach to ensure all aspects of your financial and legal situation are aligned. We can coordinate with your existing professionals to provide seamless support and comprehensive solutions tailored to your needs.`,
    },
  ];

  const heroImages = [
    "/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png",
    "/Web Assets/NEW/Hero Section/Business-Culture-in-Canada-Evolved-Metrics-1-1024x565.jpg",
    "/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp",
  ];
  const whyChooseData = {
    image: "/Assets/financial-planning.jpg",
    title: "Why Choose AALI Consulting",
    paragraphs: [
      `Life doesn’t always follow a straight path — and when major changes happen, your finances shouldn’t make things harder. At AALI Consulting, we specialize in guiding individuals and families through life’s most sensitive financial moments: disability support (DTC/ODSP), job loss, separation or divorce, accident recovery, and estate transitions. We combine deep technical expertise with genuine care, helping you organize benefits, navigate forms, and plan your next steps with confidence. Every solution we build is designed to reduce stress, save time, and ensure your financial recovery feels steady and supported.`,
      `

      What makes us different is our integrated, human approach. We coordinate with lawyers, healthcare professionals, and government programs to align your benefits, taxes, and long-term planning into one clear roadmap. Whether you’re applying for the Disability Tax Credit, managing income loss, or settling an estate, our role is to bring order and empathy to every stage. With AALI Consulting, you don’t face complex transitions alone — you gain a partner who helps you move forward with clarity, dignity, and stability.
      `,
    ],
  };

  const servicesList = [
    {
      title: "Disability & Family Support",
      description: `Compassionate, step-by-step guidance through the Disability Tax Credit (DTC), ODSP, and RDSP—so families can access the support they deserve and plan with confidence.

Navigating disability-related benefits in Canada can be overwhelming—multiple forms, medical certifications, income tests, and coordination between federal and provincial programs. We simplify every step, ensuring eligibility is understood, applications are accurate, and benefits are sustained long-term without jeopardizing financial stability or future plans.


We help you access and manage key supports:
Disability Tax Credit (DTC) – Assess eligibility, prepare T2201 forms, and coordinate with your healthcare providers to ensure clear, complete submissions.
Ontario Disability Support Program (ODSP) – Build a compliant financial profile, manage reapplications, and align income or inheritance plans to protect ODSP eligibility.
Registered Disability Savings Plan (RDSP) – Set up the RDSP correctly, maximize grants (up to $70,000) and bonds (up to $20,000), and plan for long-term withdrawals.
Child & Family Benefits – Integrate DTC eligibility with Child Disability Benefit (CDB), Canada Child Benefit (CCB), and related provincial programs.



We also help families plan sustainably:
Transition Planning (at Age 18) – Guide youth through the shift from child to adult disability programs, ensuring continuity of support.
Henson Trust & Estate Coordination – Work with legal and financial advisors to structure inheritances safely under ODSP rules.
Tax Optimization – Apply retroactive claims (up to 10 years) for DTC-approved individuals and ensure benefits integrate with family tax plans.
Documentation & Advocacy – Prepare letters, timelines, and financial summaries that make your case clear and credible to agencies.



The Result:
A coordinated, stress-free path to financial and social stability for individuals with disabilities and their families—ensuring every eligible dollar is protected and every program works together smoothly.`,
    },
    {
      title: "Accident & Health Recovery",
      description: `Recovering from an accident or major illness is hard enough—navigating the paperwork, insurance claims, and benefits shouldn’t be. We coordinate your financial, medical, and insurance details so you can focus on healing.

When injury or illness disrupts your life or ability to work, multiple systems overlap—insurance forms, EI sickness, WSIB, ODSP, and CRA credits. We simplify this complexity with a structured plan that keeps your benefits organized, timelines met, and income flowing. Our approach brings order, calm, and transparency to a stressful process.


We help you secure the benefits and income you’re entitled to:
Insurance & Employment Benefits – Coordinate short- and long-term disability (STD/LTD), WSIB, EI sickness, and group benefits claims.
Form & Evidence Management – Prepare accurate insurer, WSIB, or CRA documents; organize medical reports and treatment summaries.
Income Replacement Planning – Calculate net income under overlapping programs and build a cashflow plan during recovery.
Medical & Therapy Coordination – Track eligible expenses, prescriptions, devices, and travel costs for CRA medical claims or reimbursements.



We also protect your long-term financial and tax health:
Disability Tax Credit (DTC) – Assess eligibility post-accident or illness and assist with applications for retroactive relief.
ODSP & Income Support – Align benefit programs safely to avoid conflicts or clawbacks.
Return-to-Work Strategy – Develop gradual return plans with your employer, doctor, or case manager while maintaining benefit continuity.
Tax & Document Readiness – Prepare organized files for year-end reporting and potential CRA reviews.



The Result:
A clear, compassionate recovery plan that protects your income, benefits, and peace of mind—while giving you back time and focus to heal.
`,
    },
    {
      title: "Job Loss & Transition",
      description: `Losing a job can feel overwhelming—but it doesn’t have to derail your financial stability. We help you navigate severance, benefits, and next steps with clarity, confidence, and a calm, structured plan.

A job loss affects more than your paycheck—it impacts taxes, benefits, and future plans. Whether you’re an employee, contractor, or small business owner, we organize your finances, review your severance, and prepare you to transition smoothly into new work, self-employment, or entrepreneurship.


We help you manage every critical step:
Severance Review & Tax Strategy – Analyze your package, clarify RRSP rollover options, and minimize tax impact with strategic timing.
Employment Insurance (EI) – File correctly, understand benefit calculations, and avoid delays by coordinating with your Record of Employment (ROE).
Cashflow & Budget Planning – Build a 90-day financial plan to manage essentials, pause discretionary spending, and maintain credit stability.
Health & Insurance Continuity – Review benefits end dates and conversion options for health, dental, or life coverage.



We also prepare you for the next stage of your career or income:
Re-employment Readiness – Update your tax profile, adjust withholdings, and set up payroll for your next employer or contract.
Freelancing & Self-Employment – Register for a business number, GST/HST (if needed), and set up bookkeeping to track new income streams.
E-Commerce or Consulting Launch – Get guided through product or service setup, invoicing, and sales tax compliance to replace lost income.
Tax Optimization – Coordinate severance, EI, and new income sources to minimize double-taxation or benefit clawbacks.



The Result:
A confident, well-organized transition that protects your income, simplifies your benefits, and positions you for your next chapter—whether that’s a new job, self-employment, or starting your own business
`,
    },
    {
      title: "Separation & Divorce Tax Planning",
      description: `Separation and divorce can reshape every part of your financial life. We help you navigate taxes, benefits, and property division with a calm, step-by-step plan that protects your interests and keeps you compliant.

Beyond the emotional strain, separation triggers complex financial questions—who claims which credits, how to divide RRSPs, TFSAs, or real estate, and how to handle child or spousal support. Our role is to bring order to the paperwork, identify tax-saving opportunities, and ensure that both short-term stability and long-term financial goals remain intact.


We help you manage every financial and tax detail clearly and fairly:
Tax & Filing Adjustments – Redefine your tax status (separated vs. divorced), adjust benefits, and file correctly for both parties.
RRSP, TFSA & Property Division – Transfer assets tax-free under Family Law provisions and plan withdrawal strategies without triggering penalties.
Child & Spousal Support – Clarify what’s taxable vs. deductible and align payments with CRA and court documentation.
Home & Real Estate – Handle sale, transfer, or buyout of shared property while maximizing the principal residence exemption.



We also plan for long-term financial security:
Credit & Benefit Realignment – Update CCB, GST/HST credits, and provincial benefits based on new household structures.
Legal & Financial Coordination – Collaborate with lawyers, mediators, and financial advisors to ensure tax consistency across all agreements.
Future Tax Strategy – Rebuild RRSP/TFSA contributions and prepare for year-end planning in your new financial situation.
Children’s Education & Disability Planning – Review RESPs, RDSPs, and DTC claims for shared custody or support arrangements.



The Result:
A fair, organized, and tax-smart transition—helping you move forward financially confident, emotionally grounded, and fully compliant with CRA and legal requirements.
`,
    },
    {
      title: "Estate & Bereavement",
      description: `When a loved one passes away, families face an emotional and administrative maze—tax filings, benefits, estate accounts, and government notifications. We help you handle every financial and tax detail with sensitivity, precision, and care.

Our goal is to bring calm to a difficult time. We coordinate estate paperwork, CRA filings, benefits, and timelines, ensuring nothing important is missed. Whether you’re an executor, spouse, or family member, we provide a clear, step-by-step roadmap that keeps you organized and compliant while respecting your family’s pace of grieving.


We simplify the financial and estate process:
Final & Estate Tax Filings – Prepare the terminal return, optional elections, and T3 estate return, ensuring full compliance and optimizing refunds or credits.
Benefits & Government Notifications – Handle CPP Death Benefit, survivor pensions, OAS adjustments, and CRA account updates with clarity and care.
Asset Organization & Documentation – Compile a complete inventory of accounts, property, and insurance, ready for probate or legal review.
Banking & Bill Management – Set up or assist with estate accounts, stop automatic payments, and guide safe fund transfers.



We also help preserve the estate’s long-term value and legacy:
RRSP, RRIF & TFSA Coordination – Apply spousal rollover or beneficiary rules to minimize tax and maintain investment continuity.
Property & Real Estate – Review principal residence exemption, joint ownership, and capital gains implications before sale or transfer.
Estate Clearance & Probate Support – Prepare for CRA clearance certificates and estate administration tax (Ontario) filing.
Philanthropy & Legacy Planning – Structure charitable gifts and foundations to honour your loved one’s values while reducing estate tax.



The Result:
A calm, step-by-step roadmap that brings clarity, compliance, and peace of mind—helping your family close the financial chapter with care, confidence, and dignity
`,
    },
    {
      title: "Complex Life Events",
      description: `
Life doesn’t always follow a straight path. Whether you’re facing a major move, a health diagnosis, a business transition, or a family change, we help you bring structure, clarity, and confidence to complex financial moments.

Each event—planned or unexpected—has tax, legal, and emotional dimensions. We act as your steady guide, connecting the numbers with the realities of your life, and coordinating with your lawyer, insurer, or advisor to ensure every decision is informed and compliant.


We bring order and foresight to the moments that matter most:
Health & Disability Transitions – Apply for DTC or ODSP, redesign cashflow and benefits, and plan long-term medical or caregiving costs.
Separation, Divorce & Family Restructuring – Manage tax filings, property division, and benefit adjustments with fairness and clarity.
Loss & Bereavement – File final returns, handle estate paperwork, and coordinate benefits and legacy planning with compassion.
Cross-Border or Relocation Changes – Determine tax residency, file split-year returns, and realign benefits and accounts during international moves.



We also help you rebuild stability and long-term direction:
Employment & Business Shifts – Plan for job loss, self-employment, or sale of a business while maintaining cashflow and minimizing tax.
Housing & Asset Realignment – Reassess mortgages, insurance, and investment accounts to fit your new life stage.
Family & Caregiver Support – Coordinate benefits, RESP/RDSP planning, and intergenerational support with legal and tax alignment.
Faith- and Culture-Aware Guidance – Respect cultural values in giving, inheritance, and financial planning when desired.



The Result:
A calm, coordinated plan that turns disruption into direction—helping you navigate change with financial confidence, emotional stability, and a clear path forward.
`,
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Assess & Understand",
      text: "We take time to understand your situation, gather essential documents, and map out benefits, credits, and obligations with clear, compassionate guidance.",
    },
    {
      number: "2",
      title: "Plan & File",
      text: "We prepare applications, forms, and tax filings, while coordinating with doctors, insurers, or lawyers to ensure accuracy and timeliness.",
    },
    {
      number: "3",
      title: "Support & Guide",
      text: "We track submissions, respond to CRA/insurer follow-ups, and give you step-by-step guidance through transitions—financially and emotionally.",
    },
  ];

  const resourcesData = [
    {
      img: "/Web Assets/NEW/Resources/360_F_330941253_b3Dor4GncjCMVPvw8QM4CsyUymtgvvMM.jpg",
      title: "Prepare tax returns for someone who died",
      link: "https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/Clearline-CPA-How-to-Sign-Up-for-CRA-My-Business-Account-scaled.jpg",
      title: "Property you inherit or receive as a gift",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/educational-programs/preparing-your-taxes.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-1480239160-612x612.jpg",
      title: "Tax Planning After Death",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/deductions-credits-expenses.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-185066026-612x612.jpg",
      title: "Estate Planning and Taxes: Essential Strategies",
      link: "https://turbotax.intuit.ca/tips/popular-canadian-tax-benefits-deductions-and-credits-in-2023-14180?srsltid=AfmBOoqNYGAkeul_dKIjNGZU_c2w8s0Eo1wKAGrqSfSv6H6PcVs6FxXx&utm_source=chatgpt.com",
    },
  ];

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      <HeroSection
        images={heroImages}
        title="Life Events, Taxed Smarter"
        subtitle="Compassionate, step-by-step tax support for disability, job loss, accidents, separation, and estate needs—so you can focus on life, not paperwork."
        buttonText="File Your Taxes"
        buttonLink="/contact-us"
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
        <ServiceAccordion
          heading="Explore Our Services in Detail"
          services={servicesList}
          openIndex={openServiceIndex}
          setOpenIndex={setOpenServiceIndex}
        />
      </div>

      {/* Resources */}
      <ResourcesSection heading="Resources" resources={resourcesData} />
      <CallToAction
        heading="Lead With Confidence, Govern With Clarity."
        subheading="Partner with us to strengthen controls, streamline reporting, and align tax, cashflow, and governance with your long-term vision."
        buttonText="Book Now"
        buttonLink="/contact-us"
      />

      {/* FAQs */}
      {/* ✅ FAQs — Updated Design */}
      <FAQSection heading="Frequently Asked Questions" faqs={faqs} />

      <Footer />
    </div>
  );
};

export default HomePage;
