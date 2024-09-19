import React from "react";
import { motion } from "framer-motion";
import Reveal from "../Shared/Reveal";

const experiences = [
  {
    title: "Software Engineer",
    company: "ABC Corp.",
    duration: "2019 - Present",
    description:
      "I have been working as a software engineer at ABC Corp. for the past 5 years. I have developed various applications, worked on various projects, and contributed to the team's success.",
  },
  {
    title: "Project Manager",
    company: "XYZ Inc.",
    duration: "2015 - 2019",
    description:
      "I have been working as a project manager at XYZ Inc. for the past 4 years. I have managed various teams, led projects, and contributed to the team's success.",
  },
  {
    title: "Intern",
    company: "PQR Corp.",
    duration: "2014 - 2015",
    description:
      "I have been working as an intern at PQR Corp. for the past year. I have learned various skills and contributed to the team's success.",
  },
  {
    title: "Intern",
    company: "STU Inc.",
    duration: "2013 - 2014",
    description:
      "I have been working as an intern at STU Inc. for the past year. I have learned various skills and contributed to the team's success.",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className=" text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-300">{experience.duration}</p>
              <p className="text-gray-400 mt-4">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
