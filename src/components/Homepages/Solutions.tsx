import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const statsData = [
  {
    number: "15,000+",
    text: "Successfully deployed resources, driving business growth and workforce expansion.",
  },
  {
    number: "250+",
    text: "Thriving partnerships with clients, fostering long-term success.",
  },
  {
    number: "100%",
    text: "Compliance with Local & International Hiring Regulations",
  },
  {
    number: "87%",
    text: "Client retention rate demonstrating our commitment to excellence",
  },
  {
    number: "500,000+",
    text: "Hours of workforce managed annually",
  },
  {
    number: "12+",
    text: "Years of industry experience",
  },
];

export default function Solutions() {
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate stats section fade-in
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

    // Animate image
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

    // Number count animation
    const statNumbers = gsap.utils.toArray<HTMLElement>(".stat-number");

    statNumbers.forEach((el) => {
      const value = el.getAttribute("data-value")?.replace(/[^0-9.]/g, "") || "";

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: parseFloat(value),
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          snap: { innerText: 1 },
          onUpdate: function () {
            el.innerText =
              Math.floor(parseFloat(el.innerText)).toLocaleString() +
              (el.getAttribute("data-value")?.replace(/[0-9.,]/g, "") || "");
          },
        }
      );
    });
  }, []);
  

  return (
    <section className="bg-secendary py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="mt-10 max-w-2xl">
            <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
              Solutions Built on Results
            </h1>
            <p className="text-white mt-4 text-[16px] font-normal">
              Qatar&apos;s premier and fastest-growing staffing, outsourcing &
              talent acquisition solutions company.
            </p>
            <button className="text-white font-semibold mt-6 border border-white py-3 px-10 hover:bg-heading hover:border-none cursor-pointer hover:text-secondary transition-colors duration-300">
              About Us →
            </button>
          </div>

          <div
            ref={imageRef}
            className="hidden lg:block relative mt-10 lg:mt-0">
            <Image
              src="/images/aboutcircale.svg"
              alt="hero"
              width={400}
              height={400}
              className="w-[600px] min-h-[400px] object-cover"
            />
          </div>
        </div>
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-0 md:mt-10">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="stat-item bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <span
                className="stat-number text-white text-4xl md:text-5xl font-bold"
                data-value={item.number}>
                0
              </span>

              <p className="text-white text-[16px] font-normal mt-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
