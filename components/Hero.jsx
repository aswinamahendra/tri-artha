"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import CompanyLogo from "./CompanyLogo";

const Hero = () => {
  return (
    <section
      className="w-full h-[670px] pb-[60px] relative bg-accent/10 xl:bg-[#f8fafc]"
      id="home"
    >
      <div className="container mx-auto h-full">
        <div
          className="relative z-20 h-full w-full xl:max-w-[600px] flex flex-col
          items-center xl:items-start justify-center text-center xl:text-left pt-[70px]"
        >
          <h1 className="h1 font-semibold mb-1 max-w-[320px] xl:max-w-none">
            <span className="text-accent">Calibration</span> Ensuring Precision
            for
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Industrial", 2000, "Medical", 2000]}
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
        <div className="hidden xl:flex w-[56vw] h-[900px] absolute top-0 right-0">
          <div className="absolute w-[588px] h-[490px] top-20 z-40 left-[6.5vw]">
            <Image
              src="/assets/hero/dev.png"
              fill
              quality="100"
              priority
              className="object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
      <CompanyLogo />
    </section>
  );
};

export default Hero;
