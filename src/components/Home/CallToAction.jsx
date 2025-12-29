import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegStar, FaGlobe } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const CallToAction = () => {
  return (
    <section className="relative py-6 sm:py-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/bg_img/bg6.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/85"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-violet-950/70 to-fuchsia-950/80"></div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-56 h-56 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-700 animate-pulse-slow"></div>

          <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-5 sm:p-8 shadow-xl border border-white/10">
            <div className="space-y-4">
              {/* Badge */}
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-violet-300 rounded-full text-xs font-semibold border border-violet-400/30 backdrop-blur-sm">
                  <span className="text-lg">🎨</span> Ready to Create?
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center leading-tight">
                Let's Bring Your{" "}
                <span className="block sm:inline bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-gradient bg-300%">
                  Vision to Life
                </span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto text-center leading-relaxed">
                Transform your ideas into powerful visuals that speak louder
                than words.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 py-3 max-w-2xl mx-auto">
                <div className="text-center p-3 rounded-xl bg-gradient-to-br from-violet-500/10 to-violet-600/5 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
                  <span className="block text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    500+
                  </span>
                  <span className="text-gray-400 text-xs">Projects</span>
                </div>
                <div className="text-center p-3 rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-600/5 border border-fuchsia-500/20 hover:border-fuchsia-400/40 transition-all duration-300">
                  <span className="block text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                    200+
                  </span>
                  <span className="text-gray-400 text-xs">Clients</span>
                </div>
                <div className="text-center p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                  <span className="block text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    4+
                  </span>
                  <span className="text-gray-400 text-xs">Years</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                <button className="group relative bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 sm:px-8 py-2.5 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-violet-500/50 w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Project{" "}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group relative border border-white/30 text-white px-6 sm:px-8 py-2.5 rounded-full font-semibold text-sm backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    View Portfolio <span className="text-base">🎨</span>
                  </span>
                </button>
              </div>

              {/* Contact Info */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center items-center text-gray-300">
                <a
                  href="info@cloudgraphics.in"
                  className="flex items-center gap-2 hover:text-violet-400 transition-colors"
                >
                  <AiOutlineMail className="text-lg sm:text-xl" />
                  <span className="text-xs sm:text-sm">
                    info@cloudgraphics.in
                  </span>
                </a>
                <div className="hidden sm:block text-gray-600">•</div>
                <a
                  href="tel:+91 9307641746"
                  className="flex items-center gap-2 hover:text-fuchsia-400 transition-colors"
                >
                  <FiPhoneCall className="text-lg sm:text-xl" />
                  <span className="text-xs sm:text-sm">+91 9307641746</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-300 mt-4 text-xs font-medium text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="flex items-center gap-1">
            <FaRegStar className="text-violet-400 text-sm" />
            <span>Available for freelance work</span>
          </span>

          <span className="hidden sm:block text-gray-600">•</span>

          <span className="flex items-center gap-1">
            <GoLocation className="text-fuchsia-400 text-sm" />
            <span>Based in Amravati</span>
          </span>

          <span className="hidden sm:block text-gray-600">•</span>

          <span className="flex items-center gap-1">
            <FaGlobe className="text-indigo-400 text-sm" />
            <span>Serving clients worldwide</span>
          </span>
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
