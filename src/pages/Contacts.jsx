import React from 'react'
import HeroSection from '../components/Contact/HeroSection'
import ContactFormSection from '../components/Contact/ContactFormSection'
import FAQ from '../components/Contact/FAQ'

const Contacts = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSection />
      <ContactFormSection />
      <FAQ />
    </div>
  )
}

export default Contacts
