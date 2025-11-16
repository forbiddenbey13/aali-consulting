"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between relative w-full">
        
        {/* LEFT — Logo fully flush left */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Web Assets/Logo Design/07DB2623-BB8E-4BE0-A1F0-919309538C75.png"
              alt="AALI Consulting"
              width={75}
              height={75}
              className="object-contain"
            />
            <span className="text-lg font-semibold text-gray-900">
              AALI Consulting
            </span>
          </Link>
        </div>

        {/* CENTER — perfectly centered nav */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700 z-50">

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("services")}
              className="flex items-center gap-1 hover:text-blue-600 transition focus:outline-none"
            >
              Services <span>▾</span>
            </button>
            {openMenu === "services" && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-56 z-[60]">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/P&C"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setOpenMenu(null)}
                    >
                      Tax Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Bookkeeping&Accounting"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setOpenMenu(null)}
                    >
                      Bookkeeping
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/SFP"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setOpenMenu(null)}
                    >
                      Financial Planning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/SSBR"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setOpenMenu(null)}
                    >
                      Technology Solutions
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Newcomers Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("newcomers")}
              className="flex items-center gap-1 hover:text-blue-600 transition focus:outline-none"
            >
              Newcomers & Expats <span>▾</span>
            </button>
            {openMenu === "newcomers" && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-56 z-[60]">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/NCW&E"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setOpenMenu(null)}
                    >
                      Work & Business Setup
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/NMB&LF"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setOpenMenu(null)}
                    >
                      Money & Life Setup
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link href="/AboutUs" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/ContactUs" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* RIGHT — spacer for balance */}
        <div className="w-[150px] md:w-[180px]" />
      </div>

      {/* BACKDROP BELOW DROPDOWN — closes menu on outside click */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(null)}
          className="fixed inset-0 z-40 cursor-default"
        />
      )}
    </header>
  );
};

export default Header;
