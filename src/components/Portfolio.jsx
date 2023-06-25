import GalaxyRocket from "../assets/portfolio/GalaxyRocket.png";
import School from "../assets/portfolio/School.png";
import ReactTodo from "../assets/portfolio/ReactTodo.png";
import UsabilityHub from "../assets/portfolio/UsabilityHub.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: GalaxyRocket,
    },
    {
      id: 2,
      src: School,
    },
    {
      id: 3,
      src: UsabilityHub,
    },
    {
      id: 4,
      src: ReactTodo,
    },
  ];

  return (
    <>
      <div
        name="portfolio"
        className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full  h-full">
          {/* Heading */}
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>

            <p className="py-6">Check out some of my work right here </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
            {/* Card */}

            {portfolios.map(({ id, src }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="project image"
                  className="rounded-md hover:scale-105 duration-200"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
