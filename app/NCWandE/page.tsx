"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThreeStepProcess from "../components/Pages/ThreeStep";
import FAQSection from "../components/Pages/FAQ";
import ResourcesSection from "../components/Pages/Resources";

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
      question:
        "I’m new to Canada — how do I know which path (job, freelance, or business) is right for me?",
      answer:
        "We’ll help you assess your background, goals, and interests to recommend the best path for your situation.",
    },
    {
      question:
        "I’ve never freelanced or started a business before. Can I still join?",
      answer:
        "Absolutely! Our program is designed for all experience levels, with step-by-step guidance and practical resources.",
    },
    {
      question:
        "I’m interested in e-commerce but don’t know where to begin. Will this program guide me?",
      answer:
        "Yes, we cover e-commerce setup, compliance, and best practices, including platform selection and pricing.",
    },
    {
      question: "How will I know if I’m making real progress?",
      answer:
        "You’ll see tangible milestones: employment secured, business registered, store launched, and more.",
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
    <div className="font-sans text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[420px] md:h-[480px] flex items-center justify-center overflow-hidden">
        <img
          src="/Web Assets/Images/NEW/Newcomers & Expats/Work, Business & E-Commerce/Untitled-design-10.png"
          alt="Newcomers in Canada"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-black !text-white mb-4 drop-shadow-lg">
            <span className="!text-white">
              Launch Your Career or Business in Canada — The Right Way.
            </span>
          </h1>
          <p className="!text-white text-lg md:text-xl mb-6 drop-shadow font-semibold">
            A hands-on program that helps newcomers find work faster, freelance
            professionally, or build an online business — with clear, compliant,
            and step-by-step guidance for the Canadian market.
          </p>
          <a href="/ContactUs" className="btn-primary font-semibold">
            Book a 1:1 Coaching
          </a>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Pathways Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Heading and description */}
          <div>
            <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Find Your Path
              <br />
              to Success in Canada
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md">
              Whether you're looking for your first Canadian job, launching a
              freelance career, or turning an idea into a business, this program
              gives you the structure, compliance, and tools to get started the
              right way.
            </p>
          </div>
          {/* Right: 2x2 grid of images with labels below */}
          <div className="grid grid-cols-2 gap-8">
            {[
              {
                src: "/Web Assets/Images/NEW/Newcomers & Expats/Work, Business & E-Commerce/0CFDC23E-C2C0-4168-9981-30EB1D2EBF6E.png",
                label: "FREELANCERS & CONSULTANTS",
              },
              {
                src: "/Web Assets/Images/NEW/Newcomers & Expats/Work, Business & E-Commerce/782FE90E-0AD2-47F3-88AE-54F8789B03D7.png",
                label: "RECENT GRADUATES & NEW IMMIGRANTS SEEKING EMPLOYMENT",
              },
              {
                src: "/Web Assets/Images/NEW/Newcomers & Expats/Work, Business & E-Commerce/9920C58E-8D05-4AAF-B77E-328C89F58016.png",
                label: "NEW ENTREPRENEURS",
              },
              {
                src: "/Web Assets/Images/NEW/Newcomers & Expats/Work, Business & E-Commerce/B22623D6-E43A-45CE-8F12-23C9123AE662.png",
                label: "E-COMMERCE ENTREPRENEURS",
              },
            ].map((img, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-[#f5faff] dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-44 h-44 object-contain mb-4"
                />
                <div className="font-bold text-center text-lg text-[#1e293b] dark:text-gray-100">
                  {img.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Step Process */}
      <ThreeStepProcess
        heading="Learn Your Way — Cohort, Workshop, or Coaching"
        steps={steps}
      />

      {/* Curriculum Section */}
      <section className="py-20 px-4 bg-gray-900 dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-2 text-white">
          Pick Your Path (Curriculum)
        </h2>
        <p className="text-center mb-10 text-gray-400 text-lg">
          Four Clear Paths to Work & Business Success
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex bg-gray-900 border border-gray-700 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-center w-40 min-w-[120px] bg-gray-800 text-blue-500 text-3xl font-bold h-full p-8">
              Path A
            </div>
            <div className="flex-1 p-8">
              <div className="font-semibold mb-1 text-lg text-white">
                Employment (Get Hired Fast)
              </div>
              <ul className="list-disc pl-5 text-gray-300 text-base">
                <li>Build an ATS-ready résumé and LinkedIn profile</li>
                <li>Learn interview tactics and workplace expectations</li>
                <li>Understand payroll deductions, tax slips, and benefits</li>
              </ul>
            </div>
          </div>
          <div className="flex bg-gray-900 border border-gray-700 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-center w-40 min-w-[120px] bg-gray-800 text-blue-500 text-3xl font-bold h-full p-8">
              Path B
            </div>
            <div className="flex-1 p-8">
              <div className="font-semibold mb-1 text-lg text-white">
                Self-Employment & Freelancing
              </div>
              <ul className="list-disc pl-5 text-gray-300 text-base">
                <li>Register your business and GST/HST number (if needed)</li>
                <li>
                  Set pricing, create invoices, and manage client contracts
                </li>
                <li>Track income & expenses for T2125 reporting</li>
              </ul>
            </div>
          </div>
          <div className="flex bg-gray-900 border border-gray-700 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-center w-40 min-w-[120px] bg-gray-800 text-blue-500 text-3xl font-bold h-full p-8">
              Path C
            </div>
            <div className="flex-1 p-8">
              <div className="font-semibold mb-1 text-lg text-white">
                Small Business Startup (Company Launch)
              </div>
              <ul className="list-disc pl-5 text-gray-300 text-base">
                <li>Decide between sole proprietor vs corporation</li>
                <li>Learn cashflow, bookkeeping, and CRA filing basics</li>
                <li>Register for business banking and accounting software</li>
              </ul>
            </div>
          </div>
          <div className="flex bg-gray-900 border border-gray-700 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-center w-40 min-w-[120px] bg-gray-800 text-blue-500 text-3xl font-bold h-full p-8">
              Path D
            </div>
            <div className="flex-1 p-8">
              <div className="font-semibold mb-1 text-lg text-white">
                E-Commerce Launch
              </div>
              <ul className="list-disc pl-5 text-gray-300 text-base">
                <li>Choose platform (Shopify, Amazon, Etsy, eBay, Walmart)</li>
                <li>
                  Build a store, upload products, and set pricing using our
                  Landed-Cost Calculator
                </li>
                <li>Register for GST/HST and understand PST/QST rules</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Toolkits Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 treansition-colors duration-300">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/Web Assets/Images/NEW/Newcomers & Expats/Work, Business & E-Commerce/abc.webp"
            alt="Toolkit"
            className="rounded-xl shadow-lg object-cover w-full h-64 md:h-72"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Practical Toolkits You’ll Use from Day One
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-base">
              <li>✅ ATS-Ready Résumé & LinkedIn Template</li>
              <li>
                ✅ Freelancer Kit (invoice template, contract, GST/HST guide)
              </li>
              <li>
                ✅ Business Starter Kit (one-page plan + cashflow template)
              </li>
              <li>
                ✅ E-Commerce Kit (store setup checklist, pricing calculator,
                policy templates)
              </li>
              <li>✅ Tax Matrix (GST/HST filing cadence by province)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              You’ll See Progress — Not Just Lessons
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-base">
              <li>↳ Employment secured or freelance income launched</li>
              <li>↳ BN/GST/HST registered (if required)</li>
              <li>
                ↳ Store/Marketplace listings live with first orders fulfilled
              </li>
              <li>↳ Pricing and margins validated</li>
              <li>↳ Filing calendar and bookkeeping system in place</li>
            </ul>
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden w-full h-64 md:h-72 flex items-center">
            <img
              src="/Web Assets/Images/NEW/Newcomers & Expats/Work, Business & E-Commerce/MRK22109718_Hero_435-x-430_v1.0.0.jpg"
              alt="Progress"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          We Keep You Safe While You Grow
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
            <div className="font-bold mb-2 text-gray-900 dark:text-white">
              Legal Awareness
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Stay within immigration and business permit conditions.
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
            <div className="font-bold mb-2 text-gray-900 dark:text-white">
              Tax Readiness
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Know when and how to register for GST/HST and file accurately.
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
            <div className="font-bold mb-2 text-gray-900 dark:text-white">
              Ethical Business Practices
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Comply with import rules, privacy laws, and fair consumer
              standards.
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
        <img
          src="/Web Assets/Images/NEW/Newcomers & Expats/Work, Business & E-Commerce/canada-connects.jpg"
          alt="Community"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold !text-white mb-4 drop-shadow-lg">
            Bring This Program to Your Community
          </h2>
          <a href="/ContactUs" className="btn-primary font-semibold">
            Book A 1:1 Coaching
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
