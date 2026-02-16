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
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const offerCards = [
    {
      title: "T1 General Filing",
      description:
        "Straightforward annual return preparation for individuals, students, families, retirees, and newcomers.",
      link: "#explore-services",
    },
    {
      title: "Tax Planning & Deductions & Credits",
      description:
        "Optimize deductions, claim tuition/medical/family benefits, and ensure you maximize DTC, CCB, and other credits.",
      link: "#explore-services",
    },
    {
      title: "Registered Plans",
      description:
        "RRSP, TFSA, FHSA, and RESP planning, contributions, and reporting for short-term goals and long-term savings.",
      link: "#explore-services",
    },
    {
      title: "Investments & Rental Income",
      description:
        "Reporting for real estate, self-employment, stocks, ETFs, crypto, and slips (T3, T5, T5008).",
      link: "#explore-services",
    },
    {
      title: "Cross-Border & Newcomers",
      description:
        "Residency compliance, split-year filings, U.S. reporting, and tailored guidance for newcomers and non-residents.",
      link: "#explore-services",
    },
    {
      title: "Life Events & Estates",
      description:
        "Specialized filings for disability, final/estate returns, inheritance planning, or separation/divorce adjustments.",
      link: "#explore-services",
    }
  ];
  const faqs = [
    {
      question:
        "When should I file my personal tax return in Canada?",
      answer: `Ideally, as soon as you receive your T-slips (usually by February). Starting early allows us to review deductions, RRSP/FHSA contributions, and benefit eligibility—ensuring no credits are missed and avoiding last-minute stress.`,
    },
    {
      question: "Can you help me if I’ve missed previous tax years?",
      answer: `
Absolutely. We specialize in catching up on late or missed filings, even for multiple years. We’ll request your CRA transcripts, prepare all outstanding returns, and ensure you receive any missed credits or refunds while keeping your file fully compliant.

For faith-based or not-for-profit organizations, we also provide specialized governance and board compliance support, ensuring transparency and CRA readiness without administrative overload.`,
    },
    {
      question: "Do you help with investment, crypto, or rental income reporting?",
      answer: `Yes. We handle all investment types—including T3/T5 slips, rental properties, and crypto transactions. Our approach ensures your income is accurately reported while maximizing eligible expenses, deductions, and capital gains exemptions.

Our focus isn’t compliance — it’s clarity. We turn numbers into strategy, helping owners make confident, informed business decisions.`,
    },
    {
      question: "How do you ensure my return is accurate and secure?",
      answer: `
We use encrypted portals for document uploads, cross-check every entry against CRA guidelines, and review deductions line-by-line before filing. Every return goes through a two-step accuracy check—so you can file confidently, knowing your data is secure and complete.`,
    },
  ];

  const heroImages = [
    '/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png',
    '/Web Assets/NEW/Hero Section/Business-Culture-in-Canada-Evolved-Metrics-1-1024x565.jpg',
    '/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp',
  ];
  const whyChooseData = {
    image: "/Web Assets/Images/NEW/Tax Services Page/Main Tax Page/istockphoto-915633582-612x612.jpg",
    title: "Why Choose AALI Consulting",
    paragraphs: [
      `Taxes shouldn’t feel stressful or confusing — and with AALI Consulting, they don’t have to be. Our team takes the time to understand your full financial picture, not just your slips and forms. Whether you’re a student filing your first return, a newcomer navigating cross-border reporting, or a retiree managing investments and benefits, we handle every detail with accuracy and care. From optimizing deductions to planning for future tax years, we make sure your filing does more than meet deadlines — it moves you forward.`,
      `

      What makes AALI Consulting different is our proactive, year-round approach. We don’t disappear after tax season; we build strategies that align with your goals, whether that’s saving for a home, maximizing RRSP/TFSA growth, or supporting your family through changing life events. Every return we file is backed by clear communication, CRA-ready documentation, and the peace of mind that comes from knowing your taxes are done right — and designed for tomorrow.
      `,
    ],
  };



  const servicesList = [
    {
      title: "T1 General Filing",
      description: `Accurate, compliant, and stress-free tax filing — tailored to your unique life, family, and income situation.

Your T1 General return is more than just a yearly form — it’s the foundation of your financial record with the CRA. We ensure every credit, deduction, and benefit is accurately claimed while keeping your filing compliant and audit-ready. Whether you’re a student, family, professional, or retiree, your return is prepared with precision and clarity.


We handle every aspect of your filing process from start to finish:
Full T1 Return Preparation – Complete and file your personal income tax return accurately and on time.
Income Source Reconciliation – Organize and verify T4s, T5s, T5008s, and slips from multiple employers or investments.
Credit & Deduction Review – Maximize eligible claims for tuition, medical, donations, moving, child care, and more.
RRSP & TFSA Integration – Incorporate contribution data, withdrawals, and timing strategies to minimize taxes and enhance savings.
Spouse & Family Coordination – Optimize credits between partners or dependents for joint tax savings.



We also help you file confidently for unique or complex situations:
First-Time Filers & Newcomers – Ensure you receive benefits like GST/HST, CCB, and climate credits.
Self-Employed & Freelancers – Report income and expenses accurately, including home office and vehicle use.
Retirees & Seniors – Coordinate CPP, OAS, RRIF, and pension income for tax-efficient withdrawals.
Non-Resident & Cross-Border Filers – Manage dual reporting and treaty implications for international income.



The Result:
A smooth, accurate, and stress-free tax filing experience — with the confidence that your return is fully optimized and CRA-ready. You’ll understand what’s being filed, why it matters, and how it positions you for the year ahead.`,
    },
    {
      title: "Tax Planning & Deductions & Credits",
      description: `Smart, year-round planning that turns everyday expenses into lasting tax savings — tailored to your lifestyle and goals.

Tax planning isn’t just for year-end — it’s about structuring your income, investments, and family expenses throughout the year to reduce your overall tax burden. Our approach helps you understand how to use Canada’s tax system to your advantage, ensuring no opportunity for savings is left unclaimed.


We uncover and apply every credit and deduction available to you:
Personal Deductions Review – Identify eligible deductions such as medical, moving, childcare, tuition, professional fees, and home office expenses.
Tax Credit Optimization – Claim every credit you’re entitled to, from disability and education to first-time homebuyer and caregiver benefits.
Spousal & Family Coordination – Strategically allocate deductions and credits between partners or dependents for the highest net benefit.
RRSP, TFSA & FHSA Planning – Time contributions and withdrawals to optimize refunds and long-term growth.
Investment & Employment Income Strategy – Balance dividends, capital gains, and earned income for efficient tax results.



We also help you plan ahead — not just file reactively:
Pre-Year-End Planning – Review income, deductions, and carry-forward balances to act before December 31st.
Life-Event Adjustments – Plan for major changes like marriage, parenthood, relocation, or retirement.
Tuition & Student Credits – Help students and parents maximize education-related savings and transfer unused amounts efficiently.
CRA-Friendly Documentation – Keep records organized and audit-ready with proper receipts, logs, and digital tracking.



The Result:
You don’t just file taxes — you build a personalized plan that minimizes taxes owed, boosts refunds, and grows long-term wealth. Every credit and deduction works together to serve your financial goals, not just your annual return.
`,
    },
    {
      title: "Registered Plans",
      description: `Build wealth tax-efficiently with plans designed to grow, protect, and fund your life goals — the smart way.

Registered plans like RRSPs, TFSAs, FHSAs, and RESPs are cornerstones of a sound financial strategy. Each one has unique tax advantages — but using them together strategically can mean thousands saved in taxes over your lifetime. We help you understand when to contribute, when to withdraw, and how to report them accurately on your return.


We guide you through every aspect of setup, use, and optimization:
RRSP Planning – Plan contributions and spousal RRSPs for maximum refund impact and future retirement income balance.
TFSA Optimization – Track limits, avoid over-contributions, and align investments for flexible, tax-free growth.
FHSA Setup & Home Buyer Coordination – Use the new First Home Savings Account (FHSA) with RRSP Home Buyers’ Plan for smart property planning.
RESP Management – Maximize education savings with government grants (CESG/CLB) and tax-efficient withdrawal strategies.
Contribution & Withdrawal Timing – Plan actions across multiple years to balance income, deductions, and benefits.



We also handle reporting and compliance to keep your filings flawless:
Slips & Reporting – Manage T4RSP, T5, T3, and FHSA slips accurately within your tax return.
Spousal Coordination – Balance RRSP contributions, RESP beneficiaries, and TFSA investment ownership efficiently.
Retirement Integration – Create a seamless bridge between RRSP drawdowns, TFSA withdrawals, and CPP/OAS timing.
CRA Review & Adjustments – Resolve over-contributions or reporting discrepancies calmly and accurately.



The Result:
Your registered plans don’t just sit — they work together. You’ll save taxes now, grow investments efficiently, and set up a stronger foundation for retirement, education, and home ownership. With our guidance, every dollar contributes to your long-term success.


`,
    },
    {
      title: "Investments & Rental Income",
      description: `Smart, compliant reporting that keeps your portfolio and properties profitable — while minimizing unnecessary tax.

Investment and rental income can build wealth — but without proper reporting, they can also trigger penalties or overpaid taxes. We help you stay compliant while ensuring your investment returns and real estate earnings are structured to reduce taxes and maximize long-term growth. Whether you trade stocks, own rental units, or manage multiple income sources, your tax strategy deserves precision and foresight.


We help you stay organized, optimized, and compliant every step of the way:
Investment Reporting – Accurately file T3, T5, T5008 slips for dividends, interest, and capital gains from brokerage and mutual fund accounts.
Capital Gains & Losses – Track and report realized gains, losses, and carry-forwards to offset future income strategically.
Rental Property Income – Record income, maintenance, mortgage interest, property tax, and depreciation (CCA) to determine true net returns.
Multiple Property Management – Simplify recordkeeping for long-term rentals, short-term stays (Airbnb), or mixed-use properties.
Foreign Investments & Crypto Assets – Stay compliant with foreign income declarations (T1135) and CRA’s crypto reporting rules.



We also provide forward-thinking tax strategy and tracking tools:
Expense Categorization – Identify deductible repairs, utilities, professional fees, and travel expenses tied to rental operations.
Refinancing & Asset Sales – Plan for property sales or reinvestment to manage capital gains efficiently.
Tax Deferral Opportunities – Use RRSP, TFSA, or corporation structures to shelter or defer investment income.
Audit-Ready Records – Maintain clean, digital workpapers with clear support for every figure in your return.



The Result:
You’ll gain complete clarity on where your investment and rental income stands — what’s taxable, what’s deductible, and what’s strategic. We turn complex reporting into an organized, accurate, and opportunity-driven process that protects your earnings and keeps you confidently CRA-ready.


`,
    },
    {
      title: "Life Events & Estates",
      description: `Guidance through life’s biggest transitions — from marriage and separation to retirement and estate filings — with calm, compliant, and compassionate tax support.

Major life changes bring emotional and financial complexity. Whether you’re celebrating milestones like marriage or home ownership, or managing difficult transitions such as separation, loss, or estate administration, we ensure your taxes reflect your new reality with precision and care. Every step is guided to protect your assets, secure your benefits, and simplify the process for you and your family.


We handle every stage of life with clarity and structure:
Marriage & Family Changes – Adjust your tax status, combine benefits, and optimize deductions for your new household.
Separation & Divorce – Navigate property division, support payments, and RRSP/TFSA transfers while ensuring accurate reporting for both parties.
Retirement & CPP/OAS – Plan your transition from work income to retirement income smoothly and tax-efficiently.
Loss of a Loved One – File final (T1) and estate (T3) returns, handle CPP death/survivor benefits, and prepare probate documents.
Estate Settlements – Track income, assets, and expenses during estate administration to maintain full CRA compliance.



We also focus on minimizing disruption and maximizing peace of mind:
Tax Planning for Major Transitions – Model future tax outcomes before you make big decisions.
Estate Recordkeeping – Keep executor files and supporting documents organized, audit-ready, and easy to review.
Survivor Benefits & Credits – Secure applicable federal and provincial survivor benefits, credits, and deductions.
Professional Coordination – Work seamlessly with your financial advisor, lawyer, or estate trustee for unified outcomes.



The Result:
Your financial story stays intact — no matter how life changes. From first homes to final filings, we ensure every return, benefit, and plan reflects your goals, protects your loved ones, and keeps you confidently compliant.


`,
    },
    {
      title: "Cross-Border & Newcomers",
      description: `
Seamless, compliant tax guidance for newcomers, expats, and cross-border professionals — so you can settle, earn, and grow confidently across borders.

Moving between countries or earning income internationally can create complex tax obligations. Whether you’ve just arrived in Canada, are a Canadian working in the U.S., or hold cross-border investments, we help you understand residency rules, avoid double taxation, and stay compliant with both CRA and IRS requirements. Our goal is simple — to give you clarity and confidence from day one.


We simplify the complexities of cross-border and newcomer taxation:
Residency & Treaty Analysis – Determine your residency status, tie-breaker rules, and treaty benefits for accurate filing.
Split-Year & Dual Filings – Prepare part-year returns (Canada and U.S.) that align seamlessly for newcomers or departing residents.
U.S. Citizens in Canada – File FBAR and Form 8938 alongside your Canadian T1 return while avoiding double taxation.
Newcomer Setup – Get started with SIN registration, first-year tax credits, GST/HST benefits, and banking setup support.
Foreign Income Reporting – Report employment, rental, or investment income earned outside Canada, including T1135 foreign asset declarations.



We also provide tools and insights to help you transition smoothly:
CRA & IRS Coordination – Ensure information matches across both agencies to reduce audit risk and delays.
Tax-Optimized Moving Year – Plan your move date and income recognition to minimize global taxes.
Cross-Border Benefits – Access credits and exemptions available under the Canada–U.S. Tax Treaty.
Ongoing Support – Continue receiving bilingual, cross-border tax guidance year after year — no matter where you live or work.



The Result:
You’ll never feel lost between two systems. From your first Canadian tax return to long-term cross-border wealth management, we help you stay compliant, minimize taxes, and build financial stability on both sides of the border.
`,
    },

  ];

  const processSteps = [
    {
      number: "1",
      title: "Upload & Share",
      text: "Send slips and receipts securely through our secure client portal.",
    },
    {
      number: "2",
      title: "Review & Optimize",
      text: "We prepare your return, maximize credits, and walk you through the draft.",
    },
    {
      number: "3",
      title: "File & Support",
      text: "We e-file directly to CRA and handle any questions, adjustments, or notices.",
    },
  ];

  const resourcesData = [
    {
      img: "/Web Assets/NEW/Resources/360_F_330941253_b3Dor4GncjCMVPvw8QM4CsyUymtgvvMM.jpg",
      title: "Personal Income Tax",
      link: "https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/Clearline-CPA-How-to-Sign-Up-for-CRA-My-Business-Account-scaled.jpg",
      title: "Preparing to Do Your Taxes",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/educational-programs/preparing-your-taxes.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-1480239160-612x612.jpg",
      title: "All Deductions, Credits & Expenses",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/deductions-credits-expenses.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-185066026-612x612.jpg",
      title: "20 Popular Canadian Tax Deductions & Credits for 2024",
      link: "https://turbotax.intuit.ca/tips/popular-canadian-tax-benefits-deductions-and-credits-in-2023-14180?srsltid=AfmBOoqNYGAkeul_dKIjNGZU_c2w8s0Eo1wKAGrqSfSv6H6PcVs6FxXx&utm_source=chatgpt.com",
    },
  ];



  // Callback for Learn More button
  const handleLearnMore = (index: number) => {
    setOpenServiceIndex(index);
    // Scroll to the accordion section
    const el = document.getElementById('explore-services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (el instanceof HTMLElement) {
        el.tabIndex = -1;
        el.focus();
      }
    }
  };

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      <HeroSection
        images={heroImages}
        title="Personal Taxes Made Simple, Clear, and Stress-Free"
        subtitle="From students and newcomers to retirees and families, we file accurately, optimize refunds, and plan smarter for the year ahead."
        buttonText="File Your Taxes Today"
        buttonLink="/ContactUs"
      />

      {/* What We Do */}
      {/* What We Do Section */}
      <WhatWeOffer heading="What We Offer" cards={offerCards} onLearnMore={handleLearnMore} />
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
