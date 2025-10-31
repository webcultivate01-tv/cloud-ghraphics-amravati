import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  return (
    <a
      href="tel:+919307641746" // ☎️ Replace with your phone number
      className="fixed bottom-35 right-6 bg-blue-500 hover:bg-blue-600 
      text-white p-4 rounded-full shadow-lg transition-all duration-300 
      hover:scale-110 animate-bounce z-50"
      aria-label="Call Now"
    >
      <FaPhoneAlt size={28} />
    </a>
  );
};

export default CallButton;
