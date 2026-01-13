import { TESTIMONIALS } from "@/constants";
import Testimonial from "./Testimonial";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };
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
        <div
          className={`relative max-w-4xl mx-auto`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`overflow-hidden`}>
            <div
              className={`flex transition-transform duration-500 ease-out`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  quote={testimonial.quote}
                  avatar={testimonial.avatar}
                  author={testimonial.author}
                  role={testimonial.role}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
