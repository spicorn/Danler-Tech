import { useState, useEffect } from "react";
import { content } from "../Content";
import Lottie from "lottie-react";
import animation from "../assets/lottie/heading.json";
import { HeroParallax } from "../Layouts/HeroParallax";
import MobileView from "../components/MobileProjects";
import { motion } from "motion/react";

export const products = [
  {
    title: "Chema",
    link: "https://chema.muzukuru.com",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/Screenshot%202026-02-20%20103549.png?updatedAt=1771576794569",
  },
  {
    title: "First Mutual",
    link: "https://first-mutual.muzukuru.com/",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
  },
  {
    title: "Vakani Bricks",
    link: "https://spicorn.github.io/Vakani/",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/vakani.png?updatedAt=1715932037555",
  },

  {
    title: "Associated Foods Zimabwe",
    link: "https://spicorn.github.io/Associated-Foods-ZImbabwe/",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/afz.png?updatedAt=1715932037352",
  },
  {
    title: "Tob Energy",
    link: "https://spicorn.github.io/tobenergy/",
    thumbnail: "https://ik.imagekit.io/qvdv4r3lk/tob.png",
  },

  {
    title: "Instant Homes",
    link: "https://spicorn.github.io/instanthomes/",
    thumbnail:
      "https://ik.imagekit.io/wuvzopkfi/homes.png?updatedAt=1751534434332",
  },

  {
    title: "Associated Foods Zimabwe",
    link: "https://spicorn.github.io/Associated-Foods-ZImbabwe/",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/afz.png?updatedAt=1715932037352",
  },
  {
    title: "Chema",
    link: "https://chema.muzukuru.com",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/Screenshot%202026-02-20%20103549.png?updatedAt=1771576794569",
  },
  {
    title: "Instant Homes",
    link: "https://spicorn.github.io/instanthomes/",
    thumbnail:
      "https://ik.imagekit.io/wuvzopkfi/homes.png?updatedAt=1751534434332",
  },
  {
    title: "First Mutual",
    link: "https://first-mutual.muzukuru.com/",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
  },
  {
    title: "Tob Energy",
    link: "https://spicorn.github.io/tobenergy/",
    thumbnail: "https://ik.imagekit.io/qvdv4r3lk/tob.png",
  },

  {
    title: "Associated Foods Zimabwe",
    link: "https://spicorn.github.io/Associated-Foods-ZImbabwe/",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/afz.png?updatedAt=1715932037352",
  },
  {
    title: "Tob Energy",
    link: "https://spicorn.github.io/tobenergy/",
    thumbnail: "https://ik.imagekit.io/qvdv4r3lk/tob.png",
  },

  {
    title: "First Mutual",
    link: "https://first-mutual.muzukuru.com/",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
  },
  {
    title: "Chema",
    link: "https://chema.muzukuru.com",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/Screenshot%202026-02-20%20103549.png?updatedAt=1771576794569",
  },
];
const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { Projects } = content;

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMobile) {
    return <MobileView />;
  }

  return (
    <section id="portfolio">
      <div className=" px-5 pt-5 min-h-screen flex flex-col justify-between">
        <div className="md:container">
          <motion.h2
            className="title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {Projects.title}
          </motion.h2>
          <motion.h5
            className="subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <Lottie
                animationData={animation}
                className="max-w-[15vw] min-w-[12rem]"
              />
            </motion.div>
          </motion.h5>
        </div>
        <HeroParallax products={products} />
      </div>
    </section>
  );
};

export default Projects;
