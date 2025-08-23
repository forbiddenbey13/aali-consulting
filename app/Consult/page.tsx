import React from 'react';

// The ConsultationPage component for the "Book Your Free Consultation" page.
// This component displays a form for users to book a consultation.
const ConsultationPage: React.FC = () => {

  return (
    // Main container with a clean, modern font and background.
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      
      {/* Navbar section - Reusing the same structure as the About page for consistency. */}
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="text-xl md:text-2xl font-bold text-blue-700">AAUConsulting</div>
        <ul className="hidden md:flex space-x-4 md:space-x-6 text-sm">
          <li><a href="/" className="hover:text-blue-700 transition duration-300">Home</a></li>
          <li><a href="/services" className="hover:text-blue-700 transition duration-300">Services</a></li>
          <li><a href="/resources" className="hover:text-blue-700 transition duration-300">Resources</a></li>
          <li><a href="/contact" className="hover:text-blue-700 transition duration-300">Contact Us</a></li>
          <li><a href="/about" className="hover:text-blue-700 transition duration-300">About</a></li>
        </ul>
        <div className="space-x-2 md:space-x-3 text-sm hidden md:block">
          <button className="border border-blue-600 text-blue-600 px-3 md:px-4 py-1 rounded-full hover:bg-blue-50 transition duration-300">Sign Up</button>
          <button className="bg-blue-600 text-white px-3 md:px-4 py-1 rounded-full hover:bg-blue-700 transition duration-300">Log In</button>
        </div>
      </nav>

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
      <footer className="bg-gray-900 text-white py-16 px-10">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Connect with us</h4>
            <p className="mb-4">Follow us on social media or subscribe to our newsletter.</p>
            <div className="flex space-x-4 text-lg">
              <a href="#">Fb</a><a href="#">In</a><a href="#">Tw</a><a href="#">Ln</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">About</h4>
            <ul><li>Team</li><li>Mission</li><li>Careers</li><li>Blog</li></ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul><li>Tax Consulting</li><li>Planning</li><li>Accounting</li><li>Systems</li></ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul><li>Email</li><li>Phone</li><li>Support</li><li>Live Chat</li></ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConsultationPage;
