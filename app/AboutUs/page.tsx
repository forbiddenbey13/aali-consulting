"use client";
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// The main AboutUsPage component.
// It displays information about the company, including its vision, mission, and values.
const AboutUsPage: React.FC = () => {

  // Data for the "Why Choose AALI?" section.
  const reasons = [
    {
      title: "Personalized Attention",
      text: "We take the time to understand your unique situation and goals.",
      icon: (
        // Inline SVG for the personalized attention icon.
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-600">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.73 0-5.385-.68-7.798-1.996a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Strategic Insights",
      text: "With deep expertise in tax, accounting, and business strategy, we help you make informed decisions that support sustainable growth.",
      icon: (
        // Inline SVG for the strategic insights icon.
        <img src="Assets/About Me Section/10789361.png" alt="Insights Icon" className="w-12 h-12 text-blue-600" />
      ),
    },
    {
      title: "Transparent Communication",
      text: "No jargon, no surprises—just clear, honest advice you can rely on every step of the way.",
      icon: (
        // Inline SVG for the transparent communication icon.
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-600">
          <path d="M7.875 14.25a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h2.625a.75.75 0 0 1 .75.75v1.5ZM7.5 17.25a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h2.625a.75.75 0 0 1 .75.75v1.5ZM7.875 10.5a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h2.625a.75.75 0 0 1 .75.75v1.5ZM19.5 7.5a.75.75 0 0 1-.75.75H13.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v1.5ZM19.5 10.5a.75.75 0 0 1-.75.75H13.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v1.5ZM19.5 13.5a.75.75 0 0 1-.75.75H13.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v1.5ZM19.5 16.5a.75.75 0 0 1-.75.75H13.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v1.5ZM12.75 3a.75.75 0 0 0-1.5 0v.195a4.78 4.78 0 0 0-1.745.867.75.75 0 0 0-.256.787l.385.925A1.5 1.5 0 0 1 9.407 7.5H4.5A2.25 2.25 0 0 0 2.25 9.75v5.25c0 1.242.827 2.25 1.875 2.25H7.5a.75.75 0 0 0 .75.75h-.375a.75.75 0 0 0 0 1.5h.375c.621 0 1.125.504 1.125 1.125v.375a.75.75 0 0 0 1.5 0v-.375c0-.621.504-1.125 1.125-1.125h.375a.75.75 0 0 0 0-1.5h-.375a.75.75 0 0 0 .75-.75h2.25A2.25 2.25 0 0 0 21.75 15V9.75A2.25 2.25 0 0 0 19.5 7.5h-4.907a1.5 1.5 0 0 1-1.319-1.897l.385-.925a.75.75 0 0 0-.256-.787 4.78 4.78 0 0 0-1.745-.867V3Z" />
        </svg>
      ),
    },
    {
      title: "Locally Rooted, Nationally Aware",
      text: "Proudly based in Canada, we bring a local understanding with awareness of broader trends and regulations that affect you.",
      icon: (
        // Inline SVG for the map icon.
        <img src="Assets/About Me Section/north-america-silhouette-2993fc-md.png" alt="Map Icon" className="w-12 h-12 text-blue-600" />
      ),
    },
  ];

  return (
    // Main container with a modern font and a light gray background.
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      
      {/* Navbar section */}
      <Header />

      {/* Hero section with a background gradient */}
      <section className="relative overflow-hidden px-4 md:px-10 py-10 md:py-16 flex items-center justify-center min-h-[300px]">
        {/* Dynamic background (animated overlay) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/Web Assets/NEW/Hero Section/0F658223-E6EE-4686-854D-0F20371DDBFE.png"
            alt="Dynamic background"
            className="w-full h-full object-cover absolute inset-0 opacity-70 animate-fadein"
            style={{ animation: 'fadein 8s infinite alternate' }}
          />
          <div className="absolute inset-0 bg-blue-900/40" />
        </div>
        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
          <img
            src="/Web Assets/Logo Design/aali-transparent-logo.png"
            className="mx-auto mb-2 w-64 md:w-80 h-auto object-contain"
            style={{ display: 'block' }}
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-2xl mb-2 tracking-tight">
            <span className="font-black">Learn More About Us!</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6 drop-shadow-lg font-bold">
            Take a look inside our team and view our mission and vision.
          </p>
          <a
            href="#vision-mission"
            className="mt-2 bg-white/90 border border-gray-300 text-blue-900 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 font-bold inline-block"
          >
            Learn More
          </a>
        </div>
        <style jsx>{`
          @keyframes fadein {
            0% { opacity: 0.7; }
            100% { opacity: 1; }
          }
        `}</style>
      </section>

      {/* Who We Are section */}
      <section className="px-4 md:px-10 py-16 md:py-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">Who We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Left-side text block */}
          <div className="text-gray-700 space-y-3">
            <p>
              AALI Consulting & Associates was founded to make financial guidance
              accessible and understandable for individuals and 
              small businesses across
              Canada.
            </p>
            <p>
              We believe everyone—regardless of background or business size—deserves
              clear, professional support when navigating taxes, bookkeeping, and
              financial planning. Our team is built on integrity, simplicity, and strategic
              support, empowering clients to make confident financial decisions with
              confidence. Whether you’re an entrepreneur, or growing your own
              company, we’re here to help you thrive financially—every step of the way.
            </p>
          </div>
          
          {/* Right-side image */}
          <div>
            <img
              src="/Web Assets/NEW/About Us/a-group-of-business-people-standing-together-free-png.png"
              alt="A group of business people standing together"
            />
          </div>
        </div>
      </section>

      {/* Vision and Mission section */}
      <section
        id="vision-mission"
        className="px-2 md:px-10 py-8 md:py-12 flex justify-center items-center bg-transparent"
      >
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4 md:gap-0">
          {/* Vision Card */}
          <div className="flex-1 bg-blue-100 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none md:rounded-br-none rounded-b-none md:rounded-b-3xl p-8 flex flex-col items-center border border-gray-300">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">Our Vision</h3>
            <p className="text-gray-700 text-lg text-center">
              To be the trusted partner individuals and businesses turn to<br />
              for clear, expert financial and strategic guidance<br />
              across Canada.
            </p>
          </div>
          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 mx-0" />
          {/* Mission Card */}
          <div className="flex-1 bg-blue-100 rounded-b-3xl md:rounded-r-3xl md:rounded-tl-none md:rounded-bl-none rounded-t-none md:rounded-t-3xl p-8 flex flex-col items-center border border-gray-300">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-700 text-lg text-center">
              To simplify complex financial and business challenges through personalized, transparent,<br />
              and results-driven consulting services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose AALI? section */}
      <section className="px-4 md:px-10 py-16 md:py-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">Why Choose AALI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-md">
              <div className="mb-4">
                {reason.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer from user's request */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
