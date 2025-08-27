import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

// The ConsultationPage component for the "Book Your Free Consultation" page.
// This component displays a form for users to book a consultation.
const ConsultationPage: React.FC = () => {

  return (
    // Main container with a clean, modern font and background.
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      
      {/* Navbar section - Reusing the same structure as the About page for consistency. */}
      <Header />

      {/* Main content section for the consultation form. */}
      <main className="flex justify-center items-center py-16 md:py-24">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg w-full max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-4">
            Book Your Free Consultation
          </h1>
          <p className="text-center text-gray-700 mb-8 leading-relaxed">
            Get expert guidance tailored to your personal or business finances in a free 30-minute
            consultation. We'll assess your current situation, identify key opportunities, and recommend a
            focused, strategic path forward — with your goals in mind.
          </p>
          
          {/* The consultation form itself. */}
          <form className="space-y-6">
            {/* Input for Name */}
            <div className="relative">
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder=" "
                className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              />
              <label 
                htmlFor="name" 
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Name
              </label>
            </div>
            
            {/* Input for Email */}
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder=" "
                className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              />
              <label 
                htmlFor="email" 
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Email
              </label>
            </div>

            {/* Input for Type of Service */}
            <div className="relative">
              <input 
                type="text" 
                id="service" 
                name="service" 
                placeholder=" "
                className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              />
              <label 
                htmlFor="service" 
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Type of Service
              </label>
            </div>
            
            {/* Input for Preferred Time & Date */}
            <div className="relative">
              <input 
                type="text" 
                id="time" 
                name="time" 
                placeholder=" "
                className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              />
              <label 
                htmlFor="time" 
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Preferred Time & Date
              </label>
            </div>
            
            {/* Input for Additional Notes (Optional) */}
            <div className="relative">
              <textarea 
                id="notes" 
                name="notes" 
                rows={4}
                placeholder=" "
                className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none peer"
              ></textarea>
              <label 
                htmlFor="notes" 
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Additional Notes (Optional)
              </label>
            </div>
            
            {/* Submit button */}
            <button 
              type="submit" 
              className="w-full bg-blue-700 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-800 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultationPage;
