"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThreeStepProcess from "../components/Pages/ThreeStep";
import FAQSection from "../components/Pages/FAQ";

import ResourcesSection from "../components/Pages/Resources";

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
      answer:
        "This program guides you through every step, from banking and benefits to taxes and housing, so you can settle confidently.",
    },
    {
      question:
        "I’m worried about making financial mistakes as a newcomer. Will this help me avoid that?",
      answer:
        "Yes, we provide clear, practical guidance and checklists to help you avoid common pitfalls and make smart decisions.",
    },
    {
      question:
        "Will this program actually make a difference in my daily life?",
      answer:
        "Absolutely! You’ll see real progress: accounts set up, benefits enrolled, taxes filed, and more.",
    },
    {
      question: "I don’t know anyone here. Is this program for people like me?",
      answer:
        "Yes, our supportive community and group sessions are designed for newcomers just like you.",
    },
  ];

  const resourcesData = [
    {
      img: "/Web Assets/NEW/Resources/360_F_330941253_b3Dor4GncjCMVPvw8QM4CsyUymtgvvMM.jpg",
      title: "Disability tax credit (DTC)",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities/disability-tax-credit.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/Clearline-CPA-How-to-Sign-Up-for-CRA-My-Business-Account-scaled.jpg",
      title: "T2201 Disability Tax Credit Certificate (form & instruction)",
      link: "https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t2201.html?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-1480239160-612x612.jpg",
      title: "Estate Planning for Disabled Beneficiaries",
      link: "https://ca.rbcwealthmanagement.com/documents/73602/1343743/Estate%2BPlanning%2Bfor%2BBenes%2Bwith%2BDisabilities.pdf/3233f6df-6c7f-4c9e-8b67-73b0e51c2260?utm_source=chatgpt.com",
    },
    {
      img: "/Web Assets/NEW/Resources/istockphoto-185066026-612x612.jpg",
      title: "How Henson Trusts Can Help Canadians with Disabilities",
      link: "https://www.ig.ca/en/insights/how-henson-trusts-can-help-canadians-with-disabilities?utm_source=chatgpt.com",
    },
  ];

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[420px] md:h-[480px] flex items-center justify-center overflow-hidden">
        <img
          src="/Web Assets/Images/NEW/Newcomers & Expats/Money, Benefits & Life Setup/Canada-On-Track-To-Welcome-Well-Over-500000-New-Immigrants-In-2024.jpg"
          alt="Newcomers in Canada"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">
            <span className="text-white">
              Start Strong in Canada —<br />
              Financially, Confidently, and Connected
            </span>
          </h1>
          <p className="text-white text-lg md:text-xl mb-6 drop-shadow font-semibold">
            A step-by-step program that helps newcomers set up their banking,
            taxes, benefits, housing, credit, and school admissions — with
            culturally aware, plain-language guidance every step of the way.
          </p>
          <a href="/contact-us" className="btn-primary font-semibold">
            Book a 1:1 Session
          </a>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Who This Program Is For */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Who This Program Is For
            </h2>
            <p className="text-lg text-gray-900 dark:text-gray-300 mb-8">
              If you’ve recently arrived in Canada or are planning to settle
              soon, this program helps you navigate everything that matters most
              in your first year — confidently, correctly, and without
              confusion.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                src: "/Web Assets/Images/NEW/Newcomers & Expats/Money, Benefits & Life Setup/Who This Program Is For/3B1E6370-3C59-4C8E-B341-78E83250C917.png",
                alt: "Program Option 1",
              },
              {
                src: "/Web Assets/Images/NEW/Newcomers & Expats/Money, Benefits & Life Setup/Who This Program Is For/48AC8E86-285A-4D86-83D8-9FC59476F9E0.png",
                alt: "Program Option 2",
              },
              {
                src: "/Web Assets/Images/NEW/Newcomers & Expats/Money, Benefits & Life Setup/Who This Program Is For/42161780-6FCA-4DD5-88D9-B3CC606448D2.png",
                alt: "Program Option 3",
              },
              {
                src: "/Web Assets/Images/NEW/Newcomers & Expats/Money, Benefits & Life Setup/Who This Program Is For/B7744260-7B1E-43B9-9A84-CF7BBFC233D2.png",
                alt: "Program Option 4",
              },
            ].map((img, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-6"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-32 h-32 mb-4 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Step Process */}
      <ThreeStepProcess
        heading="Three Ways to Learn — Choose What Fits You Best"
        steps={steps}
      />

      {/* What You'll Learn */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          What You’ll Learn
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              First 30 Days
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-base">
              Banking, credit, phone/internet, budgeting, fraud awareness.
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Benefits & Health
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-base">
              CRA My Account, GST/HST, CCB, OHIP coverage.
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Taxes (Split-Year Basics)
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-base">
              Residency start, first filing, foreign income, T1135 awareness.
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Work & Freelance
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-base">
              Invoicing, self-employment, HST registration, recordkeeping.
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Save & Invest (Start Right)
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-base">
              TFSA, RRSP, FHSA, RESP — and how to start safely.
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Housing & Vehicles
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-base">
              Renting, lease rules, tenant rights, affordable housing, transit
              vs. owning a car.
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              School Admissions & Education
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-base">
              K-12 registration, ESL/ELL, childcare, post-secondary, OSAP and
              scholarships.
            </div>
          </div>
        </div>
      </section>

      {/* Toolkits Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/Web Assets/Images/NEW/Newcomers & Expats/Money, Benefits & Life Setup/Canada_528796674-scaled.jpeg"
            alt="Toolkit"
            className="rounded-xl shadow-lg object-cover w-full h-64 md:h-72"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              You’ll Leave With Practical Tools You Can Use Right Away
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-base">
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
      <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              We Track Real Progress — Not Just Lessons
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-base">
              <li>↳ CRA/My Account & direct deposit set up</li>
              <li>↳ Credit file opened & on-time payments started</li>
              <li>↳ Benefits enrolled successfully</li>
              <li>↳ First tax return filed accurately</li>
              <li>↳ TFSA/FHSA/RESP opened</li>
              <li>↳ Lease signed confidently</li>
              <li>
                ↳ School registration or post-secondary application complete
              </li>
            </ul>
          </div>
          <img
            src="/Web Assets/Images/NEW/Newcomers & Expats/Money, Benefits & Life Setup/childcaresupport.webp"
            alt="Progress"
            className="rounded-xl shadow-lg object-cover w-full h-64 md:h-72"
          />
        </div>
      </section>

      {/* Community CTA */}
      <section className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
        <img
          src="/Web Assets/Images/NEW/Newcomers & Expats/Money, Benefits & Life Setup/trca-newcomers-canada-nygep.jpg"
          alt="Community"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
            Get Started Today — Let’s Build Your Canadian Foundation
          </h2>
          <a href="/contact-us" className="btn-primary font-semibold">
            Book a 1:1 Session
          </a>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Resources Section */}
      <ResourcesSection heading="Resources" resources={resourcesData} />

      {/* FAQ Section */}
      <FAQSection heading="Frequently Asked Questions" faqs={faqs} />

      <Footer />
    </div>
  );
}
