import React from "react";
import Image from "next/image";

export default function OurIndustries() {
  const industries = [
    {
      title: "Healthcare Industries",
      description:
        "Caring for Communities: Delivering Top Talent to the Healthcare Sector",
      image: "/images/Industries1.png",
      bgColor: "#CAE2FF", // Light blue
    },
    {
      title: "Oil and Gas Industries",
      description:
        "The oil and gas industry has been a cornerstone of global energy supply",
      image: "/images/Industries2.png",
      bgColor: "#FFD6C2", // Light orange
    },
    {
      title: "Manufacturing Industries",
      description:
        "The manufacturing industry drives innovation and growth in the world",
      image: "/images/Industries3.png",
      bgColor: "#FFD6C2", // Light orange
    },
    {
      title: "Retail Industries",
      description:
        "The retail industry drives innovation and growth in the world",
      image: "/images/Industries4.png",
      bgColor: "#E1EFC3", // Light blue
    },
  ];

  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 mb-2">Our Industries</p>
          <h2 className="text-[24px] md:text-[48px] sm:text-[32px] font-medium text-heading ">
            Powering Growth Across <br /> Industries
          </h2>
        </div>

        {/* Industries Grid */}

        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Flex container for image + content */}
              <div className="flex flex-col md:flex-row min-h-[400px]">
                {/* Image on left - md:w-2/5 for 40% width */}
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>

                {/* Content on right - md:w-3/5 for 60% width */}
                <div
                  className="md:w-3/5 p-8  flex flex-col justify-center"
                  style={{ backgroundColor: industry.bgColor }}>
                  <h3 className="text-2xl md:text-[20px] font-bold text-heading mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-text mb-6 text-[14px]">
                    {industry.description}
                  </p>
                  <button className="text-primary text-[16px] font-bold hover:underline self-start">
                    View More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <button className="text-heading cursor-pointer mt-10  font-bold border border-primary py-3 px-7 hover:bg-primary hover:text-white transition-colors duration-300">
            View All Industries
          </button>
        </div>
      </div>
    </section>
  );
}
