import { TESTIMONIALS } from "@/constants";
import Testimonial from "./Testimonial";
import { useEffect, useRef, useState } from "react";
import { Carousel } from "@/components/Carousel";

const Testimonials = () => {
  return (
    <section className={`py-24 `}>
      <div className={`px-4`}>
        <div className={`text-center mb-16`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient`}>
            What Our Users Say
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto`}>
            Join thousands of satisfied traders who have transformed their
            trading experience with CryptoFlow
          </p>
        </div>
        <Carousel
          items={TESTIMONIALS}
          renderItem={(testimonial) => (
            <Testimonial
              quote={testimonial.quote}
              avatar={testimonial.avatar}
              author={testimonial.author}
              role={testimonial.role}
            />
          )}
          autoPlayInterval={3000}
          className="max-w-4xl mx-auto"
          itemClassName="px-4"
        />
      </div>
    </section>
  );
};

export default Testimonials;
