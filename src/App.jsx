// import components
import Hero from "./components/Hero";
import NavbarDemo from "./components/Header";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="">
      <NavbarDemo />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Danler Tech</h6>
        <p>Danler Tech © All CopyRights Reserved 2026</p>
      </footer>
    </div>
  );
};

export default App;
