import React from 'react';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  

  return (
    <div className="font-sans text-gray-800">
      <Header />

      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;