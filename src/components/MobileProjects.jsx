import { MoveRight } from "lucide-react";
import { content } from "../Content";
import { Button } from "../Layouts/MovingBorder";
import { motion } from "motion/react";

const { Projects } = content;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const projects = [
  {
    id: 1,
    title: "First Mutual Holdings Limited",
    description:
      "Designed and developed features for the First Mutual Muzukuru online platform, focusing on performance, usability and seamless user experience.",
    image:
      "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    liveUrl: "https://first-mutual.muzukuru.com/",
    featured: false,
  },
  {
    id: 2,
    title: "Instant Homes",
    description:
      "Instant Homes is Zimbabwe's leading provider of high-quality, customizable, and sustainable prefab homes. Our homes are adapted from Australian designs to suit Zimbabwean needs, ensuring comfort, efficiency, and affordability for all.",
    image: "https://ik.imagekit.io/qvdv4r3lk/instant.png",
    liveUrl: "https://spicorn.github.io/instanthomes",
    featured: false,
  },
  {
    id: 3,
    title: "Associated Foods Zimbabwe",
    description:
      "Associated Foods Zimbabwe is a leading food manufacturer and distributor of quality Spreads, Canned Products, Preserves and Snack Foods in Zimbabwe.",
    image: "https://ik.imagekit.io/qvdv4r3lk/afz.png?updatedAt=1715932037352",
    liveUrl: "https://spicorn.github.io/Associated-Foods-ZImbabwe",
  },
  {
    id: 4,
    title: "Vakani Bricks",
    description:
      "Vakani is a leading building materials company that provides high quality products and reliable services to customers and communities in and around Zimbabwe.",
    image:
      "https://ik.imagekit.io/qvdv4r3lk/vakani.png?updatedAt=1715932037555",
    liveUrl: "https://spicorn.github.io/Vakani",
  },
  {
    id: 5,
    title: "TOB Energy",
    description:
      "TOB Energy (Private) Limited is a Zimbabwean indigenous trading firm. Its organizational roots stem from efficiently sourcing and producing services and products enabling us to deliver them to the customers at a fair cost timeously whilst upholding quality standards.",
    image: "https://ik.imagekit.io/qvdv4r3lk/tob.png?updatedAt=1771969651830",
    liveUrl: "https://spicorn.github.io/tobenergy",
    featured: false,
  },
  {
    id: 6,
    title: "Mineral Marven Consultancy",
    description:
      "Mineral Maven Mining is a trusted mining consultancy that provides expert guidance and solutions to help mining companies optimize their operations, improve efficiency, and reduce costs.It also connects mining companies with investors and provides expert guidance to help them succeed.",
    image: "https://ik.imagekit.io/qvdv4r3lk/mineral.png",
    liveUrl: "https://spicorn.github.io/Marvern",
    featured: false,
  },
  {
    id: 7,
    title: "Chema",
    description:
      "Chema is an online platform where users are able to donate or pay chema to the family of the deceased to show love to the family. It is owned by Muzukuru Funeral Streaming Company(Ongoing)",
    image:
      "https://ik.imagekit.io/qvdv4r3lk/Screenshot%202026-02-20%20103549.png?updatedAt=1771576794569",
    liveUrl: "https://chema.muzukuru.com/",
    Ongoing: true,
  },
];

const Portfolio = () => (
  <section id="projects" className="py-10 relative overflow-hidden">
    <div className="container mx-auto px-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {Projects.title}
        </motion.h2>
        <motion.h5
          className="subtitle text-xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {Projects.subtitle}
        </motion.h5>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <img
                src={project.image}
                alt={project.title}
                className="object-contain h-full w-full"
                loading="lazy"
              />
            </div>
            {/* Project Info */}
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-lg font-semibold  mb-2 text-center">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-center">
                {project.description}
              </p>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto"
              >
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-transparent text-black dark:text-black border-neutral-200 "
                >
                  Preview
                  <MoveRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </a>
              {project.featured && (
                <span className="ml-2 mt-2 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-medium rounded-full">
                  Featured
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Portfolio;
