"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Whoweare() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const linesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Line-by-line scroll reading effect
      linesRef.current.forEach((line) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { opacity: 0.2 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: line,
              start: "top 80%", // when top of line hits 80% viewport
              end: "top 80%", // end when it's at 60%
              toggleActions: "play none none reverse",
              scrub: true,
            },
          }
        );
      });
    });
  }, []);
  
  const lines = [
    "For employers, we deliver the right talent with precision and speed,",
    "ensuring seamless workforce growth.",
    "For professionals, we open doors to meaningful opportunities that drive success.",
    "Whether you're scaling your team or advancing your career,",
    "we’re here to create momentum and take you further.",
  ];

  return (
    <section className="container mx-auto py-20 px-4">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left image with animation */}
        <div ref={imageRef}>
          <Image
            src="/images/Whowe.png"
            alt="whoweare"
            width={500}
            height={500}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right text section */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Who we are</h2>
          <div className="space-y-3">
            {lines.map((line, index) => (
              <p
                key={index}
                ref={(el) => {
                  linesRef.current[index] = el;
                }}
                className="text-[18px] lg:text-[32px] md:text-[24px] font-normal text-heading opacity-20 transition-opacity duration-300">
                {line}
              </p>
            ))}
          </div>

          <button className="mt-10 px-6 py-3 bg-heading cursor-pointer text-white font-semibold hover:bg-secendary transition-all">
            Discover More →
          </button>
        </div>
      </div>
    </section>
  );
}
