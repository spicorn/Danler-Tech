import Lottie from "lottie-react";
import { content } from "../Content";
import animationData from "../assets/lottie/contact.json";

const Hireme = () => {
  const { Hireme } = content;
  const { Contact } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center ">
          <Lottie
            animationData={animationData}
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />

          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] md:ml-96 "
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <a href={content.Contact.social_media[1].link} target="_blank">
              <button className="btn bg-dark_primary text-white">
                {Hireme.btnText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
