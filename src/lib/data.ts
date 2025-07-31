export interface CountryType {
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
export interface IndustrySection {
  title: string;
  desc: string;
  image: string;
}

export interface Industry {
  id: number;
  bg: string;
  title: string;
  shortdesc: string;
  href: string;
  sections: IndustrySection[];
}

export const Industries: Industry[] = [
  {
    id: 1,
    bg: "/images/Constructionbanner.jpg",
    title: "Construction Workers",
    shortdesc:
      "We assist companies in managing foreign worker employment admin tasks in Europe.",
    href: "/industries/construction-workers",
    sections: [
      {
        title: "Overview",
        desc: "We assist companies in managing foreign worker employment admin tasks in Europe.",
        image: "/images/Construction Workers.jpg",
      },
      {
        title: "Compliance & Process",
        desc: "Ensures all legal, immigration, and labor compliance is handled efficiently.",
        image: "/images/Construction Workers.jpg",
      },
    ],
  },
  {
    id: 2,
    bg: "/images/cleaningbanner.jpg",
    title: "Cleaning Staff",
    shortdesc:
      "We supply cleaning professionals for commercial, industrial, and residential spaces across Europe.",
    href: "/industries/cleaning-staff",
    sections: [
      {
        title: "Service Scope",
        desc: "We supply cleaning professionals for commercial, industrial, and residential spaces across Europe.",
        image: "/images/cleaning1.jpg",
      },
      {
        title: "Training & Safety",
        desc: "Workers are trained to follow hygiene protocols, operate machinery, and use safe chemicals.",
        image: "/images/cleaning2.jpg",
      },
      {
        title: "Compliance & Process",
        desc: "Ensures all legal, immigration, and labor compliance is handled efficiently.",
        image: "/images/cleaning3.jpg",
      },
    ],
  },
  {
    id: 3,
    bg: "/images/seasonalbanner.jpg",
    title: "Agricultural Workers",
    shortdesc:
      "Our agency provides reliable seasonal labor for farms, greenhouses, and harvesting operations.",
    href: "/industries/agricultural-workers",
    sections: [
      {
        title: "Seasonal Workforce",
        desc: "Our agency provides reliable seasonal labor for farms, greenhouses, and harvesting operations.",
        image: "/images/seasonal1",
      },
      {
        title: "Sustainable Practices",
        desc: "We ensure eco-friendly approaches, fair wages, and proper working conditions.",
        image: "/images/seasonal2",
      },
      {
        title: "Compliance & Compliance",
        desc: "Ensures all legal, immigration, and labor compliance is handled efficiently.",
        image: "/images/seasonal3",
      },
    ],
  },
  {
    id: 4,
    bg: "/images/hotelsbanner.jpg",
    title: "Hotel Workers",
    shortdesc:
      "We provide trained staff for housekeeping, front desk, and room service departments.",
    href: "/industries/hospitality-staff",
    sections: [
      {
        title: "Hotels & Resorts",
        desc: "We provide trained staff for housekeeping, front desk, and room service departments.",
        image: "/images/hotels1.jpg",
      },
      {
        title: "Guest Experience",
        desc: "Employees are trained in guest interaction, cultural sensitivity, and multi-language support.",
        image: "/images/hotels2.jpg",
      },
      {
        title: "Compliance & Compliance",
        desc: "Ensures all legal, immigration, and labor compliance is handled efficiently.",
        image: "/images/hotels3.jpg",
      },
    ],
  },
  {
    id: 5,
    bg: "/images/warehousebanner.jpg",
    title: "Warehouse Workers",
    shortdesc:
      "We connect clients with skilled pickers, packers, forklift operators, and inventory staff.",
    href: "/industries/warehouse-workers",
    sections: [
      {
        title: "Logistics Support",
        desc: "We connect clients with skilled pickers, packers, forklift operators, and inventory staff.",
        image: "/images/warehouse1.jpg",
      },
      {
        title: "Efficiency & Safety",
        desc: "Staff follows safety regulations and uses warehouse technology for efficient operations.",
        image: "/images/warehouse2.jpg",
      },
      {
        title: "Compliance & Compliance",
        desc: "Ensures all legal, immigration, and labor compliance is handled efficiently.",
        image: "/images/warehouse3.jpg",
      },
    ],
  },
  {
    id: 6,
    bg: "/images/drivingbanner.jpg",
    title: "Drivers & Delivery",
    shortdesc:
      "We provide licensed drivers for logistics companies, public transport, and delivery services.",
    href: "/industries/drivers-delivery",
    sections: [
      {
        title: "Transport Operations",
        desc: "We provide licensed drivers for logistics companies, public transport, and delivery services.",
        image: "/images/driving1.jpg",
      },
      {
        title: "Reliability & Compliance",
        desc: "Drivers are vetted for road safety, punctuality, and route optimization knowledge.",
        image: "/images/driving2.jpg",
      },
      {
        title: "Safety & Compliance",
        desc: "Drivers are trained in safety protocols, road rules, and compliance with regulations.",
        image: "/images/driving3.jpg",
      },
    ],
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
