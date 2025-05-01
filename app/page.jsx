"use client";
import { useEffect, useState } from "react";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work/Work";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats/Stats";
import Faq from "@/components/Faq/Faq";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Gallery from "@/components/Gallery";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";

const Home = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Topbar />
      {/* static header */}
      <div className="relative z-10">
        <Header />
      </div>
      {/* animate header */}
      <div
        className={`w-full transition-transform duration-200 fixed top-0 left-0 z-50 
          ${headerActive ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <Hero />
      <Features />
      <Services />
      <Steps />
      <Stats />
      <Work />
      <Gallery />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
