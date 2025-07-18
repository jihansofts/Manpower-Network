// lib/data.ts
interface CountryType {
  id: number;
  bgImage: string;
  name: string;
  city: string;
  href: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

export const Industries = [
  {
    id: 1,
    bg: "/images/industrius",
    title: "Construction Workers",
    href: "/industries/construction-workers",
    desc: "The employment administration service for foreign workers involves managing administrative tasks related to the employment of foreign nationals by companies operating in Europe. This service is designed to help companies navigate the complexities of hiring foreign workers, ensure compliance with European immigration and labor regulations, and streamline the administrative process.",
    image: "/images/worker.png",
  },
];

export const countryData: CountryType[] = [
  {
    id: 1,
    bgImage: "/images/germany.png",
    name: "Germany",
    city: "Berlin",
    href: "/locations/germany",
    description:
      "Our Berlin office serves clients throughout Germany with innovative staffing solutions and local expertise.",
    address: "123 Business Street, Berlin, Germany",
    phone: "+49 30 1234567",
    email: "berlin@yourcompany.com",
  },
  {
    id: 2,
    bgImage: "/images/belgium.png",
    name: "Belgium",
    city: "Brussels",
    href: "/locations/belgium",
    description:
      "Our Brussels hub specializes in connecting EU-based talent with multinational organizations across Europe.",
    address: "456 EU Avenue, Brussels 1000, Belgium",
    phone: "+32 2 9876543",
    email: "brussels@yourcompany.com",
  },
  {
    id: 3,
    bgImage: "/images/america.png",
    name: "United States of America",
    city: "Austin",
    href: "/locations/america",
    description:
      "The Austin office drives our North American operations with a focus on tech talent and startup recruitment.",
    address: "789 Tech Boulevard, Austin, TX 78701, USA",
    phone: "+1 512 5550199",
    email: "austin@yourcompany.com",
  },
  {
    id: 4,
    bgImage: "/images/london.png",
    name: "United Kingdom",
    city: "London",
    href: "/locations/london",
    description:
      "Our London team provides premium recruitment services for financial and professional services sectors.",
    address: "101 Thames Street, London EC4R 1AD, UK",
    phone: "+44 20 7946 0958",
    email: "london@yourcompany.com",
  },
  {
    id: 5,
    bgImage: "/images/switzerland.png",
    name: "Switzerland",
    city: "Zug",
    href: "/locations/switzerland",
    description:
      "Specializing in executive search and fintech placements across the Swiss market and Alpine region.",
    address: "22 Bahnhofstrasse, Zug 6300, Switzerland",
    phone: "+41 41 728 3011",
    email: "zug@yourcompany.com",
  },
  {
    id: 6,
    bgImage: "/images/netherlands.png",
    name: "Netherlands",
    city: "Amsterdam",
    href: "/locations/netherlands", // Fixed the href to be specific
    description:
      "Our Amsterdam office focuses on creative industries and international tech talent placement.",
    address: "17 Canal Side, Amsterdam 1012 AB, Netherlands",
    phone: "+31 20 262 9987",
    email: "amsterdam@yourcompany.com",
  },
];
