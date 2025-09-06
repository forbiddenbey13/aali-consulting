import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
    return(
<footer className="bg-[#282c34] text-white py-20 px-10">
        <div className="grid md:grid-cols-2 gap-16 text-sm">
          <div className="md:col-span-1">
            <h1 className="font-bold text-6xl leading-tight mb-6">Let's Talk About Your Financial Goals!</h1>
            <p className="mb-8 max-w-md text-base">Whether you're filing taxes, launching a business, or planning ahead -- we're here to help. Book your free consultation today and take the first step with clarity and confidence.</p>
            <div className="flex space-x-3 text-base">
              <span>Fb</span>
              <span>In</span>
              <span>Tw</span>
              <span>Ln</span>
            </div>
          </div>
          <div className="md:col-span-1 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-lg mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#what-we-do">Services</Link></li>
                <li><Link href="/#resources">Resources</Link></li>
                <li><Link href="/AboutUs">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/P&C">Personal & Corporate Tax</Link></li>
                <li><Link href="/SFP">Financial Planning</Link></li>
                <li><Link href="/B&A">Bookkeeping & Accounting</Link></li>
                <li><Link href="/SSBR">Systems Implementation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>(647)-281-2406</li>
                <li>aaliconsulting@ymail.com</li>
                <li>Canada, Brampton, ON</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default HomePage;