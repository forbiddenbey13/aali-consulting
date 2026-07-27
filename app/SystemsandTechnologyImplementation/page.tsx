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
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const offerCards = [
    {
      title: "Accounting & Payroll Software Setup",
      description:
        "QuickBooks, Xero, Wave, FreshBooks, and payroll tools—configured to fit your business.",
      link: "#explore-services",
    },
    {
      title: "E-Commerce & POS Integrations",
      description:
        "Seamlessly connect Shopify, Amazon, inventory, and point-of-sale systems for real-time financial clarity.",
      link: "#explore-services",
    },
    {
      title: "ERP & Advanced Systems",
      description:
        "Set up or integrate with NetSuite, Sage Intacct, or Microsoft Dynamics 365 Business Central.",
      link: "#explore-services",
    },
    {
      title: "Custom Implementation Process",
      description:
        "Needs assessment → Full setup & customization → Training and ongoing support.",
      link: "#explore-services",
    },
    {
      title: "Automation & Data Workflows",
      description:
        "Dropbox, Tableau dashboards, API connectors, and automated reporting that save hours of manual work.",
      link: "#explore-services",
    },
    {
      title: "Secure Migration & Scalability",
      description:
        "Data migration, system clean-up, and scalable frameworks so your tools grow with your business.",
      link: "#explore-services",
    },
  ];
  const faqs = [
    {
      question: "What exactly does “Systems & Technology Implementation” mean?",
      answer: `It means taking your accounting and financial processes — like invoicing, payroll, reporting, and approvals — and digitizing them through modern, integrated software.
We don’t just recommend tools — we analyze your workflow, choose the right platforms (QuickBooks, Xero, Plooto, Dext, or custom apps), and build a seamless system that automates repetitive work and eliminates double data entry.

Our goal is to give you a system that works for you — efficient, connected, and secure from day one.
`,
    },
    {
      question: "Which software and tools do you implement or integrate?",
      answer: `
We specialize in the top-tier business platforms that fit small to mid-sized organizations:
Accounting & Payroll: QuickBooks Online, Xero, Wagepoint, Dext, Plooto
E-Commerce & POS: Shopify, Square, Amazon, Lightspeed
ERP & Reporting: NetSuite, Sage Intacct, Microsoft Dynamics 365
Automation Tools: Zapier, Power Automate, Make (Integromat)


We match the tools to your needs — whether you’re a single-owner business, non-profit, or enterprise running multiple entities.`,
    },
    {
      question: "How long does a full system implementation take?",
      answer: `
A typical implementation takes 4–8 weeks, depending on system complexity and data volume.
The process includes:
Discovery & Audit – Understanding your existing workflow and bottlenecks.
Setup & Integration – Installing, migrating, and testing tools and data connections.
Training & Support – Coaching your team and documenting key procedures.


We emphasize minimal downtime, so your operations continue smoothly while your systems transform in the background.
`,
    },
    {
      question: "Do you offer ongoing support after implementation?",
      answer: `
Yes — every implementation includes post-launch support and training to ensure your team can confidently use your new system.
We offer:
Dedicated check-ins and live training during the first 90 days
Optional monthly system audits to catch errors early
Ongoing software updates and integration tuning


Our approach ensures your systems don’t just get implemented — they evolve with your business.`,
    },
  ];

  const heroImages = [
    // '/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png',
    // '/Web Assets/NEW/Hero Section/Business-Culture-in-Canada-Evolved-Metrics-1-1024x565.jpg',
    // '/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp',
    "/Web Assets/Images/NEW/Systems & Technology Implementation/913779463-1024x683.jpg",
  ];
  const whyChooseData = {
    image:
      "/Web Assets/Images/NEW/Systems & Technology Implementation/what-is-system-integration.jpeg.webp",
    title: "Implementation That Fits Your Business, Not the Other Way Around",
    paragraphs: [
      `Technology should simplify your operations — not force you to adapt to it. At AALI Consulting, every system we implement begins with understanding your workflow, goals, and team structure. Whether it’s setting up accounting platforms like QuickBooks or Xero, integrating e-commerce and ERP systems, or automating data flow between departments, we design solutions that mirror how your business actually runs. The result is an ecosystem that’s intuitive, reliable, and built to evolve as you grow.`,
      `

      We don’t just install software — we engineer confidence. Our process includes needs assessment, tailored setup, and hands-on training, ensuring every user knows exactly how to manage their tools from day one. With secure automation, smart dashboards, and seamless integrations, your business gains more than efficiency — it gains visibility, control, and the freedom to focus on what matters most.
      `,
    ],
  };
  const FactData = {
    image: "/Assets/financial-planning.jpg",
    title: "Stay on Top of Your Numbers — Without the Stress",
    paragraphs: [
      `Managing your finances shouldn’t feel overwhelming. With automated reconciliations, payroll scheduling, and visual dashboards, we handle the numbers so you can focus on building your business. From compliance to cashflow, every detail stays organized, accurate, and up to date — giving you peace of mind and the confidence to plan ahead.`,
    ],
  };

  const servicesList = [
    {
      title: "Accounting & Payroll Software Setup",
      description: `Set up your accounting and payroll systems the right way — accurate, secure, and ready to scale with your business.

The right software foundation saves hours of confusion and countless errors later. Whether you’re setting up QuickBooks, Xero, or an integrated payroll tool, we handle the full configuration so your books and pay runs are clean, automated, and compliant from day one.


Our setup process ensures every system is connected, consistent, and ready to perform:
Chart of Accounts Design – We tailor your chart of accounts to your industry, ensuring clarity across revenue, expenses, and departments.
Payroll Configuration – Set up pay schedules, deductions, and ROE/CRA remittance structures for accuracy and compliance.
User Roles & Permissions – Securely manage access between owners, accountants, and staff, protecting sensitive data.
App Integration – Connect expense management, POS, time-tracking, or inventory apps into one central ecosystem.
Data Migration & Cleanup – Transfer historical data safely from spreadsheets or legacy systems into your new platform.



We make sure your software isn’t just functional — it’s optimized for everyday use:
Step-by-step onboarding so your team understands how to use the tools effectively.
Automation-ready configuration for future workflows (invoicing, reminders, reconciliation).
Monthly review checkpoints to catch errors early and reinforce good practices.
Security setup including MFA, audit trails, and secure backups.



The Result:
A clean, connected, and compliant accounting ecosystem — built once, built right, and ready to support growth, payroll accuracy, and year-end peace of mind.`,
    },
    {
      title: "E-Commerce & POS Integrations",
      description: `Unify your online store, sales data, and accounting in one seamless flow — so every transaction tells the full financial story.

Running an online business or retail operation often means juggling multiple systems: Shopify, Amazon, Stripe, Square, or in-store POS. We simplify the chaos by connecting your sales, inventory, and accounting platforms into a single, automated ecosystem — giving you real-time visibility and accurate books without manual data entry.


Our integration process turns disconnected tools into one coordinated system:
Shopify, Amazon, and Etsy Connections – Automatically sync orders, refunds, fees, and payouts directly into your accounting platform (QuickBooks, Xero, etc.).
POS Systems Integration – Link in-store tools like Square, Lightspeed, or Clover for unified reporting and sales reconciliation.
Inventory & SKU Mapping – Ensure inventory, cost of goods, and product categories match across systems for error-free margins.
Payment Processor Syncs – Reconcile Stripe, PayPal, and card settlements seamlessly with your bank feeds.
Sales Tax Automation – Apply correct GST/HST/PST/QST rates by province or state — and push accurate filings automatically.



We also optimize every workflow for speed, security, and insight:
Automated reconciliations that eliminate manual imports and spreadsheet errors.
Real-time dashboards showing sales, fees, and profitability by channel.
Training for your team on how to manage synced data and reports.
Ongoing monitoring to ensure integrations stay healthy as your systems evolve.



The Result:
A connected e-commerce engine that handles data automatically — keeping your books accurate, your margins clear, and your operations running effortlessly from checkout to reconciliation.



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
      title: "ERP & Advanced Systems",
      description: `Bring structure, visibility, and scalability to your growing operations — with ERP systems that connect every part of your business.

As your company expands, spreadsheets and siloed tools stop working. That’s where ERP (Enterprise Resource Planning) systems come in. We help you implement and integrate advanced platforms like NetSuite, Sage Intacct, or Microsoft Dynamics 365 Business Central — uniting finance, inventory, sales, and reporting under one reliable system.


Our approach focuses on clarity, control, and customization:
Needs Assessment & System Selection – We evaluate your operations and recommend the right ERP platform based on complexity, growth stage, and integration needs.
Core Financials Setup – Design your chart of accounts, workflows, and approval chains to mirror your real-world business structure.
Inventory, Projects & Billing – Implement modules for inventory tracking, project costing, and recurring billing that scale with your business.
Integrations & Data Migration – Connect your ERP to CRMs, payroll, banking, and e-commerce systems — ensuring smooth data flow and consistency.
Governance & Security – Establish user roles, access controls, and audit-ready documentation to meet compliance requirements.



We don’t just install — we transform how your systems work together:
Real-time reporting across departments for faster decision-making.
Process automation that replaces manual approvals and data re-entry.
Staff training to ensure your team can confidently manage and adapt the ERP.
Performance optimization to fine-tune workflows and eliminate bottlenecks.



The Result:
A single, integrated system that gives leadership a 360° view of the business — improving accuracy, accountability, and agility at every level.`,
    },
    {
      title: "Custom Implementation Process",
      description: `Every business is unique — your systems should be too. We design and implement customized setups that align perfectly with how you actually work.

No two organizations run the same way. That’s why our implementation process begins with understanding your workflows, goals, and pain points — not just the software. From the first consultation to post-launch training, we build a fully tailored system that fits your operations, your people, and your growth strategy.


Our implementation roadmap ensures structure, clarity, and efficiency at every step:
Discovery & Needs Assessment – We analyze your processes, map data flows, and define measurable goals for efficiency and automation.
System Design & Configuration – Configure tools like SuiteDash, QuickBooks, Xero, or ERPs to match your workflows and industry requirements.
Data Migration & Testing – Move your existing data cleanly and safely, verifying accuracy through hands-on testing and validation.
Training & Documentation – Provide step-by-step guides and live training so your team can confidently manage the new system.
Launch & Continuous Support – We don’t disappear after setup — we monitor performance, refine workflows, and support future changes.



We also build in flexibility and scalability from the start:
Modular design that lets you add new features or integrations later.
Cross-department coordination so accounting, sales, and operations flow together seamlessly.
Change management strategies that ensure a smooth transition for your team.
Clear KPIs to measure adoption, efficiency, and ROI.



The Result:
A fully integrated, purpose-built system that feels natural to your team, grows with your business, and reduces friction across every workflow.`,
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
      title: "Secure Migration & Scalability",
      description: `Move your data with confidence — and build systems that grow as your business does.

Switching platforms or modernizing your tech stack can feel risky, especially when your data holds years of history, compliance records, and client trust. Our Secure Migration & Scalability service ensures a smooth transition from legacy systems to modern platforms like SuiteDash, QuickBooks, Xero, or ERP solutions — while preserving data integrity, accuracy, and security every step of the way.


Our migration and scalability framework focuses on control, transparency, and long-term reliability:
System Audit & Planning – Review your current environment, map data sources, and identify dependencies before a single record is moved.
Data Extraction & Cleansing – Standardize and validate records to eliminate duplicates, inconsistencies, and legacy formatting issues.
Secure Transfer Protocols – Use encrypted channels, access controls, and multi-factor authentication to protect sensitive financial and client information.
Validation & Testing – Verify balances, reconciliations, and historical data accuracy through controlled test runs and side-by-side comparisons.
Post-Migration Monitoring – Review system performance, confirm reports align, and ensure your team can access everything seamlessly.



We don’t stop at migration — we future-proof your foundation:
Scalable infrastructure that supports more clients, users, and transactions without breaking performance.
Cloud-first architecture for accessibility, backup, and disaster recovery.
Modular growth options to add automations, analytics, and new tools over time.
Governance standards to keep compliance strong as systems expand.

The Result:
A clean, secure migration that minimizes downtime — and a flexible, scalable system ready for your next stage of growth.


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
    const el = document.getElementById("explore-services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
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
        title="Smarter Systems, Seamless Workflows"
        subtitle="From accounting tools to full-scale ERP and automation, we design, integrate, and support the technology that powers your business."
        buttonText="Get Started"
        buttonLink="/contactus"
      />

      {/* What We Do */}
      {/* What We Do Section */}
      <WhatWeOffer
        heading="What We Offer"
        cards={offerCards}
        onLearnMore={handleLearnMore}
      />
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
        heading="Work Smarter with the Right Systems."
        subheading="Start Building Your Streamlined Workflow Today"
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
