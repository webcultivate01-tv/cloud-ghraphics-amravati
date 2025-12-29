import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const OurIndustriesSlider = () => {
  const industries = [
    {
      title: "Small Businesses",
      img: "/industries7.webp",
      desc: "Affordable and impactful designs",
      color: "from-fuchsia-500 to-pink-600",
    },
    {
      title: "Corporate Companies",
      img: "/industries2.webp",
      desc: "Professional branding systems",
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "E-Commerce",
      img: "/industries8.webp",
      desc: "Product & promotional creatives",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Real Estate",
      img: "/industries3.webp",
      desc: "Brochures, banners & ads",
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "Education",
      img: "/industries1.webp",
      desc: "Posters & digital creatives",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Healthcare",
      img: "/industries3.webp",
      desc: "Clean & trust-focused designs",
      color: "from-teal-500 to-emerald-600",
    },
    {
      title: "Restaurants & Cafes",
      img: "/industries6.webp",
      desc: "Menus, posters & promotions",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="py-12 bg-slate-950 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl xl:text-5xl text-white">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Delivering creative design solutions across diverse industries
          </p>
        </div>

        {/* Slider */}
        <div className="mt-12">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {industries.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center p-4 text-center">
                  {/* Circle Image */}
                  <div
                    className={`flex items-center justify-center w-28 h-28 rounded-full 
                    bg-linear-to-br ${item.color} shadow-lg transition-transform duration-300 hover:scale-110 overflow-hidden`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="mt-4 text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 text-sm text-gray-400 max-w-xs">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurIndustriesSlider;
