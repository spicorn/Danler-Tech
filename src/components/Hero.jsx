"use client";
import { content } from "../Content";
import BackgroundAnimation from "../Layouts/background";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/responsive.json";
import { Button } from "../Layouts/MovingBorder";
import { Rocket } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
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
  return (
    <section id="home" className="overflow-hidden">
      <div className="flex sm:flex-row flex-col justify-center items-center order-1 absolute w-full h-full">
        <BackgroundAnimation />
      </div>
      <div className="min-h-[100vh] relative flex md:flex-row flex-col-reverse items-center justify-center py-10">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute inset-y-0 md:w-4/12 w-8/12 right-0 bg-primaryLinear -z-10"
        >
          <div className="hidden md:flex absolute flex-col items-center justify-center w-full gap-6">
            <ThreeDMarquee images={images} />
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
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-transparent text-black dark:text-black border-neutral-200 "
            >
              {hero.btnText}
            </Button>
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
          <div className="mt-10 md:mt-20 lg:mt-28 flex justify-center gap-4">
            <a href="#contact">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-transparent text-black border-neutral-200 flex items-center gap-2"
              >
                <Rocket size={18} />
                Get A Quote
              </Button>
            </a>
            <a href={content.Contact.social_media[1].link} target="_blank">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-transparent text-black dark:text-black border-neutral-200 flex items-center gap-2"
              >
                <MessageCircleMore size={18} />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>

        {/* sec col */}
        <div className="hidden md:flex md:h-[70vh] lg:h-[80vh] items-center justify-center md:m-10">
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
