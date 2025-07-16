"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="bg-primary py-20">
      <div className="container max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8">
          <motion.div
            animate={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}>
            <Image
              src="/images/banner.jpg"
              alt="banner"
              width={500}
              height={500}
              className="lg:w-[700px] w-full md:w-[500px] rounded-2xl h-auto "
            />
          </motion.div>
          <div className="space-y-4">
            <h2 className="text-heading text-start lg:text-[56px] md:text-[32px] text-[24px] font-bold ">
              Empowering Innovation with Expert Talent
            </h2>
            <p className="text-text text-start text-[16px] font-normal">
              Discovering technology talent to deliver your goals, and creating
              value for your business.
            </p>
            <p className="text-text text-start text-[16px] font-normal ">
              With SGI, workforce management becomes streamlined, scalable, and
              smart.
            </p>
            <button className="bg-heading cursor-pointer text-white px-8 py-4 rounded-lg mt-4 text-[20px] font-bold">
              More About Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
