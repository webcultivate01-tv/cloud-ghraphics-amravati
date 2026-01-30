import React from 'react'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-12">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-size-[50px_50px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
                <span className="text-violet-300 text-sm font-medium">Legal Information</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                  Terms of
                </span>
                <br />
                <span className="text-white">Service</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Clear, transparent terms that protect both our creative partnership and your business interests.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Last updated: January 2025
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/serviceslider2.webp"
                  alt="Professional design services"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <p className="text-white font-semibold">Professional Design Services</p>
                    <p className="text-gray-300 text-sm">Trusted by 500+ clients</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-violet-500/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-xl animate-float animation-delay-3000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {[
                {
                  title: "1. Acceptance of Terms",
                  content: "By accessing and using Cloud Graphics services, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all our creative services including brand identity, digital design, and marketing materials.",
                  icon: "✅",
                  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop&crop=center"
                },
                {
                  title: "2. Our Services",
                  content: "Cloud Graphics provides comprehensive graphic design services including brand identity, social media graphics, marketing materials, packaging design, and related creative services. Each project is tailored to meet your specific business needs.",
                  icon: "🎨",
                  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop&crop=center"
                },
                {
                  title: "3. Payment Terms",
                  content: "50% advance payment required before project commencement. Remaining 50% due upon project completion. Payment terms are net 7 days from invoice date. We accept all major payment methods.",
                  icon: "💳",
                  highlight: true,
                  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&crop=center"
                },
                {
                  title: "4. Intellectual Property",
                  content: "Upon full payment, client receives full rights to the final approved design. Cloud Graphics retains the right to showcase completed work in portfolio and marketing materials.",
                  icon: "🔒",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=center"
                },
                {
                  title: "5. Revision Policy",
                  content: "Each project includes up to 3 rounds of revisions at no additional cost. Additional revisions beyond this may incur extra charges based on complexity and time required.",
                  icon: "🔄",
                  image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=200&fit=crop&crop=center"
                },
                {
                  title: "6. Project Timeline",
                  content: "Project timelines are agreed upon at the start of each project. Delays in client feedback or content provision may affect delivery dates. We strive to meet all agreed deadlines.",
                  icon: "⏰",
                  image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop&crop=center"
                },
                {
                  title: "7. Cancellation Policy",
                  content: "Projects may be cancelled with 48 hours notice. Advance payments are non-refundable for work already completed. Partial refunds may be considered on a case-by-case basis.",
                  icon: "❌",
                  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop&crop=center"
                }
              ].map((section, index) => (
                <div key={index} className={`relative group ${section.highlight ? 'bg-violet-500/5 border border-violet-500/20 rounded-2xl p-6' : ''}`}>
                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    <div className="md:col-span-2">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center text-xl">
                          {section.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                            {section.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src={section.image}
                        alt={`Example work for ${section.title}`}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Need Clarification?</h3>
                <p className="text-gray-300 text-sm mb-6">Have questions about our terms? We're here to help.</p>
                <div className="space-y-3">
                  <a href="tel:+919307641746" className="flex items-center gap-3 text-violet-300 hover:text-violet-200 transition-colors">
                    <span className="text-lg">📞</span>
                    <span className="text-sm">+91 93076 41746</span>
                  </a>
                  <a href="https://wa.me/919307641746" className="flex items-center gap-3 text-green-300 hover:text-green-200 transition-colors">
                    <span className="text-lg">💬</span>
                    <span className="text-sm">WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Portfolio Images */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Legal & Business</h3>
                <div className="grid grid-cols-2 gap-3">
                  <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&h=120&fit=crop" alt="Legal documents" className="w-full h-24 object-cover rounded-lg" />
                  <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=200&h=120&fit=crop" alt="Business handshake" className="w-full h-24 object-cover rounded-lg" />
                  <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&h=120&fit=crop" alt="Contract signing" className="w-full h-24 object-cover rounded-lg" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=120&fit=crop" alt="Copyright protection" className="w-full h-24 object-cover rounded-lg" />
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/privacy" className="block text-gray-300 hover:text-violet-300 transition-colors text-sm">
                    → Privacy Policy
                  </a>
                  <a href="/services" className="block text-gray-300 hover:text-violet-300 transition-colors text-sm">
                    → Our Services
                  </a>
                  <a href="/contact" className="block text-gray-300 hover:text-violet-300 transition-colors text-sm">
                    → Contact Us
                  </a>
                </div>
              </div>

              {/* Large Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=center"
                  alt="Professional business meeting"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService