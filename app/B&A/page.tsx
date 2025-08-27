import React from "react";

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

  const faqs = [
    "What's the difference between bookkeeping and accounting?",
    "Can you work with my existing accounting software?",
    "How often do you provide reports?",
    "What if my books are a mess or behind?"
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-700">AAUConsulting</div>
        <ul className="hidden md:flex space-x-6 text-sm">
          <li><a href="/" className="hover:text-blue-700">Home</a></li>
          <li><a href="/services" className="hover:text-blue-700">Services</a></li>
          <li><a href="/resources" className="hover:text-blue-700">Resources</a></li>
          <li><a href="/ContactUs" className="hover:text-blue-700">Contact Us</a></li>
          <li><a href="/about" className="hover:text-blue-700">About</a></li>
        </ul>
        <div className="space-x-3 text-sm hidden md:block">
          <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50">Sign Up</button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Log In</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-24 bg-blue-50 text-center relative overflow-hidden">
        <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
          Bookkeeping & Accounting <br /> That Keeps You in Control
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          Stay organized, stay compliant. Let us handle your books so you can focus on growth.
        </p>
        <button className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-xl shadow hover:bg-blue-800">
          Start Bookkeeping
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
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Bookkeeping Services</h3>
            <ul className="space-y-2 text-gray-700">
              {bookkeepingServices.map((service, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-2">✔</span>{service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Accounting Services</h3>
            <ul className="space-y-2 text-gray-700">
              {accountingServices.map((service, i) => (
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
            src="/images/bookkeeping.jpg"
            alt="Bookkeeping"
            className="rounded-lg shadow-lg"
          />
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
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white shadow rounded-lg p-4">
              <summary className="cursor-pointer font-medium">{faq}</summary>
              <p className="mt-2 text-gray-600">
                Answer coming soon...
              </p>
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
            <ul><li>Bookkeeping</li><li>Accounting</li><li>Tax Consulting</li><li>Planning</li></ul>
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

export default BookkeepingPage;
