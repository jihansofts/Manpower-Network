import HappyClinet from "@/components/Homepages/HappyClinet";
import Hero from "@/components/Homepages/Hero";
import OurIndustries from "@/components/Homepages/OurIndustries";
import OurProcess from "@/components/Homepages/OurProcess";
import Services from "@/components/Homepages/Services";
import Solutions from "@/components/Homepages/Solutions";
import Whoweare from "@/components/Homepages/Whoweare";
import WhyManpower from "@/components/Homepages/WhyManpower";
import Layout from "@/components/layout";
import { Manrope } from "next/font/google";

const geistMono = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={` ${geistMono.className}  `}>
      <Layout>
        <Hero />
        <Whoweare />
        <Solutions />
        <Services />
        <OurIndustries />
        <OurProcess />
        <HappyClinet />
        <WhyManpower/>
      </Layout>
    </div>
  );
}
