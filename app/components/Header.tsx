"use client";

import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="backdrop-blur-md bg-white/80 shadow-xl border-b-0 sticky top-0 z-50 transition-all relative">
        {/* Subtle border underline */}
        <div className="border-b border-gray-200"></div>
        <div className="flex items-center justify-between px-4 md:px-10 py-2">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 py-2">
            <div className="bg-white shadow rounded-full p-1 border border-gray-300 flex items-center justify-center">
              <img
                src="/Web Assets/Logo Design/E537C7B6-C30C-48F9-A4EC-C69A8C5C07B1.png"
                alt="AALI Consulting Logo"
                className="h-9 md:h-11 w-auto rounded-full"
                style={{ maxHeight: '44px' }}
              />
            </div>
            <span className="hidden md:inline font-extrabold text-xl tracking-widest text-gray-900">AALI Consulting</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex gap-3 lg:gap-8 text-base font-bold tracking-widest uppercase">
              {[
                { href: '/', label: 'Home' },
                { href: '/#what-we-do', label: 'Services' },
                { href: '/#resources', label: 'Resources' },
                { href: '/AboutUs', label: 'About Us' },
                { href: '/ContactUs', label: 'Contact Us' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative px-4 py-2 rounded-lg text-gray-800 hover:text-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400
                      before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-1 before:w-0 before:h-0.5 before:bg-blue-700 before:rounded-full before:transition-all before:duration-300 hover:before:w-8"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center ml-6">
            <a
              href="/ContactUs"
              className="bg-blue-600 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-blue-700 transition-all duration-200 border border-blue-600"
            >
              Book Now
            </a>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none p-2 rounded-lg hover:bg-blue-100 transition"
              aria-label="Open menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 shadow-lg border-b border-gray-200 animate-fade-in-down">
            <ul className="flex flex-col items-center space-y-2 py-4 text-base font-semibold tracking-wider uppercase">
              <li>
                <a href="/" className="w-11/12 text-center px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/#what-we-do" className="w-11/12 text-center px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">Services</a>
              </li>
              <li>
                <a href="/#resources" className="w-11/12 text-center px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">Resources</a>
              </li>
              <li>
                <a href="/AboutUs" className="w-11/12 text-center px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="/ContactUs" className="w-11/12 text-center px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default HomePage;