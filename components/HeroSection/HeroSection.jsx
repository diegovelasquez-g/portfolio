import "./styles.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import DiegoImage from "@/public/img/me.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="Home">
      <div className="w-full h-screen bg-[#3E414A] flex flex-col text-white justify-center items-center">
        <div className="max-w-screen-sm mx-auto text-center">
          {/* <Image
            src={DiegoImage}
            alt="Diego Velásquez Image"
            className="w-56 h-56 rounded-full mx-auto"
          /> */}
          <p className="text-xl font-bold mt-3">Hello 👋🏻, I am</p>
          <h1 className="flex flex-col text-7xl lg:text-9xl font-bold gradient-text mt-3">
            Diego <span>Velásquez</span>
          </h1>
          <h2 className="text-xl sm:text-3xl font-bold mt-3">
            Software Developer
          </h2>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-5">
            <button className="bg-[#D95032] px-3 py-4 font-black text-xl w-[60%] md:w-60 rounded-lg hover:scale-110 duration-150">
              Download Resume
            </button>
            <button className="bg-[#D95032] px-3 py-4 font-black text-xl w-[60%] md:w-60 rounded-lg hover:scale-110 duration-150">
              Contact Me
            </button>
          </div>
          <div className="flex gap-1 mt-3 justify-center">
            <a href="https://github.com/diegovelasquez-g">
              <AiFillGithub className="text-4xl hover:text-[#D95032] hover:scale-125 transition-colors duration-150" />
            </a>
            <a href="https://www.linkedin.com/in/diego-velásquez/">
              <AiFillLinkedin className="text-4xl hover:text-[#D95032] hover:scale-125 transition-colors duration-150" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
