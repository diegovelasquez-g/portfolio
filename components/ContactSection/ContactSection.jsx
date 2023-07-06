const ContactSection = () => {
  return (
    <section id="contact">
      <div className="bg-[#100940] text-white flex justify-center lg:py-16 py-6 px-2 md:px-0">
        <div className="w-[28rem] md:w-[65%] lg:w-[45%]">
          <h1 className="text-center font-black text-5xl">
            <span className="text-[#D95032]">C</span>ontact{" "}
            <span className="text-[#D95032]">M</span>e
            <span className="text-[#D95032]">.</span>
            <hr className="w-6 h-1 mx-auto my-4 bg-white border-0 rounded"></hr>
          </h1>
          <p className="mb-8 lg:mb-16 font-normal text-justify md:text-center text-lg md:text-xl">
            Although I am not currently seeking new opportunities, even so my
            inbox is always open. I am available for any freelance project you
            wish to undertake. Feel free to send me an email or fill out the
            following form 😉.
          </p>
          <form className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm border text-sm rounded-lg block w-full h-[3rem] p-2.5 bg-transparent border-white placeholder-gray-400"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-base font-medium text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow-sm border text-sm rounded-lg block w-full h-[3rem] p-2.5 bg-transparent border-white placeholder-gray-400"
                placeholder="Let me know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm bg-transparent rounded-lg shadow-sm border border-white placeholder-gray-400 text-white "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#D95032] text-white font-medium text-sm rounded-lg w-full h-[3rem] hover:bg-[#F26A4B] transition duration-300 ease-in-out"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
