import React from "react";
import { CheckCircle } from "lucide-react";
import Head from "next/head";
import Header from "../components/Header";

const FinancialPlanningPage: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Strategize & Set Goals",
      text: "We meet to define your short- & long-term objectives."
    },
    {
      number: "2",
      title: "Build the Plan",
      text: "We model forecasts, risks, and budget allocations."
    },
    {
      number: "3",
      title: "Monitor & Adjust",
      text: "Monthly or quarterly check-ins to keep you on track."
    }
  ];

  const personalServices = [
    "Personal Budgeting & Forecasting",
    "Retirement & Tax Optimization",
    "Investment Strategy Planning",
    "Debt Repayment Planning"
  ];

  const businessServices = [
    "Cash Flow & Budget Planning",
    "Break-even Analysis",
    "Strategic Growth & Scaling Roadmaps",
    "Scenario Modeling & Performance Reviews"
  ];

  const faqs = [
    "Who is this service for?",
    "What’s included in a financial plan?",
    "How often should I review my plan?",
    "Do I need a high income or big business to benefit?"
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
        <button className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-xl shadow hover:bg-blue-800">
          Book a Planning Session
        </button>
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
      <section className="px-10 py-24 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Personal Financial Services</h3>
            <ul className="space-y-2 text-gray-700">
              {personalServices.map((service, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 w-5 h-5" /> {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Business Financial Services</h3>
            <ul className="space-y-2 text-gray-700">
              {businessServices.map((service, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 w-5 h-5" /> {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-10 py-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-gray-50 shadow rounded-lg p-4">
              <summary className="cursor-pointer font-medium">{faq}</summary>
              <p className="mt-2 text-gray-600">Answer coming soon...</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-10">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Connect with us</h4>
            <p className="mb-4">Follow us on social media or subscribe to our newsletter.</p>
            <div className="flex space-x-4 text-lg">
              <a href="#">Fb</a><a href="#">In</a><a href="#">Tw</a><a href="#">Ln</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">About</h4>
            <ul><li>Team</li><li>Mission</li><li>Careers</li><li>Blog</li></ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul><li>Tax Consulting</li><li>Planning</li><li>Accounting</li><li>Systems</li></ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul><li>Email</li><li>Phone</li><li>Support</li><li>Live Chat</li></ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinancialPlanningPage;
