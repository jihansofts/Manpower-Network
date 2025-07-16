import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative h-screen bg-[#201D1F] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aboutbanner.jpg"
          alt="Hero"
          fill
          className="object-cover opacity-70"
        />
      </div>

      {/* Content Overlay */}
      <div className="container max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center items-end w-full text-end px-4">
        {/* Main Heading */}
        <h1 className="text-5xl font-sans md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="block">Leave</span>
          <span className="block">Ordinary</span>
          <span className="block">Behind.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg  md:text-xl lg:text-2xl text-white max-w-2xl mb-10">
          Escape the normal recruitment career, and jump into an experience
          that&apos;ll build and nurture your professional future.
        </p>

        {/* CTA Button */}
        <Link
          href="#apply"
          className="bg-white text-[#201D1F] px-8 py-4 rounded-md font-bold text-lg hover:bg-primary transition-colors duration-300">
          Apply Here
        </Link>
      </div>
    </section>
  );
}
