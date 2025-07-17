import React from "react";
import Image from "next/image";
export default function OurService() {
  return (
    <section className="py-20 bg-[#201D1F]">
      <div className="container max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-Inter   md:text-5xl font-bold text-white mb-4 inline-block border-b-4 border-primary pb-2">
            Our Services
          </h2>
          <p className="text-[32px] font-Inter font-bold md:text-xl text-white/80 max-w-2xl mx-auto">
            We offer a wide range of services to help businesses find the best
            talent for their team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 justify-center items-center lg:grid-cols-2 gap-12">
          <div>
            <h4 className="text-[32px] font-Inter font-bold text-white mb-4">
              Bridge for industrial and corporate development.
            </h4>
            <p className=" text-white font-Inter font-normal mb-6">
              Donec class lacinia vel hac laoreet amet et dictumst suspendisse.
              Maximus tortor pede egestas quis facilisis est. Neque dis
              fringilla augue mollis viverra enim conubia pulvinar.
            </p>
          </div>
          <div>
            <Image
              src="/images/patner.png" // Replace with your image path
              alt="Our Team"
              width={400}
              height={400}
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
