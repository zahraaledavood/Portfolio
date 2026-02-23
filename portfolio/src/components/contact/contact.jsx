const Contact = () => {
  return (
    <div id="contact" className="bg-gray-100 pt-5 md:h-100">
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4">
        <h2 className="text-5xl font-bold text-black md:px-0 px-4 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-3 text-lg text-center font-meduim text-gray-500">
            Get in touch
          </h4>
        </div>
        <div className="w-full  flex gap-60 justify-center md:items-center mt-20 md:mt-15">
          <div>
            <h1 className="text-3xl font-bold text-black flex">
            <img
                src="https://img.icons8.com/doodle/40/000000/email--v2.png"
                alt="linkedin"
                className="w-10 mx-2"
              />
                Email</h1>
            <a
              href="zh.aledavood@gmail.com"
              className="mb-12 mt-4 ps-4 font-semibold text-blue-700 block uppercase"
            >
              zh.aledavood@gmail.com
            </a>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-black flex">
            <img
                src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png"
                alt="linkedin"
                className="w-10 mx-2"
              />
                Linkedin</h1>
            <a
              href="#"
              className="mb-12 mt-4 ps-4 font-semibold text-blue-700 block uppercase"
            >
              Zahra Aledavood
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
