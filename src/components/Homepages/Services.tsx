import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Service {
  title: string;
  image: string;
  description: string;
  link: string;
}
export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const services: Service[] = [
    {
      title: "Payroll and HRO Services",
      image: "/images/service1.png",
      description:
        "Payroll and Human Resources Outsourcing (HRO) services streamline the complicated of payroll processing and HR management. At All Seven Global, we ensure timely and compliant payroll displacements, manage regulatory requirements and offer end-to-end HR solutions so businesses can focus on growth. We manage the complete operations for your employees on your behalf.",
      link: "View More →",
    },
    {
      title: "Contract Staffing",
      image: "/images/service2.png",
      description:
        "Contract Staffing is a dynamic workforce solution ensuring businesses to bring on skilled professionals for short-term or project-specific needs. Our service helps companies meet temporary staffing requirements, manage seasonal fluctuations, and execute specialised projects without long-term commitments.",
      link: "View More →",
    },
    {
      title: "Recruitment Process Outsourcing",
      image: "/images/service3.png",
      description:
        "Our RPO solutions provide comprehensive talent acquisition services, from candidate sourcing to onboarding. We leverage advanced technologies and industry expertise to deliver quality hires while reducing your time-to-fill and recruitment costs.",
      link: "View More →",
    },
    {
      title: "Managed Services",
      image: "/images/service4.png",
      description:
        "End-to-end workforce management solutions that combine technology, processes, and expertise. We handle everything from vendor management to compliance, giving you complete visibility and control over your contingent workforce.",
      link: "View More →",
    },
    {
      title: "Executive Search",
      image: "/images/service5.png",
      description:
        "Specialized recruitment for C-level and senior management positions. Our executive search team combines market intelligence with discreet, targeted search methodologies to identify and attract top-tier leadership talent.",
      link: "View More →",
    },
    {
      title: "Talent Development",
      image: "/images/service6.png",
      description:
        "Comprehensive training and development programs designed to upskill your workforce. From technical training to leadership development, we create customized learning paths that drive employee engagement and business growth.",
      link: "View More →",
    },
    {
      title: "HR Technology Solutions",
      image: "/images/service7.png",
      description:
        "Implementation and optimization of cutting-edge HR technologies including HRIS, ATS, and workforce analytics platforms. We help you leverage technology to streamline HR processes and gain data-driven insights.",
      link: "View More →",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Pin only on desktop
      if (leftContentRef.current && sectionRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: leftContentRef.current,
          pinSpacing: false,
        });
      }
      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    // Animate service items for all devices
    gsap.utils.toArray(".service-item").forEach((item, i) => {
      const el = item as Element;
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      mm.kill(); // Clean up matchMedia
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden  bg-white py-20">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row">
        {/* Fixed Left Content */}
        <div
          ref={leftContentRef}
          className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Our Services
          </h2>
          <p className="text-xl text-heading mb-8">Explore Our Solutions</p>
          <button className="text-heading cursor-pointer  font-bold border border-primary py-3 px-7 hover:bg-primary hover:text-white transition-colors duration-300">
            View all Services →
          </button>
        </div>

        {/* Scrollable Right Content */}
        <div ref={rightContentRef} className="lg:w-2/3 space-y-16">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="flex flex-col md:flex-row gap-8 bg-[#EFF6FF] p-8">
                {/* Image Column (matches screenshot layout) */}
                <div className="md:w-1/3">
                  <div className="relative h-full w-full rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={500}
                      className="object-cover h-96"
                      quality={100}
                    />
                  </div>
                </div>

                {/* Text Content Column (matches screenshot styling) */}
                <div className="md:w-2/3">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <div className="border-t border-gray-200 pt-6">
                      <button className="text-primary font-bold hover:underline text-lg">
                        View More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
