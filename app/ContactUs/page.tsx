import React from 'react';
import ContactUs from '../components/ContactUs';

const HomePage: React.FC = () => {
  

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-700">AAUConsulting</div>
        <ul className="hidden md:flex space-x-6 text-sm">
          <li><a href="#" className="hover:text-blue-700">Home</a></li>
          <li><a href="#" className="hover:text-blue-700">Services</a></li>
          <li><a href="#" className="hover:text-blue-700">Resources</a></li>
          <li><a href="ContactUs/" className="hover:text-blue-700">Contact Us</a></li>
          <li><a href="/AboutUs" className="hover:text-blue-700">About</a></li>
        </ul>
        <div className="space-x-3 text-sm hidden md:block">
          <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50">Sign Up</button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Log In</button>
        </div>
      </nav>

      <ContactUs />

      {/* Footer */}
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

export default HomePage;