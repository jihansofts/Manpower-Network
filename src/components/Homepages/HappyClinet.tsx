import React from "react";
import Image from "next/image";
const img = [
  "/images/brand1.png",
  "/images/brand2.png",
  "/images/brand3.png",
  "/images/brand4.png",
  "/images/brand5.png",
  "/images/brand6.png",
  "/images/brand7.png",
  "/images/brand8.png",
  "/images/brand9.png",
  "/images/brand10.png",
];
export default function HappyClinet() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-5">
        <div className="flex justify-between ">
          <h2 className="text-primary text-start lg:text-[42px] md:text-[32px] text-[24px] font-medium mb-10">
            100+ Happy Clients
          </h2>
          <div>
            <button className="text-heading cursor-pointer  font-bold border border-primary py-3 px-7 hover:bg-primary hover:text-white transition-colors duration-300">
              View More →
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {img.map((item, i) => {
            return (
              <div
                className="flex border border-primary justify-center items-center min-h-[200px]"
                key={i}>
                <Image src={item} alt="image" width={100} height={100} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
