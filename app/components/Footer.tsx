import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E293B] text-gray-300 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
        {/* Left Section: CTA */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold !text-white mb-6 leading-snug">
            Let’s Talk About Your <br className="hidden md:block" /> Financial Goals!
          </h2>
          <p className="!text-white text-base leading-relaxed mb-8 max-w-md">
            Whether you’re filing taxes, launching a business, or planning ahead —
            we’re here to help. Book your free consultation today and take the
            first step with clarity and confidence.
          </p>
          <a
            href="/ContactUs"
            className="inline-block bg-blue-600 hover:bg-blue-700 !text-white font-medium px-7 py-3 rounded-full shadow-md transition"
          >
            Book Consultation
          </a>

          {/* Socials */}
          <div className="flex items-center space-x-4 mt-8">
            <a
              href="https://www.linkedin.com/company/aaliconsulting/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <svg
                width="26"
                height="26"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5v-9h3v9zM6.5 8.72A1.75 1.75 0 1 1 6.5 5.22a1.75 1.75 0 0 1 0 3.5zM20 19h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38V19h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V19z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Navigation */}
          <div>
            <h4 className="!text-white font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/#what-we-do" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link href="/AboutUs" className="hover:text-blue-400 transition">Newcomers: Work & Business</Link></li>
              <li><Link href="/AboutUs" className="hover:text-blue-400 transition">Newcomers: Money & Life Setup</Link></li>
              <li><Link href="/AboutUs" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/ContactUs" className="hover:text-blue-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="!text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/TaxService" className="hover:text-blue-400 transition">Tax Services (Personal & Corporate)</Link></li>
              <li><Link href="/Bookkeeping&Accounting" className="hover:text-blue-400 transition">Accounting & Bookkeeping</Link></li>
              <li><Link href="/StrategicPlanning" className="hover:text-blue-400 transition">Strategic Financial Planning</Link></li>
              <li><Link href="/Systems&TechnologyImplementation" className="hover:text-blue-400 transition">Technology Solutions</Link></li>
              <li><Link href="/CFOAdvisory&Governance" className="hover:text-blue-400 transition">CFO Advisory & Governance</Link></li>
              <li><Link href="/Disability&LifePlanning" className="hover:text-blue-400 transition">Disability & Life Planning</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="!text-white font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>(647)-281-2406</li>
              <li>
                <a
                  href="mailto:info@aaliconsulting.ca"
                  className=" hover:underline"
                >
                  info@aaliconsulting.ca
                </a>
              </li>
              <li>Canada, Brampton, ON</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-16 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} AALI Consulting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
