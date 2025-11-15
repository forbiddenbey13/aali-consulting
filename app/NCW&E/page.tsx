"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThreeStepProcess from "../components/Pages/ThreeStep";
import FAQSection from "../components/Pages/FAQ";

export default function NCWEPage() {
  // Three step process data
  const steps = [
    {
      number: "1",
      title: "Cohort (4–6 Weeks)",
      text: "Weekly 90-minute classes + office hours with live examples and peer support.",
    },
    {
      number: "2",
      title: "Workshops (60–90 min)",
      text: "Focused deep dives for employers, settlement agencies, or community groups.",
    },
    {
      number: "3",
      title: "1:1 Coaching (2–4 Sessions)",
      text: "Personalized roadmap for career or business launch.",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "I’m new to Canada — how do I know which path (job, freelance, or business) is right for me?",
      answer: "We’ll help you assess your background, goals, and interests to recommend the best path for your situation.",
    },
    {
      question: "I’ve never freelanced or started a business before. Can I still join?",
      answer: "Absolutely! Our program is designed for all experience levels, with step-by-step guidance and practical resources.",
    },
    {
      question: "I’m interested in e-commerce but don’t know where to begin. Will this program guide me?",
      answer: "Yes, we cover e-commerce setup, compliance, and best practices, including platform selection and pricing.",
    },
    {
      question: "How will I know if I’m making real progress?",
      answer: "You’ll see tangible milestones: employment secured, business registered, store launched, and more.",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[420px] md:h-[480px] flex items-center justify-center overflow-hidden">
        <img
          src="/Web Assets/NEW/About Us/a-group-of-business-people-standing-together-free-png.png"
          alt="Newcomers in Canada"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">
            <span className="text-white">Launch Your Career or Business in Canada — The Right Way.</span>
          </h1>
          <p className="text-white text-lg md:text-xl mb-6 drop-shadow font-semibold">
            A hands-on program that helps newcomers find work faster, freelance professionally, or build an online business — with clear, compliant, and step-by-step guidance for the Canadian market.
          </p>
          <a
            href="/ContactUs"
            className="btn-primary font-semibold"
          >
            Book a 1:1 Coaching
          </a>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Pathways Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Find Your Path to Success in Canada</h2>
            <p className="text-lg text-white mb-8">
              Whether you’re looking for your first Canadian job, launching a freelance career, or turning an idea into a business, this program gives you the structure, compliance, and tools to get started the right way.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-2xl p-6">
              <img src="/Web Assets/NEW/Resources/freelancer-icon.png" alt="Freelancers & Consultants" className="w-20 h-20 mb-4" />
              <div className="font-bold text-center">FREELANCERS & CONSULTANTS</div>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-2xl p-6">
              <img src="/Web Assets/NEW/Resources/graduate-icon.png" alt="Recent Graduates & New Immigrants" className="w-20 h-20 mb-4" />
              <div className="font-bold text-center">RECENT GRADUATES & NEW IMMIGRANTS SEEKING EMPLOYMENT</div>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-2xl p-6">
              <img src="/Web Assets/NEW/Resources/entrepreneur-icon.png" alt="New Entrepreneurs" className="w-20 h-20 mb-4" />
              <div className="font-bold text-center">NEW ENTREPRENEURS</div>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-2xl p-6">
              <img src="/Web Assets/NEW/Resources/ecommerce-icon.png" alt="E-Commerce Entrepreneurs" className="w-20 h-20 mb-4" />
              <div className="font-bold text-center">E-COMMERCE ENTREPRENEURS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Step Process */}
      <ThreeStepProcess
        heading="Learn Your Way — Cohort, Workshop, or Coaching"
        steps={steps}
      />

      {/* Curriculum Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Pick Your Path (Curriculum)</h2>
        <p className="text-center mb-10 text-gray-600">Four Clear Paths to Work & Business Success</p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-300 rounded-2xl p-8">
            <div className="text-blue-600 font-bold text-lg mb-2">Path A</div>
            <div className="font-semibold mb-1">Employment (Get Hired Fast)</div>
            <ul className="list-disc pl-5 text-gray-700 text-sm">
              <li>Build an ATS-ready résumé and LinkedIn profile</li>
              <li>Learn interview tactics and workplace expectations</li>
              <li>Understand payroll deductions, tax slips, and benefits</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-300 rounded-2xl p-8">
            <div className="text-blue-600 font-bold text-lg mb-2">Path B</div>
            <div className="font-semibold mb-1">Self-Employment & Freelancing</div>
            <ul className="list-disc pl-5 text-gray-700 text-sm">
              <li>Register your business and GST/HST number (if needed)</li>
              <li>Set pricing, create invoices, and manage client contracts</li>
              <li>Track income & expenses for T2125 reporting</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-300 rounded-2xl p-8">
            <div className="text-blue-600 font-bold text-lg mb-2">Path C</div>
            <div className="font-semibold mb-1">Small Business Startup (Company Launch)</div>
            <ul className="list-disc pl-5 text-gray-700 text-sm">
              <li>Decide between sole proprietor vs corporation</li>
              <li>Learn cashflow, bookkeeping, and CRA filing basics</li>
              <li>Register for business banking and accounting software</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-300 rounded-2xl p-8">
            <div className="text-blue-600 font-bold text-lg mb-2">Path D</div>
            <div className="font-semibold mb-1">E-Commerce Launch</div>
            <ul className="list-disc pl-5 text-gray-700 text-sm">
              <li>Choose platform (Shopify, Amazon, Etsy, eBay, Walmart)</li>
              <li>Build a store, upload products, and set pricing using our Landed-Cost Calculator</li>
              <li>Register for GST/HST and understand PST/QST rules</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Toolkits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/Web Assets/NEW/Resources/toolkit-photo-1.jpg"
            alt="Toolkit"
            className="rounded-xl shadow-lg object-cover w-full h-64 md:h-72"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4">Practical Toolkits You’ll Use from Day One</h3>
            <ul className="space-y-2 text-gray-700 text-base">
              <li>✅ ATS-Ready Résumé & LinkedIn Template</li>
              <li>✅ Freelancer Kit (invoice template, contract, GST/HST guide)</li>
              <li>✅ Business Starter Kit (one-page plan + cashflow template)</li>
              <li>✅ E-Commerce Kit (store setup checklist, pricing calculator, policy templates)</li>
              <li>✅ Tax Matrix (GST/HST filing cadence by province)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">You’ll See Progress — Not Just Lessons</h3>
            <ul className="space-y-2 text-gray-700 text-base">
              <li>↳ Employment secured or freelance income launched</li>
              <li>↳ BN/GST/HST registered (if required)</li>
              <li>↳ Store/Marketplace listings live with first orders fulfilled</li>
              <li>↳ Pricing and margins validated</li>
              <li>↳ Filing calendar and bookkeeping system in place</li>
            </ul>
          </div>
          <img
            src="/Web Assets/NEW/Resources/progress-photo-1.jpg"
            alt="Progress"
            className="rounded-xl shadow-lg object-cover w-full h-64 md:h-72"
          />
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">We Keep You Safe While You Grow</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="font-bold mb-2">Legal Awareness</div>
            <div className="text-gray-600 text-sm">Stay within immigration and business permit conditions.</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="font-bold mb-2">Tax Readiness</div>
            <div className="text-gray-600 text-sm">Know when and how to register for GST/HST and file accurately.</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="font-bold mb-2">Ethical Business Practices</div>
            <div className="text-gray-600 text-sm">Comply with import rules, privacy laws, and fair consumer standards.</div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
        <img
          src="/Web Assets/NEW/About Us/a-group-of-business-people-standing-together-free-png.png"
          alt="Community"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
            Bring This Program to Your Community
          </h2>
          <a
            href="/ContactUs"
            className="btn-primary font-semibold"
          >
            Book A 1:1 Coaching
          </a>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Resources</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src="/Web Assets/NEW/Resources/resource-gst-hst.png" alt="GST/HST" className="w-full h-32 object-cover rounded mb-2" />
            <div className="font-semibold mb-2 text-center">When to register for and charge GST/HST</div>
            <a href="#" className="inline-block mt-auto bg-gray-100 border border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-200 transition">Learn More</a>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src="/Web Assets/NEW/Resources/resource-gst-info.png" alt="GST/HST Info" className="w-full h-32 object-cover rounded mb-2" />
            <div className="font-semibold mb-2 text-center">General Information for GST/HST Registrants</div>
            <a href="#" className="inline-block mt-auto bg-gray-100 border border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-200 transition">Learn More</a>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src="/Web Assets/NEW/Resources/resource-business-guide.png" alt="Business Guide" className="w-full h-32 object-cover rounded mb-2" />
            <div className="font-semibold mb-2 text-center">Starting a business in Canada: The ultimate guide</div>
            <a href="#" className="inline-block mt-auto bg-gray-100 border border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-200 transition">Learn More</a>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src="/Web Assets/NEW/Resources/resource-nonresident.png" alt="Non-resident GST/HST" className="w-full h-32 object-cover rounded mb-2" />
            <div className="font-semibold mb-2 text-center">Doing Business in Canada — GST/HST Information for Non-residents</div>
            <a href="#" className="inline-block mt-auto bg-gray-100 border border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-200 transition">Learn More</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection heading="Frequently Asked Questions" faqs={faqs} />

      <Footer />
    </div>
  );
}