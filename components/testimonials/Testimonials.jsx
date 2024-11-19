"use client"

// components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      title: "UX/UI Product Designer",
      feedback:
        "Thanks to NextWith Digital, our Meta ads campaign exceeded all expectations. Their unique approach to growth hacking and optimization turned first-time leads into loyal customers.",
      img: "/images/john.jpg", // Replace with actual image paths
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Marketing Specialist",
      feedback:
        "Their team was professional and creative. We saw a 50% increase in engagement within weeks!",
      img: "https://placehold.co/600x400",
    },
    {
      id: 3,
      name: "Mike Johnson",
      title: "Software Engineer",
      feedback:
        "An excellent service that truly understands the importance of customer satisfaction.",
      img: "https://placehold.co/600x400",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Customer <span className="text-purple-600">Testimonials</span> Showcase
      </h2>
      <p className="text-center text-gray-500 mb-8">
        See great customer feedback reviews with Google, Facebook, and other leading
        tech brands too.
      </p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full max-w-4xl mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="text-center">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-500"
              />
              <p className="text-lg italic text-gray-600">{testimonial.feedback}</p>
              <h3 className="font-bold text-xl mt-4">{testimonial.name}</h3>
              <span className="text-purple-500">{testimonial.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
