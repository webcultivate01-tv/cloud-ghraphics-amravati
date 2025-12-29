import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const OurClientsSlider = () => {
  const clients = [
    {
      logo: "wlogo.png",
    },
    {
      logo: "work2.webp",
    },
    {
      logo: "work5.webp",
    },
    {
      logo: "wedclickslogo.png",
    },
  ];

  return (
    <section className="py-12 bg-slate-950 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl xl:text-5xl text-white">
            Our Amazing Clients
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Proud to collaborate with forward-thinking brands and visionary
            companies
          </p>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          navigation
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center p-6">
                {/* Circle Logo */}
                <div
                  className={`flex items-center justify-center 
                  w-24 h-24 rounded-full bg-gradient-to-br 
                  ${client.color} shadow-xl 
                  transition-transform duration-300 hover:scale-110`}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="w-20 h-20 object-contain bg-white rounded-full p-2"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClientsSlider;
