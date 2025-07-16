"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    text: "Source Technology understood my requirements quickly and recommended this role. Throughout the process, the team was clear and communicated well. They were very clear about job, company and had a good understanding of the organizations expectations.",
    author: "Employer – American Express",
  },
  {
    id: 2,
    text: "The recruitment process was smooth and efficient. They really understood our company culture and found the perfect match for our team.",
    author: "Employer – Google",
  },
  {
    id: 3,
    text: "Exceptional service! They delivered high-quality candidates faster than any other agency we've worked with.",
    author: "Employer – Microsoft",
  },
];

const WhyOurCustomers = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with width control */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/bannerwhy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="container max-w-7xl mx-auto px-5 z-90">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          {/* Left Side - Text Content */}
          <div className="text-white relative z-30">
            {" "}
            {/* Added z-30 here */}
            <h2 className="text-4xl md:text-[56px] font-bold mb-6">
              Why Our Customers Work With Us.
            </h2>
            <div className="w-20 h-1 bg-white mb-8"></div>
            <button className="inline-block text-white border-2 border-primary py-4 px-8 cursor-pointer font-semibold hover:underline text-lg">
              Customer Reviews →
            </button>
          </div>

          {/* Right Side - Reviews Carousel */}
          <div className="bg-[#201D1F] p-8 rounded-lg shadow-lg h-full min-h-[300px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[currentReview].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col justify-between">
                <div className="mb-8">
                  <div className="w-12 h-1 bg-gray-300 mb-6"></div>
                  <p className="text-white text-[16px] mb-8">
                    {reviews[currentReview].text}
                  </p>
                </div>
                <p className="text-primary font-semibold">
                  {reviews[currentReview].author}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Review indicators */}
            <div className="absolute bottom-4 right-8 flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentReview === index ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOurCustomers;
