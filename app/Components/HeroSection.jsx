"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale:0.5}}
          animate={{ opacity: 1,scale:1 }}
          transition={{ duration: 0.3 }}
          className="grid col-span-8 place-self-start place-items-start lg:place-items-start"
        >
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold text-white lg:text-6xl">
            <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I am {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Anmol Deep",
                1000,
                "Web Developer",
                1000,
                "Full Stack Developer",
                1000,
                "Master's Student",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-base sm:text-lg lg:text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <div>
            <button className="w-full px-6 py-3 mt-2 mr-4 text-white bg-white rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit hover:bg-slate-200">
              Hire Me
            </button>
            <button className="w-full px-1 py-1 mt-3 text-white bg-transparent border border-white rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to sm:w-fit hover:bg-slate-800">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale:0.5}}
          animate={{ opacity: 1,scale:1 }}
          transition={{ duration: 0.3 }} className="col-span-4 mt-4 place-self-center lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/hero-image.png"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
