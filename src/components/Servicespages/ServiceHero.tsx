import React from "react";
import Image from "next/image";

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
            <span className="block">Ready to join? Apply for </span>
            <span className="block">a job today!</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-start  font-Inter md:text-xl lg:text-2xl text-white max-w-2xl mb-10">
          Escape the normal recruitment career, and jump into an experience
          that&apos;ll build and nurture your professional future.
        </p>

        {/* CTA Button */}
        {/* <Link
          href="#apply"
          className="bg-white font-Inter font-bold text-[#201D1F] px-8 py-4 rounded-md  text-lg hover:bg-primary transition-colors duration-300">
          Apply Here
        </Link> */}
      </div>
    </section>
  );
}
