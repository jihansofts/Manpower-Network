"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AdsHeadline from "@/common/AdsHeadline";
// import SubscribeSection from "@/common/SubscribeSection";

export default function AchieveMore() {
  const logos = [
    "/logos/luminor.png",
    "/logos/pixelforce.png",
    "/logos/vontobel.png",
    "/logos/raiffeisen.png",
    "/logos/mach.png",
    "/logos/atos.png",
    "/logos/deloitte.png",
    "/logos/accenture.png",
  ];
  const [activeTab, setActiveTab] = useState("Our Mission");
  const doubledLogos = [...logos, ...logos];

  const content: Record<
    string,
    { image: string; items: { title: string; description: string }[] }
  > = {
    "Our Mission": {
      image: "/images/moretab.png",
      items: [
        {
          title: "Empowering Success Through Connections",
          description:
            "Our mission is to bridge the gap between talent and opportunity, helping businesses thrive and professionals advance.",
        },
        {
          title: "Connecting Talent, Creating Opportunities",
          description:
            "Our mission is simple—to connect the right talent with the right opportunities through personalized service.",
        },
        {
          title: "Our Commitment to Excellence",
          description:
            "Driven by our passion for creating meaningful connections, we deliver innovative & effective staffing.",
        },
        {
          title: "Building Stronger Teams, Shaping Bright Careers",
          description:
            "We empower organizations and individuals by providing high-quality staffing solutions that foster growth.",
        },
      ],
    },
    "Our Vision": {
      image: "/images/moretab.png",
      items: [
        {
          title: "Vision Statement 1",
          description:
            "We envision a future where businesses and talents thrive through strategic partnerships and innovation.",
        },
        {
          title: "Vision Statement 2",
          description:
            "Our vision is to become a global leader in talent acquisition, delivering value-driven results.",
        },
      ],
    },
    "Our Solution": {
      image: "/images/moretab.png",
      items: [
        {
          title: "Customized Talent Solutions",
          description:
            "We analyze your business needs and provide tailored staffing solutions for lasting impact.",
        },
        {
          title: "Tech-Powered Recruitment",
          description:
            "Using the latest tech and analytics, we streamline recruitment to find the best match quickly.",
        },
      ],
    },
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl overflow-hidden ">
                <Image
                  width={500}
                  height={500}
                  src={content[activeTab].image}
                  alt={activeTab}
                  className="w-full h-full py-4  object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Tabs & Content */}
          <div className="w-full lg:w-1/2">
            {/* Tabs */}
            <div className=" space-x-4 space-y-4">
              {Object.keys(content).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative font-Inter font-semibold px-4 py-2 text-[20px] transition-colors ${
                    activeTab === tab
                      ? "text-primary   font-semibold"
                      : "text-secendary cursor-pointer hover:text-primary"
                  }`}>
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="underline"
                      className="absolute flex justify-center items-center bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6">
                {content[activeTab].items.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-[22px] font-Inter font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-text font-normal font-Inter text-[16px] mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-10">
          {/* <SubscribeSection
            title="Transform Your Workforce  Transform Your Future"
            description="Ready to take the next step? Whether you're looking to build your dream team or find the perfect career."
            buttonText="SUBSCRIBE"
            placeholder="Enter your email"
            bgColorClass="bg-primary"
            image="/images/patner.png"
            onSubmit={(email) => {
              console.log("Subscribed:", email);
              // Call API or handle logic
            }}
          /> */}
        </div>
      </div>
      <div className="mt-5">
        <AdsHeadline
          title="Trusted by Businesses & Professionals Companies"
          logos={doubledLogos}
        />
      </div>
    </section>
  );
}
