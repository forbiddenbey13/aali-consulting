import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

// The ConsultationPage component for the "Book Your Free Consultation" page.
// This component displays a form for users to book a consultation.
const ConsultationPage: React.FC = () => {

  return (
    // Main container with a clean, modern font and background.
    <div className="font-sans text-gray-800 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">

      {/* Navbar section - Reusing the same structure as the About page for consistency. */}
      <Header />

      {/* Main content section for the consultation form. */}
      <main className="flex justify-center items-center py-16 md:py-24">
        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-lg w-full max-w-2xl transition-colors duration-300">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 dark:text-blue-400 mb-4">
            Book Your Free Consultation
          </h1>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Get expert guidance tailored to your personal or business finances in a free 30-minute
            consultation. We'll assess your current situation, identify key opportunities, and recommend a
            focused, strategic path forward — with your goals in mind.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultationPage;
