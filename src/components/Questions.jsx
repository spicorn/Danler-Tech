"use client";
import { content } from "../Content";
import { useState } from "react";
import { motion } from "motion/react";

const Questions = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="testimonials">
      <div className="md:container px-5 ">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {Testimonials.title}
        </motion.h2>

        <motion.h4
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {Testimonials.subtitle}
        </motion.h4>

        <br />

        <div className="flex flex-col gap-10 items-start sm:flex-row"></div>
      </div>
    </section>
  );
};

export default Questions;
