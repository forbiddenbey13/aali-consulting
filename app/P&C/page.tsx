import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'
import { CheckCircle } from "lucide-react";
import MapleLeafLogo from "../components/MapleLeafLogo";

const TaxPage: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Book a Free Consultation",
      text: "The interaction of multiple elements in a system to produce an effect greater than the sum of their individual effects."
    },
    {
      number: "2",
      title: "We Handle the Paperwork",
      text: "A fundamental change in approach or underlying assumptions that leads to a new way of thinking or operating."
    },
    {
      number: "3",
      title: "You Get Peace of Mind",
      text: "A new technology, product, or service that emerges into the existing market and creates a new one."
    }
  ];

  const personalServices = [
    "T1 General Filing",
    "Tax Planning & Deductions Optimization",
    "RRSP, TF6A, and Investment Reporting",
    "CRA Audit Report"
  ];

  const corporateServices = [
    "T2 Corporate Return Filing",
    "Tax Planning & Incorporation Strategy",
    "GST/HST, WSIB, Payroll Tax Filing",
    "Dividends, Salaries, and Shareholder Tax"
  ];

   const faqs: Record<string, string> = {
    "What documents do I need to file my personal taxes?":
      "You’ll need T4 slips, receipts for deductions (like medical expenses or tuition), investment income slips, and any RRSP contribution records. We’ll provide a full checklist during onboarding.",
    "Do you file both federal and provincial taxes?":
      "Yes, we can help with both back taxes and CRA audits. Whether you’ve missed past tax filings or are facing a review or audit by the CRA, we’ll assess your situation, organize your documents, and communicate with the CRA on your behalf. Our goal is to minimize penalties, bring your filings up to date, and ensure full compliance — giving you peace of mind and a clear path forward.",
    "Can you help with back taxes or CRA audits?":
      "Yes, we can help with filing for the Disability Tax Credit (DTC). The DTC is a non-refundable tax credit offered by the CRA to support individuals with severe and prolonged impairments, or their caregivers. To apply, you must complete Form T2201, which includes a section for a qualified medical practitioner to certify your condition. Once approved by the CRA, the credit can reduce your taxes and may also be transferred to a supporting family member. We’ll guide you through the process to ensure everything is completed accurately.",
    "What’s the deadline for filing corporate taxes?":
      "Corporate taxes are due six months after your fiscal year-end. We’ll make sure you meet all CRA deadlines and avoid late filing penalties."
  };


  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <Header />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-24 bg-blue-50 text-center relative overflow-hidden">
        <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
          Personal & Corporate Tax <br />Solutions, Tailored to You
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          We help individuals and businesses reduce tax liabilities while staying compliant with Canadian tax laws.
        </p>
        <a href="/ContactUs"><button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 inline-block">
          Get Started
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
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Personal Tax Services</h3>
            <ul className="space-y-3 text-gray-700">
              {personalServices.map((service, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 w-5 h-5" /> {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Corporate Tax Services</h3>
            <ul className="space-y-3 text-gray-700">
              {corporateServices.map((service, i) => (
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
            AALIConsulting takes the stress and guesswork out of tax season. Whether you're an individual,
            sole proprietor, or incorporated business, we tailor our tax services to your specific situation.
            Our team ensures every credit and deduction is properly claimed, your documents are accurate and
            audit-ready, and all filings meet CRA compliance standards. We don’t just file taxes—we provide
            peace of mind and long-term tax strategies that help you save more year after year.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-10 py-24 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {/* FAQs */}
          {Object.entries(faqs).map(([question, answer], i) => (
            <details key={i} className="bg-white shadow rounded-lg p-4">
              <summary className="cursor-pointer font-medium">{question}</summary>
              <p className="mt-2 text-gray-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>



      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TaxPage;
