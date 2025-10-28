import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6 lg:px-12 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-50 group">
          <img 
            src="/Logo/logo.png" 
            alt="Cloud Graphics Logo" 
            className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-110"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Cloud Graphics
            </h1>
            <p className="text-[10px] text-gray-400 tracking-widest">AMRAVATI</p>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-gray-300">
          <Link to="/" className="hover:text-white transition-colors duration-300 font-medium">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition-colors duration-300 font-medium">
            About
          </Link>
          <Link to="/services" className="hover:text-white transition-colors duration-300 font-medium">
            Services
          </Link>
          <Link to="/work" className="hover:text-white transition-colors duration-300 font-medium">
            Our Work
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors duration-300 font-medium">
            Contact
          </Link>
        </div>
        
        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 font-semibold text-sm">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-slate-950/98 backdrop-blur-xl lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link 
            to="/" 
            onClick={closeMobileMenu}
            className="text-white text-3xl font-bold hover:text-violet-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={closeMobileMenu}
            className="text-white text-3xl font-bold hover:text-fuchsia-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link 
            to="/services" 
            onClick={closeMobileMenu}
            className="text-white text-3xl font-bold hover:text-indigo-400 transition-colors duration-300"
          >
            Services
          </Link>
          <Link 
            to="/work" 
            onClick={closeMobileMenu}
            className="text-white text-3xl font-bold hover:text-violet-400 transition-colors duration-300"
          >
            Our Work
          </Link>
          <Link 
            to="/contact" 
            onClick={closeMobileMenu}
            className="text-white text-3xl font-bold hover:text-fuchsia-400 transition-colors duration-300"
          >
            Contact
          </Link>
          
          {/* Mobile CTA */}
          <button className="bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 font-bold text-lg mt-4">
            Get Started
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
      </div>
    </nav>
  )
}

export default Navbar
