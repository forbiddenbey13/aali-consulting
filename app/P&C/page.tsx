import Head from "next/head";
import React from "react";
import Header from "../components/Header";

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

  const faqs = [
    "What documents do I need to file my personal taxes?",
    "Do you file both federal and provincial taxes?",
    "Can you help with back taxes or CRA audits?",
    "What’s the deadline for filing corporate taxes?"
  ];

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
        <button className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-xl shadow hover:bg-blue-800">
          Get Started
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
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Personal Tax Services</h3>
            <ul className="space-y-2 text-gray-700">
              {personalServices.map((service, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-2">✔</span>{service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Corporate Tax Services</h3>
            <ul className="space-y-2 text-gray-700">
              {corporateServices.map((service, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-2">✔</span>{service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="grid md:grid-cols-2 gap-12 items-center px-10 py-24 bg-white">
        <div>
          <img
            src="/tax-consulting.jpg"
            alt="Tax Consulting"
            className="rounded-lg shadow-lg"
          />
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
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white shadow rounded-lg p-4">
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

export default TaxPage;
