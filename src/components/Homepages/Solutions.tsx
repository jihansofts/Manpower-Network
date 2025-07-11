import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Solutions() {
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for stats
    gsap.from(".stat-item", {
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });

    // Animation for image
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="bg-secendary py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="mt-10 max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Solutions Built on Results
            </h1>
            <p className="text-white mt-4 text-lg">
              Qatar&apos;s premier and fastest-growing staffing, outsourcing &
              talent acquisition solutions company.
            </p>
            <button className="text-white font-bold mt-6 border border-white py-3 px-7 hover:bg-heading hover:border-none cursor-pointer hover:text-secondary transition-colors duration-300">
              About Us →
            </button>
          </div>

          <div ref={imageRef} className="hidden lg:block relative mt-10 lg:mt-0">
            <Image
              src="/images/aboutcircale.svg"
              alt="hero"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-0 md:mt-10 ">
          <div className="stat-item  bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <span className="text-white text-4xl md:text-5xl font-bold">
              15,000+
            </span>
            <p className="text-white text-base mt-4">
              Successfully deployed resources, driving business growth and
              workforce expansion.
            </p>
          </div>
          <div className="stat-item  bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <span className="text-white text-4xl md:text-5xl font-bold">
              250+
            </span>
            <p className="text-white text-base mt-4">
              Thriving partnerships with clients, fostering long-term success.
            </p>
          </div>

          <div className="stat-item  bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <span className="text-white text-4xl md:text-5xl font-bold">
              100%
            </span>
            <p className="text-white text-base mt-4">
              Compliance with Local & International Hiring Regulations
            </p>
          </div>

          <div className="stat-item  bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <span className="text-white text-4xl md:text-5xl font-bold">
              87%
            </span>
            <p className="text-white text-base mt-4">
              Client retention rate demonstrating our commitment to excellence
            </p>
          </div>

          <div className="stat-item  bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <span className="text-white text-4xl md:text-5xl font-bold">
              500,000+
            </span>
            <p className="text-white text-base mt-4">
              Hours of workforce managed annually
            </p>
          </div>

          <div className="stat-item  bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <span className="text-white text-4xl md:text-5xl font-bold">
              12+
            </span>
            <p className="text-white text-base mt-4">
              Years of industry experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
