import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ServicesOverview from '../components/Home/ServicesOverview'
import OurClients from '../components/Home/OurClients'
import AboutPreview from '../components/Home/AboutPreview'
import WorkProcess from '../components/Home/WorkProcess'
import Testimonials from '../components/Home/Testimonials'
import CallToAction from '../components/Home/CallToAction'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <OurClients />
      <AboutPreview />
      <WorkProcess />
      <Testimonials />
      <CallToAction />
    </>
  )
}

export default Home
