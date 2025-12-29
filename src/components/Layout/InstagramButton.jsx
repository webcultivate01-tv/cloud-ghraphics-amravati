import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramButton = () => {
  return (
    <a
      href="https://www.instagram.com/cloudgraphicsagency"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-12 right-6 
        bg-gradient-to-tr from-pink-500 to-purple-500
        text-white rounded-full p-4 shadow-lg
        hover:shadow-pink-600 hover:scale-110
        transition-all duration-300 animate-bounce
        z-50
      "
    >
      <FaInstagram size={28} />
    </a>
  );
};

export default InstagramButton;
