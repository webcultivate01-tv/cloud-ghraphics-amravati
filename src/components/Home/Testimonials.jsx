import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, Tech Startup",
      message:
        "Cloud Graphics transformed our brand identity completely. The team is creative, professional, and a joy to work with!",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Manager",
      message:
        "Amazing work on our social media campaign! The designs are stunning and engagement has increased by 300%.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Amit Patel",
      role: "Restaurant Owner",
      message:
        "The branding package exceeded our expectations. Every detail was perfect, from logo to menu design!",
      rating: 5,
      avatar: "🧑‍🍳",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-slate-950">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white bg-clip-text text-transparent">
            What Our Clients Say
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          Hear directly from our clients about their experience working with us.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="max-w-4xl mx-auto"
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile: show 1 slide
          },
          768: {
            slidesPerView: 2, // Tablet and above: show 2 slides
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-slate-800 border border-violet-500/20 rounded-3xl p-8 mx-4 md:mx-12 hover:border-violet-500/50 transition-all duration-300 shadow-lg">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-3xl mb-4">
                  {testimonial.avatar}
                </div>
                <h4 className="text-white font-bold text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 text-sm mb-3">{testimonial.role}</p>
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 italic max-w-2xl">
                  “{testimonial.message}”
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
