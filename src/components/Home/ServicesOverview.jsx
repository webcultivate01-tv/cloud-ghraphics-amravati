import React from "react";
import ServiceCard from "../common/ServiceCard";
import { servicesData } from "../../data/servicesData";
import { Link, useNavigate } from "react-router-dom";

const ServicesOverview = () => {
  const navigate = useNavigate();
  return (
    <section
      id="services"
      className="relative bg-linear-to-b from-indigo-950 via-slate-900 to-violet-950 py-12 sm:py-16 md:py-24 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-violet-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-15 animate-blob animation-delay-4000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="hidden sm:block absolute top-20 left-[15%] w-16 sm:w-20 h-16 sm:h-20 border-2 border-violet-400/20 rotate-45 animate-float-slow"></div>
        <div className="hidden sm:block absolute bottom-32 right-[20%] w-12 sm:w-16 h-12 sm:h-16 border-2 border-fuchsia-400/20 rounded-full animate-float animation-delay-3000"></div>
        <div className="hidden sm:block absolute top-1/3 right-[10%] w-10 sm:w-12 h-10 sm:h-12 bg-indigo-400/10 backdrop-blur-sm animate-float-fast animation-delay-2000"></div>

        {/* Light Rays */}
        <div className="hidden md:block absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-violet-400/20 to-transparent"></div>
        <div className="hidden md:block absolute top-0 right-1/3 w-px h-full bg-linear-to-b from-transparent via-fuchsia-400/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Enhanced Section Header */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4 sm:mb-6 group hover:bg-white/10 transition-all duration-300">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-violet-400 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-violet-300">
              What We Offer
            </span>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-fuchsia-400 rounded-full animate-pulse animation-delay-2000"></div>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-center">
            <span className="inline text-white mr-2">Our Creative</span>
            <span className="inline bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
              Services
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive design solutions tailored to elevate your brand and
            engage your audience with cutting-edge creativity
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <div className="h-px w-12 sm:w-20 bg-linear-to-r from-transparent to-violet-400/50"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-fuchsia-400 rounded-full"></div>
            <div className="h-px w-12 sm:w-20 bg-linear-to-l from-transparent to-violet-400/50"></div>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-4 sm:mb-6">
          {servicesData.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <ServiceCard {...service} index={index} />
            </div>
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-violet-600 via-fuchsia-600 to-indigo-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View All Services
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
        </div>

        {/* Premium CTA Section */}
        <div className="relative mt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Image Section */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-4/3 bg-linear-to-br from-violet-600 via-fuchsia-600 to-indigo-600 p-1">
                  <div className="bg-slate-900 h-full rounded-3xl flex items-center justify-center overflow-hidden">
                    {/* Image from public folder */}
                    <img
                      src="/serviceslider1.webp"
                      alt="Cloud Graphics creative design services"
                      className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Right: CTA Content */}
            <div className="relative">
              {/* Outer wrapper */}
              <div className="relative w-full">
                {/* Animated organic border using SVG mask */}
                <div className="absolute inset-0">
                  <svg
                    viewBox="0 0 600 400"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>

                    {/* Amoeba / zig-zag shape border */}
                    <path
                      d="M40,60 Q100,10 200,60 T400,60 Q480,100 560,40 T600,180 
             Q580,300 400,340 T200,380 Q100,350 40,300 T0,180 Z"
                      fill="none"
                      stroke="url(#grad)"
                      strokeWidth="6"
                      className="animate-[pulse_6s_ease-in-out_infinite]"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Inner content card */}
                <div className="relative bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl border border-white/20 rounded-4xl overflow-hidden group hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20">
                  {/* Background glowing gradient */}
                  <div className="absolute inset-0 bg-linear-to-r from-violet-500/10 via-fuchsia-500/10 to-indigo-500/10 blur-2xl"></div>

                  {/* Main content */}
                  <div className="relative p-6 md:p-10">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      <span className="block text-white">Let's Bring Your</span>
                      <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                        Vision to Life
                      </span>
                    </h3>

                    <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                      Turn your ideas into stunning visuals with
                      <span className="text-violet-400 font-semibold">
                        {" "}
                        creative artistry
                      </span>{" "}
                      and
                      <span className="text-fuchsia-400 font-semibold">
                        {" "}
                        professional precision
                      </span>
                      .
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => navigate("/contact")}
                        className="group inline-flex items-center justify-center px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
                      >
                        Start Your Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
