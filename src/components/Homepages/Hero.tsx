import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto">
          {/* Image Section */}
          <motion.div
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="flex justify-center">
            <Image
              src="/images/home.png"
              alt="hero"
              width={700}
              height={700}
              className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto"
            />
          </motion.div>

          {/* Text Section */}
          <div className="text-white flex flex-col items-start text-left">
            <h1 className="font-Inter text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Discover Your Potential
            </h1>

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "208px" }}
              transition={{ duration: 1 }}
              className="h-[5px] bg-primary mb-8"
            />

            <p className="text-xl md:text-2xl font-medium mb-4">
              Workforce Solutions Provider.
            </p>

            <p className="text-lg md:text-xl mb-10">
              Discover your potential with Source Group International.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary cursor-pointer text-heading hover:bg-primary hover:text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200">
                Contact Us
              </Link>
              <Link
                href="/industries"
                className="bg-transparent cursor-pointer border-2 border-primary text-white hover:bg-primary hover:text-heading px-8 py-3 rounded-md font-semibold transition-colors duration-200">
                Hire worker Experts →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
