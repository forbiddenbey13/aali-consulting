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
      title: "Students & Young Adults (17–25)",
      description:
        "Smart filing, tuition credits, starter TFSA, and simple budgets that set a strong financial foundation early on in your life or career.",
      link: "/TaxService",
    },
    {
      title: "Young Families & Homebuyers (26–34)",
      description:
        "Plan childcare credits, use FHSA and RRSP Home Buyers’ Plan, balance family expenses, and build sustainable financial security.",
      link: "/Bookkeeping&Accounting",
    },
    {
      title: "Mid-Career Professionals (35–50)",
      description:
        "Optimize taxes, maximize RESP savings, manage equity compensation, and create debt and housing strategies that protect growing family wealth.",
      link: "/StrategicPlanning",
    },
    {
      title: "Pre-Retirement (50–64)",
      description:
        "Coordinate CPP/OAS timing, design smart RRIF/LIF withdrawals, protect estates, and position wealth for a smooth retirement transition.",
      link: "/TaxService",
    },
    {
      title: "Retirement & Estate (65+)",
      description:
        "Maximize income sustainability, minimize taxes, coordinate healthcare costs, and align estate planning with family goals and charitable intentions.",
      link: "/CFOAdvisory&Governance",
    },
    {
      title: "Specialized Planning",
      description:
        "Support business transitions, family succession, and high-net-worth legacy planning that preserves wealth and purpose across generations.",
      link: "#",
      special: true,
    },
    {
      title: "Cross-Border Financial Planning",
      description:
        "Integrated tax, investment, and residency planning between Canada and abroad — reducing double taxation and keeping your global finances compliant and clear.",
      link: "/TaxService",
    },
    {
      title: "SME Financial Planning",
      description:
        "Integrated cashflow, retirement, and tax strategies that align business profits with personal goals — helping owners build, protect, and grow long-term wealth.",
      link: "/CFOAdvisory&Governance",
    },
    {
      title: "Strategic Wealth & Family Planning",
      description:
        "Comprehensive wealth management for high-net-worth families — covering investments, trusts, estate transfers, and tax-efficient succession to preserve legacy and security.",
      link: "/CFOAdvisory&Governance",
    },
  ];
  const faqs = [
    {
      question:
        "What’s the difference between financial planning and strategic financial planning?",
      answer: `
Standard financial planning focuses on budgeting, saving, and investing for short- to medium-term goals.
Strategic financial planning, on the other hand, goes beyond the basics — aligning cashflow, taxes, insurance, retirement, and estate decisions into one cohesive, long-term plan.

At AALI Consulting, we integrate personal, corporate, and family layers into a single strategy, ensuring that every dollar you earn and invest compounds toward your goals — efficiently, ethically, and sustainably.`,
    },
    {
      question: "How do you personalize a financial plan for each client?",
      answer: `
We start by understanding your full picture — income, family needs, assets, debts, goals, and risk comfort. Then we create a customized financial roadmap that covers:

• Short- and long-term priorities (e.g., home, education, business, or retirement)
• Tax efficiency (RRSP, TFSA, FHSA, corporate structures, charitable giving)
• Risk protection (insurance, wills, POAs, emergency reserves)
• Future planning (estate, succession, or cross-border considerations)

Each plan is delivered with a 12–36-month money calendar, outlining what to save, where to save, and when to act — so progress is clear and measurable.`,
    },
    {
      question: "Do you sell investments or insurance products?",
      answer: `
No. AALI Consulting is advice-only and coordination-focused. We don’t sell investment or insurance products, which means our guidance is completely independent and unbiased.

Instead, we coordinate your overall financial strategy with your existing advisors — accountants, lawyers, portfolio managers, or insurance specialists — ensuring everyone is working from the same, tax-smart blueprint.`,
    },
    {
      question: "How often should I update my financial plan?",
      answer: `
We recommend reviewing your plan at least once a year, or sooner if major life changes occur — such as a new job, home purchase, marriage, separation, business launch, or retirement transition.

Our clients often work with us on a quarterly or semi-annual cadence, where we refine your projections, update tax strategies, and align your financial roadmap to evolving goals and legislation — keeping your plan current, compliant, and effective year after year.`,
    },
  ];

  const heroImages = [
    '/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png',
    '/Web Assets/NEW/Hero Section/Business-Culture-in-Canada-Evolved-Metrics-1-1024x565.jpg',
    '/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp',
  ];
  const whyChooseData = {
    image: "/Web Assets/Images/NEW/Strategic Financial Planning/Image-empty-state.jpg.png",
    title: "Why Choose AALI Consulting For Financial Planning",
    paragraphs: [
      `At AALI Consulting, financial planning isn’t just about numbers — it’s about direction. We help you understand how every financial decision connects to your bigger goals: saving for a first home, balancing family priorities, funding education, planning retirement, or leaving a legacy. Our advisors look at the complete picture — tax, cashflow, debt, benefits, and investment strategy — so your plan works in real life, not just on paper.`,
      `What sets us apart is our stage-of-life approach. Whether you’re a student building credit, a family navigating childcare and mortgages, or an executive preparing for succession, we tailor your roadmap to maximize growth and minimize stress. With clear insights, ongoing guidance, and tax-smart strategies, we turn financial planning into progress — one confident decision at a time.`,
    ],
  };

  const servicesList = [
    {
      title: "Students & Young Adults (17–25)",
      description: `
Build smart financial habits early — and turn your first paycheques into lifelong momentum.

We help students and young professionals understand how taxes, savings, and benefits actually work in real life — from filing your first return to opening your first TFSA. Whether you’re in school, starting a job, or freelancing on the side, we help you stay compliant, build savings, and form habits that compound over time.

Our tailored approach helps you make confident financial decisions in your first stage of independence:
• Student Tax Filing (T1) – Claim tuition, education, and textbook credits the right way.
• TFSA & RRSP Basics – Learn the difference, when to start, and how to grow your savings.
• FHSA Starter Guidance – Begin planning early for your first home purchase.
• Budgeting & Expense Tracking – Build control over spending and avoid common credit pitfalls.
• Freelance & Side Hustle Support – Learn how to register, track income, and report self-employment properly.

Our guidance is built to meet you where you are — and grow with you:
• Simple tools and templates for tracking income and expenses.
• Clear, jargon-free explanations of how tax and savings systems work in Canada.
• Step-by-step planning for tuition carryforwards, benefits, and early investing.
• Optional career add-on: resume, LinkedIn, and budgeting support for your first job or freelance gig.

**The Result:**
Financial confidence from the start — smart tax habits, a growing savings plan, and a clear understanding of how to build wealth from your very first dollar.
    `,
    },
    {
      title: "Young Families & Homebuyers (26–34)",
      description: `
Turn life’s biggest milestones into a coordinated financial plan that supports your family’s growth.

This stage of life often comes with competing priorities — a first home, childcare costs, career growth, or even starting a small business. We help you balance these goals through integrated tax, savings, and credit strategies that build security today while keeping your long-term plans on track.

Our planning framework helps you make smarter financial moves through every transition:
• Home Affordability & Purchase Planning – Use the FHSA, RRSP Home Buyers’ Plan, and tax credits strategically.
• Family Tax Benefits – Optimize for childcare deductions, Canada Child Benefit (CCB), and spousal income-splitting.
• Debt & Budget Alignment – Create sustainable mortgage, loan, and emergency fund plans.
• Retirement & TFSA Integration – Continue investing while managing new responsibilities.
• Insurance & Protection Review – Evaluate life, disability, and critical-illness coverage.

**The Result:**
A complete, realistic family financial plan that supports your first home, growing responsibilities, and long-term wealth — built step by step with clarity and care.
    `,
    },
    {
      title: "Mid-Career Professionals (35–50)",
      description: `
Optimize your peak earning years with strategic tax planning, smart investing, and a clear roadmap toward long-term freedom.

This is the stage where financial decisions have the biggest impact — income is higher, family demands grow, and your goals start to shift from building to preserving. We help you make confident, tax-efficient decisions that align your career, family, and investments into a single, forward-looking plan.

Our mid-career framework helps you refine, protect, and scale your wealth with precision:
• Tax Optimization Strategies – Integrate RRSP, TFSA, and employer benefits efficiently.
• RESP & Education Planning – Maximize grants and education savings.
• Equity Compensation & Stock Options – Navigate RSUs, ESPPs, and stock sales confidently.
• Debt & Mortgage Structuring – Reshape liabilities to increase flexibility.
• Retirement & Investment Alignment – Balance growth and security through goal-based planning.

**The Result:**
A focused, data-driven financial plan that turns your peak earning years into lasting wealth — so you can work by choice, not by necessity.
    `,
    },
    {
      title: "Pre-Retirement (50–64)",
      description: `
Align your savings, taxes, and lifestyle goals for a smooth, confident transition into retirement.

This is the decade when clarity matters most — as you turn career earnings into income streams and shift focus from growth to security. We design plans that minimize taxes, maximize income longevity, and ensure your next chapter is stress-free.

Our pre-retirement planning process includes:
• Retirement Income Planning – Strategically time CPP and OAS.
• RRSP to RRIF Transition – Plan conversions and withdrawals efficiently.
• Pension & Employer Plan Integration – Coordinate DB/DC pensions and savings.
• Tax-Efficient Drawdown – Sequence RRSP, TFSA, and non-registered withdrawals.
• Healthcare & Long-Term Planning – Prepare for medical and insurance needs.

**The Result:**
A clear, tax-smart pre-retirement strategy that transforms decades of savings into dependable income — giving you confidence to retire on your own terms.
    `,
    },
    {
      title: "Retirement & Estate (65+)",
      description: `
Turn your lifetime of savings into steady, tax-efficient income — while protecting your legacy and supporting the people you care about most.

We help retirees and families create structured income, minimize taxes, and prepare a clear estate roadmap that honors their wishes.

Our framework focuses on stability, simplicity, and legacy clarity:
• Reliable Retirement Income – Coordinate RRIF/LIF, CPP, OAS, and annuities.
• Tax-Smart Withdrawals – Sequence RRIF, TFSA, and non-registered income.
• Healthcare & Long-Term Care – Integrate costs, insurance, and funding.
• Estate & Legacy Planning – Review wills, POAs, and charitable giving.
• Family & Executor Readiness – Create checklists and executor binders.

**The Result:**
A retirement that’s financially secure, emotionally peaceful, and purpose-driven — with a legacy that’s clear, intentional, and enduring.
    `,
    },
    {
      title: "Specialized Planning",
      description: `
Tailored financial guidance for unique life situations — from business exits and inheritances to complex tax structures and family transitions.

We bring clarity, strategy, and precision to complex financial landscapes.

Our specialized framework includes:
• Business Succession & Exit Planning – Prepare companies for sale or transition.
• Inheritance & Wealth Transfer – Build tax-smart intergenerational strategies.
• Trusts & Estate Structures – Create family trusts or holding companies.
• Philanthropic & Faith-Based Giving – Align charitable giving with values.
• Major Life Transitions – Handle divorce, disability, or relocation with care.

**The Result:**
A custom-built, forward-looking financial strategy that protects your assets, honors your values, and ensures every major transition happens on your terms.
    `,
    },
    {
      title: "Cross-Border Financial Planning",
      description: `
Coordinated, compliant, and stress-free planning for individuals and businesses across the Canada–U.S. border.

We help structure finances to minimize double taxation and optimize treaty benefits.

Our services include:
• Residency & Treaty Analysis – Determine correct residency and treaty position.
• Split-Year & Dual-Status Filings – Reflect accurate income and relocations.
• Payroll & Social Security Alignment – Coordinate CPP/EI with U.S. benefits.
• Foreign Asset Reporting – File T1135, FBAR, and FATCA correctly.
• Investment & Retirement Coordination – Align RRSPs, TFSAs, IRAs, and 401(k)s.

**The Result:**
A cross-border financial plan that eliminates confusion, reduces double taxation, and aligns your global tax, investments, and retirement seamlessly.
    `,
    },
    {
      title: "SME Financial Planning",
      description: `
Integrated, proactive, and tax-efficient financial planning designed to help small and medium-sized business owners build, manage, and protect their wealth—inside and outside the company.

For entrepreneurs and incorporated professionals, business and personal finances are deeply connected. At AALI Consulting, we bridge that gap. Our team aligns your corporate strategy, compensation structure, and long-term financial goals to ensure every dollar works harder—whether it’s funding growth, paying yourself, or planning for succession.



We help you structure your finances for clarity and control:

Salary vs. Dividends Optimization – Determine the most tax-efficient mix for compensation while maintaining RRSP, CPP, and loan eligibility.
OpCo/HoldCo Planning – Build layered structures that protect assets, streamline intercompany transfers, and reduce long-term tax exposure.
Cashflow Forecasting & Budgeting – Create monthly and quarterly projections to anticipate funding needs and reinvestment opportunities.
Corporate & Personal Tax Integration – Align corporate and personal filings to minimize double taxation and ensure seamless year-end coordination.
GST/HST, Payroll & Compliance – Keep your filings current with systems that automate remittances and reduce admin burden.




We also focus on long-term wealth growth and risk protection:

Retirement & Exit Planning – Design structured withdrawal, sale, or succession strategies that maximize after-tax proceeds.
Investment Coordination – Manage surplus corporate cash and retained earnings with integrated portfolio and tax planning.
Family & Estate Alignment – Balance family income splitting, trusts, and estate provisions within your business structure.
Insurance & Contingency Planning – Safeguard ownership and continuity with key-person insurance and risk coverage analysis.
Digital Tools & Dashboards – Leverage SuiteDash, QuickBooks, and cloud dashboards for real-time business insights.




The Result:


A fully integrated financial plan that connects your business success to your personal goals—reducing tax drag, increasing liquidity, and positioning you for sustainable growth, retirement, or succession on your own terms.
    `,
    },
    {
      title: "Strategic Wealth & Family Planning",
      description: `Comprehensive, coordinated, and forward-thinking financial planning designed to preserve family wealth, reduce tax burdens, and create a lasting legacy for future generations.

At AALI Consulting, we help high-net-worth individuals and families align their investments, tax strategies, and estate plans into one cohesive roadmap. From managing trusts to optimizing withdrawals, every decision is structured to enhance after-tax growth while protecting your family’s financial future.



We bring clarity and structure to complex financial lives:

Integrated Wealth & Tax Strategy – Align investment income, business ownership, and real estate portfolios within a unified tax-efficient plan.
Retirement Income Optimization – Build withdrawal schedules that maximize RRIF, LIF, and pension income while preserving OAS and minimizing clawbacks.
Trusts & Estate Planning – Coordinate family trusts, wills, and inheritances to ensure wealth transitions smoothly and tax-efficiently.
Philanthropy & Legacy Giving – Structure charitable foundations or donor-advised funds that align with your faith, values, and estate goals.
Global & Multi-Jurisdictional Assets – Manage investments, businesses, or real estate across borders with compliant, coordinated reporting.




We also guide families through major milestones and transitions:

Education & Intergenerational Planning – Set up RESPs and family investment accounts to fund education and financial literacy for the next generation.
Business Succession – Transition ownership of family businesses using estate freezes, share reorganization, and capital gains deferrals.
Wealth Protection – Establish holding companies, insurance structures, and creditor-proofing strategies for long-term stability.
Spousal & Family Wealth Equalization – Balance income and asset ownership for fairness, flexibility, and tax efficiency.
Advisor Coordination – Work alongside your accountants, lawyers, and portfolio managers to maintain harmony across every part of your plan.




The Result:


A clear, tax-smart strategy that turns complexity into control—preserving your wealth, protecting your family, and building a legacy that lasts for generations.`
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Understanding",
      text: "We begin with a deep-dive session to understand your financial situation, goals, and priorities — ensuring we start with a clear vision of what matters most to you.",
    },
    {
      number: "2",
      title: "Customized Strategy & Planning",
      text: "Our team builds a tailored financial roadmap integrating tax, savings, and investment strategies aligned with your stage of life and goals.",
    },
    {
      number: "3",
      title: "Implementation & Ongoing Guidance",
      text: "We help you take actionable steps, stay compliant, and continuously adapt your plan through life’s changes — with regular reviews and transparent reporting.",
    },
  ];

  const resourcesData = [
    {
      img: "/Web Assets/NEW/Resources/360_F_330941253_b3Dor4GncjCMVPvw8QM4CsyUymtgvvMM.jpg",
      title: "Canadian Tax Guide 2025",
      link: "https://www.canada.ca/en/financial-consumer-agency/services/savings-investments/choose-financial-advisor.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/Clearline-CPA-How-to-Sign-Up-for-CRA-My-Business-Account-scaled.jpg",
      title: "Investment Basics for Beginners",
      link: "https://www.canada.ca/en/financial-consumer-agency/services/financial-basics.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-1480239160-612x612.jpg",
      title: "Retirement Planning Checklist",
      link: "https://www.rbcwealthmanagement.com/en-ca/insights/financial-planning-nine-key-areas-of-focus?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-185066026-612x612.jpg",
      title: "First-Time Homebuyer Programs",
      link: "https://www.moneysense.ca/save/financial-planning/having-a-financial-plan-more-than-doubles-your-retirement-confidence/?utm_source=chatgpt.com",
    },
  ];



  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);

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
        title="Plan Smarter, Live Stronger —
        At Every Stage of Life"
        subtitle="We help you make confident, tax-smart financial decisions at every stage of life."
        buttonText="Get Started"
        buttonLink="/ContactUs"
      />

      {/* What We Do */}
      {/* What We Do Section */}
      <WhatWeOffer heading="What We Offer" cards={offerCards} onLearnMore={handleLearnMore} />
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
      <ThreeStepProcess heading="Our 3-Step Process" steps={processSteps} />
      {/* Resources */}
      <ResourcesSection heading="Resources" resources={resourcesData} />
      <CallToAction
        heading="Plan Today, Thrive Tomorrow."
        subheading="Start Building Your Financial Roadmap"
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
