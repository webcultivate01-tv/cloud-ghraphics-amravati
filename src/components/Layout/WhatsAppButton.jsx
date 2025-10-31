import React from "react";
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919307641746" // 🟢 Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-15 right-6 bg-green-500 hover:bg-green-600
       text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce z-50"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
