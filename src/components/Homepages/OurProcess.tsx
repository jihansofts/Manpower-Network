"use client";

import React, { useEffect } from "react";
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
    icon: "/images/searchprocess.svg",
    title: "Find a Job Near You",
    desc: "Browse diverse job listings. Supply your details with or without a resume and choose to either sign up or apply anonymously.",
  },
  {
    id: 2,
    icon: "/images/skillsprocess.svg",
    title: 'Match your skills"',
    desc: "Read through the description to see if your skills and experience are a match.",
  },
  {
    id: 3,
    icon: "/images/starprocess.svg",
    title: "Click “apply”",
    desc: "Browse diverse job listings. Supply your details with or without a resume and choose to either sign up or apply anonymously.",
  },
  {
    id: 4,
    icon: "/images/inboxprocess.svg",
    title: "Check your inbox",
    desc: "Whether you choose to create an account or not, we will be in touch shortly with the next steps.",
  },
  {
    id: 5,
    icon: "/images/interviewprocess.svg",
    title: "Assess and interview",
    desc: "After we review your application, we might send you an online assessment, invite you to an interview, or both.",
  },
  {
    id: 6,
    icon: "/images/hiredprocess.svg",
    title: "Get hired",
    desc: "Prepare for your new role. After confirmation, we'll assist with documentation, guaranteeing a seamless transition and timely compensation.",
  },
];
export default function OurProcess() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray<HTMLElement>(".process-card").forEach((el, i) => {
      const fromX = i % 2 === 0 ? -100 : 100; // even from left, odd from right
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        x: fromX,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-secendary py-20">
      <div className="container mx-auto px-5">
        <div className="flex flex-col justify-center lg:items-start md:items-center max-w-5xl">
          <span className="text-white text-start font-normal block mb-5">
            Our Process
          </span>
          <h2 className="text-white text-start lg:text-[42px] md:text-[32px] text-[24px] font-semibold mb-10">
            From Application to Hiring – We Make It Simple
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-5">
          {Processdata.map((item) => (
            <div
              key={item.id}
              className="process-card flex flex-col items-start text-start p-10 bg-background shadow rounded">
              <div className="mb-3">
                <Image
                  src={item.icon}
                  width={80}
                  height={80}
                  alt={item.title}
                  className="h-16 w-16"
                />
              </div>
              {/* <span className="text-white text-lg font-medium mb-2">
                Step {item.id}
              </span> */}
              <h2 className="text-heading text-[22px] font-semibold mb-4">
                {item.title}
              </h2>
              <p className="text-text font-normal text-[14px] mt-5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
