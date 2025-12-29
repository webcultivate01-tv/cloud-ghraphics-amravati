import React from "react";
import { Link } from "react-router-dom";
import cloudlogo from "../../assets/logo.webp";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="tracking-wide bg-slate-950 px-8 sm:px-12 pt-12 pb-6 ">
      {/* === Grid Section === */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 xl:gap-16">
        {/* Logo + About + Socials */}
        <div className="flex flex-col min-[1200px]:max-w-sm max-w-lg w-full">
          <Link to="/">
            <img src={cloudlogo} alt="Cloud Graphics Logo" className="w-40" />
          </Link>

          <div className="mt-2">
            <p className="text-slate-400 leading-relaxed text-sm">
              A creative studio crafting stunning visual experiences that
              elevate brands and captivate audiences worldwide.
            </p>
          </div>
          <ul className="mt-6 flex space-x-5">
            {/* Facebook */}
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-500 hover:text-violet-700 transition-colors duration-300"
              >
                <FaFacebookF size={32} />
              </a>
            </li>

            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com/cloudgraphics01?igsh=MTluczlmOWRkdXA3eg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-500 hover:text-violet-700 transition-colors duration-300"
              >
                <FaInstagram size={32} />
              </a>
            </li>

            {/* WhatsApp */}
            <li>
              <a
                href="https://wa.me/919307641746"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-500 hover:text-violet-700 transition-colors duration-300"
              >
                <FaWhatsapp size={32} />
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="max-lg:min-w-[140px]">
          <h4 className="text-white font-semibold text-base relative">
            Services
          </h4>
          <ul className="mt-6 space-y-4">
            {[
              "Brand Identity",
              "Social Media Graphics",
              "Marketing & Print Design",
              "Product Label & Sticker Design",
              "Packaging Design",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to="#"
                  className="hover:text-slate-500 text-slate-400 text-sm font-normal"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="max-lg:min-w-[140px]">
          <h4 className="text-white font-semibold text-base relative">
            Quick Links
          </h4>
          <ul className="mt-6 space-y-4">
            {[
              { name: "Home", to: "/" },
              { name: "About Us", to: "/about" },
              { name: "Services", to: "/services" },
              { name: "Portfolio", to: "/portfolio" },
              { name: "Contact", to: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="hover:text-slate-500 text-slate-400 text-sm font-normal"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Map Section */}
        <div className="max-lg:min-w-[140px]">
          <h4 className="text-white font-semibold text-base relative">
            Visit Us
          </h4>
          <div className="mt-2 w-full h-25 sm:h-60 lg:h-full rounded-2xl overflow-hidden shadow-md border border-slate-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.444919042942!2d77.74044537458234!3d20.894412192380674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6bb252ee3027d%3A0x8bcfbf0424a4bfb5!2sCloud%20Ghaphics!5e0!3m2!1sen!2sin!4v1761648411297!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Cloud Graphics Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-10 mb-6 border-gray-600" />

      {/* Bottom Bar */}
      <div className="flex flex-wrap max-md:flex-col gap-4">
        <ul className="md:flex md:space-x-6 max-md:space-y-2">
          {["Terms of Service", "Privacy Policy", "Security"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to="#"
                  className="hover:text-slate-500 text-slate-400 text-sm font-normal"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
        {/* <p className="text-slate-400 text-sm md:ml-auto">
          Developed By <a href="https://webcultivate.com"> WebCultivate</a>
        </p> */}
        <p className="text-slate-400 text-sm md:ml-auto">
          © Cloud Graphics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
