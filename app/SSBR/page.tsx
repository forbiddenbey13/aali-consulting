import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

// The main BookkeepingPage component.
// It displays a landing page for bookkeeping and accounting services.
const BookkeepingPage: React.FC = () => {

  // Data for the 3-step process section.
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

  // Data for the bookkeeping services list.
  const bookkeepingServices = [
    "Daily/Monthly Transaction Recording",
    "Bank & Credit Card Reconciliations",
    "Expense Categorization",
    "Invoicing & Accounts Payable"
  ];

  // Data for the accounting services list.
  const accountingServices = [
    "Income Statement & Balance Sheets",
    "Year-End Financial Reports",
    "Tax-Ready Financials",
    "Budgeting & Forecasting"
  ];

  // Data for the FAQs section.
  const faqs = [
    "What's the difference between bookkeeping and accounting?",
    "Can you work with my existing accounting software?",
    "How often do you provide reports?",
    "What if my books are a mess or behind?"
  ];

  return (
    // Main container with a modern, clean font and a base text color.
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      
      {/* Navbar section */}
      <Header />

    
      {/* Hero section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 bg-blue-50 relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
          Bookkeeping & Accounting <br className="hidden md:block" /> That Keeps You in Control
        </h1>
        <p className="mt-4 md:mt-6 max-w-2xl text-base md:text-lg text-gray-700">
          Stay organized, stay compliant. Let us handle your books so you can focus on growth.
        </p>
        <button className="mt-6 md:mt-8 bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 inline-block">
          Start Bookkeeping
        </button>
      </section>

      {/* 3-Step Process section */}
      <section className="px-4 md:px-10 py-16 md:py-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">Our 3-Step Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2 md:mb-4">{step.number}</div>
              <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services section */}
      <section className="px-10 py-24 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-2 divide-x divide-gray-300 max-w-6xl mx-auto">
          {/* Bookkeeping services list */}
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
          
          {/* Accounting services list */}
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

      {/* Why Choose Us section */}
      <section className="grid md:grid-cols-2 gap-12 items-center px-10 py-24 bg-blue-50">
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-gray-700 leading-relaxed">
            AALIConsulting makes system implementation simple, strategic, and stress-free. We help businesses transition
            to modern accounting and accuracy from day one. From selecting the right software (like QuickBooks, Xero, or Wave) to full setup, data migration, and team training, we guide you through each step
            Our hands-on approach ensures your systems are aligned with your business goals - saving you time and reducing costly errors in the long run.
          </p>
        </div>
      </section>

      {/* FAQs section */}
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
      <Footer />
    </div>
  );
};

export default BookkeepingPage;