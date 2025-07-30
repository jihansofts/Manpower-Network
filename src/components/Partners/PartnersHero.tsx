import React from "react";
import Image from "next/image";
export default function PartnersHero() {
  return (
    <section className="relative h-screen bg-[#201D1F] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bannerpatner.jpg"
          alt="Hero"
          fill
          className="object-cover opacity-70"
        />
      </div>

      {/* Content Overlay */}
      <div className="container max-w-7xl mx-auto relative z-10  flex flex-col justify-center items-end w-full text-end px-4">
        {/* Main Heading */}
        <h1 className="text-5xl font-Inter md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Join the Manpower Network Partners Program
        </h1>

        {/* Subtitle */}
        <p className="text-lg  font-Inter md:text-xl lg:text-2xl text-white max-w-2xl mb-10">
          We are constantly looking for reliable associates to find qualified
          workforce around the world.
        </p>

        {/* CTA Button */}
      </div>
    </section>
  );
}
