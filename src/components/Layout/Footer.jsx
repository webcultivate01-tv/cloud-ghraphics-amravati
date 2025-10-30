import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/webcultivatelogo.png"

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
              <a 
                href="#" 
                className="w-11 h-11 sm:w-12 sm:h-12 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center hover:scale-110 hover:-rotate-6 transition-all duration-300 shadow-lg hover:shadow-violet-500/50 group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-11 h-11 sm:w-12 sm:h-12 bg-linear-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-pink-500/50 group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-11 h-11 sm:w-12 sm:h-12 bg-linear-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center hover:scale-110 hover:-rotate-6 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 group"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-11 h-11 sm:w-12 sm:h-12 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>


        {/* === MIDDLE 4-COLUMN GRID (Links, Services, Contact, Map) === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-white flex items-center gap-2">
              <span className="text-2xl">🔗</span>
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
              <span className="text-2xl">🎨</span>
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
              <span className="text-2xl">💬</span>
              Contact
            </h4>
            <ul className="space-y-4 sm:space-y-4 text-gray-400 text-sm sm:text-base">
              <li>
                <a href="#" className="flex items-start gap-3 group hover:text-white transition-all hover:translate-x-1">
                  <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-xl border border-indigo-500/20 rounded-lg flex items-center justify-center group-hover:border-indigo-500/50 group-hover:scale-110 transition-all flex-shrink-0">
                    <span className="text-lg">📍</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-0.5">Location</div>
                    <span>Amravati, Maharashtra</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:hello@cloudgraphics.com" className="flex items-start gap-3 group hover:text-white transition-all hover:translate-x-1">
                  <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-xl border border-violet-500/20 rounded-lg flex items-center justify-center group-hover:border-violet-500/50 group-hover:scale-110 transition-all flex-shrink-0">
                    <span className="text-lg">📧</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-0.5">Email</div>
                    <span className="break-all">hello@cloudgraphics.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-3 group hover:text-white transition-all hover:translate-x-1">
                  <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-xl border border-fuchsia-500/20 rounded-lg flex items-center justify-center group-hover:border-fuchsia-500/50 group-hover:scale-110 transition-all flex-shrink-0">
                    <span className="text-lg">📱</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-0.5">Phone</div>
                    <span>+91 98765 43210</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          
          {/* === MAP COLUMN (Height fixed) === */}
          <div className="flex flex-col">
            <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-white flex items-center gap-2">
              <span className="text-2xl">📍</span>
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