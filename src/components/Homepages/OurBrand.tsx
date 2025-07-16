"use client";

import React from "react";

import AdsHeadline from "@/common/AdsHeadline";

const logos = [
  "/logos/luminor.png",
  "/logos/pixelforce.png",
  "/logos/vontobel.png",
  "/logos/raiffeisen.png",
  "/logos/mach.png",
  "/logos/atos.png",
  "/logos/deloitte.png",
  "/logos/accenture.png",
];

const BrandMarquee = () => {
  const doubledLogos = [...logos, ...logos]; // for infinite scroll effect

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <AdsHeadline title="Our Customers" logos={doubledLogos} />
    </section>
  );
};

export default BrandMarquee;
