import React from 'react'
import SectionHeader from '../common/SectionHeader'
import ServiceCard from '../common/ServiceCard'
import { servicesData } from '../../data/servicesData'

const ServicesOverview = () => {
  return (
    <section id="services" className="relative bg-linear-to-b from-indigo-950 via-slate-900 to-violet-950 py-16 sm:py-24 md:py-32 overflow-hidden">
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
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4 sm:mb-6 group hover:bg-white/10 transition-all duration-300">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-violet-400 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-violet-300">What We Offer</span>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-fuchsia-400 rounded-full animate-pulse animation-delay-2000"></div>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="block text-white mb-1 sm:mb-2">Our Creative</span>
            <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
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
        <div className="relative mt-16 sm:mt-20 md:mt-24">
          {/* Animated Background Effects */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
            {/* Multiple gradient layers */}
            <div className="absolute -inset-20 bg-linear-to-r from-violet-600/30 via-fuchsia-600/30 to-indigo-600/30 blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-violet-500/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            
            {/* Floating decorative elements */}
            <div className="hidden sm:block absolute top-10 right-20 text-4xl sm:text-6xl opacity-10 animate-float">🎨</div>
            <div className="hidden sm:block absolute bottom-20 left-16 text-3xl sm:text-5xl opacity-10 animate-float animation-delay-2000">✨</div>
          </div>
          
          <div className="relative bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl border-2 border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden group hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20">
            {/* Shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-full transition-all duration-1000"></div>
            </div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="h-full w-full" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            {/* Content */}
            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20">
              {/* Badge with Icon */}
              <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-linear-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm border border-violet-400/30 mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-300">
                <span className="text-xl sm:text-2xl">🎨</span>
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold bg-linear-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">Ready to Create?</span>
              </div>
              
              {/* Main Title */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight">
                <span className="block text-white mb-1 sm:mb-2">Let's Bring Your</span>
                <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                  Vision to Life
                </span>
              </h3>
              
              {/* Description with highlights */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl leading-relaxed">
                Transform your ideas into stunning reality with our 
                <span className="text-violet-400 font-semibold"> exceptional design</span>,
                <span className="text-fuchsia-400 font-semibold"> innovative creativity</span>, and
                <span className="text-indigo-400 font-semibold"> strategic solutions</span> that captivate and convert.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
                <button className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-linear-to-r from-violet-600 via-fuchsia-600 to-indigo-600 text-white rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/50 hover:scale-110 w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span>Start Your Project</span>
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-indigo-600 via-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping"></div>
                  </div>
                </button>
                
                <button className="group px-8 sm:px-10 py-4 sm:py-5 bg-white/5 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold text-base sm:text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    <span>Let's Talk</span>
                  </span>
                </button>
              </div>
              
              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-white/20">
                <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-linear-to-br from-violet-500/20 to-violet-600/20 rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-violet-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">100+</div>
                  <div className="text-xs sm:text-sm font-medium text-gray-400">Projects Completed</div>
                </div>
                
                <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-linear-to-br from-fuchsia-500/20 to-fuchsia-600/20 rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-fuchsia-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-xs sm:text-sm font-medium text-gray-400">Happy Clients</div>
                </div>
                
                <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-linear-to-br from-indigo-500/20 to-indigo-600/20 rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-indigo-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">5+</div>
                  <div className="text-xs sm:text-sm font-medium text-gray-400">Years Experience</div>
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="whitespace-nowrap">Fast Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="whitespace-nowrap">100% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="whitespace-nowrap">Professional Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
