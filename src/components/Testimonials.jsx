"use client";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import AnimatedListDemo from "./AnimatedListDemo";
import { Pagination } from "swiper";
import { useState } from "react";
import { motion } from "motion/react";

const Testimonials = () => {
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

        <div className="flex flex-col gap-10 items-start sm:flex-row">
          {/* LEFT - Testimonials slider */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Swiper
              direction={"vertical"}
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={40}
              slidesPerView={1.7}
              onSlideChange={(e) => {
                setActiveIndex(e.realIndex);
              }}
              modules={[Pagination]}
              className="md:h-96 h-[40rem] max-w-3xl"
            >
              {Testimonials.testimonials_content.map((content, i) => (
                <SwiperSlide key={i}>
                  <div
                    className={`duration-500 bg-bg_light_primary mx-8 border-2 
                p-8 h-full rounded-2xl flex items-center gap-6
                border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
                  >
                    <img src={content.img} alt="..." className="h-24" />
                    <div>
                      <p className="sm:text-base text-sm">{content.review}</p>
                      <br />
                      <a
                        className="font-Poppins"
                        href={content.link}
                        target="_blank"
                      >
                        {content.name}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* RIGHT - Only visible on md+ */}
          <div className=" md:block md:w-1/3">
            <AnimatedListDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
