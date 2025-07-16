"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface BrandMarqueeProps {
  title?: string;
  logos: string[];
  logoWidth?: number;
  logoHeight?: number;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  titleClassName?: string;
  gap?: number;
  fadeEdges?: boolean;
  fadeWidth?: number;
}

const BrandMarquee: React.FC<BrandMarqueeProps> = ({
  title = "",
  logos,
  logoWidth = 120,
  logoHeight = 60,
  speed = 25,
  direction = "left",
  pauseOnHover = false,
  className = "",
  titleClassName = "",
  gap = 32,
  fadeEdges = true,
  fadeWidth = 96,
}) => {
  const doubledLogos = [...logos, ...logos]; // for infinite scroll effect

  return (
    <section
      className={`py-16 bg-gray-50 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-bold text-center mb-12 ${titleClassName}`}>
            {title}
          </motion.h2>
        )}

        {/* Marquee Logos */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center whitespace-nowrap"
            animate={{
              x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
            }}
            transition={{
              duration: speed,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
            style={{ gap: `${gap}px` }}>
            {doubledLogos.map((logo, i) => (
              <div
                key={`logo-${i}`}
                className="flex items-center justify-center"
                style={{
                  width: `${logoWidth}px`,
                  height: `${logoHeight}px`,
                }}>
                <Image
                  src={logo}
                  alt={`Logo ${i}`}
                  width={logoWidth}
                  height={logoHeight}
                  className="object-contain max-h-full"
                />
              </div>
            ))}
          </motion.div>

          {/* Fading edge gradients */}
          {fadeEdges && (
            <>
              <div
                className="absolute inset-y-0 left-0 z-10"
                style={{
                  width: `${fadeWidth}px`,
                  background: "linear-gradient(to right, #f9fafb, transparent)",
                }}
              />
              <div
                className="absolute inset-y-0 right-0 z-10"
                style={{
                  width: `${fadeWidth}px`,
                  background: "linear-gradient(to left, #f9fafb, transparent)",
                }}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
