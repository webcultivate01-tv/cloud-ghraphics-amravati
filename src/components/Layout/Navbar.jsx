import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 lg:px-12 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white">
          <h1 className="text-3xl font-bold bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            Cloud Graphics
          </h1>
          <p className="text-xs text-gray-400 tracking-widest">AMRAVATI</p>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-gray-300">
          <a href="#home" className="hover:text-white transition-colors duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors duration-300">
            About
          </a>
          <a href="#services" className="hover:text-white transition-colors duration-300">
            Services
          </a>
          <a href="#work" className="hover:text-white transition-colors duration-300">
            My Work
          </a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">
            Contact
          </a>
        </div>
        
        <button className="bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300">
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navbar
