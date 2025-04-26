"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import RotatingShape from "./RotatingShape";
import Header from "./Header";
import CompanyLogo from "./CompanyLogo";

const Hero = () => {
  return (
    <section className="h-[760px] relative bg-accent/10 xl:bg-[#f8fafc]" id="home">
      {/* header */}
      <Header />
      <div className="container mx-auto h-full">
        <div
          className="relative z-20 h-full w-full xl:max-w-[600px] flex flex-col
          items-center xl:items-start justify-center text-center xl:text-left pt-10"
        >
          <h1 className="h1 font-semibold mb-1 max-w-[320px] xl:max-w-none">
            <span className="text-accent">Calibration</span> Ensuring Precision with
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Process", 2000, "Standards", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4 text-accent"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7">
          Ensuring Compliance Through Proper Laboratory Calibration Procedures
          </p>
          <div className="flex gap-5">
            <ScrollLink to="services" smooth>
              <button className="btn flex gap-2 btn-accent mb-8 rounded-[25px] hover:scale-110 font-semibold transition duration-300">
                Explore Our Services
              </button>
            </ScrollLink>
          </div>
        </div>
        {/* image */}
        <div className="hidden xl:flex w-[56vw] h-[1000px] absolute top-0 right-0">
          <div className="absolute  w-[588px] h-[600px]  top-20 z-40  left-[6.5vw]">
            <Image
              src="/assets/hero/dev.png"
              fill
              quality="100"
              priority
              className="rounded-[25px] object-contain"
              alt=""
            />
          </div>
          {/* arrow shape */}
          <div
            className="hidden xl:flex absolute top-48 left-[4vw]"
            data-scroll
            data-scroll-speed="0.05"
          >
            <Image
              src="/assets/hero/arrow.svg"
              width={160}
              height={160}
              alt=""
            />
          </div>
          {/* shape 1 */}
          <div
            className="absolute top-[600px] left-[3vw]"
            data-scroll
            data-scroll-speed="0.2"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-1.svg"
                  width={38}
                  height={38}
                  alt=""
                />
              }
              direction="left"
              duration={6}
            />
          </div>
          {/* shape 2 */}
          <div
            className="absolute top-[240px] xl:left-[30vw]"
            data-scroll
            data-scroll-speed="0.1"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-2.svg"
                  width={34}
                  height={34}
                  alt=""
                />
              }
              direction="right"
              duration={5}
            />
          </div>
          {/* shape 3 */}
          <div
            className="absolute top-[480px] left-[40vw]"
            data-scroll
            data-scroll-speed="0.08"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-3.svg"
                  width={36}
                  height={36}
                  alt=""
                />
              }
              direction="left"
              duration={7}
            />
          </div>
        </div>
      </div>
      <CompanyLogo />
    </section>
  );
};

export default Hero;
