import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import C from "../assets/C-.png";
import net from "../assets/net.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: net,
      title: ".NET",
      style: "shadow-white",
    },
    {
      id: 7,
      src: C,
      title: "C#",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  const ExperienceBox = ({ company, position, duration, description }) => {
    const boxStyle = {
      backgroundColor: 'gray-800',
      padding: '20px',
      marginBottom: '20px',
      borderRadius: '5px'
    };
  
    const companyStyle = {
      fontSize: '18px',
      fontWeight: 'bold'
    };
  
    const positionStyle = {
      fontSize: '16px',
      marginTop: '5px'
    };
  
    const durationStyle = {
      fontSize: '14px',
      marginTop: '5px',
      color: 'white'
    };
  
    const descriptionStyle = {
      marginTop: '10px'
    };
  
    return (
      <div style={boxStyle}>
        <h3 style={companyStyle}>{company}</h3>
        <p style={positionStyle}>{position}</p>
        <p style={durationStyle}>{duration}</p>
        <p style={descriptionStyle}>{description}</p>
      </div>
    );
  };

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Work Experience
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 sm:w-auto text-center py-8 px-4 sm:px-6 hover:scale-105 shadow-md duration-500 rounded-lg border-cyan-500 border-b-4 mb-2 mr-20">
          <ExperienceBox
            company="Procter&Gamble"
            position="Software Engineer"
            duration="2022 - 2023"
            description="Developed web applications using React and C#."
          /> </div>
          <div className="w-1/2 sm:w-auto text-center py-8 px-4 sm:px-6 hover:scale-105 shadow-md duration-500 rounded-lg border-cyan-500 border-b-4 mb-2 ">
          <ExperienceBox
            company="Academia Micilor Developeri"
            position="IT Instructor"
            duration="2022 - 2023"
            description="Skilled IT Instructor providing expert guidance."
          /> </div>
          </div>
          
          <br />
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
