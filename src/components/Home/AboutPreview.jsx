import React from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";

const AboutPreview = () => {
  const features = [
    {
      icon: "✓",
      title: "Creative Expert",
      description: "Unique designs",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "✓",
      title: "Fast Delivery",
      description: "On-time projects",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "✓",
      title: "Quality Work",
      description: "Premium results",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: "✓",
      title: "Personal Touch",
      description: "Direct communication",
      gradient: "from-pink-500 to-red-500",
    },
  ];

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
      id="about"
      className="relative bg-linear-to-br from-slate-900 via-indigo-950 to-violet-950 py-10 sm:py-14 lg:py-20 px-4 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 border-4 border-violet-400 rotate-45 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-4 sm:right-20 w-10 sm:w-16 h-10 sm:h-16 bg-fuchsia-400/30 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-8 sm:left-1/4 w-16 sm:w-24 h-16 sm:h-24 border-4 border-indigo-400 rounded-full animate-spin"
          style={{ animationDuration: "10s" }}
        ></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 sm:w-12 h-8 sm:h-12 bg-violet-400/20 rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual Section */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0}
          >
            {/* Main Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl sm:hover:scale-105 transition-transform duration-500 w-full sm:max-w-sm mx-auto">
              <div className="w-full bg-linear-to-br from-violet-600 via-fuchsia-600 to-indigo-600 p-1">
                <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 flex items-center justify-center min-h-[300px] sm:min-h-[350px]">
                  <div className="text-center space-y-5">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-violet-500 blur-2xl opacity-50 animate-pulse"></div>
                      <div className="relative text-5xl sm:text-6xl mb-4">
                        🎨
                      </div>
                    </div>
                    <h3 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
                      Creative
                      <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent mt-1">
                        Excellence
                      </span>
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed px-2">
                      Transforming ideas into stunning visual masterpieces that
                      captivate and inspire
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl transform -rotate-6 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <div className="font-bold text-lg">Fast Delivery</div>
                  <div className="text-gray-600 text-sm">
                    On-time, every time
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-5 right-4 bg-white rounded-2xl p-4 shadow-2xl transform rotate-6 hidden lg:block">
              <div className="text-center">
                <div className="text-4xl mb-2">🏆</div>
                <div className="font-bold">Quality First</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content Section */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={1}
          >
            <div className="inline-block">
              <span className="px-4 py-2 bg-violet-500/20 text-violet-300 rounded-full text-sm font-semibold">
                About Cloud Graphics
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Your Creative Partner for
              <span className="block bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Visual Excellence
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate graphic designer dedicated to transforming your
              ideas into stunning visual experiences. With years of expertise
              and a keen eye for detail, I bring creativity and professionalism
              to every project.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              From branding to digital design, I deliver high-quality work that
              stands out. My approach combines artistic vision with strategic
              thinking to create designs that not only look amazing but also
              drive results for your business.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-4 transition-all duration-300 border border-white/10 hover:border-purple-500/50"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  custom={index + 2} // staggered animation
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-linear-to-br ${feature.gradient} mb-3 text-white text-xl font-bold group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              className="bg-linear-to-r from-violet-500/10 to-fuchsia-500/10 border-l-4 border-violet-500 rounded-r-xl p-6 mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={features.length + 2}
            >
              <p className="text-white italic text-lg">
                "Design is not just what it looks like and feels like. Design is
                how it works."
              </p>
              <p className="text-gray-400 text-sm mt-2">
                - My Design Philosophy
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
