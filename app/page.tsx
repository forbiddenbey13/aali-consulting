"use client";
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import { useEffect, useState } from 'react';

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

  const services = [
    {
      title: "Tax Services (Personal & Corporate)",
      text: "Stress-free, CRA-ready tax done right—whether it’s your first T1 or a complex T2 with cross-border twists. We handle proactive planning, RRSP/TFSA, dividends, installments, plain-English guidance, and audit-readiness.",
      img1: "/Web Assets/NEW/Personal & Corporate Tax/istockphoto-1485471985-612x612.jpg",
      img2: "/Web Assets/Images/NEW/Homepage/1. Personal & Corporate Tax/istockphoto-1685996049-612x612.jpg",
    },
    {
      title: "Accounting & Bookkeeping",
      text: "Know your numbers at a glance. We deliver on-schedule reconciliations (banks, AR/AP, GST/HST), payroll, slips, Shopify/Amazon mapping, and NFP fund accounting—CRA-ready and decision-ready.",
      img1: "/Web Assets/Images/NEW/Homepage/2. Accounting & Bookkeeping/premium_photo-1679496829715-364b4a17e087.jpeg",
    },
    {
      title: "Strategic Financial Planning",
      text: "From student basics to retirement and legacy, we help you plan tax-smart saving and investing—TFSA/RRSP, RESP, CPP/OAS timing, and debt strategy—so every decision compounds toward your goals.",
      img1: "/Web Assets/Images/NEW/Homepage/3. Strategic Financial Planning/istockphoto-1313070791-612x612.jpg",
    },
    {
      title: "Systems & Technology Implementation",
      text: "We integrate QuickBooks, Xero, FreshBooks, POS, ERP (NetSuite, Sage, Intacct), and automate reporting with APIs, Dropbox, Tableau—training your team for long-term success.",
      img1: "/Web Assets/Images/NEW/Homepage/4. Systems Implementation/11.jpg.webp",
    },
    {
      title: "CFO Advisory & Governance",
      text: "We install monthly close discipline, FP&A, forecasting, board packs, multi-entity consolidation, and Canada–US tax governance—so leadership decides fast and sleeps well.",
      img1: "/Web Assets/Images/NEW/Homepage/5. CFO Advisory & Governance/CFO Advisory.jpeg",
    },
    {
      title: "Disability & Life Planning",
      text: "Compassionate help for DTC/COSP approvals, job loss, separation, disability, and family loss. We handle forms, RDSPs, CPP survivor benefits, and probate while you focus on stability.",
      img1: "/Web Assets/Images/NEW/Homepage/6. Specialized Programs/job loss.jpeg",
    },
  ];

  const resources = [
    {
      title: "Stay Informed: 2025 Tax Filing Updates from the CRA",
      img: "/Web Assets/NEW/Resources/360_F_330941253_b3Dor4GncjCMVPvw8QM4CsyUymtgvvMM.jpg",
      link: "https://www.canada.ca/en/revenue-agency/news/newsroom/tax-tips/tax-tips-2025/what-you-need-to-know-for-2025-tax-filing-season.html",
    },
    {
      title: "Financial Tools & Calculator",
      img: "/Web Assets/NEW/Resources/Clearline-CPA-How-to-Sign-Up-for-CRA-My-Business-Account-scaled.jpg",
      link: "https://www.canada.ca/en/services/finance/tools.html",
    },
    {
      title: "CRA Important Tax Dates – Individuals",
      img: "/Web Assets/NEW/Resources/istockphoto-1480239160-612x612.jpg",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals.html",
    },
    {
      title: "Checklist for Small Businesses & Self-Employed",
      img: "/Web Assets/NEW/Resources/istockphoto-185066026-612x612.jpg",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/small-businesses-self-employed-income/checklist-small-businesses.html",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-10 py-24 overflow-hidden" style={{ minHeight: 400 }}>
        {heroImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              slide === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-blue-900/40" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-extrabold !text-white drop-shadow-xl">
            All Things Tax, Finance & Business Simplified
          </h1>
          <p className="mt-6 text-lg !text-white drop-shadow-xl">
            Helping individuals and businesses thrive with trusted financial guidance.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/ContactUs" className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">Book Now</a>
            <a href="/AboutUs" className="bg-white/80 border border-gray-300 text-gray-800 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">Learn More</a>
          </div>
        </div>
      </section>

      {/* What We Do */}
      {/* What We Do Section */}
<section id="what-we-do" className="px-6 md:px-10 py-24 bg-white">
  <h2 className="text-3xl font-bold mb-14 text-center text-gray-900">What We Do</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

    {/* Card 1 */}
    <div className="relative bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-xl p-8 flex flex-col justify-between transition">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Tax Services (Personal & Corporate)</h3>
      <p className="text-gray-600 text-sm mb-8">
        Stress-free, CRA-ready tax: from first T1 to complex corporate and cross-border strategies. Proactive planning ensures accuracy, savings, and zero surprises.
      </p>
      <a href="/P&C" className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-5 py-2 rounded-full transition">
        Learn more
      </a>
    </div>

    {/* Card 2 */}
    <div className="relative bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-xl p-8 flex flex-col justify-between transition">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Accounting & Bookkeeping</h3>
      <p className="text-gray-600 text-sm mb-8">
        Stress-free, CRA-ready tax: from first T1 to complex corporate and cross-border strategies. Proactive planning ensures accuracy, savings, and zero surprises.
      </p>
      <a href="/Bookkeeping&Accounting" className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-5 py-2 rounded-full transition">
        Learn more
      </a>
    </div>

    {/* Card 3 */}
    <div className="relative bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-xl p-8 flex flex-col justify-between transition">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Strategic Financial Planning</h3>
      <p className="text-gray-600 text-sm mb-8">
        Stage-of-life financial planning that optimizes saving, taxes, benefits, debt, housing, investing, and retirement timing—turning decisions into confident, compounding progress.
      </p>
      <a href="/SFP" className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-5 py-2 rounded-full transition">
        Learn more
      </a>
    </div>

    {/* Card 4 */}
    <div className="relative bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-xl p-8 flex flex-col justify-between transition">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Technology Solutions</h3>
      <p className="text-gray-600 text-sm mb-8">
        Turn chaos into a connected back office with the right tools, clean integrations, automation and training—so systems talk, teams move faster, decisions improve.
      </p>
      <a href="/Systems&TechnologyImplementation" className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-5 py-2 rounded-full transition">
        Learn more
      </a>
    </div>

    {/* Card 5 */}
    <div className="relative bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-xl p-8 flex flex-col justify-between transition">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">CFO Advisory & Governance</h3>
      <p className="text-gray-600 text-sm mb-8">
        Clean, board-ready finance—on-time closes, clear forecasts, owner structure and succession, multi-entity reporting, NFP support, and Canada-US setups—for safer, faster decisions.
      </p>
      <a href="/CFOAdvisory&Governance" className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-5 py-2 rounded-full transition">
        Learn more
      </a>
    </div>

    {/* Card 6 (Special) */}
   <div className="relative bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-xl p-8 flex flex-col justify-between transition">
  {/* Ribbon */}
  <div className="special-ribbon">
    <span>★ SPECIAL ★</span>
  </div>

  <h3 className="text-lg font-semibold mb-4 text-gray-900">
    Disability & Life Planning
  </h3>
  <p className="text-gray-600 text-sm mb-8">
    Compassionate, simple help for DTC/COSP, disability, accidents, job loss,
    separation, and bereavement—benefits, paperwork, and tax-smart steps handled.
  </p>
  <a
    href="/Disability&LifePlanning"
    className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-5 py-2 rounded-full transition"
  >
    Learn more
  </a>
</div>


  </div>
</section>

      {/* Who We Serve */}
      <section className="bg-white px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Serve</h2>
            <p className="text-gray-700">From newcomers and families to business owners and global enterprises, our services are tailored to your unique needs.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-3 gap-6">
            {[
              "Professionals & Contractors",
              "SMEs",
              "Systems & Technology",
              "Newcomers to Canada",
              "Students & Young Professionals",
              "Faith-Based & NFP",
              "Cross-Border Clients",
              "Seniors & Retirees",
              "Families & Disabilities",
            ].map((group, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-4 text-center text-sm font-medium">
                {group}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {services.map((s, i) => {
        // Custom layouts for the first two sections
        if (s.title === "Accounting & Bookkeeping") {
          return (
            <section
              key={i}
              className="flex flex-col md:flex-row bg-white items-center justify-center gap-10 px-6 md:px-10 py-20 transition"
            >
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={s.img1}
                  alt={s.title}
                  className="rounded-xl shadow-md w-[380px] h-[380px] object-cover"
                  style={{ minWidth: 280, minHeight: 280, maxWidth: 420, maxHeight: 420 }}
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center items-start">
                <h3 className="text-4xl font-semibold text-gray-900 mb-4">{s.title}</h3>
                <p className="text-gray-700 text-lg mb-8">{s.text}</p>
                <a href="#" className="btn-primary">Learn more</a>
              </div>
            </section>
          );
        }
        if (s.title === "Tax Services (Personal & Corporate)" && s.img2) {
          return (
            <section
              key={i}
              className="flex flex-col md:flex-row bg-gray-50 items-center justify-center gap-10 px-6 md:px-10 py-20 transition"
            >
              <div className="md:w-1/2 flex flex-col justify-center items-start">
                <h3 className="text-4xl font-semibold text-gray-900 mb-4">{s.title}</h3>
                <p className="text-gray-700 text-lg mb-8">{s.text}</p>
                <a href="#" className="btn-primary">Learn more</a>
              </div>
              <div className="md:w-1/2 flex flex-col gap-6 justify-center items-center">
                <img
                  src={s.img1}
                  alt={s.title + ' 1'}
                  className="rounded-xl shadow-md w-[380px] h-[180px] object-cover"
                  style={{ minWidth: 280, minHeight: 140, maxWidth: 420, maxHeight: 220 }}
                />
                <img
                  src={s.img2}
                  alt={s.title + ' 2'}
                  className="rounded-xl shadow-md w-[380px] h-[180px] object-cover"
                  style={{ minWidth: 280, minHeight: 140, maxWidth: 420, maxHeight: 220 }}
                />
              </div>
            </section>
          );
        }
        // Default layout for other services
        return (
          <section
            key={i}
            className={`flex flex-col md:flex-row ${
              i % 2 ? "md:flex-row-reverse bg-white" : "bg-gray-50"
            } items-center gap-10 px-6 md:px-10 py-20 transition`}
          >
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">{s.title}</h3>
              <p className="text-gray-700">{s.text}</p>
              <a href="#" className="btn-primary">Learn More</a>
            </div>
            <div className="md:w-1/2 flex flex-col gap-4">
              <img
                src={s.img1}
                alt={s.title}
                className="rounded-xl shadow-md max-w-[350px] max-h-[220px] w-full h-auto object-cover mx-auto"
              />
            </div>
          </section>
        );
      })}

      {/* Resources */}
<section className="px-6 md:px-10 py-24 bg-white">
  <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Resources</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {resources.map((r, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl flex flex-col"
      >
        {/* Image */}
        <img
          src={r.img}
          alt={r.title}
          className="w-full h-44 object-cover"
        />

        {/* Content */}
        <div className="p-6 flex flex-col items-center text-center flex-grow">
          <h4 className="font-semibold text-gray-900 text-base mb-4">
            {r.title}
          </h4>
          <a
            href={r.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-2 rounded-full shadow-sm transition"
          >
            Learn More
          </a>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* CTA */}
      <section className="text-center py-20 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">Clarity. Confidence. Growth.</h2>
        <p className="text-gray-600 mb-8">Your financial future starts with one smart decision.</p>
        <a href="/ContactUs" className="btn-primary">Book Now</a>
      </section>

      <Footer />
    </div>
  );
};


export default HomePage;