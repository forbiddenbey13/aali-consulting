"use client";
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useEffect, useState } from 'react';
import HeroSection from '../components/Pages/Hero';
import WhatWeOffer from '../components/Pages/WhatWeOffer';
import WhyChooseUs from '../components/Pages/WhyChooseUs';
import ServiceAccordion from '../components/Pages/ServiceAccordian';
import ThreeStepProcess from '../components/Pages/ThreeStep';
import ResourcesSection from '../components/Pages/Resources';
import CallToAction from '../components/Pages/CallToAction';
import FAQSection from '../components/Pages/FAQ';



const HomePage: React.FC = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

const offerCards = [
  {
    title: "Personal Taxes (Individuals & Families)",
    description:
      "Simple, accurate personal tax filing that maximizes credits, deductions, and refunds—covering students, families, retirees, newcomers, and cross-border compliance confidently.",
    link: "/ContactUs",
  },
  {
    title: "Corporate Taxes (SMEs & NFP & Charities)",
    description:
      "Comprehensive corporate tax strategies including T2 returns, GST/HST compliance, salary vs. dividends, OpCo/HoldCo planning, and full CRA audit readiness for businesses at every stage of growth.",
    link: "/ContactUs",
  },
  
  
  {
    title: "Life & Estate Tax Planning",
    description:
      "Expert guidance through separation, divorce, estates, non-resident filings, and final returns—simplifying complex transitions with clear, compassionate, compliant, and forward-looking tax strategies that protect your future.",
    link: "/ContactUs",
  },

];
 const faqs = [
    {
      question:
        "Do you only file my taxes, or do you also help with planning?",
      answer: `We do both. Filing is just the starting point—our real value comes from tax planning. We help you identify deductions, time your RRSP/TFSA/FHSA contributions, plan family or corporate income, and structure decisions to reduce tax over time, not just this year`,
    },
    {
      question: "Can you handle complex situations like cross-border taxes or rental properties?",
      answer: `
Yes. We regularly handle cross-border (Canada ↔ U.S.) filings, non-resident returns, and multiple-property rental income. Whether you earn abroad, own investment property, or are moving between countries, we ensure your filings stay compliant and optimized under both CRA and IRS rules.`,
    },
    {
      question: "What documents do I need to get started?",
      answer: `We’ll provide a simple checklist tailored to your situation, but most clients start with:
T-slips (T4, T5, T2202, etc.)
RRSP and investment statements
Receipts for medical, childcare, and tuition expenses
Property or business income records (if applicable)
Prior-year return and Notice of Assessment
We make uploading easy through our secure client portal—no paper, no confusion.`,
    },
    {
      question: "How do you support me if the CRA contacts me?",
      answer: `
If the CRA reaches out, we’re your first call. We review their request, prepare the necessary documentation, and handle communication on your behalf. Whether it’s a pre-assessment query or a full review, we make sure your response is complete, timely, and supported by proper evidence—so you stay confident and protected.`,
    },
  ];

    const heroImages = [
  '/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png',
  '/Web Assets/NEW/Hero Section/Business-Culture-in-Canada-Evolved-Metrics-1-1024x565.jpg',
  '/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp',
  ];
    const whyChooseData = {
    image: "/Web Assets/Images/NEW/Tax Services Page/Corporate Tax Page/istockphoto-1129810557-612x612.jpg",
    title: "Why Choose AALI Consulting For Taxes",
    paragraphs: [
      `At AALI Consulting, taxes aren’t just about filing forms—they’re about building financial confidence. We bring clarity and precision to every stage of your tax life cycle, from personal and corporate filings to estate, disability, and cross-border planning. Our approach blends compliance with strategy, helping you minimize tax burdens, protect wealth, and uncover opportunities that others often miss.`,
      `

      Whether you’re a newcomer, family, or business owner, we take the time to understand your full financial picture. With transparent pricing, CRA-ready documentation, and year-round guidance, AALI Consulting transforms complex tax rules into clear, step-by-step strategies that keep you secure, compliant, and confident about the road ahead.
      `,
    ],
  };

  


const processSteps = [
  {
    number: "1",
    title: "Upload Your Documents",
    text: "The interaction of multiple elements in a system to produce an effect greater than the sum of their individual effects.",
  },
  {
    number: "2",
    title: "We Prepare & Optimize",
    text: "A fundamental change in approach or underlying assumptions that leads to a new way of thinking or operating.",
  },
  {
    number: "3",
    title: "You Review & File Confidently",
    text: "A new technology, product, or service that emerges into the existing market and creates a new one.",
  },
];

const resourcesData = [
  {
    img: "/Web Assets/NEW/Resources/360_F_330941253_b3Dor4GncjCMVPvw8QM4CsyUymtgvvMM.jpg",
    title: "Personal Income Tax",
    link: "https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html?utm_source=chatgpt.com",
  },
  {
    img: "/Web Assets/NEW/Resources/Clearline-CPA-How-to-Sign-Up-for-CRA-My-Business-Account-scaled.jpg",
    title: "Preparing to Do Your Taxes",
    link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/educational-programs/preparing-your-taxes.html?utm_source=chatgpt.com",
  },
  {
    img: "/Web Assets/NEW/Resources/istockphoto-1480239160-612x612.jpg",
    title: "All Deductions, Credits & Expenses",
    link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/deductions-credits-expenses.html?utm_source=chatgpt.com",
  },
  {
    img: "/Web Assets/NEW/Resources/istockphoto-185066026-612x612.jpg",
    title: "20 Popular Canadian Tax Deductions & Credits for 2024",
    link: "https://turbotax.intuit.ca/tips/popular-canadian-tax-benefits-deductions-and-credits-in-2023-14180?srsltid=AfmBOoqNYGAkeul_dKIjNGZU_c2w8s0Eo1wKAGrqSfSv6H6PcVs6FxXx&utm_source=chatgpt.com",
  },
];



  return (
    <div className="font-sans text-gray-800 bg-white">
      <Header />

      <HeroSection
        images={heroImages}
        title="Simple, Stress-Free Taxes — For Every Stage of Life & Business"
        subtitle="From first-time student returns to cross-border corporate filings, we make taxes clear, compliant, and optimized."
        buttonText="Get Started"
        buttonLink="/ContactUs"
      />

      {/* What We Do */}
      {/* What We Do Section */}
<WhatWeOffer heading="Who This Service Is For" cards={offerCards} />
<section className="bg-white px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          {/* Left column: Heading and description, vertically centered */}
          <div className="flex flex-col justify-center h-full md:col-span-1">
            <h2 className="text-4xl font-bold mb-4">Who This<br /> Service Is For</h2>
            <p className="text-gray-700 text-lg max-w-xs">
              Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.


            </p>
          </div>
          {/* Right: 3x3 grid of images, some with rotation */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8 justify-items-center">
            {[
              { img: "/Web Assets/Images/NEW/Homepage/Clients We Serve (Homepage)/Professionals & Contractors.png" },
              { img: "/Web Assets/Images/NEW/Homepage/Clients We Serve (Homepage)/SMEs.png", rotate: "" },
              { img: "/Web Assets/Images/NEW/Homepage/Clients We Serve (Homepage)/Systems & Technology.png",  },
              { img: "/Web Assets/Images/NEW/Homepage/Clients We Serve (Homepage)/Newcomers to Canada.png", rotate: "" },
          
            ].map((group, i) => (
              <div
                key={i}
                className={`bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center w-[180px] h-[180px] md:w-[200px] md:h-[200px] ${group.rotate}`}
                style={{ overflow: "hidden" }}
              >
                <img
                  src={group.img}
                  alt=""
                  className="object-contain w-[140px] h-[140px] md:w-[160px] md:h-[160px]"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

<WhyChooseUs
        image={whyChooseData.image}
        title={whyChooseData.title}
        paragraphs={whyChooseData.paragraphs}
      />
      <ThreeStepProcess heading="Our 3-Step Process" steps={processSteps} />




 <CallToAction
        heading="Simple. Compliant. Optimized."
        subheading="Whether you’re filing your very first return or managing complex corporate taxes — we’ll guide you step by step.”"
        buttonText="Book Now"
        buttonLink="/ContactUs"
      />




{/* FAQs */}
    {/* ✅ FAQs — Updated Design */}
      <FAQSection heading="Frequently Asked Questions" faqs={faqs} />


      <Footer />
    </div>
  );
};


export default HomePage;