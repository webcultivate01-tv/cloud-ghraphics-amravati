import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-12">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=500&fit=crop&crop=center"
                  alt="Data privacy and security"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <p className="text-white font-semibold">Your Data is Protected</p>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">GDPR Compliant & Secure</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Security Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/30 animate-float">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30 animate-float animation-delay-2000">
                <span className="text-2xl">🛡️</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                <span className="text-indigo-300 text-sm font-medium">Data Protection</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Privacy
                </span>
                <br />
                <span className="text-white">Policy</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We're committed to protecting your privacy and ensuring your personal information is handled with the utmost care and transparency.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-900/50 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">🔐</div>
                  <p className="text-sm text-gray-300">End-to-End Encryption</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">🌍</div>
                  <p className="text-sm text-gray-300">GDPR Compliant</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Last updated: January 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {[
                {
                  title: "Information We Collect",
                  content: "We collect information you provide directly to us, such as when you contact us for services, including your name, email address, phone number, and project requirements. We also collect technical information about your device and how you interact with our website.",
                  icon: "📁",
                  color: "blue",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center"
                },
                {
                  title: "How We Use Your Information",
                  content: "We use your information to provide and deliver our graphic design services, communicate with you about your projects, send you updates and promotional materials (with consent), and improve our services and website experience.",
                  icon: "🎯",
                  color: "violet",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
                  features: [
                    "Service delivery and communication",
                    "Project updates and notifications",
                    "Service improvement and analytics",
                    "Marketing (with your consent)"
                  ]
                },
                {
                  title: "Information Sharing & Security",
                  content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law. We implement appropriate security measures including encryption and secure servers.",
                  icon: "🔒",
                  color: "green",
                  highlight: true,
                  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop&crop=center"
                },
                {
                  title: "Cookies & Tracking",
                  content: "Our website uses cookies to enhance user experience and analyze website usage. You can choose to disable cookies through your browser settings, though this may affect website functionality.",
                  icon: "🍪",
                  color: "orange",
                  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop&crop=center"
                },
                {
                  title: "Third-Party Services",
                  content: "We may use third-party services like Google Analytics, social media platforms, and payment processors. These services have their own privacy policies and data handling practices.",
                  icon: "🔗",
                  color: "purple",
                  image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop&crop=center"
                },
                {
                  title: "Your Rights & Control",
                  content: "You have the right to access, update, delete, or port your personal information. You can also opt-out of marketing communications at any time. Contact us to exercise these rights.",
                  icon: "⚙️",
                  color: "indigo",
                  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop&crop=center",
                  features: [
                    "Access your data",
                    "Update information",
                    "Delete your data",
                    "Data portability",
                    "Opt-out anytime"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className={`relative group ${section.highlight ? 'bg-green-500/5 border border-green-500/20 rounded-2xl p-6' : ''}`}>
                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    <div className="md:col-span-2">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 bg-linear-to-br from-${section.color}-500 to-${section.color}-600 rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                          {section.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                            {section.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {section.content}
                          </p>
                          {section.features && (
                            <ul className="space-y-2">
                              {section.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-gray-400">
                                  <div className={`w-1.5 h-1.5 bg-${section.color}-400 rounded-full`}></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src={section.image}
                        alt={`Privacy concept for ${section.title}`}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Questions?</h3>
                  <p className="text-gray-400 text-sm">We're here to help</p>
                </div>
                <div className="space-y-3">
                  <a href="tel:+919307641746" className="flex items-center justify-center gap-2 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/20 rounded-lg py-2 px-3 transition-colors">
                    <span>📞</span>
                    <span className="text-sm text-violet-300">Call Us</span>
                  </a>
                  <a href="https://wa.me/919307641746" className="flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 rounded-lg py-2 px-3 transition-colors">
                    <span>💬</span>
                    <span className="text-sm text-green-300">WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>🛡️</span>
                  Security Features
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-green-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    SSL Encryption
                  </div>
                  <div className="flex items-center gap-2 text-blue-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Secure Servers
                  </div>
                  <div className="flex items-center gap-2 text-purple-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    GDPR Compliant
                  </div>
                  <div className="flex items-center gap-2 text-orange-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    Regular Audits
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&crop=center"
                  alt="Secure data center"
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* Quick Actions */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-2 text-sm">
                  <a href="/terms" className="block text-gray-300 hover:text-violet-300 transition-colors">
                    → Terms of Service
                  </a>
                  <a href="/contact" className="block text-gray-300 hover:text-violet-300 transition-colors">
                    → Contact Support
                  </a>
                  <a href="/services" className="block text-gray-300 hover:text-violet-300 transition-colors">
                    → Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy