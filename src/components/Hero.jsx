"use client";
import { content } from "../Content";
import BackgroundAnimation from "../Layouts/background";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/responsive.json";
import { Tooltip } from "../Layouts/Tooltip";
import { ThreeDMarquee } from "../Layouts/Marquee";

const Hero = () => {
  const { hero } = content;
  const images = [
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884p",
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    "https://ik.imagekit.io/qvdv4r3lk/vakani.png?updatedAt=1715932037555",
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    "https://ik.imagekit.io/qvdv4r3lk/Screenshot%202026-02-20%20103549.png?updatedAt=1771576794569",
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    "https://ik.imagekit.io/qvdv4r3lk/home.png?updatedAt=1715932036803",
    "https://ik.imagekit.io/qvdv4r3lk/afz.png?updatedAt=1715932037352",
    "https://ik.imagekit.io/wuvzopkfi/homes.png?updatedAt=1751534434332",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
  ];
  const people = [
    {
      id: 1,
      name: "Dancel Mautsa",
      designation: "Frontend Developer",
      image: "https://ik.imagekit.io/qvdv4r3lk/me.png?updatedAt=1721930401325",
    },
    {
      id: 2,
      name: "Tinotenda Mautsa",
      designation: "Software Engineer",
      image:
        "https://ik.imagekit.io/qvdv4r3lk/danshe.png?updatedAt=1771403068943",
    },
    {
      id: 3,
      name: "Butler Nyamunokora",
      designation: "CEO",
      image: "https://ik.imagekit.io/qvdv4r3lk/me.png?updatedAt=1721930401325",
    },
    {
      id: 4,
      name: "Ngonidzashe Mautsa",
      designation: "UX Designer",
      image:
        "https://ik.imagekit.io/qvdv4r3lk/danshe.png?updatedAt=1771403068943",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  return (
    <section id="home" className="overflow-hidden">
      <div className="flex sm:flex-row flex-col justify-center items-center order-1 absolute w-full h-full">
        <BackgroundAnimation />
      </div>
      <div className="min-h-screen relative flex md:flex-row  flex-col-reverse  items-center justify-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          {/* <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1> */}
          <div className="hidden md:flex absolute flex-col items-center justify-center w-full gap-6">
            <ThreeDMarquee images={images} />

            {/* <p className="text-white text-center max-w-md px-4 md:mt-10 lg:mt-24 md:text-lg lg:text-xl">
              Crafting exceptional digital experiences through innovative web
              solutions.
            </p> */}
          </div>
        </div>

        {/* first col */}
        <div className=" px-4 items-center text-center" data-aos="fade-down">
          <h1 className="text-white mb-4 text-xl sm:text-5xl lg:text-text-lg lg:leading-normal font-extrabold">
            <TypeAnimation
              sequence={[
                "We Create",
                1000,
                "We Develop",
                1000,
                "We Design",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
                ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-28 flex justify-center">
            <Tooltip items={people} />
          </div>
        </div>

        {/* sec col */}
        <div className="hidden md:block md:h-[50rem] h-96 md:m-20">
          <Lottie
            animationData={animationData}
            data-aos="slide-up"
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
