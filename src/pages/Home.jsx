import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ServicesOverview from '../components/Home/ServicesOverview'
import OurClients from '../components/Home/OurClients'
import AboutPreview from '../components/Home/AboutPreview'
import WorkProcess from '../components/Home/WorkProcess'
import CallToAction from '../components/Home/CallToAction'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <OurClients />
      <AboutPreview />
      <WorkProcess />
      <CallToAction />
    </>
  )
}

export default Home
