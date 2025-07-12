"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Process {
  id: number;
  icon: string;
  title: string;
  desc: string;
}
const Processdata: Process[] = [
  {
    id: 1,
    icon: "/images/solutions1.svg",
    title: "Customized Solutions",
    desc: "Tailormade solutions to meet your requirements.",
  },
  {
    id: 2,
    icon: "/images/solutions2.svg",
    title: 'One Stop Shop"',
    desc: "Our varied services ensure that all your needs are met at just the press of a button.",
  },
  {
    id: 3,
    icon: "/images/solutions3.svg",
    title: "Trained & Certified Resources",
    desc: "Focused on minimizing your time investment by providing only quality manpower.",
  },
  {
    id: 4,
    icon: "/images/solutions4.svg",
    title: "Technology Enabled Process",
    desc: "Seamless hiring to invoicing process with minimal efforts and maximum efficiency.",
  },
  {
    id: 5,
    icon: "/images/solutions5.svg",
    title: "Innovative & Proactive Strategy",
    desc: "Adherence to legal standards is crucial for our business. We aim to settle debts promptly and precisely with our collaborators and suppliers.",
  },
  {
    id: 6,
    icon: "/images/solutions6.svg",
    title: "Project Management Approach",
    desc: "Our highly skilled team ensures a delightful customer experience every time.",
  },
];
export default function WhyManpower() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const videoRef = useRef(null);
  const linesRef = useRef<HTMLDivElement[]>([]);

  // Store refs for each line of text
  const addToLinesRef = (el: HTMLDivElement | null) => {
    if (el && !linesRef.current.includes(el)) {
      linesRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Line-by-line animation
    if (linesRef.current.length > 0) {
      linesRef.current.forEach((line, index) => {
        gsap.fromTo(
          line,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${index * 100} 70%`,
              end: `top+=${(index + 1) * 100} 30%`,
              scrub: 1,
              // markers: true // for debugging
            },
          }
        );
      });
    }

    // Main heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Video animation
    gsap.fromTo(
      videoRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-primary">
      <div className="container mx-auto px-5">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="w-full">
            <span
              ref={headingRef}
              className="block text-white text-start font-normal text-[16px] opacity-0">
              Why Manpower?
            </span>

            <div className="max-w-2xl mt-4 overflow-hidden">
              <h1 className="text-white text-start lg:text-[42px] md:text-[32px] text-[24px] font-semibold mb-10">
                {/* Split your heading into lines */}
                <div ref={addToLinesRef} className="block opacity-0">
                  Your Strategic Recruitment
                </div>
                <div ref={addToLinesRef} className="block opacity-0">
                  Partner for a Future-Ready
                </div>
                <div ref={addToLinesRef} className="block opacity-0">
                  Workforce
                </div>
              </h1>
            </div>
          </div>

          <video
            ref={videoRef}
            width="100%"
            height="100%"
            autoPlay
            muted
            playsInline
            loop
            className="w-[250px] md:w-[300px] mx-auto opacity-0">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-5">
          {Processdata.map((item) => (
            <div
              key={item.id}
              className="process-card flex flex-col items-start text-start p-10 border-b-[1px] border-dotted border-white rounded">
              <div className="mb-3">
                <Image
                  src={item.icon}
                  width={80}
                  height={80}
                  alt={item.title}
                  className="h-12 w-12"
                />
              </div>
              {/* <span className="text-white text-lg font-medium mb-2">
                        Step {item.id}
                      </span> */}
              <h2 className="text-background text-[24px] font-semibold py-4">
                {item.title}
              </h2>
              <p className="text-[#ABABAB] font-normal text-[18px] mt-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
