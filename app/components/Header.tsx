import React from 'react';

const HomePage: React.FC = () => {
  

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-700">AAUConsulting</div>
        <ul className="hidden md:flex space-x-6 text-sm">
          <li><a href="/" className="hover:text-blue-700">Home</a></li>
          <li><a href="#" className="hover:text-blue-700">Services</a></li>
          <li><a href="#" className="hover:text-blue-700">Resources</a></li>
          <li><a href="/ContactUs" className="hover:text-blue-700">Contact Us</a></li>
          <li><a href="/AboutUs" className="hover:text-blue-700">About</a></li>
        </ul>
        <div className="space-x-3 text-sm hidden md:block">
          <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50">Sign Up</button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Log In</button>
        </div>
      </nav>

      
    </div>
  );
};

export default HomePage;