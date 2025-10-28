import React from 'react'
import HeroSection from '../components/Services/HeroSection'
import ServicesGrid from '../components/Services/ServicesGrid'
import PricingSection from '../components/Services/PricingSection'
import CallToAction from '../components/Services/CallToAction'

const Services = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSection />
      <ServicesGrid />
      <PricingSection />
      <CallToAction />
    </div>
  )
}

export default Services
