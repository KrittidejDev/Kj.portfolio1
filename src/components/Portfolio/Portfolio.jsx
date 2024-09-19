import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "../Shared/Reveal";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "UI for frontend develop using React",
    link: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description: "A fullstack application build with Node.Js and MongoDB",
    link: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project3,
    title: "Project #3",
    description: "An e-commerce platform with various features.",
    link: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project4,
    title: "Project #4",
    description: "An e-commerce platform with various features",
    link: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project5,
    title: "Project #5",
    description: "A mobile-friendly application using React Native",
    link: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project6,
    title: "Project #6",
    description:
      "A data visualization project using D3.js and other libraries ",
    link: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project7,
    title: "Project #7",
    description: "UI for frontend develop using React",
    link: {
      site: "#",
      github: "#",
    },
  },
];

const Portfolio = () => {
  return (
    <div
      className="max-w-[1000px] mx-auto p-6 md:my-20 items-center"
      id="portfolio"
    >
      <p className="text-3xl text-center font-bold text-gray-200 mb-8">
        Portfolio
      </p>
      {projects.map((project, idx) => (
        <Reveal key={idx}>
          <div
            className={`flex flex-col md:flex-row ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            } `}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg "
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h2 className=" text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.link.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.link.github}
                  className="flex items-center px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
