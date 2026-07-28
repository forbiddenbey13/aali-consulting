"use client";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";

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
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-16 md:px-10 md:py-24 overflow-hidden"
        style={{ minHeight: 400 }}
      >
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
        <div className="absolute inset-0 bg-blue-900/40 dark:bg-black/60" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold !text-white drop-shadow-xl">
            All Things Tax, Finance & Business Simplified
          </h1>
          <p className="mt-6 text-lg !text-white drop-shadow-xl">
            Helping individuals and businesses thrive with trusted financial
            guidance.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contact-us"
              className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
            >
              Book Now
            </a>
            <a
              href="/about-us"
              className="bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* What We Do */}
      {/* What We Do Section */}
      <section
        id="what-we-do"
        className="px-6 md:px-10 py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <h2 className="text-3xl font-bold mb-14 text-center text-gray-900 dark:text-white">
          What We Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Card 1 */}
          <div className="relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md rounded-xl p-8 flex flex-col justify-between transition">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Tax Services (Personal & Corporate)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              Stress-free, CRA-ready tax: from first T1 to complex corporate and
              cross-border strategies. Proactive planning ensures accuracy,
              savings, and zero surprises.
            </p>
            <a
              href="/tax-service"
              className="inline-block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-medium px-5 py-2 rounded-full transition"
            >
              Learn more
            </a>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md rounded-xl p-8 flex flex-col justify-between transition">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Accounting & Bookkeeping
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              Stress-free, CRA-ready tax: from first T1 to complex corporate and
              cross-border strategies. Proactive planning ensures accuracy,
              savings, and zero surprises.
            </p>
            <a
              href="/bookkeeping-and-accounting"
              className="inline-block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-medium px-5 py-2 rounded-full transition"
            >
              Learn more
            </a>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md rounded-xl p-8 flex flex-col justify-between transition">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Strategic Financial Planning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              Stage-of-life financial planning that optimizes saving, taxes,
              benefits, debt, housing, investing, and retirement timing—turning
              decisions into confident, compounding progress.
            </p>
            <a
              href="/strategic-planning"
              className="inline-block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-medium px-5 py-2 rounded-full transition"
            >
              Learn more
            </a>
          </div>

          {/* Card 4 */}
          <div className="relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md rounded-xl p-8 flex flex-col justify-between transition">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Technology Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              Turn chaos into a connected back office with the right tools,
              clean integrations, automation and training—so systems talk, teams
              move faster, decisions improve.
            </p>
            <a
              href="/systems-and-technology-implementation"
              className="inline-block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-medium px-5 py-2 rounded-full transition"
            >
              Learn more
            </a>
          </div>

          {/* Card 5 */}
          <div className="relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md rounded-xl p-8 flex flex-col justify-between transition">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              CFO Advisory & Governance
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              Clean, board-ready finance—on-time closes, clear forecasts, owner
              structure and succession, multi-entity reporting, NFP support, and
              Canada-US setups—for safer, faster decisions.
            </p>
            <a
              href="/cfo-advisory-and-governance"
              className="inline-block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-medium px-5 py-2 rounded-full transition"
            >
              Learn more
            </a>
          </div>

          {/* Card 6 (Special) */}
          <div className="relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md rounded-xl p-8 flex flex-col justify-between transition overflow-hidden">
            {/* Ribbon */}
            <div className="special-ribbon">
              <span>★ SPECIAL ★</span>
            </div>

            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Disability & Life Planning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              Compassionate, simple help for DTC/COSP, disability, accidents,
              job loss, separation, and bereavement—benefits, paperwork, and
              tax-smart steps handled.
            </p>
            <a
              href="/disability-and-life-planning"
              className="inline-block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-medium px-5 py-2 rounded-full transition"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-white dark:bg-gray-900 px-6 md:px-10 py-16 md:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          {/* Left column: Heading and description, vertically centered */}
          <div className="flex flex-col justify-center h-full md:col-span-1">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Who
              <br />
              We Serve
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xs">
              From newcomers and families to business owners and global
              enterprises, our services are tailored to your unique needs.
            </p>
          </div>
          {/* Right: 3x3 grid of images, some with rotation */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {[
              {
                img: "/Web Assets/Images/NEW/Homepage/Clients We Serve (Homepage)/Professionals & Contractors.png",
                rotate: "-rotate-6",
              },
              {
                img: "/Web Assets/Images/NEW/Homepage/Clients We Serve (Homepage)/SMEs.png",
                rotate: "",
              },
              {
                img: "/Web Assets/Images/NEW/Homepage/Clients We Serve (Homepage)/Systems & Technology.png",
                rotate: "rotate-6",
              },
              {
                img: "/Web Assets/Images/NEW/Homepage/Clients We Serve (Homepage)/Newcomers to Canada.png",
                rotate: "",
              },
              {
                img: "/Web Assets/Images/NEW/Homepage/Clients We Serve (Homepage)/Students & Young Professionals.png",
                rotate: "",
              },
              {
                img: "/Web Assets/Images/NEW/Homepage/Clients We Serve (Homepage)/Faith-Based & NFP.png",
                rotate: "",
              },
              {
                img: "/Web Assets/Images/NEW/Homepage/Clients We Serve (Homepage)/Canada-US Cross-Border.png",
                rotate: "-rotate-6",
              },
              {
                img: "/Web Assets/Images/NEW/Homepage/Clients We Serve (Homepage)/Seniors & Retirees.png",
                rotate: "",
              },
              {
                img: "/Web Assets/Images/NEW/Homepage/Clients We Serve (Homepage)/Families & Disabilites.png",
                rotate: "rotate-6",
              },
            ].map((group, i) => (
              <div
                key={i}
                className={`bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] ${group.rotate}`}
                style={{ overflow: "hidden" }}
              >
                <img
                  src={group.img}
                  alt=""
                  className="object-contain w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px]"
                  draggable={false}
                />
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
              className="flex flex-col md:flex-row bg-white dark:bg-gray-900 items-center justify-center gap-10 px-6 md:px-10 py-12 md:py-20 transition-colors duration-300"
            >
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={s.img1}
                  alt={s.title}
                  className="rounded-xl shadow-md w-[480px] h-[480px] object-cover"
                  style={{
                    minWidth: 340,
                    minHeight: 340,
                    maxWidth: 520,
                    maxHeight: 520,
                  }}
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center items-start">
                <h3 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4">
                  {s.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                  {s.text}
                </p>
                <a href="/bookkeeping-and-accounting" className="btn-primary">
                  Learn more
                </a>
              </div>
            </section>
          );
        }
        if (s.title === "Tax Services (Personal & Corporate)" && s.img2) {
          return (
            <section
              key={i}
              className="flex flex-col md:flex-row bg-white dark:bg-gray-800 items-center justify-center gap-10 px-6 md:px-10 py-12 md:py-20 transition-colors duration-300"
            >
              <div className="md:w-1/2 flex flex-col justify-center items-start">
                <h3 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4">
                  {s.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                  {s.text}
                </p>
                <a href="/tax-service" className="btn-primary">
                  Learn more
                </a>
              </div>
              <div className="md:w-1/2 flex flex-col gap-6 justify-center items-center">
                <img
                  src={s.img1}
                  alt={s.title + " 1"}
                  className="rounded-xl shadow-md w-[480px] h-[240px] object-cover"
                  style={{
                    minWidth: 340,
                    minHeight: 180,
                    maxWidth: 520,
                    maxHeight: 280,
                  }}
                />
                <img
                  src={s.img2}
                  alt={s.title + " 2"}
                  className="rounded-xl shadow-md w-[480px] h-[240px] object-cover"
                  style={{
                    minWidth: 340,
                    minHeight: 180,
                    maxWidth: 520,
                    maxHeight: 280,
                  }}
                />
              </div>
            </section>
          );
        }
        // Default layout for other services
        // Explicitly set href for each service
        if (s.title === "Strategic Financial Planning") {
          return (
            <section
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2
                  ? "md:flex-row-reverse bg-white dark:bg-gray-900"
                  : "bg-white dark:bg-gray-800"
              } items-center gap-10 px-6 md:px-10 py-12 md:py-20 transition-colors duration-300`}
            >
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{s.text}</p>
                <a href="/strategic-planning" className="btn-primary">
                  Learn More
                </a>
              </div>
              <div className="md:w-1/2 flex flex-col gap-4">
                <img
                  src={s.img1}
                  alt={s.title}
                  className="rounded-xl shadow-md w-[560px] h-[320px] object-cover mx-auto"
                  style={{
                    minWidth: 400,
                    minHeight: 220,
                    maxWidth: 640,
                    maxHeight: 360,
                  }}
                />
              </div>
            </section>
          );
        }
        if (s.title === "Systems & Technology Implementation") {
          return (
            <section
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2
                  ? "md:flex-row-reverse bg-white dark:bg-gray-900"
                  : "bg-white dark:bg-gray-800"
              } items-center gap-10 px-6 md:px-10 py-12 md:py-20 transition-colors duration-300`}
            >
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{s.text}</p>
                <a
                  href="/systems-and-technology-implementation"
                  className="btn-primary"
                >
                  Learn More
                </a>
              </div>
              <div className="md:w-1/2 flex flex-col gap-4">
                <img
                  src={s.img1}
                  alt={s.title}
                  className="rounded-xl shadow-md w-[560px] h-[320px] object-cover mx-auto"
                  style={{
                    minWidth: 400,
                    minHeight: 220,
                    maxWidth: 640,
                    maxHeight: 360,
                  }}
                />
              </div>
            </section>
          );
        }
        if (s.title === "CFO Advisory & Governance") {
          return (
            <section
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2
                  ? "md:flex-row-reverse bg-white dark:bg-gray-900"
                  : "bg-white dark:bg-gray-800"
              } items-center gap-10 px-6 md:px-10 py-12 md:py-20 transition-colors duration-300`}
            >
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{s.text}</p>
                <a href="/cfo-advisory-and-governance" className="btn-primary">
                  Learn More
                </a>
              </div>
              <div className="md:w-1/2 flex flex-col gap-4">
                <img
                  src={s.img1}
                  alt={s.title}
                  className="rounded-xl shadow-md w-[560px] h-[320px] object-cover mx-auto"
                  style={{
                    minWidth: 400,
                    minHeight: 220,
                    maxWidth: 640,
                    maxHeight: 360,
                  }}
                />
              </div>
            </section>
          );
        }
        if (s.title === "Disability & Life Planning") {
          return (
            <section
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2
                  ? "md:flex-row-reverse bg-white dark:bg-gray-900"
                  : "bg-white dark:bg-gray-800"
              } items-center gap-10 px-6 md:px-10 py-12 md:py-20 transition-colors duration-300`}
            >
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{s.text}</p>
                <a href="/disability-and-life-planning" className="btn-primary">
                  Learn More
                </a>
              </div>
              <div className="md:w-1/2 flex flex-col gap-4">
                <img
                  src={s.img1}
                  alt={s.title}
                  className="rounded-xl shadow-md w-[560px] h-[320px] object-cover mx-auto"
                  style={{
                    minWidth: 400,
                    minHeight: 220,
                    maxWidth: 640,
                    maxHeight: 360,
                  }}
                />
              </div>
            </section>
          );
        }
        // fallback (should not be hit)
        return null;
      })}

      {/* Resources */}
      <section className="px-6 md:px-10 py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Resources
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {resources.map((r, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl flex flex-col"
            >
              {/* Image */}
              <img
                src={r.img}
                alt={r.title}
                className="w-full h-44 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <h4 className="font-semibold text-gray-900 dark:text-white text-base mb-4">
                  {r.title}
                </h4>
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium px-6 py-2 rounded-full shadow-sm transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          Clarity. Confidence. Growth.
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Your financial future starts with one smart decision.
        </p>
        <a href="/contact-us" className="btn-primary">
          Book Now
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
