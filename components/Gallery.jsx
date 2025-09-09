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
    img: "/assets/gallery/gallery-1.jpg",
    name: "Visiting an audit by the Ministry of Health team",
    message:
      "14 March 2025",
  },
  {
    img: "/assets/gallery/gallery-2.jpg",
    name: "Surveillance an Audit by National Accreditation Committee",
    message:
      "08 Febuary 2025",
  },
  {
    img: "/assets/gallery/gallery-3.jpg",
    name: "General Inspection by Flow Meter Team",
    message:
      "05 August 2024",
  },
  {
    img: "/assets/gallery/gallery-4.jpg",
    name: "Calibration Batching Plant at Adhi Persada Beton, Sragen",
    message:
      "01 December 2024",
  },
  {
    img: "/assets/gallery/gallery-5.jpg",
    name: "Meeting with Professional Quality Team at Frisian Flag Indonesia Cikarang",
    message:
      "22 March 2025",
  },
  {
    img: "/assets/gallery/gallery-6.jpg",
    name: "Recalibration Crane Scale at Schlumberger Cikarang",
    message:
      "12 November 2024",
  },
  {
    img: "/assets/gallery/gallery-7.jpg",
    name: "Visiting Laboratory Facility at Frisian Flag Indonesia Pasar Rebo",
    message:
      "14 September 2024",
  },
  {
    img: "/assets/gallery/gallery-8.jpg",
    name: "Flow Meter Calibration at Weatherford Indonesia Bekasi",
    message:
      "10 October 2024",
  },
  {
    img: "/assets/gallery/gallery-9.jpg",
    name: "Recalibration Pressure Gauge at Schlumberger Workshop Cikarang",
    message:
      "15 June 2024",
  },
  {
    img: "/assets/gallery/gallery-10.jpg",
    name: "Adjustment and Calibrating Compression Testing Maching at Muarateweh Springs",
    message:
      "18 Febuary 2024",
  },
  {
    img: "/assets/gallery/gallery-11.jpg",
    name: "Meeting with PT. Elnusa",
    message:
      "20 Agustus 2025",
  },
  {
    img: "/assets/gallery/gallery-12.jpg",
    name: "Discussion and Negotiation with one of the teams from the DKI DPU",
    message:
      "28 Juli 2025",
  },
  {
    img: "/assets/gallery/gallery-13.jpg",
    name: "Internal Calibration Training for Pressure, Flow Meter, Temperature, Mass & Scales, and Chemical Analysis at PT. Frisian Flag Indonesia",
    message:
      "28 Agustus 2025",
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
    <div className="pt-[120px] py-[80px] overflow-hidden" id="gallery">
      <div className="container mx-auto">
        <Pretitle text="Gallery" center />
        <AnimatedText
          text="Things We've been through"
          textStyles="h2 mb-[30px] xl:mb-2 text-center"
        />
        <div className="flex flex-col lg:flex-col gap-12">
          {/* slider info */}
          <div
            className="w-max xl:w-[600px] flex flex-col 
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
            <h3 className="h3 mb-2 text-center">{slides[activeSlide].name}</h3>
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
