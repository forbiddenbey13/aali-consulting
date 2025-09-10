import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a2233] pt-16 pb-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left: CTA and Social */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="font-bold text-3xl md:text-5xl mb-6 !text-white">
              Let&apos;s Talk About Your Financial Goals!
            </h2>
            <p className="mb-8 max-w-md text-base md:text-lg !text-gray-300">
              Whether you&apos;re filing taxes, launching a business, or planning ahead — we&apos;re here to help. Book your free consultation today and take the first step with clarity and confidence.
            </p>
            <a
              href="/ContactUs"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-700 focus:bg-blue-700 transition"
            >
              Book Consultation
            </a>
          </div>

          <div className="flex space-x-4 mt-6">
            {/* Social icons inherit currentColor */}
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 focus:text-blue-400 transition-colors"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33V21.877C18.343 21.128 22 16.991 22 12"></path>
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 focus:text-blue-400 transition-colors"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5v-9h3v9zM6.5 8.72A1.75 1.75 0 1 1 6.5 5.22a1.75 1.75 0 0 1 0 3.5zM20 19h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38V19h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V19z"></path>
              </svg>
            </a>

            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 focus:text-blue-400 transition-colors"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161a6.53 6.53 0 0 0-.855 3.17c0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543 13.94 13.94 0 0 0 7.548 23.75C16.606 23.75 21.557 16.237 21.557 9.75c0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"></path>
              </svg>
            </a>

            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 focus:text-blue-400 transition-colors"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344 2.698 2.324 2.465 3.436 2.406 4.717 2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.292 2.393 1.272 3.373.98.98 2.092 1.213 3.373 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.373-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.292-2.393-1.272-3.373-.98-.98-2.092-1.213-3.373-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Links */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-12">
          <div>
            <h4 className="font-bold text-lg mb-4 !text-white">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="!text-gray-200 hover:text-blue-300 focus:text-blue-300 transition-colors">Home</Link></li>
              <li><Link href="/#what-we-do" className="!text-gray-200 hover:text-blue-300 focus:text-blue-300 transition-colors">Services</Link></li>
              <li><Link href="/#resources" className="!text-gray-200 hover:text-blue-300 focus:text-blue-300 transition-colors">Resources</Link></li>
              <li><Link href="/AboutUs" className="!text-gray-200 hover:text-blue-300 focus:text-blue-300 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 !text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/P&C" className="!text-gray-200 hover:text-blue-300 focus:text-blue-300 transition-colors">Personal &amp; Corporate Tax</Link></li>
              <li><Link href="/SFP" className="!text-gray-200 hover:text-blue-300 focus:text-blue-300 transition-colors">Financial Planning</Link></li>
              <li><Link href="/B&A" className="!text-gray-200 hover:text-blue-300 focus:text-blue-300 transition-colors">Bookkeeping &amp; Accounting</Link></li>
              <li><Link href="/SSBR" className="!text-gray-200 hover:text-blue-300 focus:text-blue-300 transition-colors">Systems Implementation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 !text-white">Contact</h4>
            <ul className="space-y-2 !text-gray-300">
              <li>(647)-281-2406</li>
              <li>aaliconsulting@ymail.com</li>
              <li>Canada, Brampton, ON</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-16 pt-6 text-center !text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} AALI Consulting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
