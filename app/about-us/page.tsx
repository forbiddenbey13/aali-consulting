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
      <svg
        className="w-12 h-12 mx-auto text-blue-600"
        fill="none"
        viewBox="0 0 48 48"
      >
        <path
          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
          fill="#E3F0FF"
        />
        <path
          d="M24 34c-5.523 0-10-4.477-10-10S18.477 14 24 14s10 4.477 10 10-4.477 10-10 10Zm0-18a8 8 0 100 16 8 8 0 000-16Z"
          fill="#2563EB"
        />
      </svg>
    ),
    title: "Personalized Attention",
    desc: "We take the time to understand your unique situation and goals.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 mx-auto text-blue-600"
        fill="none"
        viewBox="0 0 48 48"
      >
        <path
          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
          fill="#E3F0FF"
        />
        <path d="M32 24a8 8 0 11-16 0 8 8 0 0116 0Z" fill="#2563EB" />
      </svg>
    ),
    title: "Locally Rooted, Nationally Aware",
    desc: "Proudly based in Canada, we bring a local understanding with awareness of broader trends and regulations that affect you.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 mx-auto text-blue-600"
        fill="none"
        viewBox="0 0 48 48"
      >
        <path
          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
          fill="#E3F0FF"
        />
        <path
          d="M24 14v20M14 24h20"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Strategic Insights",
    desc: "With deep expertise in tax, accounting, and business strategy, we help you make informed decisions that support sustainable growth.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 mx-auto text-blue-600"
        fill="none"
        viewBox="0 0 48 48"
      >
        <path
          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
          fill="#E3F0FF"
        />
        <path
          d="M16 24h16M24 16v16"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
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

export default function aboutusPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section
        className="relative text-center overflow-hidden dark:bg-gray-900"
        style={{ backgroundColor: "" }} // cleared, using class instead or inline style for light mode if specific
      >
        {/* Maple leaves background - grid layout for hero */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none bg-[#eaf6ff] dark:bg-gray-900">
          <img
            src="/Web Assets/NEW/4789ABC0-9773-40BD-A83B-9EFFAB17E947.png"
            alt=""
            className="absolute"
            style={{
              left: "5%",
              top: "5%",
              width: "320px",
              opacity: 0.13,
              transform: "rotate(-8deg)",
            }}
            draggable={false}
          />
          <img
            src="/Web Assets/NEW/4789ABC0-9773-40BD-A83B-9EFFAB17E947.png"
            alt=""
            className="absolute"
            style={{
              left: "35%",
              top: "0%",
              width: "400px",
              opacity: 0.12,
              transform: "rotate(7deg)",
            }}
            draggable={false}
          />
          <img
            src="/Web Assets/NEW/4789ABC0-9773-40BD-A83B-9EFFAB17E947.png"
            alt=""
            className="absolute"
            style={{
              left: "70%",
              top: "5%",
              width: "320px",
              opacity: 0.13,
              transform: "rotate(-10deg)",
            }}
            draggable={false}
          />
          <img
            src="/Web Assets/NEW/4789ABC0-9773-40BD-A83B-9EFFAB17E947.png"
            alt=""
            className="absolute"
            style={{
              left: "15%",
              top: "38%",
              width: "400px",
              opacity: 0.1,
              transform: "rotate(4deg)",
            }}
            draggable={false}
          />
          <img
            src="/Web Assets/NEW/4789ABC0-9773-40BD-A83B-9EFFAB17E947.png"
            alt=""
            className="absolute"
            style={{
              left: "48%",
              top: "28%",
              width: "600px",
              opacity: 0.16,
              transform: "rotate(0deg)",
            }}
            draggable={false}
          />
          <img
            src="/Web Assets/NEW/4789ABC0-9773-40BD-A83B-9EFFAB17E947.png"
            alt=""
            className="absolute"
            style={{
              left: "75%",
              top: "38%",
              width: "400px",
              opacity: 0.1,
              transform: "rotate(8deg)",
            }}
            draggable={false}
          />
          <img
            src="/Web Assets/NEW/4789ABC0-9773-40BD-A83B-9EFFAB17E947.png"
            alt=""
            className="absolute"
            style={{
              left: "5%",
              top: "70%",
              width: "320px",
              opacity: 0.13,
              transform: "rotate(-8deg)",
            }}
            draggable={false}
          />
          <img
            src="/Web Assets/NEW/4789ABC0-9773-40BD-A83B-9EFFAB17E947.png"
            alt=""
            className="absolute"
            style={{
              left: "35%",
              top: "78%",
              width: "400px",
              opacity: 0.12,
              transform: "rotate(7deg)",
            }}
            draggable={false}
          />
          <img
            src="/Web Assets/NEW/4789ABC0-9773-40BD-A83B-9EFFAB17E947.png"
            alt=""
            className="absolute"
            style={{
              left: "70%",
              top: "70%",
              width: "320px",
              opacity: 0.13,
              transform: "rotate(-10deg)",
            }}
            draggable={false}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto pt-20 md:pt-32 pb-20 md:pb-32 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white text-center">
            Empowering Businesses and
            <br className="hidden md:block" />
            Individuals to Work Smarter, Not Harder
          </h1>
          <p className="mb-10 text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-medium max-w-2xl mx-auto text-center">
            AALI Consulting helps organizations and professionals streamline
            operations, enhance efficiency, and achieve growth through smart
            systems, strategy, and structure.
          </p>
          <div className="flex flex-row justify-center gap-6 mb-4">
            <a
              href="/contact-us"
              className="px-10 py-3 rounded-full font-semibold text-white shadow-lg text-lg"
              style={{
                background: "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
                boxShadow: "0 4px 16px 0 rgba(59,130,246,0.18)",
                border: "none",
              }}
            >
              Book Now
            </a>
            <a
              href="#what-we-stand-for"
              className="px-10 py-3 rounded-full font-semibold bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-600 shadow-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition text-lg"
              style={{
                boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
        {/* SVG Wave */}
        <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden leading-none z-20">
          <svg
            viewBox="0 0 1440 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full h-36 md:h-[180px]"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
          >
            <path
              d="M0,100 Q360,180 720,120 Q1080,60 1440,140 L1440,180 L0,180 Z"
              className="fill-white dark:fill-gray-900 transition-colors duration-300"
            />
          </svg>
        </div>
      </section>

      {/* What We Stand For */}
      <section
        id="what-we-stand-for"
        className="bg-white dark:bg-gray-900 py-16 px-4 transition-colors duration-300"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          What We Stand For
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg">
          We believe good consulting is more than advice — it’s about giving
          people tools that work. That’s why every service we offer is built on
          three core principles:
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
          const ThreeStepProcess =
            require("../components/Pages/ThreeStep").default;
          return <ThreeStepProcess heading="" steps={steps} />;
        })()}
      </section>

      {/* Who We Help */}
      <section className="bg-white dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Who We Help
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg">
          From Students to CEOs — We’re Built for Every Stage of Growth. Proudly
          Supporting Clients Across Canada and the United States.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {WHO_WE_HELP.map((w) => (
            <div
              key={w.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 dark:border-gray-700"
            >
              <div className="font-semibold text-lg mb-2 text-center text-gray-900 dark:text-white">
                {w.title}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-center text-sm">
                {w.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose AALI Consulting */}
      <section className="bg-white dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Why Choose AALI Consulting
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg">
          At AALI Consulting, you're not just getting accountants or planners —
          you're gaining partners who understand your goals, culture, and
          community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {WHY_CHOOSE.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[32px] shadow-md transition-colors duration-300"
              style={{ minHeight: 340 }}
            >
              <div className="mb-8">
                {React.cloneElement(item.icon, {
                  className:
                    "w-20 h-20 mx-auto text-blue-600 dark:text-blue-400",
                })}
              </div>
              <div className="font-bold text-2xl mb-2 text-gray-900 dark:text-white">
                {item.title}
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-lg">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 px-4 text-center bg-gray-100">
        <div className="absolute inset-0">
          <img
            src="/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Let’s Talk About Your Goals
          </h2>
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="/contact-us"
              className="bg-blue-600 text-white px-8 py-3 rounded-full shadow hover:bg-blue-700 font-semibold transition"
            >
              Book A Consultation
            </a>
            <a
              href="/contact-us"
              className="bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-600 px-8 py-3 rounded-full shadow font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Contact Us
            </a>
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
            answer:
              "AALI Consulting combines personalized attention, local expertise, and strategic insights to deliver clear, actionable solutions for every client.",
          },
          {
            question: "Who do you work with?",
            answer:
              "We work with individuals, families, entrepreneurs, newcomers, expats, and nonprofits across Canada and the United States.",
          },
          {
            question: "How do your consulting services work?",
            answer:
              "We start with a consultation to understand your needs, then tailor our services to help you achieve your goals with clarity and confidence.",
          },
          {
            question: "Where are your services available?",
            answer:
              "Our services are available across Canada and the United States, both in-person and virtually.",
          },
        ];
        return <FAQSection heading="Frequently Asked Questions" faqs={faqs} />;
      })()}

      <Footer />
    </div>
  );
}
