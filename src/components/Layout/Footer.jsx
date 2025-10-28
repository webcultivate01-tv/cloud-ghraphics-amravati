import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Cloud Graphics
            </h3>
            <p className="text-gray-400 text-sm">
              A passionate freelance designer creating stunning visual experiences that elevate brands and captivate audiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                📘
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-linear-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                📷
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-linear-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                💼
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  My Work
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Digital Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Photography
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Video Production
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>Amravati, Maharashtra, India</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📧</span>
                <span>hello@cloudgraphics.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📱</span>
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Cloud Graphics Amravati. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
