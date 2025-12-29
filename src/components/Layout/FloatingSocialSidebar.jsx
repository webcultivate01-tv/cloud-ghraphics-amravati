import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const FloatingSocialSidebar = () => {
  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 z-50 flex flex-col gap-2 items-start hidden md:flex">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-start w-12 h-12
             bg-purple-700 text-white rounded-r-lg
             hover:bg-[#1877F2] hover:w-36
             transition-all duration-300 shadow-lg
             overflow-hidden relative"
      >
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center absolute left-0 min-w-[3rem]">
          <FaFacebookF className="w-6 h-6" />
        </div>

        {/* Text */}
        <span
          className="absolute right-4 opacity-0 group-hover:opacity-100
                   transition-opacity font-bold whitespace-nowrap delay-100"
        >
          Facebook
        </span>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/cloudgraphics01?igsh=MTluczlmOWRkdXA3eg=="
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-start w-12 h-12
             bg-purple-700 text-white rounded-r-lg
             hover:bg-[#E4405F] hover:w-36
             transition-all duration-300 shadow-lg
             overflow-hidden relative"
      >
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center absolute left-0">
          <FaInstagram className="w-6 h-6" />
        </div>

        {/* Text */}
        <span
          className="absolute right-4 opacity-0 group-hover:opacity-100
                   transition-opacity font-bold whitespace-nowrap delay-100"
        >
          Instagram
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919307641746"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-start w-12 h-12
             bg-purple-700 text-white rounded-r-lg
             hover:bg-[#25D366] hover:w-36
             transition-all duration-300 shadow-lg
             overflow-hidden relative"
      >
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center absolute left-0 min-w-[3rem]">
          <FaWhatsapp className="w-6 h-6" />
        </div>

        {/* Text */}
        <span
          className="absolute right-4 opacity-0 group-hover:opacity-100
                   transition-opacity font-bold whitespace-nowrap delay-100"
        >
          WhatsApp
        </span>
      </a>
    </div>
  );
};

export default FloatingSocialSidebar;
