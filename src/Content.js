// import images

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },

    {
      link: "#services",
      icon: RiServiceLine,
    },

    {
      link: "#skills",
      icon: BsCodeSlash,
    },

    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    firstName: "Danler",
    LastName: "Tech",
    btnText: "Lets Work together",

    hero_content: [
      {
        count: "Danler",
        text: "Custom & Creative digital solutions.",
      },
      {
        count: "Tech",
        text: "Projects designed by Danler",
      },
    ],
  },
  skills: {
    title: "Quality Design Across Every Industry",
    subtitle: "Creative Technology Company",
    skills_content: [
      {
        name: "Website Design",
        para: " We offer a range of services related to websites, such as designing, developing and maintaining them. Whether you require a fresh website for your business.",
      },

      {
        name: "Digital Marketing",
        para: "In today's digital era, the significance of digital marketing for business growth cannot be overstated. Danler Tech got you covered.",
      },
      {
        name: "SEO Optimization",
        para: "We offer a comprehensive, holistic range of SEO services and our only interest is getting your website to the top of the search rankings and keeping it there.",
      },
      {
        name: "Web and Email Hosting",
        para: "Managed Web Hosting is suited to high traffic and highly secure websites. For your own peace of mind, Danler Tech will manage your VPS.",
      },
    ],
   
  },
  services: {
    title: "Why",
    subtitle: "Choose Us",
    service_content: [
      {
        title: "Great Support",
        para: "We treat you like the professional you are, supplying you a dedicated Account Manager to take control of your website,",
        logo: services_logo1,
      },
      {
        title: "We listen & do your homework",
        para: "You know your business better than anyone, so our first step is to listen while you tell us about your business and market. We'll then do some research on our own so that we realy gt to know the ins-and-outs of your industry and hot buttons for your customers.",
        logo: services_logo2,
      },
      {
        title: "We are on time and on budget",
        para: "We determine the scope of the web development project, create a budget and timeline and once they're approved, we stick to them. Just  to make sure, we do weekly status checks on progress and deadlines to kepp everyone you included on track.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    project_content: [
      {
        title: "Associated Foods Zimbabwe",
        image: project1,
        link: "https://associated-foods-zimbabwe.vercel.app",
      },
      {
        title: "Vakani",
        image: project2,
        link: "https://vakani.vercel.app",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "WHAT PEOPLE SAY ABOUT US",
    testimonials_content: [
      {
        review:
          "“ Great experience working with Danler Tech. Outstanding web, graphic design and marketing services. I highly recommend them.”",
        img: avatar1,
        link: " https://solarflair.co.zw/",
        name: "Solar Flair Zimbabwe",
      },
      {
        review:
          "“Remarkable web and graphic design . Very efficient team, love their after sale services.”",
        img: avatar2,
        link: "https://associated-foods-zimbabwe.vercel.app",
        name: "Associated Foods Zimbabwe",
      },
      {
        review:
          "“Danler Tech offers the best services at affordable prices. I highly recommend them.”",
        img: avatar3,
        link: "https://www.instagram.com/no_bu_kho_si/",
        name: "Noleen Manda",
      },
      {
        review:
          "“Danler Tech provided an excellent service experience. Their graphic design and marketing work was of outstanding quality. I strongly advise others to use Danler Tech's services.”",
        img: avatar4,
        link: "https://www.instagram.com/_tadiwa_nashe_/",
        name: "Ronald Mhizha",
      },
    ],
  },
  Hireme: {
    title: "Get In Touch",
    subtitle: "FOR YOUR PROJECTS",
    para: "Hie there, we're so excited to start working with you. Contact us now if you have any questions, or if you wanna request a quote or even chat...",
    btnText: "Get In Touch",
  },
  Contact: {
    title: "Contect Us",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "danlertech@gmail.com",
        icon: GrMail,
        link: "mailto:danlertech@gmail.com",
      },
      {
        text: "078 782 8366/ 077 703 3766",
        icon: BsWhatsapp,
        link: "https://wa.me/+263787828366",
      },

      {
        text: "danler_tech",
        icon: BsFacebook,
        link: "https://www.facebook.com/danler_tech/",
      },

      {
        text: "danler_tech",
        icon: BsInstagram,
        link: "https://www.instagram.com/danler_tech/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
