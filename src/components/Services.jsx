import { content } from "../Content";
import { motion } from "motion/react";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {services.title}
        </motion.h2>
        <motion.h4
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {services.subtitle}
        </motion.h4>
        <br />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex gap-5 justify-between flex-wrap group"
        >
          {services.service_content.map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img src={service.logo} alt="..." className="mx-auto" />
              <h6 className="my-3">{service.title}</h6>
              <p className="leading-7">{service.para}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
