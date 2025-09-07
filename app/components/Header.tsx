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
      <nav className="flex items-center justify-between px-4 py-3 shadow-md bg-white sticky top-0 z-50 md:px-10">
        <div className="flex items-center">
          <img src="/Web Assets/Logo Design/E537C7B6-C30C-48F9-A4EC-C69A8C5C07B1.png" alt="AALI Consulting Logo" className="h-16 w-auto mr-3 md:h-20" />
          <div className="text-lg font-bold text-blue-700 md:text-xl">AALI CONSULTING & ASSOCIATES</div>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-4 text-sm">
            <li><a href="/" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-sm">Home</a></li>
            <li><a href="/#what-we-do" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-sm">Services</a></li>
            <li><a href="/#resources" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-sm">Resources</a></li>
            <li><a href="/AboutUs" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-sm">About Us</a></li>
            <li><a href="/ContactUs" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-sm">Contact Us</a></li>
          </ul>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-2">
            <ul className="flex flex-col items-center space-y-2 text-sm">
              <li><a href="/" className="block w-full text-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200">Home</a></li>
              <li><a href="/#what-we-do" className="block w-full text-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200">Services</a></li>
              <li><a href="/#resources" className="block w-full text-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200">Resources</a></li>
              <li><a href="/AboutUs" className="block w-full text-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200">About Us</a></li>
              <li><a href="/ContactUs" className="block w-full text-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default HomePage;