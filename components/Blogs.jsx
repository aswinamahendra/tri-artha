import React, { useCallback, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

import AnimatedText from "./AnimatedText";
import Image from "next/image";
import Pretitle from "./Pretitle";

// sample data for projects with various categories
const slides = [
  {
    img: "/assets/blog/blog-1.png",
    name: "Emma White",
    message:
      "The service was fantastic! Highly recommend it to anyone looking for top noth design",
  },
  {
    img: "/assets/blog/blog-2.png",
    name: "Sophia Martinez",
    message:
      "I couldn't be happier with the results. The website is both beautiful and functional!",
  },
  {
    img: "/assets/blog/blog-3.png",
    name: "David Johnson",
    message:
      "Excellent work! The project was handled professionally from start to finish!",
  },
  {
    img: "/assets/blog/blog-4.png",
    name: "Olivia Williams",
    message:
      "Everthing was delivered on time and the design exceed my expectations",
  },
  {
    img: "/assets/testimonial/img-5.png",
    name: "Isabella Brown",
    message:
      "Amazing attention to detail. My site looks professional and user-friendly",
  },
  {
    img: "/assets/testimonial/img-6.png",
    name: "Liam Davis",
    message:
      "The team truly understood my needs. My website is faster and looks great",
  },
];

const Blogs = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  // state to store the active slide index
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="pt-[120px] py-[80px] overflow-hidden" id="blogs">
      <div className="container mx-auto">
        <Pretitle text="Blogs" center />
        <AnimatedText
          text="Things We've been through"
          textStyles="h2 mb-[30px] xl:mb-2 text-center"
        />
        <div className="flex flex-col lg:flex-col gap-12">
          {/* slider info */}
          <div
            className="w-max xl:w-[700px] flex flex-col 
          justify-center items-center xl:items-start text-center xl:text-left 
          mx-auto xl:mx-0"
          ></div>
          {/* slider */}
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            centeredSlides={true}
            onSwiper={setSwiperRef}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            //update the active slide index
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full h-[400px] xl:h-[450px]"
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide key={index} className="h-full select-none">
                  <div className="w-full h-full flex items-end">
                    <div
                      className={`${
                        activeSlide === index ? "h-full" : "h-[360px]"
                      } flex items-end rounded-2xl overflow-hidden
                      transition-all duration-500 relative w-full`}
                    >
                      <Image
                        src={slide.img}
                        className="h-48 w-128 object-cover object-center"
                        quality={100}
                        fill
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex flex-col items-center">
            <h3 className="h3 mb-2">{slides[activeSlide].name}</h3>
            <p className="mb-3 max-w-[360px] text-center">
              {slides[activeSlide].message}
            </p>
            {/* slider btns */}
            <div className="flex gap-3">
              <button
                onClick={handlePrevious}
                className="text-2xl bg-accent w-[48px] h-[48px] text-white
                rounded-full flex items-center justify-center hover:bg-accent-hover
                transition-all duration-300"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="text-2xl bg-accent w-[48px] h-[48px] text-white
                rounded-full flex items-center justify-center hover:bg-accent-hover
                transition-all duration-300"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
