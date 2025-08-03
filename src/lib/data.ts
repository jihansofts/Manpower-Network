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
    bg: "/images/Construcitonbg.jpg",
    title: "Construction Workers",
    shortdesc:
      "We supply skilled labor for commercial and residential construction projects across Europe. Our workforce includes trained professionals capable of handling everything from groundwork to finishing work, ensuring on-time delivery and adherence to European safety standards.",
    href: "/industries/construction",
    sections: [
      {
        title: "Skilled Workforce",
        desc: "We connect clients with experienced masons, carpenters, electricians, and general laborers who are well-versed in modern construction practices. Our workers are trained to meet the high standards required in both residential and commercial building sites across Europe, ensuring durability and efficiency in all aspects of the job.",
        image: "/images/construciton1.jpg",
      },
      {
        title: "Compliance & Process",
        desc: "We manage every aspect of legal compliance, including work permits, labor laws, and health and safety regulations. Our team ensures that all workers meet immigration requirements and that operations follow European labor standards. This guarantees a smooth process from recruitment to site deployment.",
        image: "/images/construciton2.jpg",
      },
      {
        title: "Project Management",
        desc: "From initial planning to final delivery, we provide comprehensive project management support. Our supervisors coordinate tasks, manage timelines, and ensure that safety protocols are strictly followed. With our hands-on approach, clients can rely on us to deliver high-quality construction outcomes on time and within budget.",
        image: "/images/construciton3.jpg",
      },
    ],
  },
  {
    id: 2,
    bg: "/images/cleaningbanner.jpg",
    title: "Cleaning",
    shortdesc:
      "We offer trained cleaning staff for residential, commercial, and industrial sectors.",
    href: "/industries/cleaning",
    sections: [
      {
        title: "Service Scope",
        desc: "Our cleaning teams serve homes, offices, hotels, and industrial spaces.",
        image: "/images/cleaning1.jpg",
      },
      {
        title: "Training & Hygiene",
        desc: "Workers follow international hygiene standards and protocols.",
        image: "/images/cleaning2.jpg",
      },
      {
        title: "Safety & Compliance",
        desc: "We ensure compliance with labor laws and health and safety regulations.",
        image: "/images/cleaning3.jpg",
      },
    ],
  },
  {
    id: 3,
    bg: "/images/Hotel, Restaurant bg.jpg",
    title: "Hotel & Restaurant",
    shortdesc:
      "We provide front desk, housekeeping, culinary, and serving staff for hospitality businesses.",
    href: "/industries/hotel-restaurant",
    sections: [
      {
        title: "Experienced Experts",
        desc: "From chefs to waiters, we provide experienced hotel and restaurant staff.",
        image: "/images/Hotel, Restaurant 1.jpg",
      },
      {
        title: "Guest Satisfaction",
        desc: "Employees are trained in cultural etiquette, multilingual communication, and guest experience.",
        image: "/images/Hotel, Restaurant 2.jpg",
      },
      {
        title: "Safety & Compliance",
        desc: "We ensure compliance with labor laws and health and safety regulations.",
        image: "/images/Hotel, Restaurant 3.jpg",
      },
    ],
  },
  {
    id: 4,
    bg: "/images/wood and furniture bg.jpg",
    title: "Wood & Furniture",
    shortdesc:
      "We offer skilled woodworkers and furniture manufacturers for industrial and custom projects.",
    href: "/industries/wood-furniture",
    sections: [
      {
        title: "Craftsmanship",
        desc: "Experienced carpenters, polishers, and joiners for high-quality output.",
        image: "/images/wood and furniture 1.jpg",
      },
      {
        title: "Factory Setup",
        desc: "Staff trained for both manual and machine-based furniture production.",
        image: "/images/wood and furniture 2.jpg",
      },
      {
        title: "Safety & Compliance",
        desc: "We ensure compliance with labor laws and health and safety regulations.",
        image: "/images/wood and furniture 3.jpg",
      },
    ],
  },
  {
    id: 5,
    bg: "/images/tourismbanner.jpg",
    title: "Hospitality & Tourism",
    shortdesc:
      "Tour guides, travel agents, and tourism support personnel to enhance customer experience.",
    href: "/industries/hospitality-tourism",
    sections: [
      {
        title: "Travel Professionals",
        desc: "Licensed guides, multilingual agents, and cultural liaisons for tourism operations.",
        image: "/images/tourism1.jpg",
      },
      {
        title: "Destination Management",
        desc: "Support staff for hotel bookings, excursions, and guest handling.",
        image: "/images/tourism2.jpg",
      },
    ],
  },
  {
    id: 6,
    bg: "/images/livestockbanner.jpg",
    title: "Livestock & Dairy",
    shortdesc:
      "Providing skilled labor for farms, dairies, and livestock operations across Europe.",
    href: "/industries/livestock-dairy",
    sections: [
      {
        title: "Farm Workforce",
        desc: "Our workers assist in milking, feeding, and managing livestock.",
        image: "/images/livestock1.jpg",
      },
      {
        title: "Sustainable Practices",
        desc: "Support for animal welfare and organic farming standards.",
        image: "/images/livestock2.jpg",
      },
    ],
  },
  {
    id: 7,
    bg: "/images/logisticsbanner.jpg",
    title: "Logistics, Transport & Automobile",
    shortdesc:
      "Drivers, warehouse staff, and automotive technicians for supply chain and transport needs.",
    href: "/industries/logistics-transport",
    sections: [
      {
        title: "Fleet Management",
        desc: "We provide licensed drivers and logistics coordinators.",
        image: "/images/transport1.jpg",
      },
      {
        title: "Warehouse & Mechanics",
        desc: "Pickers, packers, and technicians for automotive repair and maintenance.",
        image: "/images/warehouse2.jpg",
      },
    ],
  },
  {
    id: 8,
    bg: "/images/manufacturingbanner.jpg",
    title: "Manufacturing & Factory & Warehouse",
    shortdesc:
      "Reliable workforce for industrial production, packaging, and storage operations.",
    href: "/industries/manufacturing-factory",
    sections: [
      {
        title: "Factory Labor",
        desc: "From assembly lines to machine operations, we supply trained factory staff.",
        image: "/images/factory1.jpg",
      },
      {
        title: "Warehouse Operations",
        desc: "Skilled workers in inventory handling, forklift operations, and logistics support.",
        image: "/images/factory2.jpg",
      },
    ],
  },
  {
    id: 9,
    bg: "/images/healthcarebanner.jpg",
    title: "Healthcare or Wellness",
    shortdesc:
      "Healthcare assistants, caregivers, and wellness staff for clinics and homes.",
    href: "/industries/healthcare-wellness",
    sections: [
      {
        title: "Medical Support",
        desc: "Trained nurses, aides, and physiotherapists for patient care.",
        image: "/images/healthcare1.jpg",
      },
      {
        title: "Wellness Services",
        desc: "Massage therapists, yoga instructors, and holistic care providers.",
        image: "/images/healthcare2.jpg",
      },
    ],
  },
  {
    id: 10,
    bg: "/images/textilebanner.jpg",
    title: "Textile & Garments",
    shortdesc:
      "Tailors, sewing machine operators, and quality control staff for garment production.",
    href: "/industries/textile-garments",
    sections: [
      {
        title: "Production Support",
        desc: "Skilled labor in stitching, cutting, and assembling garments.",
        image: "/images/garments1.jpg",
      },
      {
        title: "Export & QC",
        desc: "Staff experienced in export procedures and quality assurance.",
        image: "/images/garments2.jpg",
      },
    ],
  },
  {
    id: 11,
    bg: "/images/shipyardbanner.jpg",
    title: "Shipyard",
    shortdesc:
      "We supply shipbuilders, welders, painters, and marine technicians for dockyard operations.",
    href: "/industries/shipyard",
    sections: [
      {
        title: "Marine Workforce",
        desc: "Our skilled teams handle ship repair, painting, welding, and electrical work.",
        image: "/images/shipyard1.jpg",
      },
      {
        title: "Safety & Compliance",
        desc: "All workers are trained in marine safety protocols and compliance requirements.",
        image: "/images/shipyard2.jpg",
      },
    ],
  },
];

// export const Industries: Industry[] = [
//   {
//     id: 1,
//     bg: "/images/Constructionbanner.jpg",
//     title: "Construction Workers",
//     shortdesc:
//       "We assist companies in managing foreign worker employment admin tasks in Europe.",
//     href: "/industries/construction-workers",
//     sections: [
//       {
//         title: "Overview",
//         desc: "We assist companies in managing foreign worker employment admin tasks in Europe.",
//         image: "/images/Construction Workers.jpg",
//       },
//       {
//         title: "Compliance & Process",
//         desc: "Ensures all legal, immigration, and labor compliance is handled efficiently.",
//         image: "/images/Construction Workers.jpg",
//       },
//     ],
//   },
//   {
//     id: 2,
//     bg: "/images/cleaningbanner.jpg",
//     title: "Cleaning Staff",
//     shortdesc:
//       "We supply cleaning professionals for commercial, industrial, and residential spaces across Europe.",
//     href: "/industries/cleaning-staff",
//     sections: [
//       {
//         title: "Service Scope",
//         desc: "We supply cleaning professionals for commercial, industrial, and residential spaces across Europe.",
//         image: "/images/cleaning1.jpg",
//       },
//       {
//         title: "Training & Safety",
//         desc: "Workers are trained to follow hygiene protocols, operate machinery, and use safe chemicals.",
//         image: "/images/cleaning2.jpg",
//       },
//       {
//         title: "Compliance & Process",
//         desc: "Ensures all legal, immigration, and labor compliance is handled efficiently.",
//         image: "/images/cleaning3.jpg",
//       },
//     ],
//   },
//   {
//     id: 3,
//     bg: "/images/seasonalbanner.jpg",
//     title: "Agricultural Workers",
//     shortdesc:
//       "Our agency provides reliable seasonal labor for farms, greenhouses, and harvesting operations.",
//     href: "/industries/agricultural-workers",
//     sections: [
//       {
//         title: "Seasonal Workforce",
//         desc: "Our agency provides reliable seasonal labor for farms, greenhouses, and harvesting operations.",
//         image: "/images/seasonal1",
//       },
//       {
//         title: "Sustainable Practices",
//         desc: "We ensure eco-friendly approaches, fair wages, and proper working conditions.",
//         image: "/images/seasonal2",
//       },
//       {
//         title: "Compliance & Compliance",
//         desc: "Ensures all legal, immigration, and labor compliance is handled efficiently.",
//         image: "/images/seasonal3",
//       },
//     ],
//   },
//   {
//     id: 4,
//     bg: "/images/hotelsbanner.jpg",
//     title: "Hotel Workers",
//     shortdesc:
//       "We provide trained staff for housekeeping, front desk, and room service departments.",
//     href: "/industries/hospitality-staff",
//     sections: [
//       {
//         title: "Hotels & Resorts",
//         desc: "We provide trained staff for housekeeping, front desk, and room service departments.",
//         image: "/images/hotels1.jpg",
//       },
//       {
//         title: "Guest Experience",
//         desc: "Employees are trained in guest interaction, cultural sensitivity, and multi-language support.",
//         image: "/images/hotels2.jpg",
//       },
//       {
//         title: "Compliance & Compliance",
//         desc: "Ensures all legal, immigration, and labor compliance is handled efficiently.",
//         image: "/images/hotels3.jpg",
//       },
//     ],
//   },
//   {
//     id: 5,
//     bg: "/images/warehousebanner.jpg",
//     title: "Warehouse Workers",
//     shortdesc:
//       "We connect clients with skilled pickers, packers, forklift operators, and inventory staff.",
//     href: "/industries/warehouse-workers",
//     sections: [
//       {
//         title: "Logistics Support",
//         desc: "We connect clients with skilled pickers, packers, forklift operators, and inventory staff.",
//         image: "/images/warehouse1.jpg",
//       },
//       {
//         title: "Efficiency & Safety",
//         desc: "Staff follows safety regulations and uses warehouse technology for efficient operations.",
//         image: "/images/warehouse2.jpg",
//       },
//       {
//         title: "Compliance & Compliance",
//         desc: "Ensures all legal, immigration, and labor compliance is handled efficiently.",
//         image: "/images/warehouse3.jpg",
//       },
//     ],
//   },
//   {
//     id: 6,
//     bg: "/images/drivingbanner.jpg",
//     title: "Drivers & Delivery",
//     shortdesc:
//       "We provide licensed drivers for logistics companies, public transport, and delivery services.",
//     href: "/industries/drivers-delivery",
//     sections: [
//       {
//         title: "Transport Operations",
//         desc: "We provide licensed drivers for logistics companies, public transport, and delivery services.",
//         image: "/images/driving1.jpg",
//       },
//       {
//         title: "Reliability & Compliance",
//         desc: "Drivers are vetted for road safety, punctuality, and route optimization knowledge.",
//         image: "/images/driving2.jpg",
//       },
//       {
//         title: "Safety & Compliance",
//         desc: "Drivers are trained in safety protocols, road rules, and compliance with regulations.",
//         image: "/images/driving3.jpg",
//       },
//     ],
//   },
// ];

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
