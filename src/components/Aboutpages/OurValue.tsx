import React from "react";

const OurValue = () => {
  const values = [
    {
      title: "Simplicity",
      items: [
        "Communication with Respect",
        "Clear & Uncomplicated",
        "Straightforward & Honest",
      ],
    },
    {
      title: "Progress",
      items: ["Continuous Improvement", "Relish Challenges", "Solve Problems"],
    },
    {
      title: "A+ Distinction",
      items: [
        "Demanding Standards",
        "Going the extra mile",
        "Pride in what we do",
      ],
    },
  ];

  return (
    <section className="bg-[#4D4D4E] py-20">
      <div className="container mx-auto px-5 max-w-7xl">
        <h2 className="lg:text-[40px] font-Inter  md:text-5xl font-bold text-white mb-4 inline-block border-b-4 border-primary pb-2">
          Our Values.
        </h2>
        <p className="text-lg text-white font-normal mb-12 leading-relaxed">
          Our 5GI values are at the centre of everything we do. Simplicity,
          progress, and distinction are intrinsic values that we hold ourselves
          to every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-[#3A3A3A] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {value.title}
              </h3>
              <ul className="space-y-3">
                {value.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValue;
