import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceHero() {
  return (
    <section className="relative h-screen bg-[#183444]/100  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/images/service.jpg"
          alt="Hero"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Content Overlay */}
      <div className="container max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center items-start w-full text-end px-4">
        {/* Main Heading */}
        <div className="text-start">
          <h1 className="text-5xl capitalize font-Inter md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="block"> Ready for Your Next </span>
            <span className="block">Opportunity?</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-start  font-Inter md:text-xl lg:text-2xl text-white max-w-2xl mb-10">
          We connect you with roles where your skills are valued and your career
          can grow.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="bg-white font-Inter font-bold text-[#201D1F] px-8 py-4 rounded-md  text-lg hover:bg-primary transition-colors duration-300">
          Apply Here
        </Link>
      </div>
    </section>
  );
}
