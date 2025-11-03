import React from 'react'
import ServiceCard from '../common/ServiceCard'
import { servicesData } from '../../data/servicesData'

const ServicesGrid = () => {
  return (
  <section id="services" className="relative bg-linear-to-b from-indigo-950 via-slate-900 to-violet-950 py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-violet-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-15 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
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
            <span className="text-xs sm:text-sm font-medium text-violet-300">What We Offer</span>
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
            Comprehensive design solutions tailored to elevate your brand and engage your audience with cutting-edge creativity
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <div className="h-px w-12 sm:w-20 bg-linear-to-r from-transparent to-violet-400/50"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-fuchsia-400 rounded-full"></div>
            <div className="h-px w-12 sm:w-20 bg-linear-to-l from-transparent to-violet-400/50"></div>
          </div>
        </div>

        {/* Enhanced Services Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <ServiceCard {...service} index={index} />
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="relative mt-16 flex justify-end pr-6">
          {/* Outer wrapper with increased width */}
          <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%]">

            {/* Animated organic border using SVG mask */}
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 600 400"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
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

          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
