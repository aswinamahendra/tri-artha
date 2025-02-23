"use client";

import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

const journey = [
  // experience
  {
    type: "experience",
    company: "Upwork",
    logoUrl: "/assets/journey/experience/logo-2.svg",
    position: "Frontend Developer and UI UX Designer - Freelance",
    duration: "May 2024 - Now",
    description:
      "Built and Design websites and web apps using Next.js, Tailwind CSS, and Javascript. Worked on scalable, user-friendly solutions.",
  },
  {
    type: "experience",
    company: "Dribbble",
    logoUrl: "/assets/journey/experience/logo-4.svg",
    position: "UI UX Designer - Freelance",
    duration: "Mar 2023 - Now",
    description:
      "Designed web interfaces with cross-browser compability and responsiveness. ",
  },
  {
    type: "experience",
    company: "GreatStack",
    logoUrl: "/assets/journey/experience/logo-3.svg",
    position: "Full Stack Developer",
    duration: "Jun 2024 - Des 2024",
    description:
      "Developed full-stack solutions using React and Node.js. Intergrated frontend and backend technologies.",
  },
  {
    type: "experience",
    company: "Norland Indonesia",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "Frontend Developer - Freelance",
    duration: "Jul 2023 - Aug 2023",
    description:
      "Built websites and web apps using Next.js, Tailwind CSS, and Javascript. Worked on scalable, user-friendly solutions.",
  },  
  
  // education
  {
    type: "education",
    institution: "BuildWithAngga Bootcamp",
    logoUrl: "/assets/journey/education/logo-2.svg",
    qualification: "Full Stack Dev Cert",
    duration: "Jan 2023 - Jul 2024",
    description:
      "Learned full-stack development concepts, focusing on React, Node.js, and APIs. Completed hands-on projects to solidify skills.",
  },
  {
    type: "education",
    institution: "CodingStudio Bootcamp",
    logoUrl: "/assets/journey/education/logo-1.svg",
    qualification: "Web Development Bootcamp",
    duration: "Sep 2023 - Oct 2023",
    description:
      "Gained experience in frontend and backend technologies, including React, Node.js and databases.",
  },
  {
    type: "education",
    institution: "SigmaTech Indonesia",
    logoUrl: "/assets/journey/education/logo-3.svg",
    qualification: "Frontend Bootcamp",
    duration: "Mar 2021 - Mar 2021",
    description:
      "Completed certification in frontend, focusing on Agile methodlogies and effective team collaboration.",
  },
  {
    type: "education",
    institution: "Pamulang University",
    logoUrl: "/assets/journey/education/institution.svg",
    qualification: "Information of Technology Degree",
    duration: "Sep 2016 - Dec 2020",
    description:
      "Studied advanced principles of user interface and user experience design. Developed skills in prototyping, wireframing and usability testing.",
  },
  // skills
  {
    type: "skill",
    name: "HTML",
    icon: <FaHtml5 />,
    duration: "Learned in 2018",
    description:
      "Crafted structured web content using HTML effectively for modern websites, ensuring semanting markup and accessibility.",
  },
  {
    type: "skill",
    name: "CSS",
    icon: <FaCss3Alt />,
    duration: "Learned in 2018",
    description:
      "Styled responsive web pages using CSS, ensuring an appealing user experience with modern design principles and layouts.",
  },
  {
    type: "skill",
    name: "Javascript",
    icon: <FaJs />,
    duration: "Learned in 2020",
    description:
      "Implemented Javascript for interactivity, enhancing user engagement on websites through dynamic content and features.",
  },
  {
    type: "skill",
    name: "React.js",
    icon: <FaReact />,
    duration: "Learned in 2023",
    description:
      "Build dynamic user interfaces using React.js optimizing component-driven design for seamless user experience and efficiency.",
  },
  {
    type: "skill",
    name: "WordPress",
    icon: <FaWordpress />,
    duration: "Learned in 2023",
    description:
      "Developed dynamic websites with WordPress, simplifying content management processes while ensuring scalability and performance.",
  },
  {
    type: "skill",
    name: "Figma",
    icon: <FaFigma />,
    duration: "Learned in 2021",
    description:
      "Designed user interfaces in Figma, facilitating collaboration and rapid prototyping to meet user needs and project goals.",
  },
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">My Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "skill")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;
