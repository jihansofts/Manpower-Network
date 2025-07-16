import React from "react";
import Image from "next/image";
export default function SkilledTalent() {
  const skills = [
    { name: "Creative Design", percentage: 80 },
    { name: "Product Engineering", percentage: 60 },
    { name: "Support & Tips", percentage: 60 },
    { name: "Marketing Strategy", percentage: 75 },
    { name: "Recruitment", percentage: 55 },
  ];

  return (
    <section className="bg-[#201D1F] py-20 px-4">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* grid Container */}
          <div>
            <Image
              src="/images/skilledtalent.png"
              alt="Skilled Talent"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="space-y-8">
            <div>
              {/* Main Text */}
              <h4 className="text-[18px] md:text-3xl font-bold text-primary mb-4">
                BEST SKILL
              </h4>

              {/* heading */}
              <h1 className="text-[48px] text-white font-sans font-bold">
                Empowering Businesses with Skilled Talent
              </h1>

              {/* Description */}
              <p className="text-[18px] text-start text-white font-mono mb-16 max-w-2xl mx-auto">
                Whether you&apos;re a professional seeking your next opportunity
                or a company looking to build a winning team, we are committed.
              </p>
            </div>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white text-[20px]">
                    {skill.name}
                  </span>
                  <span className="text-gray-200">{skill.percentage}%</span>
                </div>
                {/* Skill Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
