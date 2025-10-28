import React from 'react'
import HeroSection from '../components/About/HeroSection'
import OurStory from '../components/About/OurStory'
import CoreValues from '../components/About/CoreValues'
import Timeline from '../components/About/Timeline'
import Team from '../components/About/Team'
import CallToAction from '../components/About/CallToAction'

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <HeroSection />
      <OurStory />
      <CoreValues />
      <Timeline />
      <Team />
      <CallToAction />
    </div>
  )
}

export default About
