import React from 'react'
import HeroSection from '../components/Services/HeroSection'
import ServicesGrid from '../components/Services/ServicesGrid'
import PricingSection from '../components/Services/PricingSection'
import CallToAction from '../components/Services/CallToAction'
import Industries from "../components/OurWork/Industries"
const Services = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSection />
      <ServicesGrid />
      <Industries></Industries>
      <CallToAction />
    </div>
  )
}

export default Services
