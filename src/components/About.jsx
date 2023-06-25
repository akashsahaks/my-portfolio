const About = () => {
  return (
    <>
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-50">
              About
            </p>
          </div>

          <p className="text-xl mt-20">
            I am a recent BCA graduate with a passion for full-stack
            development. I have completed the Almabetter full stack development
            bootcamp and have built several projects using the MERN stack. I am
            proficient in HTML, CSS, JavaScript, React, Node.js, and MongoDB. I
            am eager to learn and grow in the field of software development and
            I am confident that I can make a significant contribution to any
            team.
            <span className="block font-bold text-teal-500">
              Tech Stacks - HTML, CSS, Bootstrap, JavaScript, ES6, React,
              NodeJS, ExpressJS, Redux, Node Js, Express Js, MongoDB.
            </span>
            <span className="block font-bold text-teal-500">
              Tools - Postman, Git, GitHub
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
