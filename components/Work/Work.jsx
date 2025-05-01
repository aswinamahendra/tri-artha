import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";

// sample data for projects with various categories
const data = [
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-1.jpg",
    title: "Pressure Recorder",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-2.png",
    title: "Pressure Gauge",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-3.png",
    title: "Pressure Transmitter",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-4.png",
    title: "Digital Pressure",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-5.png",
    title: "Tong Torque",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-6.png",
    title: "Pressure Tranducer",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-7.png",
    title: "Weight Indicator",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-8.png",
    title: "Pressure Relief Valve",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-9.png",
    title: "Inside Micrometer",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-10.png",
    title: "Outside Micrometer",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-11.png",
    title: "Dial Indicator",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-12.png",
    title: "Hardness Tester",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-13.png",
    title: "Digital Caliper",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-14.png",
    title: "Depth Caliper",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-15.png",
    title: "PH Meter",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-16.png",
    title: "Conductivity Meter",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-17.png",
    title: "Steel Ruler",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-18.png",
    title: "Roll Meter",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-19.png",
    title: "Digital Balance",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-20.png",
    title: "Weighting Scale",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-21.png",
    title: "Floor Scale",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-22.png",
    title: "Yoke Permanent",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-23.png",
    title: "Clamp Meter",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-24.png",
    title: "Digital Multimeter",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-25.png",
    title: "Earth Tester",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-26.png",
    title: "Lux/Light Meter",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-27.png",
    title: "Sound Level Meter",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-28.png",
    title: "Load Cell",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-29.png",
    title: "Torque Wrench",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-30.png",
    title: "Crane Scale",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-31.png",
    title: "Thermocouple",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-32.png",
    title: "Infrared Thermometer",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-33.png",
    title: "Digital Thermometer",
  },
  {
    category: "Industrial",
    img: "/assets/work/industrial/industrial-34.png",
    title: "Flow Meter",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-1.png",
    title: "Automatic External Defibrilator",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-2.png",
    title: "Ambulatory ECG",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-3.png",
    title: "Aspirators",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-4.png",
    title: "Auto Clave",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-5.png",
    title: "Baby Incubator",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-6.png",
    title: "Patient Monitor",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-7.png",
    title: "Blood Bank Refrigerators",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-8.png",
    title: "Blood Pressure Units",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-9.png",
    title: "Centrifuge",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-10.png",
    title: "Defibrilator",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-11.png",
    title: "Endoscopes",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-12.png",
    title: "Enternal Pumps",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-13.png",
    title: "Infant Warmer",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-14.png",
    title: "Infusion Pumps",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-15.png",
    title: "Micropipete",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-16.png",
    title: "Medical Refrigerator",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-17.png",
    title: "Oximeters",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-18.png",
    title: "Sterillizer",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-19.png",
    title: "Surgical Microscopes",
  },
  {
    category: "Medical",
    img: "/assets/work/medic/medic-20.png",
    title: "Sanitarian Kit",
  },
  {
    category: "Training",
    img: "/assets/work/training/training-1.png",
    title: "Temperature Training",
  },
  {
    category: "Training",
    img: "/assets/work/training/training-2.png",
    title: "Flow Training",
  },
  {
    category: "Training",
    img: "/assets/work/training/training-3.png",
    title: "Pressure Training",
  },
  {
    category: "Training",
    img: "/assets/work/training/training-4.png",
    title: "Dimensional Training",
  },
  {
    category: "Training",
    img: "/assets/work/training/training-5.png",
    title: "Force Training",
  },
  {
    category: "Training",
    img: "/assets/work/training/training-6.png",
    title: "Volume Training",
  },
  {
    category: "Training",
    img: "/assets/work/training/training-7.png",
    title: "Electrical Training",
  },
];

const Work = () => {
  // extract unique categories from the data
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  // create tab data with "all" category and unique categories from data
  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  // state to manage the currently selected tab
  const [tabValue, setTabValue] = useState("all");
  // number of items to show initially
  const [visibleItems, setVisibleItems] = useState(6);

  //filter work items based on the selected tab
  const filterWork =
    tabValue === "all"
      ? data.filter((item) => item.category !== "all")
      : data.filter((item) => item.category === tabValue);

  // handle loading more items
  const loadMoreItems = () => {
    //adjust the number to control how many items are loaded at a time
    setVisibleItems((prev) => prev + 2);
  };

  return (
    <section className="pt-24 min-h-[1000px]" id="services">
      <div className="container mx-auto">
        <AnimatedText text="Our Services" textStyles="h2 mb-[30px] text-center xl:mb-0" />
        <Tabs defaultValue="all" className="w-full flex flex-col mt-12 items-center">
          <div
            className="flex flex-col xl:flex-row items-center xl:items-start
            xl:justify-between mb-[30px]"
          >
            {/* render tab triggers */}
            <TabsList
              className="max-w-max h-full mb-[30px] flex flex-col md:flex-row
            gap-4 md:gap-0"
            >
              {tabData.map((item, index) => {
                return (
                  <TabsTrigger
                    value={item.category}
                    key={index}
                    className="capitalize w-[120px]"
                    onClick={() => setTabValue(item.category)}
                  >
                    {item.category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* render content for the selected tab */}
          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* load more button */}
            {visibleItems < filterWork.length && (
              <div className="flex justify-center mt-12">
                <button onClick={loadMoreItems} className="btn btn-accent">
                  Load more
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
