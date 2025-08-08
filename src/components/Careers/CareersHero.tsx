import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function CareersHero() {
  return (
    <section className="relative h-screen bg-[#201D1F] overflow-hidden">
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
        <h1 className="text-5xl font-Inter md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="block">Build a Career</span>
          <span className="block">That Matters</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg font-Inter md:text-xl lg:text-2xl text-white max-w-2xl mb-10">
          Join a team that values ambition, innovation, and personal growth. At
          our core, we’re not just offering jobs — we’re shaping meaningful
          careers that make a difference.
        </p>

        {/* CTA Button */}
        <Link
          href="/careers"
          className="bg-white font-Inter font-bold text-[#201D1F] px-8 py-4 rounded-md text-lg hover:bg-primary transition-colors duration-300">
          Join Us Today
        </Link>
      </div>
    </section>
  );
}
