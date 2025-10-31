import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/webcultivatelogo.png"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        
        {/* === TOP SECTION (Brand vs. Socials) === */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12 sm:mb-16">
          {/* Brand Info (Left) */}
          <div className="space-y-4 sm:space-y-6 md:w-1/2 lg:w-2/5">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/Logo/logo.png" 
                alt="Cloud Graphics Logo" 
                className="h-14 sm:h-16 w-auto hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                  Cloud Graphics
                </h3>
                <p className="text-[10px] text-gray-400 tracking-widest">AMRAVATI</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              🎨 A passionate creative studio crafting stunning visual experiences that elevate brands and captivate audiences worldwide.
            </p>
          </div>

          {/* Social Media (Right) */}
<div className="md:w-1/2 lg:w-auto">
  <h5 className="text-sm font-semibold mb-3 text-gray-300 md:text-right">Follow Us</h5>
  <div className="flex gap-3 md:justify-end">
    {[
      { icon: <FaFacebookF />, color: "hover:bg-blue-600 hover:shadow-blue-500/50" },
      { icon: <FaInstagram />, color: "hover:bg-pink-600 hover:shadow-pink-500/50" },
      { icon: <FaXTwitter />, color: "hover:bg-sky-500 hover:shadow-sky-400/50" },
      { icon: <FaLinkedinIn />, color: "hover:bg-blue-700 hover:shadow-blue-600/50" },
    ].map((item, index) => (
      <a
        key={index}
        href="#"
        className={`w-11 h-11 sm:w-12 sm:h-12 bg-gray-800 rounded-xl flex items-center justify-center 
        hover:scale-110 transition-all duration-300 shadow-md ${item.color} group`}
      >
        <span className="text-white text-xl group-hover:scale-110 transition-transform">
          {item.icon}
        </span>
      </a>
    ))}
  </div>
</div>
        </div>


        {/* === MIDDLE 4-COLUMN GRID (Links, Services, Contact, Map) === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-white flex items-center gap-2">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 text-gray-400">
              <li>
                <Link to="/" className="hover:text-violet-400 transition-all flex items-center gap-2 group hover:translate-x-1">
                  <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition-all">→</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-violet-400 transition-all flex items-center gap-2 group hover:translate-x-1">
                  <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition-all">→</span>
                  <span>About Me</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-violet-400 transition-all flex items-center gap-2 group hover:translate-x-1">
                  <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition-all">→</span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-violet-400 transition-all flex items-center gap-2 group hover:translate-x-1">
                  <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition-all">→</span>
                  <span>My Work</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-violet-400 transition-all flex items-center gap-2 group hover:translate-x-1">
                  <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition-all">→</span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-white flex items-center gap-2">
              Services
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 text-gray-400">
              <li>
                <a href="#" className="hover:text-fuchsia-400 transition-all flex items-center gap-2 group hover:translate-x-1">
                  <span className="text-fuchsia-400 opacity-0 group-hover:opacity-100 transition-all">→</span>
                  <span>Brand Identity</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fuchsia-400 transition-all flex items-center gap-2 group hover:translate-x-1">
                  <span className="text-fuchsia-400 opacity-0 group-hover:opacity-100 transition-all">→</span>
                  <span>Digital Design</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fuchsia-400 transition-all flex items-center gap-2 group hover:translate-x-1">
                  <span className="text-fuchsia-400 opacity-0 group-hover:opacity-100 transition-all">→</span>
                  <span>UI/UX Design</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fuchsia-400 transition-all flex items-center gap-2 group hover:translate-x-1">
                  <span className="text-fuchsia-400 opacity-0 group-hover:opacity-100 transition-all">→</span>
                  <span>Photography</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fuchsia-400 transition-all flex items-center gap-2 group hover:translate-x-1">
                  <span className="text-fuchsia-400 opacity-0 group-hover:opacity-100 transition-all">→</span>
                  <span>Video Production</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-white flex items-center gap-2">
              Contact
            </h4>
            <ul className="space-y-4 sm:space-y-4 text-gray-400 text-sm sm:text-base">
              <li>
                <a href="#" className="flex items-start gap-3 group hover:text-white transition-all hover:translate-x-1">
                  <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-xl border border-indigo-500/20 rounded-lg flex items-center justify-center group-hover:border-indigo-500/50 group-hover:scale-110 transition-all flex-shrink-0">
                     <span className="text-lg text-center"><FaMapMarkerAlt className="inline " /></span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-0.5">Location</div>
                    <span> Shivaji Square, Near Sauji Dhaba Akoli road, Sai nagar Amravati, Maharashtra 444607</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:hello@cloudgraphics.com" className="flex items-start gap-3 group hover:text-white transition-all hover:translate-x-1">
                  <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-xl border border-violet-500/20 rounded-lg flex items-center justify-center group-hover:border-violet-500/50 group-hover:scale-110 transition-all flex-shrink-0">
                    <span className="text-lg"><FaEnvelope className="inline" /></span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-0.5">Email</div>
                    <span className="break-all">cloudservices27@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-3 group hover:text-white transition-all hover:translate-x-1">
                  <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-xl border border-fuchsia-500/20 rounded-lg flex items-center justify-center group-hover:border-fuchsia-500/50 group-hover:scale-110 transition-all flex-shrink-0">
                    <span className="text-lg"><FaMobileAlt className="inline" /></span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-0.5">Phone</div>
                    <span>+91 9307641746</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          
          {/* === MAP COLUMN (Height fixed) === */}
          <div className="flex flex-col">
            <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-white flex items-center gap-2">
              Visit Us
            </h4>
            <div className="w-full flex-1 bg-slate-900/80 rounded-2xl overflow-hidden shadow-2xl border border-violet-500/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.444919042942!2d77.74044537458234!3d20.894412192380674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6bb252ee3027d%3A0x8bcfbf0424a4bfb5!2sCloud%20Ghaphics!5e0!3m2!1sen!2snl!4v1761648411297!5m2!1sen!2snl"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cloud Graphics Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* === Symmetrical Bottom Bar === */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
            
            {/* Copyright (Left) */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2025</span>
              <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-semibold">Cloud Graphics Amravati</span>
            </div>
            
            {/* Credit Badge (Center on desktop, Top on mobile) */}
<div className="flex flex-col items-center text-center px-4 py-2 text-xs text-gray-400">
  {/* Circle Logo */}
  <div className="w-[70px] h-[70px] rounded-full overflow-hidden flex items-center justify-center">
    <img
      src={logo}
      alt="WebCultivate Logo"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text Line */}
  <p className="mt-3 text-[12px] sm:text-sm">
    Designed and Developed by{" "}
    <a
      href="https://webcultivate.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-semibold"
    >
      WebCultivate
    </a>
  </p>
</div>


            {/* Legal Links (Right) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors hover:underline decoration-violet-400">
                Privacy Policy
              </a>
              <span className="text-gray-700 hidden sm:block">•</span>
              <a href="#" className="hover:text-white transition-colors hover:underline decoration-fuchsia-400">
                Terms of Service
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer