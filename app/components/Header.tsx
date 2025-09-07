import React from 'react';

const HomePage: React.FC = () => {
  

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="flex items-center">
          <img src="/Web Assets/Logo Design/E537C7B6-C30C-48F9-A4EC-C69A8C5C07B1.png" alt="AALI Consulting Logo" className="h-20 w-auto mr-3" />
          <div className="text-1xl font-bold text-blue-700">AALI CONSULTING & ASSOCIATES</div>
        </div>
        <div className="flex-grow flex justify-center">
          <ul className="hidden md:flex space-x-4 text-sm">
            <li><a href="/" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-sm">Home</a></li>
            <li><a href="/#what-we-do" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-sm">Services</a></li>
            <li><a href="/#resources" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-sm">Resources</a></li>
            <li><a href="/AboutUs" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-sm">About Us</a></li>
            <li><a href="/ContactUs" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-sm">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-auto"></div> {/* Empty div to balance the flex-grow of the center div */}
        {/* <div className="space-x-3 text-sm hidden md:block">
          <button className="text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200">Sign Up</button>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors duration-200">Log In</button>
        </div> */}
      </nav>

      
    </div>
  );
};

export default HomePage;