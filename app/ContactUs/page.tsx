import React from "react";
import ContactUs from "../components/ContactUs";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

export const metadata = {
  alternates: {
    canonical: "/contactus", // Resolves to https://aaliconsulting.ca/contactus
  },
};
