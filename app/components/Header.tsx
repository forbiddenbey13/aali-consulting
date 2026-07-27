"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenMenu(null); // Close dropdowns when toggling mobile menu
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 w-full transition-colors duration-300">
      <div className="flex items-center justify-between relative w-full px-6 py-4 md:px-10">
        {/* LEFT — Logo */}
        <div className="flex-shrink-0 z-50">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/Web Assets/Logo Design/07DB2623-BB8E-4BE0-A1F0-919309538C75.png"
              alt="AALI Consulting"
              width={50}
              height={50}
              className="object-contain md:w-[75px] md:h-[75px]"
            />
            <span className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              AALI Consulting & Associates
            </span>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden z-50 flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 dark:text-white hover:text-blue-600 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* CENTER — DESKTOP NAV */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8 text-sm font-medium text-gray-700 dark:text-gray-300 z-50">
          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleMenu("services")}
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition focus:outline-none"
            >
              Services <span>▾</span>
            </button>
            {openMenu === "services" && (
              <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg w-56 z-[60]">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      href="/taxservice"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setOpenMenu(null)}
                    >
                      Tax Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bookkeepingandaccounting"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setOpenMenu(null)}
                    >
                      Bookkeeping
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/strategicplanning"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setOpenMenu(null)}
                    >
                      Financial Planning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/systemsandtechnologyimplementation"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setOpenMenu(null)}
                    >
                      Technology Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cfoadvisoryandgovernance"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setOpenMenu(null)}
                    >
                      CFO Advisory & Governance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/disabilityandlifeplanning"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setOpenMenu(null)}
                    >
                      Disability & Life Planning
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Newcomers Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleMenu("newcomers")}
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition focus:outline-none"
            >
              Newcomers & Expats <span>▾</span>
            </button>
            {openMenu === "newcomers" && (
              <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg w-56 z-[60]">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      href="/ncwande"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setOpenMenu(null)}
                    >
                      Work & Business Setup
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nmbandlf"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setOpenMenu(null)}
                    >
                      Money & Life Setup
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/aboutus"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About
          </Link>
          <Link
            href="/contactus"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </Link>
        </nav>

        {/* RIGHT — Theme Toggle & Spacer */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://portal.aaliconsulting.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition shadow-sm"
          >
            Client Portal
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-300"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <div className="w-[20px]" /> {/* Small spacer if needed */}
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col pt-24 px-6 md:hidden overflow-y-auto">
          <nav className="flex flex-col space-y-6 text-lg font-medium text-gray-800 dark:text-gray-200">
            {/* Mobile Services */}
            <div>
              <button
                onClick={() => toggleMenu("mobile-services")}
                className="flex items-center justify-between w-full border-b border-gray-100 dark:border-gray-800 pb-2"
              >
                Services{" "}
                <span>{openMenu === "mobile-services" ? "▴" : "▾"}</span>
              </button>
              {openMenu === "mobile-services" && (
                <div className="flex flex-col space-y-3 mt-3 pl-4 text-base text-gray-600 dark:text-gray-400">
                  <Link
                    href="/taxservice"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tax Services
                  </Link>
                  <Link
                    href="/bookkeepingandaccounting"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Bookkeeping
                  </Link>
                  <Link
                    href="/strategicplanning"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Financial Planning
                  </Link>
                  <Link
                    href="/systemsandtechnologyimplementation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Technology Solutions
                  </Link>
                  <Link
                    href="/cfoadvisoryandgovernance"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CFO Advisory & Governance
                  </Link>
                  <Link
                    href="/disabilityandlifeplanning"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Disability & Life Planning
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Newcomers */}
            <div>
              <button
                onClick={() => toggleMenu("mobile-newcomers")}
                className="flex items-center justify-between w-full border-b border-gray-100 dark:border-gray-800 pb-2"
              >
                Newcomers & Expats{" "}
                <span>{openMenu === "mobile-newcomers" ? "▴" : "▾"}</span>
              </button>
              {openMenu === "mobile-newcomers" && (
                <div className="flex flex-col space-y-3 mt-3 pl-4 text-base text-gray-600 dark:text-gray-400">
                  <Link
                    href="/ncwande"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Work & Business Setup
                  </Link>
                  <Link
                    href="/nmbandlf"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Money & Life Setup
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/aboutus"
              className="border-b border-gray-100 dark:border-gray-800 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contactus"
              className="border-b border-gray-100 dark:border-gray-800 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="https://portal.aaliconsulting.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Client Portal
              </Link>
              <Link
                href="/contactus"
                className="block w-full text-center bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* BACKDROP BELOW DROPDOWN (Desktop) */}
      {openMenu && !mobileMenuOpen && (
        <div
          onClick={() => setOpenMenu(null)}
          className="fixed inset-0 z-30 cursor-default"
        />
      )}
    </header>
  );
};

export default Header;
