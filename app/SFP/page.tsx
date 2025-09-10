import React from "react";
import { CheckCircle } from "lucide-react";
// import Head from "next/head"; // (Unused; safe to remove if you like)
import Header from "../components/Header";
import Footer from "../components/Footer";
import MapleLeafLogo from "../components/MapleLeafLogo";

const FinancialPlanningPage: React.FC = () => {
  const steps = [
    { number: "1", title: "Strategize & Set Goals", text: "We meet to define your short- & long-term objectives." },
    { number: "2", title: "Build the Plan", text: "We model forecasts, risks, and budget allocations." },
    { number: "3", title: "Monitor & Adjust", text: "Monthly or quarterly check-ins to keep you on track." }
  ];

  const personalServices = [
    "Personal Budgeting & Forecasting",
    "Retirement & Tax Optimization",
    "Investment Strategy Planning",
    "Debt Repayment Planning",
  ];

  const businessServices = [
    "Cash Flow & Budget Planning",
    "Break-even Analysis",
    "Strategic Growth & Scaling Roadmaps",
    "Scenario Modeling & Performance Reviews",
  ];

  // ✅ FAQs with your provided answers
  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: "Who is this service for?",
      a: (
        <>
          We work with both individuals and businesses. Whether you’re planning retirement,
          managing debt, or budgeting for expansion, we tailor our advice to your needs.
        </>
      ),
    },
    {
      q: "What’s included in a financial plan?",
      a: (
        <>
          Plans may include:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Cash flow projections & budgeting</li>
            <li>Debt reduction strategies</li>
            <li>Tax planning opportunities</li>
            <li>Investment considerations</li>
            <li>Milestone-based goal tracking</li>
          </ul>
        </>
      ),
    },
    {
      q: "How often should I review my plan?",
      a: (
        <>
          We recommend quarterly or semi-annual reviews to adjust for life changes,
          market shifts, or new business developments.
        </>
      ),
    },
    {
      q: "Do I need a high income or big business to benefit?",
      a: (
        <>
          Not at all. Our planning services are accessible to anyone who wants to better
          understand, manage, and grow their finances.
        </>
      ),
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      <Header />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-24 bg-blue-50 text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
          Build a Stronger Future with <br /> Strategic Financial Planning
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          Whether you’re scaling your business or planning personally, we create smart financial strategies that guide success.
        </p>
        <a href="/ContactUs"><button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 inline-block">
          Book a Planning Session
        </button></a>
      </section>

      {/* 3-Step Process */}
      <section className="px-10 py-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our 3-Step Process</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-4xl font-bold text-blue-700 mb-4">{step.number}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-10 py-24 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-2 divide-x divide-gray-300 max-w-6xl mx-auto">
          <div className="px-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Personal Financial Services</h3>
            <ul className="space-y-3 text-gray-700">
              {personalServices.map((service, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 w-5 h-5" /> {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Business Financial Services</h3>
            <ul className="space-y-3 text-gray-700">
              {businessServices.map((service, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 w-5 h-5" /> {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="grid md:grid-cols-2 gap-12 items-center px-10 py-24 bg-blue-50">
        <div className="flex justify-center">
          <MapleLeafLogo />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-gray-700 leading-relaxed">
            At AALIConsulting, we help you see the bigger picture behind your numbers. Our strategic financial planning
            services combine expert insight with real-world data to guide your personal or business goals. Whether you're
            budgeting for a major purchase, planning for retirement, or preparing your business for expansion, we craft
            actionable strategies tailored to your situation. With regular reviews and forecasting tools, we keep your
            financial plans adaptable, measurable, and built for long-term success.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-10 py-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <details key={i} className="bg-gray-50 shadow rounded-lg p-4">
              <summary className="cursor-pointer font-medium">{item.q}</summary>
              <div className="mt-2 text-gray-600">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialPlanningPage;
