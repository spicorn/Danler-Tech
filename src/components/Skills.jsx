// import content
import { content } from "../Content";
import { motion } from "motion/react";

const Skills = () => {
  const { skills } = content;

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* content */}
      <div className="md:container px-5  py-14">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {skills.title}
        </motion.h2>
        <motion.h4
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {skills.subtitle}
        </motion.h4>
        <br />
        <div className="flex justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10"
          >
            {skills.skills_content.map((skill, i) => (
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
                className="relative flex h-[12em] w-[18em] items-center justify-center rounded-[1.5em] border-[1px] border-dark_primary bg-bg_light_primary p-[1.5em] text-lime-300"
              >
                <div className="group absolute -mt-10 left-1/2 top-1/2 flex h-[3em] w-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] border-[#ffffffaa] bg-slate-900/80 backdrop-blur-[6px] duration-[500ms] hover:h-[10em] hover:w-[16em] hover:rounded-[1.5em]">
                  <svg
                    className="h-[1.5em] w-[1.5em]  duration-300 group-hover:opacity-0"
                    viewBox="0 0 48 48"
                    fill="none"
                    height="48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#a)">
                      <path
                        clipRule="evenodd"
                        d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
                        fillRule="evenodd"
                        fill="#fff"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path d="M0 0h48v48H0z" fill="#fff"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="items-left duration-600 absolute left-0 top-0 flex h-[10em] w-[16em] translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,85%)] group-hover:translate-y-0">
                    <div className="items-left flex flex-col justify-center">
                      <p className="text-[0.9em] font-light text-white">{skill.para}</p>
                    </div>
                  </div>
                </div>
                <h1 className="text-center mt-8 font-nunito text-[2em] font-black text-dark_primary">
                  {skill.name}
                </h1>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
