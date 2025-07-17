import React from "react";
import Image from "next/image";
export default function Empowering() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Top Row with Image and Text */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/Empowering1.png" // Replace with your image path
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-[18px] font-Inter md:text-3xl font-bold text-primary mb-4">
              ABOUT US
            </h4>
            <h1 className="text-[48px] text-heading font-Inter font-bold">
              Empowering Businesses and Careers Since 2001
            </h1>
            <p className="text-lg font-Inter text-text font-normal mb-6 leading-relaxed">
              We are more than just a staffing agency - we are a bridge
              connecting talented professionals with businesses that value their
              skills.
            </p>
          </div>
        </div>

        {/* Bottom Row with Text and Image (reversed) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/Empowering2.png" // Replace with your image path
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </div>

          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-[24px]  text-heading font-Inter font-bold mb-3">
              Committed to Connecting with Opportunity
            </h4>
            <p className="text-lg font-Inter text-text font-normal mb-8 leading-relaxed">
              We believe in the power of people. Our mission is to match top
              talent with organizations where they can thrive.
            </p>

            <h4 className="text-[24px]  text-heading font-bold font-Inter mb-4">
              A Legacy of Excellence in Staffing Solutions
            </h4>
            <p className="text-lg font-Inter font-normal text-gray-600 leading-relaxed">
              With years of experience, we&apos;ve built a reputation for
              providing reliable, customized staffing services that drive
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
