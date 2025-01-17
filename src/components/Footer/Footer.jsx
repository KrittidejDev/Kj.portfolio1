import { div } from "framer-motion/client";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-purple-600">
      <div className=" max-w-[1000px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
        <div className="space-y-4 ">
          <h3 className="  text-2xl text-gray-200 font-semibold ">
            Krittidej Portfolio
          </h3>
          <div className="flex flex-row gap-6 text-gray-400 text-4xl">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
        <p className="text-gray-400">@2024 KJ-Dev</p>
      </div>
    </div>
  );
};

export default Footer;
