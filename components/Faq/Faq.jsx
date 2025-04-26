import React from "react";
import Pretitle from "../Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const faqItemsData = [
  {
    title: "How long does a calibration usually take?",
    description: "We could finish for 5 days after the entry queue.",
  },
  {
    title: "Do I need qoutation for my equeipment need calibrated?",
    description: "Yes, to make sure list and order are match.",
  },
  {
    title: "How long does a calibration usually take?",
    description: "We could finish for 5 days after the entry queue.",
  },
  {
    title: "How long does a calibration usually take?",
    description: "We could finish for 5 days after the entry queue.",
  },
  {
    title: "How long does a calibration usually take?",
    description: "We could finish for 5 days after the entry queue.",
  },
  {
    title: "How long does a calibration usually take?",
    description: "We could finish for 5 days after the entry queue.",
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
            From project planning to final touches, We've answered the most
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
