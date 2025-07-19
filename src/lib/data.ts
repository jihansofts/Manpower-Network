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
  href: string;
  sections: IndustrySection[];
}

export const Industries: Industry[] = [
  {
    id: 1,
    bg: "/images/Construction Workers.jpg",
    title: "Construction Workers",
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
    bg: "/images/cleaning-bg.jpg",
    title: "Cleaning Staff",
    href: "/industries/cleaning-staff",
    sections: [
      {
        title: "Service Scope",
        desc: "We supply cleaning professionals for commercial, industrial, and residential spaces across Europe.",
        image: "/images/cleaner1.png",
      },
      {
        title: "Training & Safety",
        desc: "Workers are trained to follow hygiene protocols, operate machinery, and use safe chemicals.",
        image: "/images/cleaner2.png",
      },
    ],
  },
  {
    id: 3,
    bg: "/images/agriculture-bg.jpg",
    title: "Agricultural Workers",
    href: "/industries/agricultural-workers",
    sections: [
      {
        title: "Seasonal Workforce",
        desc: "Our agency provides reliable seasonal labor for farms, greenhouses, and harvesting operations.",
        image: "/images/agriculture1.png",
      },
      {
        title: "Sustainable Practices",
        desc: "We ensure eco-friendly approaches, fair wages, and proper working conditions.",
        image: "/images/agriculture2.png",
      },
    ],
  },
  {
    id: 4,
    bg: "/images/hospitality-bg.jpg",
    title: "Hospitality Staff",
    href: "/industries/hospitality-staff",
    sections: [
      {
        title: "Hotels & Resorts",
        desc: "We provide trained staff for housekeeping, front desk, and room service departments.",
        image: "/images/hospitality1.png",
      },
      {
        title: "Guest Experience",
        desc: "Employees are trained in guest interaction, cultural sensitivity, and multi-language support.",
        image: "/images/hospitality2.png",
      },
    ],
  },
  {
    id: 5,
    bg: "/images/warehouse-bg.jpg",
    title: "Warehouse Workers",
    href: "/industries/warehouse-workers",
    sections: [
      {
        title: "Logistics Support",
        desc: "We connect clients with skilled pickers, packers, forklift operators, and inventory staff.",
        image: "/images/warehouse1.png",
      },
      {
        title: "Efficiency & Safety",
        desc: "Staff follows safety regulations and uses warehouse technology for efficient operations.",
        image: "/images/warehouse2.png",
      },
    ],
  },
  {
    id: 6,
    bg: "/images/transport-bg.jpg",
    title: "Drivers & Delivery",
    href: "/industries/drivers-delivery",
    sections: [
      {
        title: "Transport Operations",
        desc: "We provide licensed drivers for logistics companies, public transport, and delivery services.",
        image: "/images/driver1.png",
      },
      {
        title: "Reliability & Compliance",
        desc: "Drivers are vetted for road safety, punctuality, and route optimization knowledge.",
        image: "/images/driver2.png",
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
