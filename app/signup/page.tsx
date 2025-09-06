"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

// Optional: if you want to read email from the URL (?email=...)
import { useSearchParams } from "next/navigation";
import Header from "../components/Header";

// A small eye icon for the password toggle (no external deps)
const EyeIcon: React.FC<{ open?: boolean; className?: string }> = ({ open, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    {open ? (
      <>
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a20.76 20.76 0 0 1 5.06-6.94" />
        <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a20.77 20.77 0 0 1-3.87 5.16" />
        <path d="M1 1l22 22" />
      </>
    )}
  </svg>
);

// Country codes to populate the select (short list; extend as needed)
const COUNTRY_CODES = [
  { code: "+1", label: "CA" },

];

export default function SignUpAdditionalData() {
  const searchParams = useSearchParams();
  const emailFromQuery = searchParams?.get("email") ?? undefined;

  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [countryCode, setCountryCode] = useState("+34");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const email = useMemo(() => emailFromQuery ?? "silo@uikit.com", [emailFromQuery]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: replace with your submission logic (API call, mutation, etc.)
    alert(
      JSON.stringify(
        { email, fullName, dob, phone: `${countryCode} ${phone}`, password: "••••••••" },
        null,
        2
      )
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Content */}
      <section className="mx-auto grid max-w-xl place-items-center px-4 py-16">
        <div className="mb-6 grid place-items-center">
          <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-amber-500/10 text-amber-600 ring-1 ring-amber-200">
            {/* simple key icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M21 2l-9 9" />
              <path d="M7 13l-4 4v3h3l4-4" />
              <circle cx="15" cy="9" r="3" />
            </svg>
          </div>

          <h1 className="text-center text-2xl font-semibold tracking-tight">
            Email address verified
          </h1>
          <p className="mt-1 text-center text-sm text-slate-500">
            Continue setting up your account
          </p>
        </div>

        <form onSubmit={onSubmit} className="w-full space-y-4">
          {/* Email (read only) */}
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              disabled
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-600 outline-none ring-sky-200 transition focus:ring-2 disabled:cursor-not-allowed"
              aria-readonly
            />
          </div>

          {/* Full name */}
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label htmlFor="fullName" className="block text-sm font-medium">
                Full name <span className="text-rose-600">*</span>
              </label>
            </div>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Enter full name"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-200 transition focus:ring-2"
            />
          </div>

          {/* Date of birth */}
          <div>
            <label htmlFor="dob" className="mb-1 block text-sm font-medium">
              Date of birth
            </label>
            <input
              id="dob"
              type="text"
              inputMode="numeric"
              placeholder="MM / DD / YYYY"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-200 transition placeholder:text-slate-400 focus:ring-2"
            />
          </div>

          {/* Mobile number */}
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium">
              Mobile number
            </label>
            <div className="flex gap-2">
              <select
                aria-label="Country code"
                className="h-10 w-28 shrink-0 rounded-lg border border-slate-300 bg-white px-2 text-sm outline-none ring-sky-200 transition focus:ring-2"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code}>{`${c.code}  ${c.label}`}</option>
                ))}
              </select>
              <input
                id="phone"
                type="tel"
                placeholder="XXX XX XX XX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-200 transition placeholder:text-slate-400 focus:ring-2"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 pr-10 text-sm outline-none ring-sky-200 transition placeholder:text-slate-400 focus:ring-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-0 grid w-10 place-items-center text-slate-500 hover:text-slate-700"
              >
                <EyeIcon open={showPassword} className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
          >
            Sign Up
          </button>

          {/* Fine print */}
          <p className="px-2 text-center text-xs leading-relaxed text-slate-500">
            By clicking <span className="font-medium">Sign Up</span>, you agree to our <Link href="#" className="underline">Terms</Link>. Learn how we collect,
            use and share your data in our <Link href="#" className="underline">Privacy Policy</Link> and how we use cookies
            and similar technology in our <Link href="#" className="underline">Cookies Policy</Link>. You may receive SMS
            Notifications from us and can opt out any time.
          </p>

          <div className="pt-2 text-center text-sm">
            <Link href="#" className="text-slate-600 underline hover:text-slate-900">
              Back to Sign up
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
