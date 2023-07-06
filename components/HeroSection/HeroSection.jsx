import "./styles.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import AstronautImage from "@/public/img/prueba.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="Home">
      <div className="w-full h-screen flex flex-col-reverse lg:flex-row bg-[#392A59] text-white galaxy-background  justify-center items-center">
        <div className="lg:flex-1 text-center lg:text-left lg:px-10">
          <p className="text-sm font-bold">Hello 👋🏻, I am</p>
          <h1 className="text-6xl md:text-8xl flex flex-col font-bold gradient-text">
            Diego <span>Velásquez</span>
          </h1>
          <h2 className="py-1 text-lg font-bold">Software Developer</h2>
          <div className="flex flex-col lg:flex-row gap-3 items-center">
            <button className="w-[65%] px-2 py-3 font-bold rounded-lg border-2 hover:bg-[#D95032] hover:transition-colors duration-1000 text-sm lg:w-[30%]">
              Download Resume
            </button>
            <button className="w-[65%] px-2 py-3 font-bold rounded-lg border-2 hover:bg-[#D95032] hover:transition-colors duration-1000 text-sm lg:w-[30%]">
              Contact Me
            </button>
          </div>
          <div className="flex flex-row gap-2 justify-center lg:justify-start mt-2">
            <a href="https://github.com/diegovelasquez-g">
              <AiFillGithub className="text-4xl hover:scale-125 duration-1000 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/diego-velásquez/">
              <AiFillLinkedin className="text-4xl hover:scale-125 duration-1000 transition-colors" />
            </a>
          </div>
        </div>
        <div className="lg:flex-1 flex justify-center items-center">
          <Image
            className="lg:h-80 h-[11rem] mt-4 lg:mt-0 floating-animation w-auto"
            src={AstronautImage}
            alt="Astronaut Image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
