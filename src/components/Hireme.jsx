import Lottie from "lottie-react";
import { content } from "../Content";
import animationData from "../assets/lottie/contact.json";
import { Button } from "../Layouts/MovingBorder";
import { Rocket } from "lucide-react";
import { motion } from "motion/react";

const Hireme = () => {
  const { Hireme } = content;
  const { Contact } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {Hireme.title}
        </motion.h2>
        <motion.h4
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {Hireme.subtitle}
        </motion.h4>
        <br />
        <div className="flex items-center ">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-sm md:block hidden"
          >
            <Lottie animationData={animationData} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] md:ml-96 mb-8 "
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <a href={content.Contact.social_media[1].link} target="_blank">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-transparent text-black dark:text-black border-neutral-200 flex items-center gap-2"
              >
                <Rocket size={18} />
                {Hireme.btnText}
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
