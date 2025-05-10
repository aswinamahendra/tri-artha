import React from "react";
import Pretitle from "../Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const faqItemsData = [
  {
    title: "How long does a calibration usually take?",
    description: "We could finish for 5-7 days after the entry queue.",
  },
  {
    title: "Do I need qoutation for my equipment need calibrated?",
    description: "Yes, to make sure list and order are match.",
  },
  {
    title: "Can We request this work order onsite?",
    description: "Yes but make sure you're confirm to our team afte the qoutation.",
  },
  {
    title: "How can we prove that calibration already done?",
    description: "Currently, We put a Sticker calibration on the equipment and Certification for validation.",
  },
  {
    title: "Where we can send a qoutation or equipment list?",
    description: "There's a button Get a Qoute and contact information at the topbar.",
  },
];

// animation variants for FAQ items
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 }, // staggered animation
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32 pb-[100px]">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3">Got Questions? We've Got You Covered</h2>
          <p className="mb-11 max-w-[520px] mx-auto">
            From work order to certification, We've answered the most
            common questions to help you make informed decisions.
          </p>
        </motion.div>
        {/* faq items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => {
            return (
              <motion.li
                variants={faqItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.8 }}
                custom={index}
                key={index}
              >
                <FaqItem title={item.title} description={item.description} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
