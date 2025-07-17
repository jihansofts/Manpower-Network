import React from "react";
import {
  FaSearch,
  FaChartLine,
  FaBriefcase,
  FaUsers,
  FaMoneyBillWave,
  FaCogs,
} from "react-icons/fa";

export default function WeProvide() {
  const services = [
    {
      title: "Recruitment",
      icon: <FaSearch className="text-3xl mb-4" />,
      description:
        "Nist sex visit mascehsa potenti consequat pharetra luchia. Autorii commodis ne etiam sempre sed impiant i simetri nostra malesuada luchia nec.",
    },
    {
      title: "Career Growth",
      icon: <FaChartLine className="text-3xl mb-4" />,
      description:
        "Himenaecs ad finibus velit litora id vestibulum faucibus fringilla integer adipiscing purus",
    },
    {
      title: "Gigs",
      icon: <FaBriefcase className="text-3xl mb-4" />,
      description:
        "Himenaecs ad finibus velit litora id vestibulum faucibus fringilla integer adipiscing purus",
    },
    {
      title: "HR Solutions",
      icon: <FaUsers className="text-3xl mb-4" />,
      description:
        "Himenaecs ad finibus velit litora id vestibulum faucibus fringilla integer adipiscing purus",
    },
    {
      title: "Payroll Services",
      icon: <FaMoneyBillWave className="text-3xl mb-4" />,
      description:
        "Himenaecs ad finibus velit litora id vestibulum faucibus fringilla integer adipiscing purus",
    },
    {
      title: "Workforce System",
      icon: <FaCogs className="text-3xl mb-4" />,
      description:
        "Himenaecs ad finibus velit litora id vestibulum faucibus fringilla integer adipiscing purus",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5 max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-4">
          Professional Coach
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-50 min-h-[300px] p-8 rounded-lg transition-all duration-300 hover:bg-primary hover:text-white group">
              <div className="text-primary group-hover:text-white">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold mb-3">{service.title}</h2>

              <p className="text-gray-600 group-hover:text-white flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
