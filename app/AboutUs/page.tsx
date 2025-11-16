"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CORE_VALUES = [
  {
    title: "Clarity",
    desc: "No jargon, just transparent and honest guidance.",
    number: "1",
  },
  {
    title: "Efficiency",
    desc: "Smart systems and automation that save time and reduce stress.",
    number: "2",
  },
  {
    title: "Impact",
    desc: "Tailored solutions that help clients grow, comply, and plan confidently.",
    number: "3",
  },
];

const WHO_WE_HELP = [
  {
    title: "Individuals & Families",
    desc: "Personalized tax, planning, and financial guidance that simplifies money management, supports major life changes, and builds long-term stability.",
  },
  {
    title: "Businesses & Entrepreneurs",
    desc: "Comprehensive accounting, tax, and system solutions that streamline operations, improve profitability, and drive sustainable business growth.",
  },
  {
    title: "Newcomers & Expats",
    desc: "Step-by-step programs for banking, taxes, housing, and employment to help newcomers and expats confidently build their life in Canada.",
  },
  {
    title: "Faith-Based & Nonprofits",
    desc: "Modern governance, reporting, and compliance solutions that strengthen transparency, community trust, and long-term financial sustainability.",
  },
];

const WHY_CHOOSE = [
  {
    icon: (
      <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" viewBox="0 0 48 48"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" fill="#E3F0FF"/><path d="M24 34c-5.523 0-10-4.477-10-10S18.477 14 24 14s10 4.477 10 10-4.477 10-10 10Zm0-18a8 8 0 100 16 8 8 0 000-16Z" fill="#2563EB"/></svg>
    ),
    title: "Personalized Attention",
    desc: "We take the time to understand your unique situation and goals.",
  },
  {
    icon: (
      <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" viewBox="0 0 48 48"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" fill="#E3F0FF"/><path d="M32 24a8 8 0 11-16 0 8 8 0 0116 0Z" fill="#2563EB"/></svg>
    ),
    title: "Locally Rooted, Nationally Aware",
    desc: "Proudly based in Canada, we bring a local understanding with awareness of broader trends and regulations that affect you.",
  },
  {
    icon: (
      <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" viewBox="0 0 48 48"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" fill="#E3F0FF"/><path d="M24 14v20M14 24h20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Strategic Insights",
    desc: "With deep expertise in tax, accounting, and business strategy, we help you make informed decisions that support sustainable growth.",
  },
  {
    icon: (
      <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" viewBox="0 0 48 48"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" fill="#E3F0FF"/><path d="M16 24h16M24 16v16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Transparent Communication",
    desc: "No jargon, no surprises—just clear, honest advice you can rely on every step of the way.",
  },
];

const FAQS = [
  {
    q: "What makes AALI Consulting different from other firms?",
    a: "AALI Consulting combines personalized attention, local expertise, and strategic insights to deliver clear, actionable solutions for every client.",
  },
  {
    q: "Who do you work with?",
    a: "We work with individuals, families, entrepreneurs, newcomers, expats, and nonprofits across Canada and the United States.",
  },
  {
    q: "How do your consulting services work?",
    a: "We start with a consultation to understand your needs, then tailor our services to help you achieve your goals with clarity and confidence.",
  },
  {
    q: "Where are your services available?",
    a: "Our services are available across Canada and the United States, both in-person and virtually.",
  },
];

export default function AboutUsPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative text-center overflow-hidden"
        style={{ backgroundColor: "#eaf6ff" }}
      >
        {/* Maple leaf background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none select-none"
          style={{
            backgroundImage: "url('/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "300px",
            opacity: 0.35,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto pt-16 md:pt-24 pb-16 md:pb-24">
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight text-gray-900">
            Empowering Businesses and<br className="hidden md:block" />
            Individuals to Work Smarter, Not Harder
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-700 font-medium">
            AALI Consulting helps organizations and professionals streamline operations, enhance efficiency, and achieve growth through smart systems, strategy, and structure.
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="/ContactUs"
              className="px-8 py-2.5 rounded-md font-semibold text-white shadow-md"
              style={{
                background: "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
                boxShadow: "0 2px 8px 0 rgba(59,130,246,0.15)",
                border: "none",
              }}
            >
              Book Now
            </a>
            <a
              href="#what-we-stand-for"
              className="px-8 py-2.5 rounded-md font-semibold bg-white border border-black shadow-md text-gray-900 hover:bg-gray-100 transition"
              style={{
                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
        {/* SVG Wave */}
        <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden leading-none z-20">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full h-24 md:h-32"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
          >
            <path
              d="M0,32 C360,120 1080,0 1440,96 L1440,120 L0,120 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </section>

      {/* What We Stand For */}
      <section id="what-we-stand-for" className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4">What We Stand For</h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg">
          We believe good consulting is more than advice — it’s about giving people tools that work. That’s why every service we offer is built on three core principles:
        </p>
        {/* Three Step Process */}
        {(() => {
          const steps = [
            {
              number: "1",
              title: "Clarity",
              text: "No jargon, just transparent and honest guidance.",
            },
            {
              number: "2",
              title: "Efficiency",
              text: "Smart systems and automation that save time and reduce stress.",
            },
            {
              number: "3",
              title: "Impact",
              text: "Tailored solutions that help clients grow, comply, and plan confidently.",
            },
          ];
          const ThreeStepProcess = require("../components/Pages/ThreeStep").default;
          return <ThreeStepProcess heading="" steps={steps} />;
        })()}
      </section>

      {/* Who We Help */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Who We Help</h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg">
          From Students to CEOs — We’re Built for Every Stage of Growth. Proudly Supporting Clients Across Canada and the United States.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {WHO_WE_HELP.map((w) => (
            <div key={w.title} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center">
              <div className="font-semibold text-lg mb-2 text-center">{w.title}</div>
              <div className="text-gray-600 text-center text-sm">{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose AALI Consulting */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose AALI Consulting</h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg">
          At AALI Consulting, you're not just getting accountants or planners — you're gaining partners who understand your goals, culture, and community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {WHY_CHOOSE.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-10 bg-white border border-gray-300 rounded-2xl"
              style={{ minHeight: 320, boxShadow: "0 0 0 0 transparent" }}
            >
              <div className="mb-6">
                {item.icon}
              </div>
              <div className="font-bold text-xl mb-2 text-gray-900">{item.title}</div>
              <div className="text-gray-700 text-base">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 px-4 text-center bg-gray-100">
        <div className="absolute inset-0">
          <img src="/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp" alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Let’s Talk About Your Goals</h2>
          <div className="flex justify-center gap-4 mb-8">
            <a href="/ContactUs" className="bg-blue-600 text-white px-8 py-3 rounded shadow hover:bg-blue-700 font-semibold transition">Book A Consultation</a>
            <a href="/ContactUs" className="bg-white border border-gray-400 px-8 py-3 rounded shadow font-semibold hover:bg-gray-100 transition">Contact Us</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* FAQ Section - uses shared FAQSection component */}
      {(() => {
        const FAQSection = require("../components/Pages/FAQ").default;
        const faqs = [
          {
            question: "What makes AALI Consulting different from other firms?",
            answer: "AALI Consulting combines personalized attention, local expertise, and strategic insights to deliver clear, actionable solutions for every client.",
          },
          {
            question: "Who do you work with?",
            answer: "We work with individuals, families, entrepreneurs, newcomers, expats, and nonprofits across Canada and the United States.",
          },
          {
            question: "How do your consulting services work?",
            answer: "We start with a consultation to understand your needs, then tailor our services to help you achieve your goals with clarity and confidence.",
          },
          {
            question: "Where are your services available?",
            answer: "Our services are available across Canada and the United States, both in-person and virtually.",
          },
        ];
        return <FAQSection heading="Frequently Asked Questions" faqs={faqs} />;
      })()}

      <Footer />
    </div>
  );
}
