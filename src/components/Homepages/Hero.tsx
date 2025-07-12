import React from "react";

export default function Hero() {
  return (
    <div className=" w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dtw7qhd69/video/upload/v1752155230/0710_hmo7ox.mp4"
        autoPlay
        muted
        loop
        playsInline></video>

      {/* Overlay Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-10 z-10">
        <h1 className="text-white lg:text-[80px] md:text-[40px] text-[24px] font-medium">
          Uniting Talent With Opportunity
        </h1>
        <p className="text-white lg:text-[20px] md:text-[16px] text-[12px] mt-4">
          Discover top talent, ideal positions, and innovative strategies to
          thrive.
        </p>
        <div>
          <button className="bg-white text-primary hover:bg-primary hover:text-white cursor-pointer duration-200 uppercase px-10 py-3 font-semibold lg:text-[16px] text-[10px] sm:text-[12px] rounded font-sans mt-5">
            Talk to Our Experts
          </button>
        </div>
      </div>

      {/* Optional: Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 bg-opacity-50 z-0"></div>
    </div>
  );
}
