import HTML from "../assets/Skill/HTML.png";
import CSS from "../assets/Skill/CSS.png";
import Bootstrap from "../assets/Skill/Bootstrap.png";
import TailwindCSS from "../assets/Skill/TailwindCSS.png";
import JavaScript from "../assets/Skill/JavaScript.png";
import Php from "../assets/Skill/Php.png";
import ReactJS from "../assets/Skill/ReactJS.png";
// later add this
// import NodeJS from "../assets/Skill/NodeJS.png";
// import ExpressJS from "../assets/Skill/ExpressJS.png";
// import MongoDB from "../assets/Skill/MongoDB.png";

import Postman from "../assets/Skill/Postman.png";
import Git from "../assets/Skill/Git.png";
import GitHub from "../assets/Skill/GitHub.png";

const Skill = () => {
  const skills = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Bootstrap,
      title: "Bootstrap",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: TailwindCSS,
      title: "TailwindCSS",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: ReactJS,
      title: "ReactJS",
      style: "shadow-teal-500",
    },
    {
      id: 7,
      src: Php,
      title: "PHP",
      style: "shadow-violet-500",
    },
    {
      id: 8,
      src: Git,
      title: "Git",
      style: "shadow-orange-800",
    },
    {
      id: 9,
      src: GitHub,
      title: "GitHub",
      style: "shadow-gray-800",
    },
    {
      id: 10,
      src: Postman,
      title: "Postman",
      style: "shadow-orange-800",
    },
  ];

  return (
    <>
      <div
        name="experience"
        className="bg-gradient-to-b  from-gray-800 to to-black w-full max-h-fit"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 px-2 inline">
              Experience
            </p>
            <p className="py-6">
              These are the technologies, I&#39; ve worked with
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {/* Card */}
            {skills.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-4  rounded-lg ${style}`}
              >
                <img
                  src={src}
                  alt={title + " " + "image"}
                  className="w-20 mx-auto"
                />
                <p className="mt-4 pt-6  text-xl font-bold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
