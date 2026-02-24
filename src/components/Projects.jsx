import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/service.json";
import animation from "../assets/lottie/heading.json";
import { HeroParallax } from "../Layouts/HeroParallax";

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
    title: "Real Estate Website",
    link: "#",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/home.png?updatedAt=1715932036803",
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
    title: "Real Estate Website",
    link: "#",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/home.png?updatedAt=1715932036803",
  },

  {
    title: "Associated Foods Zimabwe",
    link: "https://spicorn.github.io/Associated-Foods-ZImbabwe/",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/afz.png?updatedAt=1715932037352",
  },
  {
    title: "Real Estate Website",
    link: "#",
    thumbnail:
      "https://ik.imagekit.io/qvdv4r3lk/home.png?updatedAt=1715932036803",
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
  const { Projects } = content;
  return (
    <section id="projects">
      <div className=" px-5 pt-5 min-h-screen flex flex-col justify-between">
        <div className="md:container">
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            <Lottie
              animationData={animation}
              data-aos="fade-right"
              className="max-w-[15vw] min-w-[12rem]"
            />
          </h4>
        </div>
        <HeroParallax products={products} />
      </div>
    </section>
  );
};

export default Projects;
