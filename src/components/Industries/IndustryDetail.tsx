import Layout from "@/components/layout";
import { Industries } from "@/lib/data";
import Image from "next/image";

interface Props {
  industry: (typeof Industries)[number];
}

export default function IndustryDetail({ industry }: Props) {
  return (
    <Layout>
      <section className="bg-[#201D1F] py-20">
        <div className="max-w-6xl mx-auto px-4 py-16 space-y-16 ">
          <h1 className="text-4xl text-white font-Inter font-bold text-center">
            {industry.title}
          </h1>

          {industry.sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8`}>
              <Image
                src={section.image}
                alt={section.title}
                width={500}
                height={300}
                className="w-full md:w-1/2 h-auto rounded-xl shadow-lg"
              />
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-Inter text-[#F8F8F8] font-semibold mb-4">
                  {section.title}
                </h2>
                <p className="text-white text-[16px] font-normal">
                  {section.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
