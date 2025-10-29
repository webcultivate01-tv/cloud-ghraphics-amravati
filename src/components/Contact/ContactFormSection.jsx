import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isHighlighted, setIsHighlighted] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Check if hash is #contact-form
    if (location.hash === '#contact-form') {
      setIsHighlighted(true)
      // Remove highlight after 5 seconds
      const timer = setTimeout(() => {
        setIsHighlighted(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [location])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! We will get back to you soon. 🎉')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <section id="contact-form" className="py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Contact Form - Equal 50% width */}
          <div className={`bg-slate-900/50 backdrop-blur-xl border rounded-3xl p-8 md:p-10 transition-all ${
            isHighlighted 
              ? 'border-4 border-red-500' 
              : 'border border-violet-500/20 hover:border-violet-500/50'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-2xl">
                📧
              </div>
              <h2 className="text-3xl font-bold">
                <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Send Us a Message
                </span>
              </h2>
            </div>
            <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you as soon as possible!</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-white font-semibold mb-2">
                  <span className="text-violet-400">👤</span>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-slate-800/50 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-white font-semibold mb-2">
                  <span className="text-violet-400">📧</span>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-slate-800/50 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="flex items-center gap-2 text-white font-semibold mb-2">
                  <span className="text-violet-400">📱</span>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-slate-800/50 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="subject" className="flex items-center gap-2 text-white font-semibold mb-2">
                  <span className="text-violet-400">💼</span>
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-slate-800/50 border border-violet-500/30 rounded-xl text-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="brand-identity">Brand Identity Design</option>
                  <option value="digital-design">Digital Design</option>
                  <option value="photography">Photography</option>
                  <option value="video-production">Video Production</option>
                  <option value="social-media">Social Media Marketing</option>
                  <option value="print-design">Print Design</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-white font-semibold mb-2">
                  <span className="text-violet-400">💬</span>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3.5 bg-slate-800/50 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                  placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3 p-4 bg-violet-500/10 border border-violet-500/20 rounded-xl">
                <span className="text-2xl">💡</span>
                <p className="text-sm text-gray-400">
                  <span className="text-violet-400 font-semibold">Pro Tip:</span> The more details you provide, the better we can understand your needs and provide an accurate quote!
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-linear-to-r from-violet-600 via-fuchsia-600 to-indigo-600 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <span>🚀</span>
              </button>
            </form>
          </div>

          {/* Contact Information - Equal 50% width */}
          <div className="space-y-6">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 gap-4">
              <a
                href="mailto:hello@cloudgraphics.com"
                className="group bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6 hover:border-violet-500/50 hover:scale-[1.02] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                    📧
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold mb-1 group-hover:text-violet-400 transition-colors">Email Us</h3>
                    <p className="text-gray-400 text-sm">hello@cloudgraphics.com</p>
                  </div>
                  <div className="text-violet-400 group-hover:translate-x-1 transition-transform">→</div>
                </div>
              </a>

              <a
                href="tel:+919876543210"
                className="group bg-slate-900/50 backdrop-blur-xl border border-fuchsia-500/20 rounded-2xl p-6 hover:border-fuchsia-500/50 hover:scale-[1.02] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-linear-to-br from-fuchsia-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                    📱
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold mb-1 group-hover:text-fuchsia-400 transition-colors">Call Us</h3>
                    <p className="text-gray-400 text-sm">+91 98765 43210</p>
                  </div>
                  <div className="text-fuchsia-400 group-hover:translate-x-1 transition-transform">→</div>
                </div>
              </a>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                    📍
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold mb-1">Visit Us</h3>
                    <p className="text-gray-400 text-sm">Amravati, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-pink-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-linear-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                    ⏰
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold mb-1">Working Hours</h3>
                    <p className="text-gray-400 text-sm">Mon - Sat: 10 AM - 7 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Connect With Us
                </span>
                <span>🌟</span>
              </h3>
              <div className="grid grid-cols-4 gap-3">
                <a
                  href="#"
                  className="aspect-square bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center hover:scale-110 hover:-rotate-6 transition-all duration-300 shadow-lg hover:shadow-violet-500/50"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="aspect-square bg-linear-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="aspect-square bg-linear-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center hover:scale-110 hover:-rotate-6 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="aspect-square bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="relative overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-violet-600/20 to-fuchsia-600/20 rounded-full blur-3xl"></div>
              <div className="relative text-center">
                <div className="text-5xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-white mb-2">Quick Response Guarantee</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We respond within <span className="text-violet-400 font-bold">24 hours</span> on business days
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Why Work With Us?
                </span>
                <span>✨</span>
              </h3>
              <div className="space-y-3">
                {[
                  { icon: '🎨', text: 'Creative Excellence' },
                  { icon: '⚡', text: 'Fast Turnaround' },
                  { icon: '💎', text: 'Premium Quality' },
                  { icon: '🤝', text: 'Client Satisfaction' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
