import React from "react";
import Image from "next/image";
import { LuUserSearch } from "react-icons/lu";
import { BiSolidUserDetail } from "react-icons/bi";
import { GrIntegration } from "react-icons/gr";
import { TbArrowLeftRight } from "react-icons/tb";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import Link from "next/link";
import AdsHeadline from "@/common/AdsHeadline";
const selection = [
  {
    icons: <LuUserSearch className="text-2xl text-white" />,
    title: "Search and selection of workers",
    desc: "Our task is to identify, attract and evaluate the best candidates.",
  },
  {
    icons: <BiSolidUserDetail className="text-2xl text-white" />,
    title: "Residence and work permits",
    desc: "We provide all necessary permits for legal residence and work in the country",
  },
  {
    icons: <GrIntegration className="text-2xl text-white" />,
    title: "Integration of workers",
    desc: "We help in the integration of workers into Croatian society and the labor market.",
  },
];
const Business = [
  {
    icons: <TbArrowLeftRight className="text-2xl text-white" />,
    title: "Business flexibility",
    desc: "Optimize human resources according to current needs.",
  },
  {
    icons: <AiTwotoneSafetyCertificate className="text-2xl text-white" />,
    title: "Legal certainty",
    desc: "Reduce the risk of legal complications. We ensure full compliance with legal regulations.",
  },
  {
    icons: <HiOutlineDocumentReport className="text-2xl text-white" />,
    title: "Payroll calculation",
    desc: "Professional and high-quality care of the entire payroll process and frequent changes in regulations.",
  },
];

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
export default function Recruitment() {
  return (
    <section className="py-20 bg-[#2D2D2D]">
      <div className="container max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center space-y-10">
            <h2 className="text-[48px] text-white font-Inter font-bold">
              Recruitment & administration
            </h2>
            <p className="text-[16px] text-white font-Inter font-normal">
              We carry out a number of activities, from advertising vacancies on
              a global level, through guiding the process of obtaining the
              necessary work permits and visas, to helping in the integration of
              workers into Croatian society and the labor market.
            </p>
            <div className="max-w-2xl">
              <Link
                href="/contact"
                className="bg-white font-Inter max-w-2xl font-bold text-[#201D1F] px-8 py-3 rounded-md  text-[16px] hover:bg-primary transition-colors duration-300">
                Lets Start Your Story
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/images/Recruitment.png"
              alt="Recruitment"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:mt-10 md:mt-5 mt-4 md:grid-cols-3 gap-8">
          {selection.map((item, index) => (
            <div
              key={index}
              className="border border-primary rounded-3xl p-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-primary rounded-full">{item.icons}</div>
                <h3 className="text-[24px] text-white font-Inter font-bold">
                  {item.title}
                </h3>
              </div>
              <p className="text-[16px] text-white font-Inter font-normal">
                {item.desc}
              </p>
              {/* <Link
                href="/contact"
                className="bg-white font-Inter font-bold text-[#201D1F] px-5 py-2 rounded-md  text-lg hover:bg-primary transition-colors duration-300">
                Apply Here
              </Link> */}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:mt-16 md:mt-5 mt-4 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/Recruitment1.png"
              alt="Recruitment"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center space-y-10">
            <h2 className="text-[48px] text-white font-Inter font-bold">
              Temporary staffing
            </h2>
            <p className="text-[16px] text-white font-Inter font-normal">
              This model allows you to quickly adapt to changing market
              challenges, improving competitiveness and efficiency. Hire a
              fixed-term employee for increased labor needs and leave the
              responsibility of payroll and compliance to legal regulations to
              us.
            </p>
            <div className="max-w-2xl">
              <Link
                href="/contact"
                className="bg-white font-Inter max-w-2xl font-bold text-[#201D1F] px-8 py-3 rounded-md  text-[16px] hover:bg-primary transition-colors duration-300">
                Lets Start Your Story
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:mt-10 md:mt-5 mt-4 md:grid-cols-3 gap-8">
          {Business.map((item, index) => (
            <div
              key={index}
              className="border border-primary rounded-3xl p-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-primary rounded-full">{item.icons}</div>
                <h3 className="text-[24px] text-white font-Inter font-bold">
                  {item.title}
                </h3>
              </div>
              <p className="text-[16px] text-white font-Inter font-normal">
                {item.desc}
              </p>
              {/* <Link
                href="/contact"
                className="bg-white font-Inter font-bold text-[#201D1F] px-5 py-2 rounded-md  text-lg hover:bg-primary transition-colors duration-300">
                Apply Here
              </Link> */}
            </div>
          ))}
        </div>
      </div>
      <AdsHeadline
        title="Workers"
        titleClassName="text-white"
        logos={logos}
        logoWidth={300}
        fadeWidth={120}
        className="mt-10"
      />
    </section>
  );
}
