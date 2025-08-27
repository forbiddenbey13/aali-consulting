import React from 'react';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  

  return (
    <div className="font-sans text-gray-800">
      <Header />

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