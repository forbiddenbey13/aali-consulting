import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  const detailedSections = [
    {
      title: 'Personal & Corporate Tax',
      text: 'We provide tailored tax strategies that help individuals and businesses minimize liabilities, maximize deductions, and stay fully compliant with CRA regulations. From annual returns and corporate filings to complex tax planning, we ensure your tax responsibilities are handled accurately and on time, every time.',
      img1: '/image1.jpg',
      img2: '/image2.jpg',
      reverse: false,
    },
    {
      title: 'Strategic Financial Planning',
      text: 'Our strategic financial planning services are designed to help you achieve your life and business goals with clarity and confidence. Whether you’re saving for the future, managing risk, or planning for retirement, we deliver actionable insights and custom strategies.',
      img1: '/image3.jpg',
      reverse: true,
    },
    {
      title: 'Accounting & Bookkeeping',
      text: 'We offer precise and dependable accounting and bookkeeping services that keep your business financially organized and audit-ready. From daily transaction tracking to monthly financial reporting, our solutions help you stay compliant and make informed business decisions.',
      img1: '/accountandbookkeeping.jpeg',
      reverse: false,
    },
    {
      title: 'Systems Implementation',
      text: 'We implement cloud-based accounting systems and automation tools that streamline your financial operations and improve accuracy. Our end-to-end service includes system selection, setup, integration, training, and ongoing support.',
      img1: '/image3.jpg',
      reverse: true,
    },
  ];

  const resources = [
    'Stay Informed: 2025 Tax Filing Updates from the CRA',
    'Wealth Planning Strategies for Canadians, 2025',
    'Bookkeeping 101: Keeping Your Finances in Order',
    'Top 5 Accounting Software Solutions for Canadian SMBs'
  ];

  return (
    <div className="font-sans text-gray-800">
      <Header />

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-24 bg-blue-50 relative overflow-hidden">
        <div className="max-w-xl z-10">
          <h1 className="text-5xl font-extrabold leading-tight text-blue-900">
            Smart Tax &<br />Financial Solutions
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Helping individuals and businesses thrive with trusted financial guidance.
          </p>
          <div className="mt-8 space-x-4">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800">Book Now</button>
            <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-100">Learn More</button>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:ml-10">
          <img src="/illustration-placeholder.png" alt="Illustration" className="w-[28rem] drop-shadow-xl" />
        </div>
      </section>

      {/* What We Do */}
      <section className="px-10 py-24 bg-white">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {["Personal & Corporate Tax", "Strategic Financial Planning", "Bookkeeping & Accounting", "Systems Implementation"].map((title, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-3 text-blue-800">{title}</h3>
              <p className="text-gray-600 text-sm mb-4">Expert guidance tailored to your financial needs.</p>
              <a href="#" className="text-blue-600 hover:underline font-medium">Learn more</a>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Sections */}
      {detailedSections.map((section, index) => (
        <section
          key={index}
          className={`grid md:grid-cols-2 gap-8 items-center px-10 py-16 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
        >
          {!section.reverse && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
              <p className="mb-6 text-gray-700">{section.text}</p>
              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">View more</button>
            </div>
          )}
          <div>
            <img src={section.img1} alt={section.title} className="rounded-lg shadow mb-4" />
            {section.img2 && <img src={section.img2} alt={section.title + ' alt'} className="rounded-lg shadow" />}
          </div>
          {section.reverse && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
              <p className="mb-6 text-gray-700">{section.text}</p>
              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">View more</button>
            </div>
          )}
        </section>
      ))}

      {/* Resources */}
      <section className="px-10 py-24 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center">Resources</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {resources.map((title, i) => (
            <div key={i} className="bg-white shadow rounded overflow-hidden">
              <img src={`/resource${i + 1}.jpg`} alt={title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="font-medium text-gray-900">{title}</h4>
                <a href="#" className="text-blue-600 mt-2 inline-block hover:underline">Learn more</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Clarity. Confidence. Growth.</h2>
        <p className="text-gray-600 mb-8">Your financial future starts with one smart decision.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 shadow">Book Now</button>
      </section>

      {/* Footer */}
      <Footer /> 
    </div>
  );
};

export default HomePage;