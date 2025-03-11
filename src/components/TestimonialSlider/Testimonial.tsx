import React from "react";
import SwiperExample from "./TestimonialSlider";

const testimonials: React.FC = () => {
    return (<>
    <div>
        <div className="text-black flex flex-col gap-5 justify-center items-center lg:py-10 pt-8 pb-2">
          <h2 className=" py-1 px-4 tracking-widest text-primary text-xl font-bold">
         Testimonials
          </h2>
          <h1 className="mt-1 xl:text-4xl md:text-3xl items-center sm:text-2xl text-2xl font-black tracking-wider leading-tight">
          What our Happy User Says
          </h1>
        </div>
        <SwiperExample/>
      </div>
    </>);
};

export default testimonials;