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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-600">
          <path d="M10.5 1.875a.75.75 0 0 0-.75.75v14.437l-3.31-3.31a.75.75 0 1 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 0 0-1.06-1.06l-3.31 3.31V2.625a.75.75 0 0 0-.75-.75Z" />
          <path d="M12 22.5a.75.75 0 0 0 .75-.75v-1.196a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v1.196a.75.75 0 0 0 .75.75h1.5Z" />
          <path fillRule="evenodd" d="M12.556 17.391c-1.121 0-2.227-.12-3.31-.351A3.003 3.003 0 0 1 6 15.632v-1.162c0-1.353.766-2.58 1.954-3.197a7.907 7.907 0 0 0 2.276-.759v-.96l-1.428-1.428a.75.75 0 0 1 0-1.06L9.622 7.5l1.428 1.428V8.125a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v.803l1.428-1.428a.75.75 0 1 1 1.06 1.06L14.078 9.689v.96c.74.205 1.458.486 2.146.842c1.157.608 1.854 1.834 1.854 3.197v1.162a3.003 3.003 0 0 1-3.245 1.409c-1.083.231-2.189.35-3.31.35Zm-3.328-3.958a.75.75 0 0 1 .05-1.06L12 9.422l2.722 2.722a.75.75 0 0 1-1.06 1.06l-2.206-2.206-2.206 2.206a.75.75 0 0 1-1.06-.05Z" clipRule="evenodd" />
        </svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-600">
          <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282A21.417 21.417 0 0 0 15 15.698v-2.031c0-.785.337-1.514.9-2.031l2.409-2.409a4.5 4.5 0 0 0-5.882-6.19c.89-.153 1.777-.294 2.666-.405a.75.75 0 1 0-.142-1.498c-1.129.141-2.251.294-3.369.464a1.05 1.05 0 0 1-.822-.888C11.391 1.725 11.233.75 10.875.75a.75.75 0 0 0-.75.75v.5c-.754 0-1.498.05-2.23.15-.411.056-.821.12-1.229.191a.75.75 0 0 0-.198 1.488c.458.058.917.118 1.373.18.513.068 1.027.139 1.54.214a4.5 4.5 0 0 0-5.264 5.922c1.332 1.332 2.5 2.112 3.82 2.913 1.258.784 2.052 1.826 2.052 3.033v2.03c-.046.784-.11 1.572-.189 2.36a18.675 18.675 0 0 1-2.486 2.549 1.024 1.024 0 0 0-.255.484l-.098.245.02.015.021.015a.75.75 0 0 0 .726 0l.02-.015.021-.015.099-.244a1.024 1.024 0 0 1 .255-.484 18.78 18.78 0 0 0 2.486-2.549c.079-.788.143-1.576.189-2.36v-2.031c0-1.637-.643-2.92-1.56-3.837a4.502 4.502 0 0 0 5.09-2.918 4.502 4.502 0 0 0-4.04-6.046c-.754-.122-1.51.045-2.203.491a.75.75 0 0 0-.17-.116c-.328-.194-.654-.388-.981-.581a.75.75 0 0 0-.693.189A8.915 8.915 0 0 0 6.564 5.92c-.225.26-.453.518-.682.775a.75.75 0 1 0 1.055 1.06c.228-.256.456-.514.681-.775.297-.344.598-.683.903-1.015ZM10.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    // Main container with a modern font and a light gray background.
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      
      {/* Navbar section */}
      <Header />

      {/* Hero section with a background gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-white px-4 md:px-10 py-16 md:py-24">
        {/* Grid for two-column layout on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Left-side text content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-4">
              Learn More About Us!
            </h1>
            <p className="text-gray-700 max-w-lg mx-auto md:mx-0">
              Take a look inside our team and view our mission and vision.
            </p>
            <button className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-xl shadow-lg hover:bg-blue-800 transition duration-300">
              Learn More
            </button>
          </div>
          
          {/* Right-side image and logo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src="https://placehold.co/500x500/DDE7F6/0E1C36?text=AALI+Consulting+%26+Associates"
              alt="AALI Consulting & Associates"
              className="w-full max-w-sm rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Who We Are section */}
      <section className="px-4 md:px-10 py-16 md:py-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">Who We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Left-side text block */}
          <div className="text-gray-700 space-y-4">
            <p>
              AALI Consulting & Associates was founded to make financial guidance
              accessible and understandable for individuals and small businesses across
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
              src="https://placehold.co/500x350/E6F0F9/0E1C36?text=Our+Team"
              alt="Our Team"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Vision and Mission section */}
      <section className="px-4 md:px-10 py-16 md:py-24 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Our Vision */}
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 max-w-sm mx-auto">
              To be the trusted partner individuals and businesses turn to for clear, expert financial and strategic guidance across Canada.
            </p>
          </div>
          {/* Our Mission */}
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 max-w-sm mx-auto">
              To simplify complex financial and business challenges through personalized, transparent, and results-driven consulting services.
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
