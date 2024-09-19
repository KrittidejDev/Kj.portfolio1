import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "../Shared/Reveal";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div className="max-w-[1000px] px-6 mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div className="text-gray-300 my-3">
            <h3 className="text-4xl font-semibold mb-5">
              About <span>Me</span>
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  11 <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>
              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  30 <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Happy clients</span>
                </p>
              </div>
              <div className="bg-gray-800/40 p-5 rounded-lg te">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  5 <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Years experience</span>
                </p>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/bqonlrvb"
            method="POST"
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let's connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name....."
              name="name"
              className="mb-2 w-full rounded-lg border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email....."
              name="email"
              className="mb-2 w-full rounded-lg border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              type="textarea"
              id="textarea"
              placeholder="Your Message....."
              cols="30"
              rows="4"
              className="mb-2 w-full rounded-lg border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
