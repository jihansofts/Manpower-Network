"use client";

import React from "react";

import AdsHeadline from "@/common/AdsHeadline";

const logos = [
  "/images/worker1.jpg",
  "/images/worker2.jpg",
  "/images/worker3.jpg",
  "/images/worker4.jpg",
  "/images/worker5.jpg",
  "/images/worker6.jpg",
  "/images/worker7.jpg",
  "/images/worker8.jpg",
  "/images/worker9.jpg",
  "/images/worker10.jpg",
  "/images/worker11.jpg",
  "/images/worker12.jpg",
  "/images/worker13.jpg",
];

const BrandMarquee = () => {
  const doubledLogos = [...logos]; // for infinite scroll effect

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <AdsHeadline title="Our Customers" logos={doubledLogos} />
    </section>
  );
};

export default BrandMarquee;
