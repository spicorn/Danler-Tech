// import content
import { useEffect } from "react";
import { content } from "../Content";
import BackgroundAnimation from "../Layouts/background";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/responsive.json";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="flex sm:flex-row flex-col justify-center items-center order-1 absolute w-full h-full">
        <BackgroundAnimation />
      </div>
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
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
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
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
