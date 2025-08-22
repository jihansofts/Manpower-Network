import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Industries } from "../../lib/data";
import Link from "next/link";

const Specialisms = () => {
  const specialisms = Industries;

  // Define a set of gradients to use for the text

  const gradients = [
    "from-purple-500 via-pink-500 to-red-500",
    "from-blue-400 via-cyan-400 to-blue-600",
    "from-yellow-500 via-green-400 to-green-700",
    "from-orange-400 via-pink-500 to-purple-600",
    "from-pink-400 via-purple-500 to-indigo-600",
    "from-red-400 via-yellow-500 to-pink-600",
    "from-green-400 via-lime-500 to-emerald-600",
    "from-yellow-400 via-orange-500 to-red-600",
  ];

  return (
    <section className="py-20 bg-[#2D2D2D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 border-b-4 border-[#44B6DA] inline-block pb-2">
            Industries
          </h2>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Our expertise lies in connecting highly skilled talent with
            visionary businesses leading change across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {specialisms.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="p-6 bg-white min-w-[200px] flex flex-col items-center min-h-[200px] rounded-lg hover:bg-gray-100 transition-colors duration-200 relative">
              {/* Arrow icon in top right */}
              <div className="absolute top-4 right-4 text-[#44B6DA] text-[30px]">
                <FiArrowRight />
              </div>

              {/* Gradient text */}
              <h3
                className={`text-[25px] text-center font-extrabold bg-gradient-to-r ${
                  gradients[index % gradients.length]
                } bg-clip-text text-transparent text-center mt-12`}>
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialisms;
