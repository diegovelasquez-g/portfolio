import Skills from "./Skills";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="bg-[#100940] text-white py-6 px-2 md:px-0">
        <h1 className="text-center font-black text-5xl">
          <span className="text-[#D95032]">A</span>bout{" "}
          <span className="text-[#D95032]">M</span>e
          <span className="text-[#D95032]">.</span>
          <hr className="w-6 h-1 mx-auto my-4 bg-white border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p className="text-justify">
              Hi, my name is Diego Velásquez and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in San Salvador, El Salvador. I am currently pursuing a
              degree in Computer Science Engineering at Don Bosco University.
            </p>
            <br />
            <p className="text-justify">
              In 2022, I took a significant step forward in my professional
              career by entering the software development industry. Since then,
              I have been actively engaged in various software projects, honing
              my skills and gaining valuable hands-on experience.
            </p>
            <br />
            <p>
              What sets me apart is my unwavering commitment and desire to
              developing software with good practices, employing design
              patterns, and implementing robust software architectures.
            </p>
            <br />
            <p className="text-justify">
              I believe that you should{" "}
              <span className="font-bold text-[#D95032]">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🚀
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
