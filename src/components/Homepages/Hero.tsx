import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline></video>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8">
          <motion.div
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}>
            <Image
              src="/images/home.png"
              alt="hero"
              width={500}
              height={500}
              className="lg:w-[700px] w-full md:w-[500px] h-auto "
            />
          </motion.div>
          <div className="flex flex-col max-w-2xl items-end">
            <h1 className="text-white font-Inter text-4xl md:text-6xl text-end lg:text-7xl font-extrabold mb-6">
              Discover Your Potential
            </h1>

            {/* Divider */}
            {/* Divider with animation */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "208px" }} // 208px = w-52
              transition={{ duration: 1 }}
              className="h-[5px] bg-primary mb-8"
            />

            {/* Subheading */}
            <p className="text-white text-xl md:text-2xl font-medium mb-8">
              Workforce Solutions Provider.
            </p>

            {/* Description */}
            <p className="text-white text-lg md:text-xl max-w-2xl mb-10">
              Discover your potential with Source Group International.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary cursor-pointer text-heading hover:bg-primary hover:text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200">
                Find Tech Jobs
              </button>
              <button className="bg-transparent cursor-pointer border-2 border-primary text-white hover:bg-primary hover:text-heading px-8 py-3 rounded-md font-semibold transition-colors duration-200">
                Hire Tech Experts →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
