"use client"
import { useEffect } from "react";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work/Work";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats/Stats";
import Faq from "@/components/Faq/Faq";
import CompanyLogo from "@/components/CompanyLogo";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Blogs from "@/components/Blogs";
import Topbar from "@/components/Topbar";

const Home = () => {
  // implement locomotive scroll
  useEffect(()=> {
    const loadLocomotiveScroll = async() => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <div>
      <Topbar />
      <Hero />
      <Features />
      <Services />
      <Steps />
      <Stats />
      <Work />
      <Blogs />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
