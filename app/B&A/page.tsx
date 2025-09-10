import React from "react";
import { CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MapleLeafLogo from '../components/MapleLeafLogo';

const BookkeepingPage: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Initial Setup & Clean-Up",
      text: "We organize your records and get your bookkeeping system running smoothly."
    },
    {
      number: "2",
      title: "Ongoing Bookkeeping",
      text: "We manage your books with reconciliations, expense categorization, and reports."
    },
    {
      number: "3",
      title: "Month-End or Year-End Review",
      text: "You receive accurate financial statements and insights for smarter decisions."
    }
  ];

  const bookkeepingServices = [
    "Daily/Monthly Transaction Recording",
    "Bank & Credit Card Reconciliations",
    "Expense Categorization",
    "Invoicing & Accounts Payable"
  ];

  const accountingServices = [
    "Income Statement & Balance Sheets",
    "Year-End Financial Reports",
    "Tax-Ready Financials",
    "Budgeting & Forecasting"
  ];

  // FAQs as a hashmap (question -> answer)
  const faqs: Record<string, string> = {
    "What's the difference between bookkeeping and accounting?":
      "Bookkeeping involves recording daily financial transactions, while accounting uses those records to generate reports, analyze performance, and guide decisions.",
    "Can you work with my existing accounting software?":
      "Yes — we work with platforms like QuickBooks, Xero, Wave, and others. If needed, we can also help you switch or set up a better system.",
    "How often do you provide reports?":
      "We typically offer monthly reporting, but we can adjust the frequency (weekly, quarterly, etc.) based on your business needs.",
    "What if my books are a mess or behind?":
      "No problem. We specialize in cleanup services and can get your books back in order—no matter how disorganized they may be."
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <Header />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-24 bg-blue-50 text-center relative overflow-hidden">
        <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
          Bookkeeping & Accounting <br /> That Keeps You in Control
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          Stay organized, stay compliant. Let us handle your books so you can focus on growth.
        </p>
       <a href="/ContactUs"><button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 inline-block">Start Bookkeeping
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
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Bookkeeping Services</h3>
            <ul className="space-y-3 text-gray-700">
              {bookkeepingServices.map((service, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 w-5 h-5" /> {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Accounting Services</h3>
            <ul className="space-y-3 text-gray-700">
              {accountingServices.map((service, i) => (
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
            At AALIConsulting, we believe clean books lead to smart decisions. Our bookkeeping
            and accounting services go beyond data entry—we deliver accurate, up-to-date
            financial records that keep you compliant and in control. Whether you’re a
            freelancer, startup, or small business, we tailor our services to your needs,
            ensuring clarity in your cash flow, financial statements, and year-end reporting.
            With us, you gain a reliable financial partner who helps you build a solid foundation for growth.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-10 py-24 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {Object.entries(faqs).map(([question, answer], i) => (
            <details key={i} className="bg-white shadow rounded-lg p-4">
              <summary className="cursor-pointer font-medium">{question}</summary>
              <p className="mt-2 text-gray-600">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BookkeepingPage;
