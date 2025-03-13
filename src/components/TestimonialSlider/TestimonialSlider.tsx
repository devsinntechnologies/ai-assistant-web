"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TestimonialSlider.css";
import Image from "next/image";
import TestimonialsCard from "./TestimonialsCard";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

interface CardContent {
  stars: number;
  content: string;
  avator: string;
  name: string;
  designation: string;
}
const slides: CardContent[] = [
  {
    stars: 5,
    content:
      `This AI assistant makes everything so easy! I use it for reminders, travel booking, and shopping.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "James R.",
    designation: "Product Designer",
  },
  {
    stars: 5,
    content:
      `This AI-powered platform has completely transformed my workflow! The accuracy and speed are unmatched. Highly recommended!”`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Jessica M.",
    designation: "South Korea",
  },
  {
    stars: 5,
    content:
    `I was skeptical at first, but this website exceeded my expectations. The AI responses are smart, fast, and truly helpful.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "David L",
    designation: "United States",
  },
  {
    stars: 5,
    content:
      `The AI features are great, but I’d love to see more customization options. Overall, a fantastic tool!`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Michael S.",
    designation: "Morocco",
  },
  {
    stars: 5,
    content:
    `I've tried several AI solutions, and this one stands out. It’s intuitive, efficient, and keeps getting better.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "marwanbougsid",
    designation: "Morocco",
  },
  {
    stars: 5,
    content:
    `The chatbot is very responsive, and the bill payment feature saves so much time. Love the clean interface`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Sarah M.",
    designation: "UI/UX Designer",
  },
  {
    stars: 5,
    content:
    `I use this AI daily for content creation and research. It's a lifesaver, though a dark mode option would be nice.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Emily T.",
    designation: "India",
  },
  {
    stars: 5,
    content:
    `Best AI Tool I've Used!`,
    avator: "/images/home/testimonials/avator1.png",
    name: "princessele",
    designation: "United States",
  },
];

const SwiperExample: React.FC = () => {
  return (
    <>
      <div className="py-10">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-3">
          <div className="">
          <Swiper
  modules={[Navigation, Pagination]}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  className="testimonialSlider"
  centeredSlides={false}
  initialSlide={6}
  spaceBetween={0}
  slidesPerView={2.5}
  loop={true}
  pagination={{
    clickable: true,
    el: ".testimonials-pagination",
  }}
  breakpoints={{
    0: {
      slidesPerView: "auto",
      spaceBetween: 40,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 1.7,
      spaceBetween: 10,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
  }}
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <TestimonialsCard
        stars={slide.stars}
        content={slide.content}
        avator={slide.avator}
        name={slide.name}
        designation={slide.designation}
      />
    </SwiperSlide>
  ))}
</Swiper>

{/* Navigation Buttons */}
<div className="mt-7 flex flex-col justify-center items-center sm:flex-row sm:items-center max-sm:gap-8">
  <div className="flex items-center gap-8">
    <div
      className="swiper-button-prev group flex justify-center items-center w-12 h-12 transition-all duration-500 rounded-full hover:bg-primary"
    >
      <span className="group-hover:text-white size-8 text-primary">
        <ChevronLeft />
      </span>
    </div>
    <div
      className="swiper-button-next group flex justify-center items-center w-12 h-12 transition-all duration-500 rounded-full hover:bg-primary"
    >
      <span className="group-hover:text-white size-8 text-primary">
        <ChevronRight />
      </span>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperExample;
