import HeroImagae from "../assets/MyHeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center items-center h-full md:flex-row">
          <div className="flex flex-col justify-center h-full">
            {/* Heading */}
            <h2 className="text-white text-4xl font-bold sm:text-7xl">
              I&#39;m FrontEnd Developer
            </h2>

            <p className="text-gray-500 py-4 max-w-md">
              Passionate Frontend developer with comprehensive training in HTML,
              CSS, JavaScript, ES6, Bootstrap, TailwindCSS, Jquery, ReactJS,
              NodeJS, ExpressJS, MongoDB. Eager to apply newly acquired skills
              to real-world projects and contribute to a dynamic team. Seeking
              entry-level opportunities to kickstart a successful career in
              frontend development.
            </p>

            <div>
              <button className="text-white cursor-pointer w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 group ">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div>
            <img
              src={HeroImagae}
              alt="hero porfile"
              className="rounded-2xl mx-auto w-2/3  md:w-3/4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
