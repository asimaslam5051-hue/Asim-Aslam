import  { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonials = [
  {
    name: "William M.",
    avatarUrl:
      "https://framerusercontent.com/images/iABb6ejla3A5ZzE4zgxiPqBaYHI.jpg",
    feedback:
      "John expertly blends design with functionality, transforming our product into a sleek experience.",
  },
  {
    name: "Robert P.",
    avatarUrl:
      "https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg",
    feedback:
      "Working with John was a pleasure. He transformed our ideas into a polished product.",
  },
  {
    name: "James K.",
    avatarUrl:
      "https://framerusercontent.com/images/7ckekOZAa0J28C2T3IfYTvNDv5U.jpg",
    feedback:
      "John's design and development elevated our product with a seamless user experience.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[current];

  return (
    <section className="w-full py-12">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        


        {/* Heading */}
        <div className="mb-12 text-center text-white">
          <h2 className="text-3xl lg:text-6xl lg:text-start md:text-7xl font-black ">
            What Clients<br />
            <span className="text-white">
              Say About<br />
            </span>
            <span className="text-[#B6B4BD33]">
              My Work
            </span>
          </h2>
        </div>

        {/* Wrapper */}
        <div className="relative max-w-3xl">

          {/* Buttons OUTSIDE card */}
          <div className="absolute -top-16 right-0 flex gap-2">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#F46C38]"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#F46C38]"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Card */}
          <div className="rounded-3xl bg-[#1F1F1F] p-8 md:p-12">

            {/* User */}
            <div className="mb-8 flex gap-4">
              <img
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-white/50">
                  Verified Client
                </p>
              </div>
            </div>

            {/* Text */}
            <p className="text-lg leading-relaxed text-white/80 md:text-2xl">
              "{testimonial.feedback}"
            </p>

          </div>

        </div>
      </Swiper>
    </section>
  )
}
export default TestimonialsSection