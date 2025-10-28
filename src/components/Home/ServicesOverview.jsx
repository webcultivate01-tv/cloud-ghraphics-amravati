import React from 'react'
import SectionHeader from '../common/SectionHeader'
import ServiceCard from '../common/ServiceCard'
import { servicesData } from '../../data/servicesData'

const ServicesOverview = () => {
  return (
    <section id="services" className="relative bg-linear-to-b from-indigo-950 to-slate-900 py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <SectionHeader
          badge="What I Offer"
          title={
            <>
              My Creative
              <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                Services
              </span>
            </>
          }
          subtitle="Comprehensive design solutions tailored to elevate your brand and engage your audience"
          darkMode={true}
          titleGradient={false}
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:-translate-y-1">
            View All Services
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
