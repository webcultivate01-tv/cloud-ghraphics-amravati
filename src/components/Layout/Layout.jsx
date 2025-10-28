import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import InstagramButton from './InstagramButton'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton  className="mt-5"/>
      <InstagramButton />
    </div>
  )
}

export default Layout
