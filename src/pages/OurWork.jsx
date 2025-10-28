import React from 'react'
import HeroSection from '../components/OurWork/HeroSection'
import PortfolioGrid from '../components/OurWork/PortfolioGrid'
import Industries from '../components/OurWork/Industries'
import CreativeProcess from '../components/OurWork/CreativeProcess'
import Awards from '../components/OurWork/Awards'
import Testimonials from '../components/OurWork/Testimonials'
import CallToAction from '../components/OurWork/CallToAction'

const OurWork = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSection />
      <PortfolioGrid />
      <Industries />
      <CreativeProcess />
      <Awards />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default OurWork
