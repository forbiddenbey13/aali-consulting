"use client";
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import { useEffect, useState } from 'react';

const heroImages = [
  '/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png',
  '/Web Assets/NEW/Hero Section/Business-Culture-in-Canada-Evolved-Metrics-1-1024x565.jpg',
  '/Web Assets/NEW/Hero Section/CH-23b-meeting-935x530px.jpg.webp',
  '/Web Assets/NEW/Hero Section/f0065b10-07c3-47d4-bf72-adaf37d2c25a-scaled.jpeg-1.webp',
  '/Web Assets/NEW/Hero Section/gettyimages-1488522537-640x640.jpg',
  '/Web Assets/NEW/Hero Section/premium_photo-1661761077411-d50cba031848.jpeg',
  '/Web Assets/NEW/Hero Section/TPC-exterior-building-b.jpg',
];

const HomePage: React.FC = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const detailedSections = [
    {
      title: 'Personal & Corporate Tax',
      text: `We provide tailored tax strategies that help individuals and businesses minimize liabilities, maximize deductions, and stay fully compliant with CRA regulations. From annual returns and corporate filings to complex tax planning, we ensure your tax responsibilities are handled accurately and on time, every time.`,
      img1: '/Web Assets/NEW/Personal & Corporate Tax/istockphoto-1485471985-612x612.jpg',
      img2: '/Web Assets/NEW/Personal & Corporate Tax/istockphoto-1685996049-612x612.jpg',
      reverse: false,
    },
    {
      title: 'Strategic Financial Planning',
      text: `Our strategic financial planning services are designed to help you achieve your life and business goals with clarity and confidence. Whether you’re saving for the future, managing risk, or planning for retirement, we deliver actionable insights and custom strategies.`,
      img1: '/Web Assets/NEW/Strategic Financial Planning/istockphoto-1313070791-612x612.jpg',
      reverse: true,
    },
    {
      title: 'Bookkeeping & Accounting',
      text: 'We offer precise and dependable accounting and bookkeeping services that keep your business financially organized and audit-ready. From daily transaction tracking to monthly financial reporting, our solutions help you stay compliant and make informed business decisions.',
      img1: '/Web Assets/NEW/Accounting & Bookkeeping/premium_photo-1679496829715-364b4a17e087.jpeg',
      reverse: false,
    },
    {
      title: 'Systems Implementation',
      text: 'We implement cloud-based accounting systems and automation tools that streamline your financial operations and improve accuracy. Our end-to-end service includes system selection, setup, integration, training, and ongoing support.',
      img1: '/Web Assets/NEW/Systems Implementation/11.jpg.webp',
      reverse: true,
    },
  ];

  const resources = [
    'Stay Informed: 2025 Tax Filing Updates from the CRA',
    'Wealth Planning Strategies for Canadians, 2025',
    'Bookkeeping 101: Keeping Your Finances in Order',
    'Top 5 Accounting Software Solutions for Canadian SMBs'
  ];

  return (
    <div className="font-sans text-gray-800 bg-[var(--color-background-light)]">
      <Header />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-10 py-24 overflow-hidden" style={{ minHeight: 400 }}>
        {/* Slideshow background */}
        <div className="absolute inset-0 w-full h-full z-0">
          {heroImages.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={`Hero Slide ${idx + 1}`}
              className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${slide === idx ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionProperty: 'opacity' }}
            />
          ))}
          <div className="absolute inset-0 bg-blue-900/40" />
        </div>
        {/* Hero content */}
        <div className="max-w-3xl z-10 relative flex flex-col items-center">
          <h1 className="text-5xl font-extrabold leading-tight !text-white drop-shadow-2xl">
            All Things <span className="font-bold !text-white drop-shadow-2xl">Tax</span>, <span className="font-bold !text-white drop-shadow-2xl">Finance</span> & <span className="font-bold !text-white drop-shadow-2xl">Business</span> — Simplified
          </h1>
          <p className="mt-6 text-lg !text-white drop-shadow-2xl">
            Helping individuals and businesses thrive with trusted financial guidance.
          </p>
          <div className="mt-8 space-x-4">
            <a href="/Consult" className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 inline-block">Book Now</a>
            <a href="/AboutUs" className="bg-white/80 border border-gray-300 text-gray-800 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 inline-block">Learn More</a>
          </div>
        </div>
      </section>


      {/* What We Do */}
      <section id="what-we-do" className="px-6 md:px-10 py-24 bg-white">
        <h2 className="text-3xl font-bold mb-14 text-center text-gray-900">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Card 1 */}
          <div className="card-modern flex flex-col justify-between h-full">
            <h3 className="mb-5">Personal & Corporate Tax</h3>
            <p className="text-gray-600 text-base mb-7 flex-grow">Expert tax solutions tailored to optimize returns and ensure compliance for both individuals and businesses.</p>
            <a href="/P&C" className="btn-secondary mt-auto">Learn More</a>
          </div>
          {/* Card 2 */}
          <div className="card-modern flex flex-col justify-between h-full">
            <h3 className="mb-5">Strategic Financial Planning</h3>
            <p className="text-gray-600 text-base mb-7 flex-grow">Customized strategies to help you grow, protect and manage your wealth with confidence.</p>
            <a href="/SFP" className="btn-secondary mt-auto">Learn More</a>
          </div>
          {/* Card 3 */}
          <div className="card-modern flex flex-col justify-between h-full">
            <h3 className="mb-5">Bookkeeping & Accounting</h3>
            <p className="text-gray-600 text-base mb-7 flex-grow">Accurate, reliable and financial reporting to keep your business organized and audit-ready.</p>
            <a href="/B&A" className="btn-secondary mt-auto">Learn More</a>
          </div>
          {/* Card 4 */}
          <div className="card-modern flex flex-col justify-between h-full">
            <h3 className="mb-5">Systems Implementation</h3>
            <p className="text-gray-600 text-base mb-7 flex-grow">Seamless setup and integration of accounting systems to streamline operations and improve financial efficiency.</p>
            <a href="/SSBR" className="btn-secondary mt-auto">Learn More</a>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {detailedSections.map((section, index) => (
        <section
          key={index}
          className={`flex flex-col md:flex-row gap-12 items-center px-6 md:px-10 py-20 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} ${section.reverse ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="md:w-1/2">
            <div className="max-w-lg mx-auto text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">{section.title}</h3>
              <p className="mb-8 text-gray-700 text-lg">{section.text}</p>
              <a href={
                section.title === 'Personal & Corporate Tax' ? '/P&C' :
                section.title === 'Strategic Financial Planning' ? '/SFP' :
                section.title === 'Bookkeeping & Accounting' ? '/B&A' :
                section.title === 'Systems Implementation' ? '/SSBR' :
                '#'
              } className="btn-primary">View more</a>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center">
            <img
              src={section.img1}
              alt={section.title}
              className="rounded-xl shadow-lg mb-4 w-full max-w-md h-96 aspect-[4/3] object-cover mx-auto"
            />
            {section.img2 && (
              <img
                src={section.img2}
                alt={section.title + ' alt'}
                className="rounded-xl shadow-lg w-full max-w-md h-96 aspect-[4/3] object-cover mx-auto"
              />
            )}
          </div>
        </section>
      ))}

      {/* Resources */}
      <section id="resources" className="px-6 md:px-10 py-24 bg-gray-50">
        <h2 className="text-3xl font-bold mb-12 text-center">Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {resources.map((title, i) => (
            <div key={i} className="card-modern p-0 flex flex-col h-full">
              <img src={
                i === 0 ? '/Web Assets/NEW/Resources/360_F_330941253_b3Dor4GncjCMVPvw8QM4CsyUymtgvvMM.jpg' :
                i === 1 ? '/Web Assets/NEW/Resources/Clearline-CPA-How-to-Sign-Up-for-CRA-My-Business-Account-scaled.jpg' :
                i === 2 ? '/Web Assets/NEW/Resources/istockphoto-1480239160-612x612.jpg' :
                i === 3 ? '/Web Assets/NEW/Resources/istockphoto-185066026-612x612.jpg' :
                `/resource${i + 1}.jpg`
              } alt={title} className="w-full h-40 object-cover rounded-t-xl" />
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-medium text-gray-900 mb-4">{title}</h4>
                <a href="#" className="btn-secondary mt-auto">Learn more</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Clarity. Confidence. Growth.</h2>
        <p className="text-gray-600 mb-10 text-lg">Your financial future starts with one smart decision.</p>
        <a href="/Consult" className="btn-primary">Book Now</a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;