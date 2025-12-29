import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import cloudlogo from "../../assets/logo.webp";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll handler for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // This hook locks the <html> and <body> scroll when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Add class to HTML and BODY to prevent scrolling
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      // Remove class from HTML and BODY to allow scrolling
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]); // This effect runs every time isMobileMenuOpen changes

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper function to check if link is active
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    // vvv FIX 1: Make transition to transparent fast (100ms), but fade-in slow (300ms) vvv
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6 lg:px-12 
  transition-all ${isMobileMenuOpen ? "duration-100" : "duration-300"} 
  ${
    isScrolled && !isMobileMenuOpen
      ? "bg-gradient-to-r from-purple-950 via-black to-purple-950 backdrop-blur-md shadow-lg"
      : "bg-transparent"
  }`}
    >
      {/* Main container with 3-column layout fix */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* === LEFT GROUP (Logo) === */}
        {/* vvv FIX 2: Make logo fade out fast (100ms), but wait 200ms to fade back in vvv */}
        <div
          className={`flex-1 transition-all ${
            isMobileMenuOpen
              ? "opacity-0 invisible duration-100"
              : "opacity-100 visible duration-300 delay-200"
          }`}
        >
          <Link
            to="/"
            className="relative flex items-center gap-4 z-50 w-fit group cursor-pointer"
          >
            {/* Logo */}
            <div className="relative">
              <img
                src={cloudlogo}
                alt="Cloud Graphics Logo"
                className="h-14 sm:h-16 w-auto transition-all duration-500"
                // removed group-hover:scale-110 and group-hover:rotate-3
              />
              {/* Glow shadow effect */}
              <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-90 transition-opacity duration-500 bg-gradient-to-r from-violet-500/40 via-fuchsia-500/40 to-indigo-500/40 rounded-full"></div>
            </div>

            {/* Brand Text */}
            <div className="hidden sm:flex flex-col">
              <h1
                className="text-xl sm:text-3xl font-extrabold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent 
      tracking-wide transition-all duration-500"
                // removed group-hover:tracking-widest
              >
                Cloud Graphics
              </h1>

              <p className="text-[11px] text-gray-400 tracking-[0.25em] uppercase group-hover:text-gray-300 transition-all duration-300">
                Amravati
              </p>
            </div>
          </Link>
        </div>

        {/* === CENTER GROUP (Desktop Menu) === */}
        <div className="hidden lg:flex flex-none space-x-8 text-gray-300">
          <Link
            to="/"
            className={`relative transition-all duration-300 font-medium ${
              isActive("/") ? "text-white" : ""
            }`}
          >
            Home
            {isActive("/") && (
              <>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 animate-pulse-glow"></span>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-violet-400 to-fuchsia-400 blur-sm"></span>
              </>
            )}
          </Link>
          <Link
            to="/about"
            className={`relative transition-all duration-300 font-medium ${
              isActive("/about") ? "text-white" : ""
            }`}
          >
            About
            {isActive("/about") && (
              <>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 animate-pulse-glow"></span>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-violet-400 to-fuchsia-400 blur-sm"></span>
              </>
            )}
          </Link>
          <Link
            to="/services"
            className={`relative transition-all duration-300 font-medium ${
              isActive("/services") ? "text-white" : ""
            }`}
          >
            Services
            {isActive("/services") && (
              <>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 animate-pulse-glow"></span>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-violet-400 to-fuchsia-400 blur-sm"></span>
              </>
            )}
          </Link>
          <Link
            to="/work"
            className={`relative transition-all duration-300 font-medium ${
              isActive("/work") ? "text-white" : ""
            }`}
          >
            Our Work
            {isActive("/work") && (
              <>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 animate-pulse-glow"></span>
                <span className="absolute -bottom-2 left-0 right-0 h-0.S5 bg-linear-to-r from-violet-400 to-fuchsia-400 blur-sm"></span>
              </>
            )}
          </Link>
          <Link
            to="/contact"
            className={`relative transition-all duration-300 font-medium ${
              isActive("/contact") ? "text-white" : ""
            }`}
          >
            Contact
            {isActive("/contact") && (
              <>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 animate-pulse-glow"></span>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-violet-400 to-fuchsia-400 blur-sm"></span>
              </>
            )}
          </Link>
        </div>

        {/* === RIGHT GROUP (Buttons) === */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link
            to="/contact#contact-form"
            className="hidden md:block bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 font-semibold text-sm hover:scale-105"
          >
            Get Started
          </Link>

          {/* This button has z-50, which is correct. It stays on top to be the "X" */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-slate-950 backdrop-blur-xl lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="h-screen overflow-y-auto flex flex-col items-center justify-start space-y-8 py-20">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className={`relative text-3xl font-bold transition-all duration-300 ${
              isActive("/")
                ? "text-transparent bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text scale-110"
                : "text-white"
            }`}
          >
            Home
            {isActive("/") && (
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 rounded-full animate-pulse-glow"></span>
            )}
          </Link>
          <Link
            to="/about"
            onClick={closeMobileMenu}
            className={`relative text-3xl font-bold transition-all duration-300 ${
              isActive("/about")
                ? "text-transparent bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text scale-110"
                : "text-white"
            }`}
          >
            About
            {isActive("/about") && (
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 rounded-full animate-pulse-glow"></span>
            )}
          </Link>
          <Link
            to="/services"
            onClick={closeMobileMenu}
            className={`relative text-3xl font-bold transition-all duration-300 ${
              isActive("/services")
                ? "text-transparent bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text scale-110"
                : "text-white"
            }`}
          >
            Services
            {isActive("/services") && (
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 rounded-full animate-pulse-glow"></span>
            )}
          </Link>
          <Link
            to="/work"
            onClick={closeMobileMenu}
            className={`relative text-3xl font-bold transition-all duration-300 ${
              isActive("/work")
                ? "text-transparent bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text scale-110"
                : "text-white"
            }`}
          >
            Our Work
            {isActive("/work") && (
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 rounded-full animate-pulse-glow"></span>
            )}
          </Link>
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className={`relative text-3xl font-bold transition-all duration-300 ${
              isActive("/contact")
                ? "text-transparent bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text scale-110"
                : "text-white"
            }`}
          >
            Contact
            {isActive("/contact") && (
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 rounded-full animate-pulse-glow"></span>
            )}
          </Link>

          {/* Mobile CTA */}
          <Link
            to="/contact#contact-form"
            onClick={closeMobileMenu}
            className="bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 font-bold text-lg mt-4 hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
      </div>
    </nav>
  );
};

export default Navbar;
