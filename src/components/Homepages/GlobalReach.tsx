"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiUsers, FiUserCheck, FiStar } from "react-icons/fi";
import Image from "next/image";

const stats = [
  { icon: <FiMapPin size={24} />, label: "150+ EOR Services" },
  { icon: <FiUsers size={24} />, label: "35+ Diverse Nationalities" },
  { icon: <FiUserCheck size={24} />, label: "20+ International Partners" },
  { icon: <FiStar size={24} />, label: "04+ Global Offices" },
];

const dots = [
  { top: "40%", left: "60%", country: "India" },
  { top: "50%", left: "70%", country: "Singapore" },
  { top: "30%", left: "30%", country: "USA" },
  { top: "45%", left: "45%", country: "Luxembourg" },
  // Add more as needed
];

export default function GlobalReach() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="bg-[#DAE5FF] py-12">
      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-white max-w-screen-xl mx-auto rounded overflow-hidden">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-6 py-4 ${
              index === 0 ? "bg-primary text-white" : "bg-[#BED3FB]"
            } `}>
            {stat.icon}
            <p className="font-medium text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="relative w-full max-w-7xl mx-auto mt-10 h-[600px]">
        <Image
          src="/images/map.svg" // Your world map image
          alt="World Map"
          fill
          className="object-contain"
        />

        {/* Dots on the Map */}
        {dots.map((dot, index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 bg-blue-600 rounded-full shadow-md border border-white"
            style={{ top: dot.top, left: dot.left }}
            onMouseEnter={() => setHovered(dot.country)}
            onMouseLeave={() => setHovered(null)}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: index * 0.1,
            }}>
            {hovered === dot.country && (
              <div className="absolute -top-8 -left-4 bg-blue-700 text-white text-xs px-2 py-1 rounded shadow">
                {dot.country}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
