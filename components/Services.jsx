"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import { PiCertificateBold } from "react-icons/pi";
import { FaBriefcaseMedical, FaTools } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb"

const serviceData = [
  {
    name: "industrial",
    icon: <TbRulerMeasure />,
    title: "Industrial",
    description:
      "We calibrate with precision and standards, ensuring that every measurement is accurate, safe, and ready to use. Starting at 0, stable at 0, and ending at 0.",
    serviceList: [
      "Pressure",
      "Dimensional",
      "Volume",
      "Mass & Balance",
      "Electricity",
      "Temperature",
      "Torque Tester",
      "Flow",
      "Geodetic",
      "Chemical Analysts",
      "Sound Level",
    ],
    thumbs: [
      { url: "/assets/services/industry1.jpg" },
      { url: "/assets/services/industry2.jpg" },
    ],
  },
  {
    name: "medical",
    icon: <FaBriefcaseMedical />,
    title: "Medical",
    description:
      "Medical Equipment needs to be precise. We have to make sure that every tools able to operate for medical unit, here's the equipment list we can calibrate",
    serviceList: [
      "Life Support",
      "Radiology",
      "In Vitro Diagnostic",
      "Medic Rehability",
      "Electro Medic Diagnostic",
      "Surgical Equipment",
      "Sterilization and Disentification",
      "Dental Unit",
      "Personal Care",
    ],
    thumbs: [
      { url: "/assets/services/medical1.jpg" },
      { url: "/assets/services/medical3.jpg" },
    ],
  },
  {
    name: "training",
    icon: <PiCertificateBold />,
    title: "Training",
    description:
      "Calibration training is very important in enviroments like customer service quality assurance, acedemic granding, employee perfomance reviews, medical unit and anywhere standardized evaluation is critical",
    serviceList: [
      "Pressure",
      "Dimensional",
      "Volume",
      "Electricity",
      "Temperature",
      "Flow",
      "Force",
    ],
    thumbs: [
      { url: "/assets/services/training1.jpg" },
      { url: "/assets/services/training3.jpg" },
    ],
  },
  {
    name: "services",
    icon: <FaTools />,
    title: "Services",
    description:
      "We able to check the tools needs to be maintained and service. When it out of our tolerance We will make sure the tools are ready to use",
    serviceList: [
      "Repair and Service",
      "Adjustment and Settings",
      "Spare Parts",
      "General Checking",
      "Add and Buy Equipment",
    ],
    thumbs: [
      { url: "/assets/services/service1.jpg" },
      { url: "/assets/services/service2.jpg" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("industrial");

  return (
    <section className="pt-16 pb-[100px] xl:pt-24">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <h2 className="h2 mb-3">We Provide Solutions</h2>
          <p>
            Providing measured equipment to use, from checking to completion,
            with an accurate and good quality standard equiment.
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="industrial"
          onValueChange={(value) => setActiveTab(value)}
          className="flex flex-col xl:flex-row w-full gap-[30px]"
        >
          <TabsList
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] 
            w-full h-full border-none p-0 xl:w-[345px]"
          >
            {serviceData.map((item) => {
              return (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className="w-full rounded-[20px] h-[100px] flex items-center 
                  relative shadow-custom p-0 outline-none"
                >
                  <div
                    className={`w-[100px] rounded-[20px] h-[100px] flex items-center justify-center
                    absolute left-0 ${
                      activeTab === item.name
                        ? "bg-blue-400 text-white"
                        : "bg-blue-300 text-primary"
                    }`}
                  >
                    <div className="text-4xl">{item.icon}</div>
                  </div>
                  <div
                    className={`uppercase font-primary text-base font-semibold 
                  tracking-[.6px] w-[100px] ml-16 ${
                    activeTab === item.name ? "text-white" : "text-black"
                  }`}
                  >
                    {item.name}
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs Content */}
          <div className="flex-1 rounded-[20px] bg-white shadow-custom h-[490px] p-[30px]">
            {serviceData.map((item) => (
              <TabsContent key={item.name} value={item.name} className="m-0">
                <div className="flex flex-col md:flex-row gap-[30px]">
                  {/* images */}
                  <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                    {item.thumbs.map((thumb, index) => (
                      <div
                        key={index}
                        className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px] overflow-hidden"
                      >
                        <Image src={thumb.url} fill alt="" className="rounded-[20px]" objectFit="cover"/>
                      </div>
                    ))}
                  </div>
                  {/* text & button */}
                  <div>
                    <div>
                      <h3 className="h3 mb-6">{item.title}</h3>
                      <p className="mb-10 align-center">{item.description}</p>
                      {/* service list */}
                      <ul className="grid grid-cols-2 gap-4 mb-12">
                        {item.serviceList.map((service, index) => {
                          return (
                            <li key={index} className="flex items-center gap-4">
                              <div className="w-[6px] h-[6px] bg-accent"></div>
                              <div className="capitalize font-medium text-primary">
                                {service}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
