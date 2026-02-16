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
      title: "Monthly Close & Reconciliations",
      description:
        "Banks, AR/AP, GST/HST and more—kept accurate and on time so you always have clean, reliable numbers.",
      link: "#explore-services",
    },
    {
      title: "Payroll & Compliance",
      description:
        "End-to-end payroll support plus slips (T4, T5, T5018, WSIB) filed correctly and stress-free.",
      link: "#explore-services",
    },
    {
      title: "Dashboards That Drive Decisions",
      description:
        "Clear views of cashflow, margins, and KPIs—so you know what’s working and where to act.",
      link: "#explore-services",
    },
    {
      title: "E-Commerce Accounting",
      description:
        "Seamless mapping for Shopify, Amazon, and other platforms with landed-cost models for real margins.",
      link: "#explore-services",
    },
    {
      title: "Non-Profit & Charity Expertise",
      description:
        "Fund accounting, donation receipting, and T3010-ready reporting tailored to NFP requirements.",
      link: "#explore-services",
      special: true,
    },
    {
      title: "Year-End Ready, Every Month",
      description:
        "Organized books and tidy workpapers that make tax filing and CRA reviews smooth, accurate, and stress-free.",
      link: "#explore-services",
    }
  ];
  const faqs = [
    {
      question:
        "What’s the difference between bookkeeping and accounting?",
      answer: `
Bookkeeping focuses on recording daily financial transactions — things like sales, expenses, payroll, and bank reconciliations — ensuring your books stay accurate and up to date.
Accounting, on the other hand, interprets that data to produce financial statements, reports, and insights that drive business decisions.
At AALI Consulting, both functions work together: our team ensures your books are clean every month, then translates those numbers into clear, actionable reports that show how your business is performing — not just where it stands.`,
    },
    {
      question: "How often should my books be updated?",
      answer: `
For most small and medium-sized businesses, monthly bookkeeping is ideal. It keeps cashflow visible, taxes predictable, and decisions timely. Quarterly updates may work for smaller operations, but they often leave surprises at year-end.

We follow a monthly close routine — reconciling accounts, verifying balances, and preparing financial dashboards — so your business always runs on current, accurate information.`,
    },
    {
      question: "Can you take over my books mid-year or fix messy records?",
      answer: `
Absolutely. Many clients come to us after struggling with delayed reconciliations, missing entries, or confusing chart-of-accounts setups. We begin with a cleanup phase, where we review your existing data, identify errors, and rebuild clean ledgers in QuickBooks Online or Xero.

Once your books are accurate and reconciled, we establish a monthly close calendar — so your reporting stays consistent, compliant, and stress-free all year.
`,
    },
    {
      question: " What software and tools do you work with?",
      answer: `
We’re fluent in today’s most reliable accounting platforms — including QuickBooks Online, Xero, and Dext, plus add-ons like Plooto, Wagepoint, Shopify, Stripe, and POS integrations.

More importantly, we tailor each stack to your business size and industry — from small trades and retail to non-profits and e-commerce — ensuring your financial system is not only compliant, but automated, scalable, and easy to maintain.`,
    },
  ];

  const heroImages = [
    '/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png',
    '/Web Assets/NEW/Hero Section/Business-Culture-in-Canada-Evolved-Metrics-1-1024x565.jpg',
    '/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp',
  ];
  const whyChooseData = {
    image: "/Web Assets/Images/NEW/Bookkeeping & Accounting Page/7-differences-between-book-keeping-and-accounting-1.jpeg",
    title: "What Makes Us Different",
    paragraphs: [
      `At AALI Consulting, bookkeeping isn’t just data entry — it’s decision support. We build systems that give you clarity, not clutter. Every reconciliation, payroll run, and dashboard is designed to keep your books tax-ready and your strategy focused on growth. Whether you’re a small business, nonprofit, or multi-entity operation, our approach blends precision accounting with modern automation — so you see your real financial picture in real time.`,
    ],
  };
  const FactData = {
    image: "/Web Assets/Images/NEW/Bookkeeping & Accounting Page/images.jpeg",
    title: "Stay on Top of Your Numbers — Without the Stress",
    paragraphs: [
      `Managing your finances shouldn’t feel overwhelming. With automated reconciliations, payroll scheduling, and visual dashboards, we handle the numbers so you can focus on building your business. From compliance to cashflow, every detail stays organized, accurate, and up to date — giving you peace of mind and the confidence to plan ahead.`,
    ],
  };


  const servicesList = [
    {
      title: "Monthly Close & Reconciliations",
      description: `
Our monthly close process keeps your books accurate, consistent, and ready for decision-making — so when year-end comes, everything is already reconciled and audit-ready. Every number ties out, every entry has documentation, and your reports reflect reality — not guesswork.


Each month, we review, reconcile, and prepare key financial areas to ensure your business runs smoothly and confidently:
Bank & Credit Card Reconciliations – Match every transaction to ensure accuracy and prevent errors or fraud.
Accounts Receivable & Payable – Track invoices and payments so cashflow stays predictable and up to date.
Payroll, GST/HST, and Liabilities – Reconcile deductions and filings monthly to avoid surprises or penalties.
Prepaid, Accruals & Depreciation Entries – Keep expenses properly matched to the right periods.
Trial Balance Review – Verify balances align with supporting documentation and identify any unusual activity early.



By standardizing this process, your business achieves:
Clarity: Every account is reconciled and supported by source data.
Compliance: GST/HST and payroll filings are always backed by reconciled ledgers.
Confidence: Year-end becomes a simple review — not a scramble.
Continuity: Clean monthly closes allow for consistent, real-time decision-making.

The Result:
Books that are always accurate, CRA-ready, and built for smarter financial planning — not just tax season.
    `,
    },
    {
      title: "Payroll & Compliance",
      description: `We handle your payroll and remittance obligations so you can focus on your team, not tax deadlines. From wage calculations to T-slip filings, every cycle is processed cleanly, on time, and in full compliance with CRA requirements.


Each pay period, we manage the full process — ensuring every detail is documented, filed, and reconciled:
Payroll Setup & Processing – Configure and manage payroll schedules using Wagepoint, ADP, or Ceridian.
Deductions & Remittances – Automate CPP, EI, and income tax submissions to meet CRA timelines.
Employee Slips & Reporting – Prepare and file T4, T4A, T5, and T5018 slips accurately for employees and contractors.
WSIB & Employer Health Tax (EHT) – Handle registration, monthly reporting, and year-end summaries.
Benefits & Reimbursements – Track taxable benefits and expense reimbursements for accurate payroll reporting.



This proactive payroll system gives your business:
Accuracy: Every employee and contractor is paid correctly, with deductions properly recorded.
Compliance: CRA remittances, WSIB, and EHT are always up to date.
Efficiency: Automations reduce manual entry and human error.
Peace of Mind: Year-end filings are prepared automatically from clean, verified records.


The Result:
Payroll that’s seamless, compliant, and scalable — so your people get paid, your filings stay current, and your books stay audit-ready.


`,
    },
    {
      title: "Dashboards That Drive Decisions",
      description: `Turn your numbers into insight — not just reports.

We design dashboards that give you real-time clarity into your cashflow, profitability, and performance — so you can make confident decisions without digging through spreadsheets. Every report is visual, actionable, and tailored to your business goals.

Your dashboards combine key metrics that matter most to you:
Cashflow & Profit Tracking – See how money moves through your business in real time.
AR/AP Aging & Collection Status – Identify outstanding invoices or upcoming bills before they disrupt cashflow.
Margins & KPIs – Monitor gross margin, expense ratios, and revenue trends to spot opportunities or risks early.
Budget vs. Actuals – Compare forecasts to results and adjust strategy with confidence.
Department or Project Views – Break down performance by team, client, or initiative.

Every dashboard is built using trusted, integrative tools — from Excel and Google Data Studio to QuickBooks and SuiteDash — ensuring accuracy and seamless updates from your accounting system.

This approach gives your leadership team:
Clarity: Know exactly where your business stands — daily.
Focus: Highlight the KPIs that actually drive growth.
Agility: React quickly to changes in sales, costs, or cashflow.
Confidence: Base every decision on clean, current data.

The Result:
No more guesswork — just clear, visual insights that transform your numbers into strategy.`,
    },
    {
      title: "E-Commerce Accounting",
      description: `Running an online store means juggling payments, fees, refunds, and platform integrations — we simplify it all. Our e-commerce accounting process ensures your sales, inventory, and expenses reconcile perfectly across Shopify, Amazon, and payment gateways, giving you accurate data you can actually use.

We handle the complexity behind every transaction so you can focus on growth:
Platform Integration – Connect Shopify, Amazon, Etsy, or WooCommerce to your accounting system using A2X, Synder, or Bookkeep.
Sales & Fees Reconciliation – Match deposits to platform reports, net of transaction fees, refunds, and chargebacks.
Inventory & COGS Management – Track stock, landed costs, and fulfillment expenses accurately across channels.
Sales Tax Compliance – Manage GST/HST, PST/QST, and cross-province or cross-border tax obligations.
Payment Gateways – Reconcile Stripe, PayPal, and other processors with real-time automation.

We build workflows that keep your online operations effortless:
Automated syncing between sales platforms and accounting software (QuickBooks or Xero).
Multi-channel visibility — track what’s selling, where, and how profitably.
Accurate, CRA-ready reporting for seamless tax filings and year-end preparation.

The Result:
Clean, connected e-commerce books — so every sale, refund, and shipment tells a clear financial story that drives smarter decisions and growth.`,
    },
    {
      title: "Non-Profit & Charity Expertise",
      description: `Purpose-driven accounting that supports your mission.

We help charities and non-profits stay compliant, transparent, and financially strong — so you can focus on impact, not paperwork. From donation receipting to fund accounting and T3010 filings, every process is designed to meet CRA standards while empowering your board with clarity and confidence.

We specialize in the financial systems that keep non-profits and charities running smoothly:
Fund Accounting – Track restricted, unrestricted, and endowment funds with complete transparency.
Donation Receipting & CRA Compliance – Issue receipts, maintain donor records, and meet all T3010 annual filing requirements.
Grant & Program Tracking – Monitor how funds are spent and report easily to funders.
Board Reporting & Governance – Prepare clean, presentation-ready financials for board meetings and audits.
Budgeting & Forecasting – Plan programs and campaigns with financial foresight, not guesswork.

Our approach brings structure and support to your organization:
Transparency: Maintain clear audit trails for every donation and disbursement.
Accountability: Ensure every dollar aligns with your charitable objectives.
Peace of Mind: Stay compliant with CRA charity regulations — year after year.
Empowerment: Provide your board and donors with the insights they need to make confident decisions.

The Result:
Financial systems that honor your mission — balancing compliance with clarity, and turning stewardship into sustainable impact.`,
    },
    {
      title: "Year-End Ready, Every Month",
      description: `No more scrambling at year-end — your books stay clean, compliant, and ready all year long.

We close each month with the same precision accountants expect at year-end, so tax season becomes just another month — not a crisis. Every entry, reconciliation, and adjustment is reviewed systematically, building a complete audit trail and CRA-ready documentation as you go.

Our monthly process ensures your financials are always accurate, organized, and ready for your accountant, auditor, or the CRA:
Trial Balance & Account Review – Detect and correct issues early before they roll into year-end.
Accruals, Deferrals & Adjustments – Record prepaids, amortizations, and accruals consistently for accurate financials.
Fixed Assets & Depreciation – Maintain detailed schedules that tie perfectly to your accountant’s year-end files.
CRA-Ready Documentation – Keep support files, receipts, and workpapers easily accessible for audits or reviews.
Collaboration with Your Accountant – Provide a complete PBC (“Prepared by Client”) package for seamless year-end handoff.

By maintaining a year-end mindset throughout the year, we help you:
Avoid surprises — spot discrepancies early and fix them monthly.
Save time and money — minimize year-end adjustments and accountant rework.
Stay audit-ready — organized files and reconciliations mean less stress during reviews.
Gain clarity — accurate monthly reports make strategic planning easier.

The Result:
A smooth, stress-free year-end every year — because your books were already ready.`,
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Set Up & Organize",
      text: "Connect your accounts, software, and records.",
    },
    {
      number: "2",
      title: "Reconcile & Review",
      text: "Ensure accuracy through monthly reconciliations.",
    },
    {
      number: "3",
      title: "Report & Advise",
      text: "Deliver clear statements and data-driven guidance.",
    },
  ];

  const resourcesData = [
    {
      img: "/Web Assets/NEW/Resources/360_F_330941253_b3Dor4GncjCMVPvw8QM4CsyUymtgvvMM.jpg",
      title: "Keeping records",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/Clearline-CPA-How-to-Sign-Up-for-CRA-My-Business-Account-scaled.jpg",
      title: "Record Retention & Destruction Rules",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records/where-keep-your-records-long-request-permission-destroy-them-early.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-1480239160-612x612.jpg",
      title: "Bookkeeping Basics for Small Businesses",
      link: "https://www.nerdwallet.com/article/small-business/small-business-bookkeeping?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-185066026-612x612.jpg",
      title: "How Bookkeeping Supports Business Growth",
      link: "https://www.forbes.com/sites/melissahouston/2023/11/25/small-business-bookkeeping-and-how-it-supports-your-business-success/?utm_source=chatgpt.com",
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
        title="Clean Books. Clear Decisions. Confident Growth."
        subtitle="Stay organized, stay complaint. Let us handle your books so you can focus on growth"
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
      <WhyChooseUs
        image={FactData.image}
        title={FactData.title}
        paragraphs={FactData.paragraphs}
        reverse={true}
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
        heading="Take Control of Your Books. Take Control of Your Business."
        subheading="Let’s Build Your Books Together"
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
