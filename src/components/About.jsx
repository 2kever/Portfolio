import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Highly skilled and results-driven software engineer with expertise in React, .NET, C#, MySQL Server, JavaScript, CSS and Tailwind CSS. With a passion for creating innovative and user-centric solutions, I excel at designing and developing robust applications that meet the highest quality standards. I collaborated with cross-functional teams to gather requirements, define project scope, and deliver solutions within strict timelines. Implemented efficient data modelling techniques in MySQL Server, ensuring optimal performance and scalability for data-intensive applications.
        </p>

        <br />

        <p className="text-xl">
        I am passionate about leveraging technology to solve complex problems, I thrive in dynamic and challenging environments. If you seek a software engineer with a lot of passion in developing React, .NET, C#, and MySQL Server,JS let's connect and explore opportunities to create innovative solutions together.
        </p>
      </div>
    </div>
  );
};

export default About;
