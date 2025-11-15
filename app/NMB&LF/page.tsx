"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThreeStepProcess from "../components/Pages/ThreeStep";
import FAQSection from "../components/Pages/FAQ";

export default function NMBLFPage() {
  // Three step process data
  const steps = [
    {
      number: "1",
      title: "Cohort Program",
      text: "Weekly 90-minute classes + office hours in a supportive group.",
    },
    {
      number: "2",
      title: "Workshops",
      text: "Topic-based sessions for employers, settlement agencies, or community groups.",
    },
    {
      number: "3",
      title: "1:1 Coaching",
      text: "Personalized financial setup and planning just for you.",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "I’ve just arrived in Canada — where do I even start?",
      answer: "This program guides you through every step, from banking and benefits to taxes and housing, so you can settle confidently.",
    },
    {
      question: "I’m worried about making financial mistakes as a newcomer. Will this help me avoid that?",
      answer: "Yes, we provide clear, practical guidance and checklists to help you avoid common pitfalls and make smart decisions.",
    },
    {
      question: "Will this program actually make a difference in my daily life?",
      answer: "Absolutely! You’ll see real progress: accounts set up, benefits enrolled, taxes filed, and more.",
    },
    {
      question: "I don’t know anyone here. Is this program for people like me?",
      answer: "Yes, our supportive community and group sessions are designed for newcomers just like you.",
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
            <span className="text-white">Start Strong in Canada —<br />
            Financially, Confidently, and Connected</span>
          </h1>
          <p className="text-white text-lg md:text-xl mb-6 drop-shadow font-semibold">
            A step-by-step program that helps newcomers set up their banking, taxes, benefits, housing, credit, and school admissions — with culturally aware, plain-language guidance every step of the way.
          </p>
          <a
            href="/ContactUs"
            className="btn-primary font-semibold"
          >
            Book a 1:1 Session
          </a>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Who This Program Is For */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Who This Program Is For</h2>
            <p className="text-lg text-white mb-8">
              If you’ve recently arrived in Canada or are planning to settle soon, this program helps you navigate everything that matters most in your first year — confidently, correctly, and without confusion.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-2xl p-6">
              <img src="/Web Assets/NEW/Resources/work-study-icon.png" alt="Work/Study Permit Holders" className="w-20 h-20 mb-4" />
              <div className="font-bold text-center">WORK/STUDY PERMIT HOLDERS</div>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-2xl p-6">
              <img src="/Web Assets/NEW/Resources/permanent-resident-icon.png" alt="Permanent Residents" className="w-20 h-20 mb-4" />
              <div className="font-bold text-center">PERMANENT RESIDENTS</div>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-2xl p-6">
              <img src="/Web Assets/NEW/Resources/family-relocate-icon.png" alt="Families Relocating" className="w-20 h-20 mb-4" />
              <div className="font-bold text-center">FAMILIES RELOCATING TO CANADA</div>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-2xl p-6">
              <img src="/Web Assets/NEW/Resources/new-citizen-icon.png" alt="New Citizens" className="w-20 h-20 mb-4" />
              <div className="font-bold text-center">NEW CITIZENS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Step Process */}
      <ThreeStepProcess
        heading="Three Ways to Learn — Choose What Fits You Best"
        steps={steps}
      />

      {/* What You'll Learn */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What You’ll learn</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="font-bold mb-2">First 30 Days</div>
            <div className="text-gray-600 text-sm">Banking, credit, phone/internet, budgeting, fraud awareness.</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="font-bold mb-2">Benefits & Health</div>
            <div className="text-gray-600 text-sm">CRA My Account, GST/HST, CCB, OHIP coverage.</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="font-bold mb-2">Taxes (Split-Year Basics)</div>
            <div className="text-gray-600 text-sm">Residency start, first filing, foreign income, T1135 awareness.</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="font-bold mb-2">Work & Freelance</div>
            <div className="text-gray-600 text-sm">Invoicing, self-employment, HST registration, recordkeeping.</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="font-bold mb-2">Save & Invest (Start Right)</div>
            <div className="text-gray-600 text-sm">TFSA, RRSP, FHSA, RESP — and how to start safely.</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="font-bold mb-2">Housing & Vehicles</div>
            <div className="text-gray-600 text-sm">Renting, lease rules, tenant rights, affordable housing, transit vs. owning a car.</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="font-bold mb-2">School Admissions & Education</div>
            <div className="text-gray-600 text-sm">K-12 registration, ESL/ELL, childcare, post-secondary, OSAP and scholarships.</div>
          </div>
        </div>
      </section>

      {/* Toolkits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/Web Assets/NEW/Resources/toolkit-photo-2.jpg"
            alt="Toolkit"
            className="rounded-xl shadow-lg object-cover w-full h-64 md:h-72"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4">You’ll Leave With Practical Tools You Can Use Right Away</h3>
            <ul className="space-y-2 text-gray-700 text-base">
              <li>✅ Newcomer Money Checklist (First 90 Days)</li>
              <li>✅ Benefits Map (GST/HST Credit, CCB, etc.)</li>
              <li>✅ First-Year Tax Guide</li>
              <li>✅ Credit-Building Plan</li>
              <li>✅ Savings Playbook (TFSA/RRSP/FHSA/RESP order)</li>
              <li>✅ Rental & School Admissions Toolkits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">We Track Real Progress — Not Just Lessons</h3>
            <ul className="space-y-2 text-gray-700 text-base">
              <li>↳ CRA/My Account & direct deposit set up</li>
              <li>↳ Credit file opened & on-time payments started</li>
              <li>↳ Benefits enrolled successfully</li>
              <li>↳ First tax return filed accurately</li>
              <li>↳ TFSA/FHSA/RESP opened</li>
              <li>↳ Lease signed confidently</li>
              <li>↳ School registration or post-secondary application complete</li>
            </ul>
          </div>
          <img
            src="/Web Assets/NEW/Resources/progress-photo-2.jpg"
            alt="Progress"
            className="rounded-xl shadow-lg object-cover w-full h-64 md:h-72"
          />
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
            Get Started Today — Let’s Build Your Canadian Foundation
          </h2>
          <a
            href="/ContactUs"
            className="btn-primary font-semibold"
          >
            Book a 1:1 Session
          </a>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Resources</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src="/Web Assets/NEW/Resources/resource-cra.png" alt="CRA" className="w-full h-32 object-cover rounded mb-2" />
            <div className="font-semibold mb-2 text-center">Newcomers to Canada and the CRA</div>
            <a href="#" className="inline-block mt-auto bg-gray-100 border border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-200 transition">Learn More</a>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src="/Web Assets/NEW/Resources/resource-tax-return.png" alt="Tax Return" className="w-full h-32 object-cover rounded mb-2" />
            <div className="font-semibold mb-2 text-center">Completing your return for newcomers</div>
            <a href="#" className="inline-block mt-auto bg-gray-100 border border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-200 transition">Learn More</a>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src="/Web Assets/NEW/Resources/resource-cra-money.png" alt="CRA Money" className="w-full h-32 object-cover rounded mb-2" />
            <div className="font-semibold mb-2 text-center">Newcomers to Canada and the CRA</div>
            <a href="#" className="inline-block mt-auto bg-gray-100 border border-gray-300 px-4 py-2 rounded shadow hover:bg-gray-200 transition">Learn More</a>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src="/Web Assets/NEW/Resources/resource-housing.png" alt="Housing" className="w-full h-32 object-cover rounded mb-2" />
            <div className="font-semibold mb-2 text-center">Newcomers: Housing in Canada – Renting a Home</div>
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