import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950">
        <img
          src="/Homebg.avif"
          alt="Hero Background"
          className="w-full h-full object-cover scale-110"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-br from-violet-600/20 via-transparent to-fuchsia-600/20 motion-safe:animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-32 pb-32">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <motion.div
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="inline-block bg-violet-500/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30"
                variants={fadeInUp}
                custom={0}
              >
                Professional Graphic Design Studio in Amravati
              </motion.span>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                variants={fadeInUp}
                custom={1}
              >
                Transforming
                <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                  Your Ideas
                </span>
                Into Art
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                variants={fadeInUp}
                custom={2}
              >
                I craft stunning graphics, memorable brands, and digital
                experiences that make your business stand out in the crowd.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={fadeInUp}
                custom={3}
              >
                <Link to="/work">
                  <button className="group bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition">
                    View My Work
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="border-2 border-violet-400 text-violet-300 px-8 py-4 rounded-full font-semibold hover:bg-violet-500/10 transition">
                    Let's Talk
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right empty column */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
